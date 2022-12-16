import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient } from '@supabase/supabase-js';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employees-tasks',
  templateUrl: './employees-tasks.page.html',
  styleUrls: ['./employees-tasks.page.scss'],
})
export class EmployeesTasksPage implements OnInit {
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
  addAppointment(){
    var appointmentDate = document.getElementById('beginDate');
    var appointmentTime = document.getElementById('endDate');
    var appointmentVisitor = document.getElementById('newTask'); // taskInput
    var addAppointmentButton = document.getElementById('addTaskButton'); // addTaskButton
    var appointmentList = document.getElementById('appointmentList'); // incompleteTask    
    var date = (<HTMLInputElement>appointmentDate).value;
    var date2 = (<HTMLInputElement>appointmentTime).value;
    var text = (<HTMLInputElement>appointmentVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='nametask' >" + 'Nom de la tâche : ' + text +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<label id='timestart' >" + 'Début : ' + date + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<label id='timeend' >" + 'Fin : ' + date2 + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<button id='delete' >Supprimer</button>";
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
    var beginDate = (<HTMLInputElement>document.getElementById("beginDate")).value
    var endDate = (<HTMLInputElement>document.getElementById("endDate")).value
    var task = (<HTMLInputElement>document.getElementById("newTask")).value
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const idmax = (await supabase.from('settings').select("idmax")).data[0];
    await supabase.from('settings').upsert({id: 1, idmax: idmax.idmax+1})
    var dateTime = beginDate
    await supabase.from('data').insert([{id: idmax.idmax,content: task,isTaskEmployee: true,beginningTask: dateTime,endingTask: endDate}]);
  }
  async getDatabase(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    var appointmentList = document.getElementById('appointmentList'); // incompleteTask    
    const id = (await supabase.from('data').select("id")).data;   
    const isTaskEmployee = (await supabase.from('data').select("isTaskEmployee")).data;
    for (let i = 0; i < id.length; i++) {        
      if(isTaskEmployee[i].isTaskEmployee == true) {
        var date = (await supabase.from('data').select("beginningTask")).data[i]
        var date2 = (await supabase.from('data').select("endingTask")).data[i]
        var text = (await supabase.from('data').select("content")).data[i]
        var li = document.createElement('li');
        li.innerHTML =
        "<label id='nametask' >" + 'Nom de la tâche : ' + text.content +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<label id='timestart' >" + 'Début : ' + date.beginningTask + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<label id='timeend' >" + 'Fin : ' + date2.endingTask + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
        "<button id='delete' >Supprimer</button>";
        appointmentList.appendChild(li);
      }
    }
  }
  

}
