import React from 'react'
import { calculations } from "../../constants";
import styled from 'styled-components'
import FullTimeInfos from "../static_contents/FullTimeInfos";
import PartTimeInfos from "../static_contents/PartTimeInfos";
import TaskWorkInfos from "../static_contents/TaskWorkInfos";
import Collapsible from "react-materialize/lib/Collapsible"
import CollapsibleItem from "react-materialize/lib/CollapsibleItem"

const ResultContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 460px;
  position: relative;
  margin: 0 auto 60px auto;
  @media (max-width: 1024px) {
    width: 95%;
  }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`

const OutsideLink = styled.a`
  color: #EC6D48;
  margin-right: 32px;
  padding: 4px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.1), 0 1px 7px 0 rgba(0,0,0,0.1), 0 3px 1px -1px rgba(0,0,0,0.1);
  }
`

const Result = ({data}) => {
    const {
        contractType,
        fullTimeDays,
        workRegime,
        partTimeHours,
        partTimeRegime,
        taskStartDate,
        taskEndDate,
        taskPay,
        totalDays,
    } = data

    const result = contractType === 'full'
    ? calculations.full( workRegime, fullTimeDays, totalDays)
    : contractType === 'partial'
    ? calculations.partial(partTimeHours, partTimeRegime)
    : calculations.task( taskStartDate, taskEndDate, taskPay)

    return (
        <>
            <ResultContainer className="card-panel orange">
                <h4 className='white-text'>Jours ONEM: {result}</h4>
            </ResultContainer>
            <div className="only-mobile">
                <Collapsible>
                    <CollapsibleItem header={'Informations supplémentaires'} onSelect={null}>
                        {
                            (contractType === 'full' && <FullTimeInfos/>)
                            ||
                            (contractType === 'partial' && <PartTimeInfos/>)
                            ||
                            (contractType === 'task' && <TaskWorkInfos/>)
                        }
                        <p>
                            Le total de vos jours de travail s’obtient par le cumul des différents contrats.
                            C’est dans cette combinaison que réside la complexité de la réglementation du chômage.
                            Nous vous recommandons donc de ne pas hésiter à vous faire
                            accompagner et conseiller avant d’introduire votre dossier à l’ONEm via votre organisme de paiement.
                        </p>
                        <p>
                            De notre côté, Dockers asbl travaille à développer son logiciel en ligne dont cet outil est le premier né.
                            N’hésitez pas à vous inscrire à notre bêta pour être les premiers à tester ce futur outil.
                        </p>
                        <p>
                            À bientôt
                        </p>
                        <p>
                            L'Équipe de Dockers asbl
                        </p>
                        <LinkContainer>
                            <OutsideLink href="https://vimeo.com/331764561.com/331764561" rel="noreferrer noopener" target="_blank">Regarder la démo Dockers</OutsideLink>
                            <OutsideLink href="https://www.dockers.io/" rel="noreferrer noopener" target="_blank">S'inscire à la bêta</OutsideLink>
                        </LinkContainer>
                    </CollapsibleItem>
                </Collapsible>
            </div>

            <div className="not-on-mobile">
                {
                    (contractType === 'full' && <FullTimeInfos/>)
                    ||
                    (contractType === 'partial' && <PartTimeInfos/>)
                    ||
                    (contractType === 'task' && <TaskWorkInfos/>)
                }
                <div className="card-panel">
                    <p>
                        Le total de vos jours de travail s’obtient par le cumul des différents contrats.
                        C’est dans cette combinaison que réside la complexité de la réglementation du chômage.
                        Nous vous recommandons donc de ne pas hésiter à vous faire
                        accompagner et conseiller avant d’introduire votre dossier à l’ONEm via votre organisme de paiement.
                    </p>
                    <p>
                        De notre côté, Dockers asbl travaille à développer son logiciel en ligne dont cet outil est le premier né.
                        N’hésitez pas à vous pré-inscrire pour être les premiers à tester ce futur outil.
                    </p>
                    <p>
                        À bientôt
                    </p>
                    <p>
                        L'Équipe de Dockers asbl
                    </p>
                    <LinkContainer>
                        <OutsideLink href="https://vimeo.com/331764561" rel="noreferrer noopener" target="_blank">Regarder la démo Dockers</OutsideLink>
                        <OutsideLink href="https://www.dockers.io/" rel="noreferrer noopener" target="_blank">Se préinscrire</OutsideLink>
                    </LinkContainer>
                </div>
            </div>

        </>
    )
}

export default Result