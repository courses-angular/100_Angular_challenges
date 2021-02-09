import {Component, OnInit} from '@angular/core';
import {fadeInOutAnimation} from '../animations/fade-in-out/fade-in-out.animation';

@Component({
  selector: 'yl-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOutAnimation]
})
export class OtherDocumentationComponent implements OnInit {
  isInDOM: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
