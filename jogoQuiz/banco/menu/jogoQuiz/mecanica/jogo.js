
document.getElementsByClassName('pergu')[0].style.display="block";
function net(id){
    document.getElementsByClassName("pergu")[id-1].style.display="none";
    document.getElementsByClassName("pergu")[id].style.display="block";
}
function re(){
    var score = 0;
    if(document.getElementById('correto1').checked){
        score++;
    }
    if(document.getElementById('correto2').checked){
        score++;
    }
    if(document.getElementById('correto3').checked){
        score++;
    }
    if(document.getElementById('correto4').checked){
        score++;
    }
    if(document.getElementById('correto5').checked){
        score++;
    }
    if(document.getElementById('correto6').checked){
        score++;
    }
    if(document.getElementById('correto7').checked){
        score++;
    }
    if(document.getElementById('correto8').checked){
        score++;
    }
    if(document.getElementById('correto9').checked){
        score++;
    }
    if(document.getElementById('correto10').checked){
        score++;
    }
    var res =document.querySelector(".resu");
    var but = document.querySelector(".but");
    res.textContent="você acerto "+ score ;
    but.textContent= "volta inicio";
    but.addEventListener('click', () =>{
    denovo();
   });
    }
    function denovo(){
        location.reload();
        window.location.href="./../../../../log/inicioJogo.html"
    }