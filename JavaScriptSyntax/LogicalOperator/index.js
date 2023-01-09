let hasCompleted = true
let givesCertificate = true

// AND operator
if (hasCompleted === true && givesCertificate === true) {
    generateCertificate()   
}

// if (hasCompleted && givesCertificate) {
//     generateCertificate()   
// }

// OR operator
if (hasCompleted === true || givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Yess")
}