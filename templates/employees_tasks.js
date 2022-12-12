var appointmentDate = document.getElementById('beginDate');
var appointmentTime = document.getElementById('endDate');
var appointmentVisitor = document.getElementById('newTask'); // taskInput
var addAppointmentButton = document.getElementById('addTaskButton'); // addTaskButton
var appointmentList = document.getElementById('appointmentList'); // incompleteTask


var addAppointment = function () {
    var date = appointmentDate.value;
    var date2 = appointmentTime.value;
    var text = appointmentVisitor.value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='dateapp'>" + text + "</label>" +
        "<label id='timeapp'>" + date + "</label>" +
        "<label id='nameapp'>" + date2 + "</label>" +
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