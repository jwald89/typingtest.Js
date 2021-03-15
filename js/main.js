let btn = document.querySelector('#btn');
let textme = document.querySelector('#textDis');

document.querySelector('#btn').addEventListener('click', (e) => {

document.querySelector('#fname').value = 'Jikko';
document.querySelector('#lname').value = 'Luna';
document.querySelector('#email').value = 'jikkoluna89@gmail.com';
document.querySelector('h1').innerText = `Hello, Jikko Leigh!`;
document.querySelector('#hello').remove();
document.querySelector('#hide').remove();
document.querySelector('#show').remove();
document.querySelector('#show').classList.toggle('d-none');

});

    document.querySelector('#hello').addEventListener('click', (e) => {

    document.querySelector('#show').classList.toggle('d-none');
    
    });

    // var alertList = document.querySelectorAll('.alert')
    // alertList.forEach(function (alert) {
    // new bootstrap.Alert(alert)
    // });

    // var alertNode = document.querySelector('.alert')
    // var alert = bootstrap.Alert.getInstance(alertNode)
    // alert.close()

    var myAlert = document.getElementById('myAlert');
    let btnClose = document.querySelector('#btn-close');
    let alertMe = document.querySelector('#alertWarn');
    
    document.querySelector('#btn-close').addEventListener('click', (e) => {
    // myAlert.addEventListener('#btn-close', function () {

        document.querySelector('#alertWarn').remove();
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
    });


