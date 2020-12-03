
const firstname = document.querySelector('#firstname');
const statusFirstname = document.querySelector('#status_firstname')

console.log(firstname);

firstname.addEventListener("blur", isValid);


function isValid() {

    function f() {

    }
    if (this.value === 0) {
        firstname.classList.add('mooli_error');
        statusFirstname.classList.add('mooli_error');
    }
}

console.log(firstname)