import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

//import { Product } from "../../models/product.interface";

import { ComponentnameComponent } from "../../components/componentname/componentname.component";

@Component({
  selector: "modulecontainer1",
  styles: ["stock-inventory.component.scss"],
  template: `
    <div class="stock-inventory">
      <componentname></componentname>
    </div>
  `
})
export class Modulecontainer1Component {}
