import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public aboutText(): string {
    const aboutText = `
    Draft-EZ is an application that helps manage sports drafting and athletic
    competitions of all kinds. Draft-EZ is quick, fun, and easy to use, compared to many of the other
    popularized drafting applications
    `;

    return aboutText;
  }
}
