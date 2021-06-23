<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-img :src="logo" class="my-3" contain height="130" />
    </v-col>

    <v-col class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        <div>Aterrizar desde EC</div>
      </h1>

      <p class="subheading font-weight-regular">
        Busca los tickets aéreos más baratos
      </p>
    </v-col>
  </v-row>
</template>

<script>
import logo from "../assets/logo.svg";

export default {
  name: "AppBanner",

  data: () => ({
    logo,
  }),
};
</script>
