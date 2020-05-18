
"use strict";

    // SCREEN SIZE - default
    const WIDTH  = 1280;
    const HEIGHT = 900;



    // Password for debug mode
    const DEBUGPASSWD="NICK";
    
    
	// Game texts
	const TEXT_LEVEL0 =    "-= Security level 0 =-";
	const TEXT_LEVEL1 =    "-= Security level 1 =-";
	const TEXT_LEVEL2 =    "-= Security level 2 =-";
	const TEXT_LEVEL3 =    "-= Security level 3 =-";
	const TEXT_LEVEL4 =    "-= Security level 4 =-";
	const TEXT_LEVEL5 =    "-= Security level 5 =-";
	const TEXT_LEVEL6 =    "-= Security level 6 =-";
	const TEXT_LEVEL7 =    "-= Security level 7 =-";
	const TEXT_PROMPT =    "Tapez un code ou une commande.\n";
    const TEXT_UNKNOWN =   "Code ou Commande inconnus ";
	const TEXT_TIMERSTART= "## Starting Timer";
	const TEXT_TIMERSTOP=  "## Timer Stopped";
	const TEXT_TIMERRESET= "## Timer has been reset";
	const TEXT_TIMERCANTRESET = "## Timer can't be reset";
	const TEXT_USERMODE=   "## Entering User mode";
	const TEXT_DEBUGREQ=   "## Debug mode requested - Enter Password";
    const TEXT_DEBUGENTRY= "## Password correct\n## Entering Debug mode";				  
    const TEXT_PASSWDCORRECT = "## Password correct - Raising Security Level";


    // Some riddles
    // The Morse Riddle: Truffaut p728
    const RIDDLE_MORSECODE = "L S.L.S S.S.L S.S.L.S S.S.L.S S.L S.S.L L S.L.L.S L.L.S.S.S S.S.L.L.L L.L.L.S.S";   // Truffaut p728
    const RIDDLE_MORSERATIO = 0.4;
    const RIDDLE_MORSESHORT = 50*RIDDLE_MORSERATIO;
    const RIDDLE_MORSELONG  = 3*RIDDLE_MORSESHORT;
    const RIDDLE_MORSEPAUSE = RIDDLE_MORSESHORT;
    const RIDDLE_MORSESPACE = 3*RIDDLE_MORSESHORT;
    //
    
 

    // TIMER related constants and saved variables
    const MAXTIMER = 35 *60* 1000;    

   if(!localStorage.getItem('timercurrentvalue')) {
	  localStorage.setItem('timercurrentvalue', 0);
	}
    if(!localStorage.getItem('timerlaststartvalue')) {
	  localStorage.setItem('timerlaststartvalue', MAXTIMER);
	}
    if(!localStorage.getItem('timerstarttime')) {
	  localStorage.setItem('timerstarttime', MAXTIMER);
	}
    if(!localStorage.getItem('timerrunning')) {
	  localStorage.setItem('timerrunning', 0);
	}
	
          //const TIMERPHASE = [40,30,20,10,5,2,1,0]; // Timer got 8 phases  
	const TIMERPHASE = [21,18,15,12,9,6,3,0]; // Timer got 8 phases
          //            0   1  2  3 4 5 6 7



  // PAnic mode saved variables
    if(!localStorage.getItem('panicmode')) {
	   localStorage.setItem('panicmode', 0);
	}

