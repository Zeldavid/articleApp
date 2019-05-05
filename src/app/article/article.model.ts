import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Article {
  public title: string;
  public link: string;
  public votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts
  // the domain from a URL, wich we'll explain shrotly
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split("//")[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split("/")[0];
    } catch (err) {
      return null;
    }
  }
}
