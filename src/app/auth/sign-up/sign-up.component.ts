import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../auth.components.styles.scss'],
})
export class SignUpComponent implements OnInit {
  isHiddenPassword = true;
  isHiddenConfPassword = true;
  pathClosedEyes = './assets/img/icons/closed-eye.svg';
  pathEyes = './assets/img/icons/eyes.svg';
  socials = ['facebook', 'google', 'twitter', 'linkedin'];

  constructor() {}

  ngOnInit(): void {}
}
