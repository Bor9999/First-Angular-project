import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  constructor() {}

  card1 = {
    type: 'Podcast',
    imgPath: 'assets/img/card1.png',
    tag: 'Design',
    date: 'July 28, 2020',
    time: '36 min',
    text: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    title: 'What are color profiles and how they work in graphic design',
  };
  card2 = {
    type: 'Article',
    imgPath: 'assets/img/card2.png',
    tag: 'Development',
    date: 'September 1, 2020',
    text: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
    title: 'How to choose the first programming language for a beginner',
  };
  card3 = {
    type: 'Video',
    imgPath: 'assets/img/card3.png',
    tag: 'Design',
    date: 'August 8, 2020',
    time: '40 min',
    text: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    title:
      'Should you choose a creative profession if you are attracted to creativity?',
  };

  ngOnInit(): void {}
}
