import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // articles: Array<Article>;
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.io/', 3),
      new Article('React', 'https://angular.io/', 10),
      new Article('View', 'https://angular.io/', 5)
    ];

    enum Role {Employee, Manager, Admin};
    var role: Role = Role.Manager;
    console.log(Role[0]);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}