const functions = import("./names.cjs")
const functions2 = import("./hobbies.cjs")

const buildPerson = () =>{
    let person = {
        fullName: functions.nome("ASDDAS", "ASD"),
        hobby: functions2.hobbs("A", "B", "CC")
    }
}

console.log(buildPerson());
