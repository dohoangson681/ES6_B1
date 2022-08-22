let getEle = (id) => {
    return document.getElementById(id) ; 
}

let diemTB = (...scores) => {
    let sum = 0 ; 
    let cnt = 0 ; 
    scores.forEach((score) => {
        ++cnt ; 
        sum += score ; 
    })
    return sum/cnt ; 
}
getEle("btnKhoi1").addEventListener("click", () => {
    let diemToan = Number(getEle("inpToan").value) ; 
    let diemLy = Number(getEle("inpLy").value) ; 
    let diemHoa = Number(getEle("inpHoa").value) ; 
    let dtb1 = diemTB(diemToan , diemLy , diemHoa).toFixed(2) ; 
    console.log(dtb1) ; 
    getEle("tbKhoi1").innerHTML = dtb1 ; 
})
btnKhoi2
getEle("btnKhoi2").addEventListener("click", () => {
    let diemVan = Number(getEle("inpVan").value) ;
    let diemSu = Number(getEle("inpSu").value) ; 
    let diemDia = Number(getEle("inpDia").value) ; 
    let diemAnh = Number(getEle("inpEnglish").value) ; 
    let dtb2 = diemTB(diemVan , diemSu , diemDia , diemAnh ).toFixed(2) ; 
    console.log(dtb2) ;
    getEle("tbKhoi2").innerHTML = dtb2 ; 
})
