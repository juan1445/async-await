// Sin Async y await



// setTimeout(() => {
//     if(total % 2 == 0){
//         console.log('Soy un numero primo');
//     }else{
//         console.log('No soy un numero primo');    
//     }
// }, 2000);

// setTimeout((a, b) => {
//     var total = a+b;
//     return console.log(`Esta suma da ${total}`);
// }, 5000);


var a = 200;
var b = 200;



function suma(a,b){
    var total = a+b;
    console.log(`Hola la suma da ${total}`);
    return total;
}

function primo(total){
    if(total % 2 == 0){
        console.log('Soy un numero primo');
    }else{
        console.log('No soy un numero primo');    
    }
}

async function main(){
    await suma(200,300);
    await primo();
}

main();

console.log('hola soy el final');



