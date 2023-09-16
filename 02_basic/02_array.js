const marval_heros = ["THOR", "iRONMAN", "spider"]
const dc_hero = ["superman", "flash", "batman"]

// marval_heros.push(dc_hero)
// console.log(marval_heros[3] [0]);

// const allHeros= marval_heros.concat(dc_hero)
// console.log(allHeros);
// const all_new_heros = [...marval_heros, ...dc_hero]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("shivam"))
console.log(Array.from("shivam"))
console.log(Array.from({name: "shivam"})) // interseting

let score1 = 100;
let score2 = 10;
console.log(Array.of (score1 , score2));


//isArray ,ofArray, from array