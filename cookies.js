const popUp = document.getElementById("popUp-cookie");
const result = document.getElementById("result");
const accepted = document.getElementById("result-accepted");
const refused = document.getElementById("result-refused");

// Define o valor da opção "anonymizeIp" de acordo com o consentimento do usuário
/* function setAnalyticsConsent(consent) {
  //window['ga-disable-UA-XXXXXXXXX-X'] = !consent;
  //window['ga']('set', 'anonymizeIp', consent);
} */

function hidePopup() {
  accepted.style.display = 'none';
  refused.style.display = 'none';
  result.style.display = 'none';
}

function aceitarCookies() {
  document.cookie = "cookies=true; max-age=" + 60 * 60 * 24 * 30;
  //setAnalyticsConsent(true);
  // Salva o valor do consentimento no localStorage
  localStorage.setItem("cookieBannerDisplayed", "true");
  popUp.classList.add("hide");
  result.style.display = "block";
  refused.style.display = "none";
  accepted.classList.add("view");
  setTimeout(hidePopup, 6000);

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Você aceitou a politica',
    showConfirmButton: false,
    toast: true,
    timer: 6000
  })
}

function recusarCookies() {
  document.cookie = "cookies=false; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  //setAnalyticsConsent(false);
  localStorage.setItem("cookieBannerDisplayed", "false");
  popUp.classList.add("hide");
  result.style.display = "block";
  accepted.style.display = "none";
  refused.classList.add("view");
  setTimeout(hidePopup, 6000);

  Swal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'Você não aceitou a politica',
    showConfirmButton: false,
    toast: true,
    timer: 6000
  })
}

// Checando se o cookie foi aceito. Caso SIM, não exibe msg
let checkCookie = document.cookie.indexOf("cookies=true");
checkCookie != -1 ? popUp.classList.add("hide") : popUp.classList.remove("hide");
