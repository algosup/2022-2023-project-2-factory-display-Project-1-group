import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-custom-ressource',
  templateUrl: './custom-ressource.page.html',
  styleUrls: ['./custom-ressource.page.scss'],
})
export class CustomRessourcePage implements OnInit {
  user = this.authService.getCurrentUser();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
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
