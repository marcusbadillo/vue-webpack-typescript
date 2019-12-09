import {Api} from "@/utils/api";
import {Logger} from "lines-logger";
import {RootState} from "@/types/model";
import {Store} from "vuex";
import Vue from "vue";
import VueRouter from "vue-router";

declare module "vue/types/vue" {

  interface Vue {
    $logger: Logger;
    $api: Api;
  }
}

declare global {
  interface Window {
    GIT_VERSION: string|undefined;
    vue: Vue;
    InputEvent: () => void;
    store: Store<RootState>;
    router: VueRouter;
    api: Api;
  }
}
