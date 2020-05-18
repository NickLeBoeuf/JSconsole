"use strict";


	// The console main style
	var style = new PIXI.TextStyle({
	    fontFamily: 'georgia',
	    fontSize: (WIDTH+HEIGHT)/80,
	    fontStyle: 'normal',
	    fontWeight: 'bold',
//      fill: ['#7a9b30', '#5a7b10'], // gradient
        fill: ['#7aFF30', '#5aab10'], // gradient
//	    fill: ['#000000', '#444444'], // gradient
	    stroke: '#4a1850',
	    strokeThickness: 0,
	    dropShadow: false,
	    wordWrap: true,
	    wordWrapWidth: WIDTH*0.9
	});
	var	nodebugstylefill = style.fill;
	var timerstyle = new PIXI.TextStyle({
	    fontFamily: 'georgia',
	    fontSize: (WIDTH+HEIGHT)/80,
	    fontStyle: 'normal',
	    fontWeight: 'bold',
	    fill: ['#FFFFFF', '#FFFF00'], // gradient
	    strokeThickness: 0,
	    dropShadow: true,
	    dropShadowColor: '#000000',
	    dropShadowBlur: 0,
	    dropShadowAngle: 1,
	    dropShadowDistance: 6,
	    wordWrap: true,
	    wordWrapWidth: 200
	});	
  	var debugstyle = new PIXI.TextStyle({
	    fontFamily: 'georgia',
	    fontSize: (WIDTH+HEIGHT)/80,
	    fontStyle: 'normal',
	    fontWeight: 'bold',
	    fill: ['#5577FF', '#BBCCFF'], // gradient
	    strokeThickness: 0,
	    dropShadow: false,
	    wordWrap: true,
	    wordWrapWidth: 200
	});	  
	var infostyle = new PIXI.TextStyle({
	    fontFamily: 'georgia',
	    fontSize: (WIDTH+HEIGHT)/50,
	    fontStyle: 'normal',
	    fontWeight: 'bold',
	    fill: ['#7f7c28', '#9f9c48'], // gradient
	    strokeThickness: 0,
	    dropShadow: true,
   	    dropShadowColor: '#000000',
	    dropShadowBlur: 0,
	    dropShadowAngle: 1,
	    dropShadowDistance: 10,
	    wordWrap: true,
	    wordWrapWidth: 540
	});	


    // Geometry and definition of the Window

	// Console input line
	const PS1 = "> ";
	var promptText = new PIXI.Text(PS1+CCURSOR, style);
	promptText.x = WIDTH/26;
	promptText.y = HEIGHT/1.5;
	// Console output line
	var consoleText = new PIXI.Text(TEXT_PROMPT, style);
	const CONSOLEX = WIDTH/26;
	const CONSOLEY = HEIGHT/2;
	consoleText.x = CONSOLEX;
	consoleText.y = CONSOLEY;	
	// Upper Right field for clock and countdown
	var timerText = new PIXI.Text('[  ]', timerstyle);
	const TIMERX = WIDTH*0.9;
	const TIMERY = HEIGHT*0.08 ;
	timerText.x = TIMERX;
	timerText.y = TIMERY;
    // Upper left field for Debug Mode
    var debugText = new PIXI.Text('BoeufCorp 1.3', style);
    debugText.x = WIDTH*0.02;
    debugText.y = HEIGHT*0.009;
    // Middle field for Security Level indicator
    var securitylevelText = new PIXI.Text(TEXT_LEVEL0, infostyle);
    const SECURITYX = WIDTH/3;
    const SECURITYY = HEIGHT/4;    
    securitylevelText.x = SECURITYX;
    securitylevelText.y = SECURITYY;
