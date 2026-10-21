document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(emailValue)) {
            document.getElementById("subscribedEmail").textContent = emailValue;
            const modalElement = document.getElementById("newsletterModal");
            const successModal = new bootstrap.Modal(modalElement);
            successModal.show();
            form.reset();
        } else {
            alert("Mohon masukkan alamat email dengan format yang benar (contoh: nama@email.com).");
            emailInput.focus();
        }
    });
});