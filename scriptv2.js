var db=[
    
        ["Total Commander",true],
    
        ["WinRAR",true],
    
        ["CCleaner",false],
    
        ["AIMP3",false]
    
    ];
    function draw(){
    
        db.sort() // Вот сюда нужно функцию прикрутить. Пример - db.sort(myFunc)
    
        var body=document.getElementsByTagName("body")[0]
    
        var table=document.createElement("table")
    
        for(var x=0;x<db.length;x++){
    
            var tr=document.createElement("tr")
    
            var td=document.createElement("td")
    
            td.innerText=db[x][0]
    
            tr.appendChild(td)
    
            var td=document.createElement("td")
    
            td.innerText=db[x][1]
    
            tr.appendChild(td)
    
            table.appendChild(tr)
    
        }
    
        body.appendChild(table)
    
    }
 draw()
    