import React, {useState} from 'react'


const Task = (
    {
        taskStartDate,
        setStartDate,
        taskEndDate,
        setEndDate,
        taskPay,
        setTaskPay
    }
) => {
    return (
        <>
            <p>
                Le fait de bénéficier d’une rémunération dite “à la tâche” ne concerne que le travailleur “artiste” (code ONSS 46 sur le C4)
                et doit ressortir du contrat de travail et du C4. En pratique, sous le “salaire brut moyen théorique” inscrit sur le C4,
                il sera coché, pour la rémunération, soit “à la tâche (cachet) dans le cadre d’un contrat de travail portant sur l’exercice
                d’une activité artistique”,
                soit “soumis à la sécurité sociale des travailleurs salariés en vertu de l’article 1bis de la loi du 27.06.1969”.
            </p>
            <div className="row card-panel">
                <div className="col s4 input-field">
                    <p>Date de début de contrat</p>
                    <input  placeholder='' id="start_date" type="date" className='validate' value={taskStartDate} onChange={e => setStartDate(e.target.value)} />
                    {
                        taskStartDate && taskEndDate && taskStartDate > taskEndDate &&
                        <span className="helper-text red-text">La date de fin ne peut précéder la date du début</span>
                    }
                </div>
                <div className="col s4 input-field">
                    <p>Date de fin de contrat</p>
                    <input  placeholder='' id="start_date" type="date" value={taskEndDate} onChange={e => setEndDate(e.target.value)} />
                </div>
                <div className="col s4 input-field">
                    <p>Rémunération brute (€)</p>
                    <input id="pay" type="number" value={taskPay} onChange={e => setTaskPay(e.target.value)} />
                </div>
            </div>
        </>
    )
}

export default Task