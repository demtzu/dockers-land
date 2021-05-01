import moment from "moment";

export const ratesByDates = [
    {
        date: new Date('2020-03-01'),
        rate: 62.53
    },
    {
        date: new Date('2018-09-01'),
        rate: 61.30
    },
    {
        date: new Date('2017-06-01'),
        rate: 60.10
    },
    {
        date: new Date('2016-06-01'),
        rate: 58.92
    },
    {
        date: new Date('2015-01-01'),
        rate: 57.76
    },
    {
        date: new Date('2012-12-01'),
        rate: 39.21
    },
    {
        date: new Date('2012-02-01'),
        rate: 38.43
    },
    {
        date: new Date('2011-05-01'),
        rate: 37.68
    },
    {
        date: new Date('2011-01-01'),
        rate: 36.94
    },

    {
        date: new Date('2009-01-01'),
        rate: 36.22
    },
    {
        date: new Date('2008-09-01'),
        rate: 36.22
    },
    {
        date: new Date('2008-05-01'),
        rate: 35.51
    },
    {
        date: new Date('2008-01-01'),
        rate: 34.81
    },
    {
        date: new Date('2006-10-01'),
        rate: 34.13
    }
]


export const calculations = {
    'full': (workRegime, fullTimeDays, totalDays) => {
        if(fullTimeDays.length) {
            let tab =  divideInMonth(fullTimeDays.map(e => dateToMoment(e)), workRegime)

            tab = tab.map(e => e > 26 ? 26 : e)

            const effectiveDays =  tab.reduce(
                (accumulator, currentValue) => {
                    return  currentValue < 27 ? currentValue + accumulator : 26 + accumulator
                }
            )

            return Math.round( effectiveDays * 10000) / 10000
        }
        if(totalDays) {
            return workRegime === '5' ? totalDays * 1.2 : totalDays
        }
        return 'Une erreur est survenu.'
    },
    'partial': (partTimeHours, partTimeRegime) => Math.round( partTimeHours * 6 / partTimeRegime * 10000) / 10000  ,
    'task': (taskStartDate, taskEndDate, taskPay) => {
        const startDate = moment(taskStartDate)
        const endDate = moment(taskEndDate)
        const diff = endDate.diff(startDate, 'days')
        const gross = taskPay

        let result = 0

        for(let i = 0; i < diff + 1; ++i){
            const date =   moment(startDate.add(1, 'days').format('YYYY[-]MM[-]DD'))
            const rate = ratesByDates.find(e => moment(e.date) <= date).rate
            result += gross / (diff + 1)/ rate
        }
        return Math.abs(Math.round(result * 10000) / 10000)
    }
}

const dateToMoment =  date => {
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    return moment(`${year}-${month}-${day}`)
}

const divideInMonth = (days, workRegime) => {
    const months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    days.forEach( e => {
        if(workRegime === '5') months[ parseInt(e._i.split('-')[1] )-1] += 1.2
        else months[ parseInt(e._i.split('-')[1] )-1]++
    })

    return months
}


