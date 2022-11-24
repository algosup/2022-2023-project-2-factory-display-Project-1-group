import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  groups = [];

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navContoller: NavController,
    private router: Router
  ) {}

  
  ngOnInit() {}
  async createContent(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const test = await supabase.from('data').insert([{id: 4,content:"test2"}]);
  }
  async loadContent(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const test = await (await supabase.from('data').select("content")).data[0];
    console.log(test);
    document.getElementById("loader").innerHTML = test.content;
    
  }
}

