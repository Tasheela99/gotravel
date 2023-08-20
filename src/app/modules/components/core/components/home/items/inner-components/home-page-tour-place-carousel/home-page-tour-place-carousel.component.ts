import {Component, Input} from '@angular/core';
import {MostPopularToursCarousel} from "../../../../../../shared/interfaces/most-popular-tours-carousel";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home-page-tour-place-carousel',
  templateUrl: './home-page-tour-place-carousel.component.html',
  styleUrls: ['./home-page-tour-place-carousel.component.scss']
})
export class HomePageTourPlaceCarouselComponent {
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

}
