import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  doc,
  updateDoc,
  } from "firebase/firestore/lite";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";

import { environment } from "../../../../environments/environment";
import { Post } from "../models/post";
import { Observable } from "rxjs";

const firebaseConfig = environment.firebase;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Injectable()
export class PostService {
  currentPost: Post;
  postsArray = [];

  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router,
  ) {}

  // get all posts from Firestore database as a snapshot Then
  // add them to an array using the array push method then sort by date
  getPosts = async (): Promise<any> => {
    this.postsArray = [];
    const postCollectionRef = collection(db, "posts");
    const querySnapshot = await getDocs(query(postCollectionRef));
    querySnapshot.forEach(doc => {
      alert;
      this.postsArray.push({ id: doc.id, ...doc.data() });
      this.postsArray.sort((a, b) => b.published - a.published);
    });
    return this.postsArray;
  };

  // with user-selected post, navigate to post detail page
  showFullPost = (post: Post): void => {
    this.currentPost = post;
    this.router.navigate(["/post-detail"]);
  };

  // add new post from form contents to firestore posts database
  async create(post: Post): Promise<any> {
    await this.angularFirestore.collection("posts").add(post);
    console.log("this.postsArray: ", this.postsArray);
    return this.router.navigate(["/"]);
  }

  // delete post from Firestore posts database using post id
  async delete(id: string): Promise<any> {
    await this.angularFirestore
      .collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        console.log("post deleted");
        return this.router.navigate(["/"]);
      });
  }

  // update post in Firestore databse using id
  async updateDBPost(id: string, formData: any) {
    const postToUpdate = doc(db, "posts", id);
    await updateDoc(postToUpdate, formData);
  }
}
