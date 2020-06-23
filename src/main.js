import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "./utils/message.plugin";
import Loader from "@/components/app/Loader";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

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
