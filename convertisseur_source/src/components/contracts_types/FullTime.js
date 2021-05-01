import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FullTimeDetails from "../static_contents/modals/FullTimeDetails"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from "moment"
import FullTimeRegimeDetails from "../static_contents/modals/FullTimeRegimeDetails"
import Collapsible from "react-materialize/lib/Collapsible"
import CollapsibleItem from "react-materialize/lib/CollapsibleItem"
import {Modal} from "react-materialize"


const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const WeekEndDatesContainer = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const DateContainer = styled.div`
  margin: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const DaysHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
    @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const ModeChooser = styled.span`
  text-decoration: ${({mode, currentMode}) => mode === currentMode ? 'underline' : ''};
  @media (max-width: 1024px) {
    display: none;
  }
`

const DaysContainer = styled.div `

`

const RegimeContainer = styled.div`
  position: relative;
`


const FullTime = (
    {
        workRegime,
        setWorkRegime,
        fullTimeDays,
        setFullTimeDays,
    }
) => {

    useEffect(() => {
        setFullTimeDays([])
    } , [])

    const updateWorkRegime = e => setWorkRegime(e.target.value)
    const [dates, setDates] = useState([])
    const [count, setCount] = useState(0)

    const addDate = date => {
        if(validDate(date)) {
            setDates([...dates, date])
            setFullTimeDays([...fullTimeDays, date])
        }
        setCount(count + 1)
        if(count === 9) {
            document.querySelectorAll('.material-icons')[document.querySelectorAll('.material-icons').length - 3].click()
        }
    }

    const removeDate = date => {
        setDates(dates.filter(e => e !== date))
        setFullTimeDays(fullTimeDays.filter(e => e !== date))
    }

    const validDate = date => dates.every(d => dmy(d) !== dmy(date))


    const dmy = date => `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

    return (
        <>
            <FullTimeDetails/>
            <div className="only-mobile">
                <Collapsible>
                    <CollapsibleItem header={'Quels jours sont pris en compte ?'} onSelect={null}>
                        <div>
                            a)  qu’il y ait eu 13,07% de cotisations sociales retenues sur le salaire brut. Cela est visible sur la fiche de paie. Cela ne concerne pas, par exemple :
                            <ul className="collection">
                                <li className="collection-item">Le contrat d’occupation étudiant</li>
                                <li className="collection-item">Le RPI (régime des petites indemnités)</li>
                            </ul>
                        </div>
                        <p>
                            b)  que les journées soient effectives (prestées) ou “assimilées”.
                            Ex. de journées assimilées : les journées de maladie rémunérées par l’employeur ou la
                            mutuelle ou les journées couvertes par un pécule de vacances.
                            <br/>
                            <b>Attention</b>: Pour l’étape 2, seules les prestations de travail effectives comptent, pas les
                            journées assimilées!
                        </p>
                        <p>
                            c)  Les journées prises en compte doivent aussi avoir une rémunération dite suffisante, à
                            savoir : 62,53€/jour (au 1er mars 2020).
                        </p>
                    </CollapsibleItem>
                </Collapsible>
            </div>
            <DaysContainer className="card-panel">
                <DaysHeader>
                    <h5>Entrez les jours de travail</h5>
                </DaysHeader>
                <CalendarContainer >
                    <div className="row">
                        <Calendar onChange={addDate} />
                    </div>
                    <WeekEndDatesContainer className='row'>
                        {
                            dates.map((d, index) =>
                                <DateContainer  key={index} className='btn orange col s3'>
                                    {moment(d).format('DD-MM-YYYY')} <i onClick={() => removeDate(d)} className="material-icons">close</i>
                                </DateContainer>
                            )
                        }
                    </WeekEndDatesContainer>
                </CalendarContainer>
            </DaysContainer>
            <div className="only-mobile">
                <Collapsible>
                    <CollapsibleItem header={'Nota bene'} onSelect={null}>
                        <div>
                            <p>
                                NB: Pour les contrats de plus de 3 mois complet. Un trimestre civil à temps plein  = 78 jours.
                            </p>
                            <p>
                                Vous pouvez dès lors choisir de n’utiliser le convertisseur que pour la partie du contrat qui se situe hors de ce trimestre civil.
                            </p>
                            <p>
                                Ex.: Contrat à temps plein du 15 mars 2020 au 20 juillet 2020 : le trimestre avril-juin = 78 jours. Le convertisseur peut par contre vous être
                                utile pour calculer les périodes du contrat couvrant les mois de mars et de juillet.
                            </p>
                        </div>
                    </CollapsibleItem>
                </Collapsible>
            </div>
            <RegimeContainer className="row card-panel">
                <FullTimeRegimeDetails/>
                <h5>Régime de travail à temps plein</h5>
                <p>Cette information est disponible sur votre C4 ou contrat de travail. Sinon: contactez l’ONSS concernant cette occupation pour les obtenir.</p>
                <div className="col s6">
                    <p className="form-label">Régime de travail</p>
                    <div className="row work-regimes">
                        <div className='col s6'>
                            <label>
                                <input name="gender" id="gender" type="radio" onChange={updateWorkRegime} value='5' className='orange-text orange' checked={workRegime === '5'} />
                                <span className='grey-text text-darken-4'>5 jours / semaine</span>
                            </label>
                        </div>
                        <div  className='col s6'>
                            <label>
                                <input name="gender" id="gender" type="radio" onChange={updateWorkRegime} value='6' className='orange-text orange' checked={workRegime === '6'}/>
                                <span className='grey-text text-darken-4'>6 jours / semaine</span>
                            </label>
                        </div>
                    </div>
                </div>
            </RegimeContainer>
        </>
    )
}

export default FullTime