import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './compartir/footer/footer.component';
import { HeaderComponent } from './compartir/header/header.component';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { ItemsComponent } from './paginas/items/items.component';
import { AboutComponent } from './paginas/about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PortafolioComponent,
    ItemsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
