// Define o valor da opção "anonymizeIp" de acordo com o consentimento do usuário
function setAnalyticsConsent(consent) {
  window['ga-disable-UA-XXXXXXXXX-X'] = !consent;
  window['ga']('set', 'anonymizeIp', consent);
}
// Referências aos elementos HTML
const popUp = document.getElementById("popUp-cookie");
/* const btnAbrirModal = document.getElementById("cookie-modal-btn"); */
const btnAceitarCookies = popUp.querySelector("button");
const btnRecusarCookies = popUp.querySelector("a");

btnAceitarCookies.onclick = () => {
  document.cookie = "CookieBy=Blumis; max-age=" + 60 * 60 * 24 * 30;
  popUp.classList.add("hide");
  // Configura o consentimento para "true"
  setAnalyticsConsent(true);
  // Salva o valor do consentimento no localStorage
  localStorage.setItem("cookieBannerDisplayed", "true");
}

btnRecusarCookies.onclick = () => {
  // Configura o consentimento para "false"
  setAnalyticsConsent(false);
  // Salva o valor do consentimento no localStorage
  localStorage.setItem("cookieBannerDisplayed", "true");
  popUp.classList.add("hide");
  alert("Você recusou a política de dados e cookies. Alguns recursos do site podem não funcionar corretamente.");
}

let checkCookie = document.cookie.indexOf("CookieBy=Blumis"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : popUp.classList.remove("hide");

console.log(setAnalyticsConsent)
// Fecha o modal se o usuário clicar fora dele
/* window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */