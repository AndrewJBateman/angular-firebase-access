import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-top-navbar",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.scss"],
})
export class TopNavbarComponent {
  loggedIn = false;

  constructor(public auth: AuthService, public router: Router) {}
}
