import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { NavComponent } from './main/nav/nav.component';
import { BannerComponent } from './main/banner/banner.component';
import { WhychooseComponent } from './main/whychoose/whychoose.component';
import { FooterComponent } from './main/footer/footer.component';
import { TestimonialComponent } from './main/testimonial/testimonial.component';
import { FunfactorComponent } from './main/funfactor/funfactor.component';
import { LiveexamComponent } from './main/liveexam/liveexam.component';
import { LiveexamheaderComponent } from './main/liveexamheader/liveexamheader.component';
import { LiveexamcourseComponent } from './main/liveexamcourse/liveexamcourse.component';
import { RepoComponent } from './main/repo/repo.component';
import { RepouploadComponent } from './main/repoupload/repoupload.component';
import { ContactComponent } from './main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BannerComponent,
    WhychooseComponent,
    FooterComponent,
    TestimonialComponent,
    FunfactorComponent,
    LiveexamComponent,
    LiveexamheaderComponent,
    LiveexamcourseComponent,
    RepoComponent,
    RepouploadComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
