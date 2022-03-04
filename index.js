var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// Use Chance here.
var my_random_string = chance.string();

var random_Stuff = {
    string: chance.string(),
    phone: chance.phone(),
    uuid: chance.guid(),
}

console.log('random_Stuff',random_Stuff);