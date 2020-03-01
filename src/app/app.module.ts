import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/pagestruct/header.component';
import {MenuComponent} from './component/pagestruct/menu.component';
import {SubmenuComponent} from './component/pagestruct/submenu.component';
import {SearchComponent} from './component/pagestruct/search.component';
import {SliderComponent} from "./component/pagestruct/slider.component";
import {SocialComponent} from "./component/pagestruct/social.component";
import {FooterComponent} from "./component/pagestruct/footer.component";
import {AboutComponent} from "./component/about/about.component";
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from "./component/main/main.component";
import {NewsboxComponent} from "./component/news/newsbox.component";
import {PreviewboxComponent} from "./component/preview/previewbox.component";
import {AdvertisingComponent} from "./component/advertising/advertising.component";
import {ContactComponent} from "./component/contact/contact.component";
import {FormediaComponent} from "./component/formedia/formedia.component";
import {NewslistComponent} from "./component/news/newslist.component";
import {RegulationsComponent} from "./component/regulations/regulations.component";
import {PrivacypolicyComponent} from "./component/privacypolicy/privacypolicy.component";
import {FilmComponent} from "./component/film/film.component";
import {PersonComponent} from "./component/person/person.component";
import {EnemefComponent} from "./component/enemef/enemef.component";
import {NewsletterboxComponent} from "./component/newsletter/newsletterbox.component";
import {RotatorComponent} from "./component/partners/rotator.component";
import {PremieresboxComponent} from "./component/main/premieresbox.component";
import {TwoboxComponent} from "./component/main/twobox.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {FilmService} from "./service/film.service";
import {HttpClientModule} from "@angular/common/http";
import {AaadummyComponent} from "./component/aaadummy/aaadummy.component";
import {FilminfoboxComponent} from "./component/film/filminfobox.component";
import {FilmphotoboxComponent} from "./component/film/filmphotobox.component";
import {FilmographyComponent} from "./component/person/filmography.component";
import {PersonService} from "./service/person.service";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SubmenuComponent,
    SearchComponent,
    SliderComponent,
    SocialComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    AdvertisingComponent,
    ContactComponent,
    NewsboxComponent,
    NewslistComponent,
    FormediaComponent,
    RegulationsComponent,
    PrivacypolicyComponent,
    FilmComponent,
    PersonComponent,
    FilmographyComponent,
    EnemefComponent,
    NewsletterboxComponent,
    RotatorComponent,
    PreviewboxComponent,
    PremieresboxComponent,
    TwoboxComponent,
    FilminfoboxComponent,
    FilmphotoboxComponent,
    AaadummyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
  ],
  providers: [
    FilmService,
    PersonService,
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SubmenuComponent,
    SearchComponent,
    SliderComponent,
    SocialComponent,
    FooterComponent,
  ]
})
export class AppModule {
}
