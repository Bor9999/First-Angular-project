import { Component } from '@angular/core';
import { ContactsContainerService } from './services/contacts-container.service';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private iconService:IconService, private contactsService:ContactsContainerService){
    this.iconService.registerIcons();
  }
  title = 'fPJ';
}
