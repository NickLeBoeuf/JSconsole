"use strict";

// IMAGES
    const imgfolder = ['img/'];
    const img1 = [imgfolder+'black.jpg',0.5,0.5];
    const img2 = [imgfolder+'blackglass.png',0.45,0.5];
    const img3 = [imgfolder+'Layer1.png',0.5,0.5];
    const img4 = [imgfolder+'white.jpg',0.65,0.8];
    const img5 = [imgfolder+'white2.jpg',0.5,0.5];
    
// SOUNDS    
   	const sndfolder = ['sound/'];
	let pagersound = new PIXI.sound.Sound.from({url: sndfolder+'pager2.wav'});
	let clicksound = new PIXI.sound.Sound.from({url: sndfolder+'click.wav'});
	let returnsound = new PIXI.sound.Sound.from({url: sndfolder+'return.wav'});
	let backspacesound = new PIXI.sound.Sound.from({url: sndfolder+'/backspace.wav'});
	let syntaxerrorsound = new PIXI.sound.Sound.from({url: sndfolder+'syntaxerror.wav'});
	let opendoorsound = new PIXI.sound.Sound.from({url: sndfolder+'opendoor.mp3'});
	let jackson5sound = new PIXI.sound.Sound.from({url: sndfolder+'iwantyouback.wav'});
	let vivaldisound = new PIXI.sound.Sound.from({url: sndfolder+'vivaldi.wav'});
	let u2sound = new PIXI.sound.Sound.from({url: sndfolder+'u2.wav'});
	let whitestripessound = new PIXI.sound.Sound.from({url: sndfolder+'thewhitestripes.wav'});

     // Put a phone filter to make it more realistic
    u2sound.filters = [new PIXI.sound.filters.TelephoneFilter()];
    vivaldisound.filters = [new PIXI.sound.filters.TelephoneFilter()];
    jackson5sound.filters = [new PIXI.sound.filters.TelephoneFilter()];
    whitestripessound.filters = [new PIXI.sound.filters.TelephoneFilter()];
