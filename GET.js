let buttonElement = document.getElementById("sendGetRequestBtn");
let statusCode = document.getElementById("requestStatus");
let responseBody = document.getElementById("httpResponse");
let spinner = document.getElementById("loading")

function searchWikipedia(event) {
  if (event.key === "Enter") {
    spinner.classList.toggle("d-none")
    let url = "https://gorest.co.in/public-api/users";
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        //spinner.classList.toggle("d-none");
        return response.text()
      })
      .then(function (data) {
        spinner.classList.toggle("d-none");
        responseBody.textContent = data
      });
      
  }
}
buttonElement.addEventListener("keydown", searchWikipedia);
