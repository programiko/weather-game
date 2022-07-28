const port = process.env.PORT || 3000
app.listen(port, () => {
console.log('Server is up on port ' + port)
})
/*
console.log("firts run");

const fs = require('fs')
fs.writeFileSync('notes.txt', 'I live in Philadelphia and I gona...')

const validator = require('validator')
console.log(validator.isURL('https/mead.io')) // Print: true
*/