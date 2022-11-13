import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.scss']
})
export class FootBarComponent implements OnInit {

  socials = ['facebook','twitter','utube','telegram','instagram','linkedin']

  constructor() { }

  ngOnInit(): void {
  }

}
