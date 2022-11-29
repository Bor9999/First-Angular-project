import { Component, OnInit, Input } from '@angular/core';

export interface PostData {
  type: string;
  imgPath: string;
  tag: string;
  date: string;
  time?: string;
  text: string;
  title: string;
  link?: string;
}

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss'],
})
export class BlogPostCardComponent implements OnInit {
  constructor() {}

  @Input() Data!: PostData;
  @Input() type!: string;
  @Input() imgPath!: string;
  @Input() tag!: string;
  @Input() date!: string;
  @Input() time!: string | undefined;
  @Input() text!: string;
  @Input() title!: string;
  @Input() link!: string | undefined;

  typeIcon!: string;
  typeButton!: string;

  ngOnInit(): void {
    if (this.Data) {
      this.type = this.Data.type;
      this.imgPath = this.Data.imgPath;
      this.tag = this.Data.tag;
      this.date = this.Data.date;
      this.time = this.Data.time;
      this.text = this.Data.text;
      this.title = this.Data.title;
      this.link = this.Data.link;
    }

    switch (this.type) {
      case 'Article':
        this.typeIcon = 'files';
        this.typeButton = 'Read';
        break;
      case 'Podcast':
        this.typeIcon = 'mic';
        this.typeButton = 'Listen';
        break;
      case 'Video':
        this.typeIcon = 'video';
        this.typeButton = 'Watch';
        break;

      default:
        this.typeIcon = 'files';
        this.typeIcon = 'Read';
        break;
    }
  }
}
