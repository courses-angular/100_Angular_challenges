import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yl-directives-documentation',
  templateUrl: './directives-documentation.component.html',
  styleUrls: ['./directives-documentation.component.scss']
})
export class DirectivesDocumentationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onLog(): void {
    console.log(`%c Click every 500ms`, 'color: red');
  }
}
