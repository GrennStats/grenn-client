import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {TranslateModule} from "@ngx-translate/core";
import {EffectsModule} from "@ngrx/effects";

import {ComponentsModule} from "../components/components.module";
import {HeroModule} from "../hero/hero.module";
import {SearchEffects} from "./state/search.effect";
import {SearchResource} from "./state/search.resource";
import {SearchComponent} from "./search.component";
import {IndexComponent} from "./index/index.component";
import {PlayerListComponent} from "./player-list/player-list.component";
import {FormsModule} from "@angular/forms";
import {PlayerEntryComponent} from "./player-list/player-entry/player-entry.component";

@NgModule({
  declarations: [
    SearchComponent,
    IndexComponent,
    PlayerListComponent,
    PlayerEntryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: "",
        component: SearchComponent,
        children: [
          {path: "", component: IndexComponent},
          {path: "search/:playerId", component: PlayerListComponent},
        ]
      }
    ]),
    EffectsModule.forFeature([
      SearchEffects
    ]),
    ComponentsModule,
    HeroModule
  ],
  providers: [SearchResource],
})
export class SearchModule {}
