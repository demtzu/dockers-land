import React from 'react'
import {Button, Modal} from "react-materialize"
import styled from 'styled-components'

const EffectiveDaysInfoButton = styled.i`
  position: relative;
  z-index: 100 !important;
  top: 81px;
  left: 308px;
  cursor: pointer;
    @media (max-width: 1024px) {
    display: none;
  }
`


const FullTimeDetails = () => {

    const daysTrigger = <EffectiveDaysInfoButton className='material-icons'>info</EffectiveDaysInfoButton>
    return (
        <Modal
            header="Quels jours sont pris en compte ?"
            actions={[
                <Button  className='orange white-text' flat modal="close" node="button" waves="green">Fermer</Button>
            ]}
            trigger={daysTrigger}
        >
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
        </Modal>
    )
}

export default FullTimeDetails