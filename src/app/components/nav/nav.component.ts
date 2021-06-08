import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menulist : NbMenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.menulist = [
      { link : '/home', title : 'Home', icon : 'home'},
      { link : '/new', title : 'Create fan', icon : 'edit-2'},
      { title : 'fakeMenu' , icon : 'book', children : [
        { link : '/fake1', title : 'fake1'},
        { link : '/fake1', title : 'fake1'},
        { link : '/fake1', title : 'fake1'},
        { link : '/fake1', title : 'fake1'},
      ]}
    ]
  }

}
