<template>
  <nav aria-label="Page navigation">
    <ul class="pagination ms-2 mt-2">

      <template v-for="(link, key) in links">
        <li class="page-item" :class="{ 'active': link.active }">

          <Link v-if="link.url === null" :key="key"
               class="page-link" v-html="link.label"/>
          <Link v-else :key="`link-${key}`" class="page-link" :href="link.url" v-html="link.label"/>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'

export default {
  components: {
    Link,
  },
  props: {
    links: Array,
  },
}
</script>
