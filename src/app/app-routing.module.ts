import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { LiveexamComponent } from './main/liveexam/liveexam.component';
import { RepoComponent } from './main/repo/repo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liveexam', component: LiveexamComponent },
  { path: 'repo', component: RepoComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
