import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {TranslateModule} from "@ngx-translate/core";
import {EffectsModule} from "@ngrx/effects";

import {PlayerComponent} from "./player.component";
import {PlayerHeroDetailComponent} from "./player-hero-detail/player-hero-detail.component";
import {PlayerResource} from "./state/player.resource";
import {PlayerProfileComponent} from "./player-profile/player-profile.component";
import {PlayerEffects} from "./state/player.effect";
import {ComponentsModule} from "../components/components.module";
import {HeroModule} from "../hero/hero.module";
import {LifetimeStatsCardComponent} from "./lifetime-stats-card/lifetime-stats-card.component";
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerHeroDetailComponent,
    PlayerProfileComponent,
    LifetimeStatsCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: "",
        component: PlayerComponent,
        children: [
          {path: "", component: PlayerProfileComponent},
          {path: ":hero", component: PlayerHeroDetailComponent},
        ]
      }
    ]),
    EffectsModule.forFeature([
      PlayerEffects
    ]),
    ComponentsModule,
    HeroModule,
    PipesModule
  ],
  providers: [PlayerResource],
})
export class PlayerModule {}
