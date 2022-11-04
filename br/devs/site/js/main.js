$(document).ready(()=>{
    console.log('JQuery is loaded.');

    $('#btn-login').click((e)=>{
        $('#modal').modal('toggle');
    })

    
    // // Carregar Pagina
    // $('#intro-jquery').click((e)=>{
    //     $.ajax({
    //         url: "introducao-jquery.html",
    //         success: (data, textStatus, xhr)=>{
    //             console.log(data);
    //             console.log(textStatus);
    //             console.log(xhr);
    //             $('#conteudo').html(data);
    //         }
    //       });
    // });
});

function verificarCheckBox() {
    var check = document.getElementsByClassName("verificar"); 
    
    for (var i=0;i<check.length;i++){  
        if (check[i].checked){ 
            console.log(check[i].value);
        }  else {
           // CheckBox Não Marcado... Faça alguma outra coisa...
        }
    }
}