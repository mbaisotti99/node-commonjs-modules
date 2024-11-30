// const functions = require("./names.js");
// const functions2 = require("./hobbies.js");

import functions from "./names.js";
import functionz from "./hobbies.js";
import chalk from "chalk";

const buildPerson = () =>{
    let person = {
        fullName: functions.name("ASDDAS", "ASD"),
        hobby: functionz.hobbs("A", "B", "CC")
    }
    return person
}

console.log(buildPerson());

console.log(chalk.bgGreen(buildPerson())); //????????????????????????
