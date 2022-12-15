import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createClient } from '@supabase/supabase-js';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-security-measures',
  templateUrl: './security-measures.page.html',
  styleUrls: ['./security-measures.page.scss'],
})
export class SecurityMeasuresPage implements OnInit {
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
  var newSecurityMesure = document.getElementById('newSecurityMesure'); // taskInput
  var securityMesureList = document.getElementById('securityMesureList'); // incompleteTask  
  var text = (<HTMLInputElement>newSecurityMesure).value;
  var li = document.createElement('li');
  li.innerHTML =
      "<label id='nameVisitor'>" + text + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ "</label>" +
      "<button class='delete' id='delete'>Supprimer</button>";
  securityMesureList.appendChild(li);
  (<HTMLInputElement>newSecurityMesure).value = '';
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
    var newSecurityMesure = (<HTMLInputElement>document.getElementById("newSecurityMesure")).value
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const idmax = (await supabase.from('settings').select("idmax")).data[0];
    await supabase.from('settings').upsert({id: 1, idmax: idmax.idmax+1})
    await supabase.from('data').insert([{id: idmax.idmax,content:newSecurityMesure,isSecurityMeasure: true}]);
  }
  async getDatabase(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    var securityMesureList = document.getElementById('securityMesureList'); // incompleteTask  
    const id = (await supabase.from('data').select("id")).data;   
    const isSecurityMeasure = (await supabase.from('data').select("isSecurityMeasure")).data;
    for (let i = 0; i < id.length; i++) {        
      if(isSecurityMeasure[i].isSecurityMeasure == true) {
        var text = (await supabase.from('data').select("content")).data[i]
        var li = document.createElement('li');
        li.innerHTML =
        "<label id='nameVisitor'>" + text.content + "</label>" +
        "<button id='edit'>Editer</button>" +
        "<button class='delete' id='delete'>Supprimer</button>";
        securityMesureList.appendChild(li);
      }
    }
  }
}
