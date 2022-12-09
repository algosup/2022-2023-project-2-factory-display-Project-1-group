var appointmentDate = document.getElementById('visitorDate');
var appointmentTime = document.getElementById('visitorTime');
var appointmentVisitor = document.getElementById('newVisitor'); // taskInput
var addAppointmentButton = document.getElementById('addAppointmentButton'); // addTaskButton
var appointmentList = document.getElementById('appointmentList'); // incompleteTask


var addAppointment = function () {
    var date = appointmentDate.value;
    var time = appointmentTime.value;
    var text = appointmentVisitor.value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='dateapp'>" + date + "</label>" +
        "<label id='timeapp'>" + time + "</label>" +
        "<label id='nameapp'>" + text + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    appointmentList.appendChild(li);
    appointmentDate.value = '';
    appointmentTime.value = '';
    appointmentVisitor.value = '';
}

addAppointmentButton.onclick = addAppointment;

addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addAppointment();
    }
});

appointmentList.addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
        var li = e.target.parentElement;
        appointmentList.removeChild(li);
    }
});