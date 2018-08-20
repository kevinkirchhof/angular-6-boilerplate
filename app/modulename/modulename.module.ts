import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { Modulecontainer1Component } from "./containers/moduleconainer1/modulecontainer1.component";
import { ComponentnameComponent } from "./components/componentname/componentname.component";

@NgModule({
  declarations: [Modulecontainer1Component, ComponentnameComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [Modulecontainer1Component]
})
export class StockInventoryModule {}
