const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);  // array in array  
console.log(marvel_heros[3][1]); // flash  (not a good way)

const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);  // merges 2 array properly

const all_new_heros = [...marvel_heros,...dc_heros]  //SPREAD OPERATOR
console.log(all_new_heros); // merges 2 array properly // prefered

const another_array = [1,2,3, [4,5,6],7,[6,7, [4,5]]] //array within array within array
const usable_another_array = another_array.flat(Infinity)  // infinity -> depth
console.log(usable_another_array);   // [1,2,3,4,5,6,7,6,7,4,5] //all values spread out

console.log(Array.isArray("Aditya"))   //false
console.log(Array.from("Aditya"))   //converts string to array ['A','d','i','t','y','a']

console.log(Array.from({name: "Aditya"})) // intresting (array from object)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [100, 200, 300] (makes array)

//________________________________________________________
