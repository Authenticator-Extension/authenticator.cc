document.addEventListener("DOMContentLoaded", () => {
  let userLanguage = navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage;
  const currentLanguage = document.documentElement.lang;
  const localeURI = "/docs/strings";

  switch (userLanguage) {
    case "zh-cn":
      userLanguage = "zh_CN";
      break;
    case "zh-tw":
      userLanguage = "zh_TW";
      break;
    case "zh":
      userLanguage = "zh_TW";
      break;
    case "pt-br":
      userLanguage = "pt_BR";
      break;
    default:
      userLanguage = userLanguage.substring(0, currentLanguage.length);
      break;
  }

  if (userLanguage && currentLanguage && userLanguage !== currentLanguage) {
    const langChangeDiv = document.getElementById("lang-change-div");
    const langChangeLink = document.getElementById("lang-change-a");
    const langChangeText = document.getElementById("lang-change-text");
    const strings = JSON.parse(get(localeURI));
    const responseCode = head(
      window.location.href.replace(`/${currentLanguage}/`, `/${userLanguage}/`)
    );

    if (
      strings[userLanguage].viewInLang &&
      strings[userLanguage].clickHere &&
      responseCode < 400
    ) {
      langChangeLink.href = window.location.pathname.replace(
        `/${currentLanguage}/`,
        `/${userLanguage}/`
      );
      langChangeLink.innerText = strings[userLanguage].clickHere;
      langChangeText.innerText = strings[userLanguage].viewInLang;
      langChangeDiv.style = null;
    } else {
      if (responseCode < 400) {
        console.log("Target page not found");
      } else {
        console.log("Strings not found for " + userLanguage);
        console.log("Page is " + currentLanguage);
      }
    }
  } else {
    console.error(`ul: ${userLanguage} cl: ${currentLanguage}`);
  }
});

function get(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  return xhr.responseText;
}

function head(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("HEAD", url, false);
  xhr.send();
  return xhr.status;
}
