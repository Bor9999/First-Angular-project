import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/auth/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  openLogIn() {
    this.matDialog.open(SignInComponent, { panelClass: 'authModal' });
  }
  openRegister() {
    this.matDialog.open(SignUpComponent, { panelClass: 'authModal' });
  }

  ngOnInit(): void {}
}
