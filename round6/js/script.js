// Botão fechar
$(document).ready(function(){
            $('#btf').click(function(fechar){
                $('#popup').css({'display' : 'none'}); 
            });


    //aparecer o botão de fechar '#btf'
    $('#dap').on(function(aparecer){
            
            apr = $(this).mousemove()

                    if ( apr == false  ) {
                        $('#btf').hide()
                    }
                    
                        else{
                            $('#btf').show()
                            }
    });


    //checar
    $('#cx').click(function(checar){
            
                aceitar = (this).querySelector('input:checked')

                    if (aceitar != null ){  
                    $(location).href('loc.html')
                    //ou window.location.href = 'loc.html'
                    }

                        else {
                            alert("Você precisa aceitar os termos do contrato para prosseguir!")
                        }
    });

                //$('fechar'). mousemove(function(aparecer){
                // $(this).css({'opacity' : '1'});
                //})

});





