
// web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBrCmSlPZpnqidKkwI-JjRs7HRgSEMkDII",
    authDomain: "tikram-2020.firebaseapp.com",
    databaseURL: "https://tikram-2020.firebaseio.com",
    projectId: "tikram-2020",
    storageBucket: "tikram-2020.appspot.com",
    messagingSenderId: "289676916335",
    appId: "1:289676916335:web:ad9d712670195c06b5bf9a",
    measurementId: "G-5T5VQJ8XJL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function submitPhone(option) {
    if (option === "one") {
        if (validNumber(document.getElementsByName('phoneNumber')[0].value)) {
            saveNumber(JSON.stringify(document.getElementsByName('phoneNumber')[0].value),"one", ()=>{
                window.location.href = "option-one.html"
            })
        } else {
            let errorSpan = document.getElementsByClassName('error-msg')[0];
            errorSpan.innerHTML = "من فضلك ادخل رقم لبناني صحيح مكون من 8 ارقام "
        }
    } else if (option === "two") {
        if (validNumber(document.getElementsByName('phoneNumber')[1].value)) {
            saveNumber(JSON.stringify(document.getElementsByName('phoneNumber')[1].value),"two", ()=>{
                window.location.href = "option-two.html"
            })
        } else {
            let errorSpan = document.getElementsByClassName('error-msg')[1];
            errorSpan.innerHTML = "من فضلك ادخل رقم لبناني صحيح مكون من 8 ارقام "
        }
    }

}
function validNumber(num) {
    let patt = /^((03\d{1})|(70\d{1})|(71\d{1})|(76([0:1]|[3:9]){1})|(788)|(789)|(79[123]{1})|(81[23467]{1}))\d{5}$/
    return patt.test(num);
}
function saveNumber(num, option, callback){
    let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    callback();
                }
            };
            xhttp.open("POST", "https://tikram-2020.firebaseio.com/phones-option-"+ option +".json", true);
            xhttp.send(num);
}