import route from 'ziggy-js'
import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "@/Admin/Shared/Layout/Layout.vue"
import WebLayout from "@/Web/Shared/Layout/Layout.vue"





createInertiaApp({
  resolve: async name => {
    let page;
    if (name.startsWith('@.')) {
      // load this direcotry for admin
      name = name.replace('@.', '');
      page = (await import(`./Admin/Pages/${name}`)).default
      page.layout ??= Layout // if page does not have custom layout apply default
    } else {
      // load this direcotry for websiste
      name = name.replace('@web.', '');
      page = (await import(`./Web/Pages/${name}`)).default
      page.layout ??= WebLayout // if page does not have custom layout apply default
    }
    return page
  },
  setup({ el, App, props, plugin }) {

    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Head', Head)
      .component('Link', Link)
      .mixin({ methods: { route } });
    const URL = props.initialPage.url;
    if (URL) {// here make auto loading of components for admin part

    }
    app.mount(el);
  }
})


InertiaProgress.init()
