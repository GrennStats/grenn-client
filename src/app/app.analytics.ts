import {createMetaReducer} from "redux-beacon";
import {GoogleAnalytics, PageView} from "redux-beacon/targets/google-analytics";
import {logger} from "redux-beacon/extensions/logger";
import {Action, compose, combineReducers} from "@ngrx/store";
import {ROUTER_NAVIGATION} from "@ngrx/router-store";

const pageView = (action: any): PageView => ({
  hitType: "pageview",
  page: action.payload.event.url,
});

export const eventsMap = {};
eventsMap[ROUTER_NAVIGATION] = pageView;

export const analyticsMetaReducer = compose(
  combineReducers,
  createMetaReducer(eventsMap, GoogleAnalytics, {logger: logger})
);
