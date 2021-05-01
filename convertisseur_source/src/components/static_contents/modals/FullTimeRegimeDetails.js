import React from 'react'
import {Button, Modal} from "react-materialize"
import styled from 'styled-components'

const EffectiveDaysInfoButton = styled.i`
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;
`


const FullTimeRegimeDetails = () => {

    const daysTrigger = <EffectiveDaysInfoButton className='material-icons'>info</EffectiveDaysInfoButton>
    return (
        <Modal
            actions={[
                <Button  className='orange white-text' flat modal="close" node="button" waves="green">Fermer</Button>
            ]}
            trigger={daysTrigger}
        >
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
        </Modal>
    )
}

export default FullTimeRegimeDetails