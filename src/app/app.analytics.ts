// @TODO: Wait until: https://github.com/rangle/redux-beacon/issues/127

/*import {createMetaReducer} from "redux-beacon";
import {GoogleAnalytics, PageView} from "redux-beacon/targets/google-analytics";
import {logger} from "redux-beacon/extensions/logger";
import {Action, compose} from "@ngrx/store";
import {ROUTER_NAVIGATION} from "@ngrx/router-store";

const pageView = (action: any): PageView => ({
  hitType: "pageview",
  page: action.payload.event.url,
});

export const eventsMap = {};
eventsMap[ROUTER_NAVIGATION] = pageView;

export const analyticsMetaReducer = (reducer) =>
  createMetaReducer(eventsMap, GoogleAnalytics, {logger: logger})(reducer);
*/
