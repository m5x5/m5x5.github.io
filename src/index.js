import "./style.css";
import './plane.js';

onload = () => {
  const submitButton = document.getElementById("submit-button");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const form = document.querySelector("form");
  const modal = document.querySelector("#modal");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!validate(name, email, message)) return;

    db.collection("messages")
      .add({
        name: name.value,
        email: email.value,
        message: message.value,
      })
      .then(() => {
        modal.classList.add("active");
        setTimeout(() => {
          modal.classList.add("inactive");
          modal.classList.remove("active");
        }, 3000);
      })
      .catch((err) => {});
  });

  [name, email, message].forEach((input) => {
    input.addEventListener("focus", (e) => {
      input.style.border = "none";
    });
    input.addEventListener("focusout", (e) => {
      validate(name, email, message);
    });
  });

  function validate(name, email, message) {
    const errBorder = "2px solid red";
    let valid = true;
    if (name.value) {
      name.style.border = "none";
    } else {
      name.style.border = errBorder;
      valid = false;
    }
    if (email.value) {
      email.style.border = "none";
    } else {
      email.style.border = errBorder;
      valid = false;
    }
    if (message.value) {
      message.style.border = "none";
    } else {
      message.style.border = errBorder;
      valid = false;
    }

    return valid;
  }
};
