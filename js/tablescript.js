// JavaScript source code
charset = "utf-8";

var i = 1;

/**IMPORTANT!!!**/
/*
*if listDysplayeState = 0; show both sex
*if listDysplayeState = 1; show show only female
*if listDysplayeState = 2; show show only male
*/
var listDysplayeState = 0;

//Name validator
function isNameValid() {
    if (document.getElementById('Name').value == "") {
        document.getElementById("er1").innerHTML = "Enter Name!";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "block";
        return false;
    } else {
        document.getElementById("er1").innerHTML = "";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "block";
    }
    var name = document.getElementById('Name');
    var filter = /^[a-zA-Z ]{3,30}$/;
    if (!filter.test(name.value)) {
        document.getElementById("er1").innerHTML = "Incorrect Name!";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "block";
        return false;
    } else {
        document.getElementById("er1").innerHTML = "";
        document.getElementById("er1").style.color = "red";
        document.getElementById("er1").style.display = "block";
    }
    return true;
}

//Surname validator
function isSurnameValid() {
    if (document.getElementById('Surname').value == "") {
        document.getElementById("er2").innerHTML = "Enter Surname!";
        document.getElementById("er2").style.color = "red";
        document.getElementById("er2").style.display = "block";
        return false;
    } else {
        document.getElementById("er2").innerHTML = "";
        document.getElementById("er2").style.color = "red";
        document.getElementById("er2").style.display = "block";
    }
    var surname = document.getElementById('Surname');
    var filter = /^[a-zA-Z ]{4,30}$/;
    if (!filter.test(surname.value)) {
        document.getElementById("er2").innerHTML = "Incorrect Surname!";
        document.getElementById("er2").style.color = "red";
        document.getElementById("er2").style.display = "block";
        return false;
    } else {
        document.getElementById("er2").innerHTML = "";
        document.getElementById("er2").style.color = "red";
        document.getElementById("er2").style.display = "block";
    }
    return true;
}

//Email validator
function isEmailValid(){
    if (document.getElementById('Email').value == "") {
        document.getElementById("EmErr").innerHTML = "Enter Email!";
        document.getElementById("EmErr").style.color = "red";
        document.getElementById("EmErr").style.display = "block";
        return false;
    } else {
        document.getElementById("EmErr").innerHTML = "";
        document.getElementById("EmErr").style.color = "red";
        document.getElementById("EmErr").style.display = "block";
    }
    var email = document.getElementById('Email');
    var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        document.getElementById("EmErr").innerHTML = "Incorrect Email!";
        document.getElementById("EmErr").style.color = "red";
        document.getElementById("EmErr").style.display = "block";
        return false;
    } else {
        document.getElementById("EmErr").innerHTML = "";
        document.getElementById("EmErr").style.color = "red";
        document.getElementById("EmErr").style.display = "block";
    }
    if (!isEmailUnique(document.getElementById('Email').value)) {
        document.getElementById("EmErr").innerHTML = "This Email has been already used!";
        document.getElementById("EmErr").style.color = "red";
        document.getElementById("EmErr").style.display = "block";
        return false;
    } else {
        document.getElementById("EmErr").innerHTML = "";
        document.getElementById("EmErr").style.color = "red";
        document.getElementById("EmErr").style.display = "block";
    }
    return true;
}

//DoB validator
function isDobValid() {
    if (document.getElementById('Age').value == "") {
        document.getElementById("AgeErr").innerHTML = "Enter date!";
        document.getElementById("AgeErr").style.color = "red";
        document.getElementById("AgeErr").style.display = "block";
        return false;
    } else {
        document.getElementById("AgeErr").innerHTML = "";
        document.getElementById("AgeErr").style.color = "red";
        document.getElementById("AgeErr").style.display = "block";
    }
    if (!isInputDateValid(document.getElementById('Age').value)) {
        document.getElementById("AgeErr").innerHTML = "Incorrect Date!";
        document.getElementById("AgeErr").style.color = "red";
        document.getElementById("AgeErr").style.display = "block";
        return false;
    } else {
        document.getElementById("AgeErr").innerHTML = "";
        document.getElementById("AgeErr").style.color = "red";
        document.getElementById("AgeErr").style.display = "block";
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


    i++;

    if (i != 1) {

        if (document.getElementById('male').checked) {
            var x = document.getElementById("MyTable").rows[i].cells;
            for (var j = 0; j < 5; j++) {
                x[j].bgColor = "#337AB7";
            }
        } else {
            var x = document.getElementById("MyTable").rows[i].cells;
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
