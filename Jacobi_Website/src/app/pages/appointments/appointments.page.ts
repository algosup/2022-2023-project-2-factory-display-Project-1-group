import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";


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
    this.getDatabase()
// appointmentList.addEventListener('click', function (e) {
//     if (e.target.className === 'delete') {
//         var li = e.target.parentElement;
//         appointmentList.removeChild(li);
//     }
// });
  }
  addAppointment() {
    var appointmentDate = document.getElementById('appointmentDate');
    var appointmentTime = document.getElementById('appointmentTime');
    var appointmentVisitor = document.getElementById('newAppointment'); // taskInput
    var addAppointmentButton = document.getElementById('addAppointmentButton'); // addTaskButton
    var appointmentList = document.getElementById('appointmentList'); // incompleteTask    
    var date = (<HTMLInputElement>appointmentDate).value;
    var time = (<HTMLInputElement>appointmentTime).value;
    var text = (<HTMLInputElement>appointmentVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='dateapp'>" + "Date :"+ date + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+"</label>" +
        "<label id='timeapp'>" + "Heure :"+ time + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+"</label>" +
        "<label id='nameapp'>" +"Nom du rendez-vous"+ text + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+"</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    appointmentList.appendChild(li);
    (<HTMLInputElement>appointmentDate).value = '';
    (<HTMLInputElement>appointmentTime).value = '';
    (<HTMLInputElement>appointmentVisitor).value = '';
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
    var date = (<HTMLInputElement>document.getElementById("appointmentDate")).value
    var time = (<HTMLInputElement>document.getElementById("appointmentTime")).value
    var appointement = (<HTMLInputElement>document.getElementById("newAppointment")).value
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const idmax = (await supabase.from('settings').select("idmax")).data[0];
    await supabase.from('settings').upsert({id: 1, idmax: idmax.idmax+1})
    var dateTime = date + " " + time
    await supabase.from('data').insert([{id: idmax.idmax,content: appointement,isMeeting: true,beginningTask: dateTime}]);
  }
  async getDatabase(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    var appointmentList = document.getElementById('appointmentList'); // incompleteTask    
    const id = (await supabase.from('data').select("id")).data;   
    const isMeeting = (await supabase.from('data').select("isMeeting")).data;
    for (let i = 0; i < id.length; i++) {        
      if(isMeeting[i].isMeeting == true) {
        var timeStamp = (await supabase.from('data').select("beginningTask")).data[i]
        var tempDate = timeStamp.beginningTask.toString().split(" ");
        var date = tempDate[0]
        var time = tempDate[1]
        console.log(date);
        console.log(time);
        var text = (await supabase.from('data').select("content")).data[i]
        var li = document.createElement('li');
        li.innerHTML =
            "<label id='dateapp'>" + date + "</label>" +
            "<label id='timeapp'>" + time + "</label>" +
            "<label id='nameapp'>" + text.content + "</label>" +
            "<button id='edit'>Editer</button>" +
            "<button class='delete' id='delete'>Supprimer</button>";
        appointmentList.appendChild(li);
      }
    }
  }






}
