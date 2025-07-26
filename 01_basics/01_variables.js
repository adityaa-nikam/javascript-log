const accountId = 144553
let accountEmail = "adiityaa.nikam@gmail.com"
accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2            // not allowed 

accountEmail = "abab@gmail.com"
accountPassword = "212121"
accountCity = "Pimpri"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
beacause of issue in block scope and functional scope
*/