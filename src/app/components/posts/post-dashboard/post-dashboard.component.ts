/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "@angular/core";

import { PostService } from "../services/post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-dashboard",
  templateUrl: "./post-dashboard.component.html",
  styleUrls: ["./post-dashboard.component.scss"],
  providers: [PostService],
})
export class PostDashboardComponent {
  content: string;
  image: string;
  title: string;
  subtitle: string;
  category: string;

  buttonText = "Create Post";

  constructor(private postService: PostService, private router: Router) {}

  createPost(): void {
    const postData = {
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title,
      subtitle: this.subtitle,
      category: this.category,
    };
    this.postService.create(postData);
    this.title = "";
    this.subtitle = "";
    this.category = "";
    this.content = "";
    this.buttonText = "Post Created";
    this.image = "";
    setTimeout(() => (this.buttonText = "Create Post"), 3000);
    this.returnToList();
  }

  returnToList() {
    this.router.navigate(["/"]);
  }
}
