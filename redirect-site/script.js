const referrer_url = document.referrer;
const current_url = window.location.href;
const valid_url = 'https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/pasta-site/Barilla.html'


if (referrer_url == 0) {
    window.location.href = valid_url
}

function redirect() {
    if (referrer_url == valid_url) {
        window.location.href = 'https://docs.google.com/document/d/1Ldr4qYKmmbhAMU1Zh-0Whq8V96cU3k-rdes5Qxt6ubE/edit'
    }
}

setTimeout(redirect, 10000);

console.log(document.referrer)
console.log(window.location.href)