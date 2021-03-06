import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { StockInventoryModule } from "./modulename/modulename.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StockInventoryModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
