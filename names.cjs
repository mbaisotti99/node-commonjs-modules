
const nameFunc = (name, surn) =>{
    let result = {firstName: name, lastName: surn}
    return result;
}
console.log(nameFunc(process.argv[2], process.argv[3]));

module.Exports = {nome: nameFunc}