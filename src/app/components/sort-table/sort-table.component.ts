import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent implements OnInit {
  @Input() tableData: any[] = [
    {
      firstName: 'Eyal',
      lastname: 'Amir',
      birthday: '22/07/1982',
      developer: true,
      age: 38
    },
    {
      firstName: 'Oded',
      lastname: 'Yakubovich',
      birthday: '28/01/1979',
      developer: false,
      age: 35
    },
    {
      firstName: 'Guy',
      lastname: 'Pines',
      birthday: '18/02/1995',
      developer: false,
      age: 50
    },
    {
      firstName: 'Tal',
      lastname: 'Fridman',
      birthday: '31/05/2000',
      developer: false,
      age: 55
    },
    {
      firstName: 'Tomer',
      lastname: 'Mash',
      birthday: '15/03/2005',
      developer: true,
      age: 40
    }
  ];
  sortDirection: boolean = true; // ascending or descending;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSortByHeader(headerData: { key: string; value: any }): void {
    console.log(headerData);

    const {key, value} = headerData;
    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;
      case typeof value === 'number':
        this.sortNumber(key);
        break;
      case this.isDate(value):
        this.sortDate(key);
        break;
      case typeof value === 'string':
        this.sortString(key);
        break;

    }
  }

  private isDate(value: any): boolean {
    const parseDate = Date.parse(value);
    return isNaN(value) && !isNaN(parseDate);
  }

  sortDate(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return new Date(value1[key]).getTime() - new Date(value2[key]).getTime();
      }else{
        return new Date(value2[key]).getTime() - new Date(value1[key]).getTime();
      }
    });
  }

  sortBoolean(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key] - Number(value2[key]));
      } else {
        return Number(value2[key] - Number(value1[key]));
      }
    });
  }

  sortNumber(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key] - Number(value2[key]));
      } else {
        return Number(value2[key] - Number(value1[key]));
      }
    });
  }

  sortString(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      const value1UpperCase = value1[key].toUpperCase();
      const value2UpperCase = value2[key].toUpperCase();

      if (this.sortDirection) {
        if (value1UpperCase > value2UpperCase) {
          return -1;
        }
        if (value1UpperCase < value2UpperCase) {
          return 1;
        }
        return 0;
      } else {
        if (value2UpperCase > value1UpperCase) {
          return -1;
        }
        if (value2UpperCase < value1UpperCase) {
          return 1;
        }
        return 0;
      }
    });
  }
}
