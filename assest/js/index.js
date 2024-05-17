var database = firebase.database();

function writeUserData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var comments = document.getElementById('comments').value;
    database.ref('message/').push().set({
        name: name,
        email: email,
        contact: contact,
        comments: comments
    })
}