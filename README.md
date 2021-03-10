# :zap: Angular Firebase Access

* Angular 11 app using Firebase tools to access a Google Cloud Firestore

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular Material Table](#zap-angular-material-table)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Includes Firebase authentication to access posts database using a Google account but the login method can be changed in `services/auth.service.ts`

## :camera: Screenshots

* ![Example screenshot](./img/posts.jpg)

## :signal_strength: Technologies

* [Angular v11](https://angular.io/)
* [Firebase v8](https://firebase.google.com) Cloud storage and authentication.
* [Firebase Tools v9](https://www.npmjs.com/package/firebase-tools) CLI used to manage a Firebase project
* [AngularFire v6](https://www.npmjs.com/package/@angular/fire) Angular library for Firebase

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng update` to update Angular

## :computer: Code Examples

* functions from `post.service.ts` to get all posts and a specific post by id.  

```typescript
  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    return this.postDoc.valueChanges();
  }
```

## :cool: Features

* Html template uses the [Angular async pipe](https://angular.io/api/common/AsyncPipe) to subscribe to the posts Observable and to unsubscribe automatically in the onDestroy lifecycle, avoiding memory leaks.

## :clipboard: Status & To-Do List

* Status: Working. With my Google login I can Create, Read, Update and Delete blog posts.
* To-Do: Use to update posts and images for website

## :clap: Inspiration

* [Blog post images from Unsplash](https://unsplash.com/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)