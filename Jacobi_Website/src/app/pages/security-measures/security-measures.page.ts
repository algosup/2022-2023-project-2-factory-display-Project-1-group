import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-security-measures',
  templateUrl: './security-measures.page.html',
  styleUrls: ['./security-measures.page.scss'],
})
export class SecurityMeasuresPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var newVisitor = document.getElementById('newVisitor'); // taskInput
var addVisitorButton = document.getElementById('addVisitorButton'); // addTaskButton
var visitorList = document.getElementById('visitorList'); // incompleteTask


var addVisitor = function () {
    var text = (<HTMLInputElement>newVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='nameVisitor'>" + text + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    visitorList.appendChild(li);
    (<HTMLInputElement>newVisitor).value = '';
}

addVisitorButton.onclick = addVisitor;

addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addVisitor();
    }
});

// visitorList.addEventListener('click', function (e) {
//     if (e.target.className === 'delete') {
//         var li = e.target.parentElement;
//         visitorList.removeChild(li);
//     }
// });
  }
  switchPage(page: string){
    this.authService.getCurrentUser().subscribe((user) => { // this function check if the user is already identified and redirect him to the content of the website
      if (user) {
        console.log('GOT USER ON LOGIN');
        this.router.navigateByUrl(page, { replaceUrl: true });
      }
    });
  }
}
