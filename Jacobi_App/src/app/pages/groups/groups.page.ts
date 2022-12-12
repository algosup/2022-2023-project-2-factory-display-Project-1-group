import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController, IonSlides } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";
import { HttpClient } from '@angular/common/http';
import OpenWeatherMap from 'openweathermap-ts';
import { ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Console } from 'console';
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
    speed: 1000,
    autoplay: {
      delay: 8000 // in ms (1s ==> 1000ms)
    }
    
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
    var hasMeeting = false;
    var hasVisitors = false;
    var hasEmployeeTask = false;
    var hasSecurityMeasure = false;
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
      const content = (await supabase.from('data').select("content")).data;
      const id = (await supabase.from('data').select("id")).data;
      const title = (await supabase.from('data').select("title")).data;
      const created_at = (await supabase.from('data').select("created_at")).data;
      const isPersonalWidget = (await supabase.from('data').select("isPersonalWidget")).data;
      const isVisitorWidget = (await supabase.from('data').select("isVisitorWidget")).data;
      const isTaskEmployee = (await supabase.from('data').select("isTaskEmployee")).data;
      const isSecurityMeasure = (await supabase.from('data').select("isSecurityMeasure")).data;
      const isMeeting = (await supabase.from('data').select("isMeeting")).data;
      const beginningTask = (await supabase.from('data').select("beginningTask")).data;
      const endingTask = (await supabase.from('data').select("endingTask")).data;
      // var numbercontent = 0;
      for (let i = 0; i < id.length; i++) {        
          if(isPersonalWidget[i].isPersonalWidget == true) {
            const newdiv = document.createElement("div")
            newdiv.innerHTML = title[i].title + content[i].content;
            const currentdiv = document.getElementById("loader0");
            currentdiv.appendChild(newdiv);
          } else if(isVisitorWidget[i].isVisitorWidget == true){
            const newdiv = document.createElement("div")
            newdiv.innerHTML = created_at[i].created_at + content[i].content;
            const currentdiv = document.getElementById("loader1");
            currentdiv.appendChild(newdiv);
          } else if(isTaskEmployee[i].isTaskEmployee == true){
            const newdiv = document.createElement("div")
            newdiv.innerHTML = beginningTask[i].beginningTask + "  "+ endingTask[i].endingTask + content[i].content;
            const currentdiv = document.getElementById("loader2");
            currentdiv.appendChild(newdiv);
          } else if(isSecurityMeasure[i].isSecurityMeasure == true){
            const newdiv = document.createElement("div")
            newdiv.innerHTML = content[i].content;
            const currentdiv = document.getElementById("loader3");
            currentdiv.appendChild(newdiv);
          } else if(isMeeting[i].isMeeting == true){
            const newdiv = document.createElement("div")
            newdiv.innerHTML = beginningTask[i].beginningTask + content[i].content;
            const currentdiv = document.getElementById("loader4");
            currentdiv.appendChild(newdiv);
          } else{
            // alert("error widget not found")
          }            
      }
      // content.forEach(async elements => {
      //   const newdiv = document.createElement("div")
      //   newdiv.innerHTML = elements.content;
      //   const currentdiv = document.getElementById("loader"+numbercontent);
      //   currentdiv.appendChild(newdiv);
      //   numbercontent +=1

      // });
    
  }
}

