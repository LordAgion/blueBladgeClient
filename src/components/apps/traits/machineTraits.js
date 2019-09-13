import React, {useState} from 'react';
import './hover.css'
// import SpiecesDisplay from  '../spiecesDisplay';




const MachineTraits= (traits) => {
    
    let [traitPoints, setTraitPoints] =useState(8)
    let [traitPicks, setTraitPicks] =useState(4)
    var [doubleJointed, setDoubleJointed] = useState(false)
    var [durable, setDurable, applyDurable] = useState(false)
    var [efficientProcessors, setEfficientProcessors, applyEfficientProcessors] = useState(false)
    var [emotionEmulators, setEmotionEmulators, applyEmotionEmulators] = useState(false)
    var [enhancedMemory, setEnhancedMemory, applyEnhancedMemory] = useState(false)
    var [learningAlgorithms, setLearningAlgorithms, applyLearningAlgorithms] = useState(false)
    var [logicEngines, setLogicEngines, applyLogicEngines] = useState(false)
    var [massProduced, setMassProduced, applyMassProduced] = useState(false)
    var [powerDrills, setPowerDrills, applyPowerDrills] = useState(false)
    var [recycled, setRecycled, applyRecycled] = useState(false)
    var [Bulky, setBulky, applyBulky] = useState(false)
    var [superconductive, setSuperconductive, applySuperconductive] = useState(false)
    var [CustomMade, setCustomMade, applyCustomMade] = useState(false)
    var [HighMaintenance, setHighMaintenance, applyHighMaintenance] = useState(false)
    var [Luxurious, setLuxurious, applyLuxurious] = useState(false)
    var [RepurposedHardware, setRepurposedHardware, applyRepurposedHardware] = useState(false)
    var [Uncanny, setUncanny, applyUncanny] = useState(false)




    let countDown= (e, f) => {
        
        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)

    }
    let countUp= (e, f) => {
        
        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)

    }
    let moveUpDoubleJointed = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setDoubleJointed(g)
        //console.log(doubleJointed)
        
        return doubleJointed
        

        
        
        // applyDoubleJointed(h)
        

    }
    let moveDownDoubleJointed = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setDoubleJointed(g)
        //console.log(doubleJointed)
        return doubleJointed
        
        //applyDoubleJointed(h)

    }
    let moveUpDurable = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setDurable(g)
        //applyDurable(h)

    }
    let moveDownDurable = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setDurable(g)
        //applyDurable(h)

    }

    let moveDownEfficientProcessors = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setEfficientProcessors(g)
        //applyEfficientProcessors(h)

    }
    let moveUpEfficientProcessors = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setEfficientProcessors(g)
        //applyEfficientProcessors(h)

    }
    let moveDownEmotionEmulators = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setEmotionEmulators(g)
        //applyEmotionEmulators(h)

    }
    let moveUpEmotionEmulators = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setEmotionEmulators(g)
        //applyEmotionEmulators(h)

    }
    let moveDownEnhancedMemory = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setEnhancedMemory(g)
        //applyEnhancedMemory(h)

    }
    let moveUpEnhancedMemory = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setEnhancedMemory(g)
        //applyEnhancedMemory(h)

    }
    let moveDownLearningAlgorithms = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setLearningAlgorithms(g)
        //applyLearningAlgorithms(h)

    }
    let moveUpLearningAlgorithms = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setLearningAlgorithms(g)
        //applyLearningAlgorithms(h)

    }
    let moveDownLogicEngines = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setLogicEngines(g)
        //applyLogicEngines(h)

    }
    let moveUpLogicEngines = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setLogicEngines(g)
        //applyLogicEngines(h)

    }
    let moveUpMassProduced = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setMassProduced(g)
        //applyMassProduced(h)

    }
    let moveDownMassProduced = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setMassProduced(g)
        //applyMassProduced(h)

    }
    let moveUpPowerDrills = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setPowerDrills(g)
        //applyPowerDrills(h)

    }
    let moveDownPowerDrills = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setPowerDrills(g)
        //applyPowerDrills(h)

    }
    let moveUpRecycled = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setRecycled(g)
        //applyRecycled(h)

    }
    let moveDownRecycled = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setRecycled(g)
        //applyRecycled(h)

    }
    let moveUpSuperconductive = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setSuperconductive(g)
        //applySuperconductive(h)

    }
    let moveDownSuperconductive = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setSuperconductive(g)
        //applySuperconductive(h)

    }
    let moveUpBulky = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks - f)
        setBulky(g)
        //applyBulky(h)

    }
    let moveDownBulky = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks + f)
        setBulky(g)
        //applyBulky(h)

    }

    let moveUpCustomMade = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks - f)
        setCustomMade(g)
        //applyCustomMade(h)

    }
    let moveDownCustomMade = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks + f)
        setCustomMade(g)
        //applyCustomMade(h)


    }

    let moveUpHighMaintenance = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks - f)
        setHighMaintenance(g)
        //applyHighMaintenance(h)


    }
    let moveDownHighMaintenance = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks + f)
        setHighMaintenance(g)
        //applyHighMaintenance(h)

    }

    let moveUpLuxurious = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks - f)
        setLuxurious(g)
        //applyLuxurious(h)

    }
    let moveDownLuxurious = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks + f)
        setLuxurious(g)
        //applyLuxurious(h)

    }

    let moveUpRepurposedHardware	 = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks - f)
        setRepurposedHardware(g)
        //applyRepurposedHardware(h)

    }
    let moveDownRepurposedHardware = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks + f)
        setRepurposedHardware(g)
       //applyRepurposedHardware(h)

    }

    let moveUpUncanny =(e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks - f)
        setUncanny(g)
        //applyUncanny(h)

    }
    let moveDownUncanny = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks + f)
        setUncanny(g)
        //applyUncanny(h)

    }




    return ( 
        <div>
        
            <h4>trait points left : {traitPoints}</h4>
            <h4>trait picks left : {traitPicks}</h4>
            <table>
                <thead>
                    <td> Selected traits</td>
                    {/* <tr>
                    <button type="submit" onClick={(e) => countUp(1,1)}> 
            +1
            </button></tr> */}

            <tr> 
            {traitPicks != 4 ? null:  <td className="display"><button type="submit"> 
                    <div>No Traits Selected</div>
            </button>
            </td>} 

           
            {!doubleJointed ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDoubleJointed( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png"></img><div>Double Jointed</div>
            </button><span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
            </td>} 
            

          
                   {!durable ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDurable( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/26/Durable.png"></img> <div>Durable</div>
            </button> <span className="displaytext"><div>Robot Upkeep –10%</div> <div> 1 Trait Point</div></span>
                   </td>} 
           

                   
                   {!efficientProcessors ? null: <td className="display"><button type="submit" onClick={(e) => moveDownEfficientProcessors( 3, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png"></img> <div>Efficient Processors</div>
            </button><span className="displaytext"><div>Resources from Jobs +5%</div> <div> 3 Trait Point</div></span>
                   </td>} 
            

                   
                   {!emotionEmulators ? null: <td className="display"><button type="submit" onClick={(e) => moveDownEmotionEmulators( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png"></img> <div>Emotion Emulators</div>
            </button><span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                  
                   {!enhancedMemory ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownEnhancedMemory( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Enhanced Memory</div>
            </button><span className="displaytext"><div>Leader Level Cap +2</div> <div> 2 Trait Point</div></span>
                   </td>} 
            

                   
                   {!learningAlgorithms ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLearningAlgorithms( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Learning Algorithms</div>
            </button><span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   
                   {!logicEngines ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLogicEngines( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png"></img> <div> Logic Engines</div>
            </button><span className="displaytext"><div> Research Output +10%</div> <div> 2 Trait Point</div></span>
                   </td>} 
            

                  
                   {!massProduced ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownMassProduced( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png"></img> <div> Mass-Produced</div>
            </button><span className="displaytext"><div>Pop Assembly Speed +15%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   

                  
                   {!powerDrills ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownPowerDrills( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png"></img> <div> Power Drills</div>
            </button><span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                   </td>} 
            

                   
                   {!recycled ? null: <td className="display"><button type="submit" onClick={(e) => moveDownRecycled( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png"></img> <div> Recycled</div>
            </button><span className="displaytext"><div>Pop Assembly Cost –20%</div> <div> 2 Trait Point</div></span>
                   </td>} 
            

                   
                   {!superconductive ? null: <td className="display"><button type="submit" onClick={(e) => moveDownSuperconductive( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png"></img> <div> Superconductive</div>
            </button><span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
                   </td>} 
            
                   
                   {!Bulky ? null: <td className="display"><button type="submit" onClick={(e) => moveDownBulky( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png"></img> <div> Bulky</div>
            </button><span className="displaytext"><div>Pop Housing Usage +10%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   {!CustomMade ? null: <td className="display"><button type="submit" onClick={(e) => moveDownCustomMade( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png"></img> <div> Custom-Made</div>
            </button><span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            
                   
                   {!HighMaintenance ? null: <td className="display"><button type="submit" onClick={(e) => moveDownHighMaintenance( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png"></img> <div> High Maintenance</div>
            </button><span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            
                   
                   
                   {!Luxurious ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLuxurious( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png"></img> <div> Luxurious</div>
            </button><span className="displaytext"><div>Pop Assembly Cost +20%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   
                   {!RepurposedHardware ? null: <td className="display"><button type="submit" onClick={(e) => moveDownRepurposedHardware( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png"></img> <div> Repurposed Hardware</div>
            </button><span className="displaytext"><div>Leader Experience Gain –25%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   

                  
                   {!Uncanny ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownUncanny( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png"></img> <div> Uncanny</div>
            </button><span className="displaytext"><div>Amenities from Jobs −20%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   </tr>

                   


                    <td>Unselected traits</td>
                    {/* <tr>
                    <button type="submit" onClick={(e) => countDown(1,1)}> 
            -1
            </button></tr> */}

 
 {/* <div className="tooltip"> </div> */}
            <tr> 
            
            <td className="display">
            {doubleJointed ? null: <button type="submit" onClick={(e) => moveUpDoubleJointed( 1, 1, true, "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png"></img><div>Double Jointed</div>
            </button>} 
            <span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
            </td>

           <td className="display">
                   {durable ? null: <button type="submit" onClick={(e) => moveUpDurable( 1, 1, true,"https://stellaris.paradoxwikis.com/images/2/26/Durable.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/26/Durable.png"></img> <div>Durable</div>
            </button>} 
            <span className="displaytext"><div>Robot Upkeep –10%</div> <div> 1 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {efficientProcessors ? null: <button type="submit" onClick={(e) => moveUpEfficientProcessors( 3, 1, true,"https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png"></img> <div>Efficient Processors</div>
            </button>} 
            <span className="displaytext"><div>Resources from Jobs +5%</div> <div> 3 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {emotionEmulators ? null: <button type="submit" onClick={(e) => moveUpEmotionEmulators( 1, 1, true,"https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png"></img> <div>Emotion Emulators</div>
            </button>} 
            <span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 1 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {enhancedMemory ? null: <button type="submit" onClick={(e) => moveUpEnhancedMemory( 2, 1, true,"https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Enhanced Memory</div>
            </button>} 
            <span className="displaytext"><div>Leader Level Cap +2</div> <div> 2 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {learningAlgorithms ? null: <button type="submit" onClick={(e) => moveUpLearningAlgorithms( 1, 1, true,"https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Learning Algorithms</div>
            </button>} 
            <span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {logicEngines ? null: <button type="submit" onClick={(e) => moveUpLogicEngines( 2, 1, true,"https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png"></img> <div> Logic Engines</div>
            </button>} 
            <span className="displaytext"><div> Research Output +10%</div> <div> 2 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {massProduced ? null: <button type="submit" onClick={(e) => moveUpMassProduced( 1, 1, true,"https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png"></img> <div> Mass-Produced</div>
            </button>} 
            <span className="displaytext"><div>Pop Assembly Speed +15%</div> <div> 1 Trait Point</div></span>
                   </td>


                   </tr><tr>

                   <td className="display">
                   {powerDrills ? null: <button type="submit" onClick={(e) => moveUpPowerDrills( 2, 1, true,"https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png"></img> <div> Power Drills</div>
            </button>} 
            <span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {recycled ? null: <button type="submit" onClick={(e) => moveUpRecycled( 2, 1, true,"https://stellaris.paradoxwikis.com/images/6/68/Recycled.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png"></img> <div> Recycled</div>
            </button>} 
            <span className="displaytext"><div>Pop Assembly Cost –20%</div> <div> 2 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {superconductive ? null: <button type="submit" onClick={(e) => moveUpSuperconductive( 2, 1, true,"https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png"></img> <div> Superconductive</div>
            </button>} 
            <span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
                   </td>
                   <td className="display">
                   {Bulky ? null: <button type="submit" onClick={(e) => moveUpBulky( 1, 1, true,"https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png"></img> <div> Bulky</div>
            </button>} 
            <span className="displaytext"><div>Pop Housing Usage +10%</div> <div> 1 Trait Point</div></span>
                   </td>
                   <td className="display">
                   {CustomMade ? null: <button type="submit" onClick={(e) => moveUpCustomMade( 1, 1, true,"https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png"></img> <div> Custom-Made</div>
            </button>} 
            <span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                   </td>
                   <td className="display">
                   {HighMaintenance ? null: <button type="submit" onClick={(e) => moveUpHighMaintenance( 1, 1, true,"https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png"></img> <div> High Maintenance</div>
            </button>} 
            <span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                   </td>
                   
                   <td className="display">
                   {Luxurious ? null: <button type="submit" onClick={(e) => moveUpLuxurious( 1, 1, true,"https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png"></img> <div> Luxurious</div>
            </button>} 
            <span className="displaytext"><div>Pop Assembly Cost +20%</div> <div> 1 Trait Point</div></span>
                   </td>

                   <td className="display">
                   {RepurposedHardware ? null: <button type="submit" onClick={(e) => moveUpRepurposedHardware( 1, 1, true,"https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png"></img> <div> Repurposed Hardware</div>
            </button>} 
            <span className="displaytext"><div>Leader Experience Gain –25%</div> <div> 1 Trait Point</div></span>
                   </td>

                   </tr><tr>

                   <td className="display">
                   {Uncanny ? null: <button type="submit" onClick={(e) => moveUpUncanny( 1, 1, true,"https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png"></img> <div> Uncanny</div>
            </button>} 
            <span className="displaytext"><div>Amenities from Jobs −20%</div> <div> 1 Trait Point</div></span>
                   </td>




                   </tr>

               
                   
                   
                </thead>
            </table>



            

        </div>
        
    )
}


export default MachineTraits


