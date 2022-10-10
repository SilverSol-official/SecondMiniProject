let a = ""; //first number
let b = ""; //second number
let sign = ""; //Sign
let result;
let funush = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['-', '+', 'X', '/'];

//Screen
const out = document.querySelector('p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    document.querySelector('p').innerHTML = "";
    console.log("ad done");
    document.querySelector('p').style.fontSize = '4rem';
}

function inputNumber(x) {
    if (((a[0] == a[1]) && (a[1] == "0"))) {
        a = "";
    } else if (((b[0] == b[1]) && (b[1] == "0"))) {
        b = "";
    } else {
        if ((b == "") && (sign == "")) {
            if (a.length < 9) {
                a += x;
                if ((a.length > 6)) {
                    document.querySelector('p').style.fontSize = '3.5rem';
                    document.querySelector('p').innerHTML = a;
                } else {
                    document.querySelector('p').style.fontSize = '4rem';
                    document.querySelector('p').innerHTML = a;
                }
                console.log(a, x);
            }
        } else if (sign != "") {
            if (b.length < 9) {
                b += x;
                if ((b.length > 6)) {
                    document.querySelector('p').style.fontSize = '3.5rem';
                    document.querySelector('p').innerHTML = "";
                    document.querySelector('p').innerHTML = b;
                } else {
                    document.querySelector('p').style.fontSize = '4rem';
                    document.querySelector('p').innerHTML = "";
                    document.querySelector('p').innerHTML = b;
                }
            }
        }
    }
}

function inputSign(s) {
    if (s == '-') {
        if (a == "") {
            a += '-';
            console.log(a);
            document.querySelector('p').innerHTML = a;
        } else if ((a.length>0)&&(sign=="")) {
            sign = '-';
        } else if ((a.length>0)&&(sign.length==1)) {
            b = '-';
            document.querySelector('p').innerHTML = "";
            document.querySelector('p').innerHTML = b;
        }
    } else {
        sign += s;
        document.querySelector('p').innerHTML = a;
    }
}

function equalButton() {
    switch (sign) {
        case '-':
                result = +a - +b;
            break;
        case '+':
            result = +a + +b;
            break;
        case '/':
            result = +a / +b;
            break;
        case 'X':
            result = +a * +b;
            break;
        case '%':
            result = (+a * +b)/100;
            break;
        default:
            result = a;
            break;
    }
    result +="";
    if ((result.length > 6)&&(result.length<15)) {
        document.querySelector('p').style.fontSize = '2.5rem'
    }
    if((result.length > 13)&&(result.length<20)){
        document.querySelector('p').style.fontSize = '1.5rem'
    }
    if((result.length > 20)&&(result.length<40)){
        document.querySelector('p').style.fontSize = '1.3rem'
    }
    console.log(result);
    if (result == "NaN"){
        document.querySelector('p').innerHTML = "ERROR"
        result=0;
    }else{
    document.querySelector('p').innerHTML = result;}
    a="";
    a+= +result;
    result=0;   
}

function PlusMinus(){
    if(sign == ""){
        a*= (-1);
        a+="";
        document.querySelector('p').innerHTML = a;
    } else if ((sign.length = 1)&&(b.length>0)){
        b*= (-1);
        b+="";
        document.querySelector('p').innerHTML = b;
    }
}



