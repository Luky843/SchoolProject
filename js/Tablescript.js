// JavaScript source code
charset = "utf-8";
function Create() {
    //Name Validator
    var Name = document.getElementById('Name');
    var filter = /^[A-Z][a-zA-Z']+[ ]+[A-Z|a-z][a-zA-Z'\- ]*$/;
    if (!filter.test(Name.value)) {
        document.getElementById("er1").innerHTML = "Enter Name and Surname!";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "block";
    }
    else {
        document.getElementById("er1").innerHTML = "";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "none";

        //Email Validator
        var Email = document.getElementById('Email');
        var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!filter.test(Email.value)) {
            document.getElementById("EmErr").innerHTML = "Enter Email!";
            document.getElementById("EmErr").style.color = "red";
            document.getElementById("EmErr").style.display = "block";
        }
        else {
            document.getElementById("EmErr").innerHTML = "";
            document.getElementById("EmErr").style.color = "red";
            document.getElementById("EmErr").style.display = "none";

            //Age Validator

            var age = document.getElementById('Age').value;

            if (!isInputDateValid(age)) {
                document.getElementById("AgeErr").innerHTML = "Wrong Date!";
                document.getElementById("AgeErr").style.color = "red";
                document.getElementById("AgeErr").style.display = "block";
            }
            else {
                document.getElementById("AgeErr").innerHTML = "";
                document.getElementById("AgeErr").style.color = "red";
                document.getElementById("AgeErr").style.display = "none";
                /***********************************************************/
                //get age from date
                var actual_date = new Date();
                if (/./.test(age)) {
                    age = age.replace(".", "-");
                    age = age.replace(".", "-");
                }
                age = age.split("-");
                var day = age[0];
                var mounth = age[1];
                var year = age[2];
                var new_date = new Date(Number(year), Number(mounth) - 1, Number(day));
                age = new Date(actual_date - new_date).getFullYear() - 1970;
                /***********************************************************/

                var table = document.getElementById("MyTable");
                var row = table.insertRow(table.rows.length);
                var tabl = table.length;
                var cell1 = row.insertCell(0);
                cell1.innerHTML = '<b><span class="bigger">' + document.getElementById('Name').value; + '</span></b>';
                var cell2 = row.insertCell(1);
                cell2.innerHTML = document.getElementById('Email').value;
                var cell3 = row.insertCell(2);
                cell3.innerHTML = age;
                var cell4 = row.insertCell(3);
                cell4.innerHTML = '<i class="fa fa-' + (document.getElementById('male').checked ? '' : 'fe') + 'male" aria-hidden="true"></i>';
                var cell5 = row.insertCell(4);
                cell5.innerHTML = '<button type="button" onclick="Alert(this)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true" value="Delete"></i></button>';
                document.getElementById("form").reset();

            }
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
function isInputDateValid(date) {
    var actual_date = new Date()
    var patern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if (!patern.test(date)) {
        return false;
    }
    var day, month, year;
    //alert("" + date);
    //alert(typeof date);
    if (/-/.test(date)) {
        var res = date.split("-");
        day = res[0];
        month = res[1];
        year = res[2];
    } else if (/./.test(date)) {
        var res = date.split(".");
        day = res[0];
        month = res[1];
        year = res[2];
    } else {
        return false;
        var r = date.replace(/\//i, "-");
        var res = r.split("-");
        day = res[0];
        month = res[1];
        year = res[2];
    }
    new_date = new Date(Number(year), Number(month) - 1, Number(day));
    if (new_date >= actual_date) {
        return false;
    }
    return true;
}


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
