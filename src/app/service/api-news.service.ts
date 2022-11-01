import { API_NEWS, API_KEY } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {

  constructor(private HttpClient:HttpClient) {
    
   }

   getNews(){
    const country = "br"
    return this.HttpClient.get(`${API_NEWS}${country}&apiKey=${API_KEY}`)
   }
    
   
  
}
