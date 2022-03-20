import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostDashboardComponent } from "./components/posts/post-dashboard/post-dashboard.component";
import { PostListComponent } from "./components/posts/post-list/post-list.component";

const routes: Routes = [
  {
    path: "",
    component: PostListComponent,
  },
  {
    path: "dashboard",
    component: PostDashboardComponent,
  },
  {
    path: "post-detail",
    loadChildren: () =>
      import("./components/posts/post-detail/post-detail.module").then(
        mod => mod.PostDetailModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
