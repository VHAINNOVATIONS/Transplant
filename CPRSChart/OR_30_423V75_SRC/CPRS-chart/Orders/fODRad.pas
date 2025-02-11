unit fODRad;

interface

uses
  SysUtils, WinTypes, WinProcs, Messages, Classes, Graphics, Controls,
  Forms, Dialogs, StdCtrls, ORNet, ORCtrls, fODBase, ORFn, ExtCtrls,
  ComCtrls, uConst, ORDtTm,fODLab, VA508AccessibilityManager, VA508AccessibilityRouter;

type
  TfrmODRad = class(TfrmODBase)
    lblDrug: TLabel;
    cboProcedure: TORComboBox;
    cboAvailMod: TORComboBox;
    lblAvailMod: TLabel;
    cmdRemove: TButton;
    calRequestDate: TORDateBox;
    cboUrgency: TORComboBox;
    cboTransport: TORComboBox;
    cboCategory: TORComboBox;
    chkPreOp: TCheckBox;
    cboSubmit: TORComboBox;
    lstLastExam: TORListBox;
    lblHistory: TLabel;
    memHistory: TCaptionMemo;
    lstSelectMod: TORListBox;
    lblSelectMod: TLabel;
    lblRequestDate: TLabel;
    lblUrgency: TLabel;
    lblTransport: TLabel;
    lblCategory: TLabel;
    lblSubmit: TLabel;
    lblLastExam: TLabel;
    lblAskSubmit: TLabel;
    chkIsolation: TCheckBox;
    FRadCommonCombo: TORListBox;
    lblImType: TLabel;
    cboImType: TORComboBox;
    calPreOp: TORDateBox;
    lblPreOp: TLabel;
    pnlLeft: TORAutoPanel;
    pnlRight: TORAutoPanel;
    pnlHandR: TPanel;
    grpPregnant: TGroupBox;
    radPregnant: TRadioButton;
    radPregnantNo: TRadioButton;
    radPregnantUnknown: TRadioButton;
    lblReason: TLabel;
    txtReason: TCaptionEdit;
    pnlRightBase: TORAutoPanel;
    Submitlbl508: TVA508StaticText;
    VA508ComponentAccessibility1: TVA508ComponentAccessibility;
    VA508ComponentAccessibility2: TVA508ComponentAccessibility;
    CBXImageRemoteSites: TComboBox;
    ORImageLocation: TOROffsetLabel;
    procedure cboProcedureNeedData(Sender: TObject;
              const StartFrom: string; Direction, InsertAt: Integer);
    procedure cboAvailModMouseClick(Sender: TObject);
    procedure cmdRemoveClick(Sender: TObject);
    procedure ControlChange(Sender: TObject);
    procedure cboProcedureSelect(Sender: TObject);
    procedure SetModifierList;
    procedure cboCategoryChange(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure cboImTypeChange(Sender: TObject);
    procedure memHistoryExit(Sender: TObject);
    procedure FormResize(Sender: TObject);
    procedure cboAvailModKeyDown(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure calPreOpChange(Sender: TObject);
    procedure cmdAcceptClick(Sender: TObject);
    procedure cboProcedureExit(Sender: TObject);
    procedure cboImTypeExit(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure chkIsolationExit(Sender: TObject);
    procedure calPreOpExit(Sender: TObject);
    procedure cboImTypeDropDownClose(Sender: TObject);
    procedure pnlMessageExit(Sender: TObject);
    procedure VA508ComponentAccessibility1StateQuery(Sender: TObject;
      var Text: string);
    procedure pnlMessageMouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure CBXImageRemoteSitesDropDown(Sender: TObject);
    procedure CBXImageRemoteSitesSelect(Sender: TObject);
  private
    FLastRadID: string;
    FEditCopy: boolean;
    FPreOpDate: string;
    FEvtDelayDiv: string;
    FPredefineOrder: boolean;
    ImageTypeChanged : boolean;
    FFormFirstOpened: boolean;
    function NoPregnantSelection : Boolean;
    procedure ImageTypeChange;
    procedure FormFirstOpened(Sender: TObject);
    procedure setup508Label(text: string; lbl: TVA508StaticText; ctrl: TControl);
    function GetLocationNM: string;
    function GetRMSiteID: Integer;
    procedure SetLocationNM(const Value: string);
    procedure SetRMSiteID(const Value: Integer);
  protected
    procedure InitDialog; override;
    procedure Validate(var AnErrMsg: string); override;
    procedure SetDefaultPregant;
    procedure ImgComboBox_AutoWidth(const theComboBox: TCombobox);
    procedure AddSitestoDropdown(aRmteName: String);
  public
    strImgOrigCaption: string;
    procedure SetupDialog(OrderAction: Integer; const ID: string); override;
    property  RMLocationName: string   read GetLocationNM  write SetLocationNM;
    property  RMSiteID: Integer      read GetRMSiteID    write SetRMSiteID;
  end;

  TImgRMInfo = class(TRMInfo)
   protected
    //add protected here
    RemoteLabSiteLocations: TList;
   private
     //Declair privates
     SiteID: Integer;
     RemoteSiteName: string;
     RmteLastIndex : integer;
   public
    property SiteName : string read RemoteSiteName;
    procedure InitImageLabSiteLocationComboList;
    procedure SetStationID(SiteInfoIndex: integer);
    procedure SetSiteName(aSiteNM : String);
    function  FindLabLocationIndex(aRemoteSiteName: string):integer;

  end;

  TImgSiteInfo = class(TObject)
  protected
    //add protected here
  private
   //add private here

  public
   SiteNumber: String;
   SiteName:   String;
  end;

var
 ImgRmteName  : TImgRMInfo;

implementation

{$R *.DFM}

uses rODBase, rODRad, rOrders, uCore, rCore, fODRadApproval, fODRadConShRes, fLkUpLocation, fFrame,
  uFormMonitor, System.UITypes;

const
  TX_NO_PROC          = 'An Imaging Procedure must be specified.'    ;
  TX_NO_MODE          = 'A mode of transport must be selected.';
  TX_NO_REASON        = 'A Reason for Study must be entered.'  ;
  TX_BAD_HISTORY      = 'An incomplete or invalid Clinical History has been entered.' + CRLF +
                        'Please correct or clear.';
  TX_NO_DATE          = 'A "Date Desired" must be specified.' ;
  TX_BAD_DATE         = 'The "Date Desired" you have entered is invalid.';
  TX_PAST_DATE        = '"Date Desired" must not be in the past.';
  TX_APPROVAL_REQUIRED= 'This procedure requires Radiologist approval.' ;
  TX_NO_SOURCE        = 'A source must be specified for Contract/Sharing/Research patients.';
  TX_NO_AGREE         = 'There are no active agreements of the type specified.';
  TX_NO_AGREE_CAP     = 'No Agreements on file';
  TX_ORD_LOC          = 'Ordering location must be specified if patient type and order category do not match.';
  TC_REQ_LOC          = 'Location Required';
  TX_LOC_ORDER        = 'The selected location will be used to determine the ordering location ' +
                        'when the patient location does not match the specified category.';
  TX_NO_CATEGORY      = 'A category of examination must be specified.';
  TX_NO_IMAGING_LOCATION = 'A  "Submit To"  location must be specified.';

var
  Radiologist, Contract, Research: string ;
  AName, IsPregnant: string;
  ALocation, AType: integer;
  
{ TfrmODBase common methods }

procedure TfrmODRad.SetupDialog(OrderAction: Integer; const ID: string);
var
  tmpResp: TResponse;
  i, fndLBLocIndx: integer;
begin
  inherited;
  if OrderAction in [ORDER_COPY, ORDER_EDIT, ORDER_QUICK] then with Responses do
  begin
    if (OrderAction = ORDER_QUICK) or (OrderAction = ORDER_EDIT) or (OrderAction = ORDER_COPY) then
      FPredefineOrder := True;
    FEditCopy := True;
    Changing := True;
    with cboImType do
      begin
        FastAssign(SubsetOfImagingTypes, cboImType.Items);
        for i := 0 to Items.Count-1 do
          if StrToIntDef(Piece(Items[i],U,4), 0) = DisplayGroup then ItemIndex := i;
        if OrderAction = ORDER_EDIT then
        begin
          Enabled := False;
          Color := clBtnFace;
        end;
     end;
    if Self.EvtID>0 then
      FEvtDelayDiv := GetEventDiv1(IntToStr(Self.EvtID));
    CtrlInits.LoadDefaults(ODForRad(Patient.DFN, FEvtDelayDiv, DisplayGroup));   // ODForRad returns TStrings with defaults
    InitDialog;
    SetControl(cboProcedure,       'ORDERABLE', 1);
    Changing := True;
    SetModifierList;
    SetControl(cboUrgency,         'URGENCY', 1);
    SetControl(cboTransport,       'MODE', 1);
    SetControl(cboSubmit,          'IMLOC', 1);
    SetControl(cboCategory,        'CLASS', 1);
    SetControl(txtReason,           'REASON', 1);
    SetControl(memHistory,         'COMMENT', 1);
    SetControl(chkIsolation,       'YN', 1);
    SetControl(radPregnant,        'PREGNANT', 1);
    SetControl(calPreOp,           'PREOP', 1);
    tmpResp := FindResponseByName('START',1);
    if tmpResp <> nil then
      begin
        if ContainsAlpha(tmpResp.IValue) then
          calRequestDate.Text := tmpResp.IValue
        else
          calRequestDate.FMDateTime := StrToFMDateTime(tmpResp.IValue);
      end;
    tmpResp := FindResponseByName('PROVIDER',1);
    if tmpResp <> nil then with tmpResp do if Length(EValue)>0 then Radiologist := IValue + '^' + EValue;
    if (cboCategory.ItemID = 'C') or (cboCategory.ItemID = 'S') then
      begin
        tmpResp := FindResponseByName('CONTRACT',1);
        if tmpResp <> nil then with tmpResp do
         if Length(EValue)>0 then
          begin
            Contract := IValue + '^' + EValue;
            Research := '';
          end;
      end;
    if cboCategory.ItemID = 'R' then
      begin
        tmpResp := FindResponseByName('RESEARCH',1);
        if tmpResp <> nil then with tmpResp do
         if Length(EValue)>0 then
          begin
            Research := EValue;
            Contract := '';
          end;
      end;
    //hds00007460
    tmpResp := FindResponseByName('PREGNANT',1);
    if tmpResp <> nil then
       if Length(tmpResp.EValue)>0 then
       begin
          IsPregnant := tmpResp.EValue;
          if IsPregnant = 'YES' then
             radPregnant.Checked := True
          else
          if IsPregnant = 'NO' then
             radPregnantNo.Checked := True
          else
          if IsPregnant = 'UNKNOWN' then
             radPregnantUnknown.Checked := True;
       end;

    //mnj- RemoteSite added to
    tmpResp := FindResponseByName('Location'  ,1);  //mnj- Lab Location retrived from save
                                                   //and is resulted from RPC 'ORWDX LOADRSP'
      if (tmpResp <> nil) and (tmpResp.IValue <> '') then //with CBXLocalRemoteSites do
        begin
         fndLBLocIndx:=ImgRmteName.FindLabLocationIndex(tmpResp.IValue);
         ImgRmteName.SetStationID(fndLBLocIndx);   //mnj - MUST add one to the index found because CBXLocalRemoteSites is has a default value of "Local"
         CBXImageRemoteSites.ItemIndex:=fndLBLocIndx; // + 1;          // add to the list before remote sites are added from VISTA
         if CBXImageRemoteSites.Items.Strings[CBXImageRemoteSites.ItemIndex] <> 'LOCAL' then
           begin
            ImgRmteName.SetSiteName(CBXImageRemoteSites.Items.Strings[CBXImageRemoteSites.ItemIndex]); //mnj - 04042016 Fixed Lab Location resets to Local in Edit Orders & Order Details #87
            Caption:=strImgOrigCaption +'-'+'Remote';
            Caption:=strImgOrigCaption+'-'+CBXImageRemoteSites.Items.Strings[CBXImageRemoteSites.ItemIndex];
           end
          else
            begin
              Caption:=strImgOrigCaption +'-'+'Local';
            end;
        end;


    //hds00007460
    Changing := False;
    FEditCopy := False;
    OrderMessage(ImagingMessage(cboProcedure.ItemIEN)) ;
    ControlChange(Self);
    FPredefineOrder := False;
  end;
end;

procedure TfrmODRad.InitDialog;
var
   i: integer;
   tmplst: TStringList;
   cboSubmitText: String;
begin
  if not FEditCopy then
  begin
    inherited;
    if not ReasonForStudyCarryOn then txtReason.text := '';
  end;

  FPreOpDate := '';
  FLastRadID := '';
  Radiologist := '';
  Contract := '';
  Research := '';
  ALocation := 0;
  AName := '';
  AType := 0;
  FEvtDelayDiv := '';
  if (Self.EvtID > 0 ) and (FEvtDelayDiv = '') then
    FEvtDelayDiv := GetEventDiv1(IntToStr(Self.EvtID));
  with CtrlInits do
   begin
    SetControl(cboProcedure, 'ShortList');
    if cboProcedure.Items.Count > 0 then cboProcedure.InsertSeparator;
    SetControl(FRadCommonCombo, 'Common Procedures');
    for i := 0 to FRadCommonCombo.Items.Count-1 do
      cboProcedure.Items.Add(FRadCommonCombo.Items[i]);
    if FRadCommonCombo.Items.Count>0 then cboProcedure.InsertSeparator;

    //calRequestDate.Text := 'TODAY';     default removed per E3R #19834 - v27.10 - RV
    SetControl(cboAvailMod, 'Modifiers');
    SetControl(cboUrgency, 'Urgencies');
    SetControl(cboTransport, 'Transport');
    with cboTransport do if OrderForInpatient
      then SelectByID('W')
      else SelectByID('A');
    SetControl(cboCategory, 'Category');
    with cboCategory do if OrderForInpatient
      then SelectByID('I')
      else SelectByID('O');
    SetControl(cboSubmit, 'Submit to');
    SetControl(lblAskSubmit,'Ask Submit') ;
    if (cboSubmit.Items.Count = 0) then
      begin
        cboSubmit.ItemIndex := -1;
        lblSubmit.Enabled := False;
        cboSubmit.Enabled := False;
        //TDP - CQ#19393 cboSubmit 508 changes
        cboSubmitText := cboSubmit.Text;
        if cboSubmitText = '' then cboSubmitText := 'No Value';
        setup508Label(cboSubmitText, Submitlbl508, cboSubmit);
        cboSubmit.Font.Color := clGrayText;
      end
    else if (lblAskSubmit.Caption = 'YES') then
      begin
        if (cboSubmit.Items.Count > 1) then
          begin
            tmplst := TStringList.Create;
            try
              FastAssign(cboSubmit.Items, tmplst);
              SortByPiece(tmplst, U, 2);
              FastAssign(tmplst, cboSubmit.Items);
            finally
              tmplst.Free;
            end;
            cboSubmit.ItemIndex := -1 ;
            lblSubmit.Enabled := True;
            cboSubmit.Enabled := True;
            //TDP - CQ#19393 cboSubmit 508 changes
            cboSubmitText := cboSubmit.Text;
            if cboSubmitText = '' then cboSubmitText := 'No Value';
            setup508Label(cboSubmitText, Submitlbl508, cboSubmit);
            cboSubmit.Font.Color := clWindowText;
          end
        else
          begin
            cboSubmit.ItemIndex := 0;
            lblSubmit.Enabled := False;
            cboSubmit.Enabled := False;
            //TDP - CQ#19393 cboSubmit 508 changes
            cboSubmitText := cboSubmit.Text;
            if cboSubmitText = '' then cboSubmitText := 'No Value';
            setup508Label(cboSubmitText, Submitlbl508, cboSubmit);
            cboSubmit.Font.Color := clGrayText;
          end;
      end
    else if lblAskSubmit.Caption = 'NO' then
      begin
        if (cboSubmit.Items.Count = 1) then
          cboSubmit.ItemIndex := 0
        else
          cboSubmit.ItemIndex := -1 ;
        lblSubmit.Enabled := False;
        cboSubmit.Enabled := False;
        //TDP - CQ#19393 cboSubmit 508 changes
        cboSubmitText := cboSubmit.Text;
        if cboSubmitText = '' then cboSubmitText := 'No Value';
        setup508Label(cboSubmitText, Submitlbl508, cboSubmit);
        cboSubmit.Font.Color := clGrayText;
      end;
    chkIsolation.Checked := PatientOnIsolationProcedures(Patient.DFN) ;
    SetControl(lstLastExam, 'Last 7 Days');
   end;
  lstSelectMod.Clear;
  ControlChange(Self);
  StatusText('Initializing Long List');
  cboProcedure.InitLongList('') ;
  StatusText('');
end;

procedure TfrmODRad.ControlChange(Sender: TObject);
var
  i: integer ;
begin
  inherited;
  if Changing then Exit;
  Responses.Clear;
  with cboProcedure do
    if ItemIEN > 0 then Responses.Update('ORDERABLE', 1, ItemID, Text)
    else Responses.Update('ORDERABLE', 1, ''    , '');
  //with calRequestDate do if FMDateTime > 0 then     RPC call on EVERY character typed in REASON box!!!!  (v15)
  with calRequestDate do if Length(Text) > 0 then
    Responses.Update('START', 1, Text, Text)
    else Responses.Update('START', 1, '', '') ;
  with cboUrgency do if Length(ItemID)   > 0 then Responses.Update('URGENCY',   1, ItemID, Text);
  with cboTransport do if Length(ItemID) > 0 then Responses.Update('MODE',      1, ItemID, Text);
  with cboCategory do if Length(ItemID)  > 0 then Responses.Update('CLASS',     1, ItemID, Text);
  with cboSubmit do if Length(ItemID)    > 0 then Responses.Update('IMLOC',     1, ItemID, Text);
  with radPregnant do if Checked                then Responses.Update('PREGNANT',  1, 'Y'   , 'Yes')
                 else if not Enabled         then Responses.Update('PREGNANT',  1, ''    , '');
  with radPregnantNo do if Checked           then Responses.Update('PREGNANT',  1, 'N'   , 'No');
  with radPregnantUnknown do if Checked      then Responses.Update('PREGNANT',  1, 'U'   , 'Unknown');
  with chkIsolation do if Checked            then Responses.Update('YN',        1, '1'   , 'Yes')
                                             else Responses.Update('YN',        1, '0'   , 'No');
  with calPreOp do if Length(Text) > 0       then Responses.Update('PREOP',     1, FPreOpDate, Text);
  with txtReason  do if GetTextLen        > 0 then Responses.Update('REASON',    1, Text, Text);
  with memHistory do if GetTextLen       > 0 then Responses.Update('COMMENT',   1, TX_WPTYPE, Text);
  with lstSelectMod do for i := 0 to Items.Count - 1 do
                                                  Responses.Update('MODIFIER',i+1, Piece(Items[i],U,1), Piece(Items[i],U,2));
  Responses.Update('PROVIDER',1, Piece(Radiologist,U,1),Piece(Radiologist,U,2)) ;
  Responses.Update('CONTRACT',1, Piece(Contract,U,1),Piece(Contract,U,2)) ;
  Responses.Update('RESEARCH',1, Research, Research) ;
  if ALocation > 0 then  Responses.Update('LOCATION', 1, IntToStr(ALocation), AName)
  else with Encounter do Responses.Update('LOCATION', 1, IntToStr(Location) , LocationName);
  memOrder.Text := Responses.OrderText;
end;

//TDP - CQ#19393 Made history memobox read text
procedure TfrmODRad.VA508ComponentAccessibility1StateQuery(Sender: TObject;
  var Text: string);
begin
  inherited;
  Text := memHistory.Text;
end;

procedure TfrmODRad.Validate(var AnErrMsg: string);
var
  i, j: integer;
  AskLoc: boolean;

  procedure SetError(const x: string);
  begin
    if Length(AnErrMsg) > 0 then AnErrMsg := AnErrMsg + CRLF;
    AnErrMsg := AnErrMsg + x;
  end;

  procedure GetOrderingLocation(AType: integer);
  begin
    ALocation := 0;
    AName := '';
    LookupLocation(ALocation, AName, AType, TX_LOC_ORDER);
    if ALocation = 0 then
      begin
        SetError(TX_ORD_LOC);
        if OrderForInpatient then cboCategory.SelectByID('I') else cboCategory.SelectByID('O');
        with Encounter do Responses.Update('LOCATION', 1, IntToStr(Location) , LocationName);
      end
    else
      Responses.Update('LOCATION', 1, IntToStr(ALocation), AName);
  end;

begin
  inherited ;
  with cboProcedure do
    begin
      if ((Length(Text) = 0) or (ItemIEN <= 0)) then SetError(TX_NO_PROC)
      else
        begin
          if ItemID <> FLastRadID then Responses.Update('PROVIDER',1, '','');
          if (UpperCase(Piece(Items[ItemIndex],U,4))='Y') and (Radiologist='') then
           begin
             SelectApprovingRadiologist(Font.Size, Radiologist);
             if Radiologist='' then  SetError(TX_APPROVAL_REQUIRED)
             else
               Responses.Update('PROVIDER',1, Piece(Radiologist,U,1),Piece(Radiologist,U,2)) ;
           end ;
        end ;
    end;

  if Length(txtReason.Text) < 3 then
    SetError(TX_NO_REASON)
  else
    begin
      j := 0;
      for i := 1 to Length(txtReason.Text) do
        begin
          if CharInSet(txtReason.Text[i], ['A'..'Z','a'..'z','0'..'9']) then j := j + 1;
          if not CharInSet(txtReason.Text[i], ['A'..'Z','a'..'z','0'..'9']) and (j > 0) then j := 0;
          if j = 2 then break;
        end;
      if j < 2 then SetError(TX_NO_REASON);
    end;

  if Length(memHistory.Text) > 0 then
  begin
    j := 0;
    for i := 1 to Length(memHistory.Text) do
      begin
        if CharInSet(memHistory.Text[i], ['A'..'Z','a'..'z','0'..'9']) then j := j + 1;
        if not CharInSet(memHistory.Text[i], ['A'..'Z','a'..'z','0'..'9']) and (j > 0) then j := 0;
        if j = 2 then break;
      end;
    if j < 2 then SetError(TX_BAD_HISTORY);
  end;

  with cboCategory do
    begin
      AskLoc := (ALocation = 0);
      if ((not Patient.Inpatient) and (Self.EvtType = 'A')) then
        AskLoc := False;
      if ItemID = '' then SetError(TX_NO_CATEGORY);
      if CharInSet(CharAt(ItemID,1), ['C','S']) and (Contract = '') then SetError(TX_NO_SOURCE);
      if (CharAt(ItemID, 1) = 'R')       and (Research = '') then SetError(TX_NO_SOURCE);
      if ((CharAt(ItemID, 1) = 'O') and (LocationType(Encounter.Location) = 'W')) then
      begin
        if AskLoc then
          GetOrderingLocation(LOC_OUTP);
      end
      else if ((CharAt(ItemID, 1) = 'I') and (not (LocationType(Encounter.Location) = 'W'))) then
      begin
        if AskLoc then
          GetOrderingLocation(LOC_INP);
      end;
    end;
  if Length(cboTransport.Text) = 0 then SetError(TX_NO_MODE);

  with cboSubmit do
    if Enabled and (ItemIEN = 0)then SetError(TX_NO_IMAGING_LOCATION);

  with calRequestDate do
  begin
    if FMDateTime = 0 then
      SetError(TX_NO_DATE)
    else if FMDateTime < 0 then
      SetError(TX_BAD_DATE)
    else if FMDateTime < FMToday then
      SetError(TX_PAST_DATE);
  end;

end;

procedure TfrmODRad.cboProcedureNeedData(Sender: TObject;
  const StartFrom: string; Direction, InsertAt: Integer);

begin
  inherited ;
  cboProcedure.ForDataUse(SubSetOfRadProcs(DisplayGroup, StartFrom, Direction));
 end;

procedure TfrmODRad.cboAvailModMouseClick(Sender: TObject);
var
  x: string;
  i: integer;
  Found: boolean;
begin
  if (cboAvailMod.Items.Count < 1) or  //GE 04-30-05 prevent list index out of bounds when empty
     (cboAvailMod.ItemIndex < 0) then Exit;
  Found := False;
  with cboAvailMod do x := Items[ItemIndex];
  with lstSelectMod do
    begin
      if Items.Count > 0 then
        for i := 0 to Items.Count - 1 do
          if Items[i] = x then Found := True;
      if not Found then
        begin
          Items.Add(x);
          SelectByID(Piece(x, U, 1));
        end;
    end;
  if Piece(x, '^', 2) = 'PORTABLE EXAM' then
    cboTransport.SelectByID('P');
  ControlChange(Sender);
end;

procedure TfrmODRad.cmdRemoveClick(Sender: TObject);
begin
  with lstSelectMod do
     if (SelCount = 0) or (ItemIndex < 0) then exit
     else
      begin
       if Piece(Items[ItemIndex], U, 2) = 'PORTABLE EXAM' then
         with cboTransport do if OrderForInpatient
           then SelectByID('W')
           else SelectByID('A');
       Items.Delete(ItemIndex);
       ItemIndex := Items.Count - 1;
       if ItemIndex > -1 then SelectByID(Piece(Items[ItemIndex], U, 1));
      end ;
  ControlChange(Sender);
end;

procedure TfrmODRad.cboProcedureSelect(Sender: TObject);
var
  tmpResp: TResponse;
begin
  inherited;
  with cboProcedure do
   begin
    if ItemID <> FLastRadID then
     begin
       FLastRadID := ItemID;
       if FPredefineOrder then
         FPredefineOrder := False;
     end else Exit;
    Changing := True;
    if Sender <> Self then
      Responses.Clear;       // Sender=Self when called from SetupDialog
    ClearControl(lstSelectMod);
    ClearControl(lstLastExam);
    //ClearControl(memHistory);    {WPB-1298-30758}
    Changing := False;
    if CharAt(ItemID, 1) = 'Q' then
     with Responses do
       begin
         QuickOrder := ExtractInteger(ItemID);
         //SetControl(cboProcedure, 'ORDERABLE', 1);   //v22.9 - RV
         //SetModifierList;                            //v22.9 - RV
         FLastRadID := ItemID;
       end;
   end;
   with Responses do if QuickOrder > 0 then
   begin
    Changing := True;
    SetControl(cboProcedure,       'ORDERABLE', 1);
    SetModifierList;                                   //v22.9 - RV
    SetControl(lstSelectMod,       'MODIFIER', 1);
    SetControl(cboUrgency,         'URGENCY', 1);
    SetControl(cboSubmit,          'IMLOC', 1);
    SetControl(cboTransport,       'MODE', 1);
    SetControl(cboCategory,        'CLASS', 1);
    SetControl(txtReason,           'REASON', 1);
    SetControl(memHistory,         'COMMENT', 1);
    SetControl(chkIsolation,       'YN', 1);
    SetControl(radPregnant,        'PREGNANT', 1);
    SetControl(calPreOp   ,        'PREOP', 1);
    tmpResp := FindResponseByName('START',1);
    if tmpResp <> nil then
      begin
        if ContainsAlpha(tmpResp.IValue) then
          calRequestDate.Text := tmpResp.IValue
        else
          calRequestDate.FMDateTime := StrToFMDateTime(tmpResp.IValue);
      end;
    Changing := False;
   end;
  OrderMessage(ImagingMessage(cboProcedure.ItemIEN)) ;
  ControlChange(Self);
end;

procedure TfrmODRad.CBXImageRemoteSitesDropDown(Sender: TObject);
begin
  ImgComboBox_AutoWidth(CBXImageRemoteSites);

end;

procedure TfrmODRad.CBXImageRemoteSitesSelect(Sender: TObject);
var
 strRmtMssage: String;
 begin
inherited;
caption:=strImgOrigCaption;
 ImgRmteName.SetIsRmteNameSet(false);
 ImgRmteName.SetLastIndex(CBXImageRemoteSites.ItemIndex);
 if CBXImageRemoteSites.ItemIndex <> -1 then
   begin
    if CBXImageRemoteSites.Items.Strings[CBXImageRemoteSites.ItemIndex] <> 'LOCAL' then
      begin
       Caption:=strImgOrigCaption +'-'+'Remote';
       ImgRmteName.SetSiteName(CBXImageRemoteSites.Items.Strings[CBXImageRemoteSites.ItemIndex]);
       ImgRmteName.SetIsRmteNameSet(true);
       Caption:=strImgOrigCaption+'-'+ ImgRmteName.SiteName;
       ImgRmteName.SetStationID(CBXImageRemoteSites.ItemIndex); //was -1  //mnj- must subtract one because "Local" is added to CBXLocalRemoteSites
      end                                                      //as first entry in list before loading additional items to the TList
     else                                                       //if CBXImageRemoteSites item 1 is selected then the TList index is 0.
      begin
       Caption:=strImgOrigCaption +'-'+'Local';
       ImgRmteName.SetSiteName(CBXImageRemoteSites.Items.Strings[CBXImageRemoteSites.ItemIndex]);  //was -1
       ImgRmteName.SetStationID(CBXImageRemoteSites.ItemIndex);
      end;
   end;

end;

procedure TfrmODRad.SetModifierList;
var
  i: integer;
  tmpResp: TResponse;
begin
  i := 1;
  tmpResp := Responses.FindResponseByName('MODIFIER',i);
  while tmpResp <> nil do
    begin
      lstSelectMod.Items.Add(tmpResp.IValue + '^' + tmpResp.EValue);
      if tmpResp.EValue = 'PORTABLE EXAM' then
        with cboTransport do SelectByID('P'); 
      Inc(i);
      tmpResp := Responses.FindResponseByName('MODIFIER',i);
    end ;
end;

procedure TfrmODRad.SetRMSiteID(const Value: Integer);
begin

end;

procedure TfrmODRad.cboCategoryChange(Sender: TObject);
var
  Source: string;
begin
  inherited;
  if Contract <> '' then Source := Contract
  else if Research <> '' then Source := Research
  else Source := '';
  Contract := '';
  Research := '';
  with cboCategory do
    begin
      if CharInSet(CharAt(ItemID,1), ['C','S','R']) then
        begin
          SelectSource(Font.Size, CharAt(ItemID,1), Source);
          if Source = '-1' then
            InfoBox(TX_NO_AGREE, TX_NO_AGREE_CAP, MB_OK or MB_ICONWARNING)
          else if CharInSet(CharAt(ItemID,1), ['C','S']) then
            Contract := Source
          else if ItemID='R' then
            Research := Source;
        end;
    end;
  ControlChange(Self);
end;

procedure TfrmODRad.FormCreate(Sender: TObject);
begin
  FFormFirstOpened := TRUE;
  ImageTypeChanged := false;
  frmFrame.pnlVisit.Enabled := false;
  AutoSizeDisabled := True;

  strImgOrigCaption :=Caption;
  ImgRmteName:= TImgRMInfo.Create();
  ImgRmteName.SetSiteName('LOCAL');
  ImgRmteName.SetIsRmteNameSet(false);
  ImgRmteName.RemoteLabSiteLocations:= TList.Create();
  ImgRmteName.InitImageLabSiteLocationComboList; //mnj- Reads RPC to load site location


  inherited;
  memHistory.Width := pnlHandR.ClientWidth;
  memHistory.Height := pnlHandR.ClientHeight - memHistory.Top;
  FillerID := 'RA';                     // does 'on Display' order check **KCM**
  StatusText('Loading Dialog Definition');
  Responses.Clear;
  DisplayGroup := 0;
  AllowQuickOrder := True;
  Responses.Dialog := 'RA OERR EXAM';              // loads formatting info
  StatusText('Loading Default Values');
  FastAssign(SubsetOfImagingTypes, cboImType.Items);
  if Self.EvtID>0 then
    FEvtDelayDiv := GetEventDiv1(IntToStr(Self.EvtID));

  AddSitestoDropdown(ImgRmteName.SiteName);  //MNJ- adds site location description to Lab Location

  PreserveControl(cboImType);
  PreserveControl(calRequestDate);
  PreserveControl(cboUrgency);
  PreserveControl(cboTransport);
  PreserveControl(cboSubmit);
  PreserveControl(cboCategory);
  PreserveControl(calPreOp);
  PreserveControl(txtReason);
  PreserveControl(memHistory);      {WPB-1298-30758}
  if (Patient.Sex <> 'F') then
  begin
    //TDP - CQ#19393 change to allow grpPregnant to be tabbed to if screen reader active
    if ScreenReaderSystemActive then grpPregnant.TabStop := True;
    radPregnant.Enabled := False;
    radPregnantNo.Enabled := False;
    radPregnantUnknown.Enabled := False;
  end else SetDefaultPregant;
  FormMonitorBringToFrontEvent(Self, FormFirstOpened);
end;

{Assigned to cbolmType.OnDropDownClose and cbolmType.OnExit, instead of
 cbolmType.OnChange, becuase when it is OnChange the delay interfers with
 Window-Eyes ability to read the drop-down Items.}
procedure TfrmODRad.cboImTypeChange(Sender: TObject);
begin
  inherited;
  ImageTypeChanged := true;
end;

procedure TfrmODRad.memHistoryExit(Sender: TObject);
var
  AStringList: TStringList;
begin
  inherited;
  AStringList := TStringList.Create;
  try
    FastAssign(memHistory.Lines, AStringList);
    LimitStringLength(AStringList, 74);
    FastAssign(AstringList, memHistory.Lines);
    ControlChange(Self);
  finally
    AStringList.Free;
  end;
end;

procedure TfrmODRad.FormResize(Sender: TObject);
begin
  inherited;
  memHistory.Width := pnlHandR.ClientWidth;
  memHistory.Height := pnlHandR.ClientHeight - memHistory.Top;
end;

function TfrmODRad.GetLocationNM: string;
begin
Result:=Caption;
end;

function TfrmODRad.GetRMSiteID: Integer;
begin

end;

procedure TfrmODRad.cboAvailModKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  inherited;
  if Key = VK_RETURN then cboAvailModMouseClick(Self);
end;

//mnj
procedure TfrmODRad.AddSitestoDropdown(aRmteName: String);
var
 i: integer;
begin
  if aRmteName = '' then  aRmteName:='Local';


  with CBXImageRemoteSites do
     begin
       Items.Clear;
       ImgRmteName.RemoteLabSiteLocations.First;
       for i := 0 to ImgRmteName.RemoteLabSiteLocations.Count - 1 do
        begin
        //  showmessage('Site Num: '+TSiteInfo(RmteName.RemoteLabSiteLocations.Items[i]).SiteNumber);
        //  showmessage('Site Namde: '+TSiteInfo(RmteName.RemoteLabSiteLocations.Items[i]).SiteName);
          AddItem(TImgSiteInfo(ImgRmteName.RemoteLabSiteLocations.Items[i]).SiteName,nil);

        end;
       CBXImageRemoteSites.ItemIndex := CBXImageRemoteSites.Items.IndexOf(aRmteName);
     end;
 end;

procedure TfrmODRad.calPreOpChange(Sender: TObject);
begin
  inherited;
  FPreOpDate := FloatToStr(calPreOp.FMDateTime);
  ControlChange(Self);
end;

procedure TfrmODRad.SetDefaultPregant;
begin
  if (Patient.Sex = 'F') and ((Patient.Age > 55) or (Patient.Age < 12)) then
  begin
    radPregnantNo.Checked := True;
    grpPregnant.TabStop := False;
  end;
end;

procedure TfrmODRad.SetLocationNM(const Value: string);
var
 NewCaption: string;
begin
 NewCaption:= strImgOrigCaption + Value;
 Caption:= NewCaption;
end;

procedure TfrmODRad.cmdAcceptClick(Sender: TObject);
const
  Txt1 = 'This order can not be saved for the following reason(s):';
  Txt2 = #13+#13+'A response for the pregnant field must be selected.';
var
  NeedCheckPregnant: boolean;
begin
  if Patient.Sex = 'F' then
  begin
    NeedCheckPregnant := True;
    if radPregnant.Checked then NeedCheckPregnant := False
    else if radPregnantNo.Checked then NeedCheckPregnant := False
    else if radPregnantUnknown.Checked then NeedCheckPregnant := False;
    if NeedCheckPregnant then
    begin
      MessageDlg(Txt1+Txt2, mtWarning,[mbOK],0);
      Exit;
    end;
  end;
  inherited;
end;

//TDP - CQ#19393 cboSubmit 508 changes. Can change in future to be generic if needed. (See fODLab.pas)
procedure TfrmODRad.setup508Label(text: string; lbl: TVA508StaticText; ctrl: TControl);
begin
  if ScreenReaderSystemActive and not ctrl.Enabled then begin
    lbl.Enabled := True;
    lbl.Visible := True;
    lbl.Caption := lblSubmit.Caption + '. Read Only. Value is ' + Text;
    lbl.Width := lblSubmit.Width + 2;
  end else
    lbl.Visible := false;
end;

procedure TfrmODRad.cboProcedureExit(Sender: TObject);
var
  i: integer;
  ModList: TStringList;
begin
  inherited;
  ModList := TStringList.Create;
  if lstSelectMod.Items.Count > 0 then
    for i := 0 to lstSelectMod.Count - 1 do
      ModList.Add(lstSelectMod.Items[i]);
  cboProcedureSelect(Self);
  for i := 0 to ModList.Count - 1 do
  begin
    lstSelectMod.Items.Add(ModList[i]);
    lstSelectMod.SelectByID(Piece(ModList[i],U,1));
  end;
  with lstSelectMod do
    for i := 0 to Items.Count - 1 do
      Responses.Update('MODIFIER',i+1, Piece(Items[i],U,1), Piece(Items[i],U,2));
  //TDP - Made Order Message next focus if showing and Tab or Entered was pressed
  if (pnlMessage.Showing) AND ((TabIsPressed()) OR (EnterIsPressed())) then memMessage.SetFocus;
end;


procedure TfrmODRad.cboImTypeExit(Sender: TObject);
begin
  inherited;
  ImageTypeChange;
end;

procedure TfrmODRad.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  inherited;
  frmFrame.pnlVisit.Enabled := true;
  FormMonitorBringToFrontEvent(Self, nil);
  ImgRmteName:=nil;
  ImgRmteName.Free;
end;

procedure TfrmODRad.chkIsolationExit(Sender: TObject);
begin
  inherited;
  //Fix for CQ: 10025
  if TabIsPressed() then
    if NoPregnantSelection() then
      if radPregnant.CanFocus then
        radPregnant.SetFocus();
end;

procedure TfrmODRad.calPreOpExit(Sender: TObject);
begin
  inherited;
  //Fix for CQ: 10025
  if ShiftTabIsPressed() then
    if NoPregnantSelection() then
      if radPregnant.CanFocus then
        radPregnant.SetFocus();
end;

function TfrmODRad.NoPregnantSelection : Boolean;
begin
  result := not ((radPregnant.Checked) or (radPregnantNo.Checked) or (radPregnantUnknown.Checked));
end;

{TDP - Added to control where focus went now that pnlMessage was being focused
       out of turn after cboProcedure.}
procedure TfrmODRad.pnlMessageExit(Sender: TObject);
begin
  inherited;
  if TabIsPressed() then cboAvailMod.SetFocus;
  if ShiftTabIsPressed() then cboProcedure.SetFocus;
end;

{TDP - Added to control where focus went now that pnlMessage was being focused
       out of turn after cboProcedure.}
procedure TfrmODRad.pnlMessageMouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
  inherited;
  cboProcedure.SetFocus;
end;

procedure TfrmODRad.cboImTypeDropDownClose(Sender: TObject);
begin
  inherited;
  ImageTypeChange;
end;

procedure TfrmODRad.ImageTypeChange;
begin
  if not ImageTypeChanged then Exit;
  ImageTypeChanged := false;
  if FPredefineOrder then
    FPredefineOrder := False;
  if Changing or (cboImtype.ItemIndex = -1) then exit;
  with cboImType do DisplayGroup := StrToIntDef(Piece(Items[ItemIndex], U, 4), 0) ;
  if DisplayGroup = 0 then exit;
  CtrlInits.LoadDefaults(ODForRad(Patient.DFN, FEvtDelayDiv, DisplayGroup));   // ODForRad returns TStrings with defaults
  FPredefineOrder := False;
  InitDialog;
end;

procedure TfrmODRad.ImgComboBox_AutoWidth(const theComboBox: TCombobox);
const HORIZONTAL_PADDING = 10;
var itemsFullWidth: integer;
    idx: integer; itemWidth: integer;
begin

 itemsFullWidth := 0;  // get the max needed with of the items in dropdown state

 for idx := 0 to -1 + theComboBox.Items.Count do
  begin
   itemWidth := theComboBox.Canvas.TextWidth(theComboBox.Items[idx]);
   Inc(itemWidth, round(2 * (itemWidth /3)));
   if (itemWidth > itemsFullWidth) then
     itemsFullWidth := itemWidth;
  end;  // set the width of drop down if needed

 if (itemsFullWidth > theComboBox.Width) then
  begin //check if there would be a scroll bar

   if theComboBox.DropDownCount < theComboBox.Items.Count then
     itemsFullWidth := itemsFullWidth + GetSystemMetrics(SM_CXVSCROLL);

   SendMessage(theComboBox.Handle, CB_SETDROPPEDWIDTH, itemsFullWidth, 0);
   application.ProcessMessages;
  end;
end;

procedure TfrmODRad.FormFirstOpened(Sender: TObject);
begin
  if(FFormFirstOpened) then
  begin
    FFormFirstOpened := FALSE;
    with cboImType do
      if not FEditCopy and (ItemIEN = 0) and (DroppedDown = False) and (Application.Active) then
      begin
        cboImType.DroppedDown := TRUE;
      end;
  end;
end;

{ TImgRMInfo }

function TImgRMInfo.FindLabLocationIndex(aRemoteSiteName: string): integer;
var
 i: integer;
 tmpRmteSite: string;
begin
  Result:=0; //mnj-if not found set result to the index of "Local"
   ImgRmteName.RemoteLabSiteLocations.First;
  for i := 0 to ImgRmteName.RemoteLabSiteLocations.Count - 1  do
   begin
     tmpRmteSite:= TImgSiteInfo(ImgRmteName.RemoteLabSiteLocations.Items[i]).SiteName;
     if aRemoteSiteName = tmpRmteSite then
      begin
       Result:=i;
      end;

   end;
end;

procedure TImgRMInfo.InitImageLabSiteLocationComboList;
var
 i: integer;
 ImgSteInfo: TImgSiteInfo;
begin
 //mnj- This procedure calls RPC "LRREM GTDOM"
 // and will return an array with SiteID and Description

 try
  //mnj- add default SiteID and Description of "Local"
  ImgSteInfo := TImgSiteInfo.Create;
   with ImgSteInfo do
    begin
      SiteNumber  := '0';
      SiteName    := 'LOCAL';
      RemoteLabSiteLocations.Add(ImgSteInfo);
     end;

  CallV('LRREM GTDOM',[]);
  with RPCBrokerV do for i := 0 to Results.Count - 1 do
  begin
      ImgSteInfo := TImgSiteInfo.Create;
   with ImgSteInfo do
    begin
      SiteNumber  := Piece(Results[i], U, 1);
      SiteName    := Piece(Results[i], U, 2);
      RemoteLabSiteLocations.Add(ImgSteInfo);

    end;//End of - with RPCBrokerV
  end; // End of - with SteInfo do

  //for i := 0 to RemoteLabSiteLocations.Count - 1 do
  // begin
     // Showmessage('Site Num: '+ TSiteInfo(RemoteLabSiteLocations.Items[i]).SiteNumber +' Site Name: '+ TSiteInfo(RemoteLabSiteLocations.Items[i]).SiteName);
   //end;


 finally
 // SteInfo.Free;
 end;

end;




procedure TImgRMInfo.SetSiteName(aSiteNM: String);
begin
  RemoteSiteName:=aSiteNM;
end;

procedure TImgRMInfo.SetStationID(SiteInfoIndex: integer);
begin

 // showmessage('set station id '+ TSiteInfo(RmteName.RemoteLabSiteLocations.Items[SiteInfoIndex]).SiteNumber);
  //RmteName.SiteID:= StrToInt(TSiteInfo(RmteName.RemoteLabSiteLocations.Items[SiteInfoIndex]).SiteNumber);
  ImgRmteName.SiteID:=StrToInt(TImgSiteInfo(ImgRmteName.RemoteLabSiteLocations.Items[SiteInfoIndex]).SiteNumber);
end;

end.

