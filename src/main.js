import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from "vuejs-paginate";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";
import tooltipDirective from "@/directives/tooltip.directive";
import messagePlugin from "./utils/message.plugin";
import titlePlugin from "./utils/title.plugin";
import Loader from "@/components/app/Loader";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter("date", dateFilter);
Vue.filter("localize", localizeFilter);
Vue.filter("currency", currencyFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);
Vue.component("Paginate", Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyADKRE4-G1-jOriYNZkUeD_2P6B3RKF6EY",
  authDomain: "vue-crm-20.firebaseapp.com",
  databaseURL: "https://vue-crm-20.firebaseio.com",
  projectId: "vue-crm-20",
  storageBucket: "vue-crm-20.appspot.com",
  messagingSenderId: "476290750365",
  appId: "1:476290750365:web:2713ed9e40b43fff454174",
  measurementId: "G-8B9QLT9JPQ",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
