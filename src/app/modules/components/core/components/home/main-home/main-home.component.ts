import {Component, Input} from '@angular/core';
import {OwlOptions } from 'ngx-owl-carousel-o';
import {TourTypeCarousel} from "../../../../shared/interfaces/tour-type-carousel";
import {MostPopularToursCarousel} from "../../../../shared/interfaces/most-popular-tours-carousel";
import {LastMinutesOffer} from "../../../../shared/interfaces/last-minutes-offer";
import {BlogPost} from "../../../../shared/interfaces/blog-post";

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],

})
export class MainHomeComponent {

  @Input() tourTypeCarousel: TourTypeCarousel[] = [
    {
      imageUrl: 'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/client-22.png',
      description: 'Tower bridge',
    },
    {
      imageUrl: 'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/client-11.png',
      description: 'sydney opera house',
    },
    {
      imageUrl: 'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/client-4.png',
      description: 'london eye',
    },
    {
      imageUrl: 'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/client-5.png',
      description: 'The pantheon',
    },
    {
      imageUrl: 'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/client-6.png',
      description: 'space needle',
    },
    {
    imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/client-33.png',
      description:'eifel tower'
    }
  ];

  @Input()mostPopularCarousel:MostPopularToursCarousel[] = [
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-single-image-16-600x463.jpg',
      city:'gaudi city',
      price:1600,
      discount: 1720,
      rate:7.5,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo,velit. Commodi deleniti doloribus eaque explicabo magni nesciunt',
      tourInfoDays:15,
      tourInfoAge:14
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-about-single-image-1a-600x463.jpg',
      city:'vanilla canals',
      price:850,
      discount: undefined,
      rate:7.5,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo,velit. Commodi deleniti doloribus eaque explicabo magni nesciunt',
      tourInfoDays:15,
      tourInfoAge:14
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-about-single-image-2a-600x463.jpg',
      city:'city selfie tour',
      price:850,
      discount:undefined,
      rate:7.0,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo,velit. Commodi deleniti doloribus eaque explicabo magni nesciunt',
      tourInfoDays:6,
      tourInfoAge:12
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-about-single-image-3a-600x463.jpg',
      city:'fun in prague',
      price:1300,
      discount:undefined,
      rate:8.2,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo,velit. Commodi deleniti doloribus eaque explicabo magni nesciunt',
      tourInfoDays:10,
      tourInfoAge:18
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-single-image-18-600x463.jpg',
      city:'brusaw cruise',
      price:560,
      discount:undefined,
      rate:7.5,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo,velit. Commodi deleniti doloribus eaque explicabo magni nesciunt',
      tourInfoDays:4,
      tourInfoAge:5
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-single-image-17-600x463.jpg',
      city:'moscow tour',
      price:1600,
      discount:undefined,
      rate:7.5,
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda explicabo,velit. Commodi deleniti doloribus eaque explicabo magni nesciunt',
      tourInfoDays:13,
      tourInfoAge:12
    },
  ];

  @Input() lastMinutesOffer:LastMinutesOffer[] = [
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-home-single-image-4a-600x870.jpg',
      price:259,
      IsOfferAvailable:false,
      offerText:'',
      funItemName:'amsterdam fun',
      IsPrePrice:false,
      prePrice: undefined,
      funItemNameDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dolorumeos fuga officia quo recusandae! Debitis laborum perspiciatis voluptatem?'
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-home-single-image-3a-600x870.jpg',
      price:110,
      IsOfferAvailable:true,
      offerText:'50% OFF',
      funItemName:'canal sailing',
      IsPrePrice:true,
      prePrice: 219,
      funItemNameDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dolorumeos fuga officia quo recusandae! Debitis laborum perspiciatis voluptatem?'

    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-home-single-image-2a-600x870.jpg',
      price:650,
      IsOfferAvailable:false,
      offerText:'',
      funItemName:'charming paris',
      IsPrePrice:false,
      prePrice: undefined,
      funItemNameDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dolorumeos fuga officia quo recusandae! Debitis laborum perspiciatis voluptatem?'

    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/11/tour-list-home-single-image-1a-600x870.jpg',
      price:1099,
      IsOfferAvailable:true,
      offerText:'Special Offer',
      funItemName:'new york walk',
      IsPrePrice:false,
      prePrice: undefined,
      funItemNameDescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dolorumeos fuga officia quo recusandae! Debitis laborum perspiciatis voluptatem?'

    },
  ];


  @Input() blogPost:BlogPost[] = [
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-1-600x480.jpg',
      blogText:'Santorini Have Conquered a Corner of Your Imagination Before You’ve Set Eyes On It.',
      postedDate: new Date(2016,3,5),
      commentCount:2,
      comments:[
          "Comment one",
          "Comment two",
      ],
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-2-600x480.jpg',
      blogText:'These Are The Best Travel Tips I’ve Discovered Along The Way On Journey',
      postedDate: new Date(2016,3,5),
      commentCount:3,
      comments:[
        "Comment one",
        "Comment two",
        "Comment three",
      ],
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-3-2-600x480.jpg',
      blogText:'With Samba and Bossa Nova it’s easy to fall in love with Rio de Janeiro.',
      postedDate: new Date(2016,3,5),
      commentCount:2,
      comments:[
        "Comment one",
        "Comment two",
      ],
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-4-600x480.jpg',
      blogText:'A Gondola Ride is the One Venetian Tourist Trap Everyone Falls Into',
      postedDate: new Date(2016,3,5),
      commentCount:2,
      comments:[
        "Comment one",
        "Comment two",
      ],
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-5-600x480.jpg',
      blogText:'Ten Practical Ways to Save Money in Argentina If You Are a Tourist From Europe',
      postedDate: new Date(2016,3,5),
      commentCount:2,
      comments:[
        "Comment one",
        "Comment two",
      ],
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/blog-image-6-600x480.jpg',
      blogText:'Fountain Di Trevi Is Made From The Same Material As The Colosseum',
      postedDate: new Date(2016,3,5),
      commentCount:1,
      comments:[
        "Comment one",
      ],
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin:10,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    nav:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  }

  reviewerCarousel: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin:10,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    nav:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
}
