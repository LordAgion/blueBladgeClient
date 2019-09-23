import React, {useState, useEffect} from 'react';
import { Container, Badge, Button, Input, Label } from 'reactstrap';
import {Redirect} from 'react-router-dom';

import SingleSpeices from './singleSpeices'

import '../apps/embedBox.css'
import '../apps/apperanceBox.css'
import '../apps/traits/hover.css'
import './List.css'

let id = ''


const SingleSpeicesPlus = (props) =>{
    
    let [data2, setLocalSpecies] = useState('')
    const [spiecesPlural, setSpiecesPlural] =useState('')
    const [spiecesAdj, setSpiecesAdj] =useState('')
    const [homeworld, setHomeworld] =useState('')
    const [description, setDescription] =useState('')
    const [reset, setReset] =useState(0)
    const [id, setId] = useState(0)
    

    
// setReset(props.props)

//     console.log(reset)
  
      let fetchSpeices2 = () => {

    fetch (`https://speciescatalog.herokuapp.com/speices/one/${props.props}`,  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },}
        )        
        .then(res => res.json())
        .then(data => {
            // console.log(data[0].id)
            setLocalSpecies(data[0])

             

            
            
        })
        .then(
            fetch(`https://speciescatalog.herokuapp.com/speciesPlus/${props.props}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': props.props
                },

            }
            ).then(res =>res.json())
            .then(data => {
                // console.log(data[0].)
                // console.log(data)
                
               setSpiecesPlural(data[0].speciePlural)
                setSpiecesAdj(data[0].specieAdj)
              setHomeworld(data[0].homeworld)
                setDescription(data[0].description)
            })

                 
        )
         .catch(err => console.error ({ message: err}))
    }
    // console.log(props.props)

//    console.log('here', data2.id)
const postSubmit = (z) =>{
    z.preventDefault();


    // console.log(


    // )
   fetch(`https://speciescatalog.herokuapp.com/speciesPlus/${props.props}`, {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json',
           'Authorization': props.props
       },
       body:JSON.stringify({
        speciesId: data2.id,   
        speciePlural: spiecesPlural,
        specieAdj: spiecesAdj,
        homeworld:  homeworld,
        description:  description,

       })
   }
   ).then(res =>res.json())
//    .then(    setLocalSpecies(null))
//    .then(  setSpiecesPlural(null))
//    .then(  setSpiecesAdj(null))
//    .then(   setHomeworld(null))
//    .then(  setDescription(null))

        
   .then(
    setTimeout(function() {

        props.tokenHandler(1)

      }, 100)
    )
   
}



if (props.props>0  && props.props != data2.id) {
    setTimeout(function() {
        fetchSpeices2()

      }, 100)
    }


  
    return (
        <div>
        <div className = "embedBox3">
        <div Id ='spiecesName'> <h4>{data2.spiecesName}</h4></div> 
        <div Id ='spiecesBox'>
        <div Id ='spiecesPic'><img alt='' src = {data2.spiecesType}></img> </div> 
            </div> 
            <div Id = 'planetBox'>
        
        <div Id ='spiecesPlanet'><img alt='' src = {data2.planetType} width='200%' height=' 200%'></img> </div> 
</div>


    <div Id= 'placeTraits'>
        
     {!data2.preferedPreferance ? null: <div className = "display2" ><img alt='' src = {data2.preferedPreferance}></img><span className="displaytext"><div>Pop Housing Usage −10%</div></span></div>}
     {!data2.majorTrait ? null: <div className = "display2" ><img alt='' src = {data2.majorTrait}></img><span className="displaytext"><div>Pop Housing Usage −10%</div></span></div>}

     {!data2.domesticProtocols ? null: <div className = "display2" ><img alt='' src = {data2.domesticProtocols == true? "https://stellaris.paradoxwikis.com/images/c/c2/Domestic_protocols.png": null}></img><span className="displaytext"><div>Can be employed in Servant Jobs if under AI Servitude, Amenities from Jobs +20%</div></span></div>}
     {!data2.doubleJointed ? null: <div className = "display2" ><img alt='' src = {data2.doubleJointed == true? "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png": null}></img><span className="displaytext"><div>Pop Housing Usage −10%</div></span></div>}
     {!data2.durable ? null: <div className = "display2" ><img alt='' src = {data2.durable == true? "https://stellaris.paradoxwikis.com/images/2/26/Durable.png": null}></img><span className="displaytext"><div>Robot Upkeep –10%</div></span></div>}
     {!data2.efficientProcessors ? null: <div className = "display2" ><img alt='' src = {data2.efficientProcessors == true? "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png": null}></img><span className="displaytext"><div>Resources from Jobs +5%</div></span></div>}
     {!data2.emotionEmulators ? null: <div className = "display2" ><img alt='' src = {data2.emotionEmulators == true? "https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png": null}></img><span className="displaytext"><div>Amenities from Jobs +20%</div></span></div>}
     {!data2.enhancedMemory ? null: <div className = "display2" ><img alt='' src = {data2.enhancedMemory == true? "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png": null}></img><span className="displaytext"><div>Leader Level Cap +2</div></span></div>}
     {!data2.harvesters ? null: <div className = "display2" ><img alt='' src = {data2.harvesters == true? "https://stellaris.paradoxwikis.com/images/e/e4/Harvesters.png": null}></img><span className="displaytext"><div>Food from Jobs +15%</div></span></div>}
     {!data2.learningAlgorithms ? null: <div className = "display2" ><img alt='' src = {data2.learningAlgorithms == true? "https://stellaris.paradoxwikis.com/images/8/89/Learning_algorithms.png": null}></img><span className="displaytext"><div>Leader Experience Gain +25%</div></span></div>}
     {!data2.logicEngines ? null: <div className = "display2" ><img alt='' src = {data2.logicEngines == true? "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png": null}></img><span className="displaytext"><div> Research Output +10%</div></span></div>}
     {!data2.loyaltyCircuits ? null: <div className = "display2" ><img alt='' src = {data2.loyaltyCircuits == true? "https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png": null}></img><span className="displaytext"><div>Happiness +10%</div></span></div>}
     {!data2.massProduced ? null: <div className = "display2" ><img alt='' src = {data2.massProduced == true? "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png": null}></img><span className="displaytext"><div>Pop Assembly Speed +15%</div></span></div>}
     {!data2.powerDrills ? null: <div className = "display2" ><img alt='' src = {data2.powerDrills == true? "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png": null}></img><span className="displaytext"><div>Minerals from Jobs +15%</div></span></div>}
     {!data2.propagandaMachines ? null: <div className = "display2" ><img alt='' src = {data2.propagandaMachines == true? "https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png": null}></img><span className="displaytext"><div> Unity from Jobs +15%</div></span></div>}
     {!data2.recycled ? null: <div className = "display2" ><img alt='' src = {data2.recycled == true? "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png": null}></img><span className="displaytext"><div>Pop Assembly Cost –20%</div></span></div>}
     {!data2.superconductive ? null: <div className = "display2" ><img alt='' src = {data2.superconductive == true? "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png": null}></img><span className="displaytext"><div>Energy Credits from Jobs +15%</div></span></div>}
     {!data2.Bulky ? null: <div className = "display2" ><img alt='' src = {data2.Bulky == true? "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png": null}></img><span className="displaytext"><div>Pop Housing Usage +10%</div></span></div>}
     {!data2.CustomMade ? null: <div className = "display2" ><img alt='' src = {data2.CustomMade == true? "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png": null}></img><span className="displaytext"><div>Pop Assembly Speed –15%</div></span></div>}
     {!data2.HighMaintenance ? null: <div className = "display2" ><img alt='' src = {data2.HighMaintenance == true? "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png": null}></img><span className="displaytext"><div>Robot Upkeep +10%</div></span></div>}
     {!data2.Luxurious ? null: <div className = "display2" ><img alt='' src = {data2.Luxurious == true? "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png": null}></img><span className="displaytext"><div>Pop Assembly Cost +20%</div></span></div>}
     {!data2.RepurposedHardware ? null: <div className = "display2" ><img alt='' src = {data2.RepurposedHardware == true? "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png": null}></img><span className="displaytext"><div>Leader Experience Gain –25%</div></span></div>}
     {!data2.Uncanny ? null: <div className = "display2" ><img alt='' src = {data2.Uncanny == true? "https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png": null}></img><span className="displaytext"><div>Amenities from Jobs −20%</div></span></div>}

     {!data2.Erudite ? null: <div className = "display2" ><img alt='' src = {data2.Erudite == true? "https://stellaris.paradoxwikis.com/images/4/41/Erudite.png": null}></img><span className="displaytext"><div>Researcher Output +20%</div><div>Leader Level Cap +1</div></span></div>}
     {!data2.NerveStapled ? null: <div className = "display2" ><img alt='' src = {data2.NerveStapled == true? "https://stellaris.paradoxwikis.com/images/f/f3/Nerve_Stapled.png": null}></img><span className="displaytext"><div>Resources from Jobs +5%</div><div> Cannot be employed in Ruler or Specialist Jobs</div><div>Cannot generate Leaders</div><div>Not Affected by Happiness</div><div> Can't join a faction</div></span></div>}
     {!data2.durable ? null: <div className = "display2" ><img alt='' src = {data2.Delicious == true? "https://stellaris.paradoxwikis.com/images/thumb/f/ff/Delicious.png/28px-Delicious.png": null}></img><span className="displaytext"><div>Food from Livestock and Processing +2</div></span></div>}
     {!data2.Delicious ? null: <div className = "display2" ><img alt='' src = {data2.Robust == true? "https://stellaris.paradoxwikis.com/images/a/aa/Robust.png": null}></img><span className="displaytext"><div>Resources from Jobs +5%</div><div> Habitability +30%</div><div>Leader Lifespan +50 Years</div></span></div>}
     {!data2.Fertile ? null: <div className = "display2" ><img alt='' src = {data2.Fertile == true? "https://stellaris.paradoxwikis.com/images/8/82/Fertile.png": null}></img><span className="displaytext"><div>Pop Growth Speed +30%</div><div> Pop Housing Usage −10%</div></span></div>}
{!data2.VeryStrong ? null: <div className = "display2" ><img alt='' src = {data2.VeryStrong == true? "https://stellaris.paradoxwikis.com/images/8/8f/Very_Strong.png": null}></img><span className="displaytext"><div>Army Damage +40%</div><div>Worker Output +5%</div></span></div>}
     {!data2.Venerable ? null: <div className = "display2" ><img alt='' src = {data2.Venerable == true? "https://stellaris.paradoxwikis.com/images/8/85/Venerable.png": null}></img><span className="displaytext"><div>Leader Lifespan +80 Years</div></span></div>}
    
     {!data2.Adaptive ? null: <div className = "display2" ><img alt='' src = {data2.Adaptive == true? "https://stellaris.paradoxwikis.com/images/1/10/Adaptive.png": null}></img><span className="displaytext"><div>Habitability +10%</div></span></div>}
     {!data2.durable ? null: <div className = "display2" ><img alt='' src = {data2.ExtremelyAdaptive == true? "https://stellaris.paradoxwikis.com/images/2/26/Extremely_Adaptive.png": null}></img><span className="displaytext"><div>Habitability +20%</div></span></div>}
     {!data2.ExtremelyAdaptive ? null: <div className = "display2" ><img alt='' src = {data2.Agrarian == true? "https://stellaris.paradoxwikis.com/images/c/ca/Agrarian.png": null}></img><span className="displaytext"><div>Food from Jobs +15%</div></span></div>}
     {!data2.Charismatic ? null: <div className = "display2" ><img alt='' src = {data2.Charismatic == true? "https://stellaris.paradoxwikis.com/images/d/d8/Charismatic.png": null}></img><span className="displaytext"><div>Amenities from Jobs +20%</div></span></div>}
     {!data2.Communal ? null: <div className = "display2" ><img alt='' src = {data2.Communal == true? "https://stellaris.paradoxwikis.com/images/b/b5/Communal.png": null}></img><span className="displaytext"><div>Pop Housing Usage −10%</div></span></div>}
     {!data2.Conformists ? null: <div className = "display2" ><img alt='' src = {data2.Conformists == true? "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png": null}></img><span className="displaytext"><div>Governing Ethics Attraction +30%</div></span></div>}
     {!data2.Conservationist ? null: <div className = "display2" ><img alt='' src = {data2.Conservationist == true? "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png": null}></img><span className="displaytext"><div>Pop Consumer Goods Upkeep −10%</div></span></div>}
     {!data2.Enduring ? null: <div className = "display2" ><img alt='' src = {data2.Enduring == true? "https://stellaris.paradoxwikis.com/images/9/91/Enduring.png": null}></img><span className="displaytext"><div>Leader Lifespan +20 Years</div></span></div>}
     

     {!data2.Industrious ? null: <div className = "display2" ><img alt='' src = {data2.Industrious == true? "https://stellaris.paradoxwikis.com/images/2/27/Industrious.png": null}></img><span className="displaytext"><div>Minerals from Jobs +15%</div></span></div>}
     {!data2.Ingenious ? null: <div className = "display2" ><img alt='' src = {data2.Ingenious == true? "https://stellaris.paradoxwikis.com/images/6/62/Ingenious.png": null}></img><span className="displaytext"><div> Energy Credits from Jobs +15%</div></span></div>}
     {!data2.Intelligent ? null: <div className = "display2" ><img alt='' src = {data2.Intelligent == true? "https://stellaris.paradoxwikis.com/images/6/6d/Intelligent.png": null}></img><span className="displaytext"><div>Researcher Output +10%</div></span></div>}
     {!data2.NaturalEngineers ? null: <div className = "display2" ><img alt='' src = {data2.NaturalEngineers == true? "https://stellaris.paradoxwikis.com/images/9/9a/Natural_Engineers.png": null}></img><span className="displaytext"><div>Engineering Research from Jobs +15%</div></span></div>}
     {!data2.NaturalPhysicists ? null: <div className = "display2" ><img alt='' src = {data2.NaturalPhysicists == true? "https://stellaris.paradoxwikis.com/images/1/14/Natural_Physicists.png": null}></img><span className="displaytext"><div>Physics Research from Jobs +15%</div></span></div>}
     {!data2.NaturalSociologists ? null: <div className = "display2" ><img alt='' src = {data2.NaturalSociologists == true? "https://stellaris.paradoxwikis.com/images/6/61/Natural_Sociologists.png": null}></img><span className="displaytext"><div>Society Research from Jobs +15%</div></span></div>}
     {!data2.Nomadic ? null: <div className = "display2" ><img alt='' src = {data2.Nomadic == true? "https://stellaris.paradoxwikis.com/images/b/b8/Nomadic.png": null}></img><span className="displaytext"><div>Pop Growth from Immigration +15%</div><div>Resettlement Cost −25%</div></span></div>}
     {!data2.QuickLearners ? null: <div className = "display2" ><img alt='' src = {data2.QuickLearners == true? "https://stellaris.paradoxwikis.com/images/2/25/Quick_Learners.png": null}></img><span className="displaytext"><div>Leader Experience Gain +25%</div></span></div>}
     {!data2.RapidBreeders ? null: <div className = "display2" ><img alt='' src = {data2.RapidBreeders == true? "https://stellaris.paradoxwikis.com/images/e/ed/Rapid_Breeders.png": null}></img><span className="displaytext"><div>Growth Speed +10%</div></span></div>}
     {!data2.Resilient ? null: <div className = "display2" ><img alt='' src = {data2.Resilient == true? "https://stellaris.paradoxwikis.com/images/d/d7/Resilient.png": null}></img><span className="displaytext"><div>Defense Army Damage +50%</div></span></div>}
     {!data2.Strong ? null: <div className = "display2" ><img alt='' src = {data2.Strong == true? "https://stellaris.paradoxwikis.com/images/e/eb/Strong.png": null}></img><span className="displaytext"><div>Army Damage +20%</div><div>Worker Output +2.5%</div></span></div>}

     {!data2.Talented ? null: <div className = "display2" ><img alt='' src = {data2.Talented == true? "https://stellaris.paradoxwikis.com/images/3/3c/Talented.png": null}></img><span className="displaytext"><div>Leader Level Cap +1</div></span></div>}
     {!data2.Thrifty ? null: <div className = "display2" ><img alt='' src = {data2.Thrifty == true? "https://stellaris.paradoxwikis.com/images/9/9f/Thrifty.png": null}></img><span className="displaytext"><div>Trade value from Jobs +25%</div></span></div>}
     {!data2.Traditional ? null: <div className = "display2" ><img alt='' src = {data2.Traditional == true? "https://stellaris.paradoxwikis.com/images/5/58/Trait_traditional.png": null}></img><span className="displaytext"><div>Unity from Jobs +10%</div></span></div>}
     {!data2.Decadent ? null: <div className = "display2" ><img alt='' src = {data2.Decadent == true? "https://stellaris.paradoxwikis.com/images/a/a1/Decadent.png": null}></img><span className="displaytext"><div>Worker Happiness −10%</div><div>Slave Happiness −10%</div></span></div>}
     {!data2.Deviants ? null: <div className = "display2" ><img alt='' src = {data2.Deviants == true? "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png": null}></img><span className="displaytext"><div>Governing Ethics Attraction −15%</div></span></div>}
     {!data2.Fleeting ? null: <div className = "display2" ><img alt='' src = {data2.Fleeting == true? "https://stellaris.paradoxwikis.com/images/7/74/Fleeting.png": null}></img><span className="displaytext"><div>Leader Lifespan −10 Years</div></span></div>}
     {!data2.Nonadaptive ? null: <div className = "display2" ><img alt='' src = {data2.Nonadaptive == true? "https://stellaris.paradoxwikis.com/images/5/5f/Nonadaptive.png": null}></img><span className="displaytext"><div>Habitability −10%</div></span></div>}
     {!data2.Quarrelsome ? null: <div className = "display2" ><img alt='' src = {data2.Quarrelsome == true? "https://stellaris.paradoxwikis.com/images/5/5e/Trait_quarrelsome.png": null}></img><span className="displaytext"><div>Unity from Jobs −10%</div></span></div>}
     {!data2.Repugnant ? null: <div className = "display2" ><img alt='' src = {data2.Repugnant == true? "https://stellaris.paradoxwikis.com/images/5/5e/Repugnant.png": null}></img><span className="displaytext"><div>Amenities from Jobs −20%</div></span></div>}
     {!data2.Sedentary ? null: <div className = "display2" ><img alt='' src = {data2.Sedentary == true? "https://stellaris.paradoxwikis.com/images/7/7c/Sedentary.png": null}></img><span className="displaytext"><div>Pop Growth from Immigration −15%</div><div>Resettlement Cost +25%</div></span></div>}
     {!data2.SlowBreeders ? null: <div className = "display2" ><img alt='' src = {data2.SlowBreeders == true? "https://stellaris.paradoxwikis.com/images/7/79/Slow_Breeders.png": null}></img><span className="displaytext"><div>Growth Speed −10%</div></span></div>}
     {!data2.SlowLearners ? null: <div className = "display2" ><img alt='' src = {data2.SlowLearners == true? "https://stellaris.paradoxwikis.com/images/6/69/Slow_Learners.png": null}></img><span className="displaytext"><div> Leader Experience Gain −25%</div></span></div>}
     {!data2.Solitary ? null: <div className = "display2" ><img alt='' src = {data2.Solitary == true? "https://stellaris.paradoxwikis.com/images/5/54/Solitary.png": null}></img><span className="displaytext"><div>Pop Housing Usage +10%</div></span></div>}
     {!data2.Wasteful ? null: <div className = "display2" ><img alt='' src = {data2.Wasteful == true? "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png": null}></img><span className="displaytext"><div>Pop Consumer Goods Upkeep +10%</div></span></div>}
     {!data2.Weak ? null: <div className = "display2" ><img alt='' src = {data2.Weak == true? "https://stellaris.paradoxwikis.com/images/e/e9/Weak.png": null}></img><span className="displaytext"><div>Army Damage -20%</div><div>Worker Output -2%</div></span></div>}
    </div>

    <div Id = "postSubmit">

<button type="submit" onClick={(z) => postSubmit(z)}> <h3>Update Species</h3>
    
</button>


</div>

    </div>
    <br></br>
        <br></br>
        <br></br>
<br></br>
    <div Id = "bodyDoc">
    
 
            <Label>  Species Plural: </Label>
         <Input value={spiecesPlural} onChange= {(e)=>setSpiecesPlural(e.target.value)}maxlength="16"> Spieces</Input>
        <Label> Species Adjective: </Label>
        <Input value={spiecesAdj} onChange= {(e)=>setSpiecesAdj(e.target.value)}maxlength="16"> Spieces</Input>
        <Label> Homeworld Name: </Label>
        <Input value={homeworld} onChange= {(e)=>setHomeworld(e.target.value)}maxlength="16"> Spieces</Input>
        <Label> Species Description: </Label>
        <br></br>
        <textarea Id = "inputbox"  value= {description} onChange= {(e)=>setDescription(e.target.value)} cols="40" rows="5">  </textarea>
    </div>

 
    </div>
        
    )

}
export default SingleSpeicesPlus;


