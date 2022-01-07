/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { PostService } from "../services/post.service";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
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
  imageby: string;
  imageLink: string;
  title: string;
  subtitle: string;
  category: string;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  buttonText = "Create Post";

  constructor(
    private postService: PostService,
    private storage: AngularFirestore,
    private router: Router,
  ) {}

  createPost(): void {
    const postData = {
      content: this.content,
      image: this.image || null,
      imageby: this.imageby || null,
      imageLink: this.imageLink || null,
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
    this.imageby = "";
    this.imageLink = "";
    setTimeout(() => (this.buttonText = "Create Post"), 3000);
    this.returnToList();
  }

  returnToList() {
    this.router.navigate(["/"]);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  uploadImage(event: any): void {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    // const fileRef = this.storage.ref(path);
    if (file.type.split("/")[0] !== "image") {
      return alert("only image files allowed");
    } else {
      // const task = this.storage.upload(path, file);
      // const ref = this.storage.ref(path);
      // this.uploadPercent = task.percentageChanges();
      // task
      //   .snapshotChanges()
      //   .pipe(
      //     finalize(() => {
      //       this.downloadURL = ref.getDownloadURL();
      //       this.downloadURL.subscribe(url => (this.image = url));
      //     }),
      //   )
      //   .subscribe();
      // console.log("image uploaded");
    }
  }
}
