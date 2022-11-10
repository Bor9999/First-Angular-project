import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../auth.components.styles.scss']
})
export class SignInComponent implements OnInit {

  isHidden:boolean= true;
  pathClosedEyes:string = "./assets/img/icons/closed-eye.svg";
  pathEyes:string = "./assets/img/icons/eyes.svg";

    constructor() {

    }




  ngOnInit(): void {
    let inputBar = document.getElementById("pass") as HTMLInputElement;
    let eyes = document.getElementById("pass-eye-img") as HTMLImageElement;
    let eyeButton = document.getElementById("password-eye") as HTMLElement;

    let showPassword = () =>{
      if (this.isHidden == true){
        eyes.src = this.pathClosedEyes;
        inputBar.type = "text"
        this.isHidden = false;
      }else{
        eyes.src = this.pathEyes;
        inputBar.type = "password";
        this.isHidden = true;
      };
    }

    eyeButton.addEventListener("click",showPassword);

  }
}
