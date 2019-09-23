import React, {useState, useEffect} from 'react';
import { Container, Badge, Button, Input, Label } from 'reactstrap';


const SingleSpeices = (props) =>{

    const [spiecesPlural, setSpiecesPlural] =useState('')
    const [spiecesAdj, setSpiecesAdj] =useState('')
    const [homeworld, setHomeworld] =useState('')
    const [description, setDescription] =useState('')

    //  console.log(props)
    


        fetch(`https://speciescatalog.herokuapp.com/speciesPlus/${props.pie.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            
            },
        
        }
    )

    .then(res => res.json())
    .then(data => {
        // console.log(data)
        if (data[0]==undefined) { 
            fetch(`https://speciescatalog.herokuapp.com/speciesPlus/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                
                }, body:JSON.stringify({
                    speciesId: `${props.pie.id}`
                })
            
            }
        )
        }
    })

    setTimeout(function() {
           
        fetch(`https://speciescatalog.herokuapp.com/speciesPlus/${props.pie.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.props
            },
    
        }
        ).then(res =>res.json())
        .then(data => {
            // console.log(data[0])
            
           setSpiecesPlural(data[0].speciePlural)
            setSpiecesAdj(data[0].specieAdj)
          setHomeworld(data[0].homeworld)
            setDescription(data[0].description)
        })
       
      }, 1000)
    





   let deleteSpeieces = (e) => {
       e.preventDefault()
    fetch(`https://speciescatalog.herokuapp.com/speciesPlus/${props.pie.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(
        fetch(`https://speciescatalog.herokuapp.com/speices/${props.pie.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    ).then(props.tokenHandler(1, null))

   }

   
   let updateSpeices = (e) => {
    e.preventDefault()
    
props.tokenHandler(4, props.pie.id)

}
  
    return (
        <div>
        <div className = "embedBox2" key = {SingleSpeices.index}>
       <div className = "display3" Id ='spiecesName'> <h4>{props.pie.spiecesName}</h4><span className="displaytext"><div>Adjective: </div><div> {spiecesAdj}</div><div>Plural: </div><div>{spiecesPlural}</div></span></div>
        <div Id ='spiecesBox'>
        <div className = "display4" Id ='spiecesPic'><img alt='' src = {props.pie.spiecesType}></img> <span className="displaytext"><div>{description}</div></span> </div> 
            </div> 
            <div Id = 'planetBox'>
        
        <div className = "display5" Id ='spiecesPlanet'><img alt='' src = {props.pie.planetType} width='200%' height=' 200%'></img> <span className="displaytext"><div>{homeworld}</div></span> </div> 
</div>


    <div Id= 'placeTraits'>
        
     {!props.pie.preferedPreferance ? null: <div className = "display2" ><img alt='' src = {props.pie.preferedPreferance}></img><span className="displaytext"><div>Pop Housing Usage −10%</div></span></div>}
     {!props.pie.majorTrait ? null: <div className = "display2" ><img alt='' src = {props.pie.majorTrait}></img><span className="displaytext"><div>Pop Housing Usage −10%</div></span></div>}

     {!props.pie.domesticProtocols ? null: <div className = "display2" ><img alt='' src = {props.pie.domesticProtocols == true? "https://stellaris.paradoxwikis.com/images/c/c2/Domestic_protocols.png": null}></img><span className="displaytext"><div>Can be employed in Servant Jobs if under AI Servitude, Amenities from Jobs +20%</div></span></div>}
     {!props.pie.doubleJointed ? null: <div className = "display2" ><img alt='' src = {props.pie.doubleJointed == true? "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png": null}></img><span className="displaytext"><div>Pop Housing Usage −10%</div></span></div>}
     {!props.pie.durable ? null: <div className = "display2" ><img alt='' src = {props.pie.durable == true? "https://stellaris.paradoxwikis.com/images/2/26/Durable.png": null}></img><span className="displaytext"><div>Robot Upkeep –10%</div></span></div>}
     {!props.pie.efficientProcessors ? null: <div className = "display2" ><img alt='' src = {props.pie.efficientProcessors == true? "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png": null}></img><span className="displaytext"><div>Resources from Jobs +5%</div></span></div>}
     {!props.pie.emotionEmulators ? null: <div className = "display2" ><img alt='' src = {props.pie.emotionEmulators == true? "https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png": null}></img><span className="displaytext"><div>Amenities from Jobs +20%</div></span></div>}
     {!props.pie.enhancedMemory ? null: <div className = "display2" ><img alt='' src = {props.pie.enhancedMemory == true? "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png": null}></img><span className="displaytext"><div>Leader Level Cap +2</div></span></div>}
     {!props.pie.harvesters ? null: <div className = "display2" ><img alt='' src = {props.pie.harvesters == true? "https://stellaris.paradoxwikis.com/images/e/e4/Harvesters.png": null}></img><span className="displaytext"><div>Food from Jobs +15%</div></span></div>}
     {!props.pie.learningAlgorithms ? null: <div className = "display2" ><img alt='' src = {props.pie.learningAlgorithms == true? "https://stellaris.paradoxwikis.com/images/8/89/Learning_algorithms.png": null}></img><span className="displaytext"><div>Leader Experience Gain +25%</div></span></div>}
     {!props.pie.logicEngines ? null: <div className = "display2" ><img alt='' src = {props.pie.logicEngines == true? "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png": null}></img><span className="displaytext"><div> Research Output +10%</div></span></div>}
     {!props.pie.loyaltyCircuits ? null: <div className = "display2" ><img alt='' src = {props.pie.loyaltyCircuits == true? "https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png": null}></img><span className="displaytext"><div>Happiness +10%</div></span></div>}
     {!props.pie.massProduced ? null: <div className = "display2" ><img alt='' src = {props.pie.massProduced == true? "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png": null}></img><span className="displaytext"><div>Pop Assembly Speed +15%</div></span></div>}
     {!props.pie.powerDrills ? null: <div className = "display2" ><img alt='' src = {props.pie.powerDrills == true? "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png": null}></img><span className="displaytext"><div>Minerals from Jobs +15%</div></span></div>}
     {!props.pie.propagandaMachines ? null: <div className = "display2" ><img alt='' src = {props.pie.propagandaMachines == true? "https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png": null}></img><span className="displaytext"><div> Unity from Jobs +15%</div></span></div>}
     {!props.pie.recycled ? null: <div className = "display2" ><img alt='' src = {props.pie.recycled == true? "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png": null}></img><span className="displaytext"><div>Pop Assembly Cost –20%</div></span></div>}
     {!props.pie.superconductive ? null: <div className = "display2" ><img alt='' src = {props.pie.superconductive == true? "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png": null}></img><span className="displaytext"><div>Energy Credits from Jobs +15%</div></span></div>}
     {!props.pie.Bulky ? null: <div className = "display2" ><img alt='' src = {props.pie.Bulky == true? "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png": null}></img><span className="displaytext"><div>Pop Housing Usage +10%</div></span></div>}
     {!props.pie.CustomMade ? null: <div className = "display2" ><img alt='' src = {props.pie.CustomMade == true? "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png": null}></img><span className="displaytext"><div>Pop Assembly Speed –15%</div></span></div>}
     {!props.pie.HighMaintenance ? null: <div className = "display2" ><img alt='' src = {props.pie.HighMaintenance == true? "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png": null}></img><span className="displaytext"><div>Robot Upkeep +10%</div></span></div>}
     {!props.pie.Luxurious ? null: <div className = "display2" ><img alt='' src = {props.pie.Luxurious == true? "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png": null}></img><span className="displaytext"><div>Pop Assembly Cost +20%</div></span></div>}
     {!props.pie.RepurposedHardware ? null: <div className = "display2" ><img alt='' src = {props.pie.RepurposedHardware == true? "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png": null}></img><span className="displaytext"><div>Leader Experience Gain –25%</div></span></div>}
     {!props.pie.Uncanny ? null: <div className = "display2" ><img alt='' src = {props.pie.Uncanny == true? "https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png": null}></img><span className="displaytext"><div>Amenities from Jobs −20%</div></span></div>}

     {!props.pie.Erudite ? null: <div className = "display2" ><img alt='' src = {props.pie.Erudite == true? "https://stellaris.paradoxwikis.com/images/4/41/Erudite.png": null}></img><span className="displaytext"><div>Researcher Output +20%</div><div>Leader Level Cap +1</div></span></div>}
     {!props.pie.NerveStapled ? null: <div className = "display2" ><img alt='' src = {props.pie.NerveStapled == true? "https://stellaris.paradoxwikis.com/images/f/f3/Nerve_Stapled.png": null}></img><span className="displaytext"><div>Resources from Jobs +5%</div><div> Cannot be employed in Ruler or Specialist Jobs</div><div>Cannot generate Leaders</div><div>Not Affected by Happiness</div><div> Can't join a faction</div></span></div>}
     {!props.pie.durable ? null: <div className = "display2" ><img alt='' src = {props.pie.Delicious == true? "https://stellaris.paradoxwikis.com/images/thumb/f/ff/Delicious.png/28px-Delicious.png": null}></img><span className="displaytext"><div>Food from Livestock and Processing +2</div></span></div>}
     {!props.pie.Delicious ? null: <div className = "display2" ><img alt='' src = {props.pie.Robust == true? "https://stellaris.paradoxwikis.com/images/a/aa/Robust.png": null}></img><span className="displaytext"><div>Resources from Jobs +5%</div><div> Habitability +30%</div><div>Leader Lifespan +50 Years</div></span></div>}
     {!props.pie.Fertile ? null: <div className = "display2" ><img alt='' src = {props.pie.Fertile == true? "https://stellaris.paradoxwikis.com/images/8/82/Fertile.png": null}></img><span className="displaytext"><div>Pop Growth Speed +30%</div><div> Pop Housing Usage −10%</div></span></div>}
{!props.pie.VeryStrong ? null: <div className = "display2" ><img alt='' src = {props.pie.VeryStrong == true? "https://stellaris.paradoxwikis.com/images/8/8f/Very_Strong.png": null}></img><span className="displaytext"><div>Army Damage +40%</div><div>Worker Output +5%</div></span></div>}
     {!props.pie.Venerable ? null: <div className = "display2" ><img alt='' src = {props.pie.Venerable == true? "https://stellaris.paradoxwikis.com/images/8/85/Venerable.png": null}></img><span className="displaytext"><div>Leader Lifespan +80 Years</div></span></div>}
    
     {!props.pie.Adaptive ? null: <div className = "display2" ><img alt='' src = {props.pie.Adaptive == true? "https://stellaris.paradoxwikis.com/images/1/10/Adaptive.png": null}></img><span className="displaytext"><div>Habitability +10%</div></span></div>}
     {!props.pie.durable ? null: <div className = "display2" ><img alt='' src = {props.pie.ExtremelyAdaptive == true? "https://stellaris.paradoxwikis.com/images/2/26/Extremely_Adaptive.png": null}></img><span className="displaytext"><div>Habitability +20%</div></span></div>}
     {!props.pie.ExtremelyAdaptive ? null: <div className = "display2" ><img alt='' src = {props.pie.Agrarian == true? "https://stellaris.paradoxwikis.com/images/c/ca/Agrarian.png": null}></img><span className="displaytext"><div>Food from Jobs +15%</div></span></div>}
     {!props.pie.Charismatic ? null: <div className = "display2" ><img alt='' src = {props.pie.Charismatic == true? "https://stellaris.paradoxwikis.com/images/d/d8/Charismatic.png": null}></img><span className="displaytext"><div>Amenities from Jobs +20%</div></span></div>}
     {!props.pie.Communal ? null: <div className = "display2" ><img alt='' src = {props.pie.Communal == true? "https://stellaris.paradoxwikis.com/images/b/b5/Communal.png": null}></img><span className="displaytext"><div>Pop Housing Usage −10%</div></span></div>}
     {!props.pie.Conformists ? null: <div className = "display2" ><img alt='' src = {props.pie.Conformists == true? "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png": null}></img><span className="displaytext"><div>Governing Ethics Attraction +30%</div></span></div>}
     {!props.pie.Conservationist ? null: <div className = "display2" ><img alt='' src = {props.pie.Conservationist == true? "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png": null}></img><span className="displaytext"><div>Pop Consumer Goods Upkeep −10%</div></span></div>}
     {!props.pie.Enduring ? null: <div className = "display2" ><img alt='' src = {props.pie.Enduring == true? "https://stellaris.paradoxwikis.com/images/9/91/Enduring.png": null}></img><span className="displaytext"><div>Leader Lifespan +20 Years</div></span></div>}
     

     {!props.pie.Industrious ? null: <div className = "display2" ><img alt='' src = {props.pie.Industrious == true? "https://stellaris.paradoxwikis.com/images/2/27/Industrious.png": null}></img><span className="displaytext"><div>Minerals from Jobs +15%</div></span></div>}
     {!props.pie.Ingenious ? null: <div className = "display2" ><img alt='' src = {props.pie.Ingenious == true? "https://stellaris.paradoxwikis.com/images/6/62/Ingenious.png": null}></img><span className="displaytext"><div> Energy Credits from Jobs +15%</div></span></div>}
     {!props.pie.Intelligent ? null: <div className = "display2" ><img alt='' src = {props.pie.Intelligent == true? "https://stellaris.paradoxwikis.com/images/6/6d/Intelligent.png": null}></img><span className="displaytext"><div>Researcher Output +10%</div></span></div>}
     {!props.pie.NaturalEngineers ? null: <div className = "display2" ><img alt='' src = {props.pie.NaturalEngineers == true? "https://stellaris.paradoxwikis.com/images/9/9a/Natural_Engineers.png": null}></img><span className="displaytext"><div>Engineering Research from Jobs +15%</div></span></div>}
     {!props.pie.NaturalPhysicists ? null: <div className = "display2" ><img alt='' src = {props.pie.NaturalPhysicists == true? "https://stellaris.paradoxwikis.com/images/1/14/Natural_Physicists.png": null}></img><span className="displaytext"><div>Physics Research from Jobs +15%</div></span></div>}
     {!props.pie.NaturalSociologists ? null: <div className = "display2" ><img alt='' src = {props.pie.NaturalSociologists == true? "https://stellaris.paradoxwikis.com/images/6/61/Natural_Sociologists.png": null}></img><span className="displaytext"><div>Society Research from Jobs +15%</div></span></div>}
     {!props.pie.Nomadic ? null: <div className = "display2" ><img alt='' src = {props.pie.Nomadic == true? "https://stellaris.paradoxwikis.com/images/b/b8/Nomadic.png": null}></img><span className="displaytext"><div>Pop Growth from Immigration +15%</div><div>Resettlement Cost −25%</div></span></div>}
     {!props.pie.QuickLearners ? null: <div className = "display2" ><img alt='' src = {props.pie.QuickLearners == true? "https://stellaris.paradoxwikis.com/images/2/25/Quick_Learners.png": null}></img><span className="displaytext"><div>Leader Experience Gain +25%</div></span></div>}
     {!props.pie.RapidBreeders ? null: <div className = "display2" ><img alt='' src = {props.pie.RapidBreeders == true? "https://stellaris.paradoxwikis.com/images/e/ed/Rapid_Breeders.png": null}></img><span className="displaytext"><div>Growth Speed +10%</div></span></div>}
     {!props.pie.Resilient ? null: <div className = "display2" ><img alt='' src = {props.pie.Resilient == true? "https://stellaris.paradoxwikis.com/images/d/d7/Resilient.png": null}></img><span className="displaytext"><div>Defense Army Damage +50%</div></span></div>}
     {!props.pie.Strong ? null: <div className = "display2" ><img alt='' src = {props.pie.Strong == true? "https://stellaris.paradoxwikis.com/images/e/eb/Strong.png": null}></img><span className="displaytext"><div>Army Damage +20%</div><div>Worker Output +2.5%</div></span></div>}

     {!props.pie.Talented ? null: <div className = "display2" ><img alt='' src = {props.pie.Talented == true? "https://stellaris.paradoxwikis.com/images/3/3c/Talented.png": null}></img><span className="displaytext"><div>Leader Level Cap +1</div></span></div>}
     {!props.pie.Thrifty ? null: <div className = "display2" ><img alt='' src = {props.pie.Thrifty == true? "https://stellaris.paradoxwikis.com/images/9/9f/Thrifty.png": null}></img><span className="displaytext"><div>Trade value from Jobs +25%</div></span></div>}
     {!props.pie.Traditional ? null: <div className = "display2" ><img alt='' src = {props.pie.Traditional == true? "https://stellaris.paradoxwikis.com/images/5/58/Trait_traditional.png": null}></img><span className="displaytext"><div>Unity from Jobs +10%</div></span></div>}
     {!props.pie.Decadent ? null: <div className = "display2" ><img alt='' src = {props.pie.Decadent == true? "https://stellaris.paradoxwikis.com/images/a/a1/Decadent.png": null}></img><span className="displaytext"><div>Worker Happiness −10%</div><div>Slave Happiness −10%</div></span></div>}
     {!props.pie.Deviants ? null: <div className = "display2" ><img alt='' src = {props.pie.Deviants == true? "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png": null}></img><span className="displaytext"><div>Governing Ethics Attraction −15%</div></span></div>}
     {!props.pie.Fleeting ? null: <div className = "display2" ><img alt='' src = {props.pie.Fleeting == true? "https://stellaris.paradoxwikis.com/images/7/74/Fleeting.png": null}></img><span className="displaytext"><div>Leader Lifespan −10 Years</div></span></div>}
     {!props.pie.Nonadaptive ? null: <div className = "display2" ><img alt='' src = {props.pie.Nonadaptive == true? "https://stellaris.paradoxwikis.com/images/5/5f/Nonadaptive.png": null}></img><span className="displaytext"><div>Habitability −10%</div></span></div>}
     {!props.pie.Quarrelsome ? null: <div className = "display2" ><img alt='' src = {props.pie.Quarrelsome == true? "https://stellaris.paradoxwikis.com/images/5/5e/Trait_quarrelsome.png": null}></img><span className="displaytext"><div>Unity from Jobs −10%</div></span></div>}
     {!props.pie.Repugnant ? null: <div className = "display2" ><img alt='' src = {props.pie.Repugnant == true? "https://stellaris.paradoxwikis.com/images/5/5e/Repugnant.png": null}></img><span className="displaytext"><div>Amenities from Jobs −20%</div></span></div>}
     {!props.pie.Sedentary ? null: <div className = "display2" ><img alt='' src = {props.pie.Sedentary == true? "https://stellaris.paradoxwikis.com/images/7/7c/Sedentary.png": null}></img><span className="displaytext"><div>Pop Growth from Immigration −15%</div><div>Resettlement Cost +25%</div></span></div>}
     {!props.pie.SlowBreeders ? null: <div className = "display2" ><img alt='' src = {props.pie.SlowBreeders == true? "https://stellaris.paradoxwikis.com/images/7/79/Slow_Breeders.png": null}></img><span className="displaytext"><div>Growth Speed −10%</div></span></div>}
     {!props.pie.SlowLearners ? null: <div className = "display2" ><img alt='' src = {props.pie.SlowLearners == true? "https://stellaris.paradoxwikis.com/images/6/69/Slow_Learners.png": null}></img><span className="displaytext"><div> Leader Experience Gain −25%</div></span></div>}
     {!props.pie.Solitary ? null: <div className = "display2" ><img alt='' src = {props.pie.Solitary == true? "https://stellaris.paradoxwikis.com/images/5/54/Solitary.png": null}></img><span className="displaytext"><div>Pop Housing Usage +10%</div></span></div>}
     {!props.pie.Wasteful ? null: <div className = "display2" ><img alt='' src = {props.pie.Wasteful == true? "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png": null}></img><span className="displaytext"><div>Pop Consumer Goods Upkeep +10%</div></span></div>}
     {!props.pie.Weak ? null: <div className = "display2" ><img alt='' src = {props.pie.Weak == true? "https://stellaris.paradoxwikis.com/images/e/e9/Weak.png": null}></img><span className="displaytext"><div>Army Damage -20%</div><div>Worker Output -2%</div></span></div>}
    </div>
    <div Id = 'deleteButton'>
    <button Id= "overide4" type="submit" onClick={(e) => deleteSpeieces(e)} >
            <img alt='' src = "https://stellaris.paradoxwikis.com/images/0/04/No.png"></img>
        </button>
    </div>
    <div Id = 'editButton'>
    <button Id= "overide4" type="submit" onClick={(e) => updateSpeices(e)} >
            <img alt='' src = "https://stellaris.paradoxwikis.com/images/6/67/Agenda.png"></img>
        </button>
    </div>
    </div>
    </div>
    )}
export default SingleSpeices;