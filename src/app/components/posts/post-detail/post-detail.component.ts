import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PostService } from "../services/post.service";
import { Post } from "../models/post";
import { DateConvertPipe } from "../../../pipes/date-convert.pipe";
import { SvgTimerComponent } from "../../svg-timer/svg-timer.component";
import { SvgFolderComponent } from "../../svg-folder/svg-folder.component";
import { SvgCameraComponent } from "../../svg-camera/svg-camera.component";
import { MatButton, MatAnchor } from "@angular/material/button";
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatCard, MatCardHeader, MatCardAvatar, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from "@angular/material/card";

@Component({
    selector: "app-post-detail",
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.component.scss"],
    standalone: true,
    imports: [
        MatCard,
        MatFormField,
        MatInput,
        FormsModule,
        MatLabel,
        MatSelect,
        MatOption,
        MatButton,
        MatCardHeader,
        MatCardAvatar,
        MatCardTitle,
        MatCardSubtitle,
        MatCardContent,
        SvgCameraComponent,
        SvgFolderComponent,
        SvgTimerComponent,
        MatCardActions,
        MatAnchor,
        DateConvertPipe,
    ],
})
export class PostDetailComponent implements OnInit {
  currentPost: any;
  post: Post;
  editing = false;
  selectedCategory: string;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) {}

  ngOnInit(): void {
    this.post = this.postService.currentPost;
  }
  updatePost(): any {
    console.log('updatePost function started')
    const formData = {
      title: this.post.title,
      subtitle: this.post.subtitle,
      image: this.post.image,
      category: this.post.category,
      content: this.post.content,
      published: new Date(),
    };
    const id = this.post.id;
    console.log('form data: ', id, formData)
    this.postService.updateDBPost(id, formData);
    this.editing = false;
  }

  delete(): void {
    const id = this.post.id;
    this.postService.delete(id);
    this.router.navigate(["/"]);
  }

  returnToList(): any {
    this.router.navigate(["/"]);
  }
}
