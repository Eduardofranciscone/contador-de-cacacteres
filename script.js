const input = document.querySelector("#input")
const counter = document.querySelector(".counter")
const button = document.querySelector("#toggle")

let mode = 'characters'


button.addEventListener("click",()=>{
    if(mode=== 'characters'){
        mode= 'words'
        button.textContent= "Contar caracteres"
    } else{
        mode= 'characters'
        button.textContent= "Contar palavras"
    }

    input.dispatchEvent(new Event("input"))
})

input.addEventListener("input", ()=>{
    let count= 0

    if(mode=== 'characters'){
        count = input.value.length
        counter.textContent = `${count} caracteres(s)`
    } else{
        const words= input.value.trim().split(/\s+/)
        count= input.value.trim()=== "" ? 0 : words.length
        counter.textContent= `${count} palavra(s)`
    }
})