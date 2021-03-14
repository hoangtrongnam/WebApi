import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Template } from '@/_helpers';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, AfterViewInit {

  constructor() {
    
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    Template.initPage();
    Template.initLayout();
  }

}
