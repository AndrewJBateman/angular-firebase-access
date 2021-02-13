import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from "../environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostDashboardComponent } from "./components/posts/post-dashboard/post-dashboard.component";
import { SvgCalenderComponent } from "./components/svg-calender/svg-calender.component";
import { SvgFolderModule } from "./components/svg-folder/svg-folder.module";
import { SvgTimerModule } from "./components/svg-timer/svg-timer.module";

import { PostService } from './services/post.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDashboardComponent,
    SvgCalenderComponent,
    TopNavbarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, "angular-portfolio"), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    SvgFolderModule,
    SvgTimerModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
