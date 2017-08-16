import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RoundPipe} from "./round.pipe";
import {SecondsToHoursPipe} from "./seconds-to-hours.pipe";
import {ShortenValuePipe} from "./shorten-value.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RoundPipe,
    SecondsToHoursPipe,
    ShortenValuePipe
  ],
  exports: [
    RoundPipe,
    SecondsToHoursPipe,
    ShortenValuePipe
  ]
})
export class PipesModule {}
