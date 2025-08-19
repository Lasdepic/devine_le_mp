document.addEventListener("DOMContentLoaded", function () {
  const clickBtn = document.getElementById("btnValidate");
  const affichageImg = document.getElementById("imgWesh");
  const container = document.querySelector(".container");

  clickBtn.addEventListener("click", () => {
    if (
      document.getElementById("inputPass") ||
      document.getElementById("inputValidate") ||
      document.getElementById("btnValPass")
    ) {
      return;
    }

    const inputPass = document.createElement("input");
    const inputValidate = document.createElement("input");
    const btnValPass = document.createElement("button");

    inputPass.id = "inputPass";
    inputValidate.id = "inputValidate";
    btnValPass.id = "btnValPass";

    inputPass.placeholder = "Entrez le mot de passe";
    inputValidate.placeholder = "Valider le mot de passe";
    inputPass.type = "password";
    inputValidate.type = "password";
    btnValPass.textContent = "Valider";
    btnValPass.className = "btnValidate";

    container.appendChild(inputPass);
    container.appendChild(inputValidate);
    container.appendChild(btnValPass);

    const hiddenPassword = "YXBwZW5kQ2hpbGQ=";

    btnValPass.addEventListener("click", () => {
      const motDePasse = atob(hiddenPassword); 

      if (
        inputPass.value === inputValidate.value &&
        inputPass.value === motDePasse
      ) {
        affichageImg.innerHTML =
          "<img src='https://monoprixfranchise.lu/cdn/shop/files/images_2F2775339-1_grande.jpg?v=1728607997' width='300' height='300'/> <br> Bravo tu as gagné un sandwich au thon ! ";
      } else {
        affichageImg.innerHTML =
          "<span style='color:red'>Mot de passe incorrect.<br> Petit indice, c'est en rapport avec JS</span>";
      }
    });
  });
});
