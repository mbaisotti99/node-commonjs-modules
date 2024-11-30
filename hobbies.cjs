
const hobbies = (hobbyOne, hobbyTwo, hobbyThree) =>{
    let hobbyArr = [hobbyOne, hobbyTwo, hobbyThree]
    return hobbyArr
}

console.log(hobbies(process.argv[2], process.argv[3],process.argv[4]));

module.Exports = {hobbs: hobbies}