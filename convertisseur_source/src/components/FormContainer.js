import React, { useState } from 'react'
import styled from "styled-components"
import FirstStep from "./steps/FirstStep"
import SecondStep from "./steps/SecondStep"
import ThirdStep from "./steps/ThirdStep"
import Result from "./steps/Result";


const MarginContainer = styled.div`
  margin-top: 40px;
`
const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
    @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 40px;
    height: 100px;
  }
`

const FlexSpaceBetween  = styled.div`
  display: flex;
  justify-content: space-between;
  width: 380px;

`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const FormContainer = ({setPage}) => {
    const [formStep, setFormStep] = useState(1)
    const [contractType, setContractType] = useState(null)
    const [effectiveDays, setEffectiveDays] = useState(0)
    const [workRegime, setWorkRegime] = useState('5')
    const [partTimeHours, setPartTimeHours] = useState(0)
    const [partTimeRegime, setPartTimeRegime] = useState(0)
    const [taskStartDate, setStartDate] = useState(null)
    const [taskEndDate, setEndDate] = useState(null)
    const [taskPay, setTaskPay] = useState(null)
    const [fullTimeDays, setFullTimeDays] = useState([])

    const reset = () => {
        setFormStep(1)
        setContractType(null)
        setEffectiveDays(0)
        setWorkRegime('5')
        setPartTimeHours(0)
        setPartTimeRegime(0)
        setStartDate(null)
        setEndDate(null)
        setTaskPay(null)
        setFullTimeDays([])
    }

    return (
        <MarginContainer>
            {
                /*
                <TitleContainer>
                    <h3 className='orange-txt'>Un chouette titre pour la calculette</h3>
                    <ProgressCircle value={100/3 * formStep}/>
                </TitleContainer>
                */
            }
           <MarginContainer>
               {
                   formStep === 0
                   ? <FirstStep setPage={ setPage } next={() => setFormStep(1)}/>
                   : formStep === 1 ? <SecondStep updateContractType={setContractType} contractType={contractType}/>
                   : formStep === 2 ? <ThirdStep
                       contractType={contractType}
                       effectiveDays={effectiveDays}
                       setEffectiveDays={setEffectiveDays}
                       workRegime={workRegime}
                       setWorkRegime={setWorkRegime}
                       partTimeHours={partTimeHours}
                       setPartTimeHours={setPartTimeHours}
                       partTimeRegime={partTimeRegime}
                       setPartTimeRegime={setPartTimeRegime}
                       taskStartDate={taskStartDate}
                       setStartDate={setStartDate}
                       taskEndDate={taskEndDate}
                       setEndDate={setEndDate}
                       taskPay={taskPay}
                       setTaskPay={setTaskPay}
                       fullTimeDays={fullTimeDays}
                       setFullTimeDays={setFullTimeDays}
                   />
                   :
                   <Result
                       data={{
                        contractType,
                        workRegime,
                        partTimeHours,
                        partTimeRegime,
                        taskStartDate,
                        taskEndDate,
                        taskPay,
                        fullTimeDays,
                      }}
                   />
               }
           </MarginContainer>
            {
                <ButtonContainer>
                    <FlexSpaceBetween>
                        {
                            formStep >= 2 &&
                            <div>
                                <button className='btn orange'  onClick={() => setFormStep(formStep - 1)}>
                                    étape précédente
                                    <i className="material-icons left">arrow_back</i>
                                </button>
                            </div>
                        }
                        {
                            (
                                (
                                    (formStep === 1 && contractType)
                                    || (
                                        formStep === 2
                                        &&(
                                            (contractType === 'full' && fullTimeDays.length)
                                            ||
                                            (contractType === 'partial' && partTimeRegime && partTimeHours)
                                            ||
                                            (contractType === 'task' && taskEndDate && taskStartDate && taskEndDate >= taskStartDate && taskPay)
                                        )
                                    )
                                )
                                &&
                                <div>
                                    <button className='btn orange' onClick={() => setFormStep(formStep + 1)}>
                                        étape suivante
                                        <i className="material-icons right">arrow_forward</i>
                                    </button>
                                </div>
                            ) || <></>
                        }

                    </FlexSpaceBetween>
                        {
                            formStep >= 1 &&
                            <div>
                                <button className='btn orange' onClick={() => {
                                    reset()
                                } }>Convertir un autre contrat</button>
                            </div>
                        }
                </ButtonContainer>
            }

        </MarginContainer>
    )

}

export default FormContainer;