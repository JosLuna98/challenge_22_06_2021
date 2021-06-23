<template>
  <v-card class="mx-auto my-12" max-width="370">
    <v-card-title>Vuelo en {{ aeroline }}</v-card-title>
    <v-divider class="mx-4" />
    <v-card-text>
      <a>
        Viaje de {{ duration }} horas con {{ scales }}
        {{ scales == 1 ? "escala" : "escalas" }} a solo ${{ price }}</a
      >
    </v-card-text>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text> Reservar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "FlightCard",

  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },

  computed: {
    aeroline() {
      return this.$store.state.aerolines[this.getRandomInt(0, 9)];
    },
    duration() {
      return this.getRandomInt(4, 16);
    },
    scales() {
      return this.getRandomInt(1, 5);
    },
    price() {
      return this.getRandomInt(300, 1801);
    },
  },
};
</script>

<style>
</style>