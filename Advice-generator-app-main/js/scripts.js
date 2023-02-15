function rerrolAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("title").innerHTML = "ADVICE #" + data.slip.id;
      document.getElementById("advice").innerHTML =
        '"' + data.slip.advice + '"';
    })
    .catch((error) => {
      console.error("Erro ao obter dados da API:", error);
    });
}