import {Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'yl-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  @Input() public baseHref = '';
  @Input() public hashTags: string[] = ['Angular', 'Typescript', 'Javascript'];

  constructor(private titleService: Title) {
  }

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`My first twit from ${this.titleService.getTitle()}`)
    return `${base}${message}`;
  }
  private getBaseWithHashTagsAndRoute(): string{
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=ysound1980&url=${route}&text=`;
  }

  ngOnInit(): void {
  }

}
