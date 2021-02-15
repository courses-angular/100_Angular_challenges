import {Component, Input, OnInit} from '@angular/core';
import {SocialMediaIcon} from './social-media.model';
import {SocialMediaType} from './social-media.type';

@Component({
  selector: 'yl-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent implements OnInit {
 @Input() socialMedia: SocialMediaIcon[] = [];
 public SocialMedia = SocialMediaType;
  constructor() { }

  ngOnInit(): void {
  }

}
