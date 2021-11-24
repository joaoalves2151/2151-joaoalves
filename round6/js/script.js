function fechar(){
    document.getElementById('popup').style.display = "none";
}

function aparecer(){
                    document.getElementById('fechar').style.opacity="1"
}

function verificar(){
                     aceitar = document.querySelector('input:checked')
                     
                     if(aceitar != null){
                        window.location.href='loc.html'
                     }else{
                         alert('Aceite os termos para prosseguir!')
                     }
}