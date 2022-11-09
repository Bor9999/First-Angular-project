import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email:string = "hello@createx.com";
  phoneNumber:number = 4055550128;
  adress:string = "2464 Royal Ln. Mesa, New Jersey 45463, USA";
}
