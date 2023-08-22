import {Component, Input} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {NewsletterCarousel} from "../../../../../../shared/interfaces/newsletter-carousel";

@Component({
  selector: 'app-home-page-newsletter-section',
  templateUrl: './home-page-newsletter-section.component.html',
  styleUrls: ['./home-page-newsletter-section.component.scss']
})
export class HomePageNewsletterSectionComponent {
  newsLetterSliderOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    dots: false,
    navSpeed: 1500,
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
  @Input() newsLetterCarousel:NewsletterCarousel[]=[
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-image.png',
      city:'Barcelona ',
      specialText:'50% OFF'
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-image2.png',
      city:'London ',
      specialText:'Last Minutes'
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-image.png',
      city:'Paris ',
      specialText:'Shopping'
    },
  ];


}
