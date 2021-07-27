document.addEventListener("DOMContentLoaded", () => {
    setButtons();
});

function setButtons() {
    // Defualts to Chrome
    const link0 = document.getElementById("a-primary");
    // Defaults to Firefox
    const link1 = document.getElementById("a-secondary");
    // Defualts to Edge
    const link2 = document.getElementById("a-tertiary");
    const browser = getBrowser();

    link0.innerText = `Add to ${browser}`;
    switch(browser) {
        case "Firefox":
            link0.href ="https://addons.mozilla.org/en-US/firefox/addon/auth-helper?src=external-website";
            link1.innerText = "Add to Chrome";
            link1.href = "https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai";
            break;
        case "Edge":
            link0.href = "/docs/en/edge-install";
            link1.innerText = "Add to Chrome";
            link1.href = "https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai";
            link2.innerText = "Add to Firefox";
            link2.href = "https://addons.mozilla.org/en-US/firefox/addon/auth-helper?src=external-website";
            break;
        case "Edg":
            link0.innerText = "Add to Edge";
            link0.href = "/docs/en/edge-install";
            link1.innerText = "Add to Chrome";
            link1.href = "https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai";
            link2.innerText = "Add to Firefox";
            link2.href = "https://addons.mozilla.org/en-US/firefox/addon/auth-helper?src=external-website";
            break;
        case "Opera":
            link0.href = "/docs/en/opera-install";
            break;
        default:
            break;
    }
}

function getBrowser() {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
        return "Firefox";
    } else if (navigator.userAgent.indexOf("Edge") !== -1) {
        return "Edge";
    } else if (navigator.userAgent.indexOf("Edg") !== -1) {
        return "Edg";
    } else if (navigator.userAgent.indexOf("OPR") !== -1 || navigator.userAgent.indexOf("Opera") !== -1) { 
        return "Opera";
    } else {
        return "Chrome"
    }
}
