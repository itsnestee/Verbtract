Content.makeFrontInterface(600, 350);

//Components References
const var ScriptFX1 = Synth.getEffect("ScriptFX1");
const var AudioLoopPlayer1 = Synth.getChildSynth("Audio Loop Player1");
const var Verge = Content.getComponent("Verge");
const var Button2 = Content.getComponent("Button2");
const var Size = Content.getComponent("Size");
const var Density = Content.getComponent("Density");
const var Reflectivity = Content.getComponent("Reflectivity");
const var Distance = Content.getComponent("Distance");

const var D1 = Content.getComponent("D1");
const var D2 = Content.getComponent("D2");
const var D3 = Content.getComponent("D3");
const var D4 = Content.getComponent("D4");
const var D5 = Content.getComponent("D5");

reg offset = Distance.getValue();

inline function onDistanceControl(component, value)
{
	D2.setValue(D1.getValue() + Distance.getValue());
	D3.setValue(D2.getValue() + Distance.getValue());
	D4.setValue(D3.getValue() + Distance.getValue());
	D5.setValue(D4.getValue() + Distance.getValue());	
	
	ScriptFX1.setAttribute(ScriptFX1.Size1, D1.getValue());
	ScriptFX1.setAttribute(ScriptFX1.Size2, D1.getValue() + Distance.getValue());
	ScriptFX1.setAttribute(ScriptFX1.Size3, D2.getValue() + Distance.getValue());
	ScriptFX1.setAttribute(ScriptFX1.Size4, D3.getValue() + Distance.getValue());
	ScriptFX1.setAttribute(ScriptFX1.Size5, D4.getValue() + Distance.getValue());	    
};

Distance.setControlCallback(onDistanceControl);


inline function onSizeControl(component, value)
{
	
	D1.setValue(value);
	D2.setValue(D1.getValue() + Distance.getValue());
	D3.setValue(D2.getValue() + Distance.getValue());
	D4.setValue(D3.getValue() + Distance.getValue());
	D5.setValue(D4.getValue() + Distance.getValue());
	
	ScriptFX1.setAttribute(ScriptFX1.Size1, D1.getValue());
	ScriptFX1.setAttribute(ScriptFX1.Size2, D1.getValue() + Distance.getValue());
	ScriptFX1.setAttribute(ScriptFX1.Size3, D2.getValue() + Distance.getValue());
	ScriptFX1.setAttribute(ScriptFX1.Size4, D3.getValue() + Distance.getValue());
	ScriptFX1.setAttribute(ScriptFX1.Size5, D4.getValue() + Distance.getValue());
	
	D2.changed();
	D3.changed();
	D4.changed();
	D5.changed();
};

Size.setControlCallback(onSizeControl);

inline function onDensityControl(component, value)
{
	ScriptFX1.setAttribute(ScriptFX1.Density, value);
};

Density.setControlCallback(onDensityControl);

inline function onReflectivityControl(component, value)
{
	ScriptFX1.setAttribute(ScriptFX1.Reflectivity, value);
};

Reflectivity.setControlCallback(onReflectivityControl);















 

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
 




 