import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../auth.components.styles.scss']
})
export class SignUpComponent implements OnInit {

  isHiddenPassword:boolean= true;
  isHiddenConfPassword:boolean = true;
  pathClosedEyes:string = "./assets/img/icons/closed-eye.svg";
  pathEyes:string = "./assets/img/icons/eyes.svg";
  constructor() { }

  ngOnInit(): void {

    let inputBarPassword = document.getElementById("pass") as HTMLInputElement;
    let inputBarConfPassword = document.getElementById("conf-pass") as HTMLInputElement;
    let eyesPassword = document.getElementById("pass-eye-img") as HTMLImageElement;
    let eyesConfPassword = document.getElementById("conf-pass-eye-img") as HTMLImageElement;
    let eyeButtonPassword = document.getElementById("password-eye") as HTMLElement;
    let eyeButtonConfPassword = document.getElementById("conf-password-eye") as HTMLElement;

    console.log(inputBarPassword)

    let showPassword = () =>{
      if (this.isHiddenPassword == true){
        eyesPassword.src = this.pathClosedEyes;
        inputBarPassword.type = "text"
        this.isHiddenPassword = false;
      }else{
        eyesPassword.src = this.pathEyes;
        inputBarPassword.type = "password";
        this.isHiddenPassword = true;
      };
    }
    let showConfPassword = () =>{
      if (this.isHiddenConfPassword == true){
        eyesConfPassword.src = this.pathClosedEyes;
        inputBarConfPassword.type = "text";
        this.isHiddenConfPassword = false;
        console.log(this.isHiddenConfPassword);
      }else{
        eyesConfPassword.src = this.pathEyes;
        inputBarConfPassword.type = "password";
        this.isHiddenConfPassword = true;
      };
    }

    eyeButtonPassword.addEventListener("click", showPassword);
    eyeButtonConfPassword.addEventListener("click", showConfPassword);

  }

}
