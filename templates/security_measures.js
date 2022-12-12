var newVisitor = document.getElementById('newVisitor'); // taskInput
var addVisitorButton = document.getElementById('addVisitorButton'); // addTaskButton
var visitorList = document.getElementById('visitorList'); // incompleteTask


var addVisitor = function () {
    var text = newVisitor.value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='nameVisitor'>" + text + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    visitorList.appendChild(li);
    newVisitor.value = '';
}

addVisitorButton.onclick = addVisitor;

addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addVisitor();
    }
});

visitorList.addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
        var li = e.target.parentElement;
        visitorList.removeChild(li);
    }
});