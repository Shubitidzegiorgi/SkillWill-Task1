// Task 1
/*
დაწერე ფუნქცია, რომელიც მიიღებს a და b
პარამეტრებს და დააბრუნებს ტექსტს
“ტოლია” თუ a უდრის b-ს, ხოლო
წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
არის ტოლი”
გაითვალისწინე, რომ a და b ყოველთვის
ერთი და იგივე ტიპის არ არის
*/

function compareValues(a,b){
    if(a === b){
        return "equal";
    }
    else{
        return "not equal";
    }
}
// result examples
/* 
let showResult1 = compareValues("5",5);
console.log(showResult1);
let showResult2 = compareValues(5,5);
console.log(showResult2);
let showResult3 = compareValues("10",5);
console.log(showResult3);
let showResult4 = compareValues("7","7");
console.log(showResult4);
let showResult5 = compareValues("6","8");
console.log(showResult5);
let showResult6 = compareValues(9,4);
console.log(showResult6) 
*/

// Task 2
/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს ტემპერატურას ფარენჰეიტებში და
დააბრუნებს ტემპერატურას ცელსიუსში თუ პარამეტრი არ არის რიცხვითი მონაცემი
დააბრუნე - false
*/

function fahrenheitToCelsius(temperature) {
    if (typeof temperature === 'number' ) {
        // fahrenheittocelsius formula: (F - 32) * 5/9
        return (temperature - 32) * 5/9;
    } else {
        return false;
    }
}
// result examples
/*
let checkResult1 = fahrenheitToCelsius(64);
console.log(checkResult1);
let checkResult2= fahrenheitToCelsius("64");
console.log(checkResult2);
*/

// Task3
/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს a (პირველი რიცხვი), b (მეორე
რიცხვი) და operation (+, -, *, /) და
დააბრუნებს ახალ მნიშვნელობას,
რომელიც მიიღება ამ ორ რიცხვზე operation
ცვლადში განსაზღვრული ოპერაციით
თუ a და b არ არიან რიცხვები, ან თუ
operation ცვლადში არის უცნობი, ოპერაცია დააბრუნე - false
*/

function performOperation(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        return b !== 0 ? a / b : false;
    } else {
        return false;
    }
}
