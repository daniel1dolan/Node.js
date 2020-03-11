let form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let emailAddress = document.getElementById("emailAddress");
  let phoneNumber = document.getElementById("phoneNumber");
  let zipCode = document.getElementById("zipCode");
  console.log(firstName.value);
  fetch("/", {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: {
      emailAddress: emailAddress.value,
      firstName: firstName.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      zipCode: zipCode.value
    }
  })
    .then(response => {
      let msg = document.getElementById("msg");
      msg.textContent = "your form was submitted";
    })
    .catch(() => {
      let msg = document.getElementById("msg");
      msg.textContent = "Error in form submission";
    });
  console.log(e);
});
