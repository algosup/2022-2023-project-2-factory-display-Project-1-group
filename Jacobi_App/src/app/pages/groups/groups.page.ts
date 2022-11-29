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

  
  ngOnInit() {
    this.loadMultipleContent();
  }
  async createContent(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const element = await supabase.from('data').insert([{id: 5,content:"okmec"}]);
  }
  async loadContent(){
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const element = (await supabase.from('data').select("content")).data[0];
    console.log(element);
    const currentdiv = document.getElementById("loader");
    currentdiv.appendChild(element.content);
    };

  async loadMultipleContent(){
      const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
      const element = (await supabase.from('data').select("content")).data;
      console.log(element);
      element.forEach(async elements => {
        console.log(elements);
        // var doc = new DOMParser().parseFromString(elements.content, "text/xml");
        // console.log(doc);
        // const ok =await (await supabase.from('data').select("id")).data;
        const newdiv = document.createElement("div")
        newdiv.innerHTML = elements.content;
        const currentdiv = document.getElementById("loader");
        currentdiv.appendChild(newdiv);

      });
    
  }
}

