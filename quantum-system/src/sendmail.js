

document.addEventListener('DOMContentLoaded', function () {
    const form1 = document.getElementById('form_1');
    const form2 = document.getElementById('form_2');
    const buttons = document.querySelectorAll('.subscribe')

    form1.addEventListener('submit', sendMail);
    
    async function sendMail(e) {
        e.preventDefault();

        let formData = new FormData(form1);

        buttons.forEach(el => el.disabled = true)

        let response = await fetch('send.php', {
            method: 'POST',
            body: formData
        })

        if(response.ok) {
            let result = await response.json();
            console.log(result.message);

            buttons.forEach(el => el.disabled = false)
        }
    }
})