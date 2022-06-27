// countryUrl=https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json

// stateUrl=https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json

// cityUrl=https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json

///////////////////////////

const selectDrop = document.querySelector("#countryName");

document.addEventListener("DOMContentLoaded", () => {
  fetch(
    `https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      let output = "";
      data.forEach((country) => {
        let opt = document.createElement("option");
        opt.innerText = country.name;
        opt.setAttribute("value", country.id);
        selectDrop.appendChild(opt);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

///////////
const signForm = document.getElementById("signForm");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const mobileNo = document.getElementById("mobileNo");

signForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const isMail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const validate = () => {
  const fNameVal = fName.value.trim();
  const lNameVal = lName.value.trim();
  const emailVal = email.value.trim();
  const passVal = pass.value.trim();
  const mobileNoVal = mobileNo.value.trim();

  if (fNameVal === "") {
    setErrorMsg(fName, "Name Can Not Blank");
  } else if (fNameVal.length <= 2) {
    setErrorMsg(fName, "first Name Min 3 Character");
  } else {
    setSuccessMsg(fName);
  }

  if (lNameVal === "") {
    setErrorMsg(lName, "Last Name Can Not Blank");
  } else if (lNameVal.length <= 2) {
    setErrorMsg(lName, "first Name Min 3 Character");
  } else {
    setSuccessMsg(lName);
  }

  if (emailVal === "") {
    setErrorMsg(email, "Email Can Not Blank");
  } else if (!isMail(emailVal)) {
    setErrorMsg(email, "Not a valid Email");
  } else {
    setSuccessMsg(email);
  }

  if (passVal === "") {
    setErrorMsg(pass, "Mobile Can Not Blank");
  } else if (passVal.length <= 5) {
    setErrorMsg(pass, "Min 6 Character");
  } else {
    setSuccessMsg(pass);
  }

  if (mobileNoVal === "") {
    setErrorMsg(mobileNo, "Mobile Can Not Blank");
  } else if (mobileNoVal.length != 10) {
    setErrorMsg(mobileNo, "Not a valid Mobile Number");
  } else {
    setSuccessMsg(mobileNo);
  }
};
function setErrorMsg(input, errorMsg) {
  const pElement = input.parentElement;
  const small = pElement.querySelector("small");
  pElement.className = "formControl error";
  small.innerText = errorMsg;
}
function setSuccessMsg(input) {
  const pElement = input.parentElement;
  pElement.className = "formControl success";
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  console.log("click");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
