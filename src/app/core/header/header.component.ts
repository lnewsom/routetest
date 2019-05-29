import { Component, OnInit, Input } from '@angular/core';
import { stringLiteral } from '@babel/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public coreId: string;

  constructor() {}

  ngOnInit() {
    console.log('Header: ', this.coreId);
  }
}
