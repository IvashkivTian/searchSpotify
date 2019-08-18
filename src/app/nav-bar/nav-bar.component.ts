import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentPage: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(() => this.checkUrl());
    console.log(this.router.url)
  }

  checkUrl(){
    if(this.router.url.includes('artists')){
      this.currentPage = 'artists';
    }else if(this.router.url.includes('songs')){
      this.currentPage = 'songs';
    }else if(this.router.url.includes('albums')){
      this.currentPage = 'albums';
    }
  }
}
