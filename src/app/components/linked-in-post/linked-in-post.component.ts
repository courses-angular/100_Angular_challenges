import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'yl-linked-in-post',
  templateUrl: './linked-in-post.component.html',
  styleUrls: ['./linked-in-post.component.scss']
})
export class LinkedInPostComponent implements OnInit {

  constructor(private router: Router) {

  }

  public get linkedInMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const siteToShare = `&url=https://www.eurosport.com${this.router.url}`;
    return `${base}${siteToShare}`;
  }

  ngOnInit(): void {
    console.log(this.router.url);
    console.log(this.linkedInMessage);
  }

}
