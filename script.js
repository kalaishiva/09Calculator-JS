let textView = document.querySelector(".textview");
let btn = document.querySelectorAll(".button");
//console.log(btn);

let input1 = 0;
let input2 = 0;
let result = 0;
let operation = "";

function insert(num) {
    if (num <= 9 || num == ".") {
        textView.value += num;

    } else {
        input1 = textView.value; //input1 value is stored
        //console.log(`input1 + ${input1}`);

        textView.value = ""; //empty the input box

        operation = num; //getting its operator
        //console.log(operation);

        // operation = num;
        // input2 = textView.value;
        // //console.log(input2);
        // console.log(`input2 + ${input2}`);

    }


}

function equals() {
    input2 = textView.value;
    //console.log(input2);

    if (operation == "+") {
        result = parseFloat(input1) + parseFloat(input2);

    } else if (operation == "-") {
        result = parseFloat(input1) - parseFloat(input2);

    } else if (operation == "*") {
        result = parseFloat(input1) * parseFloat(input2);

    } else if (operation == "/") {
        result = parseFloat(input1) / parseFloat(input2);

    } else if (operation == "%") {
        result = (parseFloat(input1) / parseFloat(input2)) * 100;


    }
    textView.value = result;

}

function clean() {
    //console.log("lets clear");
    textView.value = "";


}

function back() {
    let clear = textView.value;
    let newNum = clear.slice(0, -1);
    //console.log(newnum);
    textView.value = newNum;

}