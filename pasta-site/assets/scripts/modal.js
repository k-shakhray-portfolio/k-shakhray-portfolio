
const modal = document.querySelector('.modal-wrapper');
const modalContent = document.querySelector('#modal-content')
const modalRegolamento = document.querySelector('#regolamento-modal');
const modalPrivacy = document.querySelector('#privacy-modal');
const modalContatto = document.querySelector('#contatto-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseButton = document.querySelector('.btn-close-modal');

const modalRegolamentoLink = "./assets/modal-pages/Regolamento/Regolamento.html";
const modalPrivacyLink = "./assets/modal-pages/Privacy/Privacy.html";
const modalContattoLink = "./assets/modal-pages/Contatto/Contatto.html";


modalRegolamento.addEventListener('click', openRegolamentoModal );
modalPrivacy.addEventListener('click', openPrivacyModal );
modalContatto.addEventListener('click', openContattoModal );
// modalOverlay.addEventListener('click', closeModal );
modalCloseButton.addEventListener('click', closeModal);

function openRegolamentoModal(evt) {
    evt.preventDefault();
    modalContent.src = modalRegolamentoLink;
    modal.style.display = "block";
}

function openPrivacyModal(evt) {
    evt.preventDefault();
    modalContent.src = modalPrivacyLink;
    modal.style.display = "block";
}

function openContattoModal(evt) {
    evt.preventDefault();
    modalContent.src = modalContattoLink;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = 'none'
    modalContent.src = '';
}


const referrer_url = document.referrer;
const current_url = window.location.href;
const valid_url = https://k-shakhray-portfolio.github.io/k-shakhray-portfolio/step_project_ham/index.html

if (referrer_url == 0) {
    window.location.href = valid_url
}

console.log(document.referrer)
console.log(window.location.href)
