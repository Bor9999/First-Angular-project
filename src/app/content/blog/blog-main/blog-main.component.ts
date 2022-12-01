import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.scss'],
})
export class BlogMainComponent implements OnInit {
  card1 = {
    type: 'Podcast',
    imgPath: 'assets/img/title1Big.png',
    tag: 'Marketing',
    date: 'September 4, 2020',
    time: '36 min',
    text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
    title: 'What is traffic arbitrage and does it really make money?',
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
  card4 = {
    type: 'Article',
    imgPath: 'assets/img/singlePostImage.png',
    tag: 'HR & Recruting',
    date: 'August 3, 2020',
    text: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
    title: 'HR statistics: job search,  interviews, hiring and recruiting',
    link: '/single-post',
  };
  card5 = {
    type: 'Video',
    imgPath: 'assets/img/card5.png',
    tag: 'Managment',
    date: 'August 2, 2020',
    time: '45 min',
    text: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
    title:
      'What to do and who to talk to if you want to get feedback on the product',
  };
  card6 = {
    type: 'Podcast',
    imgPath: 'assets/img/card1.png',
    tag: 'Design',
    date: 'July 28, 2020',
    time: '36 min',
    text: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    title: 'What are color profiles and how they work in graphic design',
  };
  card7 = {
    type: 'Video',
    imgPath: 'assets/img/title2Big.png',
    tag: 'Managment',
    date: 'July 15, 2020',
    time: '45 min',
    text: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
    title: 'Startup: how to build a team that will live longer than a year',
  };
  card8 = {
    type: 'Article',
    imgPath: 'assets/img/title3Big.png',
    tag: 'Marketing',
    date: 'July 9, 2020',
    text: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
    title: 'How to get customers to love your business from the start',
  };

  selectData = [
    { id: 1, name: 'Articles' },
    { id: 2, name: 'Videos' },
    { id: 3, name: 'Podcasts' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
