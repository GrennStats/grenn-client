import {Component, Input, EventEmitter, Output, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../inherit-class.component";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends InheritClassComponent {
  @Input("disabled")
  public isDisabled: boolean;

  @Input("loading")
  public isLoading: boolean;

  @Output("clicked")
  public clicked = new EventEmitter();
}
