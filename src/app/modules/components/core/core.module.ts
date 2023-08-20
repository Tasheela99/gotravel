import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MainHomeComponent } from './components/home/main-home/main-home.component';
import { FullscreenSliderComponent } from './components/home/fullscreen-slider/fullscreen-slider.component';
import { ZoomSliderComponent } from './components/home/zoom-slider/zoom-slider.component';
import { VideoSliderComponent } from './components/home/video-slider/video-slider.component';
import { ParallaxComponent } from './components/home/parallax/parallax.component';
import { EverythingAboutUsComponent } from './components/pages/everything-about-us/everything-about-us.component';
import { WhatWeOfferComponent } from './components/pages/what-we-offer/what-we-offer.component';
import { PaqPageComponent } from './components/pages/paq-page/paq-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { MeetOurGuidesComponent } from './components/pages/meet-our-guides/meet-our-guides.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { StandartTourListComponent } from './components/tours/standart-tour-list/standart-tour-list.component';
import { GalleryTourListComponent } from './components/tours/gallery-tour-list/gallery-tour-list.component';
import { SplitTourListComponent } from './components/tours/split-tour-list/split-tour-list.component';
import { TourItemComponent } from './components/tours/tour-item/tour-item.component';
import { DestinationListComponent } from './components/tours/destination-list/destination-list.component';
import { DestinationItemComponent } from './components/tours/destination-item/destination-item.component';
import { BlogMasonryComponent } from './components/blog/blog-masonry/blog-masonry.component';
import { MasonryFullWidthComponent } from './components/blog/masonry-full-width/masonry-full-width.component';
import { MasonryWithSidebarComponent } from './components/blog/masonry-with-sidebar/masonry-with-sidebar.component';
import { BlogStandardComponent } from './components/blog/blog-standard/blog-standard.component';
import { BlogSplitColumnComponent } from './components/blog/blog-split-column/blog-split-column.component';
import { PostTypesComponent } from './components/blog/post-types/post-types.component';
import { PostTypeStandardComponent } from './components/blog/post-types/items/post-type-standard/post-type-standard.component';
import { PostTypeGalleryComponent } from './components/blog/post-types/items/post-type-gallery/post-type-gallery.component';
import { PostTypeVideoComponent } from './components/blog/post-types/items/post-type-video/post-type-video.component';
import { PostTypeAudioComponent } from './components/blog/post-types/items/post-type-audio/post-type-audio.component';
import { PostTypeQuoteComponent } from './components/blog/post-types/items/post-type-quote/post-type-quote.component';
import { PostTypeLinkComponent } from './components/blog/post-types/items/post-type-link/post-type-link.component';
import { ShopListWithSidebarComponent } from './components/shop/shop-list-with-sidebar/shop-list-with-sidebar.component';
import { ShopListThreeColumnsComponent } from './components/shop/shop-list-three-columns/shop-list-three-columns.component';
import { ShopListFourColumnsComponent } from './components/shop/shop-list-four-columns/shop-list-four-columns.component';
import { ShopListFiveColumnsComponent } from './components/shop/shop-list-five-columns/shop-list-five-columns.component';
import { ProductSingleComponent } from './components/shop/product-single/product-single.component';
import { ClassicComponent } from './components/elements/classic/classic.component';
import { PresentationComponent } from './components/elements/presentation/presentation.component';
import { InfographicComponent } from './components/elements/infographic/infographic.component';
import { TypographyComponent } from './components/elements/typography/typography.component';
import { AccordionsComponent } from './components/elements/classic/items/accordions/accordions.component';
import { TabsComponent } from './components/elements/classic/items/tabs/tabs.component';
import { ButtonsComponent } from './components/elements/classic/items/buttons/buttons.component';
import { CallToActionComponent } from './components/elements/classic/items/call-to-action/call-to-action.component';
import { SeparatorsComponent } from './components/elements/classic/items/separators/separators.component';
import { BlockquoteComponent } from './components/elements/classic/items/blockquote/blockquote.component';
import { ContactFormComponent } from './components/elements/classic/items/contact-form/contact-form.component';
import { MessageBoxesComponent } from './components/elements/classic/items/message-boxes/message-boxes.component';
import { TeamShortcodeComponent } from './components/elements/presentation/items/team-shortcode/team-shortcode.component';
import { TourCarouselComponent } from './components/elements/presentation/items/tour-carousel/tour-carousel.component';
import { TourListComponent } from './components/elements/presentation/items/tour-list/tour-list.component';
import { TestimonialsComponent } from './components/elements/presentation/items/testimonials/testimonials.component';
import { TopReviewsComponent } from './components/elements/presentation/items/top-reviews/top-reviews.component';
import { ClientCarouselComponent } from './components/elements/presentation/items/client-carousel/client-carousel.component';
import { BlogListShortcodeComponent } from './components/elements/presentation/items/blog-list-shortcode/blog-list-shortcode.component';
import { ImageGalleryComponent } from './components/elements/presentation/items/image-gallery/image-gallery.component';
import { ReviewsComponent } from './components/elements/presentation/items/reviews/reviews.component';
import { VideoButtonComponent } from './components/elements/presentation/items/video-button/video-button.component';
import { CountersComponent } from './components/elements/infographic/items/counters/counters.component';
import { PieChartsComponent } from './components/elements/infographic/items/pie-charts/pie-charts.component';
import { HorizontalBarsComponent } from './components/elements/infographic/items/horizontal-bars/horizontal-bars.component';
import { VerticalBarsComponent } from './components/elements/infographic/items/vertical-bars/vertical-bars.component';
import { IconProgressBarsComponent } from './components/elements/infographic/items/icon-progress-bars/icon-progress-bars.component';
import { GoogleMapsComponent } from './components/elements/infographic/items/google-maps/google-maps.component';
import { ListsComponent } from './components/elements/infographic/items/lists/lists.component';
import { CountdownComponent } from './components/elements/infographic/items/countdown/countdown.component';
import { HeadingsComponent } from './components/elements/typography/items/headings/headings.component';
import { ColumnsComponent } from './components/elements/typography/items/columns/columns.component';
import { DropcapsComponent } from './components/elements/typography/items/dropcaps/dropcaps.component';
import { IconWithTextComponent } from './components/elements/typography/items/icon-with-text/icon-with-text.component';
import { HighlightsComponent } from './components/elements/typography/items/highlights/highlights.component';
import { TitleAndSubtitleComponent } from './components/elements/typography/items/title-and-subtitle/title-and-subtitle.component';
import { CustomFontComponent } from './components/elements/typography/items/custom-font/custom-font.component';
import { HomeContextComponent } from './components/home/home-context/home-context.component';
import { BlogContextComponent } from './components/blog/blog-context/blog-context.component';
import { PagesContextComponent } from './components/pages/pages-context/pages-context.component';
import { ShopContextComponent } from './components/shop/shop-context/shop-context.component';
import { ToursContextComponent } from './components/tours/tours-context/tours-context.component';
import { ElementsContextComponent } from './components/elements/elements-context/elements-context.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { HomePageMainSliderComponent } from './components/home/items/inner-components/home-page-main-slider/home-page-main-slider.component';
import { HomePageTourCarouselComponent } from './components/home/items/inner-components/home-page-tour-carousel/home-page-tour-carousel.component';
import { HomePageSectionHeaderComponent } from './components/home/items/inner-components/home-page-section-header/home-page-section-header.component';
import { HomePageTourPlaceCarouselComponent } from './components/home/items/inner-components/home-page-tour-place-carousel/home-page-tour-place-carousel.component';


@NgModule({
  declarations: [
    CoreComponent,
    MainHomeComponent,
    FullscreenSliderComponent,
    ZoomSliderComponent,
    VideoSliderComponent,
    ParallaxComponent,
    EverythingAboutUsComponent,
    WhatWeOfferComponent,
    PaqPageComponent,
    ContactPageComponent,
    MeetOurGuidesComponent,
    ComingSoonComponent,
    ErrorPageComponent,
    StandartTourListComponent,
    GalleryTourListComponent,
    SplitTourListComponent,
    TourItemComponent,
    DestinationListComponent,
    DestinationItemComponent,
    BlogMasonryComponent,
    MasonryFullWidthComponent,
    MasonryWithSidebarComponent,
    BlogStandardComponent,
    BlogSplitColumnComponent,
    PostTypesComponent,
    PostTypeStandardComponent,
    PostTypeGalleryComponent,
    PostTypeVideoComponent,
    PostTypeAudioComponent,
    PostTypeQuoteComponent,
    PostTypeLinkComponent,
    ShopListWithSidebarComponent,
    ShopListThreeColumnsComponent,
    ShopListFourColumnsComponent,
    ShopListFiveColumnsComponent,
    ProductSingleComponent,
    ClassicComponent,
    PresentationComponent,
    InfographicComponent,
    TypographyComponent,
    AccordionsComponent,
    TabsComponent,
    ButtonsComponent,
    CallToActionComponent,
    SeparatorsComponent,
    BlockquoteComponent,
    ContactFormComponent,
    MessageBoxesComponent,
    TeamShortcodeComponent,
    TourCarouselComponent,
    TourListComponent,
    TestimonialsComponent,
    TopReviewsComponent,
    ClientCarouselComponent,
    BlogListShortcodeComponent,
    ImageGalleryComponent,
    ReviewsComponent,
    VideoButtonComponent,
    CountersComponent,
    PieChartsComponent,
    HorizontalBarsComponent,
    VerticalBarsComponent,
    IconProgressBarsComponent,
    GoogleMapsComponent,
    ListsComponent,
    CountdownComponent,
    HeadingsComponent,
    ColumnsComponent,
    DropcapsComponent,
    IconWithTextComponent,
    HighlightsComponent,
    TitleAndSubtitleComponent,
    CustomFontComponent,
    HomeContextComponent,
    BlogContextComponent,
    PagesContextComponent,
    ShopContextComponent,
    ToursContextComponent,
    ElementsContextComponent,
    HomePageMainSliderComponent,
    HomePageTourCarouselComponent,
    HomePageSectionHeaderComponent,
    HomePageTourPlaceCarouselComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CarouselModule
  ]
})
export class CoreModule { }
