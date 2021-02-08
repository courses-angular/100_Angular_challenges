import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'yl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  isHidden: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.isHidden = true;
  }

  openModal(): void {
    this.isHidden = false;
  }

}
