<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Jayanth's Landing Page </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar> -->
    </q-header>

    <q-drawer
      style="background-color: azure"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <div style="background-color: darkslategray">
        <img
          style="
            width: 20%;
            margin-left: 5%;
            margin-top: 5%;
            border-radius: 50%;
          "
          src="../assets/profile-photo.png"
        />
        <p style="margin-left: 5%; color: antiquewhite">
          <b>Jayanth Kumar S</b>
        </p>
        <p style="margin-left: 5%; color: antiquewhite">@jayanth2002</p>
        <br />
      </div>

      <q-list>
        <q-item-label header> Explore more </q-item-label>

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
    title: "Studies",
    caption: "Bachelor of Engineering",
    icon: "school",
    link: "https://sjbit.edu.in/",
  },
  {
    title: "My Github",
    caption: "github.com/uniquejayanth",
    icon: "code",
    link: "https://github.com/uniquejayanth",
  },
  {
    title: "My LinkedIn",
    caption: "Professional side",
    icon: "search",
    link: "https://in.linkedin.com/in/jayanth-kumar-s-b85583192",
  },
  {
    title: "Email",
    caption: "jayanthkumar.s@gmail.com",
    icon: "mail",
  },

  // {
  //   title: "Discord Chat Channel",
  //   caption: "chat.quasar.dev",
  //   icon: "chat",
  //   link: "https://chat.quasar.dev",
  // },
  // {
  //   title: "Forum",
  //   caption: "forum.quasar.dev",
  //   icon: "record_voice_over",
  //   link: "https://forum.quasar.dev",
  // },
  // {
  //   title: "Twitter",
  //   caption: "@quasarframework",
  //   icon: "rss_feed",
  //   link: "https://twitter.quasar.dev",
  // },
  // {
  //   title: "Facebook",
  //   caption: "@QuasarFramework",
  //   icon: "public",
  //   link: "https://facebook.quasar.dev",
  // },
  // {
  //   title: "Quasar Awesome",
  //   caption: "Community Quasar projects",
  //   icon: "favorite",
  //   link: "https://awesome.quasar.dev",
  // },
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
</script>
