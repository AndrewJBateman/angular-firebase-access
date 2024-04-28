import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostDetailRoutingModule } from "./post-detail-routing.module";
import { PostDetailComponent } from "../post-detail/post-detail.component";
import { SvgFolderModule } from "../../svg-folder/svg-folder.module";
import { SvgCameraModule } from "../../svg-camera/svg-camera.module";
import { SvgTimerModule } from "../../svg-timer/svg-timer.module";

import { SharedModule } from "../../../shared/shared.module";
import { PipesModule } from "../../../pipes/pipes.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    imports: [
        CommonModule,
        PostDetailRoutingModule,
        SharedModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SvgFolderModule,
        SvgCameraModule,
        SvgTimerModule,
        PostDetailComponent,
    ],
    exports: [MatFormFieldModule, MatInputModule, PostDetailComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostDetailModule {}
