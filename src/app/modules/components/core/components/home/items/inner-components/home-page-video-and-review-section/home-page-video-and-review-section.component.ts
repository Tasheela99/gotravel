import {Component, Input} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ReviewCarousel} from "../../../../../../shared/interfaces/review-carousel";

@Component({
  selector: 'app-home-page-video-and-review-section',
  templateUrl: './home-page-video-and-review-section.component.html',
  styleUrls: ['./home-page-video-and-review-section.component.scss']
})
export class HomePageVideoAndReviewSectionComponent {

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
  @Input() reviewCarousel:ReviewCarousel[] = [
    {
      city:'coloful india',
      reviewStar:5,
      reviewText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, corporis dolores earum eos illum nostrum perspiciatis rem repudiandae sint, soluta sunt tempore ullam, velit voluptate!',
      reviewerAvatar:'https://secure.gravatar.com/avatar/c565181d9b0b43c58c5978e39ce5e196?s=54&d=mm&r=g',
      reviewerName:'sandra medina'
    },
    {
      city:'miami beach',
      reviewStar:2,
      reviewText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, corporis dolores earum eos illum nostrum perspiciatis rem repudiandae sint, soluta sunt tempore ullam, velit voluptate!',
      reviewerAvatar:'https://secure.gravatar.com/avatar/5e05adc12f12755e7e36629cb3c4d0c5?s=54&d=mm&r=g',
      reviewerName:'raymend thomas'
    },

    {
      city:'yangshuo mist',
      reviewStar:5,
      reviewText:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, corporis dolores earum eos illum nostrum perspiciatis rem repudiandae sint, soluta sunt tempore ullam, velit voluptate!',
      reviewerAvatar:'https://secure.gravatar.com/avatar/70f6cb72f62fd8d94c61883b7cd7c29a?s=54&d=mm&r=g',
      reviewerName:'tasha stewart'
    },
  ];

}
