const form = document.getElementById("contact-form");
const displayArea = document.getElementById("displayArea");

const messages = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (fullName && message) {
    const newMessage = { fullName, message };
    messages.push(newMessage);
    displayArea.innerHTML = "";
    messages.forEach(msg => {
      displayArea.innerHTML += `
        <div class="message">
          <h4>${msg.fullName} :</h4>
          <p>${msg.message}</p>
        </div>
      `;
    });

    form.reset();
  }
});