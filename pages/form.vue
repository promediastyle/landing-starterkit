<template>
  <main class="container px-4 py-20">
    <client-only>
      <div class="flex justify-center items-center space-x-4">


        <div>
          <nuxt-link
            class="nav-link text-indigo-500 font-bold"
            :class="{ active: this.$route.path === '/form/?utm_source=website_com&utm_medium=news&utm_term=name_conference&utm_content=article&utm_campaign=moscow' }"
            exact
            aria-current="page"
            to="/form/?utm_source=website_com&utm_medium=news&utm_term=name_conference&utm_content=article&utm_campaign=moscow"
            >UTM Link</nuxt-link
          >
        </div>
        <div>
          <nuxt-link
            class="nav-link"
            :class="{ active: this.$route.path === '/' }"
            exact
            aria-current="page"
            to="/form/"
            >Form</nuxt-link
          >
        </div>
        <div v-if="isAuth">
          <nuxt-link
            class="nav-link"
            :class="{ active: this.$route.path === '/data' }"
            exact
            aria-current="page"
            to="/data"
            >Data</nuxt-link
          >
        </div>
        <div v-if="!isAuth">
          <nuxt-link
            class="nav-link"
            :class="{ active: this.$route.path === '/login' }"
            exact
            aria-current="page"
            to="/login"
            >Login</nuxt-link
          >
        </div>
        <div v-if="isAuth">
          <a href="#" class="nav-link" @click.prevent="logout">LogOut</a>
        </div>
      </div>
      
      <CommonForm/>

    </client-only>
  </main>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default {
  data: () => ({
    isAuth: false
  }),
  mounted() {
    this.checkAuth();
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log("signout");
        this.$router.push("/login");
      });
    },
    checkAuth() {
      const auth = getAuth();
      onAuthStateChanged(auth, user => {
        console.log("onAuthStateChanged", user);
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      });
    }
  }
};
</script>