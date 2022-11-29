import { Component, OnInit } from '@angular/core';
import { ContactsContainerService } from 'src/app/services/contacts-container.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  constructor(private contactsContainer: ContactsContainerService) {}

  ngOnInit(): void {}

  email = this.contactsContainer.email;
  phoneNumber = this.contactsContainer.phoneNumber;
  adress = this.contactsContainer.adress;

  socials = [
    'facebook',
    'twitter',
    'utube',
    'telegram',
    'instagram',
    'linkedin',
  ];
}
