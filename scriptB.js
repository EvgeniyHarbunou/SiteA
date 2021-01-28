// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('myParam');



// console.log(urlParams)
// console.log(myParam)
// console.log(window.location.search)

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
 const phone = getParameterByName('phone')
 console.log(phone)
alert(`phone   ${phone}`);
alert(`id from cookie`, document.cookie )