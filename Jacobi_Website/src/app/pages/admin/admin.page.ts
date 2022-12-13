import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('click', e => {
          button.classList.add('processing');
          e.preventDefault();
      });
    });
  }

}
