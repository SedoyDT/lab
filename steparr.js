const SELF_INPUT_IN_STEP_ARRAY = function () {
    let rows = prompt("Сколько будет строк", )
    
    let arr = [];
    // Создает все строки
    for (var i = 0; i < rows; i++) {
        //  Создает пустую строку
        arr.push([]);
        //Добавляет колонку на пустую строку
        let cols = prompt("Сколько будет элементов в строке " + i)
        arr[i].push(new Array(cols));
        for (let j = 0; j < cols; j++) {
            // Initializes:
            arr[i][j] = prompt("Введите элемент массива: " + (i) + (j));
        }
        
    }
    console.table(arr)
    return arr;
} 
let rows = prompt("Сколько будет строк") 
SELF_INPUT_IN_TWO_DIMENSION_ARRAY()