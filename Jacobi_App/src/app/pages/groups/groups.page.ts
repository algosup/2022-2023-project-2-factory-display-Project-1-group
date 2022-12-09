import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController, IonSlides } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";
import { HttpClient } from '@angular/common/http';
import OpenWeatherMap from 'openweathermap-ts';
import { ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  groups = [];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 500,
    autoplay: true
  };
  @ViewChild("Slides") slides: IonSlides;


  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navContoller: NavController,
    private router: Router,
    private http: HttpClient,
  ) {}
  

  
  ngOnInit() {
    this.loadMultipleContent();
    const a = function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("size_height").innerHTML = h.toString();
    document.getElementById("size_width").innerHTML = w.toString();
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

