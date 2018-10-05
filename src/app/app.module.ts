import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// service
import { HttpModule } from '@angular/http';
import { WebService } from './services/web/web.service';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WebTableService } from './services/db/web-table.service';

// components
import { AppComponent } from './components/main/app.component';
import { NavComponent } from './components/nav/nav.component';
import { AdFormatsComponent } from './components/ad-formats/ad-formats.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdFormatsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(WebTableService),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'newsletter',
        component: ContactComponent
      },
      {
        path: ':format',
        component: AdFormatsComponent
      },
      {
        path: ':format/:tag',
        component: AdFormatsComponent
      }
    ], { useHash: true })
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
