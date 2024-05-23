const quizdata = [
    {
        quiztxt: "qual e a memoria de acesso rapido?",
    a:"HD",
    b:"memoria ram",
    c:"CPU",
    d:"nda",
    coreto:"b",
    },
    {
        quiztxt:"qual componente que conecta todos os outro componente do computador?",
        a:"placa mãe",
        b:"gabinete",
        c:"HD",
        d:"nda",
        coreto:"a",
    },
    {
        quiztxt:"quem que proteje os componente do computador?",
        a:"fonte de alimentação",
        b:"gabinete",
        c:"munitor",
        d: "nda",
        coreto:"b",
    },

];
const quiz = document.getElementById('quiz')
const resp = document.getElementById('.respota')
const questao = document.getElementById('guiz-txt')
const a_txt = document.getElementById('a_txt')
const b_txt = document.getElementById('b_txt')
const c_txt = document.getElementById('c_txt')
const d_txt = document.getElementById('d_txt')
const button = document.getElementById('submit')

let correcao = 0
let score = 0
loadQUiz()
function loadQUiz(){
    delelerespo()
    const corresteData = quizdata[correcao]
    questao.innerText = corresteData.quiztxt
    a_txt.innerText = correstData.a
    b_txt.innerText = correstData.b
    c_txt.innerText = correstData.c
    d_txt.innerText = correstData.d
}
function delelerespo(){
    resp.forEach(resp => resp = false)
}
function getSelected(){
    let resp
    resp.forEach(resp =>{
        if(resp.checked){
            respota = resp.id
        }
    })
}
button.addEventListener('click', ()=>{
    const respota = getSelected()
    if(respota){
        if(respota === quizdata[correcao].coreto){
            score++
        }
        correcao++
        if(correcao< quizdata.length){
            loadQUiz()
        }else{
            quiz.InnerHtml = '
                <h2> você certo ${score}/${quizdata.length} das questões</h2>
                <button onclick="location_reload()"> joga de novo</button>
        }
    }
})