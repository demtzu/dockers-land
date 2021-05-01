import React from 'react'
import styled from "styled-components"
import {Tab, Tabs} from "react-materialize"
import Collapsible from "react-materialize/lib/Collapsible"
import CollapsibleItem from "react-materialize/lib/CollapsibleItem"

const MarginContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
  @media (max-width: 1024px) {
    margin-top: 0px;
  }
`

const OrangeTd = styled.td`
  background-color: #EC6D48; 
  color: white;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`

const StyledTab = styled(Tab)`
  background: white;
  padding: 16px !important;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
`

const StyledTabs = styled(Tabs)`

`

const Infos = () => {
    return (
        <MarginContainer>
            <div className="infos">
                <StyledTabs className="tab-demo z-depth-1 tabs-fixed-width">
                    <StyledTab
                        active
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="le chômage Kezako ?"
                    >
                        <p>
                            <b className="txt-orange">Peu importe votre métier</b>, votre activité professionnelle en tant que salarié vous octroie un
                            droit à un revenu de remplacement en cas de perte d’emploi. Ce droit est déterminé en fonction de
                            votre période d’activité précédant la demande d’allocations de chômage (<b>Etape 1</b>).
                        </p>
                        <div>
                            <b className="txt-orange">Si vous êtes artiste ou technicien du secteur artistique</b>, deux autres étapes en plus sont importantes :
                            <ul className='collection'>
                                <li className="collection-item">bloquer la dégressivité de l’allocation ( mal nommé “statut d’artiste”- <b>Etape 2</b>),</li>
                                <li className='collection-item'>renouveler chaque année votre allocation “protégée” (<b>Etape 3</b>).</li>
                            </ul>
                        </div>
                    </StyledTab>
                    <StyledTab
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Etape 1"
                    >
                        <h5>Ouvrir un droit au chômage</h5>
                        <p>
                            Pour être admis aux allocations de chômage à temps plein, vous devez avoir travaillé comme salarié
                            sur une période déterminée avant la demande d’allocations. La durée de cette période dépend de votre âge
                            au moment de la demande d’allocations :
                        </p>
                        <br/>
                        <table border={1}>
                            <tbody>
                            <tr>
                                <OrangeTd>
                                    <b>Durée du stage pour le travailleur salarié à temps plein</b>
                                </OrangeTd>
                            </tr>
                            </tbody>
                        </table>

                        <ul className="collection with-header">
                            <li className="collection-header"><h5>Moins de  36 ans</h5></li>
                            <li className="collection-item">312 jours ( = 12 mois) dans les 21 mois précédant la demande d’allocations</li>
                            <li className="collection-item">468 jours ( = 18 mois) dans les 33 mois précédant la demande</li>
                            <li className="collection-item">624 jours ( = 24 mois) dans les 42 mois précédant la demande</li>
                        </ul>

                        <ul className="collection with-header">
                            <li className="collection-header"><h5>De 36 à 49 ans</h5></li>
                            <li className="collection-item">468 jours ( = 18 mois) dans les 33 mois précédant la demande</li>
                            <li className="collection-item">624 jours ( = 24 mois) dans les 42 mois précédant la demande</li>
                            <li className="collection-item">234 jours ( = 9 mois) dans les 33 mois + 1560 jours ( = 60 mois ou 5 ans) dans les 10 ans avant les 33 mois</li>
                            <li className="collection-item">312 jours dans les 33 mois + pour chaque jour qui manque pour arriver à 468 jours, 8 jours de travail dans la période de 10 ans avant les 33 mois</li>
                        </ul>

                        <ul className="collection with-header">
                            <li className="collection-header"><h5>50 ans et plus</h5></li>
                            <li className="collection-item">624 jours ( = 24 mois) dans les 42 mois précédant la demande</li>
                            <li className="collection-item">312 jours dans les 42 mois + 1560 jours ( = 60 mois ou 5 ans) dans les 10 ans avant les 42 mois</li>
                            <li className="collection-item">416 jours ( = 16 mois) dans les 42 mois + pour chaque jour qui manque pour arriver à 624 jours, 8 jours de travail dans la période de 10 ans avant les 42 mois</li>
                        </ul>

                        <br/>
                        <p>
                            La période de référence (21 mois, 33 mois ou 42 mois) peut être prolongée par
                            <a href="https://www.onem.be/fr/documentation/feuille-info/t31"
                               rel='noopener noreferrer'
                               target='_blank'
                            >
                                &nbsp;certains événements
                            </a>.
                            Par contre, elle n’est pas prolongée par la période de crise COVID que nous connaissons depuis mars 2020!
                        </p>
                        <br/>
                        <div>
                            <b className='alert-text'>! Mesure COVID !</b><br/>
                            <b>Un droit temporaire (= du 1er avril 2020 au 30 juin 2021)</b> aux allocations de
                            chômage est possible pour les artistes et techniciens du secteur artistique qui
                            ne prouvent pas le nombre de jours de travail nécessaires à l’ouverture d’un
                            droit au chômage mais justifient, sur la période allant du 13 mars 2019 au 13 mars 2020 :
                            <br/>
                            <ul className="collection">
                                <li className="collection-item">
                                    soit de 10 activités artistiques avec retenues ONSS
                                </li>
                                <li className="collection-item">
                                    soit de 10 activités techniques dans le secteur artistique avec retenues ONSS
                                </li>
                                <li className="collection-item">
                                    soit d’activités artistiques et/ou techniques dans le secteur artistique et qui sont équivalentes à au moins 20 jours de travail selon la règle dite “du cachet”
                                </li>
                            </ul>
                        </div>
                    </StyledTab>
                    <StyledTab
                        active={false}
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Etape 2"
                    >
                        <h5>Bloquer la dégressivité de l’allocation</h5>
                        <br/>
                        <p>
                            Pour obtenir la protection comme artiste ou technicien (mal nommé “statut d’artiste”), vous devez prouver
                            <b className="txt-orange"> 156 journées de travail salarié</b> dans les 18 mois qui précèdent la fin de la première période d’indemnisation de chômage
                            (= initialement 12 mois mais prolongeable par
                            <a href="https://www.onem.be/fr/documentation/feuille-info/t31"
                               rel='noopener noreferrer'
                               target='_blank'
                            >
                                &nbsp;certains événements
                            </a>). De ces 156 jours,
                            <b className="txt-orange"> 104 jours</b> au moins doivent être constitués de journées de travail artistiques
                            ou techniques dans le secteur artistique.
                        </p>
                        <br/>
                        <div>
                            <b className='alert-text'>! Mesure COVID !</b><br/>
                            <ul className="collection">
                                <li className="collection-item">
                                    Votre <b>première période d’indemnisation</b> qui dure initialement 12 mois, sauf événements
                                    prolongateurs, est <b>d’office prolongée</b> par la période qui va du 1er avril 2020 au 30 juin 2021
                                </li>
                                <li className="collection-item">
                                    La <b>période de référence de 18 mois</b> durant laquelle vous devez prouver 156 jours de
                                    travail (dont au moins 104 sont artistiques ou techniques) est <b>prolongée de la période allant
                                    du 13 mars 2020 au 30 juin 2021</b>
                                </li>
                            </ul>
                        </div>
                    </StyledTab>
                    <StyledTab
                        active={false}
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Etape 3"
                    >
                        <h5>Renouveler la protection</h5>
                        <br/>
                        <div>
                            Une fois votre allocation “protégée”, vous devez renouveler cette protection tous les 12 mois au moyen de:
                            <br/>
                            <ul className="collection">
                                <li className="collection-item">
                                    si vous êtes artiste: 3 prestations artistiques qui correspondent à au moins 3 journées de travai
                                </li>
                                <li className="collection-item">
                                    si vous êtes technicien du secteur artistique: 3 contrats de travail de courte durée (= moins de 3 mois)
                                    dans le secteur artistique, qui correspondent à au moins 3 journées de travail
                                </li>
                            </ul>
                        </div>
                        <div>
                            <br/>
                            <b className='alert-text'>! Mesure COVID !</b><br/>
                            <ul className="collection">
                                <li className="collection-item">
                                    Pour le travailleur qui bénéficie déjà d’une protection comme artiste ou technicien du secteur artistique et dont le renouvellement de la protection devait se faire
                                    entre le 13 mars et le 30 juin 2021, <b>la protection est d’office prolongée jusqu’au 30 juin 2021 inclus</b>
                                </li>
                                <li className="collection-item">
                                    Pour le renouvellement de la protection, la période de référence de 12 mois
                                    au cours de laquelle le travailleur doit prouver 3 prestations artistiques ou 3
                                    contrats techniques de courte durée dans le secteur artistique, est
                                    <b> prolongée de la période qui va du 13 mars 2020 au 30 juin 2021 inclus</b>.
                                </li>
                            </ul>
                        </div>
                    </StyledTab>
                    <StyledTab
                        active={false}
                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title="Quels jours sont pris en compte ?"
                    >
                        <div>
                            Les journées prises en compte sont les journées de travail salarié.
                            Cela signifie qu’elles répondent à ces différentes caractéristiques :
                            <br/>
                            <ul className="collection">
                                <li className="collection-item">
                                    il s’agit de journées de travail <b>effectives (prestées) ou “assimilées”</b>.
                                    Ex. de journées assimilées : les journées de maladie rémunérées par l’employeur ou la mutuelle,
                                    les journées couvertes par le chômage temporaire (dont le chômage temporaire dit “Corona”), etc.
                                    Les journées sans solde (maladie non-couverte, absences non rémunérées, congés sans solde)
                                    ne peuvent pas être comptabilisées! <br/>
                                    <b className="txt-orange">Attention: Pour l’étape 2 et 3</b>, seules les prestations de travail effectives comptent, pas les journées assimilées!
                                </li>
                                <li className="collection-item">
                                    Ces journées ont donné lieu à une rémunération dite suffisante, à savoir 62,53€/jour (au 1er mars 2020)
                                </li>
                                <li className="collection-item">
                                    Sur ces journées ont été prélevées 13,07% de cotisations sociales sur le salaire brut.
                                    Cela est visible sur la fiche de paie. Ne sont donc par exemple pas concernés,
                                    le contrat d’occupation étudiant, le travail dans le cadre du RPI (régime des petites indemnités),
                                    le travail exécuté dans le cadre de “l’article 17”
                                </li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            Concernant le travail à l’étranger:
                            <ul className="collection">
                                <li className="collection-item">
                                    Si le contrat a été effectué à l’étranger mais avec des cotisations sociales versées en Belgique, les journées de travail comptent.
                                </li>
                                <li className="collection-item">
                                    Si le contrat a été effectué à l’étranger mais avec des cotisations sociales versées dans le pays étranger,
                                    il faut savoir que des périodes à l’étranger ne peuvent être prises en compte que si elles
                                    se situent dans un pays avec lequel la Belgique a conclu un accord. En conséquence de cela :
                                    <br/><br/>
                                    <span className="italic">
                                    *le travail ne compte pas dans tous les pays du monde.
                                    A l’heure actuelle, seul le travail salarié effectué dans un pays de l’EEE, en Suisse,
                                    en Bosnie-Herzégovine, au Monténégro ou en ARY de Macédoine, peut être pris en compte
                                </span>
                                    <br/><br/>
                                    <span className="italic">
                                    *le travail pris en compte ne concerne pas nécessairement les ressortissants de tous les pays.
                                    Par exemple, seuls les ressortissants UE, suisses (et les réfugiés et apatrides)
                                    peuvent faire valoir du travail en Suisse. Mais tous les ressortissants peuvent
                                    faire valoir du travail en Bosnie ;
                                 </span>
                                    <br/><br/>
                                    <span className="italic">
                                    En outre, si le travail peut être pris en compte, il doit être suivi de 3 mois
                                    de travail salarié de date à date en Belgique (= 78 jours en régime 6 jours/semaine
                                    ou 65 jours en régime 5 jours/semaine) avant la demande d’allocations de chômage.
                                    Voire 6 mois s’il a été effectué en Bosnie, Macédoine ou au Monténégro.
                                </span>
                                </li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <b>Attention!</b>
                            <ul className="collection">
                                <li className="collection-item">
                                    Il existe des <b>exceptions</b> à la condition dite “des 3/6 mois” si vous êtes considéré comme
                                    travailleur frontalier ou si vous travaillez temporairement à l’étranger
                                    tout en conservant votre centre d’intérêt en Belgique. Mais ces exceptions doivent être
                                    prises avec prudence. Elles doivent s’accompagner de preuves et font régulièrement l’objet
                                    d’instructions internes à l’administration de l’ONEm.
                                </li>
                                <li className="collection-item">
                                    <b>Si le travail à l’étranger ne peut être pris en compte</b>,
                                    il permet néanmoins de prolonger votre période de référence (de 21, 33 ou 42 mois)
                                </li>
                            </ul>
                            <br/>
                        </div>
                        <p>
                            Cette réglementation est complexe.
                            N’hésitez donc pas à vous faire conseiller. Pour plus d’informations en cette matière,
                            vous pouvez notamment consulter la brochure suivante éditée par l’<a rel="noreferrer noopener" target="_blank" href="https://ladds.be/ladmission-au-chomage-des-etrangers-en-belgique-un-droit-vraiment-accessible-a-tous/">Atelier des droits sociaux</a>
                        </p>
                    </StyledTab>
                </StyledTabs>
            </div>


            <div className="only-mobile">
                <Collapsible>
                    <CollapsibleItem header={'Le chômage Kezako?'} onSelect={null}>
                        <p>
                            <b className="txt-orange">Peu importe votre métier</b>, votre activité professionnelle en tant que salarié vous octroie un
                            droit à un revenu de remplacement en cas de perte d’emploi. Ce droit est déterminé en fonction de
                            votre période d’activité précédant la demande d’allocations de chômage (<b>Etape 1</b>).
                        </p>
                        <div>
                            <b className="txt-orange">Si vous êtes artiste ou technicien du secteur artistique</b>, deux autres étapes en plus sont importantes :
                            <ul className='collection'>
                                <li className="collection-item">bloquer la dégressivité de l’allocation ( mal nommé “statut d’artiste”- <b>Etape 2</b>),</li>
                                <li className='collection-item'>renouveler chaque année votre allocation “protégée” (<b>Etape 3</b>).</li>
                            </ul>
                        </div>
                    </CollapsibleItem>
                    <CollapsibleItem header={'Etape1: Ouvrir un droit au chômage'} onSelect={null}>
                        <p>
                            Pour être admis aux allocations de chômage à temps plein, vous devez avoir travaillé comme salarié
                            sur une période déterminée avant la demande d’allocations. La durée de cette période dépend de votre âge
                            au moment de la demande d’allocations :
                        </p>
                        <table border={1}>
                            <tbody>
                            <tr>
                                <OrangeTd>
                                    <b>Durée du stage pour le travailleur salarié à temps plein</b>
                                </OrangeTd>
                            </tr>
                            </tbody>
                        </table>

                        <ul className="collection with-header">
                            <li className="collection-header"><h5>Moins de  36 ans</h5></li>
                            <li className="collection-item">312 jours ( = 12 mois) dans les 21 mois précédant la demande d’allocations</li>
                            <li className="collection-item">468 jours ( = 18 mois) dans les 33 mois précédant la demande</li>
                            <li className="collection-item">624 jours ( = 24 mois) dans les 42 mois précédant la demande</li>
                        </ul>

                        <ul className="collection with-header">
                            <li className="collection-header"><h5>De 36 à 49 ans</h5></li>
                            <li className="collection-item">468 jours ( = 18 mois) dans les 33 mois précédant la demande</li>
                            <li className="collection-item">624 jours ( = 24 mois) dans les 42 mois précédant la demande</li>
                            <li className="collection-item">234 jours ( = 9 mois) dans les 33 mois + 1560 jours ( = 60 mois ou 5 ans) dans les 10 ans avant les 33 mois</li>
                            <li className="collection-item">312 jours dans les 33 mois + pour chaque jour qui manque pour arriver à 468 jours, 8 jours de travail dans la période de 10 ans avant les 33 mois</li>
                        </ul>

                        <ul className="collection with-header">
                            <li className="collection-header"><h5>50 ans et plus</h5></li>
                            <li className="collection-item">624 jours ( = 24 mois) dans les 42 mois précédant la demande</li>
                            <li className="collection-item">312 jours dans les 42 mois + 1560 jours ( = 60 mois ou 5 ans) dans les 10 ans avant les 42 mois</li>
                            <li className="collection-item">416 jours ( = 16 mois) dans les 42 mois + pour chaque jour qui manque pour arriver à 624 jours, 8 jours de travail dans la période de 10 ans avant les 42 mois</li>
                        </ul>
                        <p>
                            La période de référence (21 mois, 33 mois ou 42 mois) peut être prolongée par
                            <a href="https://www.onem.be/fr/documentation/feuille-info/t31"
                               rel='noopener noreferrer'
                               target='_blank'
                            >
                                &nbsp;certains événements
                            </a>.
                            Par contre, elle n’est pas prolongée par la période de crise COVID que nous connaissons depuis mars 2020!
                        </p>
                        <div>
                            <b className='alert-text'>! Mesure COVID !</b><br/>
                            <b>Un droit temporaire (= du 1er avril 2020 au 30 juin 2021)</b> aux allocations de
                            chômage est possible pour les artistes et techniciens du secteur artistique qui
                            ne prouvent pas le nombre de jours de travail nécessaires à l’ouverture d’un
                            droit au chômage mais justifient, sur la période allant du 13 mars 2019 au 13 mars 2020 :
                            <ul className="collection">
                                <li className="collection-item">
                                    soit de 10 activités artistiques avec retenues ONSS
                                </li>
                                <li className="collection-item">
                                    soit de 10 activités techniques dans le secteur artistique avec retenues ONSS
                                </li>
                                <li className="collection-item">
                                    soit d’activités artistiques et/ou techniques dans le secteur artistique et qui sont équivalentes à au moins 20 jours de travail selon la règle dite “du cachet”
                                </li>
                            </ul>
                        </div>
                    </CollapsibleItem>
                    <CollapsibleItem header={'Etape2: Bloquer la dégressivité de l’allocation'} onSelect={null}>
                        <p>
                            Pour obtenir la protection comme artiste ou technicien (mal nommé “statut d’artiste”), vous devez prouver
                            <b className="txt-orange"> 156 journées de travail salarié</b> dans les 18 mois qui précèdent la fin de la première période d’indemnisation de chômage
                            (= initialement 12 mois mais prolongeable par
                            <a href="https://www.onem.be/fr/documentation/feuille-info/t31"
                               rel='noopener noreferrer'
                               target='_blank'
                            >
                                &nbsp;certains événements
                            </a>). De ces 156 jours,
                            <b className="txt-orange"> 104 jours</b> au moins doivent être constitués de journées de travail artistiques
                            ou techniques dans le secteur artistique.
                        </p>
                        <div>
                            <b className='alert-text'>! Mesure COVID !</b><br/>
                            <ul className="collection">
                                <li className="collection-item">
                                    Votre <b>première période d’indemnisation</b> qui dure initialement 12 mois, sauf événements
                                    prolongateurs, est <b>d’office prolongée</b> par la période qui va du 1er avril 2020 au 30 juin 2021
                                </li>
                                <li className="collection-item">
                                    La <b>période de référence de 18 mois</b> durant laquelle vous devez prouver 156 jours de
                                    travail (dont au moins 104 sont artistiques ou techniques) est <b>prolongée de la période allant
                                    du 13 mars 2020 au 30 juin 2021</b>
                                </li>
                            </ul>
                        </div>
                    </CollapsibleItem>
                    <CollapsibleItem header={'Etape 3: Renouveler la protection'} onSelect={null}>
                        <div>
                            Une fois votre allocation “protégée”, vous devez renouveler cette protection tous les 12 mois au moyen de:
                            <ul className="collection">
                                <li className="collection-item">
                                    si vous êtes artiste: 3 prestations artistiques qui correspondent à au moins 3 journées de travai
                                </li>
                                <li className="collection-item">
                                    si vous êtes technicien du secteur artistique: 3 contrats de travail de courte durée (= moins de 3 mois)
                                    dans le secteur artistique, qui correspondent à au moins 3 journées de travail
                                </li>
                            </ul>
                        </div>
                        <div>
                            <b className='alert-text'>! Mesure COVID !</b><br/>
                            <ul className="collection">
                                <li className="collection-item">
                                    Pour le travailleur qui bénéficie déjà d’une protection comme artiste ou technicien du secteur artistique et dont le renouvellement de la protection devait se faire
                                    entre le 13 mars et le 30 juin 2021, <b>la protection est d’office prolongée jusqu’au 30 juin 2021 inclus</b>
                                </li>
                                <li className="collection-item">
                                    Pour le renouvellement de la protection, la période de référence de 12 mois
                                    au cours de laquelle le travailleur doit prouver 3 prestations artistiques ou 3
                                    contrats techniques de courte durée dans le secteur artistique, est
                                    <b> prolongée de la période qui va du 13 mars 2020 au 30 juin 2021 inclus</b>.
                                </li>
                            </ul>
                        </div>
                    </CollapsibleItem>
                    <CollapsibleItem header={'Quels jours sont pris en compte?'} onSelect={null}>
                        <div>
                            Les journées prises en compte sont les journées de travail salarié.
                            Cela signifie qu’elles répondent à ces différentes caractéristiques :
                            <ul className="collection">
                                <li className="collection-item">
                                    il s’agit de journées de travail <b>effectives (prestées) ou “assimilées”</b>.
                                    Ex. de journées assimilées : les journées de maladie rémunérées par l’employeur ou la mutuelle,
                                    les journées couvertes par le chômage temporaire (dont le chômage temporaire dit “Corona”), etc.
                                    Les journées sans solde (maladie non-couverte, absences non rémunérées, congés sans solde)
                                    ne peuvent pas être comptabilisées! <br/>
                                    <b className="txt-orange">Attention: Pour l’étape 2 et 3</b>, seules les prestations de travail effectives comptent, pas les journées assimilées!
                                </li>
                                <li className="collection-item">
                                    Ces journées ont donné lieu à une rémunération dite suffisante, à savoir 62,53€/jour (au 1er mars 2020)
                                </li>
                                <li className="collection-item">
                                    Sur ces journées ont été prélevées 13,07% de cotisations sociales sur le salaire brut.
                                    Cela est visible sur la fiche de paie. Ne sont donc par exemple pas concernés,
                                    le contrat d’occupation étudiant, le travail dans le cadre du RPI (régime des petites indemnités),
                                    le travail exécuté dans le cadre de “l’article 17”
                                </li>
                            </ul>
                        </div>
                        <div>
                            Concernant le travail à l’étranger:
                            <ul className="collection">
                                <li className="collection-item">
                                    Si le contrat a été effectué à l’étranger mais avec des cotisations sociales versées en Belgique, les journées de travail comptent.
                                </li>
                                <li className="collection-item">
                                    Si le contrat a été effectué à l’étranger mais avec des cotisations sociales versées dans le pays étranger,
                                    il faut savoir que des périodes à l’étranger ne peuvent être prises en compte que si elles
                                    se situent dans un pays avec lequel la Belgique a conclu un accord. En conséquence de cela :
                                    <br/><br/>
                                    <span className="italic">
                                    *le travail ne compte pas dans tous les pays du monde.
                                    A l’heure actuelle, seul le travail salarié effectué dans un pays de l’EEE, en Suisse,
                                    en Bosnie-Herzégovine, au Monténégro ou en ARY de Macédoine, peut être pris en compte
                                </span>
                                    <br/><br/>
                                    <span className="italic">
                                    *le travail pris en compte ne concerne pas nécessairement les ressortissants de tous les pays.
                                    Par exemple, seuls les ressortissants UE, suisses (et les réfugiés et apatrides)
                                    peuvent faire valoir du travail en Suisse. Mais tous les ressortissants peuvent
                                    faire valoir du travail en Bosnie ;
                                 </span>
                                    <br/><br/>
                                    <span className="italic">
                                    En outre, si le travail peut être pris en compte, il doit être suivi de 3 mois
                                    de travail salarié de date à date en Belgique (= 78 jours en régime 6 jours/semaine
                                    ou 65 jours en régime 5 jours/semaine) avant la demande d’allocations de chômage.
                                    Voire 6 mois s’il a été effectué en Bosnie, Macédoine ou au Monténégro.
                                </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <b>Attention!</b>
                            <ul className="collection">
                                <li className="collection-item">
                                    Il existe des <b>exceptions</b> à la condition dite “des 3/6 mois” si vous êtes considéré comme
                                    travailleur frontalier ou si vous travaillez temporairement à l’étranger
                                    tout en conservant votre centre d’intérêt en Belgique. Mais ces exceptions doivent être
                                    prises avec prudence. Elles doivent s’accompagner de preuves et font régulièrement l’objet
                                    d’instructions internes à l’administration de l’ONEm.
                                </li>
                                <li className="collection-item">
                                    <b>Si le travail à l’étranger ne peut être pris en compte</b>,
                                    il permet néanmoins de prolonger votre période de référence (de 21, 33 ou 42 mois)
                                </li>
                            </ul>
                        </div>
                        <p>
                            Cette réglementation est complexe.
                            N’hésitez donc pas à vous faire conseiller. Pour plus d’informations en cette matière,
                            vous pouvez notamment consulter la brochure suivante éditée par l’<a rel="noreferrer noopener" target="_blank" href="https://ladds.be/ladmission-au-chomage-des-etrangers-en-belgique-un-droit-vraiment-accessible-a-tous/">Atelier des droits sociaux</a>
                        </p>
                    </CollapsibleItem>

                </Collapsible>
            </div>
        </MarginContainer>
    )
}

export default Infos