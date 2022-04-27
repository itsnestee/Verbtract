 Content.makeFrontInterface(600, 350);

//Components References

const var ScriptFX1 = Synth.getEffect("ScriptFX1");
const var AudioLoopPlayer1 = Synth.getChildSynth("Audio Loop Player1");
const var Knob1 = Content.getComponent("Knob1");
const var Button2 = Content.getComponent("Button2");
const var Verge = Content.getComponent("Verge");
const var Swallow = Content.getComponent("Swallow");
const var StretchX = Content.getComponent("StretchX");
const var VerbTense = Content.getComponent("VerbTense");
const var Blend = Content.getComponent("Blend");
 
 
 
 
 
 
 
 // Trigger AudioPlayer
 reg ev;
 inline function onButton1Control(component, value)
 {
 	if(value == 1)
 	{
	 	ev = Synth.playNote(60, 60);
	 	tValue.startTimer(30);
 	}
 	
	else if (value == 0)
 	{
	 	Synth.noteOffByEventId(ev);
	 	 	tValue.stopTimer();
 	}
 
};
 
Content.getComponent("Button1").setControlCallback(onButton1Control);
 
 
 
const var tValue = Engine.createTimerObject();
 
 tValue.setTimerCallback(function()
 {
	 //Get sound From AudioPlayer
	  var lValue = AudioLoopPlayer1.getCurrentLevel(1);
	  var rValue = AudioLoopPlayer1.getCurrentLevel(0);
	  var lrValue = Math.max(lValue, rValue);
	  
 
	 if (Button2.getValue())
	 {
		 ScriptFX1.setAttribute(ScriptFX1.GateTract, 1 - (lrValue * Verge.getValue()) );
		 
		 
	 }
	 
	 else
	 {
		 ScriptFX1.setAttribute(ScriptFX1.GateTract, 1.0);
		 
		 
	 }
	 
 });
 


inline function onSwallowControl(component, value)
{
	ScriptFX1.setAttribute(ScriptFX1.Swallow, value);
};

Swallow.setControlCallback(onSwallowControl);


inline function onStretchXControl(component, value)
{
	ScriptFX1.setAttribute(ScriptFX1.StretchX, value);
};

StretchX.setControlCallback(onStretchXControl);

 
 inline function onVerbTenseControl(component, value)
 {
 	ScriptFX1.setAttribute(ScriptFX1.VerbTense, value);
 };
 
VerbTense.setControlCallback(onVerbTenseControl);



inline function onBlendControl(component, value)
{
	ScriptFX1.setAttribute(ScriptFX1.Blend, value);
};

Content.getComponent("Blend").setControlCallback(onBlendControl);

 