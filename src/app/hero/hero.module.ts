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
import {PipesModule} from "../pipes/pipes.module";
import {HeroStatsComponent} from "./hero-stats/hero-stats.component";
import {HeroResource} from "./hero-resource";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {HeroImageComponent} from "./hero-image/hero-image.component";
import {HeroCardSkeletonComponent} from "./hero-card/hero-card-skeleton/hero-card-skeleton.component";
import {HeroStatsSkeletonComponent} from "./hero-stats/hero-stats-skeleton/hero-stats-skeleton.component";
import {TagCardSkeletonComponent} from "./tag-card/tag-card-skeleton/tag-card-skeleton.component";
import {HeroImageSkeletonComponent} from "./hero-image/hero-image-skeleton/hero-image-skeleton.component";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule,
    PipesModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    HeroCardComponent,
    HeroImagePipe,
    HeroNamePipe,
    HeroColorPipe,
    TagCardComponent,
    HeroStatsComponent,
    HeroImageComponent,
    HeroCardSkeletonComponent,
    HeroStatsSkeletonComponent,
    TagCardSkeletonComponent,
    HeroImageSkeletonComponent,
  ],
  exports: [
    HeroCardComponent,
    HeroImagePipe,
    HeroNamePipe,
    HeroColorPipe,
    TagCardComponent,
    HeroStatsComponent,
    HeroImageComponent,
    HeroCardSkeletonComponent,
    HeroStatsSkeletonComponent,
    TagCardSkeletonComponent,
    HeroImageSkeletonComponent,
  ],
  providers: [
    HeroStatFactory,
    TagStatFactory,
    HeroResource
  ]
})
export class HeroModule {}
