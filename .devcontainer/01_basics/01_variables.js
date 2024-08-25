const accountId = 2267216
let accountEmail = "ruchiwk189@gmail.com"
var accountPassword = "276536281"
accountCity = "Bengaluru"
let accountState; // agr hm value assigned nhii krenge to result me hme js undefined dega
// js me hm bss const ar let hi use krenge 

/*
Prefer not to use var because of issue in block scope and functional scope
*/

// accountId = 2    #not allowed(assignment to constant variable is not allowed kyu ki accountId ko hmne const keyword ke sath use kia hai)
accountEmail = "djhwh@gmail.com"
accountPassword = "3456789"
accountCity = "gfcsadgvh"
// {} = isse scope bolte hai
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);