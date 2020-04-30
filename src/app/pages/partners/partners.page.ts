import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.page.html',
  styleUrls: ['./partners.page.scss'],
})
export class PartnersPage implements OnInit {

  data: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
      .getData('everything?domains=wsj.com')
    .subscribe(data => {
      // console.log(data);
      this.data = data;
    });
  }
// .getData('topics/world?token=dbc85cbffcde7292900d94ddfeb819dc') -----> for google news api
  onGoToFolderPage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/folder']);
  }

}
