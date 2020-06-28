
"use strict";

	// Prompt Analyzer function
	
	function PAnalyze() {
	  this.lastcommand = "";
	}
	
	
    PAnalyze.prototype.command = function(inputwithcursor) {
      var input = inputwithcursor.slice(2, inputwithcursor.length-1)
      consoleText.text = TEXT_PROMPT + "## "+input+"\n";
      this.lastcommand = input;
	  // Password and level evaluation section
	  //debugText.text = " >> ";
	  for (var [passwd, found] of riddles) {
	    //debugText.text += passwd;
	    if ((input == passwd) && (found == 0)) {
		  riddles.set(passwd, 1);
		  securitylevel.level++;
          consoleText.text += TEXT_PASSWDCORRECT;
		  pagersound.loop = false;
          pagersound.play();
		  return;
		}
	  }
	  // Debug mode entry control
      if ((debugrequest == 1) && (input == DEBUGPASSWD)) {
		consoleText.text = TEXT_DEBUGENTRY;
		debugmode = 1; debugrequest == 0; this.lastcommand ="";
	  }

	  // Analyze Commands
	  else {
	      if (debugmode == 1) { // Commands in Debug mode
			  debugrequest = 0;
		      switch (input) {
				case "TIMER START":
				  timer.start();
				  consoleText.text += TEXT_TIMERSTART;
				  break;
				case "TIMER STOP":
				  timer.stop();
				  consoleText.text += TEXT_TIMERSTOP;
				  break;
				case "TIMER RESET":
				  timer.init(MAXTIMER);
				  consoleText.text += TEXT_TIMERRESET;
				  break;
				case "DEBUG OFF":
				  consoleText.text += TEXT_USERMODE;
				  debugmode = 0;
				  break;	    
				default:
				  consoleText.text += TEXT_UNKNOWN;
				  syntaxerrorsound.play();
			  }
			}
		  else {              // Commands in user mode	  
		      switch (input) {
				// Debug mode control
				case "DEBUG":
				  consoleText.text += TEXT_DEBUGREQ;
				  debugrequest = 1;
				  break;
				// User commands
				case "TIMER START":
				  timer.start();
				  consoleText.text += TEXT_TIMERSTART;
				  break;
				case "TIMER RESET":
				  if (timer.timeout == 1) {  // Warning : #@ timer can be reset in user mode if timeout has been reached
					timer.init(MAXTIMER);
					consoleText.text += TEXT_TIMERRESET;
				  } else {
					consoleText.text += TEXT_TIMERCANTRESET 
			      }
				  break;
				case "READY":
				  securitylevel.level++;
				  PIXI.sound.filtersAll = [];
				  timer.start();
				  break;
				// Mode Panic (test) __________________________________
				case "PANIC":
				  localStorage.setItem('panicmode', 1);
				  pagersound.loop = true;
				  pagersound.play();
				  timer.doublespeedinit();
				  break;
				case "PANIC2":
				case "987654312127420":
				  localStorage.setItem('panicmode', 2);timer.doublespeedstop();
				  break;				  
                // Riddle Quizz musical = 4715 ________________________
				case "ECOUTE 1":
				  stopallsounds();
				  jackson5sound.play();
				  break;
				case "ECOUTE 10":
   				  stopallsounds();
				  u2sound.play();
				  break;
				case "ECOUTE 100":
   				  stopallsounds();				  
				  whitestripessound.play();
			      break;
				case "ECOUTE 1000":
   				  stopallsounds();
   				  vivaldisound.play();
				  break;
				// Riddle morse code __________________________________
				case "OTARIE":
				  morsecode = 1;
				  consoleText.text += "Avec deux Grandes Dents...";
				  break;
				// Riddle Lords of the rings __________________________
				case "ANGERTHAS":
   				  stopallsounds();
   				  lordskingsound.play();
				  consoleText.text += "Ecoutez ! Qui est donc le (petit) heros de\ncette fresque medievale fantastique ?";
				  tolkien =-1;
				  break;
				case "FRODON":
   				  stopallsounds();				  
				  lordshobbitsound.play();
				  consoleText.text += "Bravo ! A present, quel est le nom de\nl'auteur du Seigneur des Anneaux ?";
				  tolkien = 0;
				  break;
				case "TOLKIEN":
 				  if (tolkien == 0) {
   				    stopallsounds();
 				    lordstristesound.play();
 				    consoleText.text += "Facile... Mais qui est mort en l'annee 3440\ndu Second Age de la Terre du Mileu ?";
 				    tolkien = 1;
 				  } else {
					if (tolkien == 1) {
   				      stopallsounds();
   				      lordstristesound.play();
 				      consoleText.text += "Il va vous falloir un manuel d'histoire de la Terre du Milieu...";
 				      tolkien = 2;} else {
					  if (tolkien == 2) {
   				        stopallsounds();						
						lordstristesound.play();
 				        consoleText.text += "Dernier indice : Appendice B...";
 				        tolkien = 0;}
 				    }
				  }    
				    
 				  
 				  break;
 				case "ANARION":
   				  stopallsounds();
 				  lordskingsound.play();
 				  consoleText.text += "Bien joue ! Vous avez gagne le droit de\nfouiller le jeu de flechettes !";
 				  tolkien =3;
 				  break;
				case "1239129":
				  if (tolkien == 3) {
    			    stopallsounds();
  				    lordsok1sound.play();
  				    consoleText.text += "--== un anneau ==--";
  				    tolkien = 4;
				  }
 				  break;
				case "8391224":
   				  if (tolkien == 4) {
   				    stopallsounds();
 				    lordsok2sound.play();
 				    consoleText.text += "--== pour les gouverner ==--";
 				    tolkien = 5;
 				  }
 				  break;
 				case "839129":
   				  if (tolkien == 5) {
					stopallsounds();
 				    lordsok3sound.play();
 				    consoleText.text += "--== TOUS ! ==--";
 				    tolkien = 5;
				  }
 				  break;
				// Riddle Quizz cuisine __________________________
				case "TOPCHEF":
   				  stopallsounds();
   				  topchefsound.play();
   				  consoleText.text += "C'est parti pour un Quizz cuisine du monde.\nquestion 1: Quel fromage trouve t on dans le Welch ?";
				  kitchen =1;
				  break;
				  
				// Riddle Bali __________________________
				case "SIDARAP":
   				  stopallsounds();
   				  rapsound.play();
   				  consoleText.text += "C'est bizarre comme mot-clef pour un voyage a Bali...Cherchez encore !";
   				  break;
				case "PARADIS":
   				  stopallsounds();
   				  gamelansound.play();
   				  consoleText.text += "Bravo !\nVous ne gagnez helas pas un voyage a Bali, mais le seulement le prochain indice:\ncelui-ci";
   				  break;
				// other commands _____________________________________
				
				case "STOP":
				  stopallsounds();
				  break;				  
				case "":
		          debugrequest = 0;
				  break;
				default:
				  debugrequest = 0;
				  consoleText.text += TEXT_UNKNOWN;
				  syntaxerrorsound.play();
			  }
		  }
	  }
	}
    PAnalyze.prototype.get = function () {  } 	
      	
