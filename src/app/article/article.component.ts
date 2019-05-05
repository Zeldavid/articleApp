import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Article } from "./article.model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row";
  @Input() article: Article;

  // public article: Article;

  // public votes: number;
  // public title: string;
  // public link: string;

  constructor() {
    // this.title = 'Angular';
    // this.link = 'http://angular.io';
    // this.votes = 10;

    // this.article = new Article("Angular", "http://angular.io", 10);
  }

  // voteUp() {
  //   // this.votes += 1;
  //   // this.article.votes += 1;
  //   return false;
  // }

  // voteDown() {
  //   // this.votes -= 1;
  //   this.article.votes -= 1;
  //   return false;
  // }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}
}
