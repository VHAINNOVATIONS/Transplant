JFW Script File                                                           @�  $     va508cast      %      	      �     va508stringsegmentcount        %   %    stringsegmentcount  '     %          stringright %  
     %       
  '     %     	      �     getlisttype    %        
  " < %     7   
  
      lv     	      %        
      lb     	      %     %   
      lm     	      %     &   
      lx     	       --     	      l    isspecialfocus          menusactive " P      userbufferisactive  
  " l      inhjdialog  
             	      %   # �      dialogactive    
             	              getfocus      getwindowclass   #32771  
  # @        getfocus      getobjecttypecode     7   
  
             	               	      �    watchcount     $  indebugging      	            '  %    *   
        %          stringchopleft  '        '     %     " � %  
          '  %        $  gscountlist  |   %       
    stringsegment   '  %        $  gocountdict %                       %1 %2   %     $  gocountdict %          formatstring      saymessage        $  gocountdict %          dictset       %       
  '           '      �    %        	            $  gscountlist        stringleft   |   
         Scripting.Dictionary            createobjectex  &  gocountdict  |   &  gscountlist    $  gocountdict      	         $  gocountdict %          dictdelta         $  gscountlist  |   %   
   |   
    stringcontains       $  gscountlist %   
   |   
  &  gscountlist        watchCount         schedulefunction          �    va508sendmessage               '  %         
          '       '       '       '     %     getwindowname   '  %     %          getappfilename       getactiveconfiguration  
  #       inhjdialog    
        %   $  giva508messageid    %  %    sendmessage                	            '  %  ' 	       %     getwindowname   ' 
    %  % 
        stringcompare         
                    delay      % 	      
  ' 	 % 	      
     %       
  '  %       
           '          '                 '     % 
  :          stringsegment   '     %    stringtoint '      �       %     	      \    get4kname        �   '     %     getwindowname   '     %    stringlength    %  
 
 " �    %     hastitlebar # �    %    stringlength          
  
  
        %     ����      %    getobjectfromevent  '  %            accname '     %    stringlength    %  
 
    %     	         %     	      �    va508getstringvalue         '   :   %   
   =   
  '     $  gsva508vardata  %    stringcontains  '  %        
 
    %    2   
  '  %     %    stringlength    
  '  %       
  '     $  gsva508vardata  %         substring    ,   
  # 4%  %  
  
     %       
  '   �    %       
  '     $  gsva508vardata  %         substring    :   
  # �%  %  
  
     %       
  '   h         $  gsva508vardata  %  %  %  
    substring     stringtoint      
  '        $  gsva508vardata  %       
  %  %  
       
    substring     stringtoint '  %        
 
       $  gsva508data %  %    substring   '        %     	      D
    va508getapplicationdata         *appData      watchcount          &  gsva508vardata       &  gsva508data      &  gsva508getappdatadebugbuf        '  $  fwdebug    $  gsva508getappdatadebugbuf       VA508GetApplicationData execution info:
Invocation: handle %1, iQueryCode %2      %     inttostring    %    inttostring   formatstring    
  &  gsva508getappdatadebugbuf            $  ghva508dllwindow    %   %    va508sendmessage      va508cast   '  $  fwdebug    $  gsva508getappdatadebugbuf      

 
VA508SendMessage(%1, %2) returns %3      $  ghva508dllwindow      inttostring    %    inttostring    %    inttostring   formatstring    
  &  gsva508getappdatadebugbuf      %        
  # %       
  
        %    get4kname   '  $  fwdebug    $  gsva508getappdatadebugbuf       
sCaption from window %1: '%2'    %    inttostring %    formatstring    
  &  gsva508getappdatadebugbuf      %  '     %       $  giva508datawindowtitlelen     substring   '  $  fwdebug    $  gsva508getappdatadebugbuf       
sSubtitle from caption: '%1'  %    formatstring    
  &  gsva508getappdatadebugbuf         %  $  gsva508datawindowtitle         stringcompare         
     $  fwdebug    $  gsva508getappdatadebugbuf    
Data window title recognized  
  &  gsva508getappdatadebugbuf         %  $  giva508datawindowtitlelen     stringchopleft  '     %   :     stringcontains  '  %       
 
             %       %       
    substring     stringtoint   va508cast   '  $  fwdebug    $  gsva508getappdatadebugbuf       
Next window: %1      %    inttostring   formatstring    
  &  gsva508getappdatadebugbuf         $  fwdebug    $  gsva508getappdatadebugbuf    
No next window    
  &  gsva508getappdatadebugbuf            %  %    stringchopleft  '  $  fwdebug    $  gsva508getappdatadebugbuf      		 
Caption text saved (idx %1): '%2'    %    inttostring %    formatstring    
  &  gsva508getappdatadebugbuf      %  %  
  '      �      %    stringlength          
 
       %   :     stringcontains  '  %       
 
          %       %       
    substring     stringtoint '     %  %       
    stringchopleft  '     %  %    stringleft  &  gsva508vardata     %  %    stringchopleft  &  gsva508data       $  fwdebug    $  gsva508getappdatadebugbuf    
No data to return.    
  &  gsva508getappdatadebugbuf            4    va508resetglobals              va508cast   &  ghva508dllwindow         &  gsva508datawindowtitle       &  gsva508tutormessage            va508cast   &  ghva508tutorwindow        &  giva508tutorreturnvalue            va508cacheupdate             &  gbva508suppressecho    �    va508ensureinitialized  $  gbva508needtolinktodll        		 TfrmVA508JawsDispatcherHiddenWindow        findtoplevelwindow  '   %            %                va508sendmessage      va508cast   &  ghva508dllwindow    $  ghva508dllwindow          
  # @$  ghva508dllwindow         
  
        $  ghva508dllwindow      getwindowclass  '     %   TfrmVA508HiddenJawsMainWindow          stringcompare         
        $  ghva508dllwindow      get4kname   &  gsva508datawindowtitle     $  gsva508datawindowtitle   :          stringsegment    :   
  &  gsva508datawindowtitle     $  gsva508datawindowtitle    stringlength    &  giva508datawindowtitlelen         &  gbva508needtolinktodll              $  gbva508needtolinktodll                va508cast   &  ghva508dllwindow        VA508EnsureInitialized         schedulefunction             8    va508cachegetval        �     '  $  giva508cachedatastatus      � 
       ����   	      $  giva508cachedatastatus  %   
                	      %        
     $  gsva508cachecaption '     %        
     $  gsva508cachevalue   '     %        
     $  gsva508cachecontroltype '     %        
     $  gsva508cachestate   '     %        
     $  gsva508cacheinstructions    '     %         
     $  gsva508cacheiteminstructions    '          beep         ����   	              	      �    va508cacheupdate             '  %           '           &  giva508cachetick               va508cast   &  ghva508cachehwnd         &  gsva508cachecaption      &  gsva508cachevalue        &  gsva508cachecontroltype      &  gsva508cachestate        &  gsva508cacheinstructions         &  gsva508cacheiteminstructions          &  giva508cachedatastatus                  va508getgriddata       %        
     	             DataStatus    va508getstringvalue   stringtoint '       gettickcount    &  giva508cachetick    %   &  ghva508cachehwnd    %  &  giva508cachedatastatus  $  giva508cachedatastatus       
         Caption   va508getstringvalue &  gsva508cachecaption    $  giva508cachedatastatus       
         Value     va508getstringvalue &  gsva508cachevalue      $  gsva508cachevalue          va508getgriddata          $  giva508cachedatastatus       
         ControlType   va508getstringvalue &  gsva508cachecontroltype    $  giva508cachedatastatus       
         State     va508getstringvalue &  gsva508cachestate      $  giva508cachedatastatus       
         Instructions      va508getstringvalue &  gsva508cacheinstructions       $  giva508cachedatastatus        
         ItemInstructions      va508getstringvalue &  gsva508cacheiteminstructions          d    va508fieldnamefromquerycode    %        
      Caption '     %        
      Value   '     %        
      ControlType '     %        
      State   '     %        
      Instructions    '     %         
      ItemInstructions    '          beep                	      %     	      d    va508querycodefromfieldname    %    Caption 
          '     %    Value   
          '     %    ControlType 
          '     %    State   
          '     %    Instructions    
          '     %    ItemInstructions    
           '          beep                	      %     	      �    va508getcomponentprop         �   %    stringtoint       %    va508cast   '       '        %    va508cast   '     %    va508querycodefromfieldname '          '  %        
  # %   $  ghva508cachehwnd    
  
  # L     gettickcount    $  giva508cachetick    
    �  
  
         cacheUse      watchcount        %  %    va508cachegetval       	      %       
     %          %    va508fieldnamefromquerycode '         cacheSkip     watchcount        %   %    va508getapplicationdata           DataStatus    va508getstringvalue   stringtoint '  %  %  
        %    va508getstringvalue '  %   $  ghva508cachehwnd    
        %  %  %  %  %  %  %  %    va508cachesetvals                 	      %      � 
     %   $  ghva508cachehwnd    
           &  giva508cachetick         ����   	      %   $  ghva508cachehwnd    
     $  giva508cachedatastatus  %  
                    	                    va508cacheupdate           cacheUpdate   watchcount        %          va508getapplicationdata       %     va508cacheupdate          %  %    va508cachegetval       	      �    va508cachesetvals             %   $  ghva508cachehwnd    
     	      $  giva508cachedatastatus  %  
  &  giva508cachedatastatus  %       
     %  &  gsva508cachecaption    %       
     %  &  gsva508cachevalue      %       
     %  &  gsva508cachecontroltype    %       
     %  &  gsva508cachestate      %       
     %  &  gsva508cacheinstructions       %        
     %  &  gsva508cacheiteminstructions          �    va508getgriddata            grid      watchcount          &  gsva508cachegridcolhdr        &  giva508cachegridcolnum        &  giva508cachegridcolcnt       &  gsva508cachegridrowhdr        &  giva508cachegridrownum        &  giva508cachegridrowcnt        &  giva508cachegridcellnum       &  giva508cachegridcellcnt      &  gsva508cachegridcellval %                 	         %     stringtoint # �   %    ^     stringcontains    
  #  %    
        %    Value        %    va508getcomponentprop   '  %       
              	         %   '        %   ^     va508stringsegmentcount   	   
              	         %   ^          stringsegment   &  gsva508cachegridcolhdr        %   ^          stringsegment     stringtoint &  giva508cachegridcolnum        %   ^          stringsegment     stringtoint &  giva508cachegridcolcnt     %   ^          stringsegment   &  gsva508cachegridrowhdr        %   ^          stringsegment     stringtoint &  giva508cachegridrownum        %   ^          stringsegment     stringtoint &  giva508cachegridrowcnt        %   ^          stringsegment     stringtoint &  giva508cachegridcellnum       %   ^          stringsegment     stringtoint &  giva508cachegridcellcnt    %   ^     	     stringsegment   &  gsva508cachegridcellval         	      x    va508saydata            &  gsva508tutormessage %  &  ghva508tutorwindow        &  giva508tutorreturnvalue       '  $  gbva508needtolinktodll              	         %             %    va508getcomponentprop   '  %        
 	    %        
  '     %              %    va508getcomponentprop   '  %  '  %  # |%        
  
  '     %              %    va508getcomponentprop   '  %  # �%        
  
  '     %              % 	   va508getcomponentprop   '  %  ' 
 %  # <%        
  
  '     %              %    va508getcomponentprop   '     %               %    va508getcomponentprop   '          '        %     getwindowtypecode   '  %            getobjectsubtypecode    '        %     isspinbox         %              %    va508getcomponentprop        
      SpinBox '       '        %       
  " �%       
  
          '        %     getwindowclass   TTreeView   
          '        %     getwindowclass   TORComboEdit    
  " �   %     getwindowclass   TORComboBox 
  
          '     %        
  " �%  
             getfocus            va508getgriddata          
 
 # ,     ispccursor  
  # T     userbufferisactive    
          getcurrentcellheadersdata   '     %       
  " �%       
  
     %       
          getaccname  '     % 
      
          getobjectstate            getaccstate ' 	          %       
     %       
          getaccvalue '        %     tvgetfocusitemexpandstatestring      
  % 	 
  ' 	    %  # �   %  %    controltypefound    
     %  '        %   %  %  % 	 %  %  %       positioningroup %    saycontrolex                   	           '            shoulditemspeak   # �      
           '         Message %  %    sayusingvoice      %        
 
    %   &  ghva508tutorwindow  %  &  gsva508tutormessage %  &  giva508tutorreturnvalue            	      �     $sayline         ispccursor    " P            isspecialfocus  
          $sayline    	           sayline       �     tvgetfocusitemexpandstatestring       %     tvgetfocusitemexpandstate       opened     	       closed     	         �    sayline         ispccursor    " P            isspecialfocus  
        %     sayline    	           getfocus    '     %    getwindowtypecode   '     %    getwindowsubtypecode    '      lb lm lx       %    getlisttype   stringcontains          '          getobjecttypecode     7   
          '        %    getwindowclass   TORComboEdit    
  " �   %    getwindowclass   TORComboBox 
  
  # �     positioningroup 
          '             getfocus     ControlType      %    va508getcomponentprop         %    getwindowclass   Edit    
  # �      %    getparent     getwindowclass   TComboBox   
  
       )   '     %       
  # %    B   
  
  " (%       
  
        %    va508saydata       	         %     sayline    	         %        
  # �   %   ControlType       %    va508getcomponentprop         
 
 
        %    va508saydata       	              getfocus            va508getgriddata          
 
            getcurrentcellheadersdata           say    	              getfocus     Caption       %    va508getcomponentprop        
  # P        getfocus     ControlType       %    va508getcomponentprop        
  
  # �        getfocus     Value         %    va508getcomponentprop        
  
  #         getfocus     State         %    va508getcomponentprop        
  
  #  %    
        %     sayline    	      %    B   
        %     sayline    	           positioningroup ' 	    %    getwindowclass   TORComboEdit    
       )   '        %    getwindowclass   TORComboBox 
          '             getfocus     Caption       %    va508getcomponentprop        
          getobjectname   '             getfocus     ControlType       %    va508getcomponentprop        
          getobjecttype   '             getfocus     Value         %    va508getcomponentprop        
          getaccvalue '             getfocus     State         %    va508getcomponentprop        
          getobjectstate  '     %       
        %    tvgetfocusitemexpandstatestring      
  %  
  '     %       
  " �	%       
  
        %         say       %         say       %         say       %       
  " 
%    )   
  
     %            '        %          say    %       
  # �
   %    stringlength    
          % 	        say          %       
  " �
%       
  
        %         say       %         say       %    
     say           lb lm lx       %    getlisttype   stringcontains        %    
     say       %         say       % 	        say       %       
        %    
     say       %         say       % 	        say       %       
        %    
     say       %         say       % 	        say          %    va508saydata       	         %     sayline             �    handlecustomwindows       %     getwindowclass   TComboBox   
  # �       %     getfirstchild     getwindowclass   Edit    
  
             	      $  glbsuppressfocuschange           &  glbsuppressfocuschange          	      %         
  " L   %     getwindowclass   Invalid 
  
             	         %     va508saydata               	               	         (    saytutorialhelp          getcurrentwindow    $  ghva508tutorwindow  
     $  giva508tutorreturnvalue       
 
    $  gsva508tutormessage      
  # �    $  gsva508tutormessage   stringlength         
  
     	               %   %    saytutorialhelp       �     getcustomtutormessage        getcurrentwindow    $  ghva508tutorwindow  
     $  giva508tutorreturnvalue       
 
    $  gsva508tutormessage    	              getcustomtutormessage      	      �    autostartevent        &  indebugging       &  fwdebug       &  gidebugmode         getjawssettingsdirectory     \debug.ini  
    fileexists          &  indebugging            getjawssettingsdirectory     \fwdebug.ini    
    fileexists          &  fwdebug         &  gbva508needtolinktodll      VA 508 / Freedom Scientific - JAWS Communication Message ID   registerwindowmessage   &  giva508messageid         va508resetglobals           va508ensureinitialized          updatebrailleclasses            updatecontroltypes     $  giapphasbeenloaded            loadpersonalsettings            &  giapphasbeenloaded        \     autofinishevent      &  gbva508needtolinktodll       va508resetglobals         �     $scriptfilename $  gidebugmode          V A 508 Scripts   scriptandappnames              displaydebugdata             �    displaydebugdata         '           getfocus     Caption       %    va508getcomponentprop         
 
    %    Custom Name:    
  %  
   
   
  '        '             getfocus     ControlType       %    va508getcomponentprop         
 
    %    Custom Type:    
  %  
   
   
  '        '             getfocus     Value         %    va508getcomponentprop         
 
    %    Custom Value:   
  %  
   
   
  '        '             getfocus     State         %    va508getcomponentprop         
 
    %    Custom State:   
  %  
   
   
  '        '             getfocus     Instructions          %    va508getcomponentprop         
 
    %    Custom Instructions:    
  %  
   
   
  '        '             getfocus     ItemInstructions          %    va508getcomponentprop         
 
    %    Custom Item Instructions:   
  %  
   
   
  '        '     %        no custom information found
    '              getfocus           va508getapplicationdata    %    Status: 
      DataStatus    va508getstringvalue 
    Data:  
  $  gsva508data 
   
   
   DLL handle:     
     $  ghva508dllwindow      inttostring 
   
   
   Need to link to DLL?:   
     $  gbva508needtolinktodll    inttostring 
   
   
   Data Windows Title:     
  $  gsva508datawindowtitle  
   
   
  '        userbufferisactive          userbufferdeactivate               userbufferclear         (   %     saymessage        L     abs    %         
           %   
     	      %      	      0    gettorcomboinfo   � �     getcurrentwindow    '  %                	         %    getwindowclass   TorComboEdit    
        %    getparent   '        %    getwindowclass   TorComboBox 
              	         %    ����      %    getobjectfromevent  '  %                	      %         %    accnavigate '  %                	      %            accrole   	   
     %      ����  accchild    '  %                	         %            accrole   !   
  # T     ispccursor  
  # �           getfocus      getfirstchild     getwindowtypecode        
  
            TORDropPanel           findtoplevelwindow    getfirstchild   '     %    getwindowclass   TORListBox  
  " �      %    getwindowleft           getfocus      getwindowleft   
    abs      
 
 
  "       %    getwindowtop            getfocus      getwindowbottom 
    abs      
 
 
              	         %    ����      %    getobjectfromevent  '  %                	      %            accrole   !   
              	         %      accchildcount         
  '  %      accselection          
  '           	      �    positioningroup      getfocus    '         '        '       getobjecttypecode     7   
        %     lvgetfocusitem  '     %     lvgetitemcount  '          getobjecttypecode        
        %     �                sendmessage      
  '     %     �                sendmessage '        %     getwindowclass   TorComboEdit    
  " �   %     getwindowclass   TorComboBox 
  # �     positioningroup   
  
        %  %    gettorcomboinfo            '        '             getobjecttypecode        
  #            positioningroup   stringlower  of    stringcontains  "            positioningroup   stringlower  item      stringcontains  
    
        %     
    	           sendmessage '  %     %  '        '  %        
  # �%    �   
  
        %     
       %    sendmessage '  %       
  '   `   %  '    ����'  %        
  # %    �   
  
        %     
       %    sendmessage '  %       
  '   �   %  '  %  %  
  '        %     %        
     %       
         %1 item    %    inttostring   formatstring    '         %1 items       %    inttostring   formatstring    '            %1 of %2       %    inttostring    %    inttostring   formatstring    '           %    stringlength       %     	           positioningroup    	           $test      $    bxtestnum           getcurrentwindow    '       '  %         
 	    %     !   
  '   %   v   
  '     %           %        
  
  '          '        %  %    va508getapplicationdata    $  gsva508getappdatadebugbuf   '  $  gsva508vardata  '  $  gsva508data '     %         stringleft  '       '  %     

 VA508 data for window of class %1:
       %    getwindowclass  %    formatstring    
  '       ' 	 % 	    % 	      
  ' 	    %  %  % 	   stringsegment   ' 
    % 
   stringlength          % 
  =,         stringsegment   '       '        % 
  =,         stringsegment     stringtoint      
  '        % 
  =,         stringsegment     stringtoint '  %  # (%  
        %  %  %    substring   '        %    stringlength       %      
%1: %2    %  %    formatstring    
  '  %   value   
        %          va508getgriddata       %      
Grid data:
Column %1 (%2 of %3)
Row %4 (%5 of %6)
Cell %7 (%8 of %9)   $  gsva508cachegridcolhdr     $  giva508cachegridcolnum    inttostring    $  giva508cachegridcolcnt    inttostring $  gsva508cachegridrowhdr     $  giva508cachegridrownum    inttostring    $  giva508cachegridrowcnt    inttostring $  gsva508cachegridcellval    $  giva508cachegridcellnum   inttostring    $  giva508cachegridcellcnt   inttostring   formatstring    
  '        %   dataStatus  
     %       (%1)            %    stringtoint 66 |Caption|Value|ControlType|State|Instructions|ItemInstructions|Data||CheckForStateChanges|CheckForItemChanges|GetOnlyIfStateChanged|GetOnlyIfItemChanged|StateChanged|ItemChanged|ItemChangeSpeakValues|||||||||Error     olstringflags     va508cast     formatstring    
  '                 ' 	     �   $  fwdebug    %      

VarData: %1
Data: %2   %  %    formatstring    
  '  %     %   

    
  %  
  '           %  %    bxsaystring       �     autocloseifopencombo         getfocus    '      %     getwindowclass   ComboLBox   
         F4    typekey          l     $tab               isspecialfocus          autocloseifopencombo               $tab       t     $shifttab              isspecialfocus          autocloseifopencombo               $shifttab          valuechangedevent            %       
  # x      getobjectsubtypecode      )   
  
       )   '        %   %  %  %  %  %  %    valuechangedevent      %    )   
  # � %  
  # � %  
          &  gbva508suppressecho           sayhighlightedtext      $  lt_suppresshighlight           lt_clearSuppressHighlight          schedulefunction       	              getfocus      getwindowclass   ComboLBox   
        %     getwindowsubtypecode      )   
  " @   %     getwindowclass   TORComboEdit    
  
     	         %        getfocus    
  " �   %     getwindowclass   TORListBox  
  
  # �        getfocus      getwindowclass   TORComboEdit    
  
     	         %     getwindowclass   TMaskEdit   
     	      $  gbva508suppressecho          &  gbva508suppressecho 	         %     getwindowclass   TStringGrid 
  # �%        getfocus    
  
     	         %   %    sayhighlightedtext        �    va508translateprops      � �      '          getactiveconfiguration   .jcf    
    findjawssettingsfile    '     %    fileexists                	          %1 Translations %     formatstring    '       '       '  %       
     %   |ControlType    
  '  %   |%1 
  '     %       
     %   |State  
  '  %   |%2 
  '        %         stringchopleft       
     %         stringchopleft  
  ' 	    % 	 %  %    formatstring    ' 
    %  % 
  <NoTranslation> %    inireadstring   '     %   <NoTranslation>        stringcompare         
              	         %         stringleft  '       '     % 	  %1    stringcontains     %       
  '     %  %  %    stringsegment   '       '        % 	  %2    stringcontains     %       
  '     %  %  %    stringsegment   '       '     %     	      �	    controlpropget        �     '  %    focus   
  " | %    current 
  # x      ispccursor  
  
          getfocus    '        '  %            getobjectsubtypecode    '        %    current 
          getcurrentwindow    '  %            getobjectsubtypecode    '        %    hwnd    
           %          stringchopleft    stringtohandle  '  %       getfocus    
           '     %          %    getwindowsubtypecode    '                 	            '     %         stringright  .brl    
        %         stringchopright '       '     %   Name    
        %   Caption %  %    va508getcomponentprop      	      %   Type    
  " (%   State   
  
        %   ControlType %  %    va508getcomponentprop   '     %   State   %  % 	   va508getcomponentprop   ' 
 %     %        
 
 # �% 
       
 
 
         Braille           
  %  % 	   va508translateprops       %        
 
        Braille      %  % 	   va508translateprops       % 
       
 
        Braille      %  % 	   va508translateprops          %   Type    
     %  '  %     	      % 	 '  % 
    	         %   Value   
        %   Value   %  %    va508getcomponentprop         
 
 '  %        
 
 # �   %          va508getgriddata    
     %          '  $  gigridbraillemode        
  " ($  gigridbraillemode        
  
      r      $  giva508cachegridrownum    inttostring 
   c   
     $  giva508cachegridcolnum    inttostring 
       
  '     $  gigridbraillemode        
  " $  gigridbraillemode        
  
     %  $  gsva508cachegridrowhdr  
       
  $  gsva508cachegridcolhdr  
       
  '     $  gsva508cachegridcellval      
      -   &  gsva508cachegridcellval            '     %  $  gsva508cachegridcellval 
  '          	      %       
     %       
          getobjectvalue  '          	         %     	      %   ContainerName   
        %   ContainerType   
        %   Position    
        %   DlgPageName 
        %   DlgText 
        %   ContextHelp 
        %   Time    
        %   Level   
                 	      �    brailleprophelper               getfocus      getwindowsubtypecode    '  %        
          getobjectsubtypecode    '     %  %  
              	          focus   %    .brl    
  %  %    controlpropget  '  %        
 
    %    name    
          getcursorcol    '       getcursorrow    '        %  %  %          brailleaddstring               	               	           brailleclassfound       �   $  glbstable    |           %   
    stringlower        stringsegmentindex  '  %           $  glbstable2   |   %    stringsegment     stringtoint '          	               	      P    braillecallbackobjectidentify           getcurrentwindow      isspinbox              	              getcurrentwindow     ControlType       %     va508getcomponentprop         
 
          '     %   %    brailleclassfound      %     	              braillecallbackobjectidentify      	      `    getwindowsubtypecode          %     isspinbox              	      %        getfocus    
           '          '             getcurrentwindow     ControlType %  %    va508getcomponentprop         
 
       %  %    brailleclassfound      %     	            %     getwindowsubtypecode       	      X     brailleaddobjectname           Name    %     brailleprophelper      	      X     brailleaddobjecttype           Type    %     brailleprophelper      	      X     brailleaddobjectstate          State   %     brailleprophelper      	      X     brailleaddobjectvalue          Value   %     brailleprophelper      	      h     brailleaddobjectcontainername          ContainerName   %     brailleprophelper      	      h     brailleaddobjectcontainertype          ContainerType   %     brailleprophelper      	      `     brailleaddobjectposition           Position    %     brailleprophelper      	      `     brailleaddobjectdlgpagename        DlgPageName %     brailleprophelper      	      X     brailleaddobjectdlgtext        DlgText %     brailleprophelper      	      `     brailleaddobjectcontexthelp        ContextHelp %     brailleprophelper      	      X     brailleaddobjecttime           Time    %     brailleprophelper      	      X     brailleaddobjectlevel          Level   %     brailleprophelper      	          istruelistview        %     istruelistview  '  %     %     	               %     getwindowclass    stringlower  list      stringcontains  # �    %     lvgetnumofcolumns         
 
 
             	               	      �    $f2edittreenode      saycurrentscriptkeylabel            getfocus    '      %     getwindowclass   TTreeView   
        %     
    	           sendmessage '  %        %     A        %    sendmessage    	            %     getwindowtypecode        
          savecursor          jawscursor          savecursor          routejawstopc           leftmousebutton    	           typecurrentscriptkey          �    va508changeevent              $  gicancelevent        
     	      %   &  ghfromchangeevent         &  gididfocuschange    %       
     %       
  '     %       
     %       
  '        %   %  %  %  %  %  %  %    va508cachesetvals           braillerefresh     %        getfocus    
     $  indebugging                    bxgauge       	          change    watchcount        %          va508getgriddata    # $$  gispokecellunit   
        $  gsva508cachegridcolhdr         say       $  gsva508cachegridrowhdr         say    $  gsva508cachegridcellval      
          &  gsva508cachegridcellval       $  gsva508cachegridcellval         say        column     $  giva508cachegridcolnum    inttostring 
         say        row        $  giva508cachegridrownum    inttostring 
         say    	      %       
  # �%  
          &  gisuppresscaption      %       
  # 0%  
          &  gisuppresscontroltype      %       
  # x%  
          &  gisuppressstate    %       
  # �%  
  # �   %           va508getgriddata      
          &  gisuppressvalue    %       
  # ,%  
          &  gisuppressinstructions     %        
  # t%  
          &  gisuppressiteminstructions         AnnounceEvent          schedulefunction          �     announceprop         �%  # P $  gididfocuschange          
  
        $  ghfromchangeevent   %         %    va508getcomponentprop         
 
       %  %    saymessage                 '     �    announceevent                $  gisuppresscaption     announceprop                    $  gisuppresscontroltype     announceprop                    $  gisuppressstate   announceprop                 
   $  gisuppressvalue   announceprop                    $  gisuppressinstructions    announceprop                     $  gisuppressiteminstructions    announceprop          H     $nextdocumentwindow           changedocumentwindow          L     $previousdocumentwindow            changedocumentwindow          �    changedocumentwindow                  isspecialfocus     %        
          $nextdocumentwindow    %         
          $previousdocumentwindow    	           getfocus    '       getdialogpagename   '     %    getwindowclass   TTabControl 
     %        
         RightArrow    typekey       %         
         LeftArrow     typekey                %    getparent     getwindowclass   TTabControl 
  " D         %    getparent     getparent     getwindowclass   TTabControl 
  
        %     selecttab         %        
          $nextdocumentwindow    %         
          $previousdocumentwindow         getfocus    '       getobjecttypecode        
        %    getwindowstylebits       
          &  glbsuppressfocuschange                 delay         %       getdialogpagename                                        saycontrolex           ClearSuppressFocusChange           schedulefunction       	         %       getdialogpagename   
  # �     getdialogpagename   
             getdialogpagename        
   Page    
         say          �    getdialogpagename        getfocus    '        getdialogpagename   '  %       
           %     getparent     getwindowclass   TTabSheet   
  "          %     getparent     getparent     getwindowclass   TTabSheet   
  
           %     getparent     getwindowtypecode        
           %     getparent     getwindowname   '              %     getparent     getparent     getwindowtypecode        
              %     getparent     getparent     getwindowname   '              %     getparent     getwindowclass   TTabControl 
  " �         %     getparent     getparent     getwindowclass   TTabControl 
  
          getselectedtab  '          getobjecttypecode        
        %    getfocusobject  '  %     %    %    accname '           %     	          getselectedtab             getfocus      getparent     getwindowclass   TTabControl 
        %     getfocusobject  '       '  %  # � %    
   
  
  # � %            accrole   <   
  
     %      accparent   '  %       
  '   �    %  # T%            accrole   <   
  
          '  %  %      accchildcount   
     %    %    accstate         
     %    %    accname    	      %       
  '   d                selecttab                 getfocus      getparent     getwindowclass   TTabControl 
        %    getfocusobject  '       '  %  # � %    
   
  
  # � %            accrole   <   
  
     %      accparent   '  %       
  '   �    %  # T%            accrole   <   
  
     %      accchildcount   '       '  %  %      accchildcount   
     %    %    accstate         
     %  '     %       
  '   �   %        
     %    %       
    accrole   %   
           '     %         %       
    accselect         %         
     %       
 
    %         %       
    accselect                        H     clearsuppressfocuschange          &  glbsuppressfocuschange     �     isspinbox           getobjecttypecode        
  # �       %     getnextwindow     getwindowclass   TUpDown 
  
             	               	      �     getvalue            getfocus     Value        %     va508getcomponentprop         
          getobjectvalue  '      %      	      4    movebyline          getfocus    '       ispccursor  # l            isspecialfocus    
        %    isspinbox   " �    %    getwindowclass   TORComboEdit    
  
  " �    %    getwindowclass   TORComboBox 
  
     %           nextline               priorline            %    isspinbox   " �   %    getwindowclass   TORComboEdit    
  
             getvalue      
     say               	          downArrow     speakcellunit              	                  	      X     $saynextline              movebyline            $saynextline          X     $saypriorline              movebyline            $saypriorline         l     $saynextcharacter       rightArrow    speakcellunit      	           $saynextcharacter      l     $saypriorcharacter      leftArrow     speakcellunit      	           $saypriorcharacter     8     clearspokecellunit        &  gispokecellunit    p    speakcellunit           &  gispokecellunit     clearSpokeCellUnit         schedulefunction            ispccursor    " �            isspecialfocus  
              	              getfocus            va508getgriddata          
 
       %     typekey                   delay              getfocus     Value        %    va508getcomponentprop         %          va508getgriddata       $  gsva508cachegridcellval      
          &  gsva508cachegridcellval    $  gigridspeechmode            $  gsva508cachegridcellval         say            	      %    leftArrow   
  " �%    rightArrow  
  
  " �%    home    
  
  " �%    end 
  
     $  gigridspeechmode         
  " H$  gigridspeechmode         
  
         Message $  gsva508cachegridcolhdr         sayusingvoice            $  gsva508cachegridcellval         say    $  gigridspeechmode         
  "  $  gigridspeechmode         
  
         column     $  giva508cachegridcolnum    inttostring 
         say               	      %    upArrow 
  " �%    downArrow   
  
  " �%    pageUp  
  
  " %    pageDown    
  
     $  gigridspeechmode         
  " X$  gigridspeechmode         
  
         Message $  gsva508cachegridrowhdr         sayusingvoice            $  gsva508cachegridcellval         say    $  gigridspeechmode         
  " 0$  gigridspeechmode         
  
         row        $  giva508cachegridrownum    inttostring 
         say               	              getobjecttypecode        
  #         getcurrentwindow      getwindowstylebits       
  
          &  glbsuppressfocuschange     %     typekey                   delay              getcurrentwindow         getobjectname        getobjectsubtype         getaccstate   saycontrolex           ClearSuppressFocusChange           schedulefunction               	               	      �    getcurrentcellheadersdata           getfocus            va508getgriddata        column       
     $  giva508cachegridcolnum    inttostring 
   row 
       
     $  giva508cachegridrownum    inttostring 
       
  '   %   $  gsva508cachegridcolhdr  
       
  $  gsva508cachegridrowhdr  
       
  $  gsva508cachegridcellval 
  '   %      	      X     $jawshome       home      speakcellunit      	           $jawshome      T     $jawsend        end   speakcellunit      	           $jawsend       d     $jawspagedown       pageDown      speakcellunit      	           $jawspagedown      X     $jawspageup     pageUp    speakcellunit      	           $jawspageup    $    updatebrailleclasses         &  glbstable        &  glbstable2          getactiveconfiguration   .jcf    
    findjawssettingsfile    '      %     fileexists                	                     BrailleClasses  %     inireadsectionkeys    stringlower  |    |        
    stringreplacesubstrings 
  &  glbstable      $  glbstable    |     va508stringsegmentcount '       '  %  %  
     $  glbstable2         BrailleClasses        $  glbstable    |   %    stringsegment          stringchopleft        %     inireadinteger    inttostring 
   |   
  &  glbstable2  %       
  '   �   $  glbstable2        $  glbstable2         stringchopright &  glbstable2             	          updatecontroltypes       &  glbstable3       &  glbstable4          getactiveconfiguration   .jcf    
    findjawssettingsfile    '      %     fileexists                	                     ControlTypes    %     inireadsectionkeys    stringlower  |    |        
    stringreplacesubstrings 
  &  glbstable3     $  glbstable3   |     va508stringsegmentcount '       '  %  %  
     $  glbstable4      ControlTypes          $  glbstable3   |   %    stringsegment          stringchopleft       %     inireadstring   
   |   
  &  glbstable4  %       
  '   �   $  glbstable4        $  glbstable4         stringchopright &  glbstable4             	      �     controltypefound        �   $  glbstable3   |           %   
    stringlower        stringsegmentindex  '  %        $  glbstable4   |   %    stringsegment   '          	               	      �    togglegridspeechmode       %        $  gigridspeechmode         
  &  gigridspeechmode    $  gigridspeechmode         
 
          &  gigridspeechmode          $  gigridspeechmode         
     		 row and column headers and numbers     	      $  gigridspeechmode         
      row and column headers     	      $  gigridspeechmode         
      row and column numbers     	       data only      	         �    togglegridbraillemode      %        $  gigridbraillemode        
  &  gigridbraillemode   $  gigridbraillemode        
 
          &  gigridbraillemode         $  gigridbraillemode        
     		 row and column headers and numbers     	      $  gigridbraillemode        
      row and column headers     	      $  gigridbraillemode        
      row and column numbers     	       data only      	         ,    loadpersonalsettings            getactiveconfiguration   .jsi    
    findjawssettingsfile    '       options  GridSpeechMode       %     inireadinteger  &  gigridspeechmode        options  GridBrailleMode      %     inireadinteger  &  gigridbraillemode      8    savepersonalsettings            getactiveconfiguration   .jsi    
    findjawssettingsfile    '       options  GridSpeechMode  $  gigridspeechmode    %     iniwriteinteger '  %      options  GridBrailleMode $  gigridbraillemode   %     iniwriteinteger 
  '  %     	      �    $adjustjawsverbosity    $  gigridspeechmode    '   $  gigridbraillemode   '  		 |ToggleGridSpeechMode:Grid Speech   		 |ToggleGridBrailleMode:Grid Braille 
  '     %    jawsverbositycore      %   $  gigridspeechmode    
  " %  $  gigridbraillemode   
  
          savepersonalsettings           Message  personal settings saved        sayusingvoice                  personal settings not saved   sayformattedmessage             @    getaccname     %     getfocusobject  '  %          getobjecttypecode        
  " �      getobjecttypecode        
  
  " �      getobjecttypecode     7   
  
     %    %     accname '          getobjectname   '     %    %     accrole   !   
     %           accname '        %            getobjecttypecode        
  " �     getobjecttypecode        
  
  " �     getobjecttypecode     7   
  
          getobjectvalue  '          getobjectname   '        %     	      �    getaccvalue    %     getfocusobject  '  %          getobjecttypecode        
  " �      getobjecttypecode        
  
  " �      getobjecttypecode     7   
  
  " �      getobjecttypecode        
  
     %    %     accname '          getobjectvalue  '     %    %     accrole   !   
     %           accname '        %            getobjectvalue  '     %     	          getaccstate    %     getfocusobject  '  %     %    %     accstate    '     %       
  # � %        
  
  # � %       
    
      not selected    '     %       
     %       
   checked 
  '     %     	      p    sayobjectactiveitem         getobjecttypecode        
  # �         getcurrentwindow      getwindowstylebits       
  
             getaccstate        say           lb lm lx lv         getobjectsubtypecode      getlisttype   stringcontains             getfocus     Value        %    va508getcomponentprop   '          getfocus     State         %    va508getcomponentprop   '  %        
 
    $  gisuppressvalue          &  gisuppressvalue       %    
     say               getaccname    
     say       %        
 
    $  gisuppressstate          &  gisuppressstate       %         say               getaccstate        say       %                   positioningroup   saymessage        	         %     sayobjectactiveitem       8    activeitemchangedevent               getobjectsubtypecode    '       %  
  " �   8   %  
  
  # �      menusactive   
             getfocus     Value        %    va508getcomponentprop   '          getfocus     State         % 	   va508getcomponentprop   ' 
      gettreeviewlevel    '  %  $  previoustreeviewlevel   
              Level      %    inttostring 
     %    inttostring   saymessage     %  &  previoustreeviewlevel      $  gisuppressvalue      %        
 
       %    
     say               getaccvalue   
     say          %        
 
       %    
     say          &  gisuppressvalue          %     saytvfocusitemexpandstate      $  gisuppressstate    % 
       
 
       % 	        say          &  gisuppressstate       % 
       
 
       % 	        say                       positioningroup   saymessage     	         %   %  %  %  %  %    activeitemchangedevent        T     saytreeviewitem $  gisuppressvalue    	           saytreeviewitem       �     focuschangedevent            &  gicancelevent        &  gididfocuschange       %   %    focuschangedevent         �     keypressedevent             &  gicancelevent   %     ;  
     $  gidebugmode          &  gidebugmode         &  gidebugmode          %   %  %  %    keypressedevent       p     mousebuttonevent               &  gicancelevent      %   %  %    mousebuttonevent          (     lt_stringcast      %      	      �  	  lt_stringsegmentwithmultichardelim       %       
  '     %     stringlength    # p %  
        %   %    stringcontains  '  %               	         %   %     %    stringlength    
       
    stringchopleft  '   %       
  '   H       %   %    stringcontains  '  %        %   %       
    stringleft  '      %      	      ,     lt_cantrylvcalls             	      H    lt_getmsaarect       � � � �%        %    intref     %    intref     %    intref     %    intref  %    acclocation    %    # � %    
  # � %    
  # � %    
              	      %       
  '  %       
  '  %  %  
  '  %  %  
  '          	      �    lt_move         ispccursor    " L      userbufferisactive  
  " h      menusactive 
              	           getfocus    '       lt_cantrylvcalls    '  %        %    lvgetnumofcolumns   '     %    # $   %    getwindowtypecode        
  
              	      $  lt_lastwin  %  
     %  &  lt_lastwin       &  lt_lastcol        %             
        %    getobjectfromevent  '  %                List access error     saymessage             	      %        %    getcurrentitem  '  %                Nothing selected      saymessage             	         %    getitemcount    '  $  lt_lastcol  '     %    lvgetnumofcolumns   '     %      accfocus          
  '  %                Nothing selected      saymessage             	      %      accchildcount        
  '     %    getfirstchild   '  %                List headers not found    saymessage             	         %             
        %    getobjectfromevent  ' 	 % 	               List header access error      saymessage             	      $  lt_lastcol  '  % 	     accchildcount         
  '           ' 
       '        '        '       '       '  %    left    
     %       
  '       ' 
    %    right   
     %       
  '       ' 
    %    up  
     %       
  '       '   priorLine   '     %    down    
     %       
  '       '   nextLine    '     %    home    
          '       ' 
    %    end 
     %  '       ' 
    %    top 
          '       '   JAWSHome    '     %    bottom  
     %  '       '   JAWSEnd '     %    first   
          '       '       ' 
      '   JAWSHome    '     %    last    
     %  '  %  '       ' 
      '   JAWSEnd '     %    here    
          ' 
      '       '       '     %    cellClick   
        %    headerClick 
           '       ' 
             Unknown navigation:     %   
    saymessage             	      %       %       
          beep            '       '     %  %  
 
         beep       %  '       '        %       
          beep            '     %  %  
 
         beep       %  '     %  &  lt_lastcol  %          &  lt_suppresshighlight    %         <   %  
   >   
  	  formatstringwithembeddedfunctions         
          beep             %     %         %    accselect         %         %    accselect              pause           stopspeech              %     stringlower  click     stringcontains           %     stringlower  right     stringcontains        
 
 '     % 	 %  %  %  %  %    lt_getmsaarect            beep                	      %  %  
       
  '  %    cellClick   
          getcursorrow    '     %    headerClick 
     %  %  
       
  '          savecursor          jawscursor          savecursor        %  %    moveto     %          rightmousebutton               leftmousebutton                      delay         %        %    getcurrentitem  '     %      accfocus          
  '     %     %        % 
               %  %    lvgetcolumnheader     saymessage        %     %       
     %                  %  %  %    lvgetitemtext     saymessage                      %  %  %    lvgetitemtext     saymessage              %        % 
            % 	   %    accname   saymessage        %     %       
     %               %    %    accname   saymessage           %    %    accdescription  '     %     % 	   %    accname   lt_stringcast    :   
    stringcontains  '  %          %   ,   %       
  	  lt_stringsegmentwithmultichardelim  '     %    stringlength                  Can't find column value   saymessage             	            %  %     % 	   %    accname   stringlength    
       
    stringchopleft  '  %  %  
        %     % 	   %       
    accname   lt_stringcast    :   
    stringcontains  '  %        %  %       
    stringleft  '              Can't find end of cell value      saymessage                      %    saymessage              %              Row        %    inttostring 
    of     
     %    inttostring 
    saymessage        %              Column     %    inttostring 
    of     
     %    inttostring 
    saymessage                	      H     lt_clearsuppresshighlight         &  lt_suppresshighlight       P     $downcell       down      lt_move           $downcell         D     $upcell     up    lt_move           $upcell       P     $priorcell      left      lt_move           $priorcell        P     $nextcell       right     lt_move           $nextcell         \     $movetotopofcolumn      top   lt_move           $movetotopofcolumn        h     $movetobottomofcolumn       bottom    lt_move           $movetobottomofcolumn         `     $movetostartofrow       home      lt_move           $movetostartofrow         T     $movetoendofrow     end   lt_move           $movetoendofrow       `     $firstcellintable       first     lt_move           $firstcellintable         `     $lastcellintable        last      lt_move           $lastcellintable          P     $saycell        here      lt_move           $saycell          �     $ltleftclickcell        cellClickLeft     lt_move           saycurrentscriptkeylabel            typecurrentscriptkey             �     $ltrightclickcell       cellClickRight    lt_move           saycurrentscriptkeylabel            typecurrentscriptkey             �     $ltleftclickheader      headerClickLeft   lt_move           saycurrentscriptkeylabel            typecurrentscriptkey             �     $ltrightclickheader     headerClickRight      lt_move           saycurrentscriptkeylabel            typecurrentscriptkey             �     objstatechangedevent           %       
  " X %    8   
  
                sayline    	         %   %  %  %  %    objstatechangedevent          �     $va508sendcustomcommand    $  gbva508needtolinktodll              Framework not connected   saymessage     	      $  ghva508dllwindow    '        '  %        
  '     %  %  %    va508sendmessage          `    getcustomscripthelptext              getactiveconfiguration   .jcf    
    findjawssettingsfile    '     %    fileexists               	       Custom Command Help '  %      long    '      short   '     %     %    inttostring 
  '     %  %       %    inireadstring   '  %     	          getcustomcommandnumber       getcurrentscriptkeyname '      %     getscriptassignedto '     %     %   (     stringcontains    stringchopleft  '     %     %   )     stringcontains       
    stringleft  '     %    stringtoint    	      T    getscripthelptext            '     %    VA508SendCustomCommand          stringcompare         
          getcustomcommandnumber  '     %   %  %    getcustomscripthelptext '  %     %     	         %        %     getscriptdescription       	         %     getscriptsynopsis      	         P     getscriptsynopsis         %           getscripthelptext      	      T     getscriptdescription          %          getscripthelptext      	      