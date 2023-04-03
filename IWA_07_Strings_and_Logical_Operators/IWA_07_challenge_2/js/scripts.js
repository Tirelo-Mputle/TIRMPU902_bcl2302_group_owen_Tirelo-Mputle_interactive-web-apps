const nickname = "Timmy";
const firstname = "Timothy";

console.log(`Good Morning, ${`${nickname ?? firstname}`}!`);

/* Double quotes were used instead a backtick to create
    the template literal.
    Unless the nickname variable is undefined or null, it will
    be the result of the evaulation in the console.log.
    If it is null or undefined the result will be the firstname
    variable.
     */
