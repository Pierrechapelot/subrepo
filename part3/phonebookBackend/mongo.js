// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//  console.log('Please provide the password as an argument: node mongo.js <password>')
//  process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://pierrechapelot:${password}@kformation.bsi64fq.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=KFormation`

// const personSchema = new mongoose.Schema({
//  name: String,
//  number: String,
// })

// const Person = mongoose.model('Person', personSchema)

// mongoose
//  .connect(url)
//  .then((result) => {
//    console.log('connected')

//    const person = new Person({
//      name: process.argv[3],
//      number: process.argv[4],
//    })
//  if (process.argv.length < 4) {
//   return   Person.find({}).then(result => {
//     result.forEach(person => {
//       console.log(person)
//     })
//     mongoose.connection.close()
//   })
//  } else {
//    return person.save()
//  }
//  })
//  .then(() => {
//    console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
//    return mongoose.connection.close()
//  })
//  .catch((err) => console.log(err))