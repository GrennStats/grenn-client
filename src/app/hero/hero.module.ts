import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {HeroCardComponent} from "./hero-card/hero-card.component";
import {HeroImagePipe} from "./hero-image.pipe";
import {HeroNamePipe} from "./hero-name.pipe";
import {HeroColorPipe} from "./hero-color.pipe";
import {ComponentsModule} from "../components/components.module";
import {HeroStatFactory} from "./hero-stat.factory";
import {TagStatFactory} from "./tag-stat.factory";
import {TagCardComponent} from "./tag-card/tag-card.component";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule
  ],
  declarations: [
    HeroCardComponent,
    HeroImagePipe,
    HeroNamePipe,
    HeroColorPipe,
    TagCardComponent,
  ],
  exports: [
    HeroCardComponent,
    HeroImagePipe,
    HeroNamePipe,
    HeroColorPipe,
    TagCardComponent
  ],
  providers: [
    HeroStatFactory,
    TagStatFactory
  ]
})
export class HeroModule {}
