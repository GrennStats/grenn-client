import {environment} from "../environments/environment";
import {Injectable} from "@angular/core";

@Injectable()
export class AppConfig {
    public get baseUrl() {
        if (environment.production) {
            return "https://api.grenn.io";
        }

        return "http://localhost:8080";
    }
}
