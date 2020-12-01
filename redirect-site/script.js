const referrer_url = document.referrer;
const current_url = window.location.href;
const valid_url = 'https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/pasta-site/Barilla.html'


if (referrer_url == 0) {
    window.location.href = valid_url
}

if (referrer_url === valid_url) {
    window.location.href = 'https://www.google.com/'
}

console.log(document.referrer)
console.log(window.location.href)