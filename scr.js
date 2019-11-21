//Объявляем три пустых массивов
var evenNumbers = new Array();
 
//Переменная k - для индексов массива evenNumbers
var k = 0;
var oddNumbers = new Array();
 
//Переменная n - для индексов массива oddNumbers
var n = 0;
 
var data = new Array('car', 'plane', true, 89, 'm');
 
//Заполняем массив evenNumbers, с четными числами
for(var i = 1; i < 10; i++){
    if( i % 2 == 0){
        evenNumbers[k] = i;
        //Инкрементируем индекс
        k++;
    }
}
 
//Заполняем массив oddNumbers, с нечетными числами
for(var i = 1; i < 10; i++){
    if( i % 2 != 0){
        oddNumbers[n] = i;
        //Инкрементируем индекс
        n++;
    }
}
console.log(oddNumbers);
//Объявляем двумерный массив twoDimens, и заполняем его
var twoDimens = new Array(evenNumbers, oddNumbers, data);
console.log(twoDimens);
// document.write("Элемент с индексом 3 из массива нечётных чисел oddNumbers равен: " + twoDimens[1][3] ); // Элемент: 7
for(var i = 0; i < twoDimens.length; i++,document.write( "\n" + "<div/>" )){
    for(var j = 0; j < twoDimens[i].length; j++){
        document.write( twoDimens[i][j] + "\n" )
    }
}
