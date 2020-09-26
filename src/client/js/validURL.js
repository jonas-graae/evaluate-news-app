
function validURL(url) {
    const rgExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    if (rgExp.test(url)) {
        console.log("This is a vali url");
        return true;
    } else {
        alert('Please type in a valid URL!');
        return false;
    }
}

export { validURL }