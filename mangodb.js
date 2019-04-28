// alt+shift+f formats code
console.log('How is it going?')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'firstDatabase'
const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
console.log(id.id.length) // the length of the file
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to the database.')
    }
    const db = client.db(dataBaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Steve',
    //     address: '1204 Western Ave',
    //     city: 'Xandadu',
    //     state: 'Kentucky',
    //     apples: 14
    //     })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Sally',
    //         address: '123 University Ave'
    //     },
    //     {
    //         name: 'snoopy',
    //         address: '999 Stilton ST'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to save to the database.')
    //     }
    //     console.log(result.ops)
    // })

    //insert 3 tasks into a new tasks collection
    // insert 3 documents
    // db.collection('tasks').insertMany([
    //     {
    //         task: 'eat vegeatables',
    //         dueDate: 'Monday',
    //         completed: false
    //     },
    //     {
    //         task: 'buy a puppy',
    //         dueDate: 'Wednesday',
    //         completed: false
    //     },
    //     {
    //         task: 'go to the moon',
    //         dueDate: 'Friday',
    //         completed: true
    //     }
    // ],(error,result) =>{
    //     if(error){
    //         console.log('Unable to save to the database.')
    //     }
    //     console.log(result.ops)
    // })



})

// process.exit()