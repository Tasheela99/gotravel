import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core.component';
import {HomeContextComponent} from "./components/home/home-context/home-context.component";
import {MainHomeComponent} from "./components/home/main-home/main-home.component";
import {FullscreenSliderComponent} from "./components/home/fullscreen-slider/fullscreen-slider.component";
import {VideoSliderComponent} from "./components/home/video-slider/video-slider.component";
import {ZoomSliderComponent} from "./components/home/zoom-slider/zoom-slider.component";
import {ParallaxComponent} from "./components/home/parallax/parallax.component";
import {BlogContextComponent} from "./components/blog/blog-context/blog-context.component";
import {BlogMasonryComponent} from "./components/blog/blog-masonry/blog-masonry.component";
import {BlogSplitColumnComponent} from "./components/blog/blog-split-column/blog-split-column.component";
import {BlogStandardComponent} from "./components/blog/blog-standard/blog-standard.component";
import {MasonryFullWidthComponent} from "./components/blog/masonry-full-width/masonry-full-width.component";
import {MasonryWithSidebarComponent} from "./components/blog/masonry-with-sidebar/masonry-with-sidebar.component";
import {PostTypesComponent} from "./components/blog/post-types/post-types.component";
import {PostTypeAudioComponent} from "./components/blog/post-types/items/post-type-audio/post-type-audio.component";
import {PostTypeVideoComponent} from "./components/blog/post-types/items/post-type-video/post-type-video.component";
import {PostTypeLinkComponent} from "./components/blog/post-types/items/post-type-link/post-type-link.component";
import {PostTypeQuoteComponent} from "./components/blog/post-types/items/post-type-quote/post-type-quote.component";
import {
  PostTypeGalleryComponent
} from "./components/blog/post-types/items/post-type-gallery/post-type-gallery.component";
import {
  PostTypeStandardComponent
} from "./components/blog/post-types/items/post-type-standard/post-type-standard.component";
import {PagesContextComponent} from "./components/pages/pages-context/pages-context.component";
import {ComingSoonComponent} from "./components/pages/coming-soon/coming-soon.component";
import {ContactPageComponent} from "./components/pages/contact-page/contact-page.component";
import {ErrorPageComponent} from "./components/pages/error-page/error-page.component";
import {EverythingAboutUsComponent} from "./components/pages/everything-about-us/everything-about-us.component";
import {MeetOurGuidesComponent} from "./components/pages/meet-our-guides/meet-our-guides.component";
import {PaqPageComponent} from "./components/pages/paq-page/paq-page.component";
import {WhatWeOfferComponent} from "./components/pages/what-we-offer/what-we-offer.component";
import {ShopContextComponent} from "./components/shop/shop-context/shop-context.component";
import {ProductSingleComponent} from "./components/shop/product-single/product-single.component";
import {
  ShopListThreeColumnsComponent
} from "./components/shop/shop-list-three-columns/shop-list-three-columns.component";
import {ShopListFourColumnsComponent} from "./components/shop/shop-list-four-columns/shop-list-four-columns.component";
import {ShopListFiveColumnsComponent} from "./components/shop/shop-list-five-columns/shop-list-five-columns.component";
import {ShopListWithSidebarComponent} from "./components/shop/shop-list-with-sidebar/shop-list-with-sidebar.component";
import {ToursContextComponent} from "./components/tours/tours-context/tours-context.component";
import {DestinationItemComponent} from "./components/tours/destination-item/destination-item.component";
import {DestinationListComponent} from "./components/tours/destination-list/destination-list.component";
import {GalleryTourListComponent} from "./components/tours/gallery-tour-list/gallery-tour-list.component";
import {SplitTourListComponent} from "./components/tours/split-tour-list/split-tour-list.component";
import {StandartTourListComponent} from "./components/tours/standart-tour-list/standart-tour-list.component";
import {TourItemComponent} from "./components/tours/tour-item/tour-item.component";
import {ElementsContextComponent} from "./components/elements/elements-context/elements-context.component";
import {ClassicComponent} from "./components/elements/classic/classic.component";
import {AccordionsComponent} from "./components/elements/classic/items/accordions/accordions.component";
import {BlockquoteComponent} from "./components/elements/classic/items/blockquote/blockquote.component";
import {ButtonsComponent} from "./components/elements/classic/items/buttons/buttons.component";
import {CallToActionComponent} from "./components/elements/classic/items/call-to-action/call-to-action.component";
import {ContactFormComponent} from "./components/elements/classic/items/contact-form/contact-form.component";
import {MessageBoxesComponent} from "./components/elements/classic/items/message-boxes/message-boxes.component";
import {SeparatorsComponent} from "./components/elements/classic/items/separators/separators.component";
import {TabsComponent} from "./components/elements/classic/items/tabs/tabs.component";
import {InfographicComponent} from "./components/elements/infographic/infographic.component";
import {CountdownComponent} from "./components/elements/infographic/items/countdown/countdown.component";
import {CountersComponent} from "./components/elements/infographic/items/counters/counters.component";
import {GoogleMapsComponent} from "./components/elements/infographic/items/google-maps/google-maps.component";
import {
  HorizontalBarsComponent
} from "./components/elements/infographic/items/horizontal-bars/horizontal-bars.component";
import {
  IconProgressBarsComponent
} from "./components/elements/infographic/items/icon-progress-bars/icon-progress-bars.component";
import {ListsComponent} from "./components/elements/infographic/items/lists/lists.component";
import {PieChartsComponent} from "./components/elements/infographic/items/pie-charts/pie-charts.component";
import {VerticalBarsComponent} from "./components/elements/infographic/items/vertical-bars/vertical-bars.component";
import {PresentationComponent} from "./components/elements/presentation/presentation.component";
import {
  BlogListShortcodeComponent
} from "./components/elements/presentation/items/blog-list-shortcode/blog-list-shortcode.component";
import {
  ClientCarouselComponent
} from "./components/elements/presentation/items/client-carousel/client-carousel.component";
import {ImageGalleryComponent} from "./components/elements/presentation/items/image-gallery/image-gallery.component";
import {ReviewsComponent} from "./components/elements/presentation/items/reviews/reviews.component";
import {TeamShortcodeComponent} from "./components/elements/presentation/items/team-shortcode/team-shortcode.component";
import {TestimonialsComponent} from "./components/elements/presentation/items/testimonials/testimonials.component";
import {TopReviewsComponent} from "./components/elements/presentation/items/top-reviews/top-reviews.component";
import {TourCarouselComponent} from "./components/elements/presentation/items/tour-carousel/tour-carousel.component";
import {TourListComponent} from "./components/elements/presentation/items/tour-list/tour-list.component";
import {VideoButtonComponent} from "./components/elements/presentation/items/video-button/video-button.component";
import {TypographyComponent} from "./components/elements/typography/typography.component";
import {ColumnsComponent} from "./components/elements/typography/items/columns/columns.component";
import {CustomFontComponent} from "./components/elements/typography/items/custom-font/custom-font.component";
import {DropcapsComponent} from "./components/elements/typography/items/dropcaps/dropcaps.component";
import {HeadingsComponent} from "./components/elements/typography/items/headings/headings.component";
import {HighlightsComponent} from "./components/elements/typography/items/highlights/highlights.component";
import {IconWithTextComponent} from "./components/elements/typography/items/icon-with-text/icon-with-text.component";
import {
  TitleAndSubtitleComponent
} from "./components/elements/typography/items/title-and-subtitle/title-and-subtitle.component";

const routes: Routes = [
  {
    path: '', component: CoreComponent, children: [
      {path: '', redirectTo: '/core/main/home', pathMatch: 'full'},
      {
        path: 'main', component: HomeContextComponent, children: [
          {path: 'home', component: MainHomeComponent},
          {path: 'fullscreen-slider', component: FullscreenSliderComponent},
          {path: 'video-slider', component: VideoSliderComponent},
          {path: 'zoom-slider', component: ZoomSliderComponent},
          {path: 'parallax', component: ParallaxComponent},
        ]
      },
      {
        path: 'blog', component: BlogContextComponent, children: [
          {path: 'blog-masonry', component: BlogMasonryComponent},
          {path: 'blog-split-column', component: BlogSplitColumnComponent},
          {path: 'blog-standard', component: BlogStandardComponent},
          {path: 'blog-masonry-full-width', component: MasonryFullWidthComponent},
          {path: 'blog-with-sidebar', component: MasonryWithSidebarComponent},
          {
            path: 'post-types', component: PostTypesComponent, children: [
              {path: 'post-type-audio', component: PostTypeAudioComponent},
              {path: 'post-type-video', component: PostTypeVideoComponent},
              {path: 'post-type-link', component: PostTypeLinkComponent},
              {path: 'post-type-quote', component: PostTypeQuoteComponent},
              {path: 'post-type-galley', component: PostTypeGalleryComponent},
              {path: 'post-type-standard', component: PostTypeStandardComponent},
            ]
          },
        ]
      },
      {
        path: 'pages', component: PagesContextComponent, children: [
          {path: 'coming-soon', component: ComingSoonComponent},
          {path: 'contact-page', component: ContactPageComponent},
          {path: 'error-page', component: ErrorPageComponent},
          {path: 'everything-about-us', component: EverythingAboutUsComponent},
          {path: 'meet-our-guides', component: MeetOurGuidesComponent},
          {path: 'faq-page', component: PaqPageComponent},
          {path: 'what-we-offer', component: WhatWeOfferComponent},
        ]
      },
      {
        path: 'shop', component: ShopContextComponent, children: [
          {path: 'product-single', component: ProductSingleComponent},
          {path: 'shop-list-three-columns', component: ShopListThreeColumnsComponent},
          {path: 'shop-list-four-columns', component: ShopListFourColumnsComponent},
          {path: 'shop-list-five-columns', component: ShopListFiveColumnsComponent},
          {path: 'shop-list-with-sidebar', component: ShopListWithSidebarComponent},
        ]
      },
      {
        path: 'tours', component: ToursContextComponent, children: [
          {path: 'destination-item', component: DestinationItemComponent},
          {path: 'destination-list', component: DestinationListComponent},
          {path: 'gallery-tour-list', component: GalleryTourListComponent},
          {path: 'split-tour-list', component: SplitTourListComponent},
          {path: 'standard-tour-list', component: StandartTourListComponent},
          {path: 'tour-item', component: TourItemComponent},
        ]
      },
      {
        path: 'elements', component: ElementsContextComponent, children: [
          {
            path: 'classic', component: ClassicComponent, children: [
              {path: 'accordions', component: AccordionsComponent},
              {path: 'blockquote', component: BlockquoteComponent},
              {path: 'buttons', component: ButtonsComponent},
              {path: 'call-to-action', component: CallToActionComponent},
              {path: 'contact-form', component: ContactFormComponent},
              {path: 'message-boxes', component: MessageBoxesComponent},
              {path: 'separators', component: SeparatorsComponent},
              {path: 'tabs', component: TabsComponent},
            ]
          },
          {
            path: 'infographics', component: InfographicComponent, children: [
              {path: 'countdown', component: CountdownComponent},
              {path: 'counters', component: CountersComponent},
              {path: 'google-maps', component: GoogleMapsComponent},
              {path: 'horizontal-bars', component: HorizontalBarsComponent},
              {path: 'icon-progress-bars', component: IconProgressBarsComponent},
              {path: 'lists', component: ListsComponent},
              {path: 'pie-charts', component: PieChartsComponent},
              {path: 'vertical-bars', component: VerticalBarsComponent},
            ]
          },
          {
            path: 'presentation', component: PresentationComponent, children: [
              {path: 'blog-list-shortcode', component: BlogListShortcodeComponent},
              {path: 'client-carousel', component: ClientCarouselComponent},
              {path: 'image-gallery', component: ImageGalleryComponent},
              {path: 'reviews', component: ReviewsComponent},
              {path: 'team-shortcode', component: TeamShortcodeComponent},
              {path: 'testimonials', component: TestimonialsComponent},
              {path: 'top-reviews', component: TopReviewsComponent},
              {path: 'tour-carousel', component: TourCarouselComponent},
              {path: 'tour-list', component: TourListComponent},
              {path: 'video-button', component: VideoButtonComponent},
            ]
          },
          {
            path: 'typography', component: TypographyComponent, children: [
              {path: 'columns', component: ColumnsComponent},
              {path: 'custom-font', component: CustomFontComponent},
              {path: 'drop-caps', component: DropcapsComponent},
              {path: 'headings', component: HeadingsComponent},
              {path: 'highlights', component: HighlightsComponent},
              {path: 'icon-with-text', component: IconWithTextComponent},
              {path: 'title-and-subtitle', component: TitleAndSubtitleComponent},
            ]
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
