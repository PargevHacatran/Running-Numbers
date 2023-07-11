var time = 15000;
var step = 1;

function numOut(num, elem){
    var l = document.querySelector("." + elem);
    var n = 0;
    var t = Math.round(time/(num/step));
    var int = setInterval(()=>{
        n = n + step;
        if(n == num){
            clearInterval(int);
        }
        l.innerHTML = n;
    },
    t)
}

numOut(400, "numbers");
numOut(300, "numbers2");
numOut(200, "numbers3");
numOut(100, "numbers4");