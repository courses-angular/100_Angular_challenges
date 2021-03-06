import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yl-pipes-documentation',
  templateUrl: './pipes-documentation.component.html',
  styleUrls: ['./pipes-documentation.component.scss']
})
export class PipesDocumentationComponent implements OnInit {
  public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];
  public html = '<a href="https://www.YouTube.com/Codingtutorials360" target="blank">YouTube </a>';
  public stringArray: string[] = ['Courses', 'YouTube', 'Twitter', 'LinkedIn'];
  public objectArray: { [key: string]: string; }[] = [
    { content: 'Courses' },
    { content: 'YouTube' },
    { content: 'Twitter' },
    { content: 'LinkedIn' },
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

  onModifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  onReassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
