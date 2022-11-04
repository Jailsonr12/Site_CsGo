function logar() {
  var login = document.getElementById("username").value;
  var senha = document.getElementById("password").value;
  if (login == "admin" && senha == "admin") {
    document.getElementById("logado").style.display = "block";
    document.getElementById("logado-erro").style.display = "none";
  } else {
    document.getElementById("logado-erro").style.display = "block";
    document.getElementById("logado").style.display = "none";
  }
  console.log("testando");
}
function loginForm() {
  var formLogin = document.getElementById("login-form");
  if (formLogin.style.display == "block") {
    formLogin.style.display = "none";
    document.getElementById("logado-erro").style.display = "none";
    document.getElementById("logado").style.display = "none";
  } else {
    document.getElementById("login-form").style.display = "block";
  }
}
