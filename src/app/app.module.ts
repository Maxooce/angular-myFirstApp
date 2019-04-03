import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { FilmsComponent } from './films/films.component';
import { DisplayFilmsDirective } from './display-films.directive';
import { MenuComponent } from './menu/menu.component'; // <-- NgModel lives here
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/user-profile',
    pathMatch: 'full'
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },  
  {
    path: 'sign-up',
    component: SignUpComponent
  }
 ];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    HighlightDirective,
    FilmsComponent,
    DisplayFilmsDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
