import React, {useState, useEffect} from 'react';
import { Container, Badge, Button, Input, Label } from 'reactstrap';


const SingleSpeices = (props) =>{
  
    return (
        <div>
        <div className = "embedBox2" key = {SingleSpeices.index}>
        <div Id ='spiecesName'> <h4>{props.pie.spiecesName}</h4></div> 
        <div Id ='spiecesBox'>
        <div Id ='spiecesPic'><img alt='' src = {props.pie.spiecesType}></img></div> 
            </div> 
            <div Id = 'planetBox'></div>
        
        <div Id ='spiecesPlanet'><img alt='' src = {props.pie.planetType} width='200%' height=' 200%'></img></div> 



    <div Id= 'placeTraits'>
    <img alt='' src = {props.pie.preferedPreferance}></img>
    <img alt='' src = {props.pie.majorTrait}></img>

    <img alt='' src = {props.pie.domesticProtocols == true? "https://stellaris.paradoxwikis.com/images/c/c2/Domestic_protocols.png": null}></img>
    <img alt='' src = {props.pie.doubleJointed == true? "https://stellaris.paradoxwikis.com/images/7/78/Double_jointed.png": null}></img>
    <img alt='' src = {props.pie.durable == true? "https://stellaris.paradoxwikis.com/images/2/26/Durable.png": null}></img>
    <img alt='' src = {props.pie.efficientProcessors == true? "https://stellaris.paradoxwikis.com/images/e/e9/Efficient_processors.png": null}></img>
    <img alt='' src = {props.pie.emotionEmulators == true? "https://stellaris.paradoxwikis.com/images/2/21/Emotion_emulators.png": null}></img>
    <img alt='' src = {props.pie.enhancedMemory == true? "https://stellaris.paradoxwikis.com/images/f/f4/Enhanced_memory.png": null}></img>
    <img alt='' src = {props.pie.harvesters == true? "https://stellaris.paradoxwikis.com/images/e/e4/Harvesters.png": null}></img>
    <img alt='' src = {props.pie.learningAlgorithms == true? "https://stellaris.paradoxwikis.com/images/8/89/Learning_algorithms.png": null}></img>
    <img alt='' src = {props.pie.logicEngines == true? "https://stellaris.paradoxwikis.com/images/d/d6/Logic_engines.png": null}></img>
    <img alt='' src = {props.pie.loyaltyCircuits == true? "https://stellaris.paradoxwikis.com/images/2/2e/Loyalty_circuits.png": null}></img>
    <img alt='' src = {props.pie.massProduced == true? "https://stellaris.paradoxwikis.com/images/d/d0/Mass_produced.png": null}></img>
    <img alt='' src = {props.pie.powerDrills == true? "https://stellaris.paradoxwikis.com/images/2/2c/Power_drills.png": null}></img>
    <img alt='' src = {props.pie.propagandaMachines == true? "https://stellaris.paradoxwikis.com/images/5/51/Propaganda_machines.png": null}></img>
    <img alt='' src = {props.pie.recycled == true? "https://stellaris.paradoxwikis.com/images/6/68/Recycled.png": null}></img>
    <img alt='' src = {props.pie.superconductive == true? "https://stellaris.paradoxwikis.com/images/7/70/Superconductive.png": null}></img>
    <img alt='' src = {props.pie.Bulky == true? "https://stellaris.paradoxwikis.com/images/d/d1/Bulky.png": null}></img>
    <img alt='' src = {props.pie.CustomMade == true? "https://stellaris.paradoxwikis.com/images/7/75/Custom_made.png": null}></img>
    <img alt='' src = {props.pie.HighMaintenance == true? "https://stellaris.paradoxwikis.com/images/1/12/High_maintenance.png": null}></img>
    <img alt='' src = {props.pie.Luxurious == true? "https://stellaris.paradoxwikis.com/images/1/1d/Luxurious.png": null}></img>
    <img alt='' src = {props.pie.RepurposedHardware == true? "https://stellaris.paradoxwikis.com/images/7/7b/Repurposed_hardware.png": null}></img>
    <img alt='' src = {props.pie.Uncanny == true? "https://stellaris.paradoxwikis.com/images/5/57/Uncanny.png": null}></img>

    <img alt='' src = {props.pie.Erudite == true? "https://stellaris.paradoxwikis.com/images/4/41/Erudite.png": null}></img>
    <img alt='' src = {props.pie.NerveStapled == true? "https://stellaris.paradoxwikis.com/images/f/f3/Nerve_Stapled.png": null}></img>
    <img alt='' src = {props.pie.Delicious == true? "https://stellaris.paradoxwikis.com/images/thumb/f/ff/Delicious.png/28px-Delicious.png": null}></img>
    <img alt='' src = {props.pie.Robust == true? "https://stellaris.paradoxwikis.com/images/a/aa/Robust.png": null}></img>
    <img alt='' src = {props.pie.Fertile == true? "https://stellaris.paradoxwikis.com/images/8/82/Fertile.png": null}></img>

    <img alt='' src = {props.pie.Venerable == true? "https://stellaris.paradoxwikis.com/images/8/85/Venerable.png": null}></img>
    
    <img alt='' src = {props.pie.Adaptive == true? "https://stellaris.paradoxwikis.com/images/1/10/Adaptive.png": null}></img>
    <img alt='' src = {props.pie.ExtremelyAdaptive == true? "https://stellaris.paradoxwikis.com/images/2/26/Extremely_Adaptive.png": null}></img>
    <img alt='' src = {props.pie.Agrarian == true? "https://stellaris.paradoxwikis.com/images/c/ca/Agrarian.png": null}></img>
    <img alt='' src = {props.pie.Charismatic == true? "https://stellaris.paradoxwikis.com/images/d/d8/Charismatic.png": null}></img>
    <img alt='' src = {props.pie.Communal == true? "https://stellaris.paradoxwikis.com/images/b/b5/Communal.png": null}></img>
    <img alt='' src = {props.pie.Conformists == true? "https://stellaris.paradoxwikis.com/images/d/db/Conformists.png": null}></img>
    <img alt='' src = {props.pie.Conservationist == true? "https://stellaris.paradoxwikis.com/images/d/da/Conservationist.png": null}></img>
    <img alt='' src = {props.pie.Enduring == true? "https://stellaris.paradoxwikis.com/images/9/91/Enduring.png": null}></img>
    <img alt='' src = {props.pie.VeryStrong == true? "https://stellaris.paradoxwikis.com/images/8/8f/Very_Strong.png": null}></img>

    <img alt='' src = {props.pie.Industrious == true? "https://stellaris.paradoxwikis.com/images/2/27/Industrious.png": null}></img>
    <img alt='' src = {props.pie.Ingenious == true? "https://stellaris.paradoxwikis.com/images/6/62/Ingenious.png": null}></img>
    <img alt='' src = {props.pie.Intelligent == true? "https://stellaris.paradoxwikis.com/images/6/6d/Intelligent.png": null}></img>
    <img alt='' src = {props.pie.NaturalEngineers == true? "https://stellaris.paradoxwikis.com/images/9/9a/Natural_Engineers.png": null}></img>
    <img alt='' src = {props.pie.NaturalPhysicists == true? "https://stellaris.paradoxwikis.com/images/1/14/Natural_Physicists.png": null}></img>
    <img alt='' src = {props.pie.NaturalSociologists == true? "https://stellaris.paradoxwikis.com/images/6/61/Natural_Sociologists.png": null}></img>
    <img alt='' src = {props.pie.Nomadic == true? "https://stellaris.paradoxwikis.com/images/b/b8/Nomadic.png": null}></img>
    <img alt='' src = {props.pie.QuickLearners == true? "https://stellaris.paradoxwikis.com/images/2/25/Quick_Learners.png": null}></img>
    <img alt='' src = {props.pie.RapidBreeders == true? "https://stellaris.paradoxwikis.com/images/e/ed/Rapid_Breeders.png": null}></img>
    <img alt='' src = {props.pie.Resilient == true? "https://stellaris.paradoxwikis.com/images/d/d7/Resilient.png": null}></img>
    <img alt='' src = {props.pie.Strong == true? "https://stellaris.paradoxwikis.com/images/e/eb/Strong.png": null}></img>

    <img alt='' src = {props.pie.Talented == true? "https://stellaris.paradoxwikis.com/images/3/3c/Talented.png": null}></img>
    <img alt='' src = {props.pie.Thrifty == true? "https://stellaris.paradoxwikis.com/images/9/9f/Thrifty.png": null}></img>
    <img alt='' src = {props.pie.Traditional == true? "https://stellaris.paradoxwikis.com/images/5/58/Trait_traditional.png": null}></img>
    <img alt='' src = {props.pie.Decadent == true? "https://stellaris.paradoxwikis.com/images/a/a1/Decadent.png": null}></img>
    <img alt='' src = {props.pie.Deviants == true? "https://stellaris.paradoxwikis.com/images/5/5c/Deviants.png": null}></img>
    <img alt='' src = {props.pie.Fleeting == true? "https://stellaris.paradoxwikis.com/images/7/74/Fleeting.png": null}></img>
    <img alt='' src = {props.pie.Nonadaptive == true? "https://stellaris.paradoxwikis.com/images/5/5f/Nonadaptive.png": null}></img>
    <img alt='' src = {props.pie.Quarrelsome == true? "https://stellaris.paradoxwikis.com/images/5/5e/Trait_quarrelsome.png": null}></img>
    <img alt='' src = {props.pie.Repugnant == true? "https://stellaris.paradoxwikis.com/images/5/5e/Repugnant.png": null}></img>
    <img alt='' src = {props.pie.Sedentary == true? "https://stellaris.paradoxwikis.com/images/7/7c/Sedentary.png": null}></img>
    <img alt='' src = {props.pie.SlowBreeders == true? "https://stellaris.paradoxwikis.com/images/7/79/Slow_Breeders.png": null}></img>
    <img alt='' src = {props.pie.SlowLearners == true? "https://stellaris.paradoxwikis.com/images/6/69/Slow_Learners.png": null}></img>
    <img alt='' src = {props.pie.Solitary == true? "https://stellaris.paradoxwikis.com/images/5/54/Solitary.png": null}></img>
    <img alt='' src = {props.pie.Wasteful == true? "https://stellaris.paradoxwikis.com/images/d/df/Wasteful.png": null}></img>
    <img alt='' src = {props.pie.Weak == true? "https://stellaris.paradoxwikis.com/images/e/e9/Weak.png": null}></img>
    </div>
    </div>
    </div>
    )}
export default SingleSpeices;