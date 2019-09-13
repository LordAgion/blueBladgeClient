import React, {useState} from 'react';



const BioEngineeringTraits= () => {
    let [traitPoints, setTraitPoints] =useState('10')
    let [traitPicks, setTraitPicks] =useState('5')


    let countDown= (e, f) => {
        
        setTraitPoints(traitPoints - e) 
        setTraitPicks(traitPicks - f)

    }


    return(
        <div>
            <h4>trait points left : {traitPoints}</h4>
            <h4>trait picks left : {traitPicks}</h4>
            <table>
                <thead>
                    <td> Selected traits</td>
                    <td>Unselected traits</td>
                </thead>
            </table>

            <button type="submit" onClick={(e) => countDown(1,1)}> 
            -1
            </button>



        </div>
    )
}

export default BioEngineeringTraits