<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <AppBanner />
      </v-col>

      <v-col class="mb-5" cols="12">
        <SearchBox />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppBanner from "../components/AppBanner.vue";
import SearchBox from "../components/SearchBox.vue";

export default {
  name: "Home",

  components: {
    AppBanner,
    SearchBox,
  },
};
</script>