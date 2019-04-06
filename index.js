document.addEventListener("DOMContentLoaded", () => {
    setButtons();
});

function setButtons() {
    const link0 = document.getElementById("a-primary");
    const link1 = document.getElementById("a-secondary");
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
            link0.href = "https://www.microsoft.com/store/apps/9P0FD39WFFMK";
            link1.innerText = "Add to Chrome";
            link1.href = "https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai";
            link2.innerText = "Add to Firefox";
            link2.href = "https://addons.mozilla.org/en-US/firefox/addon/auth-helper?src=external-website";
        default:
            break;
    }
}

function getBrowser() {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
        return "Firefox";
    } else if (navigator.userAgent.indexOf("Edge") !== -1) {
        return "Edge";
    } else {
        return "Chrome"
    }
}
