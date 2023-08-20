import {AfterViewInit, Component, Input} from '@angular/core';
import {OwlOptions } from 'ngx-owl-carousel-o';
import {TourTypeCarousel} from "../../../../shared/interfaces/tour-type-carousel";
import {MostPopularToursCarousel} from "../../../../shared/interfaces/most-popular-tours-carousel";
import {LastMinutesOffer} from "../../../../shared/interfaces/last-minutes-offer";
import {BlogPost} from "../../../../shared/interfaces/blog-post";
import {NewsletterCarousel} from "../../../../shared/interfaces/newsletter-carousel";
import {DealsAndDiscounts} from "../../../../shared/interfaces/deals-and-discounts";
import {ReviewCarousel} from "../../../../shared/interfaces/review-carousel";

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
  ];

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

  @Input() dealsAndDiscounts:DealsAndDiscounts[]=[
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/10/main-home-masonry-gallery-image-1.jpg',
      title:'Colorful india',
      subTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolor eaque error excepturi exercitationem expedita ipsam nemo officiis, quis quo reiciendis repellat voluptas voluptatum?',
      price:1600
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/10/main-home-masonry-gallery-image-2.jpg',
      title:'Colorful india',
      subTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolor eaque error excepturi exercitationem expedita ipsam nemo officiis, quis quo reiciendis repellat voluptas voluptatum?',
      price:1600
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/10/main-home-masonry-gallery-image-3.jpg',
      title:'Colorful india',
      subTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolor eaque error excepturi exercitationem expedita ipsam nemo officiis, quis quo reiciendis repellat voluptas voluptatum?',
      price:1600
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/10/main-home-masonry-gallery-image-1.jpg',
      title:'Colorful india',
      subTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolor eaque error excepturi exercitationem expedita ipsam nemo officiis, quis quo reiciendis repellat voluptas voluptatum?',
      price:1600
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/10/main-home-masonry-gallery-image-6.jpg',
      title:'Colorful india',
      subTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolor eaque error excepturi exercitationem expedita ipsam nemo officiis, quis quo reiciendis repellat voluptas voluptatum?',
      price:1600
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/10/main-home-masonry-gallery-image-4.jpg',
      title:'Colorful india',
      subTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolor eaque error excepturi exercitationem expedita ipsam nemo officiis, quis quo reiciendis repellat voluptas voluptatum?',
      price:1600
    },
    {
      imageUrl:'https://gotravel.qodeinteractive.com/wp-content/uploads/2016/10/main-home-masonry-gallery-image-4.jpg',
      title:'Colorful india',
      subTitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis dolor eaque error excepturi exercitationem expedita ipsam nemo officiis, quis quo reiciendis repellat voluptas voluptatum?',
      price:1600
    },
  ];

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



}
