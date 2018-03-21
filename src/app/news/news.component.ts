import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news;
  constructor(service: NewsService) { 
    this.news = service.getNews();
   }
  ngOnInit() {
  }

}
