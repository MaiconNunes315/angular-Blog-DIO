
import { ApiNewsService } from './../../service/api-news.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

export class BigCardComponent implements OnInit {

news = [{title:"",description:"",publishedAt:"",url:"",urlToImage:""}]

  constructor(private ApiNewsService:ApiNewsService){
    
  }
  
  ngOnInit(): void {
  this.ApiNewsService.getNews().subscribe({
      next: (res)=>{
      this.news = res.articles
      },

      error: (error)=>error
   })
  }

}
