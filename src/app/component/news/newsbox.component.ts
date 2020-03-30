import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../service/news.service";
import {News} from "../../model/news";

@Component({
  selector: 'app-newsbox',
  templateUrl: './newsbox.component.html',
})
export class NewsboxComponent implements OnInit {
  news: News[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.collectNews();
  }

  private collectNews(): void {
    // this.newsService.getLatest10()
    //   .subscribe(news => this.news = news);
  }
}
