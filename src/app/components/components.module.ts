import {NgModule} from "@angular/core";
import {StatsBarComponent} from "./stat-bar/stat-bar.component";
import {SquareImageComponent} from "./square-image/square-image.component";
import {PrimaryStatComponent} from "./primary-stat/primary-stat.component";
import {StatCardComponent} from "./stat-card/stat-card.component";
import {ButtonComponent} from "./button/button.component";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {StatCardSkeletonComponent} from "./stat-card/stat-card-skeleton/stat-card-skeleton.component";
import {StatBarSkeletonComponent} from "./stat-bar/stat-bar-skeleton/stat-bar-skeleton.component";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    StatsBarComponent,
    SquareImageComponent,
    PrimaryStatComponent,
    StatCardComponent,
    ButtonComponent,
    LoadingSpinnerComponent,
    NavigationComponent,
    StatCardSkeletonComponent,
    StatBarSkeletonComponent
  ],
  exports: [
    StatsBarComponent,
    SquareImageComponent,
    PrimaryStatComponent,
    StatCardComponent,
    ButtonComponent,
    LoadingSpinnerComponent,
    NavigationComponent,
    StatCardSkeletonComponent,
    StatBarSkeletonComponent
  ]
})
export class ComponentsModule {}
