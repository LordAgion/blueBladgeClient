import React, {useState} from 'react';



const BioEngineeringTraits= () => {
    let [traitPoints, setTraitPoints] =useState(5)
    let [traitPicks, setTraitPicks] =useState(4)
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






    let moveUpAdaptive = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)
        setAdaptive(g)

        

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

        

    }
    let moveDownWeak = (e, f, g, h) =>{

        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks + f)
        setWeak(g)


    }
 




    return ( 
        <div>
        
            <h4>trait points left : {traitPoints}</h4>
            <h4>trait picks left : {traitPicks}</h4>
            <table Id="tableid">
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
            

            {!Adaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownAdaptive( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/1/10/Adaptive.png"></img><div>Adaptive</div>
            </button><span className="displaytext"><div> Habitability +10%</div> <div> 2 Trait Point</div></span>
            </td>} 

            {!ExtremelyAdaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownExtremelyAdaptive( 4, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/26/Extremely_Adaptive.png"></img><div>Extremely Adaptive</div>
            </button><span className="displaytext"><div>Habitability +20%</div> <div> 4 Trait Point</div></span>
            </td>} 
            
            {!Agrarian ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownAgrarian( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/c/ca/Agrarian.png"></img><div>Agrarian</div>
            </button><span className="displaytext"><div>Food from Jobs +15%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {!Charismatic ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownCharismatic( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d8/Charismatic.png"></img><div>Charismatic</div>
            </button><span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {!Communal ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownCommunal( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/b/b5/Communal.png"></img><div>Communal</div>
            </button><span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!Conformists ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownConformists( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png"></img><div>Conformists</div>
            </button><span className="displaytext"><div>Governing Ethics Attraction +30%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!Conservationist ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownConservationist( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png"></img><div>Conservationist</div>
            </button><span className="displaytext"><div>Pop Consumer Goods Upkeep −10%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            
            {!Enduring ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownEnduring( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/9/91/Enduring.png"></img><div>Enduring</div>
            </button><span className="displaytext"><div>Leader Lifespan +20 Years</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!Venerable ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownVenerable( 4, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/8/85/Venerable.png"></img><div>Venerable</div>
            </button><span className="displaytext"><div>Leader Lifespan +80 Years</div> <div> 4 Trait Point</div></span>
            </td>} 
            
            {!Industrious ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownIndustrious( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/27/Industrious.png"></img><div>Industrious</div>
            </button><span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {!Ingenious ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownIngenious( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/62/Ingenious.png"></img><div>Ingenious</div>
            </button><span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {!Intelligent ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownIntelligent( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/6d/Intelligent.png"></img><div>Intelligent</div>
            </button><span className="displaytext"><div>	
Engineering Research from Jobs +10%, Physics Research from Jobs +10%, Society Research from Jobs +10%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {!NaturalEngineers ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNaturalEngineers( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/9/9a/Natural_Engineers.png"></img><div>Natural Engineers</div>
            </button><span className="displaytext"><div>Engineering Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!NaturalPhysicists ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNaturalPhysicists( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/1/14/Natural_Physicists.png"></img><div>Natural Physicists</div>
            </button><span className="displaytext"><div>Physics Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!NaturalSociologists ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNaturalSociologists( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/61/Natural_Sociologists.png"></img><div>Natural Sociologists</div>
            </button><span className="displaytext"><div>Society Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!Nomadic ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNomadic( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/b/b8/Nomadic.png"></img><div>Nomadic</div>
            </button><span className="displaytext"><div>Pop Growth from Immigration +15%, resettlement cost mult.png Resettlement Cost −25%
</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!QuickLearners ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownQuickLearners( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/25/Quick_Learners.png"></img><div>Quick Learners</div>
            </button><span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!RapidBreeders ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownRapidBreeders( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/e/ed/Rapid_Breeders.png"></img><div>Rapid Breeders</div>
            </button><span className="displaytext"><div>Growth Speed +10%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {!Resilient ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownResilient( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d7/Resilient.png"></img><div>Resilient</div>
            </button><span className="displaytext"><div>Defense Army Damage +50%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!Strong ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownStrong( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/e/eb/Strong.png"></img><div>Strong</div>
            </button><span className="displaytext"><div>	Army Damage +20%, Worker Output +2.5%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!VeryStrong ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownVeryStrong( 3, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/8/8f/Very_Strong.png"></img><div>Very Strong</div>
            </button><span className="displaytext"><div>Army Damage +40%, Worker Output +5%</div> <div> 3 Trait Point</div></span>
            </td>} 
            
            {!Talented ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownTalented( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/3/3c/Talented.png"></img><div>Talented</div>
            </button><span className="displaytext"><div>Leader Level Cap +1</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!Thrifty ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownThrifty( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/9/9f/Thrifty.png"></img><div>Thrifty</div>
            </button><span className="displaytext"><div>Trade value from Jobs +25%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {!Traditional ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownTraditional( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/58/Trait_traditional.png"></img><div>Traditional</div>
            </button><span className="displaytext"><div>Unity from Jobs +10%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {!Decadent ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDecadent( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/a/a1/Decadent.png"></img><div>Decadent</div>
            </button><span className="displaytext"><div>Worker Happiness −10%, Slave Happiness −10%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {!Deviants ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownDeviants( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png"></img><div>Deviants</div>
            </button><span className="displaytext"><div>Governing Ethics Attraction −15%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {!Fleeting ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownFleeting( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/74/Fleeting.png"></img><div>Fleeting</div>
            </button><span className="displaytext"><div>Leader Lifespan −10 Years</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {!Nonadaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownNonadaptive( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/5f/Nonadaptive.png"></img><div>Nonadaptive</div>
            </button><span className="displaytext"><div>Habitability −10%</div> <div> -2 Trait Point</div></span>
            </td>} 
            
            {!Quarrelsome ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownQuarrelsome( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/5e/Trait_quarrelsome.png"></img><div>Quarrelsome</div>
            </button><span className="displaytext"><div>Unity from Jobs −10%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {!Repugnant ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownRepugnant( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/5e/Repugnant.png"></img><div>Repugnant</div>
            </button><span className="displaytext"><div>Amenities from Jobs −20%</div> <div> -2 Trait Point</div></span>
            </td>} 
            
            {!Sedentary ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownSedentary( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/7c/Sedentary.png"></img><div>Sedentary</div>
            </button><span className="displaytext"><div>Pop Growth from Immigration −15%, Resettlement Cost +25%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {!SlowBreeders ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownSlowBreeders( 2, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/79/Slow_Breeders.png"></img><div>Slow Breeders</div>
            </button><span className="displaytext"><div>Growth Speed −10%</div> <div> -2 Trait Point</div></span>
            </td>} 
            
            {!SlowLearners ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownSlowLearners( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/69/Slow_Learners.png"></img><div> Slow Learners</div>
            </button><span className="displaytext"><div>Leader Experience Gain −25%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {!Solitary ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownSolitary( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/54/Solitary.png"></img><div>Solitary</div>
            </button><span className="displaytext"><div>Pop Housing Usage +10%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {!Wasteful ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownWasteful( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png"></img><div>Wasteful</div>
            </button><span className="displaytext"><div>Pop Consumer Goods Upkeep +10%</div> <div> -1 Trait Point</div></span>
            </td>} 

            {!Weak ? null:  <td className="display"><button type="submit" onClick={(e) => moveDownWeak( 1, 1, false, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png"></img><div>Weak</div>
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
                    <img src= "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png"></img><div>Double Jointed</div>
            </button>} 
            <span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
            </td> */}



            {Adaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpAdaptive( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/1/10/Adaptive.png"></img><div>Adaptive</div>
            </button><span className="displaytext"><div> Habitability +10%</div> <div> 2 Trait Point</div></span>
            </td>} 

            {ExtremelyAdaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpExtremelyAdaptive( 4, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/26/Extremely_Adaptive.png"></img><div>Extremely Adaptive</div>
            </button><span className="displaytext"><div>Habitability +20%</div> <div> 4 Trait Point</div></span>
            </td>} 
            
            {Agrarian ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpAgrarian( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/c/ca/Agrarian.png"></img><div>Agrarian</div>
            </button><span className="displaytext"><div>Food from Jobs +15%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {Charismatic ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpCharismatic( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d8/Charismatic.png"></img><div>Charismatic</div>
            </button><span className="displaytext"><div>Amenities from Jobs +20%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {Communal ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpCommunal( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/b/b5/Communal.png"></img><div>Communal</div>
            </button><span className="displaytext"><div>Pop Housing Usage −10%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {Conformists ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpConformists( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png"></img><div>Conformists</div>
            </button><span className="displaytext"><div>Governing Ethics Attraction +30%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {Conservationist ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpConservationist( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png"></img><div>Conservationist</div>
            </button><span className="displaytext"><div>Pop Consumer Goods Upkeep −10%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            
            {Enduring ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpEnduring( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/9/91/Enduring.png"></img><div>Enduring</div>
            </button><span className="displaytext"><div>Leader Lifespan +20 Years</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {Venerable ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpVenerable( 4, 1, true, null)}> 
                  <img src= "https://stellaris.paradoxwikis.com/images/8/85/Venerable.png"></img><div>Venerable</div>
            </button><span className="displaytext"><div>Leader Lifespan +80 Years</div> <div> 4 Trait Point</div></span>
            </td>} 
            
            {Industrious ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpIndustrious( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/27/Industrious.png"></img><div>Industrious</div>
            </button><span className="displaytext"><div>Minerals from Jobs +15%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {Ingenious ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpIngenious( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/62/Ingenious.png"></img><div>Ingenious</div>
            </button><span className="displaytext"><div>Energy Credits from Jobs +15%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {Intelligent ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpIntelligent( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/6d/Intelligent.png"></img><div>Intelligent</div>
            </button><span className="displaytext"><div>	
Engineering Research from Jobs +10%, Physics Research from Jobs +10%, Society Research from Jobs +10%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {NaturalEngineers ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNaturalEngineers( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/9/9a/Natural_Engineers.png"></img><div>Natural Engineers</div>
            </button><span className="displaytext"><div>Engineering Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {NaturalPhysicists ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNaturalPhysicists( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/1/14/Natural_Physicists.png"></img><div>Natural Physicists</div>
            </button><span className="displaytext"><div>Physics Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {NaturalSociologists ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNaturalSociologists( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/61/Natural_Sociologists.png"></img><div>Natural Sociologists</div>
            </button><span className="displaytext"><div>Society Research from Jobs +15%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {Nomadic ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNomadic( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/b/b8/Nomadic.png"></img><div>Nomadic</div>
            </button><span className="displaytext"><div>Pop Growth from Immigration +15%, resettlement cost mult.png Resettlement Cost −25%
</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {QuickLearners ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpQuickLearners( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/2/25/Quick_Learners.png"></img><div>Quick Learners</div>
            </button><span className="displaytext"><div>Leader Experience Gain +25%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {RapidBreeders ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpRapidBreeders( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/e/ed/Rapid_Breeders.png"></img><div>Rapid Breeders</div>
            </button><span className="displaytext"><div>Growth Speed +10%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {Resilient ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpResilient( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/d7/Resilient.png"></img><div>Resilient</div>
            </button><span className="displaytext"><div>Defense Army Damage +50%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {Strong ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpStrong( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/e/eb/Strong.png"></img><div>Strong</div>
            </button><span className="displaytext"><div>	Army Damage +20%, Worker Output +2.5%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {VeryStrong ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpVeryStrong( 3, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/8/8f/Very_Strong.png"></img><div>Very Strong</div>
            </button><span className="displaytext"><div>Army Damage +40%, Worker Output +5%</div> <div> 3 Trait Point</div></span>
            </td>} 
            
            {Talented ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpTalented( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/3/3c/Talented.png"></img><div>Talented</div>
            </button><span className="displaytext"><div>Leader Level Cap +1</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {Thrifty ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpThrifty( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/9/9f/Thrifty.png"></img><div>Thrifty</div>
            </button><span className="displaytext"><div>Trade value from Jobs +25%</div> <div> 2 Trait Point</div></span>
            </td>} 
            
            {Traditional ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpTraditional( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/58/Trait_traditional.png"></img><div>Traditional</div>
            </button><span className="displaytext"><div>Unity from Jobs +10%</div> <div> 1 Trait Point</div></span>
            </td>} 
            
            {Decadent ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpDecadent( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/a/a1/Decadent.png"></img><div>Decadent</div>
            </button><span className="displaytext"><div>Worker Happiness −10%, Slave Happiness −10%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {Deviants ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpDeviants( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png"></img><div>Deviants</div>
            </button><span className="displaytext"><div>Governing Ethics Attraction −15%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {Fleeting ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpFleeting( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/74/Fleeting.png"></img><div>Fleeting</div>
            </button><span className="displaytext"><div>Leader Lifespan −10 Years</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {Nonadaptive ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpNonadaptive( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/5f/Nonadaptive.png"></img><div>Nonadaptive</div>
            </button><span className="displaytext"><div>Habitability −10%</div> <div> -2 Trait Point</div></span>
            </td>} 
            
            {Quarrelsome ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpQuarrelsome( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/5e/Trait_quarrelsome.png"></img><div>Quarrelsome</div>
            </button><span className="displaytext"><div>Unity from Jobs −10%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {Repugnant ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpRepugnant( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/5e/Repugnant.png"></img><div>Repugnant</div>
            </button><span className="displaytext"><div>Amenities from Jobs −20%</div> <div> -2 Trait Point</div></span>
            </td>} 
            
            {Sedentary ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpSedentary( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/7c/Sedentary.png"></img><div>Sedentary</div>
            </button><span className="displaytext"><div>Pop Growth from Immigration −15%, Resettlement Cost +25%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {SlowBreeders ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpSlowBreeders( 2, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/7/79/Slow_Breeders.png"></img><div>Slow Breeders</div>
            </button><span className="displaytext"><div>Growth Speed −10%</div> <div> -2 Trait Point</div></span>
            </td>} 
            
            {SlowLearners ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpSlowLearners( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/6/69/Slow_Learners.png"></img><div> Slow Learners</div>
            </button><span className="displaytext"><div>Leader Experience Gain −25%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {Solitary ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpSolitary( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/5/54/Solitary.png"></img><div>Solitary</div>
            </button><span className="displaytext"><div>Pop Housing Usage +10%</div> <div> -1 Trait Point</div></span>
            </td>} 
            
            {Wasteful ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpWasteful( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png"></img><div>Wasteful</div>
            </button><span className="displaytext"><div>Pop Consumer Goods Upkeep +10%</div> <div> -1 Trait Point</div></span>
            </td>} 

            {Weak ? null:  <td className="display"><button type="submit" onClick={(e) => moveUpWeak( 1, 1, true, null)}> 
                    <img src= "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png"></img><div>Weak</div>
            </button><span className="displaytext"><div>Army Damage −20%, Worker Output −2%</div> <div> -1 Trait Point</div></span>
            </td>} 

          





                   </tr>

               
                   
                   
                </thead>
            </table>



            

        </div>
        
    )
}

export default BioEngineeringTraits