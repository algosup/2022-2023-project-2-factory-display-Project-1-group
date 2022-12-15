import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient } from '@supabase/supabase-js';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.page.html',
  styleUrls: ['./visitors.page.scss'],
})
export class VisitorsPage implements OnInit {
  user = this.authService.getCurrentUser();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDatabase()
// visitorList.addEventListener('click', function (e) {
//     if (e.target.className === 'delete') {
//         var li = e.target.parentElement;
//         visitorList.removeChild(li);
//     }
// });
  }
  addVisitor() {
    var visitorDate = document.getElementById('visitorDate');
    var newVisitor = document.getElementById('newVisitor'); // taskInput
    var addVisitorButton = document.getElementById('addVisitorButton'); // addTaskButton
    var visitorList = document.getElementById('visitorList'); // incompleteTask    
    var date = (<HTMLInputElement>visitorDate).value;
    var text = (<HTMLInputElement>newVisitor).value;
    var li = document.createElement('li');
    li.innerHTML =
        "<label id='dateVisitor'>" +"Date :"+ date +  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+"</label>" +
        "<label id='nameVisitor'>" +"Nom du visiteur" + text + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
    visitorList.appendChild(li);
    (<HTMLInputElement>visitorDate).value    = '';
    (<HTMLInputElement>newVisitor).value = '';
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
    var visitorName = (<HTMLInputElement>document.getElementById("newVisitor")).value
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const idmax = (await supabase.from('settings').select("idmax")).data[0];
    await supabase.from('settings').upsert({id: 1, idmax: idmax.idmax+1})
    await supabase.from('data').insert([{id: idmax.idmax,content: "<p>" +visitorName+"<p>",isVisitorWidget: true,beginningTask: "<p>" +date +"<p>"}]);
  }
  async getDatabase(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    var visitorList = document.getElementById('visitorList'); // incompleteTask  
    const id = (await supabase.from('data').select("id")).data;   
    const isVisitorWidget= (await supabase.from('data').select("isVisitorWidget")).data;
    for (let i = 0; i < id.length; i++) {        
      if(isVisitorWidget[i].isVisitorWidget == true) {
        var text = (await supabase.from('data').select("content")).data[i]
        var li = document.createElement('li');
        li.innerHTML =
        "<label id='nameVisitor'>" + text.content + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
        visitorList.appendChild(li);
      }
    }
  }

}
