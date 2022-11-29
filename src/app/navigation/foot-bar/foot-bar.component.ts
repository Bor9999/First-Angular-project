import { Component, OnInit } from '@angular/core';
import { ContactsContainerService } from 'src/app/services/contacts-container.service';

@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.scss'],
})
export class FootBarComponent implements OnInit {
  socials = [
    'facebook',
    'twitter',
    'utube',
    'telegram',
    'instagram',
    'linkedin',
  ];
  phone = this.contactsContainer.phoneNumber;
  email = this.contactsContainer.email;

  constructor(private contactsContainer: ContactsContainerService) {}

  ngOnInit(): void {}
}
