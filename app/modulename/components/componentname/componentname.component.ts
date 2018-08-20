import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "componentname",
  styleUrls: ["componentname.component.scss"],
  template: `
    It works
  `
})
export class ComponentnameComponent {
  @Input()
  parent: FormGroup;
}
