'use strict'

const fibonacci = ((current = 0, next = 0) => () => {
    if ((current + next) === 0) {next=1
    } else {
    [current,next] = [next,current+next]
    }
    return current;
})()

document.getElementById('button').addEventListener('click',(event) =>{
        document.getElementById('fibonacci').innerText=fibonacci();
        console.log(fibonacci());
    });
    