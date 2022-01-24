<template>
  <scrollactive class="flex flex-col md:flex-row md:items-center md:space-x-4" active-class="activeScrollbar" :modifyUrl="false" :offset="45" :duration="800" bezier-easing-value=".5,0,.35,1">
    <a class="scrollactive-item" :exact="item.exact" :class="{'hidden': item.hidden}" :href="item.link" v-for="item in items" :key="item.id">{{ item.title }}</a>
  </scrollactive>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 1,
          title: '#Top',
          link: '#top',
          hidden: false,
          exact: '', // Укажите для первой ссылки
        },
        {
          id: 2,
          title: '#Anchor',
          link: '#anchor',
          hidden: false,
        },
      ]
    }
  }
}
</script>

<style>
  .activeScrollbar {
    @apply text-indigo-600;
  }
</style>