import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  socialIcons = ['facebook','twitter','utube','telegram','instagram','linkedin'];
  socialIconsPath = '../assets/img/socials';
  defaultIcons = ['calendar','files','clock','checkMark','braces','search','mic','right','person'];
  defaultIconsPath = '../assets/img/icons';
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { }

    public registerIcons(): void {
      this.loadIcons(Object.values(this.socialIcons), this.socialIconsPath);
      this.loadIcons(Object.values(this.defaultIcons), this.defaultIconsPath);
    }

    private loadIcons(iconKeys: string[], iconUrl: string): void {
      iconKeys.forEach(key => {
        this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`)); console.log((`${iconUrl}/${key}.svg`));
      });
    }
}
