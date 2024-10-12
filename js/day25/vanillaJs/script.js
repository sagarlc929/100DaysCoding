var contacts = [
  {
    name: "summer",
    contact: "9876567876",
    address: "kirtipur",
  }
];

const popupDiv = document.getElementById("popup");
document.getElementById("add").addEventListener("click",()=>{
  popupDiv.classList.remove("hide");
  popupDiv.classList.add("show");
});

document.getElementById("cancel-add").addEventListener("click",()=>{
  popupDiv.classList.add("hide");
  popupDiv.classList.remove("show");
});

document.getElementById("confirm-add").addEventListener("click",()=>{
  const newContact = { name: document.getElementById("name-input").value,
    contact: document.getElementById("contact-intput").value,
    address: document.getElementById("address-input").value
  }
  contacts.push(newContact);
  popupDiv.classList.add("hide");
  popupDiv.classList.remove("show");
  document.getElementById("name-input").value = "";
  document.getElementById("contact-intput").value = ""
  document.getElementById("address-input").value = "";

  updateDisplay();
});

function updateDisplay(){
  contacts.forEach((contactEach)=>{
    const displyDiv = document.createElement("div");

    const infoDiv = document.createElement("div");
    const nameP = document.createElement("p");
    nameP.innerText = contactEach.name;
    const contactP = document.createElement("p");
    contactP.innerText = contactEach.contact;
    const addressP = document.createElement("p");
    addressP.innerText = contactEach.address;
    infoDiv.appendChild(nameP);
    infoDiv.appendChild(contactP);
    infoDiv.appendChild(addressP);

    const buttonDiv = document.createElement("div");
    const callBtn = document.createElement("button");
    callBtn.classList.add("call-btn","contact-btn");
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn", "contact-btn");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn", "contact-btn");
    buttonDiv.appendChild(callBtn);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    displyDiv.appendChild(infoDiv);
    displyDiv.appendChild(buttonDiv);
    document.getElementById("contacts").appendChild(displyDiv);
  });
}
updateDisplay();
