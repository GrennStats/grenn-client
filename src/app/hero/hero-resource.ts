import {AngularFireDatabase} from "angularfire2/database";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

export interface Hero {
  color: string;
  image: string;
  key: string;
  name: string;
  tags: string[];
}

@Injectable()
export class HeroResource {
  private heroes$: Observable<Hero[]>;

  constructor(private db: AngularFireDatabase) {
    this.heroes$ = this.db.object("/heroes");
  }

  public getHeroes(): Observable<Hero[]> {
    return this.heroes$.share();
  }
}
