import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { Post } from "../models/post";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
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
