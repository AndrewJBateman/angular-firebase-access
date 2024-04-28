import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { MatButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
    selector: "app-top-navbar",
    templateUrl: "./top-navbar.component.html",
    styleUrls: ["./top-navbar.component.scss"],
    standalone: true,
    imports: [
        MatToolbar,
        MatButton,
        RouterLink,
    ],
})
export class TopNavbarComponent {
  constructor(public router: Router) {}
}
