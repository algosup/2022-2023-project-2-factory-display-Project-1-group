import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient } from '@supabase/supabase-js';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  user = this.authService.getCurrentUser();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var appointmentDate = document.getElementById('visitorDate');
var appointmentTime = document.getElementById('visitorTime');
var appointmentVisitor = document.getElementById('newVisitor'); // taskInput
var addAppointmentButton = document.getElementById('addAppointmentButton'); // addTaskButton
var appointmentList = document.getElementById('appointmentList'); // incompleteTask


var addAppointment = function () {
    var date = (<HTMLInputElement>appointmentDate).value;
    var time = (<HTMLInputElement>appointmentTime).value;
    var text = (<HTMLInputElement>appointmentVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='dateapp'>" + date + "</label>" +
        "<label id='timeapp'>" + time + "</label>" +
        "<label id='nameapp'>" + text + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    appointmentList.appendChild(li);
    (<HTMLInputElement>appointmentDate).value = '';
    (<HTMLInputElement>appointmentTime).value = '';
    (<HTMLInputElement>appointmentVisitor).value = '';
}

addAppointmentButton.onclick = addAppointment;

addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addAppointment();
    }
});

// appointmentList.addEventListener('click', function (e) {
//     if (e.target.className === 'delete') {
//         var li = e.target.parentElement;
//         appointmentList.removeChild(li);
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
  signOut() {
    this.authService.signOut();
  }
  async sendDatabase(){
    var date = (<HTMLInputElement>document.getElementById("visitorDate")).value
    var time = (<HTMLInputElement>document.getElementById("visitorTime")).value
    var visitorName = (<HTMLInputElement>document.getElementById("newVisitor")).value
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const id = (await supabase.from('settings').select("id")).data[0];
    console.log(id.id);
    console.log(time);
    console.log(date);
    console.log(visitorName);
    await supabase.from('settings')[0].update([{idmax: 1}])
    // .eq('id', 1)
    // await supabase.from('settings').insert([{id: id.id + 1}]);
    var dateTime = date + " " + time
    await supabase.from('data').insert([{id: id,content: visitorName,beginningTask: dateTime}]);

  }






}
