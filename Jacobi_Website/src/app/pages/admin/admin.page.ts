import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  user = this.authService.getCurrentUser();
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    
   }

  ngOnInit() {
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', e => {
          button.classList.add('processing');
          e.preventDefault();
      });
    });
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


}
