import React, {useState, useEffect} from 'react';
import { Container, Badge, Button, Input, Label } from 'reactstrap';
import SpiecesDisplay from  './spiecesDisplay';
import './embedBox.css'
import './apperanceBox.css'
// import MachineTraits, {doubleJointed} from  './traits/machineTraits';
import './traits/hover.css'
//import SyntheticTraits from  './traits/syntheticTraits';
// import BioTraits from  './traits/bioTraits';
// import BioEngineeringTraits from  './traits/bioEngineeringTraits';
import {Redirect} from 'react-router-dom';



const Spieces = (props, id) =>{

    let [redirect, setRedirect] = useState (true)


    // console.log(props)
    const [spiecesName, setSpiecesName] =useState('')
    const [spiecesPlural, setSpiecesPlural] =useState('')
    const [spiecesAdj, setSpiecesAdj] =useState('')
    let [spiecesType, setSpiecesType] = useState('')
    let [planetType, setPlanetType] = useState('')
    let [preferedPreferance, setPreferance] = useState('')
    let [isMachine, setMachine] = useState('')
    let [majorTrait, setMajorTrait] = useState('')
    let [specialTrait, setSpecialTrait] = useState(false)

    let [traitPoints, setTraitPoints] =useState(0)
    let [traitPicks, setTraitPicks] =useState(0)

    let [totalTraitPoints, setTotalTraitPoints] =useState(0)
    let [totalTraitPicks, setTotalTraitPicks] =useState(0)





    let [doubleJointed, setDoubleJointed] = useState(false)
    let [durable, setDurable] = useState(false)
    let [efficientProcessors, setEfficientProcessors] = useState(false)
    let [emotionEmulators, setEmotionEmulators] = useState(false)
    let [enhancedMemory, setEnhancedMemory] = useState(false)
    let [learningAlgorithms, setLearningAlgorithms] = useState(false)
    let [logicEngines, setLogicEngines] = useState(false)
    let [massProduced, setMassProduced] = useState(false)
    let [powerDrills, setPowerDrills] = useState(false)
    let [recycled, setRecycled] = useState(false)
    let [Bulky, setBulky] = useState(false)
    let [superconductive, setSuperconductive] = useState(false)
    let [CustomMade, setCustomMade] = useState(false)
    let [HighMaintenance, setHighMaintenance] = useState(false)
    let [Luxurious, setLuxurious] = useState(false)
    let [RepurposedHardware, setRepurposedHardware] = useState(false)
    let [Uncanny, setUncanny] = useState(false)

    var [domesticProtocols, setDomesticProtocols ] = useState(false)
    var [harvesters, setHarvesters ] = useState(false)
    var [loyaltyCircuits, setLoyaltyCircuits ] = useState(false)
    var [propagandaMachines, setPropagandaMachines ] = useState(false)



    let [Adaptive, setAdaptive] = useState(false)
    let [ExtremelyAdaptive, setExtremelyAdaptive] = useState(false)
    let [Agrarian, setAgrarian] = useState(false)
    let [Charismatic, setCharismatic] = useState(false)
    let [Communal, setCommunal] = useState(false)
    let [Conformists, setConformists] = useState(false)
    let [Conservationist, setConservationist] = useState(false)
    let [Enduring, setEnduring] = useState(false)
    let [Venerable, setVenerable] = useState(false)
    let [Industrious, setIndustrious] = useState(false)
    let [Ingenious, setIngenious] = useState(false)
    let [Intelligent, setIntelligent] = useState(false)
    let [NaturalEngineers, setNaturalEngineers] = useState(false)
    let [NaturalPhysicists, setNaturalPhysicists] = useState(false)
    let [NaturalSociologists, setNaturalSociologists] = useState(false)
    let [Nomadic, setNomadic] = useState(false)
    let [QuickLearners, setQuickLearners] = useState(false)
    let [ RapidBreeders, setRapidBreeders] = useState(false)
    let [Resilient, setResilient] = useState(false)
    let [Strong, setStrong] = useState(false)
    let [VeryStrong, setVeryStrong] = useState(false)
    let [Talented, setTalented] = useState(false)
    let [Thrifty, setThrifty] = useState(false)
    let [Traditional, setTraditional] = useState(false)
    let [Decadent, setDecadent] = useState(false)
    let [Deviants, setDeviants] = useState(false)
    let [Fleeting, setFleeting] = useState(false)
    let [Nonadaptive, setNonadaptive] = useState(false)
    let [Quarrelsome, setQuarrelsome] = useState(false)
    let [Repugnant, setRepugnant] = useState(false)
    let [Sedentary, setSedentary] = useState(false)
    let [SlowBreeders, setSlowBreeders] = useState(false)
    let [SlowLearners, setSlowLearners] = useState(false)
    let [Solitary, setSolitary] = useState(false)
    let [Wasteful, setWasteful] = useState(false)
    let [Weak, setWeak] = useState(false)

    let [Robust, setRobust] =useState(false)
    let [Erudite, setErudite] =useState(false)
    let [Fertile, setFertile] =useState(false)
    let [NerveStapled, setNerveStapled] =useState(false)
    let [Delicious, setDelicious] =useState(false)
    




    let [check, setCheck] = useState (false)
    let [check2, setCheck2] = useState (false)

    const postSubmit = (z) =>{
        z.preventDefault();

        console.log({

            spiecesName,
           spiecesType,
            planetType,
            preferedPreferance,

           majorTrait,

            isMachine,
            specialTrait,
        }
        )
        
        if(spiecesName == '') {return alert("Tasked Failed, please enter a name")}
        if(spiecesType == '') {return alert("Tasked Failed, please select a species")}
        if(planetType == '') {return alert("Tasked Failed, please select a planet")}
        // if(specialTrait == '') {return alert("Tasked Failed, please select major trait")}
        if(totalTraitPicks < 0 ) {return alert("Tasked Failed, you have picked too many traits")}
        if(totalTraitPoints < 0 ) {return alert("Tasked Failed, you have picked too many points")}
        // console.log(props.id)
        // console.log(props.props)

       fetch('https://speciescatalog.herokuapp.com/speices/', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'Authorization': props.props
           },
           body:JSON.stringify({
            userId: props.id,   
            spiecesName: spiecesName,
            spiecesType: spiecesType,
            planetType:  planetType,
            preferedPreferance:  preferedPreferance,

            majorTrait:majorTrait,

            isMachine: isMachine,
            specialTrait:  specialTrait,
            doubleJointed:  doubleJointed,
            durable: durable,
            efficientProcessors:  efficientProcessors,
            emotionEmulators:  emotionEmulators,
            enhancedMemory: enhancedMemory,
            learningAlgorithms:  learningAlgorithms,
            logicEngines:  logicEngines,
            massProduced:  massProduced,
            powerDrills:  powerDrills,
            recycled: recycled,
            Bulky:  Bulky,
            superconductive: superconductive,
            CustomMade:  CustomMade,
            HighMaintenance: HighMaintenance,
            Luxurious:  Luxurious,
            RepurposedHardware:  RepurposedHardware,
            Uncanny: Uncanny,
            domesticProtocols: domesticProtocols,
            harvesters:  harvesters,
            loyaltyCircuits:  loyaltyCircuits,
            propagandaMachines:  propagandaMachines,
            Adaptive:  Adaptive,
            ExtremelyAdaptive:  ExtremelyAdaptive,
            Agrarian: Agrarian,
            Charismatic: Charismatic,
            Communal:  Communal,
            Conformists: Conformists,
            Conservationist: Conservationist,
            Enduring:  Enduring,
            Venerable: Venerable,
            Industrious: Industrious,
            Ingenious: Ingenious,
            Intelligent: Intelligent,
            NaturalEngineers:  NaturalEngineers,
            NaturalPhysicists:  NaturalPhysicists,
            NaturalSociologists: NaturalSociologists,
            Nomadic: Nomadic,
            QuickLearners:  QuickLearners,
            RapidBreeders:  RapidBreeders,
            Resilient: Resilient,
            Strong:  Strong,
            VeryStrong: VeryStrong,
            Talented: Talented,
            Thrifty: Thrifty,
            Traditional:  Traditional,
            Decadent: Decadent,
            Deviants:  Deviants,
            Fleeting:  Fleeting,
            Nonadaptive:  Nonadaptive,
            Quarrelsome:  Quarrelsome,
            Repugnant: Repugnant,
            Sedentary: Sedentary,
            SlowBreeders: SlowBreeders,
            SlowLearners:  SlowLearners,
            Solitary: Solitary,
            Wasteful:  Wasteful,
            Weak:  Weak,
            Robust:  Robust,
            Erudite:  Erudite,
            Fertile:  Fertile,
            NerveStapled: NerveStapled,
            Delicious:  Delicious
           })
       }
       ).then(res =>res.json())
            
       .then(
        setTimeout(function() {
           
            props.tokenHandler(1)
          }, 100)
        )
       
   }
   
    const clearTraits = (v) => {
        

        setDoubleJointed(v)
       setDurable(v)
        setEfficientProcessors(v)
        setEmotionEmulators(v)
        setEnhancedMemory(v)
        setLearningAlgorithms(v)
        setLogicEngines(v)
       setMassProduced(v)
        setPowerDrills(v)
       setRecycled(v)
        setBulky(v)
        setSuperconductive(v)
        setCustomMade(v)
        setHighMaintenance(v)
        setLuxurious(v)
        setRepurposedHardware(v)
       setUncanny(v)
    
        setDomesticProtocols(v)
       setHarvesters(v)
        setLoyaltyCircuits(v)
        setPropagandaMachines(v)
    
    
    
        setAdaptive(v)
         setExtremelyAdaptive(v)
        setAgrarian(v)
        setCharismatic(v)
        setCommunal(v)
       setConformists(v)
       setConservationist(v)
        setEnduring(v)
        setVenerable(v)
        setIndustrious(v)
       setIngenious(v)
        setIntelligent(v)
        setNaturalEngineers(v)
       setNaturalPhysicists(v)
      setNaturalSociologists(v)
        setNomadic(v)
       setQuickLearners(v)
       setRapidBreeders(v)
        setResilient(v)
       setStrong(v)
        setVeryStrong(v)
        setTalented(v)
       setThrifty(v)
        setTraditional(v)
        setDecadent(v)
        setDeviants(v)
        setFleeting(v)
        setNonadaptive(v)
         setQuarrelsome(v)
        setRepugnant(v)
      setSedentary(v)
        setSlowBreeders(v)
        setSlowLearners(v)
       setSolitary(v)
       setWasteful(v)
        setWeak(v)
    
        setRobust(v)
        setErudite(v)
        setFertile(v)
        setNerveStapled(v)
        setDelicious(v)
    }

    const applyCheck= (e, f)=>{
        setTraitPoints(traitPoints + f)
        setCheck(e)
     
    }

    const applyCheck2= (j, g, h)=>{
       
        setCheck2(j)
        setTraitPicks( g)
        setTraitPoints(traitPoints + h)
    }

    

    const MachineTraits= (traits) => {


    
        // let [traitPoints, setTraitPoints] =useState(6)
        // let [traitPicks, setTraitPicks] =useState(4)
        // var [doubleJointed, setDoubleJointed] = useState(false)
        // var [durable, setDurable, applyDurable] = useState(false)
        // var [efficientProcessors, setEfficientProcessors, applyEfficientProcessors] = useState(false)
        // var [emotionEmulators, setEmotionEmulators, applyEmotionEmulators] = useState(false)
        // var [enhancedMemory, setEnhancedMemory, applyEnhancedMemory] = useState(false)
        // var [learningAlgorithms, setLearningAlgorithms, applyLearningAlgorithms] = useState(false)
        // var [logicEngines, setLogicEngines, applyLogicEngines] = useState(false)
        // var [massProduced, setMassProduced, applyMassProduced] = useState(false)
        // var [powerDrills, setPowerDrills, applyPowerDrills] = useState(false)
        // var [recycled, setRecycled, applyRecycled] = useState(false)
        // var [Bulky, setBulky, applyBulky] = useState(false)
        // var [superconductive, setSuperconductive, applySuperconductive] = useState(false)
        // var [CustomMade, setCustomMade, applyCustomMade] = useState(false)
        // var [HighMaintenance, setHighMaintenance, applyHighMaintenance] = useState(false)
        // var [Luxurious, setLuxurious, applyLuxurious] = useState(false)
        // var [RepurposedHardware, setRepurposedHardware, applyRepurposedHardware] = useState(false)
        // var [Uncanny, setUncanny, applyUncanny] = useState(false)
    
        
    
    
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
            if (Bulky) {moveDownBulky (2, 0, false, null)}
            
            
            
    
            
            
            // applyDoubleJointed(h)
            
    
        }
        let moveDownDoubleJointed = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setDoubleJointed(g)
            //console.log(doubleJointed)
            
            
            //applyDoubleJointed(h)
    
        }
        let moveUpDurable = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setDurable(g)
            if (HighMaintenance) {moveDownHighMaintenance (2, 0, false, null)}
    
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
            
    
        }
        let moveDownEmotionEmulators = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setEmotionEmulators(g)
            
    
        }
        let moveUpEmotionEmulators = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setEmotionEmulators(g)
            if (Uncanny) {moveDownUncanny (2, 0, false, null)}
    
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
            if (RepurposedHardware) {moveDownRepurposedHardware (2, 0, false, null)}
    
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
            if (CustomMade) {moveDownCustomMade (2, 0, false, null)}
    
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
            if (Luxurious) {moveDownLuxurious (4, 0, false, null)}
    
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
            if (doubleJointed) {moveDownDoubleJointed (2, 0, false, null)}
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
            if (massProduced) {moveDownMassProduced (2, 0, false, null)}
    
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
            if (durable) {moveDownDurable (2, 0, false, null)}
    
    
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
            if (recycled) {moveDownRecycled (4, 0, false, null)}
    
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
            if (learningAlgorithms) {moveDownLearningAlgorithms (2, 0, false, null)}
    
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
            if (emotionEmulators) {moveDownEmotionEmulators (2, 0, false, null)}
            
    
        }
        let moveDownUncanny = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setUncanny(g)
            
    
        }
    
    
    
    
        return ( 
            <div  className= "apperanceBox">

                {check ? null: <div> <Input type="checkbox"  onChange= {(c,) =>  applyCheck(true, +2, 0)}></Input>
                            <h4> Has <img alt='' src = "https://stellaris.paradoxwikis.com/images/thumb/a/ab/Ap_synthetic_age.png/21px-Ap_synthetic_age.png"></img> Synthetic Age Tradition? </h4></div>}
                {!check ? null: <div> <Input type="checkbox"  onChange= {(c,) =>  applyCheck(false, -2, 0)} checked></Input>
                <h4> Has <img alt='' src = "https://stellaris.paradoxwikis.com/images/thumb/a/ab/Ap_synthetic_age.png/21px-Ap_synthetic_age.png"></img> Synthetic Age Tradition? </h4></div>} 
                
            
                <h4>trait points left : {traitPoints+6}</h4>
                <h4>trait picks left : {traitPicks+4}</h4>
                {setTotalTraitPicks( traitPicks +4)}
                {setTotalTraitPoints( traitPoints +6)}
                <table Id="tableid">
                    <thead>
                        <td> Selected traits</td>
                        {/* <tr>
                        <button type="submit" onClick={(e) => countUp(1,1)}> 
                +1
                </button></tr> */}
    
                <tr> 
                {traitPicks != 0 ? null:  <td className="display"><button type="submit"> 
                        <div>No Traits Selected</div>
                </button>
                </td>} 
    
               
                {!doubleJointed ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDoubleJointed( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png"></img><div>Double Jointed</div>
                </button><span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
    
              
                       {!durable ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDurable( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/26/Durable.png"></img> <div>Durable</div>
                </button> <span className="displaytext"><div>Robot Upkeep –10%</div> <div> 1 Trait Point</div></span>
                       </td>} 
               
    
                       
                       {!efficientProcessors ? null: <td className="display"><button type="submit" onClick={(e) => moveDownEfficientProcessors( 3, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png"></img> <div>Efficient Processors</div>
                </button><span className="displaytext"><div>Resources from Jobs +5%</div> <div> 3 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!emotionEmulators ? null: <td className="display"><button type="submit" onClick={(e) => moveDownEmotionEmulators( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png"></img> <div>Emotion Emulators</div>
                </button><span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                      
                       {!enhancedMemory ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownEnhancedMemory( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Enhanced Memory</div>
                </button><span className="displaytext"><div>Leader Level Cap +2</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!learningAlgorithms ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLearningAlgorithms( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Learning Algorithms</div>
                </button><span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!logicEngines ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLogicEngines( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png"></img> <div> Logic Engines</div>
                </button><span className="displaytext"><div> Research Output +10%</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
    
                      
                       {!massProduced ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownMassProduced( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png"></img> <div> Mass-Produced</div>
                </button><span className="displaytext"><div>Pop Assembly Speed +15%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       
    
                      
                       {!powerDrills ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownPowerDrills( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png"></img> <div> Power Drills</div>
                </button><span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!recycled ? null: <td className="display"><button type="submit" onClick={(e) => moveDownRecycled( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png"></img> <div> Recycled</div>
                </button><span className="displaytext"><div>Pop Assembly Cost –20%</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!superconductive ? null: <td className="display"><button type="submit" onClick={(e) => moveDownSuperconductive( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png"></img> <div> Superconductive</div>
                </button><span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
                       
                       {!Bulky ? null: <td className="display"><button type="submit" onClick={(e) => moveDownBulky( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png"></img> <div> Bulky</div>
                </button><span className="displaytext"><div>Pop Housing Usage +10%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       {!CustomMade ? null: <td className="display"><button type="submit" onClick={(e) => moveDownCustomMade( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png"></img> <div> Custom-Made</div>
                </button><span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
                       
                       {!HighMaintenance ? null: <td className="display"><button type="submit" onClick={(e) => moveDownHighMaintenance( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png"></img> <div> High Maintenance</div>
                </button><span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
                       
                       
                       {!Luxurious ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLuxurious( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png"></img> <div> Luxurious</div>
                </button><span className="displaytext"><div>Pop Assembly Cost +20%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!RepurposedHardware ? null: <td className="display"><button type="submit" onClick={(e) => moveDownRepurposedHardware( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png"></img> <div> Repurposed Hardware</div>
                </button><span className="displaytext"><div>Leader Experience Gain –25%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       
    
                      
                       {!Uncanny ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownUncanny( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png"></img> <div> Uncanny</div>
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
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png"></img><div>Double Jointed</div>
                </button>} 
                <span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
                </td>
    
               <td className="display">
                       {durable ? null: <button type="submit" onClick={(e) => moveUpDurable( 1, 1, true,"https://stellaris.paradoxwikis.com/images/2/26/Durable.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/26/Durable.png"></img> <div>Durable</div>
                </button>} 
                <span className="displaytext"><div>Robot Upkeep –10%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {efficientProcessors ? null: <button type="submit" onClick={(e) => moveUpEfficientProcessors( 3, 1, true,"https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png"></img> <div>Efficient Processors</div>
                </button>} 
                <span className="displaytext"><div>Resources from Jobs +5%</div> <div> 3 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {emotionEmulators ? null: <button type="submit" onClick={(e) => moveUpEmotionEmulators( 1, 1, true,"https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png"></img> <div>Emotion Emulators</div>
                </button>} 
                <span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {enhancedMemory ? null: <button type="submit" onClick={(e) => moveUpEnhancedMemory( 2, 1, true,"https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Enhanced Memory</div>
                </button>} 
                <span className="displaytext"><div>Leader Level Cap +2</div> <div> 2 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {learningAlgorithms ? null: <button type="submit" onClick={(e) => moveUpLearningAlgorithms( 1, 1, true,"https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Learning Algorithms</div>
                </button>} 
                <span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {logicEngines ? null: <button type="submit" onClick={(e) => moveUpLogicEngines( 2, 1, true,"https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png"></img> <div> Logic Engines</div>
                </button>} 
                <span className="displaytext"><div> Research Output +10%</div> <div> 2 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {massProduced ? null: <button type="submit" onClick={(e) => moveUpMassProduced( 1, 1, true,"https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png"></img> <div> Mass-Produced</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Speed +15%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       
    
                       <td className="display">
                       {powerDrills ? null: <button type="submit" onClick={(e) => moveUpPowerDrills( 2, 1, true,"https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png"></img> <div> Power Drills</div>
                </button>} 
                <span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {recycled ? null: <button type="submit" onClick={(e) => moveUpRecycled( 2, 1, true,"https://stellaris.paradoxwikis.com/images/6/68/Recycled.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png"></img> <div> Recycled</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Cost –20%</div> <div> 2 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {superconductive ? null: <button type="submit" onClick={(e) => moveUpSuperconductive( 2, 1, true,"https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png"></img> <div> Superconductive</div>
                </button>} 
                <span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
                       </td>
                       <td className="display">
                       {Bulky ? null: <button type="submit" onClick={(e) => moveUpBulky( 1, 1, true,"https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png"></img> <div> Bulky</div>
                </button>} 
                <span className="displaytext"><div>Pop Housing Usage +10%</div> <div> 1 Trait Point</div></span>
                       </td>
                       <td className="display">
                       {CustomMade ? null: <button type="submit" onClick={(e) => moveUpCustomMade( 1, 1, true,"https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png"></img> <div> Custom-Made</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                       </td>
                       <td className="display">
                       {HighMaintenance ? null: <button type="submit" onClick={(e) => moveUpHighMaintenance( 1, 1, true,"https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png"></img> <div> High Maintenance</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                       </td>
                       
                       <td className="display">
                       {Luxurious ? null: <button type="submit" onClick={(e) => moveUpLuxurious( 1, 1, true,"https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png"></img> <div> Luxurious</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Cost +20%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {RepurposedHardware ? null: <button type="submit" onClick={(e) => moveUpRepurposedHardware( 1, 1, true,"https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png"></img> <div> Repurposed Hardware</div>
                </button>} 
                <span className="displaytext"><div>Leader Experience Gain –25%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       
    
                       <td className="display">
                       {Uncanny ? null: <button type="submit" onClick={(e) => moveUpUncanny( 1, 1, true,"https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png"></img> <div> Uncanny</div>
                </button>} 
                <span className="displaytext"><div>Amenities from Jobs −20%</div> <div> 1 Trait Point</div></span>
                       </td>
    
    
    
    
                       </tr>
    
                   
                       
                       
                    </thead>
                </table>
    
    
    
                
    
            </div>
            
        )
    }

    const SyntheticTraits= (traits) => {
    
        // let [traitPoints, setTraitPoints] =useState(5)
        // let [traitPicks, setTraitPicks] =useState(4)
        // let [doubleJointed, setDoubleJointed] = useState(false)
        // let [durable, setDurable] = useState(false)
        // var [efficientProcessors, setEfficientProcessors] = useState(false)
        // var [enhancedMemory, setEnhancedMemory] = useState(false)
        // var [learningAlgorithms, setLearningAlgorithms, ] = useState(false)
        // var [logicEngines, setLogicEngines] = useState(false)
        // var [massProduced, setMassProduced] = useState(false)
        // var [powerDrills, setPowerDrills] = useState(false)
        // var [recycled, setRecycled]  = useState(false)
        // var [Bulky, setBulky, applyBulky] = useState(false)
        // var [superconductive, setSuperconductive] = useState(false)
        // var [CustomMade, setCustomMade] = useState(false)
        // var [HighMaintenance, setHighMaintenance ] = useState(false)
        // var [Luxurious, setLuxurious ] = useState(false)
        // var [RepurposedHardware, setRepurposedHardware] = useState(false)
        
    
        // var [domesticProtocols, setDomesticProtocols ] = useState(false)
        // var [harvesters, setHarvesters ] = useState(false)
        // var [loyaltyCircuits, setLoyaltyCircuits ] = useState(false)
        // var [propagandaMachines, setPropagandaMachines ] = useState(false)

        
    
    
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
            
            
            if (Bulky) {moveDownBulky (2, 0, false, null)}
    
            
            
            // applyDoubleJointed(h)
            
    
        }
        let moveDownDoubleJointed = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setDoubleJointed(g)
            //console.log(doubleJointed)
            

            
            //applyDoubleJointed(h)
    
        }
        let moveUpDurable = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setDurable(g)
            if (HighMaintenance) {moveDownHighMaintenance (2, 0, false, null)}
    
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
            if (RepurposedHardware) {moveDownRepurposedHardware (2, 0, false, null)}
    
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
            if (CustomMade) {moveDownCustomMade (2, 0, false, null)}
    
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
            if (Luxurious) {moveDownLuxurious (4, 0, false, null)}
    
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
            if (doubleJointed) {moveDownDoubleJointed (2, 0, false, null)}
    
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
            if (massProduced) {moveDownMassProduced (2, 0, false, null)}
    
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
            if (durable) {moveDownDurable (2, 0, false, null)}
    
    
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
            if (recycled) {moveDownRecycled (4, 0, false, null)}
    
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
            if (learningAlgorithms) {moveDownLearningAlgorithms (2, 0, false, null)}
    
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
            
    
        }
        let moveDownHarvesters = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setHarvesters(g)
            
    
        }
    
        let moveUpLoyaltyCircuits =(e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setLoyaltyCircuits(g)
            
    
        }
        let moveDownLoyaltyCircuits = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setLoyaltyCircuits(g)
            
    
        }
    
        let moveUpPropagandaMachines =(e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setPropagandaMachines(g)
            
    
        }
        let moveDownPropagandaMachines = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setPropagandaMachines(g)
            
    
        }
    
    
    
        return ( 
            <div>
            
                <h4>trait points left : {traitPoints +5}</h4>
                <h4>trait picks left : {traitPicks +4}</h4>

                {setTotalTraitPicks( traitPicks +4)}
                {setTotalTraitPoints( traitPoints +5)}
                <table Id = "tableid">
                    <thead>
                        <td> Selected traits</td>
                        {/* <tr>
                        <button type="submit" onClick={(e) => countUp(1,1)}> 
                +1
                </button></tr> */}
    
                <tr> 
                {traitPicks != 0 ? null:  <td className="display"><button type="submit"> 
                        <div>No Traits Selected</div>
                </button>
                </td>} 
                {!domesticProtocols ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDomesticProtocols( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/c/c2/Domestic_protocols.png"></img><div>Domestic Protocols</div>
                </button><span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 2 Trait Point</div></span>
                </td>} 
    
               
                {!doubleJointed ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDoubleJointed( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png"></img><div>Double Jointed</div>
                </button><span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
    
              
                       {!durable ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDurable( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/26/Durable.png"></img> <div>Durable</div>
                </button> <span className="displaytext"><div>Robot Upkeep –10%</div> <div> 1 Trait Point</div></span>
                       </td>} 
               
    
                       
                       {!efficientProcessors ? null: <td className="display"><button type="submit" onClick={(e) => moveDownEfficientProcessors( 3, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png"></img> <div>Efficient Processors</div>
                </button><span className="displaytext"><div>Resources from Jobs +5%</div> <div> 3 Trait Point</div></span>
                       </td>} 
                
    
                       
    
                
    
                      
                       {!enhancedMemory ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownEnhancedMemory( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Enhanced Memory</div>
                </button><span className="displaytext"><div>Leader Level Cap +2</div> <div> 2 Trait Point</div></span>
                       </td>} 
    
    
                       {!harvesters ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownHarvesters( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e4/Harvesters.png"></img> <div> Harvesters</div>
                </button><span className="displaytext"><div>Food from Jobs +15%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!learningAlgorithms ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLearningAlgorithms( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/8/89/Learning_algorithms.png"></img> <div> Learning Algorithms</div>
                </button><span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!logicEngines ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLogicEngines( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png"></img> <div> Logic Engines</div>
                </button><span className="displaytext"><div> Research Output +10%</div> <div> 2 Trait Point</div></span>
                       </td>} 

    
                       {!loyaltyCircuits ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLoyaltyCircuits( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png"></img> <div> Loyalty Circuits</div>
                </button><span className="displaytext"><div> Happiness +10%</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
    
                      
                       {!massProduced ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownMassProduced( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png"></img> <div> Mass-Produced</div>
                </button><span className="displaytext"><div>Pop Assembly Speed +15%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       
    
                      
                       {!powerDrills ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownPowerDrills( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png"></img> <div> Power Drills</div>
                </button><span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                       </td>} 
    
                       {!propagandaMachines ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownPropagandaMachines( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png"></img> <div>  Propaganda Machines</div>
                </button><span className="displaytext"><div>Unity from Jobs +15%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!recycled ? null: <td className="display"><button type="submit" onClick={(e) => moveDownRecycled( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png"></img> <div> Recycled</div>
                </button><span className="displaytext"><div>Pop Assembly Cost –20%</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!superconductive ? null: <td className="display"><button type="submit" onClick={(e) => moveDownSuperconductive( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png"></img> <div> Superconductive</div>
                </button><span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
                       
                       {!Bulky ? null: <td className="display"><button type="submit" onClick={(e) => moveDownBulky( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png"></img> <div> Bulky</div>
                </button><span className="displaytext"><div>Pop Housing Usage +10%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
    
                       {!CustomMade ? null: <td className="display"><button type="submit" onClick={(e) => moveDownCustomMade( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png"></img> <div> Custom-Made</div>
                </button><span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
                       
                       {!HighMaintenance ? null: <td className="display"><button type="submit" onClick={(e) => moveDownHighMaintenance( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png"></img> <div> High Maintenance</div>
                </button><span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                       </td>} 
                
                       
                       
                       {!Luxurious ? null: <td className="display"><button type="submit" onClick={(e) => moveDownLuxurious( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png"></img> <div> Luxurious</div>
                </button><span className="displaytext"><div>Pop Assembly Cost +20%</div> <div> 2 Trait Point</div></span>
                       </td>} 
                
    
                       
                       {!RepurposedHardware ? null: <td className="display"><button type="submit" onClick={(e) => moveDownRepurposedHardware( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png"></img> <div> Repurposed Hardware</div>
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
                {domesticProtocols ? null:  <button type="submit" onClick={(e) => moveUpDomesticProtocols( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/c/c2/Domestic_protocols.png"></img><div>Domestic Protocols</div>
                </button>} <span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 2 Trait Point</div></span>
                </td>
                
                <td className="display">
                {doubleJointed ? null: <button type="submit" onClick={(e) => moveUpDoubleJointed( 1, 1, true, "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png"></img><div>Double Jointed</div>
                </button>} 
                <span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
                </td>
    
               <td className="display">
                       {durable ? null: <button type="submit" onClick={(e) => moveUpDurable( 1, 1, true,"https://stellaris.paradoxwikis.com/images/2/26/Durable.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/26/Durable.png"></img> <div>Durable</div>
                </button>} 
                <span className="displaytext"><div>Robot Upkeep –10%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {efficientProcessors ? null: <button type="submit" onClick={(e) => moveUpEfficientProcessors( 3, 1, true,"https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png"></img> <div>Efficient Processors</div>
                </button>} 
                <span className="displaytext"><div>Resources from Jobs +5%</div> <div> 3 Trait Point</div></span>
                       </td>
    
    
    
                       <td className="display">
                       {enhancedMemory ? null: <button type="submit" onClick={(e) => moveUpEnhancedMemory( 2, 1, true,"https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Enhanced Memory</div>
                </button>} 

    
    
                <span className="displaytext"><div>Leader Level Cap +2</div> <div> 2 Trait Point</div></span>
                       </td>

                       <td className="display">
                {harvesters ? null:  <button type="submit" onClick={(e) => moveDownHarvesters( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e4/Harvesters.png"></img> <div> Harvesters</div>
                </button>} <span className="displaytext"><div>Food from Jobs +15%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {learningAlgorithms ? null: <button type="submit" onClick={(e) => moveUpLearningAlgorithms( 1, 1, true,"https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png"></img> <div> Learning Algorithms</div>
                </button>} 
                <span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {logicEngines ? null: <button type="submit" onClick={(e) => moveUpLogicEngines( 2, 1, true,"https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png"></img> <div> Logic Engines</div>
                </button>} 
                <span className="displaytext"><div> Research Output +10%</div> <div> 2 Trait Point</div></span>
                       </td>

                       

                       
    <td className="display">
                       {loyaltyCircuits ? null: <button type="submit" onClick={(e) => moveUpLoyaltyCircuits( 2, 1, true, 'https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png')}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png"></img> <div> Loyalty Circuits</div>
                </button>} <span className="displaytext"><div> Happiness +10%</div> <div> 2 Trait Point</div></span>
                       </td>
                
                      
    
                       <td className="display">
                       {massProduced ? null: <button type="submit" onClick={(e) => moveUpMassProduced( 1, 1, true,"https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png"></img> <div> Mass-Produced</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Speed +15%</div> <div> 1 Trait Point</div></span>
                       </td>
    
    
                       
    
                       <td className="display">
                       {powerDrills ? null: <button type="submit" onClick={(e) => moveUpPowerDrills( 2, 1, true,"https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png"></img> <div> Power Drills</div>
                </button>} 
                <span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                       </td>
    <td className="display">
                       {propagandaMachines ? null:  <button type="submit" onClick={(e) => moveUpPropagandaMachines( 1, 1, true, 'https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png')}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png"></img> <div>  Propaganda Machines</div>
                </button>} <span className="displaytext"><div>Unity from Jobs +15%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {recycled ? null: <button type="submit" onClick={(e) => moveUpRecycled( 2, 1, true,"https://stellaris.paradoxwikis.com/images/6/68/Recycled.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png"></img> <div> Recycled</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Cost –20%</div> <div> 2 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {superconductive ? null: <button type="submit" onClick={(e) => moveUpSuperconductive( 2, 1, true,"https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png"></img> <div> Superconductive</div>
                </button>} 
                <span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
                       </td>
                       <td className="display">
                       {Bulky ? null: <button type="submit" onClick={(e) => moveUpBulky( 1, 1, true,"https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png"></img> <div> Bulky</div>
                </button>} 
                <span className="displaytext"><div>Pop Housing Usage +10%</div> <div> 1 Trait Point</div></span>
                       </td>
                       <td className="display">
                       {CustomMade ? null: <button type="submit" onClick={(e) => moveUpCustomMade( 1, 1, true,"https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png"></img> <div> Custom-Made</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                       </td>

                         

                       <td className="display">
                       {HighMaintenance ? null: <button type="submit" onClick={(e) => moveUpHighMaintenance( 1, 1, true,"https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png"></img> <div> High Maintenance</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Speed –15%</div> <div> 1 Trait Point</div></span>
                       </td>

                     
                       
                       <td className="display">
                       {Luxurious ? null: <button type="submit" onClick={(e) => moveUpLuxurious( 2, 1, true,"https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png"></img> <div> Luxurious</div>
                </button>} 
                <span className="displaytext"><div>Pop Assembly Cost +20%</div> <div> 2 Trait Point</div></span>
                       </td>
    
                       <td className="display">
                       {RepurposedHardware ? null: <button type="submit" onClick={(e) => moveUpRepurposedHardware( 1, 1, true,"https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png"></img> <div> Repurposed Hardware</div>
                </button>} 
                <span className="displaytext"><div>Leader Experience Gain –25%</div> <div> 1 Trait Point</div></span>
                       </td>
    
                       
    
    
    
    
    
                       </tr>
    
                   
                       
                       
                    </thead>
                </table>
    
    
    
                
    
            </div>
            
        )
    }

    const BioTraits= () => {
        // let [traitPoints, setTraitPoints] =useState(5)
        // let [traitPicks, setTraitPicks] =useState(4)
        // let [Adaptive, setAdaptive] = useState(false)
        // let [ExtremelyAdaptive, setExtremelyAdaptive] = useState(false)
        // let [Agrarian, setAgrarian] = useState(false)
        // let [Charismatic, setCharismatic] = useState(false)
        // let [Communal, setCommunal] = useState(false)
        // let [Conformists, setConformists] = useState(false)
        // let [Conservationist, setConservationist] = useState(false)
        // let [Enduring, setEnduring] = useState(false)
        // let [Venerable, setVenerable] = useState(false)
        // let [Industrious, setIndustrious] = useState(false)
        // let [Ingenious, setIngenious] = useState(false)
        // let [Intelligent, setIntelligent] = useState(false)
        // let [NaturalEngineers, setNaturalEngineers] = useState(false)
        // let [NaturalPhysicists, setNaturalPhysicists] = useState(false)
        // let [NaturalSociologists, setNaturalSociologists] = useState(false)
        // let [Nomadic, setNomadic] = useState(false)
        // let [QuickLearners, setQuickLearners] = useState(false)
        // let [ RapidBreeders, setRapidBreeders] = useState(false)
        // let [Resilient, setResilient] = useState(false)
        // let [Strong, setStrong] = useState(false)
        // let [VeryStrong, setVeryStrong] = useState(false)
        // let [Talented, setTalented] = useState(false)
        // let [Thrifty, setThrifty] = useState(false)
        // let [Traditional, setTraditional] = useState(false)
        // let [Decadent, setDecadent] = useState(false)
        // let [Deviants, setDeviants] = useState(false)
        // let [Fleeting, setFleeting] = useState(false)
        // let [Nonadaptive, setNonadaptive] = useState(false)
        // let [Quarrelsome, setQuarrelsome] = useState(false)
        // let [Repugnant, setRepugnant] = useState(false)
        // let [Sedentary, setSedentary] = useState(false)
        // let [SlowBreeders, setSlowBreeders] = useState(false)
        // let [SlowLearners, setSlowLearners] = useState(false)
        // let [Solitary, setSolitary] = useState(false)
        // let [Wasteful, setWasteful] = useState(false)
        // let [Weak, setWeak] = useState(false)
    

         
        



        let moveUpRobust = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setRobust(g)

            if( ExtremelyAdaptive) {moveDownExtremelyAdaptive( 0, 0, false, null)}

            if( Nonadaptive) {moveDownNonadaptive( -6, 0, false, null)} 

            if( Adaptive) {moveDownAdaptive( 2, 0, false, null)} 
    
            
    
        }
        let moveDownRobust = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setRobust(g)
    
    
        }
        let moveUpErudite = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setErudite(g)
    
            if( Intelligent) {moveDownIntelligent( -2, 0, false, null)} 
            if( NerveStapled) {moveDownNerveStapled( -1, 0, false, null)} 
    
        }
        let moveDownErudite = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setErudite(g)
    
    
        }
        let moveUpFertile = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setFertile(g)

            if( SlowBreeders) {moveDownSlowBreeders( 6, 0, false, null)} 
            if( RapidBreeders) {moveDownRapidBreeders( -2, 0, false, null)} 
    
            
    
        }
        let moveDownFertile = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setFertile(g)
    
    
        }
        let moveUpNerveStapled = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setNerveStapled(g)

            if( Solitary) {moveDownSolitary( 4, 0, false, null)} 
            if( Communal) {moveDownCommunal( -2, 0, false, null)} 
            if( Intelligent) {moveDownIntelligent( -1, 0, false, null)} 
            if( Erudite) {moveDownErudite( 1, 0, false, null)} 
            if( NaturalEngineers) {moveDownNaturalEngineers( -2, 0, false, null)} 
            if( NaturalPhysicists) {moveDownNaturalPhysicists( -2, 0, false, null)} 
            if( NaturalSociologists) {moveDownNaturalSociologists( -2, 0, false, null)} 
    
            
    
        }
        let moveDownNerveStapled = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setNerveStapled(g)
    
    
        }
        let moveUpDelicious = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setDelicious(g)
    
            
    
        }
        let moveDownDelicious = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setDelicious(g)
    
    
        }






         
    
    
    
    
        let moveUpAdaptive = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setAdaptive(g)

            if( ExtremelyAdaptive) {moveDownExtremelyAdaptive( -2, 0, false, null)}

            if( Nonadaptive) {moveDownNonadaptive( 4, 0, false, null)} 

            if( Robust) {moveDownRobust( -2, 0, false, null)} 
    
            
    
        }
        let moveDownAdaptive = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setAdaptive(g)
    
    
        }
    
    
    
        
        let moveUpExtremelyAdaptive = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setExtremelyAdaptive(g)

            if( Robust) {moveDownRobust( 0, 0, false, null)}

            if( Nonadaptive) {moveDownNonadaptive( -6, 0, false, null)} 

            if( Adaptive) {moveDownAdaptive( 2, 0, false, null)} 
    
            
    
        }
        let moveDownExtremelyAdaptive = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setExtremelyAdaptive(g)
    
    
        }
        let moveUpAgrarian = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setAgrarian(g)
    
            
    
        }
        let moveDownAgrarian = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setAgrarian(g)
    
    
        }
        let moveUpCharismatic = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setCharismatic(g)
            
            if( Repugnant) {moveDownRepugnant( 4, 0, false, null)} 
            
    
        }
        let moveDownCharismatic = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setCharismatic(g)
    
    
        }
        let moveUpCommunal = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setCommunal(g)
            if( Solitary) {moveDownSolitary( 2, 0, false, null)} 
            if( NerveStapled) {moveDownNerveStapled( 2, 0, false, null)} 
    
            
    
        }
        let moveDownCommunal = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setCommunal(g)
    
    
        }
        let moveUpConformists = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setConformists(g)
            if( Deviants) {moveDownDeviants( 2, 0, false, null)} 
    
            
    
        }
        let moveDownConformists = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setConformists(g)
    
    
        }
        let moveUpConservationist = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setConservationist(g)

            if( Wasteful) {moveDownWasteful( 2, 0, false, null)} 
    
            
    
        }
        let moveDownConservationist = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setConservationist(g)
    
    
        }
        let moveUpEnduring = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setEnduring(g)
            if( Fleeting) {moveDownFleeting( 2, 0, false, null)} 
            if( Venerable) {moveDownVenerable( 3, 0, false, null)} 
    
            
    
        }
        let moveDownEnduring = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setEnduring(g)
    
    
        }
        let moveUpVenerable = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setVenerable(g)

            if( Fleeting) {moveDownFleeting( 5, 0, false, null)} 
            if( Enduring) {moveDownEnduring( -3, 0, false, null)} 
    
            
    
        }
        let moveDownVenerable = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setVenerable(g)
    
    
        }
        let moveUpIndustrious = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setIndustrious(g)
    
            
    
        }
        let moveDownIndustrious = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setIndustrious(g)
    
    
        }
        let moveUpIngenious = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setIngenious(g)
    
            
    
        }
        let moveDownIngenious = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setIngenious(g)
    
    
        }
        let moveUpIntelligent = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setIntelligent(g)

            if( Erudite) {moveDownErudite( 2, 0, false, null)} 
            if( NerveStapled) {moveDownNerveStapled( 1, 0, false, null)} 
    
    
            
    
        }
        let moveDownIntelligent = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setIntelligent(g)
    
    
        }
        let moveUpNaturalEngineers = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setNaturalEngineers(g)
            if( NerveStapled) {moveDownNerveStapled( 2, 0, false, null)} 
            if( NaturalPhysicists) {moveDownNaturalPhysicists( 0, 0, false, null)} 
            if( NaturalSociologists) {moveDownNaturalSociologists( 0, 0, false, null)} 

            
    
        }
        let moveDownNaturalEngineers = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setNaturalEngineers(g)
    
    
        }
        let moveUpNaturalPhysicists = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setNaturalPhysicists(g)
            if( NerveStapled) {moveDownNerveStapled( 2, 0, false, null)} 

            if( NaturalSociologists) {moveDownNaturalSociologists( 0, 0, false, null)} 
            if( NaturalEngineers) {moveDownNaturalEngineers( 0, 0, false, null)} 
            
    
        }
        let moveDownNaturalPhysicists = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setNaturalPhysicists(g)
    
    
        }
        let moveUpNaturalSociologists = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setNaturalSociologists(g)
            if( NerveStapled) {moveDownNerveStapled( 2, 0, false, null)} 
            if( NaturalPhysicists) {moveDownNaturalPhysicists( 0, 0, false, null)} 

            if( NaturalEngineers) {moveDownNaturalEngineers( 0, 0, false, null)} 
            
    
        }
        let moveDownNaturalSociologists = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setNaturalSociologists(g)
    
    
        }
        let moveUpNomadic = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setNomadic(g)
            
    
            
    
        }
        let moveDownNomadic = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setNomadic(g)
    
    
        }
        let moveUpQuickLearners = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setQuickLearners(g)
            if( SlowLearners) {moveDownSlowLearners( 2, 0, false, null)} 
    
            
    
        }
        let moveDownQuickLearners = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setQuickLearners(g)
    
    
        }
        let moveUpRapidBreeders = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setRapidBreeders(g)

            if( SlowBreeders) {moveDownSlowBreeders( 4, 0, false, null)} 
            if( Fertile) {moveDownFertile( 2, 0, false, null)} 
    
            
    
        }
        let moveDownRapidBreeders = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setRapidBreeders(g)
    
    
        }
        let moveUpResilient = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setResilient(g)
    
            
    
        }
        let moveDownResilient = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setResilient(g)
    
    
        }
        let moveDownStrong = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setStrong(g)

    
    
        }
        let moveUpStrong = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setStrong(g)
            if( Weak) {moveDownWeak( 2, 0, false, null)} 
            if( VeryStrong) {moveDownVeryStrong( 2, 0, false, null)} 
    
            
    
        }
        let moveDownVeryStrong = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setVeryStrong(g)

    
    
        }
        let moveUpVeryStrong = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setVeryStrong(g)

            if( Weak) {moveDownWeak( 4, 0, false, null)} 
            if( Strong) {moveDownStrong( -2, 0, false, null)} 
    
            
    
        }
        let moveDownTalented = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setTalented(g)
    
    
        }
        let moveUpTalented = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setTalented(g)
    
            
    
        }
        let moveUpThrifty = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setThrifty(g)
    
            
    
        }
        let moveDownThrifty = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setThrifty(g)
    
    
        }
        let moveUpTraditional = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks - f)
            setTraditional(g)
            if( Quarrelsome) {moveDownQuarrelsome( 2, 0, false, null)} 
    
            
    
        }
        let moveDownTraditional = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks + f)
            setTraditional(g)
    
    
        }
        let moveUpDecadent = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setDecadent(g)
    
            
    
        }
        let moveDownDecadent = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setDecadent(g)
    
    
        }
        let moveUpDeviants = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setDeviants(g)

            if( Conformists) {moveDownConformists( 2, 0, false, null)} 
    
            
    
        }
        let moveDownDeviants = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setDeviants(g)
    
    
        }
        let moveUpFleeting = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setFleeting(g)

            if( Enduring) {moveDownEnduring( 2, 0, false, null)} 
            if( Venerable) {moveDownVenerable( 5, 0, false, null)} 
    
            
    
        }
        let moveDownFleeting = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setFleeting(g)
    
    
        }
        let moveUpNonadaptive = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setNonadaptive(g)

            if( Robust) {moveDownRobust( 6, 0, false, null)}

            if( ExtremelyAdaptive) {moveDownExtremelyAdaptive( 6, 0, false, null)} 

            if( Adaptive) {moveDownAdaptive( 4, 0, false, null)} 
    
            
    
        }
        let moveDownNonadaptive = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setNonadaptive(g)
    
    
        }
        let moveUpQuarrelsome = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setQuarrelsome(g)
            if( Traditional) {moveDownTraditional( 2, 0, false, null)} 
    
            
    
        }
        let moveDownQuarrelsome = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setQuarrelsome(g)
    
    
        }
        let moveUpRepugnant = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setRepugnant(g)
    
            if( Charismatic) {moveDownCharismatic( 4, 0, false, null)}
    
        }
        let moveDownRepugnant = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setRepugnant(g)
             
    
    
        }
        let moveUpSedentary = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setSedentary(g)
            if( Nomadic) {moveDownNomadic( 2, 0, false, null)} 
    
            
    
        }
        let moveDownSedentary = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setSedentary(g)
    
    
    
        }
        let moveUpSlowBreeders = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setSlowBreeders(g)
            
            if( Fertile) {moveDownFertile( 6, 0, false, null)} 
            if( RapidBreeders) {moveDownRapidBreeders( 4, 0, false, null)} 

            
    
            
    
        }
        let moveDownSlowBreeders = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setSlowBreeders(g)
    
    
        }
        let moveUpSlowLearners = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setSlowLearners(g)

            if( QuickLearners) {moveDownQuickLearners( 2, 0, false, null)} 
    
            
    
        }
        let moveDownSlowLearners = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setSlowLearners(g)
    
    
        }
        let moveUpSolitary = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setSolitary(g)
            if( Communal) {moveDownCommunal( 2, 0, false, null)} 
            if( NerveStapled) {moveDownNerveStapled( 4, 0, false, null)} 
    
            
    
        }
        let moveDownSolitary = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setSolitary(g)
    
    
        }
        let moveUpWasteful = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setWasteful(g)

            if( Conservationist) {moveDownConservationist( 2, 0, false, null)} 
    
            
    
        }
        let moveDownWasteful = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setWasteful(g)
    
    
        }
        let moveUpWeak = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints + e) 
            setTraitPicks(traitPicks - f)
            setWeak(g)

            if( VeryStrong) {moveDownVeryStrong( 4, 0, false, null)} 
            if( Strong) {moveDownStrong( 2, 0, false, null)} 
    
            
    
        }
        let moveDownWeak = (e, f, g, h) =>{
    
            setTraitPoints(traitPoints - e) 
            setTraitPicks(traitPicks + f)
            setWeak(g)
    
    
        }
     
    
    
    
    
        return ( 
            <div>
            
                <h4>trait points left : {traitPoints +4}</h4>
                <h4>trait picks left : {traitPicks +5}</h4>
                {setTotalTraitPicks( traitPicks +5)}
                {setTotalTraitPoints( traitPoints +4)}
                <table Id="tableid">
                    <thead>
                        <td> Selected traits</td>
                        {/* <tr>
                        <button type="submit" onClick={(e) => countUp(1,1)}> 
                +1
                </button></tr> */}
    
                <tr> 
                {traitPicks != 0 ? null:  <td className="display"><button type="submit"> 
                        <div>No Traits Selected</div>
                </button>
                </td>} 

                {!check ? null: <td>      {!Robust ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownRobust( 4, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/a/aa/Robust.png"></img><div>Robust</div>
                </button><span className="displaytext"><div>Habitability +30%, Resources from Jobs +5%, Lifespan +50 Years</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 

                {!check ? null: <td>      {!Erudite ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownErudite( 4, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/4/41/Erudite.png"></img><div>Erudite</div>
                </button><span className="displaytext"><div>Researcher Output +20%, Leader Level Cap +1</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 
                
                {!check ? null: <td>      {!Fertile ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownFertile( 4, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/8/82/Fertile.png"></img><div>Fertile</div>
                </button><span className="displaytext"><div>Pop Growth Speed +30%, Pop Housing Usage −10%</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 

                {!check ? null: <td>      {!NerveStapled ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNerveStapled( 3, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f3/Nerve_Stapled.png"></img><div>Nerve Stapled</div>
                </button><span className="displaytext"><div>Resources from Jobs +5%, Cannot be employed in Ruler or Specialist Jobs, Cannot generate Leaders, Not Affected by Happiness, Can't join a faction</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 

                {!check ? null: <td>      {!Delicious ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDelicious( 4, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/f/ff/Delicious.png/28px-Delicious.png"></img><div>Delicious</div>
                </button><span className="displaytext"><div>Food from Livestock and Processing +2</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 


                
    
                {!Adaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownAdaptive( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/10/Adaptive.png"></img><div>Adaptive</div>
                </button><span className="displaytext"><div> Habitability +10%</div> <div> 2 Trait Point</div></span>
                </td>} 
    
                {!ExtremelyAdaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownExtremelyAdaptive( 4, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/26/Extremely_Adaptive.png"></img><div>Extremely Adaptive</div>
                </button><span className="displaytext"><div>Habitability +20%</div> <div> 4 Trait Point</div></span>
                </td>} 
                
                {!Agrarian ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownAgrarian( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/c/ca/Agrarian.png"></img><div>Agrarian</div>
                </button><span className="displaytext"><div>Food from Jobs +15%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {!Charismatic ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownCharismatic( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d8/Charismatic.png"></img><div>Charismatic</div>
                </button><span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {!Communal ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownCommunal( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/b/b5/Communal.png"></img><div>Communal</div>
                </button><span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!Conformists ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownConformists( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png"></img><div>Conformists</div>
                </button><span className="displaytext"><div>Governing Ethics Attraction +30%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!Conservationist ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownConservationist( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png"></img><div>Conservationist</div>
                </button><span className="displaytext"><div>Pop Consumer Goods Upkeep −10%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                
                {!Enduring ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownEnduring( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/9/91/Enduring.png"></img><div>Enduring</div>
                </button><span className="displaytext"><div>Leader Lifespan +20 Years</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!Venerable ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownVenerable( 4, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/8/85/Venerable.png"></img><div>Venerable</div>
                </button><span className="displaytext"><div>Leader Lifespan +80 Years</div> <div> 4 Trait Point</div></span>
                </td>} 
                
                {!Industrious ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownIndustrious( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/27/Industrious.png"></img><div>Industrious</div>
                </button><span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {!Ingenious ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownIngenious( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/62/Ingenious.png"></img><div>Ingenious</div>
                </button><span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {!Intelligent ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownIntelligent( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/6d/Intelligent.png"></img><div>Intelligent</div>
                </button><span className="displaytext"><div>	
    Engineering Research from Jobs +10%, Physics Research from Jobs +10%, Society Research from Jobs +10%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {!NaturalEngineers ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNaturalEngineers( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/9/9a/Natural_Engineers.png"></img><div>Natural Engineers</div>
                </button><span className="displaytext"><div>Engineering Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!NaturalPhysicists ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNaturalPhysicists( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/14/Natural_Physicists.png"></img><div>Natural Physicists</div>
                </button><span className="displaytext"><div>Physics Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!NaturalSociologists ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNaturalSociologists( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/61/Natural_Sociologists.png"></img><div>Natural Sociologists</div>
                </button><span className="displaytext"><div>Society Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!Nomadic ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNomadic( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/b/b8/Nomadic.png"></img><div>Nomadic</div>
                </button><span className="displaytext"><div>Pop Growth from Immigration +15%, resettlement cost mult.png Resettlement Cost −25%
    </div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!QuickLearners ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownQuickLearners( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/25/Quick_Learners.png"></img><div>Quick Learners</div>
                </button><span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!RapidBreeders ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownRapidBreeders( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/ed/Rapid_Breeders.png"></img><div>Rapid Breeders</div>
                </button><span className="displaytext"><div>Growth Speed +10%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {!Resilient ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownResilient( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d7/Resilient.png"></img><div>Resilient</div>
                </button><span className="displaytext"><div>Defense Army Damage +50%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!Strong ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownStrong( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/eb/Strong.png"></img><div>Strong</div>
                </button><span className="displaytext"><div>	Army Damage +20%, Worker Output +2.5%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!VeryStrong ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownVeryStrong( 3, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/8/8f/Very_Strong.png"></img><div>Very Strong</div>
                </button><span className="displaytext"><div>Army Damage +40%, Worker Output +5%</div> <div> 3 Trait Point</div></span>
                </td>} 
                
                {!Talented ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownTalented( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/3/3c/Talented.png"></img><div>Talented</div>
                </button><span className="displaytext"><div>Leader Level Cap +1</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!Thrifty ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownThrifty( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/9/9f/Thrifty.png"></img><div>Thrifty</div>
                </button><span className="displaytext"><div>Trade value from Jobs +25%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {!Traditional ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownTraditional( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/58/Trait_traditional.png"></img><div>Traditional</div>
                </button><span className="displaytext"><div>Unity from Jobs +10%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {!Decadent ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDecadent( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/a/a1/Decadent.png"></img><div>Decadent</div>
                </button><span className="displaytext"><div>Worker Happiness −10%, Slave Happiness −10%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {!Deviants ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDeviants( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png"></img><div>Deviants</div>
                </button><span className="displaytext"><div>Governing Ethics Attraction −15%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {!Fleeting ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownFleeting( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/74/Fleeting.png"></img><div>Fleeting</div>
                </button><span className="displaytext"><div>Leader Lifespan −10 Years</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {!Nonadaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNonadaptive( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5f/Nonadaptive.png"></img><div>Nonadaptive</div>
                </button><span className="displaytext"><div>Habitability −10%</div> <div> -2 Trait Point</div></span>
                </td>} 
                
                {!Quarrelsome ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownQuarrelsome( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5e/Trait_quarrelsome.png"></img><div>Quarrelsome</div>
                </button><span className="displaytext"><div>Unity from Jobs −10%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {!Repugnant ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownRepugnant( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5e/Repugnant.png"></img><div>Repugnant</div>
                </button><span className="displaytext"><div>Amenities from Jobs −20%</div> <div> -2 Trait Point</div></span>
                </td>} 
                
                {!Sedentary ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownSedentary( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/7c/Sedentary.png"></img><div>Sedentary</div>
                </button><span className="displaytext"><div>Pop Growth from Immigration −15%, Resettlement Cost +25%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {!SlowBreeders ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownSlowBreeders( 2, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/79/Slow_Breeders.png"></img><div>Slow Breeders</div>
                </button><span className="displaytext"><div>Growth Speed −10%</div> <div> -2 Trait Point</div></span>
                </td>} 
                
                {!SlowLearners ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownSlowLearners( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/69/Slow_Learners.png"></img><div> Slow Learners</div>
                </button><span className="displaytext"><div>Leader Experience Gain −25%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {!Solitary ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownSolitary( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/54/Solitary.png"></img><div>Solitary</div>
                </button><span className="displaytext"><div>Pop Housing Usage +10%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {!Wasteful ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownWasteful( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png"></img><div>Wasteful</div>
                </button><span className="displaytext"><div>Pop Consumer Goods Upkeep +10%</div> <div> -1 Trait Point</div></span>
                </td>} 
    
                {!Weak ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownWeak( 1, 1, false, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e9/Weak.png"></img><div>Weak</div>
                </button><span className="displaytext"><div>Army Damage −20%, Worker Output −2%</div> <div> -1 Trait Point</div></span>
                </td>} 
                

                
                
    
              
    
                       </tr>
    
                       
    
    
                        <td>Unselected traits</td>
                        {/* <tr>
                        <button type="submit" onClick={(e) => countDown(1,1)}> 
                -1
                </button></tr> */}
    
     
     {/* <div className="tooltip"> </div> */}
                <tr> 
                
                {/* <td className="display">
                {doubleJointed ? null: <button type="submit" onClick={(e) => moveUpDoubleJointed( 1, 1, true, "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png")}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png"></img><div>Double Jointed</div>
                </button>} 
                <span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
                </td> */}
    
    
    
                {Adaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpAdaptive( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/10/Adaptive.png"></img><div>Adaptive</div>
                </button><span className="displaytext"><div> Habitability +10%</div> <div> 2 Trait Point</div></span>
                </td>} 
    
                {ExtremelyAdaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpExtremelyAdaptive( 4, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/26/Extremely_Adaptive.png"></img><div>Extremely Adaptive</div>
                </button><span className="displaytext"><div>Habitability +20%</div> <div> 4 Trait Point</div></span>
                </td>} 
                
                {Agrarian ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpAgrarian( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/c/ca/Agrarian.png"></img><div>Agrarian</div>
                </button><span className="displaytext"><div>Food from Jobs +15%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {Charismatic ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpCharismatic( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d8/Charismatic.png"></img><div>Charismatic</div>
                </button><span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {Communal ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpCommunal( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/b/b5/Communal.png"></img><div>Communal</div>
                </button><span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
                </td>} 

                
                {majorTrait == 'https://stellaris.paradoxwikis.com/images/thumb/7/7d/Hive-minded.png/29px-Hive-minded.png' ?  null  : <td>{Conformists ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpConformists( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png"></img><div>Conformists</div>
                </button><span className="displaytext"><div>Governing Ethics Attraction +30%</div> <div> 1 Trait Point</div></span>
                </td>}
                            </td> }
                
                {/* {Conformists ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpConformists( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png"></img><div>Conformists</div>
                </button><span className="displaytext"><div>Governing Ethics Attraction +30%</div> <div> 1 Trait Point</div></span>
                </td>}  */}

{majorTrait == 'https://stellaris.paradoxwikis.com/images/thumb/7/7d/Hive-minded.png/29px-Hive-minded.png' ?  null  : <td>{Conservationist ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpConservationist( 1, 1, true, null)}> 
<img alt='' src= "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png"></img><div>Conservationist</div>
</button><span className="displaytext"><div>Pop Consumer Goods Upkeep −10%</div> <div> 1 Trait Point</div></span>
</td>}
                            </td> }
                
                {/* {Conservationist ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpConservationist( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png"></img><div>Conservationist</div>
                </button><span className="displaytext"><div>Pop Consumer Goods Upkeep −10%</div> <div> 1 Trait Point</div></span>
                </td>}  */}
                
                
                {Enduring ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpEnduring( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/9/91/Enduring.png"></img><div>Enduring</div>
                </button><span className="displaytext"><div>Leader Lifespan +20 Years</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {Venerable ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpVenerable( 4, 1, true, null)}> 
                      <img alt='' src= "https://stellaris.paradoxwikis.com/images/8/85/Venerable.png"></img><div>Venerable</div>
                </button><span className="displaytext"><div>Leader Lifespan +80 Years</div> <div> 4 Trait Point</div></span>
                </td>} 
                
                {Industrious ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpIndustrious( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/27/Industrious.png"></img><div>Industrious</div>
                </button><span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {Ingenious ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpIngenious( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/62/Ingenious.png"></img><div>Ingenious</div>
                </button><span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {Intelligent ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpIntelligent( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/6d/Intelligent.png"></img><div>Intelligent</div>
                </button><span className="displaytext"><div>	
    Engineering Research from Jobs +10%, Physics Research from Jobs +10%, Society Research from Jobs +10%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {NaturalEngineers ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNaturalEngineers( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/9/9a/Natural_Engineers.png"></img><div>Natural Engineers</div>
                </button><span className="displaytext"><div>Engineering Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {NaturalPhysicists ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNaturalPhysicists( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/1/14/Natural_Physicists.png"></img><div>Natural Physicists</div>
                </button><span className="displaytext"><div>Physics Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {NaturalSociologists ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNaturalSociologists( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/61/Natural_Sociologists.png"></img><div>Natural Sociologists</div>
                </button><span className="displaytext"><div>Society Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {Nomadic ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNomadic( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/b/b8/Nomadic.png"></img><div>Nomadic</div>
                </button><span className="displaytext"><div>Pop Growth from Immigration +15%, resettlement cost mult.png Resettlement Cost −25%
    </div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {QuickLearners ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpQuickLearners( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/25/Quick_Learners.png"></img><div>Quick Learners</div>
                </button><span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {RapidBreeders ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpRapidBreeders( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/ed/Rapid_Breeders.png"></img><div>Rapid Breeders</div>
                </button><span className="displaytext"><div>Growth Speed +10%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {Resilient ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpResilient( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d7/Resilient.png"></img><div>Resilient</div>
                </button><span className="displaytext"><div>Defense Army Damage +50%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {Strong ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpStrong( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/eb/Strong.png"></img><div>Strong</div>
                </button><span className="displaytext"><div>	Army Damage +20%, Worker Output +2.5%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {VeryStrong ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpVeryStrong( 3, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/8/8f/Very_Strong.png"></img><div>Very Strong</div>
                </button><span className="displaytext"><div>Army Damage +40%, Worker Output +5%</div> <div> 3 Trait Point</div></span>
                </td>} 
                
                {Talented ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpTalented( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/3/3c/Talented.png"></img><div>Talented</div>
                </button><span className="displaytext"><div>Leader Level Cap +1</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {Thrifty ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpThrifty( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/9/9f/Thrifty.png"></img><div>Thrifty</div>
                </button><span className="displaytext"><div>Trade value from Jobs +25%</div> <div> 2 Trait Point</div></span>
                </td>} 
                
                {Traditional ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpTraditional( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/58/Trait_traditional.png"></img><div>Traditional</div>
                </button><span className="displaytext"><div>Unity from Jobs +10%</div> <div> 1 Trait Point</div></span>
                </td>} 
                
                {Decadent ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpDecadent( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/a/a1/Decadent.png"></img><div>Decadent</div>
                </button><span className="displaytext"><div>Worker Happiness −10%, Slave Happiness −10%</div> <div> -1 Trait Point</div></span>
                </td>} 

                {majorTrait == 'https://stellaris.paradoxwikis.com/images/thumb/7/7d/Hive-minded.png/29px-Hive-minded.png' ?  null  : <td>{Deviants ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpDeviants( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png"></img><div>Deviants</div>
                </button><span className="displaytext"><div>Governing Ethics Attraction −15%</div> <div> -1 Trait Point</div></span>
                </td>} </td>}
                
                {/* {Deviants ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpDeviants( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png"></img><div>Deviants</div>
                </button><span className="displaytext"><div>Governing Ethics Attraction −15%</div> <div> -1 Trait Point</div></span>
                </td>}  */}
                
                {Fleeting ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpFleeting( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/74/Fleeting.png"></img><div>Fleeting</div>
                </button><span className="displaytext"><div>Leader Lifespan −10 Years</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {Nonadaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNonadaptive( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5f/Nonadaptive.png"></img><div>Nonadaptive</div>
                </button><span className="displaytext"><div>Habitability −10%</div> <div> -2 Trait Point</div></span>
                </td>} 
                
                {Quarrelsome ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpQuarrelsome( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5e/Trait_quarrelsome.png"></img><div>Quarrelsome</div>
                </button><span className="displaytext"><div>Unity from Jobs −10%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {Repugnant ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpRepugnant( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5e/Repugnant.png"></img><div>Repugnant</div>
                </button><span className="displaytext"><div>Amenities from Jobs −20%</div> <div> -2 Trait Point</div></span>
                </td>} 
                
                {Sedentary ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpSedentary( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/7c/Sedentary.png"></img><div>Sedentary</div>
                </button><span className="displaytext"><div>Pop Growth from Immigration −15%, Resettlement Cost +25%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {SlowBreeders ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpSlowBreeders( 2, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/79/Slow_Breeders.png"></img><div>Slow Breeders</div>
                </button><span className="displaytext"><div>Growth Speed −10%</div> <div> -2 Trait Point</div></span>
                </td>} 
                
                {SlowLearners ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpSlowLearners( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/69/Slow_Learners.png"></img><div> Slow Learners</div>
                </button><span className="displaytext"><div>Leader Experience Gain −25%</div> <div> -1 Trait Point</div></span>
                </td>} 
                
                {Solitary ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpSolitary( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/54/Solitary.png"></img><div>Solitary</div>
                </button><span className="displaytext"><div>Pop Housing Usage +10%</div> <div> -1 Trait Point</div></span>
                </td>} 

                {majorTrait == 'https://stellaris.paradoxwikis.com/images/thumb/7/7d/Hive-minded.png/29px-Hive-minded.png' ?  null  : <td>{Wasteful ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpWasteful( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png"></img><div>Wasteful</div>
                </button><span className="displaytext"><div>Pop Consumer Goods Upkeep +10%</div> <div> -1 Trait Point</div></span>
                </td>} </td>}
                
                {/* {Wasteful ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpWasteful( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png"></img><div>Wasteful</div>
                </button><span className="displaytext"><div>Pop Consumer Goods Upkeep +10%</div> <div> -1 Trait Point</div></span>
                </td>}  */}
    
                {Weak ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpWeak( 1, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e9/Weak.png"></img><div>Weak</div>
                </button><span className="displaytext"><div>Army Damage −20%, Worker Output −2%</div> <div> -1 Trait Point</div></span>
                </td>} 


                {!check ? null: <td>      {Robust ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpRobust( 4, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/a/aa/Robust.png"></img><div>Robust</div>
                </button><span className="displaytext"><div>Habitability +30%, Resources from Jobs +5%, Lifespan +50 Years</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 

                {!check ? null: <td>      {Erudite ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpErudite( 4, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/4/41/Erudite.png"></img><div>Erudite</div>
                </button><span className="displaytext"><div>Researcher Output +20%, Leader Level Cap +1</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 
                
                {!check ? null: <td>      {Fertile ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpFertile( 4, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/8/82/Fertile.png"></img><div>Fertile</div>
                </button><span className="displaytext"><div>Pop Growth Speed +30%, Pop Housing Usage −10%</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 

                {!check ? null: <td>      {NerveStapled ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNerveStapled( 3, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f3/Nerve_Stapled.png"></img><div>Nerve Stapled</div>
                </button><span className="displaytext"><div>Resources from Jobs +5%, Cannot be employed in Ruler or Specialist Jobs, Cannot generate Leaders, Not Affected by Happiness, Can't join a faction</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 

                {!check ? null: <td>      {Delicious ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpDelicious( 4, 1, true, null)}> 
                        <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/f/ff/Delicious.png/28px-Delicious.png"></img><div>Delicious</div>
                </button><span className="displaytext"><div>Food from Livestock and Processing +2</div> <div> 4 Trait Point</div></span>
                </td>} </td>} 


          
    
              
    
    
    
    
    
                       </tr>
    
                   
                       
                       
                    </thead>
                </table>
    
    
    
                
    
            </div>
            
        )
    }


    let spiecesSubmit= (e, f) => {
        //console.log(e)
       
       
        setSpiecesType(e)
        setMachine(f)
        if (isMachine) {setMajorTrait(null)}
    }

    let planetSubmit= (e, f) => {
        //console.log(f)
       
       
        setPlanetType(e)
        if (isMachine) {
            setPreferance(null)
        }
        else {setPreferance(f)}
        
    }

    let majorTraitSubmit= (e, f, g) => {
        //console.log(f)
       
       
        setMajorTrait(e)
        setSpecialTrait(f)
        setPreferance(g)
        clearTraits(false)
        setCheck(false)
        setCheck2(false)
        setTraitPicks(0)
        setTraitPoints(0)
        
    }
    


    return (
        <div >
            {redirect ? <Redirect to ='/createSpecies'/>:null}

        <div className = "space" ></div>
        

        <div Id = "bodyDoc">


        <h1>Species</h1>
        <div className = "embedBox">
            <div Id ='spiecesName'><SpiecesDisplay string={spiecesName}/></div> 
            <div Id ='spiecesBox'>
            <div Id ='spiecesPic'><img alt='' src = {spiecesType}></img></div> 
                </div> 
                <div Id = 'planetBox'>
            
            <div Id ='spiecesPlanet'><img alt='' src = {planetType} width='200%' height=' 200%'></img></div> 
</div>
        
        {/* <SpiecesDisplay string={spiecesPlural}/>
        <SpiecesDisplay string={spiecesAdj}/> */}
        {/* <SpiecesDisplay string={totalTraitPicks}/>
        <SpiecesDisplay string={totalTraitPoints}/> */}

        {/* <img alt='' src = {spiecesType}></img> */}
        {/* <img alt='' src = {planetType}></img> */}
        {/* <img alt='' src = {preferedPreferance}></img> */}
        {/* <img alt='' src = {majorTrait}></img> */}


        <div Id= 'placeTraits'>
        <img alt='' src = {preferedPreferance}></img>
        <img alt='' src = {majorTrait}></img>

        <img alt='' src = {domesticProtocols == true? "https://stellaris.paradoxwikis.com/images/c/c2/Domestic_protocols.png": null}></img>
        <img alt='' src = {doubleJointed == true? "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png": null}></img>
        <img alt='' src = {durable == true? "https://stellaris.paradoxwikis.com/images/2/26/Durable.png": null}></img>
        <img alt='' src = {efficientProcessors == true? "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png": null}></img>
        <img alt='' src = {emotionEmulators == true? "https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png": null}></img>
        <img alt='' src = {enhancedMemory == true? "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png": null}></img>
        <img alt='' src = {harvesters == true? "https://stellaris.paradoxwikis.com/images/e/e4/Harvesters.png": null}></img>
        <img alt='' src = {learningAlgorithms == true? "https://stellaris.paradoxwikis.com/images/8/89/Learning_algorithms.png": null}></img>
        <img alt='' src = {logicEngines == true? "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png": null}></img>
        <img alt='' src = {loyaltyCircuits == true? "https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png": null}></img>
        <img alt='' src = {massProduced == true? "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png": null}></img>
        <img alt='' src = {powerDrills == true? "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png": null}></img>
        <img alt='' src = {propagandaMachines == true? "https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png": null}></img>
        <img alt='' src = {recycled == true? "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png": null}></img>
        <img alt='' src = {superconductive == true? "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png": null}></img>
        <img alt='' src = {Bulky == true? "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png": null}></img>
        <img alt='' src = {CustomMade == true? "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png": null}></img>
        <img alt='' src = {HighMaintenance == true? "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png": null}></img>
        <img alt='' src = {Luxurious == true? "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png": null}></img>
        <img alt='' src = {RepurposedHardware == true? "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png": null}></img>
        <img alt='' src = {Uncanny == true? "https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png": null}></img>

        <img alt='' src = {Erudite == true? "https://stellaris.paradoxwikis.com/images/4/41/Erudite.png": null}></img>
        <img alt='' src = {NerveStapled == true? "https://stellaris.paradoxwikis.com/images/f/f3/Nerve_Stapled.png": null}></img>
        <img alt='' src = {Delicious == true? "https://stellaris.paradoxwikis.com/images/thumb/f/ff/Delicious.png/28px-Delicious.png": null}></img>
        <img alt='' src = {Robust == true? "https://stellaris.paradoxwikis.com/images/a/aa/Robust.png": null}></img>
        <img alt='' src = {Fertile == true? "https://stellaris.paradoxwikis.com/images/8/82/Fertile.png": null}></img>

        <img alt='' src = {Venerable == true? "https://stellaris.paradoxwikis.com/images/8/85/Venerable.png": null}></img>
        
        <img alt='' src = {Adaptive == true? "https://stellaris.paradoxwikis.com/images/1/10/Adaptive.png": null}></img>
        <img alt='' src = {ExtremelyAdaptive == true? "https://stellaris.paradoxwikis.com/images/2/26/Extremely_Adaptive.png": null}></img>
        <img alt='' src = {Agrarian == true? "https://stellaris.paradoxwikis.com/images/c/ca/Agrarian.png": null}></img>
        <img alt='' src = {Charismatic == true? "https://stellaris.paradoxwikis.com/images/d/d8/Charismatic.png": null}></img>
        <img alt='' src = {Communal == true? "https://stellaris.paradoxwikis.com/images/b/b5/Communal.png": null}></img>
        <img alt='' src = {Conformists == true? "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png": null}></img>
        <img alt='' src = {Conservationist == true? "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png": null}></img>
        <img alt='' src = {Enduring == true? "https://stellaris.paradoxwikis.com/images/9/91/Enduring.png": null}></img>
        <img alt='' src = {VeryStrong == true? "https://stellaris.paradoxwikis.com/images/8/8f/Very_Strong.png": null}></img>

        <img alt='' src = {Industrious == true? "https://stellaris.paradoxwikis.com/images/2/27/Industrious.png": null}></img>
        <img alt='' src = {Ingenious == true? "https://stellaris.paradoxwikis.com/images/6/62/Ingenious.png": null}></img>
        <img alt='' src = {Intelligent == true? "https://stellaris.paradoxwikis.com/images/6/6d/Intelligent.png": null}></img>
        <img alt='' src = {NaturalEngineers == true? "https://stellaris.paradoxwikis.com/images/9/9a/Natural_Engineers.png": null}></img>
        <img alt='' src = {NaturalPhysicists == true? "https://stellaris.paradoxwikis.com/images/1/14/Natural_Physicists.png": null}></img>
        <img alt='' src = {NaturalSociologists == true? "https://stellaris.paradoxwikis.com/images/6/61/Natural_Sociologists.png": null}></img>
        <img alt='' src = {Nomadic == true? "https://stellaris.paradoxwikis.com/images/b/b8/Nomadic.png": null}></img>
        <img alt='' src = {QuickLearners == true? "https://stellaris.paradoxwikis.com/images/2/25/Quick_Learners.png": null}></img>
        <img alt='' src = {RapidBreeders == true? "https://stellaris.paradoxwikis.com/images/e/ed/Rapid_Breeders.png": null}></img>
        <img alt='' src = {Resilient == true? "https://stellaris.paradoxwikis.com/images/d/d7/Resilient.png": null}></img>
        <img alt='' src = {Strong == true? "https://stellaris.paradoxwikis.com/images/e/eb/Strong.png": null}></img>

        <img alt='' src = {Talented == true? "https://stellaris.paradoxwikis.com/images/3/3c/Talented.png": null}></img>
        <img alt='' src = {Thrifty == true? "https://stellaris.paradoxwikis.com/images/9/9f/Thrifty.png": null}></img>
        <img alt='' src = {Traditional == true? "https://stellaris.paradoxwikis.com/images/5/58/Trait_traditional.png": null}></img>
        <img alt='' src = {Decadent == true? "https://stellaris.paradoxwikis.com/images/a/a1/Decadent.png": null}></img>
        <img alt='' src = {Deviants == true? "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png": null}></img>
        <img alt='' src = {Fleeting == true? "https://stellaris.paradoxwikis.com/images/7/74/Fleeting.png": null}></img>
        <img alt='' src = {Nonadaptive == true? "https://stellaris.paradoxwikis.com/images/5/5f/Nonadaptive.png": null}></img>
        <img alt='' src = {Quarrelsome == true? "https://stellaris.paradoxwikis.com/images/5/5e/Trait_quarrelsome.png": null}></img>
        <img alt='' src = {Repugnant == true? "https://stellaris.paradoxwikis.com/images/5/5e/Repugnant.png": null}></img>
        <img alt='' src = {Sedentary == true? "https://stellaris.paradoxwikis.com/images/7/7c/Sedentary.png": null}></img>
        <img alt='' src = {SlowBreeders == true? "https://stellaris.paradoxwikis.com/images/7/79/Slow_Breeders.png": null}></img>
        <img alt='' src = {SlowLearners == true? "https://stellaris.paradoxwikis.com/images/6/69/Slow_Learners.png": null}></img>
        <img alt='' src = {Solitary == true? "https://stellaris.paradoxwikis.com/images/5/54/Solitary.png": null}></img>
        <img alt='' src = {Wasteful == true? "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png": null}></img>
        <img alt='' src = {Weak == true? "https://stellaris.paradoxwikis.com/images/e/e9/Weak.png": null}></img>
        </div>
        

        <div Id = "postSubmit">

        <button type="submit" onClick={(z) => postSubmit(z)}> <h3>Submit Species</h3>
            
        </button>


        </div>
        

        

        </div>




        <Label> New Species name: </Label>
        <Input value={spiecesName} onChange= {(e)=>setSpiecesName(e.target.value)} maxlength="16"> Spieces</Input>
        {/* <Label>  Species Plural: </Label> */}
        {/* <Input value={spiecesPlural} onChange= {(e)=>setSpiecesPlural(e.target.value)}> Spieces</Input>
        <Label> Species Adjective: </Label>
        <Input value={spiecesAdj} onChange= {(e)=>setSpiecesAdj(e.target.value)}> Spieces</Input>
        <h3> Species Apperance</h3> */}
        <Label> Humanoid </Label>
        
        <div className= "apperanceBox">
            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/6e/Human.png/89px-Human.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/6e/Human.png/89px-Human.png"></img>
        </button>

        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/5/5c/Humanoid_02.png/84px-Humanoid_02.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/5/5c/Humanoid_02.png/84px-Humanoid_02.png"></img>
        </button>

        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/1/1b/Humanoid_03.png/89px-Humanoid_03.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/1/1b/Humanoid_03.png/89px-Humanoid_03.png"></img>
        </button>

        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/6a/Humanoid_04.png/80px-Humanoid_04.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/6a/Humanoid_04.png/80px-Humanoid_04.png"></img>
        </button>

        <button type="submit" onClick={(e) => spiecesSubmit( "https://stellaris.paradoxwikis.com/images/thumb/7/7d/Humanoid_05.png/76px-Humanoid_05.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/7/7d/Humanoid_05.png/76px-Humanoid_05.png"></img>
        </button>

        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/91/Humanoid_hp_01.png/78px-Humanoid_hp_01.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/91/Humanoid_hp_01.png/78px-Humanoid_hp_01.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d4/Humanoid_hp_02.png/83px-Humanoid_hp_02.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d4/Humanoid_hp_02.png/83px-Humanoid_hp_02.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/91/Humanoid_hp_06.png/82px-Humanoid_hp_06.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/91/Humanoid_hp_06.png/82px-Humanoid_hp_06.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/97/Humanoid_hp_07.png/79px-Humanoid_hp_07.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/97/Humanoid_hp_07.png/79px-Humanoid_hp_07.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/5/51/Humanoid_hp_08.png/86px-Humanoid_hp_08.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/5/51/Humanoid_hp_08.png/86px-Humanoid_hp_08.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e8/Humanoid_hp_09.png/78px-Humanoid_hp_09.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e8/Humanoid_hp_09.png/78px-Humanoid_hp_09.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/91/Humanoid_hp_10.png/78px-Humanoid_hp_10.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/91/Humanoid_hp_10.png/78px-Humanoid_hp_10.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/f/fc/Humanoid_hp_11.png/98px-Humanoid_hp_11.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/f/fc/Humanoid_hp_11.png/98px-Humanoid_hp_11.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/2/29/Humanoid_hp_12.png/98px-Humanoid_hp_12.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/2/29/Humanoid_hp_12.png/98px-Humanoid_hp_12.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d2/Humanoid_hp_13.png/97px-Humanoid_hp_13.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d2/Humanoid_hp_13.png/97px-Humanoid_hp_13.png"></img>
        </button>
        </div>

        <Label> Mammalian </Label>

        <div className= "apperanceBox">
            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/3/3c/Mammalian_slender_05.png/90px-Mammalian_slender_05.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/3/3c/Mammalian_slender_05.png/90px-Mammalian_slender_05.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/61/Mammalian_massive_13.png/103px-Mammalian_massive_13.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/61/Mammalian_massive_13.png/103px-Mammalian_massive_13.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/0/09/Mammalian_normal_10.png/71px-Mammalian_normal_10.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/0/09/Mammalian_normal_10.png/71px-Mammalian_normal_10.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/90/Mammalian_massive_14.png/93px-Mammalian_massive_14.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/90/Mammalian_massive_14.png/93px-Mammalian_massive_14.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/7/7f/Mammalian_slender_04.png/87px-Mammalian_slender_04.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/7/7f/Mammalian_slender_04.png/87px-Mammalian_slender_04.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/c/cc/Mammalian_normal_09.png/81px-Mammalian_normal_09.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/c/cc/Mammalian_normal_09.png/81px-Mammalian_normal_09.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/7/75/Mammalian_massive_11.png/85px-Mammalian_massive_11.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/7/75/Mammalian_massive_11.png/85px-Mammalian_massive_11.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/a/a8/Mammalian_normal_06.png/86px-Mammalian_normal_06.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/a/a8/Mammalian_normal_06.png/86px-Mammalian_normal_06.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/47/Mammalian_slender_03.png/65px-Mammalian_slender_03.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/47/Mammalian_slender_03.png/65px-Mammalian_slender_03.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/a/ad/Mammalian_massive_12.png/97px-Mammalian_massive_12.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/a/ad/Mammalian_massive_12.png/97px-Mammalian_massive_12.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/3/30/Mammalian_normal_07.png/75px-Mammalian_normal_07.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/3/30/Mammalian_normal_07.png/75px-Mammalian_normal_07.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d7/Mammalian_massive_15.png/90px-Mammalian_massive_15.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d7/Mammalian_massive_15.png/90px-Mammalian_massive_15.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e5/Mammalian_slender_02.png/78px-Mammalian_slender_02.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e5/Mammalian_slender_02.png/78px-Mammalian_slender_02.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/9c/Mammalian_normal_08.png/81px-Mammalian_normal_08.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/9c/Mammalian_normal_08.png/81px-Mammalian_normal_08.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/2/21/Mammalian_slender_01.png/106px-Mammalian_slender_01.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/2/21/Mammalian_slender_01.png/106px-Mammalian_slender_01.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/65/Mammalian_massive_16.png/103px-Mammalian_massive_16.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/65/Mammalian_massive_16.png/103px-Mammalian_massive_16.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/9c/Mammalian_massive_17.png/91px-Mammalian_massive_17.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/9c/Mammalian_massive_17.png/91px-Mammalian_massive_17.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/8/85/Mammalian_ratling.png/120px-Mammalian_ratling.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/8/85/Mammalian_ratling.png/120px-Mammalian_ratling.png"></img>
        </button>
 </div>
 <Label> Reptilian </Label>
 <div className= "apperanceBox">
            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/da/Reptilian_slender_02.png/80px-Reptilian_slender_02.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/da/Reptilian_slender_02.png/80px-Reptilian_slender_02.png"></img>
        </button>

        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/3/34/Reptilian_massive_14.png/92px-Reptilian_massive_14.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/3/34/Reptilian_massive_14.png/92px-Reptilian_massive_14.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/0/0f/Reptilian_normal_10.png/84px-Reptilian_normal_10.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/0/0f/Reptilian_normal_10.png/84px-Reptilian_normal_10.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/c/c0/Reptilian_slender_03.png/93px-Reptilian_slender_03.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/c/c0/Reptilian_slender_03.png/93px-Reptilian_slender_03.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/3/3e/Reptilian_normal_07.png/90px-Reptilian_normal_07.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/3/3e/Reptilian_normal_07.png/90px-Reptilian_normal_07.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/48/Reptilian_massive_12.png/92px-Reptilian_massive_12.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/48/Reptilian_massive_12.png/92px-Reptilian_massive_12.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d8/Reptilian_normal_09.png/75px-Reptilian_normal_09.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d8/Reptilian_normal_09.png/75px-Reptilian_normal_09.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e0/Reptilian_massive_11.png/86px-Reptilian_massive_11.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e0/Reptilian_massive_11.png/86px-Reptilian_massive_11.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/99/Reptilian_normal_06.png/76px-Reptilian_normal_06.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/99/Reptilian_normal_06.png/76px-Reptilian_normal_06.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d3/Reptilian_massive_13.png/91px-Reptilian_massive_13.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d3/Reptilian_massive_13.png/91px-Reptilian_massive_13.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/3/3b/Reptilian_slender_01.png/78px-Reptilian_slender_01.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/3/3b/Reptilian_slender_01.png/78px-Reptilian_slender_01.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/45/Reptilian_normal_08.png/73px-Reptilian_normal_08.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/45/Reptilian_normal_08.png/73px-Reptilian_normal_08.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e2/Reptilian_slender_04.png/94px-Reptilian_slender_04.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e2/Reptilian_slender_04.png/94px-Reptilian_slender_04.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/43/Reptilian_massive_15.png/92px-Reptilian_massive_15.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/43/Reptilian_massive_15.png/92px-Reptilian_massive_15.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/f/f0/Reptilian_slender_05.png/79px-Reptilian_slender_05.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/f/f0/Reptilian_slender_05.png/79px-Reptilian_slender_05.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/9e/Reptilian_16.png/100px-Reptilian_16.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/9e/Reptilian_16.png/100px-Reptilian_16.png"></img>
        </button>
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/1/1f/Reptilian_17.png/86px-Reptilian_17.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/1/1f/Reptilian_17.png/86px-Reptilian_17.png"></img>
        </button>


        </div>

        <Label> Avian </Label>
        <div className= "apperanceBox">

        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/46/Avian_slender_01.png/65px-Avian_slender_01.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/46/Avian_slender_01.png/65px-Avian_slender_01.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e4/Avian_normal_08.png/77px-Avian_normal_08.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e4/Avian_normal_08.png/77px-Avian_normal_08.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/7/7c/Avian_massive_13.png/95px-Avian_massive_13.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/7/7c/Avian_massive_13.png/95px-Avian_massive_13.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/f/fc/Avian_normal_10.png/89px-Avian_normal_10.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/f/fc/Avian_normal_10.png/89px-Avian_normal_10.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/2/25/Avian_massive_15.png/90px-Avian_massive_15.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/2/25/Avian_massive_15.png/90px-Avian_massive_15.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/db/Avian_slender_04.png/68px-Avian_slender_04.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/db/Avian_slender_04.png/68px-Avian_slender_04.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/45/Avian_normal_07.png/89px-Avian_normal_07.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/45/Avian_normal_07.png/89px-Avian_normal_07.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/3/33/Avian_slender_05.png/91px-Avian_slender_05.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/3/33/Avian_slender_05.png/91px-Avian_slender_05.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/5/50/Avian_normal_09.png/82px-Avian_normal_09.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/5/50/Avian_normal_09.png/82px-Avian_normal_09.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/a/ad/Avian_normal_06.png/82px-Avian_normal_06.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/a/ad/Avian_normal_06.png/82px-Avian_normal_06.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/3/3d/Avian_massive_11.png/90px-Avian_massive_11.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/3/3d/Avian_massive_11.png/90px-Avian_massive_11.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d7/Avian_slender_03.png/100px-Avian_slender_03.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d7/Avian_slender_03.png/100px-Avian_slender_03.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/46/Avian_massive_14.png/90px-Avian_massive_14.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/46/Avian_massive_14.png/90px-Avian_massive_14.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/5/51/Avian_slender_02.png/77px-Avian_slender_02.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/5/51/Avian_slender_02.png/77px-Avian_slender_02.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e3/Avian_massive_12.png/92px-Avian_massive_12.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e3/Avian_massive_12.png/92px-Avian_massive_12.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/47/Avian_massive_16.png/97px-Avian_massive_16.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/47/Avian_massive_16.png/97px-Avian_massive_16.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/95/Avian_massive_17.png/85px-Avian_massive_17.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/95/Avian_massive_17.png/85px-Avian_massive_17.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/b/b1/Avian_18.png/120px-Avian_18.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/b/b1/Avian_18.png/120px-Avian_18.png"></img>
            </button>



        </div>

        <Label> Arthropoid </Label>
        <div className= "apperanceBox">

        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/6a/Arthropoid_massive_14.png/72px-Arthropoid_massive_14.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/6a/Arthropoid_massive_14.png/72px-Arthropoid_massive_14.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e7/Arthropoid_normal_07.png/61px-Arthropoid_normal_07.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e7/Arthropoid_normal_07.png/61px-Arthropoid_normal_07.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/94/Arthropoid_massive_12.png/92px-Arthropoid_massive_12.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/94/Arthropoid_massive_12.png/92px-Arthropoid_massive_12.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/0/0f/Arthropoid_normal_06.png/70px-Arthropoid_normal_06.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/0/0f/Arthropoid_normal_06.png/70px-Arthropoid_normal_06.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/a/ab/Arthropoid_slender_01.png/78px-Arthropoid_slender_01.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/a/ab/Arthropoid_slender_01.png/78px-Arthropoid_slender_01.png"></img>
            </button>


            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/5/59/Arthropoid_massive_13.png/93px-Arthropoid_massive_13.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/5/59/Arthropoid_massive_13.png/93px-Arthropoid_massive_13.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/8/8d/Arthropoid_normal_08.png/71px-Arthropoid_normal_08.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/8/8d/Arthropoid_normal_08.png/71px-Arthropoid_normal_08.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/ed/Arthropoid_slender_03.png/66px-Arthropoid_slender_03.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/ed/Arthropoid_slender_03.png/66px-Arthropoid_slender_03.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/0/00/Arthropoid_slender_05.png/92px-Arthropoid_slender_05.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/0/00/Arthropoid_slender_05.png/92px-Arthropoid_slender_05.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/0/05/Arthropoid_normal_09.png/80px-Arthropoid_normal_09.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/0/05/Arthropoid_normal_09.png/80px-Arthropoid_normal_09.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/7/7a/Arthropoid_normal_10.png/72px-Arthropoid_normal_10.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/7/7a/Arthropoid_normal_10.png/72px-Arthropoid_normal_10.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/1/16/Arthropoid_massive_11.png/94px-Arthropoid_massive_11.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/1/16/Arthropoid_massive_11.png/94px-Arthropoid_massive_11.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/0/05/Arthropoid_massive_15.png/91px-Arthropoid_massive_15.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/0/05/Arthropoid_massive_15.png/91px-Arthropoid_massive_15.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/a/a1/Arthropoid_18.png/108px-Arthropoid_18.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/a/a1/Arthropoid_18.png/108px-Arthropoid_18.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/b/b0/Arthropoid_massive_16.png/89px-Arthropoid_massive_16.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/b/b0/Arthropoid_massive_16.png/89px-Arthropoid_massive_16.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/c/cf/Arthropoid_20.png/120px-Arthropoid_20.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/c/cf/Arthropoid_20.png/120px-Arthropoid_20.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/42/Arthropoid_massive_17.png/92px-Arthropoid_massive_17.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/42/Arthropoid_massive_17.png/92px-Arthropoid_massive_17.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/1/12/Arthropoid_19.png/120px-Arthropoid_19.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/1/12/Arthropoid_19.png/120px-Arthropoid_19.png"></img>
            </button>



        </div>
        <Label> Molluscoid </Label>
        <div className= "apperanceBox">
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/a/ac/Molluscoid_slender_03.png/74px-Molluscoid_slender_03.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/a/ac/Molluscoid_slender_03.png/74px-Molluscoid_slender_03.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/dd/Molluscoid_normal_07.png/85px-Molluscoid_normal_07.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/dd/Molluscoid_normal_07.png/85px-Molluscoid_normal_07.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/2/29/Molluscoid_massive_13.png/91px-Molluscoid_massive_13.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/2/29/Molluscoid_massive_13.png/91px-Molluscoid_massive_13.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/b/b0/Molluscoid_slender_02.png/62px-Molluscoid_slender_02.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/b/b0/Molluscoid_slender_02.png/62px-Molluscoid_slender_02.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/1/12/Molluscoid_massive_14.png/91px-Molluscoid_massive_14.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/1/12/Molluscoid_massive_14.png/91px-Molluscoid_massive_14.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/62/Molluscoid_slender_04.png/79px-Molluscoid_slender_04.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/62/Molluscoid_slender_04.png/79px-Molluscoid_slender_04.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/2/2e/Molluscoid_normal_08.png/66px-Molluscoid_normal_08.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/2/2e/Molluscoid_normal_08.png/66px-Molluscoid_normal_08.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d4/Molluscoid_slender_01.png/73px-Molluscoid_slender_01.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d4/Molluscoid_slender_01.png/73px-Molluscoid_slender_01.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/94/Molluscoid_massive_11.png/92px-Molluscoid_massive_11.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/94/Molluscoid_massive_11.png/92px-Molluscoid_massive_11.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/95/Molluscoid_massive_12.png/91px-Molluscoid_massive_12.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/95/Molluscoid_massive_12.png/91px-Molluscoid_massive_12.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/2/22/Molluscoid_slender_05.png/70px-Molluscoid_slender_05.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/2/22/Molluscoid_slender_05.png/70px-Molluscoid_slender_05.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e2/Molluscoid_normal_06.png/91px-Molluscoid_normal_06.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e2/Molluscoid_normal_06.png/91px-Molluscoid_normal_06.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/1/10/Molluscoid_massive_15.png/91px-Molluscoid_massive_15.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/1/10/Molluscoid_massive_15.png/91px-Molluscoid_massive_15.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/8/88/Molluscoid_massive_16.png/100px-Molluscoid_massive_16.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/8/88/Molluscoid_massive_16.png/100px-Molluscoid_massive_16.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d6/Molluscoid_17.png/92px-Molluscoid_17.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d6/Molluscoid_17.png/92px-Molluscoid_17.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/4b/Molluscoid_18.png/120px-Molluscoid_18.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/4b/Molluscoid_18.png/120px-Molluscoid_18.png"></img>
            </button>

  


        </div>

        <Label> Fungoid </Label>
        <div className= "apperanceBox">

        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/1/1b/Fungoid_slender_02.png/92px-Fungoid_slender_02.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/1/1b/Fungoid_slender_02.png/92px-Fungoid_slender_02.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/5/59/Fungoid_slender_04.png/86px-Fungoid_slender_04.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/5/59/Fungoid_slender_04.png/86px-Fungoid_slender_04.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/5/5a/Fungoid_slender_03.png/59px-Fungoid_slender_03.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/5/5a/Fungoid_slender_03.png/59px-Fungoid_slender_03.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/9d/Fungoid_massive_13.png/74px-Fungoid_massive_13.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/9d/Fungoid_massive_13.png/74px-Fungoid_massive_13.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/a/ab/Fungoid_massive_12.png/93px-Fungoid_massive_12.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/a/ab/Fungoid_massive_12.png/93px-Fungoid_massive_12.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/45/Fungoid_normal_06.png/90px-Fungoid_normal_06.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/45/Fungoid_normal_06.png/90px-Fungoid_normal_06.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/dc/Fungoid_massive_15.png/91px-Fungoid_massive_15.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/dc/Fungoid_massive_15.png/91px-Fungoid_massive_15.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/8/86/Fungoid_normal_07.png/89px-Fungoid_normal_07.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/8/86/Fungoid_normal_07.png/89px-Fungoid_normal_07.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/4d/Fungoid_slender_01.png/86px-Fungoid_slender_01.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/4d/Fungoid_slender_01.png/86px-Fungoid_slender_01.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/8/85/Fungoid_normal_09.png/83px-Fungoid_normal_09.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/8/85/Fungoid_normal_09.png/83px-Fungoid_normal_09.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/2/2a/Fungoid_massive_11.png/91px-Fungoid_massive_11.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/2/2a/Fungoid_massive_11.png/91px-Fungoid_massive_11.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/45/Fungoid_normal_08.png/75px-Fungoid_normal_08.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/45/Fungoid_normal_08.png/75px-Fungoid_normal_08.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/48/Fungoid_massive_14.png/90px-Fungoid_massive_14.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/48/Fungoid_massive_14.png/90px-Fungoid_massive_14.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e1/Fungoid_normal_10.png/83px-Fungoid_normal_10.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e1/Fungoid_normal_10.png/83px-Fungoid_normal_10.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d0/Fungoid_massive_16.png/93px-Fungoid_massive_16.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d0/Fungoid_massive_16.png/93px-Fungoid_massive_16.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/98/Fungoid_17.png/75px-Fungoid_17.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/98/Fungoid_17.png/75px-Fungoid_17.png"></img>
            </button>



        </div>


        <Label> Plantoid </Label>
        <div className= "apperanceBox">
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/b/b0/Plantoid_02.png/108px-Plantoid_02.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/b/b0/Plantoid_02.png/108px-Plantoid_02.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/6a/Plantoid_06.png/69px-Plantoid_06.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/6a/Plantoid_06.png/69px-Plantoid_06.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/eb/Plantoid_01.png/88px-Plantoid_01.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/eb/Plantoid_01.png/88px-Plantoid_01.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/b/b3/Plantoid_11.png/104px-Plantoid_11.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/b/b3/Plantoid_11.png/104px-Plantoid_11.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/8/8b/Plantoid_03.png/60px-Plantoid_03.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/8/8b/Plantoid_03.png/60px-Plantoid_03.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/62/Plantoid_13.png/89px-Plantoid_13.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/62/Plantoid_13.png/89px-Plantoid_13.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/5/5a/Plantoid_07.png/76px-Plantoid_07.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/5/5a/Plantoid_07.png/76px-Plantoid_07.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/0/0e/Plantoid_15.png/82px-Plantoid_15.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/0/0e/Plantoid_15.png/82px-Plantoid_15.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/7/78/Plantoid_10.png/72px-Plantoid_10.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/7/78/Plantoid_10.png/72px-Plantoid_10.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/d/d7/Plantoid_05.png/85px-Plantoid_05.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/d/d7/Plantoid_05.png/85px-Plantoid_05.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/7/7c/Plantoid_09.png/62px-Plantoid_09.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/7/7c/Plantoid_09.png/62px-Plantoid_09.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e5/Plantoid_14.png/86px-Plantoid_14.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e5/Plantoid_14.png/86px-Plantoid_14.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/c/c9/Plantoid_04.png/91px-Plantoid_04.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/c/c9/Plantoid_04.png/91px-Plantoid_04.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/b/b5/Plantoid_08.png/74px-Plantoid_08.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/b/b5/Plantoid_08.png/74px-Plantoid_08.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/b/bd/Plantoid_12.png/78px-Plantoid_12.png", false)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/b/bd/Plantoid_12.png/78px-Plantoid_12.png"></img>
            </button>



        </div>


        <Label> Machine </Label>
        <div className= "apperanceBox">
        <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/8/8c/Alien_AI.png/83px-Alien_AI.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/8/8c/Alien_AI.png/83px-Alien_AI.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/e6/Synthetic_dawn_portrait_humanoid.png/73px-Synthetic_dawn_portrait_humanoid.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/e6/Synthetic_dawn_portrait_humanoid.png/73px-Synthetic_dawn_portrait_humanoid.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/c/c4/Synthetic_dawn_portrait_mammalian.png/70px-Synthetic_dawn_portrait_mammalian.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/c/c4/Synthetic_dawn_portrait_mammalian.png/70px-Synthetic_dawn_portrait_mammalian.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/6/62/Synthetic_dawn_portrait_reptilian.png/102px-Synthetic_dawn_portrait_reptilian.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/6/62/Synthetic_dawn_portrait_reptilian.png/102px-Synthetic_dawn_portrait_reptilian.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/90/Synthetic_dawn_portrait_avian.png/120px-Synthetic_dawn_portrait_avian.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/90/Synthetic_dawn_portrait_avian.png/120px-Synthetic_dawn_portrait_avian.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/e/ef/Synthetic_dawn_portrait_arthopoid.png/80px-Synthetic_dawn_portrait_arthopoid.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/e/ef/Synthetic_dawn_portrait_arthopoid.png/80px-Synthetic_dawn_portrait_arthopoid.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/9/9d/Synthetic_dawn_portrait_molluscoid.png/75px-Synthetic_dawn_portrait_molluscoid.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/9/9d/Synthetic_dawn_portrait_molluscoid.png/75px-Synthetic_dawn_portrait_molluscoid.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/c/c7/Synthetic_dawn_portrait_fungoid.png/105px-Synthetic_dawn_portrait_fungoid.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/c/c7/Synthetic_dawn_portrait_fungoid.png/105px-Synthetic_dawn_portrait_fungoid.png"></img>
            </button>

            <button type="submit" onClick={(e) => spiecesSubmit("https://stellaris.paradoxwikis.com/images/thumb/4/4f/Synthetic_dawn_portrait_plantoid.png/120px-Synthetic_dawn_portrait_plantoid.png", true)}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/4/4f/Synthetic_dawn_portrait_plantoid.png/120px-Synthetic_dawn_portrait_plantoid.png"></img>
            </button>


        </div>


        <h3>Planetary Homeworld </h3>

        <div className= "apperanceBox">

        <button type="submit" onClick={(e, f) => planetSubmit("https://stellaris.paradoxwikis.com/images/f/f9/Planet_arid.png", "https://stellaris.paradoxwikis.com/images/e/ee/Trait_pc_arid_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f9/Planet_arid.png"></img> <div></div>Arid World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/8/8b/Planet_desert.png", "https://stellaris.paradoxwikis.com/images/4/49/Trait_pc_desert_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/8/8b/Planet_desert.png"></img> <div></div>Desert World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/7/7a/Planet_savannah.png", "https://stellaris.paradoxwikis.com/images/d/d3/Trait_pc_savannah_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/7a/Planet_savannah.png"></img> <div>Savannah World</div>
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/d/dd/Planet_alpine.png", "https://stellaris.paradoxwikis.com/images/5/56/Trait_pc_alpine_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/dd/Planet_alpine.png"></img> <div></div>Alpine World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/7/71/Planet_arctic.png", "https://stellaris.paradoxwikis.com/images/0/0f/Trait_pc_arctic_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/7/71/Planet_arctic.png"></img> <div></div>Arctic World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/a/ad/Planet_tundra.png", "https://stellaris.paradoxwikis.com/images/f/fc/Trait_pc_tundra_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/a/ad/Planet_tundra.png"></img> <div></div>Turndra World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/4/41/Planet_continental.png", "https://stellaris.paradoxwikis.com/images/9/9a/Trait_pc_continental_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/4/41/Planet_continental.png"></img> <div></div>Continental World
            </button>
            
            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/5/51/Planet_ocean.png", "https://stellaris.paradoxwikis.com/images/c/cd/Trait_pc_ocean_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/51/Planet_ocean.png"></img> <div></div>Ocean World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/e/e6/Planet_tropical.png", "https://stellaris.paradoxwikis.com/images/9/91/Trait_pc_tropical_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/e/e6/Planet_tropical.png"></img> <div></div>Tropical World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/6/6e/Planet_gaia.png", "https://stellaris.paradoxwikis.com/images/f/f8/Trait_pc_gaia_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/6/6e/Planet_gaia.png"></img> <div></div>Gaia World
            </button>
            
            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/2/23/Planet_nuked.png", "https://stellaris.paradoxwikis.com/images/2/24/Trait_pc_nuked_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/23/Planet_nuked.png"></img> <div></div>Tomb World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/5/5e/Planet_city.png", "https://stellaris.paradoxwikis.com/images/e/e0/Trait_pc_ai_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/5/5e/Planet_city.png"></img> <div></div>Ecumenopolis
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/2/23/Planet_nuked.png", "https://stellaris.paradoxwikis.com/images/e/e0/Trait_pc_ai_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/23/Planet_nuked.png"></img> <div>Relic World</div>
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/9/93/Planet_infested.png", "https://stellaris.paradoxwikis.com/images/e/e0/Trait_pc_ai_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/9/93/Planet_infested.png"></img> <div></div>Hive World
            </button>

        <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/2/21/Planet_ai.png", "https://stellaris.paradoxwikis.com/images/e/e0/Trait_pc_ai_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/2/21/Planet_ai.png"></img> <div></div>Machine World
            </button>

            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/f/f1/Planet_habitat.png", "https://stellaris.paradoxwikis.com/images/2/23/Trait_pc_ring_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/f1/Planet_habitat.png"></img> <div></div>Habitat
            </button>
            <button type="submit" onClick={(e) => planetSubmit("https://stellaris.paradoxwikis.com/images/f/fd/Planet_ringworld.png", "https://stellaris.paradoxwikis.com/images/2/23/Trait_pc_ring_preference.png")}> 
            <img alt='' src= "https://stellaris.paradoxwikis.com/images/f/fd/Planet_ringworld.png"></img> <div></div>Ringworld
            </button>



            </div>



            <h3>Traits </h3>
            <Label> Major Traits </Label>
        <div className= "apperanceBox">
            {!isMachine ? null
                : 
                <div  className= "apperanceBox">
                            
                            <button type="submit" onClick={(e) => 
                                majorTraitSubmit("https://stellaris.paradoxwikis.com/images/thumb/a/af/Auth_machine_intelligence.png/24px-Auth_machine_intelligence.png", "Machine", null, 4, 8)}> 
                            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/a/af/Auth_machine_intelligence.png/24px-Auth_machine_intelligence.png"></img> <div></div>Machine Intelligence
                            </button>
                                
                            <button type="submit" onClick={(e) => 
                                majorTraitSubmit("https://stellaris.paradoxwikis.com/images/c/cd/Trait_robotic_3.png", "Synthetic", null, 4, 5)}> 
                            <img alt='' src= "https://stellaris.paradoxwikis.com/images/c/cd/Trait_robotic_3.png"></img> <div></div>Synthetic
                            </button>

                            { (specialTrait === "Machine" &&  specialTrait != null)?    <MachineTraits/> : null}
                            
                            {(specialTrait === 'Synthetic' && specialTrait != null) ? <SyntheticTraits/>: null}
                        </div>}

                        {isMachine ? null
                :
                <div className= "apperanceBox">
                        
                            <button type="submit" onClick={(e) => majorTraitSubmit("https://stellaris.paradoxwikis.com/images/4/4d/Trait_psionic_species.png", 'false', preferedPreferance)}> 
                            <img alt='' src= "https://stellaris.paradoxwikis.com/images/4/4d/Trait_psionic_species.png"></img> <div></div>Psionic
                            </button>

                            {/* <button type="submit" onClick={(e) => majorTraitSubmit("https://stellaris.paradoxwikis.com/images/4/4d/Trait_psionic_species.png", false, preferedPreferance)}> 
                            <img alt='' src= "https://stellaris.paradoxwikis.com/images/4/4d/Trait_psionic_species.png"></img> <div></div>Latent Psionic
                            </button> */}
                            
                            <button type="submit" onClick={(e) => majorTraitSubmit("https://stellaris.paradoxwikis.com/images/d/d3/Trait_cybernetic.png", 'false', preferedPreferance)}> 
                            <img alt='' src= "https://stellaris.paradoxwikis.com/images/d/d3/Trait_cybernetic.png"></img> <div></div>Cybernetic
                            </button>


                            <button type="submit" onClick={(e) => majorTraitSubmit("https://stellaris.paradoxwikis.com/images/thumb/7/7d/Hive-minded.png/29px-Hive-minded.png", 'false', preferedPreferance)}> 
                            <img alt='' src= "https://stellaris.paradoxwikis.com/images/thumb/7/7d/Hive-minded.png/29px-Hive-minded.png"></img> <div></div>Hive Mind
                            </button>




                            <button type="submit" onClick={(e) => majorTraitSubmit(null, false, preferedPreferance)}> 
                            <div> No Major Trait</div>
                            </button>

                            
                            {majorTrait ===  null || majorTrait == 'https://stellaris.paradoxwikis.com/images/thumb/7/7d/Hive-minded.png/29px-Hive-minded.png' ?   <div>{check ? null: <div> <Input type="checkbox"  onChange= {(c,) =>  applyCheck(true, +6)}></Input>
                            <h4> Has <img alt='' src = "https://stellaris.paradoxwikis.com/images/thumb/3/3b/Ap_evolutionary_mastery.png/24px-Ap_evolutionary_mastery.png"></img> Evolutionary Mastery Tradition? </h4></div>}
                            {!check ? null: <div> <Input type="checkbox"  onChange= {(c,) =>  applyCheck(false, -6)} checked></Input>
                            <h4> Has <img alt='' src = "https://stellaris.paradoxwikis.com/images/thumb/3/3b/Ap_evolutionary_mastery.png/24px-Ap_evolutionary_mastery.png"></img> Evolutionary Mastery Tradition? </h4></div>}
                            </div>: null }

                            {check2 ? null: <div> <Input type="checkbox"  onChange= {(c,) =>  applyCheck2(true, +1, +1)}></Input>
                            <h4> Has <img alt='' src = "https://stellaris.paradoxwikis.com/images/thumb/9/9e/Ap_xeno_compatibility.png/21px-Ap_xeno_compatibility.png"></img> Xeno-Compatibility Tradition? </h4></div>}
                             {!check2 ? null: <div> <Input type="checkbox"  onChange= {(c,) =>  applyCheck2(false, 0, -1)} checked></Input>
                             <h4> Has <img alt='' src = "https://stellaris.paradoxwikis.com/images/thumb/9/9e/Ap_xeno_compatibility.png/21px-Ap_xeno_compatibility.png"></img> Xeno-Compatibility Tradition? </h4></div>} 
                

                            

                            

                            
                            
                            <BioTraits/>
                                
                        </div>}
                </div>

                            
        </div></div>
        

    )
}



export default Spieces;