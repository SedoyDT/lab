const SELF_INPUT_IN_TWO_DIMENSION_ARRAY = function () {
    let rows = prompt("Сколько будет строк", 1)
    let cols = prompt("Сколько будет колонок", 1)
    let arr = [];
    
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
        
    }console.table(arr)}


    SELF_INPUT_IN_TWO_DIMENSION_ARRAY();

    const ARRARY_INPUT = function(){
        let rows = prompt("Сколько будет строк?")
        let cols = prompt("Сколько будет столбцов? ")

        // Создаем все строки
        for (let i = 0;i<rows;i++){
            // Создаем пустые строки
            arr.push([])
            // добавляем колонку на пустую строку
            arr[i].push(new Array(cols));
            for(let j = 0; j<cols;j++){
                arr[i][j]=prompt("Элемент")
            }
        }
    }