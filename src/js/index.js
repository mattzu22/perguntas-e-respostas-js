const inputRadio = document.querySelectorAll("[type=radio]");

inputRadio.forEach((input) => {
  input.addEventListener("click", (e) => {
    let marcado = e.target.value;
    console.log(marcado);

    if (marcado == "correta") {
      const parentNode = e.target.parentNode;
      parentNode.style.backgroundColor = "green";

      const incorretas = parentNode.parentNode.querySelectorAll("[type=radio]");

      incorretas.forEach((incorreta) => {
        incorreta.disabled = "true";
      });
    } else if (marcado == "incorreta") {
      const parentNode = e.target.parentNode;
      parentNode.style.backgroundColor = "red";

      const incorretas = parentNode.parentNode.querySelectorAll("[type=radio]");

      incorretas.forEach((incorreta) => {
        incorreta.disabled = "true";
      });

      const correta = parentNode.parentNode.querySelector("[value=correta]");
      correta.parentNode.style.backgroundColor = "green";
    }
  });
});
