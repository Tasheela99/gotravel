import {Component, Input} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {MostPopularToursCarousel} from "../../../../../../shared/interfaces/most-popular-tours-carousel";
import {TourTypeCarousel} from "../../../../../../shared/interfaces/tour-type-carousel";

@Component({
  selector: 'app-home-page-tour-carousel',
  templateUrl: './home-page-tour-carousel.component.html',
  styleUrls: ['./home-page-tour-carousel.component.scss']
})
export class HomePageTourCarouselComponent {
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

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin:5,
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
