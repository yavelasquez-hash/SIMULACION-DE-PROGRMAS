function loginUsuario(usuario, password) {

  if (usuario == "admin") {

    if (password == "1234") {
      console.log("Bienvenido admin");
    } else {
      console.log("Contraseña incorrecta");
    }

  } else {
    console.log("Usuario incorrecto");
  }

}

loginUsuario("admin", "1234");