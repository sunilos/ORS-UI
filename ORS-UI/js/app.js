/**Display error message t0 "error.<fname>" element */
function dislayError(fname, msg) {
    var errorTag = "error." + fname;
    document.getElementById(errorTag).innerHTML = msg;
          }

/**Display success message t0 "success.<fname>" element */
function displaySuccess(fname, msg) {
    var errorTag = "success." + fname;
    document.getElementById(errorTag).innerHTML = msg;
        }

/**
 * Display inout error message
 * @param {} ele 
 * @param {*} msg 
 */
function errorInput(ele, msg) {
    ele.style.borderColor = "red";
    var errorTag = "error." + ele.name;
    document.getElementById(errorTag).innerHTML = msg;
      }

/**
 * Reset input element
 * @param {*} ele 
 */
function resetInput(ele) {
    //alert('I am here');
    ele.style.borderColor = "rgb(3, 224, 139)";
    var errorTag = "error." + ele.name;
    document.getElementById(errorTag).innerHTML = "";
    }

/**
 * Make AJAX HTTP GET call
 * @param {*} url 
 * @param {*} callback 
 */
function httpGet(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            callback(obj);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/**
 * Make AJAX HTTP POST call
 * @param {*} url 
 * @param {*} jsonData 
 * @param {*} callback 
 */
function httPost(url, jsonData, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            callback(obj);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.send();
}
/** 
 * Sort object array by a property.  
 * prefix - will sort array in descending order
 */
function orderBy(property) {
    var sortOrder = 1; //Ascending
    if (property[0] === "-") {
        sortOrder = -1; //Descending
        property = property.substr(1);
    }
    return function(a, b) {
        var result = 0;
        if (a[property] < b[property]) {
            result = -1; //first is small
        } else if (a[property] > b[property]) {
            result = 1; //second is small
        } else {
            result = 0; //both are equal
        }
        return result * sortOrder;
    }
}