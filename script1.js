let emp_data = [];
let emp_id = [];
    
    function validation(){

      console.log("im validating");

      const idInput = document.getElementById("idInput").value;
      let idValue = parseInt(idInput);
      let t = true;
      if (isNaN(idValue) || idValue <= 0) {
        document.getElementById("iderror").innerHTML = "ID must be positive integer.";
         t=false;
      } 
      else if(emp_id.includes(idInput)){
        document.getElementById("iderror").innerHTML = "ID must be unique.";
        t=false;
      }
      else {
        document.getElementById("iderror").innerHTML = "";
      }
     
    
      
    
      const nameInput = document.getElementById("nameInput").value;
      const nameRegex = /^[A-Za-z\s]+$/;
    
      if (!nameRegex.test(nameInput)) {
        document.getElementById("nameerror").innerHTML = "Name must contain only alphabets.";
        t=false;
      } else {
        document.getElementById("nameerror").innerHTML = "";
      }
    
      const ageInput = document.getElementById("ageInput").value;
      const ageValue = parseInt(ageInput);
    
      if (isNaN(ageValue) || ageValue < 18 || ageValue > 60) {
        document.getElementById("ageerror").innerHTML= "Age must be between 18 and 60.";
        t=false;
      } else {
        document.getElementById("ageerror").innerHTML = "";
      }
    
    
      const genderInput = document.getElementById("genderInput").value;
    
      if (genderInput === "Select Gender") {
        document.getElementById("gendererror").innerHTML = "Please select a gender.";
        t=false;
      } else {
        document.getElementById("gendererror").innerHTML = "";
      }
    
      const desigInput = document.getElementById("desigInput").value;
    
      if (desigInput === "Select Designation") {
        document.getElementById("desigerror").innerHTML = "Please select a designation.";
        t=false;
      } else {
        document.getElementById("desigerror").innerHTML = "";
      }
    
      const photoInput = document.getElementById("photoInput").value;
    
    
      if (!photoInput.trim()) {
        document.getElementById("photoerror").innerHTML = "Self Photo URL cannot be empty.";
        t=false;
      } else {
        document.getElementById("photoerror").innerHTML = "";
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
      emp_id.push(employee.userId);
      // console.log(emp_id);
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
    
        emp_data.forEach((employee) => {
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
    

    }
    
    function editData(id) {
    
        const employee = emp_data.find((e) => parseInt(e.userId) === id);

        if (!employee) {
            alert('No record found');
            return;
        }
    
        document.getElementById('idedit').value = employee.userId;
        document.getElementById('nameEdit').value = employee.username;
        document.getElementById('ageEdit').value = employee.userAge;
        document.getElementById('genderEdit').value = employee.userGender;
        document.getElementById('desigEdit').value = employee.userDesig;
        document.getElementById('photoEdit').value = employee.userPhoto;
    
        document.querySelector('.model').style.display = 'block';
    }


    function editValidation(){
      console.log(" i am in eidt valisation");
         t = true;
        const nameInput = document.getElementById("nameEdit").value;
        const nameRegex = /^[A-Za-z\s]+$/;
      
        if (!nameRegex.test(nameInput)) {
          document.getElementById("editnameerror").innerHTML = "Name must contain only alphabets.";
          t=false;
        } else {
          document.getElementById("editnameerror").innerHTML = "";
        }
      
        const ageInput = document.getElementById("ageEdit").value;
        const ageValue = parseInt(ageInput);
      
        if (isNaN(ageValue) || ageValue < 18 || ageValue > 60) {
          document.getElementById("editageerror").innerHTML= "Age must be between 18 and 60.";
          t=false;
        } else {
          document.getElementById("editageerror").innerHTML = "";
        }
      
      
        const genderInput = document.getElementById("genderEdit").value;
      
        if (genderInput === "Select Gender") {
          document.getElementById("editgendererror").innerHTML = "Please select a gender.";
          t=false;
        } else {
          document.getElementById("editgendererror").innerHTML = "";
        }
      
        const desigInput = document.getElementById("desigEdit").value;
      
        if (desigInput === "Select Designation") {
          document.getElementById("editdesigerror").innerHTML = "Please select a designation.";
          t=false;
        } else {
          document.getElementById("editdesigerror").innerHTML = "";
        }
      
        const photoInput = document.getElementById("photoEdit").value;
      
      
        if (!photoInput.trim()) {
          document.getElementById("editphotoerror").innerHTML = "Self Photo URL cannot be empty.";
          t=false;
        } else {
          document.getElementById("editphotoerror").innerHTML = "";
        }
        
        return t;
    }
    
    function updateDetails() { 
      console.log("i am in update detsils");

      if(editValidation()){
        
        console.log("i am in validation details");

        let id = document.getElementById('idedit').value;
        let employeeIndex = emp_data.findIndex((e) => parseInt(e.userId) === parseInt(id));
      
        if (employeeIndex === -1) {
          alert('No record found');
          return;
        }
      
        emp_data[employeeIndex].username = document.getElementById('nameEdit').value;
        emp_data[employeeIndex].userAge = document.getElementById('ageEdit').value;
        emp_data[employeeIndex].userGender = document.getElementById('genderEdit').value;
        emp_data[employeeIndex].userDesig = document.getElementById('desigEdit').value;
        emp_data[employeeIndex].userPhoto = document.getElementById('photoEdit').value;


        document.querySelector('.model').style.display = 'none';

        console.log("i am in showing detsils");

        showData();
      }
      
    }      
    
    
    
  function deleteData(id){
    console.log(id);
    let index = emp_data.findIndex((e)=>parseInt(e.userId) === id);
    emp_data.splice(index, 1);
    
    console.log(emp_data);
    showData();
  }


function viewData(id) {
  console.log(id)
  const employee = emp_data.find((e) => parseInt(e.userId) === id);

 console.log(employee);

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



function myFunction() {  // "vishal"
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();  //S
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    for (j = 0; j < 5; j++) {
    td = tr[i].getElementsByTagName("td")[j];
    if (td) {
      txtValue = td.textContent || td.innerText; // vishal
      if (txtValue.toUpperCase().indexOf(filter) > -1) {  //VISHAL.indexof(S) 2>-1
        tr[i].style.display = "";
        break;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  }
}
