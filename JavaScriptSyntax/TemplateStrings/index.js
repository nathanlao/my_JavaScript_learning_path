// template strings/literals

const recipient = "James"
const sender = "Nathan"

// Refactor and break the email string into lines to use template strings
const email = `
Hey ${recipient}! 
How is it going? 
Cheers ${sender}
`

console.log(email)