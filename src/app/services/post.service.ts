import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs } from "firebase/firestore/lite";

import { environment } from "../../environments/environment";

import { map } from "rxjs/operators";

import { Post } from "../components/posts/post-list/post";

const firebaseConfig = environment.firebase;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Injectable()
export class PostService {
  currentPost: Post;

  constructor(private router: Router) {
    // afs.firestore.settings({ timestampsInSnapshots: true });
    // this.postsCollection = this.afs.collection("posts", (ref) =>
    //   ref.orderBy("published", "desc")
    // );
  }

  getPosts = async () => {
    let postsArray = [];
    const postCollectionRef = collection(db, "posts");
    const querySnapshot = await getDocs(query(postCollectionRef));
    querySnapshot.forEach(doc => {
      alert;
      postsArray.push({ id: doc.id, ...doc.data() });
    });
    return postsArray;
  };

  getPost = async (post: Post) => {
    this.currentPost = post;
    this.router.navigate(["/post-detail"]);
  };

  create(data: Post) {
    // this.postsCollection.add(data);
  }

  delete(id: string) {
    // return this.getPost(id).delete();
  }

  update(id: string, formData) {
    //   return this.getPost(id).update(formData);
  }
}
