import {TranslateLoader} from "@ngx-translate/core";
import "rxjs/add/operator/map";
import {AngularFireDatabase} from "angularfire2/database";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

export function TranslateFirebaseLoaderFactory(db: AngularFireDatabase) {
  return new TranslateFirebaseLoader(db);
}

@Injectable()
export class TranslateFirebaseLoader implements TranslateLoader {
    constructor(private db: AngularFireDatabase) {}

    public getTranslation(lang: string): Observable<any> {
        return this.db.object("/translations");
    }
}
