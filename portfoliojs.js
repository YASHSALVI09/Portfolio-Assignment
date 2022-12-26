const h1 = `Welcome to ZOYANI`;
var index1 = 0;
var index2 = 0;

put();
function put(){

    myInterval = setInterval(()=>{
        letter=h1[index1];
        document.getElementById("h1").textContent += letter;
        index1++;
        if(index1==h1.length){
            index1=0;
            clearInterval(myInterval);
        }
    }, 250);    


    myInterval2 = setInterval(()=>{
        letter=h4[index2];
        document.getElementById("h4").textContent += letter;
        index2++;
        if(index2==h4.length){
            index2 = 0;
            clearInterval(myInterval2);
        }
    }, 340); 
    setTimeout(cut,4500);
}

