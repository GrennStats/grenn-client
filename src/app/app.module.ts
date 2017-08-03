import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {EffectsModule} from "@ngrx/effects";
import {NgxChartsModule} from "@swimlane/ngx-charts";

import {AppComponent} from "./app.component";
import {PlayerComponent} from "./player/player.component";
import {PlayerHeroComponent} from "./player/player-hero/player-hero.component";
import {PlayerHeroDetailComponent} from "./player/player-hero-detail/player-hero-detail.component";
import {PlayerHeroListComponent} from "./player/player-hero-list/player-hero-list.component";
import {PlayerResource} from "./player/state/player.resource";
import {HttpClientModule} from "@angular/common/http";
import {PlayerProfileComponent} from "./player/player-profile/player-profile.component";
import {reducers} from "./reducers";
import {SearchComponent} from "./search/search.component";
import {IndexComponent} from "./search/index/index.component";
import {PlayerListComponent} from "./search/player-list/player-list.component";
import {SearchResource} from "./search/state/search.resource";
import {SearchEffects} from "./search/state/search.effect";
import {PlayerEffects} from "./player/state/player.effect";
import {StatsBarComponent} from "./components/stat-bar/stat-bar.component";
import {SquareImageComponent} from "./components/square-image/square-image.component";
import {HeroCardComponent} from "./hero/hero-card/hero-card.component";
import {PrimaryStatComponent} from "./components/primary-stat/primary-stat.component";
import {HeroStatFactory} from "./hero/hero-stat.factory";
import {StatCardComponent} from "./components/stat-card/stat-card.component";
import {HeroImagePipe} from "./hero/hero-image.pipe";
import {HeroNamePipe} from "./hero/hero-name.pipe";
import {HeroColorPipe} from "./hero/hero-color.pipe";
import {ButtonComponent} from "./components/button/button.component";
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PlayerEntryComponent } from './search/player-list/player-entry/player-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerHeroComponent,
    PlayerHeroDetailComponent,
    PlayerHeroListComponent,
    PlayerProfileComponent,
    SearchComponent,
    IndexComponent,
    PlayerListComponent,
    StatsBarComponent,
    SquareImageComponent,
    HeroCardComponent,
    PrimaryStatComponent,
    StatCardComponent,

    HeroImagePipe,
    HeroNamePipe,
    HeroColorPipe,
    ButtonComponent,
    LoadingSpinnerComponent,
    PlayerEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "",
        component: SearchComponent,
        children: [
          {path: "", component: IndexComponent},
          {path: "search/:playerId", component: PlayerListComponent},
        ]
      },
      {
        path: "player/:playerId",
        component: PlayerComponent,
        children: [
          {path: "", component: PlayerProfileComponent},
          {path: "heroes", component: PlayerHeroListComponent},
          {path: "heroes/:hero", component: PlayerHeroDetailComponent},
        ]
      },
      // 404 Page
      {path: "**", redirectTo: ""}
    ]),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      SearchEffects,
      PlayerEffects
    ])
  ],
  providers: [
    PlayerResource,
    SearchResource,
    HeroStatFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang("en");
    translate.use("en");
    translate.setTranslation("en", {
      "stats:per-min": "/min",
      "stats:kills": "kills",
      "stats:deaths": "deaths",
      "stats:assists": "assists",
      "stats:damage": "damage",
      "stats:games": "games",
      "stats:kda": "kda",
      "stats:winrate": "winrate",
      "stats:win-loss": "win/loss",
      "stats:wins": "wins",
      "stats:hours": "hours",
      "stats:skill-points": "skill points",
      "stats:level": "level",

      "search:find-player": "find player"
    });
  }
}
