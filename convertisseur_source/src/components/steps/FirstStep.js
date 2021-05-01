import React from 'react'
import styled from "styled-components"
import { Modal, Button, Tabs, Tab } from 'react-materialize'


const MarginContainer = styled.div`
  margin: 40px 0;
`


const FirstStep = ({setPage}) => {

    const handleClose = () => {
        setPage('calculator')
    }

    const trigger = <Button className='orange'>Accéder au convertisseur</Button>;

    return (
        <>
            <MarginContainer>
                <div className="card-panel">
                    <p>
                        Cet outil permet de calculer vos jours de travail, <b>contrat par contrat</b>, selon la réglementation de l’ONEm dans le but d’obtenir une allocation de <b>chômage à temps plein</b>.
                    </p>
                    <p>
                        Cette réglementation est souvent complexe. Lisez nos bulles infos pour mieux comprendre où vous en êtes dans votre décompte et n’hésitez pas à poser vos questions et refaire le point avec votre syndicat, la Capac ou une association spécialisée dans le domaine avant d’introduire votre demande de chômage à l’ONEm via votre organisme de paiement.
                    </p>
                    <p>
                        Enfin, si vous êtes de <b>nationalité étrangère</b>, il faut savoir que le droit au chômage répond à des conditions de séjour et de permis de travail qui ne sont pas détaillées ici mais des associations peuvent vous renseigner, comme l'<a rel="noopener noreferrer" href="https://www.adde.be/" target="_blank">ADDE</a> , <a rel="noopener noreferrer" href="http://www.sireas.be/" target="_blank">Sireas</a> , pour ne citer qu’elles..
                    </p>
                </div>
            </MarginContainer>

            <Modal className='first-modal'
                actions={[
                    <Button className='orange white-text' node="button" onClick={() => setPage('reminders')} >En savoir plus</Button>,
                    <Button className='orange white-text' modal="close" node="button" waves="green">Passer la fiche info</Button>,
                ]}
                trigger={trigger}
                options={
                    {
                        onCloseEnd: handleClose
                    }
                }
            >
                <h5>Avant d’aller plus loin, n’hésitez pas à lire notre fiche “Le chômage Kezako”.</h5>
            </Modal>
        </>
    )
}

export default FirstStep