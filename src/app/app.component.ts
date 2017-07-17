import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  users = [];
  user = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    yes: "",
    no: ""
  };
}
