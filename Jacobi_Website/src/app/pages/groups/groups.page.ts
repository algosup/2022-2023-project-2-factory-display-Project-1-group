import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  user = this.authService.getCurrentUser();
  groups = [];

  constructor(
    private authService: AuthService,
    private data: DataService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navContoller: NavController,
    private router: Router
  ) {}

  
  ngOnInit() {}

  async ionViewWillEnter() {
    this.groups = await this.data.getGroups();
    console.log('groups: ', this.groups);
  }
  async createGroup() {
    const alert = await this.alertController.create({
      header: 'Start Chat Group',
      message: 'Enter a name for your group. Note that all groups are public in this app!',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'My cool group',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create group',
          handler: async (data) => {
            const loading = await this.loadingController.create();
            await loading.present();

            const newGroup = await this.data.createGroup(data.title);
            console.log('new group: ', newGroup);
            if (newGroup) {
              this.groups = await this.data.getGroups();
              await loading.dismiss();

              this.router.navigateByUrl(`/groups/${newGroup.data.id}`);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  signOut() {
    this.authService.signOut();
  }

  openLogin() {
    this.navContoller.navigateBack('/');
  }
  async createContent(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const test = await supabase.from('data').insert([{id: 3,content:"test"}]);
  }
  async loadContent(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const test = await (await supabase.from('data').select("content")).data[0];
    console.log(test);
    document.getElementById("loader").innerHTML = test.content;
    
  }
  
}

