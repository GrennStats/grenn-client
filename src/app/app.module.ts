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
import {HttpClientModule} from "@angular/common/http";
import {reducers} from "./reducers";
import {AppConfig} from "./app.config";
import {ComponentsModule} from "./components/components.module";
import {HeroModule} from "./hero/hero.module";

@NgModule({
  declarations: [
    AppComponent
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
        loadChildren: "./search/search.module#SearchModule"
      },
      {
        path: "player/:playerId",
        loadChildren: "./player/player.module#PlayerModule"
      },
      // 404 Page
      {path: "**", redirectTo: ""}
    ]),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    ComponentsModule,
    HeroModule
  ],
  providers: [
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang("en");
    translate.use("en");
    translate.setTranslation("en", {
      "stats:role-performance": "Performance by role",
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
      "stats:losses": "losses",
      "stats:hours": "hours",
      "stats:skill-points": "skill points",
      "stats:level": "level",
      "stats:medals-earned": "medals earned",
      "stats:damage-dealt": "damage dealt",
      "stats:healed": "healed",
      "stats:damage-taken": "damage taken",
      "stats:guardian-damage": "guardian damage",
      "stats:wounds-given": "wounds given",
      "stats:power-earned": "power earned",
      "stats:summons": "summons",

      "stats:lifetime": "Lifetime stats",
      "stats:overall": "Overall",
      "stats:combat": "Fight",

      "commons:logo-title": "Grenn Logo",

      "search:find-player": "find player",
      "search:enter-name": "Enter your gigantic username...",
      "search:not-found-title": "Well, this is awkward...",
      "search:not-found-description": "Unfortunately we were not able to find a player with a similar name.",
    });
  }
}
