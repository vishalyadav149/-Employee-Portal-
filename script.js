
function Submit() {
  event.preventDefault();
  const idInput = document.getElementById("idInput").value;
  const idValue = parseInt(idInput);


  if (isNaN(idValue) || idValue <= 0) {
    document.getElementById("iderror").innerHTML = "ID must be a positive integer.";
  } else {
    document.getElementById("iderror").innerHTML = "";
  }

  const nameInput = document.getElementById("nameInput").value;
  const nameRegex = /^[A-Za-z]+$/;

  if (!nameRegex.test(nameInput)) {
    document.getElementById("nameerror").innerHTML = "Name must contain only alphabets.";
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }

  const ageInput = document.getElementById("ageInput").value;
  const ageValue = parseInt(ageInput);

  if (isNaN(ageValue) || ageValue < 18 || ageValue > 60) {
    document.getElementById("ageerror").innerHTML= "Age must be between 18 and 60.";
  } else {
    document.getElementById("ageerror").innerHTML = "";
  }


  const genderInput = document.getElementById("genderInput").value;

  if (genderInput === "Select Gender") {
    document.getElementById("gendererror").innerHTML = "Please select a gender.";
  } else {
    document.getElementById("gendererror").innerHTML = "";
  }

  const desigInput = document.getElementById("desigInput").value;

  if (desigInput === "Select Designation") {
    document.getElementById("desigerror").innerHTML = "Please select a designation.";
  } else {
    document.getElementById("desigerror").innerHTML = "";
  }

  const photoInput = document.getElementById("photoInput").value;


  if (!photoInput.trim()) {
    document.getElementById("photoerror").innerHTML = "Self Photo URL cannot be empty.";
  } else {
    document.getElementById("photoerror").innerHTML = "";
  }

}
