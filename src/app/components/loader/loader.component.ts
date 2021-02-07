import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
@Input()isLoading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
