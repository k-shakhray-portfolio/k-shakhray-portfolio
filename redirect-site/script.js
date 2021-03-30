const referrer_url = document.referrer;
const current_url = window.location.href;
const valid_url = 'https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/pasta-site/Barilla.html'


if (referrer_url == 0) {
    window.location.href = valid_url
}

function redirect() {
    if (referrer_url === valid_url) {
        window.location.href = 'https://www.google.com/search?q=%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%BE+%D1%87%D1%82%D0%BE+%D1%8F+%D0%BF%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D0%BB+%D0%BA%D0%B0%D0%BA%D0%BE%D0%B9+%D1%81%D0%B0%D0%B9%D1%82+%D0%B7%D0%B4%D0%B5%D1%81%D1%8C+%D0%B1%D1%8B%D0%BB'
    }
}

setTimeout(redirect, 10000);

console.log(document.referrer)
console.log(window.location.href)
