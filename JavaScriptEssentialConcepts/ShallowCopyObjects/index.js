const usersArray = [
    {
        userName: 'Tom',
        password: '123456'
    }
]

// Making a shallow copy here
// Meaning that the properties of userObj share the same 
// references with original source obj (point to the same underlying values)
// Changing one property in the copy will affect the original
const userObj = usersArray[0]

userObj.userName = 'Wayne'

console.log(usersArray)
console.log(userObj)