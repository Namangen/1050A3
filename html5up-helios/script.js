document.addEventListener("DOMContentLoaded", function () {
  const discoverButton = document.getElementById("discoverButton");
  const modal = document.getElementById("newsletterModal");
  const closeModal = document.getElementById("closeModal");
  const submitEmail = document.getElementById("submitEmail");
  const emailInput = document.getElementById("emailInput");

  discoverButton.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex"; // flex shows modal and centers it
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  submitEmail.addEventListener("click", function () {
    const email = emailInput.value.trim();
    if (email) {
      // Do something later, like send to backend
      modal.style.display = "none";
      emailInput.value = "";
    } else {
      emailInput.style.borderColor = "red";
    }
  });
});

