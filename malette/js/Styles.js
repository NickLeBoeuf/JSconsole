"use strict";


	// The console main style
	var style = new PIXI.TextStyle({
	    fontFamily: 'georgia',
	    fontSize: 20,
	    fontStyle: 'normal',
	    fontWeight: 'bold',
//	    fill: ['#7a9b30', '#5a7b10'], // gradient
	    fill: ['#000000', '#444444'], // gradient
	    stroke: '#4a1850',
	    strokeThickness: 0,
	    dropShadow: false,
	    dropShadowColor: '#000000',
	    dropShadowBlur: 0,
	    dropShadowAngle: 1,
	    dropShadowDistance: 6,
	    wordWrap: true,
	    wordWrapWidth: 740
	});
	var	nodebugstylefill = style.fill;
	var timerstyle = new PIXI.TextStyle({
	    fontFamily: 'georgia',
	    fontSize: 20,
	    fontStyle: 'normal',
	    fontWeight: 'bold',
	    fill: ['#FFFFFF', '#0000FF'], // gradient
	    strokeThickness: 0,
	    dropShadow: false,
	    wordWrap: true,
	    wordWrapWidth: 200
	});	
  	var debugstyle = new PIXI.TextStyle({
	    fontFamily: 'georgia',
	    fontSize: 20,
	    fontStyle: 'normal',
	    fontWeight: 'bold',
	    fill: ['#000000', '#000099'], // gradient
	    strokeThickness: 0,
	    dropShadow: false,
	    wordWrap: true,
	    wordWrapWidth: 200
	});	  
	var infostyle = new PIXI.TextStyle({
	    fontFamily: 'georgia',
	    fontSize: 30,
	    fontStyle: 'normal',
	    fontWeight: 'bold',
	    fill: ['#7f5c28', '#9f7c48'], // gradient
	    strokeThickness: 0,
	    dropShadow: false,
	    wordWrap: true,
	    wordWrapWidth: 540
	});	


    // Geometry and definition of the Window

	// Console input line
	const PS1 = "> ";
	var promptText = new PIXI.Text(PS1+CCURSOR, style);
	promptText.x = 30;
	promptText.y = 400;
	// Console output line
	var consoleText = new PIXI.Text(TEXT_PROMPT, style);
	consoleText.x = 30;
	consoleText.y = 300;	
	// Upper Right field for clock and countdown
	var timerText = new PIXI.Text('[  ]', timerstyle);
	timerText.x = 650;
	timerText.y = 40 ;
    // Upper left field for Debug Mode
    var debugText = new PIXI.Text('BoeufCorp 1.2', style);
    debugText.x = 20;
    debugText.y = 10;
    // Middle field for Security Level indicator
    var securitylevelText = new PIXI.Text(TEXT_LEVEL0, infostyle);
    securitylevelText.x = 130;
    securitylevelText.y = 150;
