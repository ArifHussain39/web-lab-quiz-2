//task1 

function percentageCalculate(num1, total) {
    return (num1 / total) * 100;
}

let percentage = percentageCalculate(881, 1000);
console.log("Total percentage = " + percentage);

//task2 

// Sample input array
let object = [
    {
        id: 1,
        personName: "Fahad",
        personAge: "23",
        personIncome: "2000000"
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: "23",
        personIncome: "3000000"
    }
]

var count = 1;
for (let iterator of object) {
    //console.log(iterator)
    for (let key in iterator) {
        var temp1 = "", temp2 = "";
        if (Object.hasOwnProperty.call(iterator, key)) {
            if (key == "personName") {
                //console.log(iterator[key]);
                temp1 = iterator[key];

            }
            if (key == "personIncome") {
                //console.log(iterator[key]);
                temp2 = iterator[key];

            }
        }
        console.log(temp1 + temp2);
    }
}



// task3

// sample value
let p = {
    id: 1,
    personName: "Fahad",
    personAge: "23",
    personIncome: "2000000"
}
console.log("Properties are below:");
for (let key in p) {
    if (Object.hasOwnProperty.call(p, key)) {
        console.log(key);
    }
}


