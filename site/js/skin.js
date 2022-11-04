function activeLink() {
  const list = document.querySelectorAll(".list");
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
  list.forEach((item) => item.addEventListener("click", activeLink));
}

$(document).ready(() => {
  console.log("JQuery is loaded.");
  $("#btn-login").click((e) => {
    $("#modal").modal("toggle");
  });

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
  let listaskin = document.getElementById("lista-skin").innerHTML
  listaskin = "";
  for (var i = 0; i < check.length; i++)  {
    if (check[i].checked) {
      listaskin += "<li>" + check[i].value + "</li>"
      document.getElementById("lista-skin").innerHTML = listaskin
    }else{

    }
  }
}

