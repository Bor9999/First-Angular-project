import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../auth.components.styles.scss']
})
export class SignInComponent implements OnInit {

  isHiddenPassword = true;
  pathClosedEyes = "assets/img/icons/closed-eye.svg";
  pathEyes = "assets/img/icons/eyes.svg";
  socials = ['facebook','google','twitter','linkedin']
    constructor() {

    }

  ngOnInit(): void {

  }
}
