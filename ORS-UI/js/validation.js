function isNull(val) {
    var flag = true;
    if (val) {
        flag = false;
    }
    return flag;
}

function isEmpty(val) {
    var flag = false;
    if (val) {
        if (val.trim().length == 0) {
            flag = true;
        }
    } else {
        flag = true;
    }
    return flag;
}


function isNumber(val) {
    return !isNaN(val);
}