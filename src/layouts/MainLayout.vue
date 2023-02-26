<!--
<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: 'MyLayout',
    caption: 'MyLayout.vue',
    icon: 'school',
    link: '/MyLayout',
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script> -->
<template>
  <q-layout view="hhh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Red_Hot_Chili_Peppers_logo.png/598px-Red_Hot_Chili_Peppers_logo.png?20150430192003" />
          </q-avatar>
        Red Hot Chili Peppers FC
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab href="https://en.wikipedia.org/wiki/Anthony_Kiedis" label="Anthony Kiedis" />
        <q-route-tab href="https://en.wikipedia.org/wiki/John_Frusciante" label="FLEA" />
        <q-route-tab href="https://en.wikipedia.org/wiki/Flea_(musician)" label="John Frusciante" />
        <q-route-tab href="https://en.wikipedia.org/wiki/Chad_Smith" label="Chard Smith" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>

      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Alabum</div>
          <q-tabs align="left">
        <q-route-tab href="https://www.youtube.com/watch?v=a9eNQZbjpJk&list=OLAK5uy_kEbANGGtoT4n87DQ3ESZyh3l9LK5uWII0" label="Californication" />
        <q-route-tab href="https://www.youtube.com/watch?v=3XxdGTi_EZU&list=OLAK5uy_lpc4xSHxMzKDN8EZxbZ8_wdXaVfZikp2w" label="The Red Hot Chili Peopers" />
        <q-route-tab href="https://www.youtube.com/watch?v=jfkJz5SBbu0&list=OLAK5uy_mWW4fRO9uBr8-9RXwfBv3zzUUAhXJrRKo" label="Blood Sugar Sex Magik" />
        <q-route-tab href="https://www.youtube.com/watch?v=JnfyjwChuNU&list=OLAK5uy_mIzb8byci429atL6GqqYKvYw-GVHPR5jo" label="By the Way" />
        <q-route-tab href="https://www.youtube.com/watch?v=Sb5aq5HcS1A&list=OLAK5uy_msLrRDnvxVk6L-DH6OWH2-RWIu3x2sgPQ" label="Stadium Arcadium" />
        <q-route-tab href="https://www.youtube.com/watch?v=PJEFWFEOYng&list=OLAK5uy_lk6MRc0hf3TYyOoLIEa2tWum8-9r7RqlA" label="Mother's Milk" />
        <q-route-tab href="https://www.youtube.com/watch?v=5w4d_mmJOGM&list=OLAK5uy_mzXO-T3jRBwKG4Du9-ldgbGBIG78eICOg" label="The Gateway" />
        <q-route-tab href="https://www.youtube.com/@RedHotChiliPeppers/playlists?view=71&sort=dd&shelf_id=0" label="Other..." />
      </q-tabs>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
// เพิ่มข้อมูล linksList
const linksList = [
  {
    title: "Registor & Login",
    caption: "Login",
    icon: "login",
    link: "/MyForm",
  },
  {
    title: "Github",
    caption: "github.com/GuyKHPH",
    icon: "code",
    link: "https://github.com/GuyKHPH",
  },



  {
    title: "Facebook",
    caption: "ChiliPeppers",
    icon: "public",
    link: "https://www.facebook.com/ChiliPeppers",
  },
  {
    title: "Web Site",
    caption: "redhotchilipeppers.com",
    icon: "public",
    link: "https://redhotchilipeppers.com",
  },
  {
    title: "Logout",
    icon: "logout",
    link: "https://awesome.quasar.dev",
  },

];
export default {
  components: {
    EssentialLink,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      // เพิ่มข้อมูล linksList
      essentialLinks: linksList,
      // เพิ่มข้อมูล linksList
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
