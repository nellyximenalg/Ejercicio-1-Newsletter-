document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let valido = true;

  function mostrarError(campo, mensaje) {
    campo.querySelector(".error").textContent = mensaje;
    const input = campo.querySelector("input");
    const image = campo.querySelector(".error-image");
    if (input) {
      input.classList.add("error-input");
      if (image) {
        image.style.display = "block";
      }
      valido = false;
    }
  }
  function limpiarError(campo) {
    campo.querySelector(".error").textContent = "";
    const input = campo.querySelector("input");
    const image = campo.querySelector(".error-image");
    if (input) {
      input.classList.remove("error-input");
    }
    if (image) {
      image.style.display = "none";
    }
  }
  //Validar si hay texto en los input
  const firstname = document.getElementById("firstname").parentElement;
  if (firstname.querySelector("input").value.trim() === "") {
    mostrarError(firstname, "This field is required");
  } else {
    limpiarError(firstname);
  }
  const lastname = document.getElementById("lastname").parentElement;
  if (lastname.querySelector("input").value.trim() === "") {
    mostrarError(lastname, "This field is required");
  } else {
    limpiarError(lastname);
  }

  const email = document.getElementById("email").parentElement;
  const emailValue = email.querySelector("input").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    mostrarError(email, "This field is required");
  } else if (!emailRegex.test(emailValue)) {
    mostrarError(email, "Please enter a valid email address");
  } else {
    limpiarError(email);
  }

  const password = document.getElementById("password").parentElement;
  if (password.querySelector("input").value.trim() === "") {
    mostrarError(password, "This field is required");
  } else {
    limpiarError(password);
  }

  if (valido) {
    alert("Formulario llenado correctamente");
  }
});