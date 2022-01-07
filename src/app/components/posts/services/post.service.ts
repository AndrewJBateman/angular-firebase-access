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
  addDoc,
} from "firebase/firestore/lite";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { environment } from "../../../../environments/environment";
import { Post } from "../models/post";
import { Observable } from "rxjs";

const firebaseConfig = environment.firebase;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Injectable()
export class PostService {
  currentPost: Post;

  constructor(private angularFirestore: AngularFirestore, private router: Router) {}

  getPosts = async (): Promise<any> => {
    let postsArray = [];
    const postCollectionRef = collection(db, "posts");
    const querySnapshot = await getDocs(query(postCollectionRef));
    querySnapshot.forEach(doc => {
      alert;
      postsArray.push({ id: doc.id, ...doc.data() });
      postsArray.sort((a, b) => b.published - a.published);
    });
    return postsArray;
  };

  showFullPost = (post: Post): void => {
    this.currentPost = post;
    this.router.navigate(["/post-detail"]);
  };

  create(post: Post):Promise<any> {
    console.log('post to save: ', post);
    return this.angularFirestore.collection("posts").add(post);
  }

  delete(id: string) {
    // return this.getPost(id).delete();
  }

  async updateDBPost(id: string, formData: any) {
    console.log("formData: ", formData);
    const postToUpdate = doc(db, "posts", id);
    await updateDoc(postToUpdate, formData);
  }
}
