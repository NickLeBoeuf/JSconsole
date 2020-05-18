"use strict";

// IMAGES
    const imgfolder = ['img/'];
    const img1 = [imgfolder+'black.jpg',0.5,0.5];
    const img2 = [imgfolder+'blackglass.png',0.45,0.5];
    const img3 = [imgfolder+'Layer1.png',0.5,0.5];
    const img4 = [imgfolder+'white.jpg',1.65,0.8];
    const img5 = [imgfolder+'white2.jpg',0.5,0.5];
    const img6 = [imgfolder+'gray852x480.jpg',WIDTH/840,HEIGHT/460];
    
// SOUNDS    
   	const sndfolder = ['sound/'];
	let pagersound = new PIXI.sound.Sound.from({url: sndfolder+'pager2.wav'});
	let clicksound = new PIXI.sound.Sound.from({url: sndfolder+'click.wav'});
	let returnsound = new PIXI.sound.Sound.from({url: sndfolder+'return.wav'});
	let backspacesound = new PIXI.sound.Sound.from({url: sndfolder+'/backspace.wav'});
	let syntaxerrorsound = new PIXI.sound.Sound.from({url: sndfolder+'syntaxerror.wav'});
	let opendoorsound = new PIXI.sound.Sound.from({url: sndfolder+'opendoor.mp3', singleInstance: true});
	let jackson5sound = new PIXI.sound.Sound.from({url: sndfolder+'iwantyouback.wav', singleInstance: true});
	let vivaldisound = new PIXI.sound.Sound.from({url: sndfolder+'vivaldi.wav', singleInstance: true});
	let u2sound = new PIXI.sound.Sound.from({url: sndfolder+'u2.wav', singleInstance: true});
	let whitestripessound = new PIXI.sound.Sound.from({url: sndfolder+'thewhitestripes.wav', singleInstance: true});
	let lordskingsound = new PIXI.sound.Sound.from({url: sndfolder+'lords_king.mp3', singleInstance: true});
	let lordshobbitsound = new PIXI.sound.Sound.from({url: sndfolder+'lords_hobbit.mp3', singleInstance: true});
	let lordstristesound = new PIXI.sound.Sound.from({url: sndfolder+'lords_triste.mp3', singleInstance: true});
	let lordsok1sound = new PIXI.sound.Sound.from({url: sndfolder+'lords_ok1.mp3', singleInstance: true});
	let lordsok2sound = new PIXI.sound.Sound.from({url: sndfolder+'lords_ok2.mp3', singleInstance: true});
	let lordsok3sound = new PIXI.sound.Sound.from({url: sndfolder+'lords_ok3.mp3', singleInstance: true});


     // Put a phone filter to make it more realistic
    u2sound.filters = [new PIXI.sound.filters.TelephoneFilter()];
    vivaldisound.filters = [new PIXI.sound.filters.TelephoneFilter()];
    jackson5sound.filters = [new PIXI.sound.filters.TelephoneFilter()];
    whitestripessound.filters = [new PIXI.sound.filters.TelephoneFilter()];
  
    // stop all sounds
    function stopallsounds() {
	  jackson5sound.stop();
	  vivaldisound.stop();
	  u2sound.stop();
	  whitestripessound.stop();
	  lordskingsound.stop();
	  lordshobbitsound.stop();
	  lordstristesound.stop();
	}
		
