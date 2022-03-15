function createEmployeeRecord(array){
    return {
            firstName:array[0],
            familyName:array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents:[],
            timeOutEvents:[]
    }
}

function createEmployeeRecords(array){
    return array.map(e=>createEmployeeRecord(e))
}

function createTimeInEvent(record,stamp){
    record.timeInEvent.push({
                type:'TimeIn',
                hour: parseInt(stamp.substring(11,15)),
                date: stamp.substring(0,9)
            })
    return record
}
// createTimeInEvent({name:'Emma'},'2022-03-14 1200')

