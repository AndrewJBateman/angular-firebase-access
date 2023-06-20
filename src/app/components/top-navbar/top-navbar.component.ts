import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-top-navbar",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.scss"],
})
export class TopNavbarComponent {
  constructor(public router: Router) {}
}
