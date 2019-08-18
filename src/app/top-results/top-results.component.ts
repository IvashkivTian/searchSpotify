import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService} from '../general.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-top-results',
  templateUrl: './top-results.component.html',
  styleUrls: ['./top-results.component.scss']
})
export class TopResultsComponent implements OnInit {

   searchStr:string;
   artists : any[] =[];
  
  constructor(private http:HttpClient,
    private service: GeneralService) { }
   
  ngOnInit() {
    
  }

  searchMus(txt:string){
      this.service.searchMusic(txt)
        .subscribe((data:any)=>{
          this.artists = data;
          console.log(this.artists)
        })
    }
  

           
 }  
  

