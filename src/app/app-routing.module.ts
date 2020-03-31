import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./component/main/main.component";
import {AboutComponent} from "./component/about/about.component";
import {AdvertisingComponent} from "./component/advertising/advertising.component";
import {ContactComponent} from "./component/contact/contact.component";
import {FormediaComponent} from "./component/formedia/formedia.component";
import {RegulationsComponent} from "./component/regulations/regulations.component";
import {PrivacypolicyComponent} from "./component/privacypolicy/privacypolicy.component";
import {FilmComponent} from "./component/film/film.component";
import {PersonComponent} from "./component/person/person.component";

const routes: Routes = [
  // main page
  {path: '', component: MainComponent},
  // structural
  {path: 'o-filmypl', component: AboutComponent},
  {path: 'reklama', component: AdvertisingComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'dla-mediow', component: FormediaComponent},
  {path: 'regulamin', component: RegulationsComponent},
  {path: 'politykaprywatnosci', component: PrivacypolicyComponent},
  // film
  {path: 'film/:id/:fakeTitle', component: FilmComponent},
  // person
  {path: 'osoba/:id/:fakeName', component: PersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
