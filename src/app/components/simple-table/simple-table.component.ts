import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'yl-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {
  @Input() tableData: any[] = [
    {
      firstName: 'Alex',
      lastname: 'Ivanov',
      birthday: '22/07/1982'
    },
    {
      firstName: 'Igor',
      lastname: 'Shuvalov',
      birthday: '28/01/1979'
    },
    {
      firstName: 'Marina',
      lastname: 'Shlemeiko',
      birthday: '18/02/1995'
    },
    {
      firstName: 'Oleg',
      lastname: 'Shtepa',
      birthday: '31/05/2000'
    },
    {
      firstName: 'Olga',
      lastname: 'Kremenko',
      birthday: '15.03.2005'
    }
  ];

  @Output() headerSelected: EventEmitter<{ key: string, value: any }> = new EventEmitter<{key: string; value: any}>();
  directionForIcon: boolean = true;
  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectHeader(key: string, value: any): void {
    this.directionForIcon = !this.directionForIcon;
    this.headerSelected.emit({value, key});
  }

}
