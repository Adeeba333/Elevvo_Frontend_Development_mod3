console.log("Script.js is running");

const form=document.getElementById("registrationForm");
const tableBody=document.querySelector("#clientsTable tbody");

function showError(inputId, errorId, message){
    document.getElementById(errorId).textContent=message;
    document.getElementById(inputId).classList.add("invalid");
}

function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("dobError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("professionError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("addressError").textContent = "";

    document.getElementById("Name").classList.remove("invalid");
    document.getElementById("dateOfBirth").classList.remove("invalid");
    document.getElementById("Gender").classList.remove("invalid");
    document.getElementById("Profession").classList.remove("invalid");
    document.getElementById("Email").classList.remove("invalid");
    document.getElementById("PhoneNumber").classList.remove("invalid");
    document.getElementById("Address").classList.remove("invalid");
}
function isValidEmail(email){
    const atPosition=email.indexOf("@");
    const dotPosition=email.lastIndexOf(".");

    if (email.includes(" "))
        {return false;}
    if (atPosition < 1)
        {return false;}
    if  (dotPosition < atPosition + 2)
        {return false;}
    if (dotPosition === email.length -1)
        {return false;}
    return true;
}
function validateForm(name,dob,email,phone){
    let isValid = true;

    if ( name === "" ){
        showError("Name","nameError","Name is required");
        isValid=false;
    }
    if(dob === ""){
        showError("dateOfBirth","dobError","Date of birth is required.");
        isValid =false;
    }else if (new Date(dob)> new Date()){
        showError("dateOfBirth","dobError","Date of birth cannot be in the future.");
        isValid=false;
    }

    if(email===""){
        showError("Email","emailError","Email is required");
        isValid=false;
    }else if(!isValidEmail(email)){
        showError("Email", "emailError", "Please enter a valid email address.");
        isValid = false;
    }

    if(phone===""){
        showError("PhoneNumber","phoneError","phone number is required");
        isValid=false;
    }else if (isNaN(phone) || phone.length < 7 || phone.length > 11){
        showError("PhoneNumber","phoneError","Phone number must be 7 to 11 digits.");
        isValid=false;
    }
    return isValid;
}

function makeCell(text){
    const cell= document.createElement("td");
    if(text === ""){
        cell.textContent="-";
    }else {
        cell.textContent= text;
    }
    return cell;
}


function addRow(name,dob, gender, profession, email, phone, address){
    const row = document.createElement("tr");

    row.appendChild(makeCell(name));
    row.appendChild(makeCell(dob));
    row.appendChild(makeCell(gender));
    row.appendChild(makeCell(profession));
    row.appendChild(makeCell(email));
    row.appendChild(makeCell(phone));
    row.appendChild(makeCell(address));

    tableBody.appendChild(row);
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    clearErrors();


    const name = document.getElementById("Name").value.trim();
    const dob = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("Gender").value;
    const profession = document.getElementById("Profession").value.trim();
    const email = document.getElementById("Email").value.trim();
    const phone = document.getElementById("PhoneNumber").value.trim();
    const address = document.getElementById("Address").value.trim();

    if (validateForm(name, dob, email, phone) === false) {
        return;
    }

    addRow(name, dob, gender, profession, email, phone, address);
    
    form.reset();
    document.getElementById("Name").focus();
});

form.addEventListener("reset", clearErrors);
