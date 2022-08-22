let hoverText = () => {
    let text = document.querySelector(".heading").innerHTML ;   
    console.log(text) ; 
    let content = "" ; 
    for(let i = 0 ; i < text.length ; i++){
        content += `
            <span>${text[i]}</span>
        ` ; 
    }
    document.querySelector(".heading").innerHTML = content ; 
}
// document.querySelector(".heading").onmouseover  = hoverText ; 
hoverText() ; 
let text = document.querySelector(".heading").innerHTML ; 
let myARR = [...text] ; 
console.log(myARR) ; 

 