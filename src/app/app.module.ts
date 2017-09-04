import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, PreloadAllModules} from "@angular/router";
import {NgModule, ErrorHandler} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {TranslateModule, TranslateService, TranslateLoader} from "@ngx-translate/core";
import {EffectsModule} from "@ngrx/effects";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

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
import * as Raven from "raven-js";

Raven.config("https://7de28881eb3a4e3ba5d7457ab5ad52d4@sentry.io/212526")
  .install();

export class RavenErrorHandler implements ErrorHandler {
  public handleError(err): void {
    console.error(err.originalError || err);
    Raven.captureException(err.originalError || err);
  }
}

@NgModule({
  declarations: [
    AppComponent,
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
    ], {preloadingStrategy: PreloadAllModules}),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10 //  Retains last n states
    }),
    ComponentsModule,
    HeroModule
  ],
  providers: [
    AppConfig,
    {provide: ErrorHandler, useClass: RavenErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang("en");
    translate.use("en");
  }
}
