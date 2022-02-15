// Botão fechar
$(document).ready(function(){
            $('#btf').click(function(fechar){
                $('#popup').css({'display' : 'none'}); 
            });


    //aparecer o botão de fechar '#btf'
    $('#btf').hide(); 
    
    $('.curto').mousemove(function(){ 
        $('#btf').delay(1180).show(function(mostrar){
        });
    });


    //checar
    $('#btp').click(function(verificar){
            
                var aceitar = (this).querySelector('input:checked')

                    if (aceitar != null ){  
                    $(location).href('loc.html')
                    //ou window.location.href = 'loc.html'
                    }

                        else{
                            alert("Você precisa aceitar os termos do contrato para prosseguir!")
                        }
    });

                //$('fechar'). mousemove(function(aparecer){
                // $(this).css({'opacity' : '1'});
                //})

});





