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
import {SuggestionBoxComponent} from "./suggestion-box/suggestion-box.component";
import {DirectivesModule} from "../directives/directives.module";
import {SuggestionBoxSkeletonComponent} from "./suggestion-box/suggestion-box-skeleton/suggestion-box-skeleton.component";
import {PlayerEntrySkeletonComponent} from "./player-list/player-entry/player-entry-skeleton/player-entry-skeleton.component";
import {PlayerListSkeletonComponent} from "./player-list/player-list-skeleton/player-list-skeleton.component";
import {SearchResourceMock} from "./state/search.resource.fixtures";

@NgModule({
  declarations: [
    SearchComponent,
    IndexComponent,
    PlayerListComponent,
    PlayerEntryComponent,
    SuggestionBoxComponent,
    SuggestionBoxSkeletonComponent,
    PlayerEntrySkeletonComponent,
    PlayerListSkeletonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    DirectivesModule,
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
  providers: [
    SearchResource,
    {provide: SearchResource, useClass: SearchResourceMock}
  ],
})
export class SearchModule {}
