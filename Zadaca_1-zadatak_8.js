let polje = [1,2,3,4,5,6,7,8,9]
let len = polje.length;

function ispis(polje){
    console.log(polje,"->")
    for(let i=len; i >= 0; i--){
        console.log(polje[i]);
    }
    
}

ispis(polje);