import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PostService } from "../services/post.service";
import { Post } from "../models/post";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"],
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
    const formData = {
      title: this.post.title,
      subtitle: this.post.subtitle,
      imageby: this.post.imageby,
      imageLink: this.post.imageLink,
      category: this.post.category,
      content: this.post.content,
      published: new Date(),
    };
        const id = this.post.id;
    this.postService.updateDBPost(id, formData);
    this.editing = false;
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.postService.delete(id);
    this.router.navigate(["/"]);
  }

  returnToList(): any {
    this.router.navigate(["/"]);
  }
}
