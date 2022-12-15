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
  slideOpts = { // All the settings related to the slider is here

    initialSlide: 0, // Change the initial slide of the slider (0 is the first element)
    slidesPerView: 1, // Display how many slide to you want to see at the same time
    speed: 1000, // speed of the animation when sliding 
    autoplay: { 
      delay: 8000 // Time to wait before sliding in ms (1s ==> 1000ms)   
    }   
  };
  @ViewChild("Slides") slides: IonSlides;
  now: string;

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navContoller: NavController,
    private router: Router,
    private http: HttpClient,
    
  ) {
    setInterval(() => {
      this.now = new Date().toString().split(' ')[4];
    }, 1);
  }
  

  
  ngOnInit() {
    this.loadMultipleContent(); // Load all the widgets first
    const a = function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js'); // load the weather widget into the page
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("size_height").innerHTML = h.toString(); // Allow the weather widget to be more responsive
    document.getElementById("size_width").innerHTML = w.toString(); // Allow the weather widget to be more responsive
  }
  // async getFileFromDatabase(){
  //   const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  //   const spaceCat = document.getElementById("loader")
  //   const { data, error } = await supabase.storage.from('avatars').upload('space-cat.png', spaceCat)
  // }

  async createContent(){ // Function that create a row in the database in the category "data"
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const element = await supabase.from('data').insert([{id: 5,content:"okmec"}]);
  }
  async loadContent(){ // Function that load a single widget to the page
    const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    const element = (await supabase.from('data').select("content")).data[0];
    console.log(element);
    const currentdiv = document.getElementById("loader");
    currentdiv.appendChild(element.content);
    };

  async loadMultipleContent(){ // Function that load all the widgets into the slide
      const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
      const content = (await supabase.from('data').select("content")).data; // Here we load all the part of the database that we need
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
      for (let i = 0; i < id.length; i++) {        
          if(isPersonalWidget[i].isPersonalWidget == true) { // We load all the content in each widget 
            const newdiv = document.createElement("div")
            newdiv.innerHTML = "<h1>"+title[i].title+"</h1>" + "<p>"+content[i].content+ "</p>";
            const currentdiv = document.getElementById("loader0");
            currentdiv.appendChild(newdiv);
          } else if(isVisitorWidget[i].isVisitorWidget == true){
            const newdiv = document.createElement("div")
            newdiv.innerHTML = "<p>"+created_at[i].created_at+"</p>" + "<p>"+content[i].content+"</p>";
            const currentdiv = document.getElementById("loader1");
            currentdiv.appendChild(newdiv);
          } else if(isTaskEmployee[i].isTaskEmployee == true){
            const newdiv = document.createElement("div")
            newdiv.innerHTML = "<p>"+beginningTask[i].beginningTask + "  "+ endingTask[i].endingTask+"</p>" + "<p>"+content[i].content+"</p>";
            const currentdiv = document.getElementById("loader2");
            currentdiv.appendChild(newdiv);
          } else if(isSecurityMeasure[i].isSecurityMeasure == true){
            const newdiv = document.createElement("div")
            newdiv.innerHTML ="<p>"+content[i].content+"</p>";
            const currentdiv = document.getElementById("loader3");
            currentdiv.appendChild(newdiv);
          } else if(isMeeting[i].isMeeting == true){
            const newdiv = document.createElement("div")
            newdiv.innerHTML = "<p>"+beginningTask[i].beginningTask+"</p>" + "<p>"+content[i].content+"</p>";
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

