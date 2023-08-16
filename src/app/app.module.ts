import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {SharedModule} from './modules/components/shared/shared.module';
import {NotFoundComponent} from './components/items/not-found/not-found.component';
import {TopBarComponent} from './components/items/top-bar/top-bar.component';
import {HeaderComponent} from './components/items/header/header.component';
import {FooterComponent} from './components/items/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        TopBarComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        SharedModule,
        BrowserAnimationsModule
    ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
