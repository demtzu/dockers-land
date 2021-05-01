import React, { useState } from 'react'
import Lookup from "../form_conponents/Lookup";
import {Button, Modal} from "react-materialize";
import styled from "styled-components";
import Collapsible from "react-materialize/lib/Collapsible"
import CollapsibleItem from "react-materialize/lib/CollapsibleItem"

const EffectiveDaysInfoButton = styled.i`
  position: relative;
  bottom: 450px;
  left: 326px;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: none;
  }
`

const PartTime = (
    {
        partTimeHours,
        setPartTimeHours,
        partTimeRegime,
        setPartTimeRegime
    }
) => {

    const daysTrigger = <EffectiveDaysInfoButton className='material-icons'>info</EffectiveDaysInfoButton>

    const data = []
    for(let i = 10; i < 40.5; i += 0.5) data.push({value: i})

    const [regimeFullTime, setRegimeFullTime] = useState(partTimeRegime)


    const updateRegimePartTime = e => {
        setRegimeFullTime(e.target.value)
        setPartTimeRegime(e.target.value)
    }


    return (
        <>
            <div className="card-panel">
                <h5>Entrez vos heures de travail</h5>
                <p className='form-label'>Cette information est disponible sur votre fiche de paie. </p>
                <div className='row'>
                    <div className="col s3 input-field">
                        <input type='number' value={partTimeHours}  id="effective-days-input"  onChange={e => setPartTimeHours(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="only-mobile">
                <Collapsible>
                    <CollapsibleItem header={'Quelles heures sont prises en compte ?'} onSelect={null}>
                        <p>Les heures prises en compte sont les heures de travail salarié. Cela signifie qu’elles répondent à ces différentes caractéristiques : </p>
                        <p>
                            a)  qu’il y ait eu 13,07% de cotisations sociales retenues sur le salaire brut. Cela est visible sur la fiche de paie. Cela ne concerne pas, par exemple :
                            <ul className="collection">
                                <li className="collection-item">Le contrat d’occupation étudiant</li>
                                <li className="collection-item">Le RPI (régime des petites indemnités)</li>
                            </ul>
                        </p>
                        <p>
                            b) que les heures soient effectives (prestées) ou “assimilées”.
                            Ex. d’heures assimilées : maladie couverte par l’employeur ou la mutuelle, vacances couvertes par un pécule de vacances.
                        </p>
                        <p><b>Attention</b>: Pour l’étape 2, seules les prestations de travail effectives comptent, pas les heures assimilées!</p>
                    </CollapsibleItem>
                </Collapsible>
            </div>
            <div className="card-panel">
                <h5>Régime de travail temps plein dans l'entreprise ( heure(s)/semaine )</h5>
                <p>Cette information est disponible sur votre C4 ou contrat de travail. Sinon: contactez l’ONSS concernant cette occupation pour les obtenir.</p>
                <Lookup
                    data={data}
                    dataName="value"
                    dataValue="value"
                    label=""
                    updateFunction={updateRegimePartTime}
                    value={regimeFullTime}
                />
            </div>

            <Modal
                header="Quelles heures sont prises en compte ?"
                actions={[
                    <Button  className='orange white-text' flat modal="close" node="button" waves="green">Fermer</Button>
                ]}
                trigger={daysTrigger}
            >
                <p>Les heures prises en compte sont les heures de travail salarié. Cela signifie qu’elles répondent à ces différentes caractéristiques : </p>
                <p>
                    a)  qu’il y ait eu 13,07% de cotisations sociales retenues sur le salaire brut. Cela est visible sur la fiche de paie. Cela ne concerne pas, par exemple :
                    <ul className="collection">
                        <li className="collection-item">Le contrat d’occupation étudiant</li>
                        <li className="collection-item">Le RPI (régime des petites indemnités)</li>
                    </ul>
                </p>
                <p>
                    b) que les heures soient effectives (prestées) ou “assimilées”.
                    Ex. d’heures assimilées : maladie couverte par l’employeur ou la mutuelle, vacances couvertes par un pécule de vacances.
                </p>
                <p><b>Attention</b>: Pour l’étape 2, seules les prestations de travail effectives comptent, pas les heures assimilées!</p>
            </Modal>
        </>
    )
}

export default PartTime