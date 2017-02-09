// JavaScript source code
charset = "utf-8";
function Create() {
    //Name Validator
    var Name = document.getElementById('Name');
    var filter = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;
    if (!filter.test(Name.value)) {
        document.getElementById("er1").innerHTML = "Enter Name!";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "block";
    }
    else {
        document.getElementById("er1").innerHTML = "";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "none";
        

        //Age Validator
        var age = document.getElementById('Age').value;
        if (isNaN(age) || age < 1 || age > 100) {
            document.getElementById("AgeErr").innerHTML = "Enter Age!";
            document.getElementById("AgeErr").style.color = "red";
            document.getElementById("AgeErr").style.display = "block";
        }
        else {
            document.getElementById("AgeErr").innerHTML = "";
            document.getElementById("AgeErr").style.color = "red";
            document.getElementById("AgeErr").style.display = "none";

            var table = document.getElementById("MyTable");
            var row = table.insertRow(table.rows.length);
            var tabl = table.length;
            var cell1 = row.insertCell(0);
            cell1.innerHTML = document.getElementById('Name').value;
            var cell2 = row.insertCell(1);
            cell2.innerHTML = document.getElementById('Age').value;
            var cell3 = row.insertCell(2);
            cell3.innerHTML = '<i class="fa fa-' + (document.getElementById('male').checked ? '' : 'fe') + 'male" aria-hidden="true"></i>';
            var cell4 = row.insertCell(3);
            cell4.innerHTML = '<button type="button" onclick="Alert(this)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true" value="Delete"></i></button>';
            document.getElementById("form").reset();
        
        }
    }
}
    /*
      var Name = document.getElementById('Name');
      var filter = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;
  
      if (!filter.test(Name.value)) {
          swal({
              title: "Oops...",
              text: "Enter name and surname!",
              type: "error",
              confirmButtonColor: "#AD1457",
              confirmButtonText: "OK, I understand",
          }
  
           );
          Name.focus;
          return false;
        
          return true;
      }*/


function Alert(r) {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    },
    function deleteRow() {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("MyTable").deleteRow(i);
        swal("Deleted!", "Current row has been deleted.", "success");

    });
}