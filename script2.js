let emp_data = [
    // {
    //   userId: "1",
    //   username: "Vishal",
    //   userAge: "22",
    //   userGender: "male",
    //   userDesig: "SE",
    //   userPhoto: "img"
    // },
    // {
    //   userId: "2",
    //   username: "Jigar",
    //   userAge: "20",
    //   userGender: "male",
    //   userDesig: "SA",
    //   userPhoto: "img1"
    // },
    // {
    //   userId: "3",
    //   username: "Raj",
    //   userAge: "22",
    //   userGender: "male",
    //   userDesig: "SE",
    //   userPhoto: "img"
    // },
  ];
  
  function validation(){
    console.log("im validating");
    const idInput = document.getElementById("idInput").value;
    const idValue = parseInt(idInput);
  
     let t = true;
    if (isNaN(idValue) || idValue <= 0) {
      document.getElementById("iderror").innerHTML = "ID must be a positive integer.";
       t=false;
    } else {
      document.getElementById("iderror").innerHTML = "";
      t = true;
    }
  
    const nameInput = document.getElementById("nameInput").value;
    const nameRegex = /^[A-Za-z]+$/;
  
    if (!nameRegex.test(nameInput)) {
      document.getElementById("nameerror").innerHTML = "Name must contain only alphabets.";
      t=false;
    } else {
      document.getElementById("nameerror").innerHTML = "";
      t = true;
    }
  
    const ageInput = document.getElementById("ageInput").value;
    const ageValue = parseInt(ageInput);
  
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 60) {
      document.getElementById("ageerror").innerHTML= "Age must be between 18 and 60.";
      t=false;
    } else {
      document.getElementById("ageerror").innerHTML = "";
      t = true;
    }
  
  
    const genderInput = document.getElementById("genderInput").value;
  
    if (genderInput === "Select Gender") {
      document.getElementById("gendererror").innerHTML = "Please select a gender.";
      t=false;
    } else {
      document.getElementById("gendererror").innerHTML = "";
      t = true;
    }
  
    const desigInput = document.getElementById("desigInput").value;
  
    if (desigInput === "Select Designation") {
      document.getElementById("desigerror").innerHTML = "Please select a designation.";
      t=false;
    } else {
      document.getElementById("desigerror").innerHTML = "";
      t = true;
    }
  
    const photoInput = document.getElementById("photoInput").value;
  
  
    if (!photoInput.trim()) {
      document.getElementById("photoerror").innerHTML = "Self Photo URL cannot be empty.";
      t=false;
    } else {
      document.getElementById("photoerror").innerHTML = "";
      t = true;
    }

return t;
  }
  
  function Submit() {
    event.preventDefault();
    console.log("im in submit function")
  if(validation()){

    console.log("im in if condition");
    employee = {
      userId: "",
      username: "",
      userAge: "",
      userGender: "",
      userDesig: "",
      userPhoto: "",
    };
  
    employee.userId = document.getElementById("idInput").value;
    employee.username = document.getElementById("nameInput").value;
    employee.userAge = document.getElementById("ageInput").value;
    employee.userGender = document.getElementById("genderInput").value;
    employee.userDesig = document.getElementById("desigInput").value;
    employee.userPhoto = document.getElementById("photoInput").value;



    // push data to array
    emp_data.push(employee);

    showData();

    resetData();
  }
}


    
  function resetData(){
    document.getElementById("idInput").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("genderInput").value = "Select Gender";
    document.getElementById("desigInput").value = "Select Designation";
    document.getElementById("photoInput").value = "";
  }


  
  function showData() {
      const employeeList = document.getElementById('table_list');
      employeeList.innerHTML = '';
  
      emp_data.forEach((employee, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${employee.userId}</td>
            <td>${employee.username}</td>
            <td>${employee.userAge}</td>
            <td>${employee.userGender}</td>
            <td>${employee.userDesig}</td>
            <td>
              <button id="editbtn_1" onclick="editData(${employee.userId})">Edit</button>
              <button id="deletebtn_1" onclick="deleteData(${employee.userId})">Delete</button>
              <button id="viewbtn_1" onclick="viewData(${employee.userId})">View</button>
  
            </td>
          `;
          employeeList.appendChild(row);
        });
  //   return emp_data;

  }
  
  function editData(id) {
  
      const employee = emp_data.find((e) => parseInt(e.userId) === id);

      if (!employee) {
          alert('No record found');
          return;
      }
  
      // Populate the edit popup fields with the employee's data
      document.getElementById('idedit').value = employee.userId;
      document.getElementById('nameEdit').value = employee.username;
      document.getElementById('ageEdit').value = employee.userAge;
      document.getElementById('genderEdit').value = employee.userGender;
      document.getElementById('desigEdit').value = employee.userDesig;
      document.getElementById('photoEdit').value = employee.userPhoto;
  
      document.querySelector('.model').style.display = 'block';
    }


  
  function updateDetails() {
      let id = document.getElementById('idedit').value;
      let employeeIndex = emp_data.findIndex((e) => parseInt(e.userId) === parseInt(id));
    
      if (employeeIndex === -1) {
        alert('No record found');
        return;
      }
    
      // Update the employee data with the new values from the edit popup
      emp_data[employeeIndex].username = document.getElementById('nameEdit').value;
      emp_data[employeeIndex].userAge = document.getElementById('ageEdit').value;
      emp_data[employeeIndex].userGender = document.getElementById('genderEdit').value;
      emp_data[employeeIndex].userDesig = document.getElementById('desigEdit').value;
      emp_data[employeeIndex].userPhoto = document.getElementById('photoEdit').value;


      document.querySelector('.model').style.display = 'none';

      showData();
      
  }      
  
  
  
  function deleteData(id){
      console.log(id);
      // console.log("vishal");
      // let idValue = emp_data.filter((e)=>e.userId === id);
      // console.log(idValue);
      // if(idValue.length === 0){
      //     alert('No record Found');
      //     console.log(idValue);
      //     return;
      // }
      // let index = ;
    let index = emp_data.findIndex((e)=>parseInt(e.userId) === id);
      emp_data.splice(index, 1);
  
      console.log(emp_data);
      showData();
  }

  
  
// function viewData(id){
//   // Find the employee with the given id


//   const employee = emp_data.find((e) => parseInt(e.userId) === id);

//   if (!employee) {
//     alert('No record found');
//     return;
//   }

//   // Populate the view popup fields with the employee's data
//   document.getElementById('idedit').value = employee.userId;
//   document.getElementById('nameEdit').value = employee.username;
//   document.getElementById('ageEdit').value = employee.userAge;
//   document.getElementById('genderEdit').value = employee.userGender;
//   document.getElementById('desigEdit').value = employee.userDesig;
//   document.getElementById('photoEdit').value = employee.userPhoto;


//   // Show the view popup
//   document.querySelector('.view').style.display = 'block';
// }

function viewData(id) {
console.log(id)
const employee = emp_data.find((e) => parseInt(e.userId) === id);

console.log(employee);

// Populate the edit popup fields with the employee's data
document.getElementById('viewImage').src = employee.userPhoto;
document.getElementById('viewId').innerHTML = employee.userId;
document.getElementById('viewName').innerHTML = employee.username;
document.getElementById('viewAge').innerHTML = employee.userAge;
document.getElementById('viewGender').innerHTML = employee.userGender;
document.getElementById('viewDesig').innerHTML = employee.userDesig;

document.querySelector('.view').style.display = 'block';
}

function cancelDetails(){
document.querySelector('.view').style.display = 'none';
}