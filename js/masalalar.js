//MASALALAR

// 1-MASALA
////--------------------------------------------------------------------------

// const number = Number(prompt("sonni kiriting!"))
// const numberTwo = Number(prompt("2-sonni kiriting!"))
// const numberThree = Number(prompt("3-soni kiriting!"))

// let numberAr = [];

// if(number== String || numberTwo == String || numberThree == String){
//     console.log("xato");
//     error.classList.remove("d-none");

// }else{

//     numberAr.push(number)
//     numberAr.push(numberTwo)
//     numberAr.push(numberThree)

//     let calcNumber = function(Num){
//         let numberOne = 0
//         for(let num of numberAr){
//             numberOne += num
//         }
//         numberAr.push(numberOne)
//         return numberOne
//     }
//     console.log(calcNumber(numberAr));
// }








////--------------------------------------------------------------------------
// 2-MASALA
////--------------------------------------------------------------------------


// //1
// let array = ["Jazz", "Blues"]

// console.log(array);
// //2
// array.push("Rock-n-roll")

// console.log(array);
// //3
// array[Math.floor(array.length/2)] = "Classics"

// console.log(array);
// //4
// array.shift()

// console.log(array);

// //5
// array.unshift("Reggae")
// array.unshift("Rap")

// console.log(array);







////--------------------------------------------------------------------------
// 3-MASALA
////--------------------------------------------------------------------------

// let salaries = {
// 	"Akmal": 1200,
// 	"Salim": 5200,
// 	"Karima": 1800
// }
// const  sum = []

// const calcPay = function(pay){

//     let paySalaries = 0
//     for(let p of pay){
//         paySalaries += p
//     }
//     sum.push(paySalaries)

//     return sum
// }

// console.log(calcPay(Object.values(salaries)));







////--------------------------------------------------------------------------
// 4-MASALA
////--------------------------------------------------------------------------

//  const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//  let sonla = []

//   const calcSum = function(f){
//     let toqSon = 0
//     let juftSon = 0

//     for(let s of f){
//         if( s % 2 == 0){
//             juftSon += s
//         }else{
//             toqSon += s
//         }
//     }
//     sonla.push(juftSon)
//     sonla.push(toqSon)

//     return sonla
//  }
//  console.log(calcSum(sonlar));






////--------------------------------------------------------------------------
// 5-MASALA
const aa = [ -4, 2,  20,]
let ss = []
for(let i = aa[0]; i <= aa[aa.length -1]; i++ ){

    ss.push(i)
}

console.log(ss);