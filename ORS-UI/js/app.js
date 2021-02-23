function dislayError(fname, msg) {
    var errorTag = "error." + fname;
    document.getElementById(errorTag).innerHTML = msg;
          }

function dislaySuccess(fname, msg) {
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