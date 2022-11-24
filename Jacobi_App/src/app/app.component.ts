import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { App, URLOpenListenerEvent } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private zone: NgZone, private location: Location, private router: Router) {
    this.setupListener();
  }

  setupListener() {
    App.addListener('appUrlOpen', async (data: URLOpenListenerEvent) => {
      console.log('app opened with URL: ', data);
       this.zone.run(() => {
        this.router.navigateByUrl('/groups', { replaceUrl: true });

        // this.location.replaceState(navigateUrl);
        // window.location.reload();
      });
    });
  }
}
