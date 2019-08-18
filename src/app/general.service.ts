import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class GeneralService {

  constructor(private http: HttpClient) {}
  searchUrl:string;
  
  redirect_uri:string;
  client_id:string ='0189147f22ed4289a6e8a02db62431d3';
  client_secret: string = '90390c27134c4643a8a5b3739b45aa4a';
  
 
  encoded: string = btoa(this.client_id + ':' + this.client_secret);
  base64:string = 'MDE4OTE0N2YyMmVkNDI4OWE2ZThhMDJkYjYyNDMxZDM6OTAzOTBjMjcxMzRjNDY0M2E4YTViMzczOWI0NWFhNGE=';
  
 
  // curl -X "POST" -H "Authorization: Basic MDE4OTE0N2YyMmVkNDI4OWE2ZThhMDJkYjYyNDMxZDM6OTAzOTBjMjcxMzRjNDY0M2E4YTViMzczOWI0NWFhNGE=" -d grant_type=client_credentials https://accounts.spotify.com/api/token
  // {"access_token":"BQDAm2QLsuY-shLPqAHtXjxkPQC9FbmIqGwGF4Q-0pV3J-9cxknH12OcJEfIvDseqlF9N2hZnlxaOTV5ixY","token_type":"Bearer","expires_in":3600,"scope":""}
  
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQANXtvnmwdYhj_6NPBM-BQusVz3AFtH1T42rs3zpY4EI263tt4zqaC3nKvYZnD2vu6bUtEHWG1eaNIrVw0',
    'Content-Type' : 'application/x-www-form-urlencoded'
	})
  

  searchMusic(txt:string, type='artist'){
   
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+txt+'&offset=0&limit=50&market=US&type='+type;

    return this.http.get(this.searchUrl , {headers : this.headers})
    .pipe(map(data => data['artists'].items))
    
}

}
