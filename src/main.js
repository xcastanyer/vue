import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap-vue'
import VueNativeNotification from 'vue-native-notification'

Vue.use(bootstrap);

Vue.config.productionTip = false
Vue.use(VueChatScroll);
Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
