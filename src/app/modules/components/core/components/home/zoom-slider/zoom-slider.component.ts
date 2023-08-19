import {Component, Input} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {LastMinutesOffer} from "../../../../shared/interfaces/last-minutes-offer";

@Component({
  selector: 'app-zoom-slider',
  templateUrl: './zoom-slider.component.html',
  styleUrls: ['./zoom-slider.component.scss']
})
export class ZoomSliderComponent {


  satisfiedCarouselOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin:10,
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

}
