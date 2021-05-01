import React, { useState } from 'react'
import styled from "styled-components";

const MarginContainer = styled.div`
  margin: 40px 0;
`

const SecondStep = ({updateContractType, contractType}) => {

    const setContractType = e => updateContractType(e.target.value)



    return (
        <>
            <MarginContainer>
                <h4>Type de contrat</h4>
            </MarginContainer>
            <div className="card-panel">
                <p>
                    Cette information est mentionnée sur votre contrat et votre C4.
                </p>
                <div>
                    <label>
                        <input name="gender" id="gender" type="radio" onChange={setContractType} value='full' className='orange-text orange' checked={contractType === 'full'}/>
                        <span className='grey-text text-darken-4'>Contrat à temps plein</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input name="gender"  id="gender" type="radio" onChange={setContractType} value='partial' checked={contractType === 'partial'}/>
                        <span className='grey-text text-darken-4'>Contrat à temps partiel</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input name="gender" id="gender" type="radio" onChange={setContractType} value='task' checked={contractType === 'task'}/>
                        <span className='grey-text text-darken-4'>Contrat avec rémunération à la tâche</span>
                    </label>
                </div>
            </div>



        </>
    )
}

export default SecondStep