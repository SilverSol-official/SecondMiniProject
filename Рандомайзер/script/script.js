let resultArr = [];

let fair = true;

function GenBtnClick(minNum, maxNum, numNum, fairGen, floatState) {
    if (maxNum < minNum) {
        maxNum = minNum + 1;
    }
    if(((maxNum-minNum)<numNum)&&((fairGen==true)&&(floatState==false))){
        output("max - min > number of numbers and not float or fair generation is on, it is inposible task change your request please");
    }else{
    switch (fairGen) {
        case true:
            fairGeneration(minNum, maxNum, numNum, floatState) ;
            break;
        case false:
            UnfairGen(minNum, maxNum, numNum, floatState);
            break;
    }}
}

function fairGeneration(minNum, maxNum, numNum, floatState) {
    switch (floatState) {
        case true:
            for (let i = 0; i < numNum; i++) {
                if(i==0){
                    resultArr[i] = (+((Math.random() * maxNum) + minNum)).toFixed(2);
                }else{
                    do
                    {
                        fair = true;
                        resultArr[i] = (+((Math.random() * maxNum) + minNum)).toFixed(2);
                        for (let j = 0; j < resultArr.length-1; j++) {
                            if (resultArr[i] == resultArr[j]) {
                                fair = false;
                            }
                        }
                    }
                    while (fair == false);}
            }
            break;
        case false:
            for (let i = 0; i < numNum; i++) {
                if(i==0){
                    resultArr[i] = Math.floor((Math.random() * maxNum) + minNum);
                }else{
                do
                {
                    fair = true;
                    resultArr[i] = Math.floor((Math.random() * maxNum) + minNum);
                    for (let j = 0; j < resultArr.length-1; j++) {
                        if (resultArr[i] == resultArr[j]) {
                            fair = false;
                        }
                    }
                }
                while (fair == false);}
            }
            break;
    }
    output(resultArr);
}

function UnfairGen(minNum, maxNum, numNum, floatState) {
    switch (floatState) {
        case true:
            for (let i = 0; i < numNum; i++) {
                resultArr[i] = (+((Math.random() * maxNum) + minNum)).toFixed(2);

            }
            break;
        case false:
            for (let i = 0; i < numNum; i++) {
                resultArr[i] = Math.floor((Math.random() * maxNum) + minNum);
            }
            break;
    }

    output(resultArr);
}

function output(result) {
    console.log(result);
    document.querySelector('.resultField').textContent = '';
    document.querySelector('.resultField').textContent = "Result:" + result;
    resultArr = [];
}