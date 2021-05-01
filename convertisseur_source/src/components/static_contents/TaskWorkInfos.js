import React from 'react'

const TaskWorkInfos = () => {
    return (
        <>
            <div className="card-panel">
                <i className='material-icons orange-txt'>filter_1</i>
                <p>
                    <b>Le nombre de jours au cachet est plafonné par trimestre civil </b>
                    (jan - mars, avr - juin, juill - sept, oct - déc ).
                    <b>Cet outil calcule vos jours “contrat par contrat” et ne permet pas, à l’heure actuelle, de déterminer le plafond trimestriel en cas de cumul de contrat. </b>
                    Vérifiez donc attentivement vos cachets par trimestre civil. Au besoin, n’hésitez pas à vous faire aider.
                </p>
                <p>
                    Le plafond est déterminé <b>selon la formule suivante</b> :
                    on compte autant de fois 26 jours qu’il y a de mois au cours desquels
                    l’artiste a travaillé au cachet, augmenté de 78 jours par trimestre civil au cours duquel se situe l’activité.
                </p>
                <ul className="collection">
                    <li className="collection-item">MAX 104 jours ONEM dès qu’il y a au moins 1 contrat sur 1 des trois mois du trimestre :
                        <br/><b className="txt-orange">1 (mois) X 26 + 78 </b></li>
                    <li className="collection-item">MAX 130 jours ONEM dès qu’il y a au moins 1 contrat par mois sur 2 mois du trimestre :
                        <br/><b className="txt-orange">2 (mois) x 26 + 78</b></li>
                    <li className="collection-item">MAX 156 jours ONEM dès qu’il y a au moins 1 contrat par mois sur les 3 mois du trimestre <br/><b className="txt-orange">3 (mois) x 26 + 78</b></li>
                </ul>
            </div>
            <div className="card-panel">
                <i className='material-icons orange-txt'>filter_2</i>
                <p>
                    Le caractère artistique de la fonction du contrat est sujet à interprétation.
                    Il n’existe pas de définition de ce qu’est un artiste dans la réglementation chômage,
                    seulement de ce que l’on entend par activité dite artistique.
                    Dans la pratique, l’ONEM se réfère à une liste de fonctions pour
                    déterminer le caractère artistique ou non de la prestation et donc l’utilisation possible de la règle du cachet.
                    Vous pouvez notamment consulter cette liste dans le <a
                    href="https://ladds.be/ne-dites-plus-statut-de-lartiste-quand-il-sagit-dassurance-chomage-la-reglementation-du-chomage-a-destination-des-artistes-et-techniciens-du-secteur-artistique/
" rel='noopener noreferrer' target="_blank"> document suivant</a> édité par l’Atelier des droits sociaux.
                </p>
            </div>
            <div className="card-panel">
                <i className='material-icons orange-txt'>filter_3</i>
                <p>
                    Si vous cumulez des contrats au cachet avec des contrats “ordinaires” (temps plein ou partiel)
                    au cours du même trimestre civil, les plafonds existants peuvent être cumulés.
                    Vous pouvez donc aller jusqu’à 156 jours + 78 jours de travail par trimestre civil.
                </p>
            </div>
        </>
    )
}

export default TaskWorkInfos