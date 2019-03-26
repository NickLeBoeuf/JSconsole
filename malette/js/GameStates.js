"use strict";

	// MainLoop
	function play(delta) {
		
	  var time = new Date();
	  //timerText.text = "       TIME: " + heure() + " \n" + "COUNTDOWN: "+timer.get();
	  if (timer.phase < 6) { timerText.text = timer.get(); }
	  else timerText.text = timer.get();
	  
	  if (securitylevel.level == MAXLEVEL) {
		  state = win;
		  pagersound.stop();
		  opendoorsound.play();
	  };
	  
	  // debug ease: loop timer #@
	  //if (timer.timeout == 1) {timer.init(MAXTIMER);timer.start();}
	  if (timer.timeout == 1) {state = lose;}
	  
	  // Display countdown
        
                
        timerstyle.fill = ['#000000', '#005500']
        if (panicmode == 0) {
			timerText.x = 650;
			timerText.y = 20
        switch (timer.phase) {
		case 0: {timerstyle.fontWeight = 'normal'; timerstyle.fontSize = 24; break}
	    case 1: {timerstyle.fontWeight = 'bold';  timerstyle.fontSize = 24; break}
	    case 2: {timerstyle.fontSize = 28; break}
	    case 3: {timerstyle.fontSize = 32; break}
	    case 4: {timerstyle.fontSize = 40;
			     timerText.x = 650;
	             timerText.y = 20;
	             timerText.width = 100;
                 timerText.height = 50;             
           	     timerstyle.fill = ['#578f38', '#376f18'];
           	     break}
	    case 5: {timerstyle.fontSize = 50;
			     timerText.x = 580;
	             timerText.y = 20;
	             timerText.width = 150;
                 timerText.height = 75;             
           	     timerstyle.fill = ['#e0c010', '#908005'];
           	     break}
	    case 6: {timerstyle.fontSize = 60;
			     timerText.x = 480;
	             timerText.y = 20;
	             timerText.width = 300;
                 timerText.height = 200;             
           	     timerstyle.fill = ['#e03000', '#902000'];

	             break;}
	    case 7: {timerstyle.fontSize = 60;
			     timerText.x = 40;
	             timerText.y = 20;
	             timerText.width = 720;
                 timerText.height = 520;
           	     timerstyle.fill = ['#e03000', '#902000'];             
	             break;}
	    default: {timerstyle.fontSize = 20;
			      timerText.x = 650;
	              timerText.y = 20;} 
	    }
	    }
	  
	  //if ((time % 2000) > 1800) {securitylevelText.text = "";} else {securitylevelText.text=securitylevel.getstring();}

      // Debug mode color change	  
	  if (debugmode == 1) {
		  style.fill = debugstyle.fill;
		  timerText.text += "\nKEY CODE: "+keyreader.code;
	  }
		  else 
		  style.fill = nodebugstylefill;

      // Enter in panic mode
     
     
      if (panicmode == 1) {
		  var tiltspeed = 0x0404;
		  var scaletextspeed = 0.02;
		  if (tiltdirection == -1 ) {
			  if (backgroundimg.tint > (0xFF0000+tiltspeed)) {
		          backgroundimg.tint = backgroundimg.tint - tiltspeed;
		          timerText.scale.set(timerText.scale.x+scaletextspeed,timerText.scale.y+scaletextspeed);
		          timerText.x = timerText.x - scaletextspeed*50;
	          } else {tiltdirection = 1;}
		  }
		  if (tiltdirection == 1 ) {
          	  if (backgroundimg.tint < 0xFF2020) {
		          backgroundimg.tint = backgroundimg.tint + tiltspeed;
		          timerText.scale.set(timerText.scale.x-scaletextspeed,timerText.scale.y-scaletextspeed);
		          timerText.x = timerText.x + scaletextspeed*50;
		      } else {tiltdirection = -1;}
	      }
	      securitylevelText.text = "Panic Mode !\nEntrez vide le code magique\nou sinon..."   
	  }

      if (panicmode == 2) {
		  pagersound.stop();
		  backgroundimg.tint = 0xFFFFFF;
		  panicmode = 0;
		  securitylevelText.text = securitylevel.getstring();
		  timerText.scale.set(1,1);
	  }
	}
    
	function win(delta) {
		//app.stage.removeChild(timerText);
		app.stage.removeChild(promptText);
		//app.stage.removeChild(consoleText);
		//app.stage.addChild(debugText);
		//app.stage.addChild(securitylevelText);
	    //app.stage.addChild(backgroundimg);
        
	    timer.stop();
	    consoleText.text = "Countdown stopped. Opening Doors to upper level.\n";
	    securitylevelText.text = "WELL\nDONE";
	    securitylevelText.anchor.set(0.5,0.5);
	    securitylevelText.setTransform(300,150,3,3,securitylevelText.rotation);
	    securitylevelText.rotation = securitylevelText.rotation + 0.015;
	    infostyle.fill = ['#ffff00', '#aaaa00']; 
	}

	function lose(delta) {
		app.stage.removeChild(timerText);
		app.stage.removeChild(promptText);
		
	    consoleText.text = "Time Out. Opening External Doors. You're trapped with Zombies ! \n";
	    securitylevelText.text = "YOU\nARE\nDEAD";
	    securitylevelText.anchor.set(0.5,0.5);
	    securitylevelText.setTransform(300,150,3,3,securitylevelText.rotation);
	    securitylevelText.rotation = securitylevelText.rotation + 0.015;
	    infostyle.fill = ['#ff0000', '#aa0000']; 	
	    
	    // When dead, simply type blindly TIMER RESET and reload the page
	    //if (timer.timeout == 0) {state = play;}    
	}
	
	function intro(delta) {
		app.stage.removeChild(timerText);
		
		consoleText.y = 60;
	    consoleText.text = "Bonjour,\n Je vous félicite d'être arrivés jusqu'ici. \n";
	    consoleText.text = consoleText.text + " Mais le jeu ne fait que commencer... \n";
        consoleText.text = consoleText.text + " La suite risque de se révéler plus ardue,\n";
        consoleText.text = consoleText.text + " et il va vous falloir faire preuve d'astuce,\n";
        consoleText.text = consoleText.text + " de déduction, et d'esprit d'équipe.\n";
        consoleText.text = consoleText.text + "\n Préparez vous à affronter le meilleur et le pire !\n";
        consoleText.text = consoleText.text + "\n Tapez READY pour commencer... \n Bonne Chance !\n";
	    securitylevelText.text = "PRETS?";
	    securitylevelText.anchor.set(0.5,0.5);
	    securitylevelText.setTransform(300,380,1.5,1.5,securitylevelText.rotation);
	    securitylevelText.rotation = securitylevelText.rotation + 0.015;
	    infostyle.fill = ['#ff0000', '#aa0000']; 	
	    
	    
	    timerText.x = 650;
	    timerText.y = 20;
	    timerText.scale.set(1,1);
        timerstyle.fill = ['#578f38', '#376f18'];
        
        if (securitylevel.level == 0) {
		  state = play;
		  pagersound.stop();
		  opendoorsound.play();
		  consoleText.y = 300;
		  consoleText.text = "Démarrage du Compte à Rebours...\n";
		  app.stage.addChild(timerText);
		  securitylevelText.anchor.set(0,0);
		  securitylevelText.setTransform(130,150,1,1,0);
	    };
	    
	    // When dead, simply type blindly TIMER RESET and reload the page
	    //if (timer.timeout == 0) {state = play;}    
	}
	
	
