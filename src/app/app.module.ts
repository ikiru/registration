import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { APIService } from "./api.service";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule /*APIService*/],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
