// JavaScript source code
charset = "utf-8";
function Create() {
    //Name Validator
    if (document.getElementById("Name").value === "") {

        document.getElementById("er1").innerHTML = "Zadajte Meno!";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "block";
    }
    else {
        document.getElementById("er1").innerHTML = "";
        document.getElementById("AgeErr").style.color = "red";
        document.getElementById("AgeErr").style.display = "none";


        //Age Validator
        var age = document.getElementById('Age').value;
        if (isNaN(age) || age < 1 || age > 100) {
            document.getElementById("AgeErr").innerHTML = "Zadajte Vek!";
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
            cell4.innerHTML = '<i class="glyphicon glyphicon-trash" style="color:red;" aria-hidden="true" value="Delete" onclick="deleteRow(this)"></i>';
            document.getElementById("form").reset();
        }
    }
    /*
      var Name = document.getElementById('Name');
      var filter = /^[A-Z][a-zA-Z']+[ ]+[A-Z][a-zA-Z'\- ]*$/;
  
      if (!filter.test(Name.value)) {
          swal({
              title: "Oops...",
              text: "Zadajte meno a priezvisko!",
              type: "error",
              confirmButtonColor: "#AD1457",
              confirmButtonText: "Ok, rozumiem",
          }
  
           );
          Name.focus;
          return false;
        
          return true;
      }*/

}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("MyTable").deleteRow(i);
}

