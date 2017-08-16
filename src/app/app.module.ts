import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {TranslateModule, TranslateService, TranslateLoader} from "@ngx-translate/core";
import {EffectsModule} from "@ngrx/effects";
import {NgxChartsModule} from "@swimlane/ngx-charts";

import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {reducers} from "./reducers";
import {AppConfig} from "./app.config";
import {ComponentsModule} from "./components/components.module";
import {HeroModule} from "./hero/hero.module";
import {environment} from "../environments/environment.prod";
import {AngularFireModule} from "angularfire2";
import {TranslateFirebaseLoader, TranslateFirebaseLoaderFactory} from "./translations/firebase.loader";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: TranslateFirebaseLoaderFactory,
          deps: [AngularFireDatabase]
      }
    }),
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
  }
}
