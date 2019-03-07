"use strict";

    // Timer class /////////////////////////////////////////////////////

     
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
    //                  0   1  2  3 4 5 6 7

    function Timer() {
	  this.maxvalue = new Date(MAXTIMER); 
	  this.currentvalue = this.maxvalue;
	  this.laststartvalue = this.maxvalue;
	  this.isrunning = undefined;
	  this.starttime = undefined;
	  this.timeout = 0;
	  this.phase = undefined;
	}
    Timer.prototype.restore = function () {
      this.currentvalue   = new Date(localStorage.getItem('timercurrentvalue'));
	  this.laststartvalue = new Date(localStorage.getItem('timerlaststartvalue'));
      this.starttime      = new Date(localStorage.getItem('timerstarttime'));
      this.isrunning      = localStorage.getItem('timerrunning');
      // restore function does not stop the timer if it was running
    };
    Timer.prototype.init = function (val) {
	  this.maxvalue.setTime(val);
      this.currentvalue=this.maxvalue;
	  this.laststartvalue = this.maxvalue;
      this.timeout = 0;
      this.isrunning = 0;   // init function stops the timer
      localStorage.setItem('timercurrentvalue', this.currentvalue);
      localStorage.setItem('timerlaststartvalue', this.laststartvalue);
      localStorage.setItem('timerrunning', this.isrunning);
      };
    Timer.prototype.get = function () { 
      // Timer phase section
      //var remainingminutes = this.currentvalue.getMinutes();
      var remainingminutes = this.currentvalue.getSeconds();
      if      (remainingminutes > TIMERPHASE[0]) {this.phase = 0;} //PHASECOOLEST}
      else if (remainingminutes > TIMERPHASE[1]) {this.phase = 1;} //PHASECOOLER;}
      else if (remainingminutes > TIMERPHASE[2]) {this.phase = 2;} //PHASECOOL;}
      else if (remainingminutes > TIMERPHASE[3]) {this.phase = 3;} // PHASEWARM;}
      else if (remainingminutes > TIMERPHASE[4])  {this.phase =4;} // PHASEWARMER;}
      else if (remainingminutes > TIMERPHASE[5])  {this.phase =5;} //PHASEWARMEST;}
      else if (remainingminutes > TIMERPHASE[6])  {this.phase =6;} //PHASEBURNT;}
      else this.phase = 7; // PHASEALMOSTDEAD
      
      // Timer calculation
	  if (this.timeout == 1) {this.phase = 8;return -1} // Timeout = PHASEDEAD
	  if (this.isrunning == 0) {return ("0"+this.currentvalue.getMinutes()).slice(-2) + " " + ("0"+ this.currentvalue.getSeconds()).slice(-2);}
      var currenttime = new Date();
	  var timeelapsed = new Date(currenttime - this.starttime);
	  this.currentvalue = new Date(this.laststartvalue - timeelapsed);
	  localStorage.setItem('timercurrentvalue', this.currentvalue);
	  if (this.currentvalue.valueOf() < 999) {this.timeout=1; this.isrunning =1}
	  return ("0"+this.currentvalue.getMinutes()).slice(-2) + " " + ("0"+ this.currentvalue.getSeconds()).slice(-2);
	}
    Timer.prototype.start = function () {
		if (this.isrunning ==0) {
			this.isrunning = 1;	
      		this.starttime = new Date(); // initialized with the current time
            localStorage.setItem('timerrunning', this.isrunning);
      		localStorage.setItem('timerstarttime', this.starttime);
		} // else no action
	}
    Timer.prototype.stop = function () {
      this.isrunning = 0;
	  this.laststartvalue = this.currentvalue;
	  localStorage.setItem('timerrunning', this.isrunning);
      localStorage.setItem('timerlaststartvalue', this.laststartvalue);
	}      	
