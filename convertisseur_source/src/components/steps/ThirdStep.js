import React from 'react'
import styled from "styled-components";
import FullTime from "../contracts_types/FullTime";
import PartTime from "../contracts_types/PartTime";
import Task from "../contracts_types/Task";

const MarginContainer = styled.div`
  margin: 40px 0;
`

const InfoBtn = styled.button`
  border: none;
  background-color: transparent;
`

const titles = {
    'full': 'Contrat à temps plein',
    'task': 'Contrat avec rémunération à la tâche',
    'partial': 'Contrat à temps partiel'
}

const ThirdStep = (
    {
        contractType,
        effectiveDays,
        setEffectiveDays,
        workRegime,
        setWorkRegime,
        partTimeHours,
        setPartTimeHours,
        partTimeRegime,
        setPartTimeRegime,
        taskStartDate,
        setStartDate,
        taskEndDate,
        setEndDate,
        taskPay,
        setTaskPay,
        fullTimeDays,
        setFullTimeDays,
    }
) => {



    return (
        <>
            <MarginContainer>
                <h4>{titles[contractType]}</h4>
            </MarginContainer>

            {
                (
                    contractType ===  'full'
                    &&
                    <FullTime
                        setEffectiveDays={setEffectiveDays}
                        effectiveDays={effectiveDays}
                        workRegime={workRegime}
                        setWorkRegime={setWorkRegime}
                        fullTimeDays={fullTimeDays}
                        setFullTimeDays={setFullTimeDays}
                    />
                )
                ||
                (
                 contractType === 'partial'
                 &&
                 <PartTime
                     partTimeHours={partTimeHours}
                     setPartTimeHours={setPartTimeHours}
                     partTimeRegime={partTimeRegime}
                     setPartTimeRegime={setPartTimeRegime}
                 />
                )
                ||
                (
                    contractType === 'task' &&
                    <Task
                        taskStartDate={taskStartDate}
                        setStartDate={setStartDate}
                        taskEndDate={taskEndDate}
                        setEndDate={setEndDate}
                        taskPay={taskPay}
                        setTaskPay={setTaskPay}
                    />
                )
            }


        </>
    )
}

export default ThirdStep