import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { Post } from "../models/post";
import { PostService } from "../services/post.service";
import { ReadTimePipe } from "../../../pipes/read-time.pipe";
import { DateConvertPipe } from "../../../pipes/date-convert.pipe";
import { SlicePipe } from "@angular/common";
import { SvgTimerComponent } from "../../svg-timer/svg-timer.component";
import { SvgFolderComponent } from "../../svg-folder/svg-folder.component";
import { SvgCalenderComponent } from "../../svg-calender/svg-calender.component";
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.scss"],
    standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        SvgCalenderComponent,
        SvgFolderComponent,
        SvgTimerComponent,
        SlicePipe,
        DateConvertPipe,
        ReadTimePipe,
    ],
})
export class PostListComponent implements OnInit {
  title = "Posts";
  posts: Post[];

  constructor(
    private postService: PostService,
    private titleService: Title,
    private metaTagService: Meta,
  ) {}

  async ngOnInit(): Promise<any> {
    this.posts = await this.postService.getPosts();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "blog",
      content: "andrewbateman.org",
    });
  }

  trackByFn(index: number, post: Post): string {
    return post.id;
  }

  onSelectPost(post: Post) {
    this.postService.showFullPost(post);
  }
}
