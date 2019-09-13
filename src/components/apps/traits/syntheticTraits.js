import React, {useState} from 'react';
import './hover.css'
// import SpiecesDisplay from  '../spiecesDisplay';




const SyntheticTraits= (traits) => {
    
    let [traitPoints, setTraitPoints] =useState(5)
    let [traitPicks, setTraitPicks] =useState(4)
    let [doubleJointed, setDoubleJointed] = useState(false)
    let [durable, setDurable] = useState(false)
    var [efficientProcessors, setEfficientProcessors] = useState(false)
    var [enhancedMemory, setEnhancedMemory] = useState(false)
    var [learningAlgorithms, setLearningAlgorithms, ] = useState(false)
    var [logicEngines, setLogicEngines] = useState(false)
    var [massProduced, setMassProduced] = useState(false)
    var [powerDrills, setPowerDrills] = useState(false)
    var [recycled, setRecycled]  = useState(false)
    var [Bulky, setBulky, applyBulky] = useState(false)
    var [superconductive, setSuperconductive] = useState(false)
    var [CustomMade, setCustomMade] = useState(false)
    var [HighMaintenance, setHighMaintenance ] = useState(false)
    var [Luxurious, setLuxurious ] = useState(false)
    var [RepurposedHardware, setRepurposedHardware] = useState(false)
    

    var [domesticProtocols, setDomesticProtocols ] = useState(false)
    var [harvesters, setHarvesters ] = useState(false)
    var [loyaltyCircuits, setLoyaltyCircuits ] = useState(false)
    var [propagandaMachines, setPropagandaMachines ] = useState(false)




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
    let moveDownDomesticProtocols = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setDomesticProtocols(g)
        //applyEmotionEmulators(h)

    }
    let moveUpDomesticProtocols = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setDomesticProtocols(g)
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

    let moveUpHarvesters =(e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setHarvesters(g)
        //applyUncanny(h)

    }
    let moveDownHarvesters = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setHarvesters(g)
        //applyUncanny(h)

    }

    let moveUpLoyaltyCircuits =(e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setLoyaltyCircuits(g)
        //applyUncanny(h)

    }
    let moveDownLoyaltyCircuits = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setLoyaltyCircuits(g)
        //applyUncanny(h)

    }

    let moveUpPropagandaMachines =(e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setPropagandaMachines(g)
        //applyUncanny(h)

    }
    let moveDownPropagandaMachines = (e, f, g, h) =>{

        setTraitPoints(traitPoints + e) 
        setTraitPicks(traitPicks + f)
        setPropagandaMachines(g)
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
            {!domesticProtocols ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDomesticProtocols( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/c/c2/Domestic_protocols.png"></img><div>Domestic Protocols</div>
            </button><span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 2 Trait Point</div></span>
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
            

                   

            

                  
                   {!enhancedMemory ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownEnhancedMemory( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Enhanced Memory</div>
            </button><span className="displaytext"><div>Leader Level Cap +2</div> <div> 2 Trait Point</div></span>
                   </td>} 


                   {!harvesters ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownHarvesters( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/e/e4/Harvesters.png"></img> <div> Harvesters</div>
            </button><span className="displaytext"><div>Food from Jobs +15%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   
                   {!learningAlgorithms ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLearningAlgorithms( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/8/89/Learning_algorithms.png"></img> <div> Learning Algorithms</div>
            </button><span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   
                   {!logicEngines ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLogicEngines( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png"></img> <div> Logic Engines</div>
            </button><span className="displaytext"><div> Research Output +10%</div> <div> 2 Trait Point</div></span>
                   </td>} 

                   {!loyaltyCircuits ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLoyaltyCircuits( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png"></img> <div> Loyalty Circuits</div>
            </button><span className="displaytext"><div> Happiness +10%</div> <div> 2 Trait Point</div></span>
                   </td>} 
            

                  
                   {!massProduced ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownMassProduced( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png"></img> <div> Mass-Produced</div>
            </button><span className="displaytext"><div>Pop Assembly Speed +15%</div> <div> 1 Trait Point</div></span>
                   </td>} 
            

                   

                  
                   {!powerDrills ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownPowerDrills( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png"></img> <div> Power Drills</div>
            </button><span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                   </td>} 

                   {!propagandaMachines ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownPropagandaMachines( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png"></img> <div>  Propaganda Machines</div>
            </button><span className="displaytext"><div>Unity from Jobs +15%</div> <div> 1 Trait Point</div></span>
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
            

            

                   </tr>

                   


                    <td>Unselected traits</td>
                    {/* <tr>
                    <button type="submit" onClick={(e) => countDown(1,1)}> 
            -1
            </button></tr> */}

 
 {/* <div className="tooltip"> </div> */}
            <tr> 
<td className="display">
            {domesticProtocols ? null:  <button type="submit" onClick={(e) => moveUpDomesticProtocols( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/c/c2/Domestic_protocols.png"></img><div>Domestic Protocols</div>
            </button>} <span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 2 Trait Point</div></span>
            </td>
            
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
                   {enhancedMemory ? null: <button type="submit" onClick={(e) => moveUpEnhancedMemory( 2, 1, true,"https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Enhanced Memory</div>
            </button>} 
<td className="display">
            {!harvesters ? null:  <button type="submit" onClick={(e) => moveDownHarvesters( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/e/e4/Harvesters.png"></img> <div> Harvesters</div>
            </button>} <span className="displaytext"><div>Food from Jobs +15%</div> <div> 1 Trait Point</div></span>
                   </td>


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
                   {loyaltyCircuits ? null: <button type="submit" onClick={(e) => moveUpLoyaltyCircuits( 2, 1, false, 'https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png')}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png"></img> <div> Loyalty Circuits</div>
            </button>} <span className="displaytext"><div> Happiness +10%</div> <div> 2 Trait Point</div></span>
                   </td>
            


                   <td className="display">
                   {massProduced ? null: <button type="submit" onClick={(e) => moveUpMassProduced( 1, 1, true,"https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png"></img> <div> Mass-Produced</div>
            </button>} 
            <span className="displaytext"><div>Pop Assembly Speed +15%</div> <div> 1 Trait Point</div></span>
                   </td>


                   

                   <td className="display">
                   {powerDrills ? null: <button type="submit" onClick={(e) => moveUpPowerDrills( 2, 1, true,"https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png")}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png"></img> <div> Power Drills</div>
            </button>} 
            <span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                   </td>
<td className="display">
                   {propagandaMachines ? null:  <button type="submit" onClick={(e) => moveUpPropagandaMachines( 1, 1, false, 'https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png')}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png"></img> <div>  Propaganda Machines</div>
            </button>} <span className="displaytext"><div>Unity from Jobs +15%</div> <div> 1 Trait Point</div></span>
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

                   





                   </tr>

               
                   
                   
                </thead>
            </table>



            

        </div>
        
    )
}


export default SyntheticTraits


