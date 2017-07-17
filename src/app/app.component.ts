import { Component } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  users = [];
  user = new User();
  // user = {
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   address: "",
  //   unit: "",
  //   city: "",
  //   state: "",
  //   yes: "",
  //   no: ""
  // };
}
