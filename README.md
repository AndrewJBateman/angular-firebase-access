# :zap: Angular Firebase Access

* Angular app using Firebase tools to access a Google Cloud Firestore
* With a Google login or other auth setup it is possible to Create, Read, Update and Delete blog posts.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-firebase-access?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-firebase-access?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-firebase-access?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-firebase-access?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Firebase Access](#zap-angular-firebase-access)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Allows access to create, read, update & delete Firebase posts

## :camera: Screenshots

* ![Example screenshot](./img/posts.jpg)

## :signal_strength: Technologies

* [Angular v16](https://angular.io/)
* [Firebase v9](https://firebase.google.com) Cloud storage and authentication.
* [Firebase Tools v9](https://www.npmjs.com/package/firebase-tools) CLI used to manage a Firebase project
* [Angular/fire v7](https://www.npmjs.com/package/@angular/fire) Angular library for Firebase
* [RxJS v7](https://rxjs.dev/api) Reactive Extensions Library for JavaScript

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng update` to update Angular

## :computer: Code Examples

* functions from `post.service.ts` to get all posts and a selected post.

```typescript
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
  
```

## :cool: Features

* HTML template uses the [Angular async pipe](https://angular.io/api/common/AsyncPipe) to subscribe to the posts Observable and to unsubscribe automatically in the onDestroy lifecycle, avoiding memory leaks.

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Add tabs for posts categories

## :clap: Inspiration

* [Blog post images from Unsplash](https://unsplash.com/) - only key words used now

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: `gomezbateman@yahoo.com`
