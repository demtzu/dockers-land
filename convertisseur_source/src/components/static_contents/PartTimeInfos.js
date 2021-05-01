import React from "react"

const PartTimeInfos = () => {
    return (
        <>
            <div className="card-panel">
                <p>
                    <b>Cet outil n’est valable que dans le cadre d’une demande de chômage à temps plein. </b>
                    L’outil n’examine pas la possibilité d’être indemnisé à temps partiel.
                    Pour examiner cette possibilité, n’hésitez pas à vous faire aider.
                </p>
                <p>
                    <b>Si vous cumulez deux contrats sur une journée en tant que travailleur à temps partiel, </b>
                    un maximum de 7,6h par jour sont pris en considération pour le calcul de vos jours de travail.
                    Veillez donc à être attentif dans ce type de situation car l’outil fonctionne “contrat par contrat”
                    sur base des heures que vous encodez au départ de vos fiches de paie et ne peut donc appliquer
                    ce plafond en cas de cumul d’au moins deux contrats sur une même période.
                </p>
                <p>
                    Si vous êtes dans le cas d’une carrière “hybride” (contrats à temps plein, à temps partiel, …), vous devez comptabiliser 312 jours temps plein (ou 468, 624 en fonction de votre âge, etc.) pour être admis au chômage à temps plein.
                </p>
                <div>
                    <p>
                        Terminer par une période de travail d’au moins 4
                        semaines calendrier ininterrompues auprès d’un même employeur dont
                        le salaire brut doit être d’au moins 1625,72€ (depuis le 1er mars 2020).
                    </p>
                    <ul className='collection'>
                        <li className='collection-item'>Si temps plein → Régime temps plein</li>
                        <li className='collection-item'>Si temps partiel dont rémunération inf. à 1625,72€ → Régime temps partiel. </li>
                        <li className='collection-item'>Si temps partiel dont rémunération au moins égale à 1625, 72€ → Régime temps plein.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PartTimeInfos