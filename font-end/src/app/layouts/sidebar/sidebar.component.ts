import { Component, OnInit } from '@angular/core';

import { User } from '@/_models';
import { AuthenticationService } from '@/_services';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any;
  menus: any = [];
  private readonly MENU = 'MENU';
  
  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    // this.menus = JSON.parse(localStorage.getItem(this.MENU));
    this.menus = [
      {
        "id": "10",
        "parentid": null,
        "name": " Quản lý cá nhân",
        "url": "/",
        "icon": "mdi mdi-account menu-icon",
        "menus": [
          {
            "id": "1",
            "parentid": "10",
            "name": "Cá nhân",
            "url": "/mana-personal/personal",
            "menus": [],
            "actionids": null,
            "actions": null,
            "permit": [
              {
                "id": "1",
                "parentid": null,
                "name": "Xem",
                "action": "isview"
              }
            ]
          }
        ],
        "actionids": null,
        "actions": null,
        "permit": []
      },
      {
        "id": "11",
        "parentid": null,
        "name": "Quản lý tổ chức",
        "url": "/",
        "icon": "mdi mdi-account-multiple-plus menu-icon",
        "menus": [
          {
            "id": "1",
            "parentid": "11",
            "name": "Tổ chức",
            "url": "/mana-organization/organization",
            "menus": [],
            "actionids": null,
            "actions": null,
            "permit": [
              {
                "id": "1",
                "parentid": null,
                "name": "Xem",
                "action": "isview"
              }
            ]
          }
        ],
        "actionids": null,
        "actions": null,
        "permit": []
      }
    ];
  }

}
