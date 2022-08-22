let btnColors = document.querySelectorAll(".btnChangeColor") ; 
let houseBase = document.querySelector(".house-base") ; 
let houseSandwich = document.querySelector(".house-sandwich") ;
let houseUpper = document.querySelector(".house-upper") ;
let houseRoof = document.querySelector(".house-roof") ; 
let bgBtnColors = () => {
    for(let i = 0 ; i < btnColors.length ; i++){
        let id = btnColors[i].id ; 
        btnColors[i].style.backgroundColor = `#${id}` ; 
        
    } 
}
bgBtnColors();
for(let i = 0 ; i < btnColors.length ; i++){
    btnColors[i].addEventListener("click" , () => {
        let id = btnColors[i].id ; 
        houseBase.style.backgroundColor = `#${id}` ; 
        houseSandwich.style.backgroundColor = `#${id}` ; 
        houseUpper.style.backgroundColor = `#${id}` ; 
        houseRoof.style.backgroundColor = `#${id}` ; 
    }) ; 
}
