import { Inews } from '../models/interfaceNews';
import { API_NEWS, API_KEY } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {

  private baseURl = API_NEWS
  private newsData:Inews[] | any
  

  constructor(private HttpClient:HttpClient) {
    
   }

   getNews():Observable<Inews>{
    const country = "br"
    console.log(this.newsData)
    return this.HttpClient.get<Inews>(`${this.baseURl}${country}&apiKey=${API_KEY}`)
    
   }
    
   
  
}
