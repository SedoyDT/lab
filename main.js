const ask = function () {
    let answer = prompt("с каким массивом вы хотите работать?" + "\n" + "1 - одномерный " + "\n" + "2 - двумерный " + "\n" + "3 - ступенчатый ")
    switch (answer) {
        case "1":
            ASK_WHICH_TYPE_INPUT_FOR_ONE_DIMENSION_ARRAY();
            break;
        case "2":
            ASK_WHICH_TYPE_INPUT_FOR_TWO_DIMENSION_ARRAY();
            break;
        case "3":
            WHICH_TYPE_FOR_STEP();
            break;
            /**
                TODO:
                - Загуглить почему "2" работает, а 2 нет
            */
    }

}
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////////////////////
const ASK_WHICH_TYPE_INPUT_FOR_ONE_DIMENSION_ARRAY = function () {
    let answer = prompt('Как вы хотите ввести массив ?' + '\n' + "Введите 1 - самостоятельно " + '\n' + "               2 - рандом")
    switch (answer) {
        case "1":
            SELF_INPUT_IN_ONE_DIMENSION_ARRAY();

            //MaxMinSearchinOneDimArray(Arr);
            break;
        case "2":
            alert("Ваш массив: " + RANDOM_INPUT_IN_ONE_DIMENSION_ARRAY());
            break;

    }
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////////////////////
const ASK_WHICH_TYPE_INPUT_FOR_TWO_DIMENSION_ARRAY = function () {
    let answer = prompt('Как вы хотите ввести массив ?' + '\n' + "Введите 1 - самостоятельно " + '\n' + "               2 - рандом")
    switch (answer) {
        case "1":
            SELF_INPUT_IN_TWO_DIMENSION_ARRAY();

            break;
        case "2":
            console.table(RANDOM_INPUT_IN_TWO_DIMENSION_ARRAY());
            break;

    }
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////////////////////
const SELF_INPUT_IN_ONE_DIMENSION_ARRAY = function () {
    let lg = prompt("Какого размера будет массив?")
    let Arr = [];
    let scArr = []
    for (let i = 0; i < lg; i++) {
        Arr[i] = prompt("Введите элемент: " + (i + 1))
        document.write(Arr[i] + "<div/>")
    }
    for (let i = 0; i < lg; i++) {
        if (Arr[i] % 2 == 0) {
            scArr[i] = Arr[i]
        }

        document.write(scArr[i] + "<div/>")
        console.log(scArr[i])

    }
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    ////////////////////////////////////////////////
    let max = Arr[0];
    let min = Arr[0];
    let minI, maxI;
    for (let j = 0; j < lg; j++) {
        if (Arr[j] > max) {
            max = Arr[j];
            maxI = j;
        } else if (Arr[j] < min) {
            min = Arr[j]
            minI = j; // решить 

        }

    }
    


    console.log("Максимальный элемент: " + max)
    console.log("Минимальный элемент: " + min)
    console.log("Индекс максимального: " + maxI)
    console.log("Индекс минимального: " + minI)


    return Arr;
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////////////////////
// //     ПЕРЕНЕСТИ ФУНКЦИЮ ОТ СЮДА
// const MaxMinSearchinOneDimArray= function(Arr){
//     for(let i = 0;i<Arr.length;i++){
//         alert(Arr[i])
//     }
// }

//                \\
const RANDOM_INPUT_IN_ONE_DIMENSION_ARRAY = function () {
    let lg = randomInteger(2, 10);
    let Rarr = [];
    for (let i = 0; i < lg; i++) {
        Rarr[i] = randomInteger(-1000, 1000)
    }
    console.table(Rarr)
    let max = Rarr[0];
    let min = Rarr[0];
    let minI, maxI;
    for (let j = 0; j < lg; j++) {
        if (Rarr[j] > max) {
            max = Rarr[j];
            maxI = j;
        } else if (Rarr[j] < min) {
            min = Rarr[j]
            minI = j; // решить 

        }
    }

    console.log("Максимальный элемент: " + max)
    console.log("Минимальный элемент: " + min)
    console.log("Индекс максимального: " + maxI)
    console.log("Индекс минимального: " + minI)
    return Rarr;
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////////////////////

const randomInteger = function (min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand); //Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
}
const RANDOM_INPUT_IN_TWO_DIMENSION_ARRAY = function () {
    let rows = randomInteger(5, 20);
    let cols = randomInteger(5, 20)

    let arr = [];

    // Создает все строки
    for (var i = 0; i < rows; i++) {
        //  Создает пустую строку
        arr.push([]);
        // Добавляет колонку на пустую строку
        arr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            // Initializes:
            arr[i][j] = randomInteger(-1000, 1000);
        }
    } /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    ////////////////////////////////////////////////
    let min = arr[0][0];
    let max = arr[0][0];
    let strmax, stolbmax;
    let strmin, stolbmin;

    for (let j = 0; j < arr.length; j++) {
        for (let n = 0; n < arr.length; n++) {
            if (arr[j][n] > max) {
                max = arr[j][n];
                strmax = j;
                stolbmax = n;


            } else if (arr[j][n] < min) {
                min = arr[j][n];
                strmin = j;
                stolbmin = n
            }
        }
    }
    document.write("<br>");
    //    console.log("Минимальный элемент: " + min + "находится на " + minI + " " + minJ)
    //    console.log("max элемент: " +  max + "находится на " + maxI + " " + maxJ)
    console.log("Минимальный: " + min)
    console.log("Максимальный: " + max)
    console.log("Индекс минимального: " + strmin + " " + stolbmin)
    console.log("Index Максимального: " + strmax + " " + stolbmax)

    return arr;
} /////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////////////////////
const SELF_INPUT_IN_TWO_DIMENSION_ARRAY = function () {

    let rows = prompt("Сколько будет строк", 1)
    let cols = prompt("Сколько будет колонок", 1)
    let arr = [];
    let scarr = [];


    // Создает все строки
    for (var i = 0; i < rows; i++) {
        //  Создает пустую строку
        arr.push([]);
        // Добавляет колонку на пустую строку
        arr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            // Initializes:
            arr[i][j] = prompt("Введите элемент массива: " + (i) + (j));
        }

    }
    document.write("Первый массив" + "<br/>")
    for (let j = 0; j < arr.length; j++) {
        for (let n = 0; n < arr.length; n++) {
            if (n === arr.length - 1)
                document.write(arr[j][n]);
            else
                document.write(arr[j][n] + ", ");
        }
        document.write("<br>");
    }
    // Создает все строки
    for (var i = 0; i < rows; i++) {
        //  Создает пустую строку
        scarr.push([]);
        // Добавляет колонку на пустую строку
        scarr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            // Initializes:
            scarr[i][j] = prompt("Введите элемент массива: " + (i) + (j));
        }

    }

    document.write("Второй массив" + "<br/>")
    for (let j = 0; j < scarr.length; j++) {
        for (let n = 0; n < scarr.length; n++) {
            if (n === scarr.length - 1)
                document.write(scarr[j][n]);
            else
                document.write(scarr[j][n] + ", ");
        }
        document.write("<br>");
    }
    let uarr = []
    for (let i = 0; i < rows; i++) {
        uarr.push([])
        uarr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            uarr[i][j] = (arr[i][j] * scarr[i][j])
        }
    }
    let min = arr[0][0];
    let max = arr[0][0];
    let strmax, stolbmax;
    let strmin, stolbmin;

    /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    ////////////////////////////////////////////////
    for (let j = 0; j < rows; j++) {
        for (let n = 0; n < cols; n++) {
            if (arr[j][n] > max) {
                max = arr[j][n];
                strmax = j;
                stolbmax = n;


            } else if (arr[j][n] < min) {
                min = arr[j][n];
                strmin = j;
                stolbmin = n
            }
        }
    }
    document.write("<br>");
    //    console.log("Минимальный элемент: " + min + "находится на " + minI + " " + minJ)
    //    console.log("max элемент: " +  max + "находится на " + maxI + " " + maxJ)
    console.log("Минимальный: " + min)
    console.log("Максимальный: " + max)
    console.log("Индекс минимального: " + strmin + " " + stolbmin)
    console.log("Index Максимального: " + strmax + " " + stolbmax)
    // console.table(arr)
    let WTA = function () {
        let ask = prompt("Что хотите сделать с этим массивом?" + "\n" + "1: Умножить первый на второй" + "\n" + "2: Сложить первый со вторым" + "\n" + "3: Вычесть из первого второй")
        switch (ask) {
            case "1":
                output()
                break;
            case "2":
               outputs()
                break;
            case "3":
                outputm()
                break;
        }
    }
    let output = function () {
        document.write("Первый массив, умноженный на второй, равняется: " + "<br/>");
            for(let i = 0;i<uarr.length;i++){
                for(let j =0;j<uarr.length;j++){
                    if(j === uarr.length-1)
                           document.write(uarr[i][j])
                else 
                           document.write(uarr[i][j] + ", ")
                 }document.write("<br>")
        }
    }
    let outputs = function () {
        document.write("Первый массив +  второй, равняется: " + "<br/>");
            for(let i = 0;i<sarr.length;i++){
                for(let j =0;j<sarr.length;j++){
                    if(j === sarr.length-1)
                           document.write(sarr[i][j])
                else 
                           document.write(sarr[i][j] + ", ")
                 }document.write("<br>")
        }
    }
    let outputm = function () {
        document.write("Первый массив +  второй, равняется: " + "<br/>");
            for(let i = 0;i<marr.length;i++){
                for(let j =0;j<marr.length;j++){
                    if(j === sarr.length-1)
                           document.write(marr[i][j])
                else 
                           document.write(marr[i][j] + ", ")
                 }document.write("<br>")
        }
    }
    let sarr  = [];
    for (let i = 0; i < rows; i++) {
        sarr.push([])
        sarr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            sarr[i][j] = (Number(arr[i][j]) + Number(scarr[i][j]))
        }
    }
    let marr  = [];
    for (let i = 0; i < rows; i++) {
        marr.push([])
        marr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            marr[i][j] = (Number(arr[i][j]) - Number(scarr[i][j]))
        }
    }
    WTA()
    return arr;
}
/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////////////////////////////////

const WHICH_TYPE_FOR_STEP = function () {
    let answer = prompt("Как заполните ? " + "\n" + "1 - Сами" + "\n" + "2 - рандом")
    switch (answer) {
        case "1":
            SELF_INPUT_IN_STEP_ARRAY()
            break;
        case "2":
            RANDOM_INPUT_IN_STEP_ARRAY()
            break;
    }

}

const RANDOM_INPUT_IN_STEP_ARRAY = function () {
    let rows = randomInteger(2, 10)

    let arr = [];
    // Создает все строки
    for (var i = 0; i < rows; i++) {
        //  Создает пустую строку
        arr.push([]);
        //Добавляет колонку на пустую строку
        let cols = randomInteger(2, 10)
        arr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            // Initializes:
            arr[i][j] = randomInteger(-1000, 1000);
        }

    }
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    ////////////////////////////////////////////////
    let min = arr[0][0];
    let max = arr[0][0];
    let strmax, stolbmax;
    let strmin, stolbmin;

    for (let j = 0; j < arr.length; j++) {
        for (let n = 0; n < arr.length; n++) {
            if (arr[j][n] > max) {
                max = arr[j][n];
                strmax = j;
                stolbmax = n;


            } else if (arr[j][n] < min) {
                min = arr[j][n];
                strmin = j;
                stolbmin = n
            }
        }
    }
    document.write("<br>");
    //    console.log("Минимальный элемент: " + min + "находится на " + minI + " " + minJ)
    //    console.log("max элемент: " +  max + "находится на " + maxI + " " + maxJ)
    console.log("Минимальный: " + min)
    console.log("Максимальный: " + max)
    console.log("Индекс минимального: " + strmin + " " + stolbmin)
    console.log("Index Максимального: " + strmax + " " + stolbmax)

    console.table(arr)
    return arr;
}


const SELF_INPUT_IN_STEP_ARRAY = function () {
    let rows = prompt("Сколько будет строк", )

    let arr = [];
    // Создает все строки
    for (var i = 0; i < rows; i++) {
        //  Создает пустую строку
        arr.push([]);
        //Добавляет колонку на пустую строку
        var cols = prompt("Сколько будет элементов в строке " + i)
        arr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            // Initializes:
            arr[i][j] = prompt("Введите элемент массива: " + (i) + (j));

        }

    }
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    ////////////////////////////////////////////////
    let min = arr[0][0];
    let max = arr[0][0];
    let strmax, stolbmax;
    let strmin, stolbmin;

    for (let j = 0; j < rows; j++) {
        for (let n = 0; n < cols; n++) {
            if (arr[j][n] > max) {
                max = arr[j][n];
                strmax = j;
                stolbmax = n;


            } else if (arr[j][n] < min) {
                min = arr[j][n];
                strmin = j;
                stolbmin = n
            }
        }
    }
    document.write("<br>");
    //    console.log("Минимальный элемент: " + min + "находится на " + minI + " " + minJ)
    //    console.log("max элемент: " +  max + "находится на " + maxI + " " + maxJ)
    console.table(arr)
    console.log("Минимальный: " + min)
    console.log("Максимальный: " + max)
    console.log("Индекс минимального: " + strmin + " " + stolbmin)
    console.log("Index Максимального: " + strmax + " " + stolbmax)



    return arr;
}
////////////////////////////////////////////////////////
/////////////    
// What you want to do with your arrays
// const WTA = function(){
//     let ask = prompt("Что хотите сделать с этим массивом?" + "\n" + "1: Умножить первый на второй" + "\n" + "2: Сложить первый со вторым" + "\n" + "3: Вычесть из первого второй")
//     switch(ask){
//         case "1":console.log(uarr);
//         break;
//         case "2":console.log("Сложение");
//         break;
//         case "3":console.log("Вычетание");
//         break;
//     }
// }


// const WHAT_YOU_WANT_TO_DO_WITH_ONE_DIMENSION_ARRAY = function(){
//     let ask = prompt("Что вы хотите сделать с одномерным массивом?");
//     switch(ask){
//         case "1":SEARCH_MAX_AND_MIN_IN_ONE_DA() // нахождение минимального и максимального элемента
//         break;
//         case "2": // выполнить прямую и обратную сорировку
//         case "3": // заполение нового массива четными элементыми исходного

//     }
// }
// Начать задавать вопрос 
// const  SEARCH_MAX_AND_MIN_IN_ONE_DA = function (Arr){
//     let min = Arr[0];
//     let max = Arr[0];
//     for (let j =0;j<lg;j++){
//         if(Arr[j] > max){
//             max = Arr[j];
//         }else if (Arr[j] < min){
//             min = Arr[j]
//         }

//  }
//     console.log(min)
// }
ask()
//MaxMinSearchinOneDimArray(ask())