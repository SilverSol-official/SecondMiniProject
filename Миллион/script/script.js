alert("hello user");
let questionsE=[{
    'question':"Какой продукт в разных странах называют папиной бородой и бабушкиными волосами?",
    'answerA':"A Сахарную вату",
    'answerB':"B Маринованую Капусту",
    'answerC':"С Заливніе яблоки",
    'answerD':"D Пицца",
    'right':"A",
    'fifty':"AC",
},{
    'question':"Какое действие иногда вынуждает совершить посетитель по отношению к коррумпированному чиновнику?",
    'answerA':"A Подмазать",
    'answerB':"B Смазать",
    'answerC':"C Вмазать",
    'answerD':"D Намазать",
    'right':"A",
    'fifty':"AС",
},{
    'question':"Как называется распространенная детская игра?",
    'answerA':"А 'Пираты-разбойники'",
    'answerB':"B 'Соловьи-разбойники'",
    'answerC':"С 'Казаки-разбойники'",
    'answerD':"D 'Орки-разбойники'",
    'right':"С",
    'fifty':"СB",
},{
    'question':"С какого тура, обычно начинаются выборы президента страны?",
    'answerA':"А С Премьерного",
    'answerB':"B С Первого",
    'answerC':"С С Малого",
    'answerD':"D С Пробного",
    'right':"B",
    'fifty':"BA",
},{
    'question':"Как звали друга Карлсона?",
    'answerA':"А Вова",
    'answerB':"B Ганс",
    'answerC':"С Глупыш",
    'answerD':"D Малыш",
    'right':"D",
    'fifty':"DB",
},{
    'question':"Какое астрономическое явление жители Земли могут наблюдать раз в 75–76 лет?",
    'answerA':"А Перевыборы в России",
    'answerB':"В Пpилет метеорита",
    'answerC':"С Появление кометы Галлея",
    'answerD':"D Падение атомной бомбы",
    'right':"C",
    'fifty':"CA",
}];
let questionsM=[{
    'question':"Кто был первым военным министром Российской империи?",
    'answerA':"A Аракчеев",
    'answerB':"B Барклай-де-Толли",
    'answerC':"С Вязмитинов",
    'answerD':"D Коновницын",
    'right':"C",
    'fifty':"CD",
},{
    'question':"Что Шекспир назвал «вкуснейшим из блюд в земном пиру»?",
    'answerA':"A Опьянение",
    'answerB':"B Любовь",
    'answerC':"C Уединение",
    'answerD':"D Сон",
    'right':"D",
    'fifty':"DA",
},{
    'question':"Кто из этих философов в 1864 году написал музыку на стихи А. С. Пушкина «Заклинание» и «Зимний вечер»?",
    'answerA':"А Юнг",
    'answerB':"B Ницше",
    'answerC':"С Шопенгауэр",
    'answerD':"D Гегель",
    'right':"B",
    'fifty':"BA",
},{
    'question':"Возле какой горы-вулкана был впервые найден драгоценный камень танзанит?",
    'answerA':"А Килиманджаро",
    'answerB':"B Фудзияма",
    'answerC':"С Горы Кавказа",
    'answerD':"D Джамалунмгма",
    'right':"A",
    'fifty':"AB",
},{
    'question':"Какой головной убор был во время бала на Татьяне Лариной, героине романа «Евгений Онегин»?",
    'answerA':"А Синий платок   ",
    'answerB':"B Малиновый берет",
    'answerC':"С Голубой плащ",
    'answerD':"D Черній зонт",
    'right':"B",
    'fifty':"BA",
},{
    'question':"Кем приходились друг другу толстый и тонкий из одноимённого рассказа Чехова?",
    'answerA':"А Коллегами",
    'answerB':"B Братьями",
    'answerC':"С Сослуживцами",
    'answerD':"D Одноклассниками",
    'right':"D",
    'fifty':"DB",
},{
    'question':"Название какого алкогольного напитка переводится с немецкого как «полынь»?",
    'answerA':"А Шнапс",
    'answerB':"В Сквош",
    'answerC':"С Вермут",
    'answerD':"D Шампанское",
    'right':"C",
    'fifty':"CA",
}];
let questionsH=[{
    'question':"В какое созвездие входит звезда Шаула, название которой переводится как «поднятый хвост»?",
    'answerA':"A Пояс Ориона",
    'answerB':"B Медведица",
    'answerC':"С Скорпион",
    'answerD':"D Крест",
    'right':"C",
    'fifty':"CD",
},{
    'question':"Скольким каратам соответствует чистое золото?",
    'answerA':"A 30-каратное",
    'answerB':"B 23-каратное",
    'answerC':"C 25-каратное",
    'answerD':"D 24-каратное",
    'right':"D",
    'fifty':"DA",
},{
    'question':"Как называется красная тряпка в руках у матадора?",
    'answerA':"А Кастера",
    'answerB':"B Мулета",
    'answerC':"С Муньета",
    'answerD':"D Буэна",
    'right':"B",
    'fifty':"BA",
},{
    'question':"В каком из этих напитков, по мнению дегустаторов, преобладает оттенок корочки ржаного хлеба?",
    'answerA':"А Токай",
    'answerB':"B Кагор",
    'answerC':"С Марсала",
    'answerD':"D Херес",
    'right':"AC",
    "fifty":"AC",
},{
    'question':"В каком городе в 1923 году был проведен первый международный кинофестиваль?",
    'answerA':"А Канн   ",
    'answerB':"B Венеция    ",
    'answerC':"С Париж",
    'answerD':"D Берлин",
    'right':"B",
    'fifty':"BA",
},{
    'question':"Чье произведение стало основой современного гимна Австрии?",
    'answerA':"А Штраус",
    'answerB':"B Шуберт",
    'answerC':"С Шуман",
    'answerD':"D Моцарт",
    'right':"D",
    'fifty':"DB",
},{
    'question':"Где проходила конференция, на которой Клара Цеткин предложила праздновать Международный женский день?",
    'answerA':"А Лейпциг",
    'answerB':"В Берн",
    'answerC':"С Копенгаген",
    'answerD':"D Берлин",
    'right':"C",
    'fifty':"CA",
}];
let questionField = document.querySelector('.question-container');
let variantA = document.querySelector('.p-A');
let variantB = document.querySelector('.p-B');
let variantC = document.querySelector('.p-C');
let variantD = document.querySelector('.p-D');
let questionNumber=1;


function AskEasy (){
    let num=Math.floor(Math.random() * questionsE.length);
    questionField.innerHTML= questionsE[num]["question"]; // change 0 to n
    variantA.textContent = questionsE[num]['answerA'];  
    variantB.textContent = questionsE[num]['answerB'];  
    variantC.textContent = questionsE[num]['answerC'];  
    variantD.textContent = questionsE[num]['answerD'];  
}

function AskMedium (){
    let num=Math.floor(Math.random() * questionsM.length);
    questionField.innerHTML= questionsM[num]["question"]; // change 0 to n
    variantA.textContent = questionsM[num]['answerA'];  
    variantB.textContent = questionsM[num]['answerB'];  
    variantC.textContent = questionsM[num]['answerC'];  
    variantD.textContent = questionsM[num]['answerD'];  
}

function AskHard (){
    let num=Math.floor(Math.random() * questionsH.length);
    questionField.innerHTML= questionsH[num]["question"]; // change 0 to n
    variantA.textContent = questionsH[num]['answerA'];  
    variantB.textContent = questionsH[num]['answerB'];  
    variantC.textContent = questionsH[num]['answerC'];  
    variantD.textContent = questionsH[num]['answerD'];  
}

function ChooseQuestion(questionNum){
    if (questionNum<6){
        AskEasy();
    } else if((questionNum>=6)&&(questionNum<10)){
        AskMedium();
    } else if(questionNum>=10){
        AskHard();
    }
}

ChooseQuestion(questionNumber);



// alert("Hello gamer");
// alert("if you need a help just type help in the answer field");
// let bankOfQuestion=["   ","Какой головной убор был во время бала на Татьяне Лариной, героине романа «Евгений Онегин»? ","Какое астрономическое явление жители Земли могут наблюдать раз в 75–76 лет? А.Перевыборы в России В.ПРилет метеорита С.Появление кометы Галлея D.Падение атомной бомбы","В каком немецком городе родилась будущая императрица России Екатерина II: Цербсте или Штеттине? А.В Штеттине B.Цербсте","Название какого алкогольного напитка переводится с немецкого как «полынь»? A.Вермут B.Марихуана C.Одуванчик D.Репях"];
// let bankOfAnswers=["B","C","A","A"];
// let bAnkofHelps=["B,A","D,C","A,B","A,C"];
// let sizeOfBank=5;
// let pointCounter=0;
// let questionNumber;
// let answer;
// let question;

// function AskQuestion(){
//     let number=Math.floor(Math.random() * sizeOfBank);
//     return(number);
// }
// function Help(questionNumber){
//     alert(bAnkofHelps[questionNumber]);
//     pointCounter-=500;
// }
// for(let i=0;i<3;i++){
//     questionNumber=AskQuestion(); // Randomize number of question
//     question=bankOfQuestion[questionNumber]; //+1 showing question by it`s number
//     answer=prompt(question);
//     if (answer==bankOfAnswers[questionNumber]){ // Checking answer
//         pointCounter+=1000; // adding money
//         alert(`Great! Your score: ${pointCounter*10}$`); // showing balance
//     }else if(answer=="help"){ // checking if help
//         Help(questionNumber); // calling help function
//         answer=prompt(bankOfQuestion[questionNumber]); // asking question number
//         if (answer==bankOfAnswers[questionNumber]){ //once again checking question
//             pointCounter+=1000; // adding money
//             alert(`Great! Your score: ${pointCounter*100}$`); //showing money
//         }else{alert("You lose"); // if lose
//         pointCounter=0; // money = 0
//         break;} //stopping game
//     }else {alert("You lose"); // showing loose message
//     pointCounter=0; // making 0 counter of points
//     break;};
//     bankOfQuestion.splice(questionNumber, 1); // deliting question
//     bAnkofHelps.splice(questionNumber, 1); // deliting answer
//     bankOfAnswers.splice(questionNumber,1); //delitiong help
//     sizeOfBank--;
// }
// if (pointCounter!=0){
//     alert(`Your score is ${pointCounter*10}$`); //if win show score
// }

// {
//     'question':"question 1",
//     'answerA':"A variant",
//     'answerB':"B variant",
//     'answerC':"C variant",
//     'answerD':"D variant",
//     'right':"A",
//     'fifty':"AB",
// },