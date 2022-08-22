let hoverText = () => {
    let text = document.querySelector(".heading").innerHTML ;  
    let myArr = [...text] ;
    console.log(myArr) ;  

    // console.log(text) ; 
    // let content = "" ; 
    // for(let i = 0 ; i < myArr.length ; i++){
    //     content += `
    //         <span>${myArr[i]}</span>
    //     ` ; 
    // }
    let content = "" ; 
    for (let value of myArr) {
      content += `
        <span>${value}</span>
      `; 
    }
    document.querySelector(".heading").innerHTML = content ; 
}
// document.querySelector(".heading").onmouseover  = hoverText ; 
hoverText() ; 


 