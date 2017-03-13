// JavaScript source code
charset = "utf-8";

/**IMPORTANT!!!**/
/*
*if listDysplayeState = 0; show both sex
*if listDysplayeState = 1; show show only female
*if listDysplayeState = 2; show show only male
*/
var listDysplayeState = 0;

//JavaScript Closures , solve problem with global variable
var sexColorFunction = (function () {
     var counter = 1;
     return function () {return counter += 1;}
})();

function displayErrMsg(elm, msg) { //elm = element name; msg = message whitch will dysplayed; (all string type)
    document.getElementById(elm).innerHTML = msg;
    document.getElementById(elm).style.color = "red";
    document.getElementById(elm).style.display = "block";
}

function clearErrMessage(element) {
    document.getElementById(element).innerHTML = "";
    document.getElementById(element).style.color = "red";
    document.getElementById(element).style.display = "block";
}

//Name validator
function isNameValid() {
    if (document.getElementById('Name').value == "") {
        displayErrMsg("er1", "Enter Name!");
        return false;
    } else {
        clearErrMessage("er1");
    }
    var name = document.getElementById('Name');
    var filter = /^[a-zA-Z ]{1,25}$/;
    if (!filter.test(name.value)) {
        displayErrMsg("er1", "Incorrect Name!");
        return false;
    } else {
        clearErrMessage("er1");
    }
    return true;
}

//Surname validator
function isSurnameValid() {
    if (document.getElementById('Surname').value == "") {
        displayErrMsg("er2", "Enter Surname!");
        return false;
    } else {
        clearErrMessage("er2");
    }
    var surname = document.getElementById('Surname');
    var filter = /^[a-zA-Z ]{1,25}$/;
    if (!filter.test(surname.value)) {
        displayErrMsg("er2", "Incorrect Surname!");
        return false;
    } else {
        clearErrMessage("er2");
    }
    return true;
}

//Email validator
function isEmailValid(){
    if (document.getElementById('Email').value == "") {
        displayErrMsg("EmErr", "Enter Email!");
        return false;
    } else {
        clearErrMessage("EmErr");
    }
    var email = document.getElementById('Email');
    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        displayErrMsg("EmErr", "Incorrect Email!");
        return false;
    } else {
        clearErrMessage("EmErr");
    }
    if (!isEmailUnique(document.getElementById('Email').value)) {
        displayErrMsg("EmErr", "This Email has been already used!");
        return false;
    } else {
        clearErrMessage("EmErr");
    }
    return true;
}

//DoB validator
function isDobValid() {
    if (document.getElementById('Age').value == "") {
        displayErrMsg("AgeErr", "Enter date!");
        return false;
    } else {
        clearErrMessage("AgeErr");
    }
    if (!isInputDateValid(document.getElementById('Age').value)) {
        displayErrMsg("AgeErr", "Incorrect Date!");
        return false;
    } else {
        clearErrMessage("AgeErr");
    }
    return true;
}

//Input validator
function isInputValid() {
    isNameValid();
    isSurnameValid();
    isEmailValid();
    isDobValid();
    if (isNameValid() && isSurnameValid() && isEmailValid() && isDobValid()) {
        return true;
    }
    return false;
}

//Create row in table
function AddRow() {
    
    if (!isInputValid()) {
        return;
    }

    var actual_date = new Date();
    var age = document.getElementById('Age').value;
    if (/./.test(age)) {
        age = age.replace(".", "-");
        age = age.replace(".", "-");
    }
    age = age.split("-");
    var day = age[0];
    var month = age[1];
    var year = age[2];
    var new_date = new Date(Number(year), Number(month) - 1, Number(day));
    age = new Date(actual_date - new_date).getFullYear() - 1970;
    /***********************************************************/
    var table = document.getElementById("MyTable");
    var row = table.insertRow(table.rows.length);
    if (document.getElementById('male').checked) {
        row.className = "male";
    } else {
        row.className = "female";
    }
    var tabl = table.length;
    var cell1 = row.insertCell(0);
    cell1.innerHTML = '<b><span class="bigger">' + document.getElementById('Name').value + ' ' + document.getElementById('Surname').value; + '</span></b>';
    var cell2 = row.insertCell(1);
    cell2.innerHTML = document.getElementById('Email').value;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = age;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = '<i class="fa fa-' + (document.getElementById('male').checked ? '' : 'fe') + 'male" aria-hidden="true"></i>';
    var cell5 = row.insertCell(4);
    
      
    var sexColor = sexColorFunction(); 
    
    if (sexColor != 1) {

        if (document.getElementById('male').checked) {
            var x = document.getElementById("MyTable").rows[sexColor].cells;
            for (var j = 0; j < 5; j++) {
                x[j].bgColor = "#337AB7";
            }
        } else {
            var x = document.getElementById("MyTable").rows[sexColor].cells;
            for (var j = 0; j < 5; j++) {
                x[j].bgColor = "#F48FB1";
            }
        }
    }  
    
  
    cell5.innerHTML = '<i class="fa fa-trash-o red-500" style="font-size:1.3em;" onclick="DeleteRow(this)" aria-hidden="true" value="Delete"></i>';
    document.getElementById("form").reset();
    //Fix display mode
    if (document.getElementById("search") != "") {
        search();
    } else if (listDysplayeState == 1) {
        showFemaleList();
    } else if (listDysplayeState == 2) {
        showManList();
    }
    //End fixing
}
   
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

//Unique Email validator
    function isEmailUnique(email) {
        var table = document.getElementById("MyTable");
        for (var i = 0 ; i < table.rows.length; i++) {
            try {
                var mail_from_cell = table.rows[i].cells[1].innerHTML;
               // console.log(mail_from_cell);
                if (mail_from_cell == email) {
                    return false;
                }
            } catch (err) {
            }
        }
        return true;
    }

//Delete current row
    function DeleteRow(r) {
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

//Show only male
    function showManList() {
        table = document.getElementById("MyTable")
        //Refresh table
        for (var i = 0; i < table.rows.length; i++) {
            try{
                table.rows[i].style.display = "";
            } catch (err) {
            }
        }

        //Hide female
        for (var i = 0; i < table.rows.length; i++) {
            try {
                var femaleClass = table.rows[i].getAttribute("class");
                if (femaleClass == "female") {
                    table.rows[i].style.display = "none";
                }
            } catch (err) {
            }
        }
        listDysplayeState = 2;
        if (document.getElementById("search") != "") {
            search();
        }
    }

    function showFemaleList() {
        table = document.getElementById("MyTable")
        //Refresh table
        for (var i = 0; i < table.rows.length; i++) {
            try {
                table.rows[i].style.display = "";
            } catch (err) {
            }
        }

        //Hide male
        for (var i = 0; i < table.rows.length; i++) {
            try {
                var maleClass = table.rows[i].getAttribute("class"); 
                if (maleClass == "male") {
                    table.rows[i].style.display = "none";
                }
            } catch (err) {
            }
        }
        listDysplayeState = 1;
        if (document.getElementById("search") != "") {
            search();
        }
    }

    function showAllSex() {
        for (var i = 0; i < table.rows.length; i++) {
            try {
                table.rows[i].style.display = "";
            } catch (err) {
            }
        }
        listDysplayeState = 0;
        if (document.getElementById("search") != "") {
            search();
        }
    }

//Searching in table
    function Search() {
        var input, filter, table, tr, td, i;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        table = document.getElementById("MyTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    //Fix display mode
                    if (listDysplayeState == 1) {
                        if (tr[i].getAttribute("class") == "male") {
                            tr[i].style.display = "none";
                        }
                    } else if (listDysplayeState == 2) {
                        if (tr[i].getAttribute("class") == "female") {
                            tr[i].style.display = "none";
                        }
                    }
                    //End fixing
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

