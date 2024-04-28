import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

// firebase
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { environment } from "src/environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { PostListComponent } from "./components/posts/post-list/post-list.component";
import { PostDashboardComponent } from "./components/posts/post-dashboard/post-dashboard.component";
import { SvgCalenderComponent } from "./components/svg-calender/svg-calender.component";
import { SvgFolderModule } from "./components/svg-folder/svg-folder.module";
import { SvgTimerModule } from "./components/svg-timer/svg-timer.module";

import { PostService } from "./components/posts/services/post.service";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        SvgFolderModule,
        SvgTimerModule,
        PostListComponent,
        PostDashboardComponent,
        SvgCalenderComponent,
        TopNavbarComponent,
    ],
    providers: [PostService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
