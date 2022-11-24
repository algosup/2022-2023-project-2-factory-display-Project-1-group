import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        console.log('GOT USER ON LOGIN');
        this.router.navigateByUrl('/groups', { replaceUrl: true });
      }
    });
  }

  get email() {
    return this.credentials.controls.email;
  }

  get password() {
    return this.credentials.controls.password;
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.signIn(this.credentials.getRawValue()).then(async (data) => {
      await loading.dismiss();

      if (data.error) {
        this.showAlert("Le mot de passe ou l'adresse email est erroné", data.error.message);
      }
    });
  }
  async forgotPw() {
    const alert = await this.alertController.create({
      header: 'Changer votre mot de passe',
      message: 'Inserer votre email',
      inputs: [
        {
          type: 'email',
          name: 'email',
        },
      ],
      buttons: [
        {
          text: 'Annulé',
          role: 'Annulé',
        },
        {
          text: 'Mot de passe oublié ?',
          handler: async (result) => {
            const loading = await this.loadingController.create();
            await loading.present();
            const { data, error } = await this.authService.sendPwReset(result.email);
            await loading.dismiss();

            if (error) {
              this.showAlert('Erreur lors de la génération du nouveau mot de passe', error.message);
            } else {
              this.showAlert('Validé !', 'Un email pour changer votre mot de passe a été envoyé a votre adresse email !');
            }
          },
        },
      ],
    });
    await alert.present();
  }



  async showAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
