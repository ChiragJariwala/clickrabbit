import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { SectionFeaturedComponent } from './section-featured/section-featured.component';
import { SectionHowComponent } from './section-how/section-how.component';
import { SectionMealsComponent } from './section-meals/section-meals.component';
import { SectionTestimonialsComponent } from './section-testimonials/section-testimonials.component';
import { SectionPricingComponent } from './section-pricing/section-pricing.component';
import { SectionCtaComponent } from './section-cta/section-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionHeroComponent,
    SectionFeaturedComponent,
    SectionHowComponent,
    SectionMealsComponent,
    SectionTestimonialsComponent,
    SectionPricingComponent,
    SectionCtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
