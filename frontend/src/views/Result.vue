<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mini-banner" cols="12">
        <v-row>
          <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">
              <div>Servicio Ecuatoriano Internacional</div>
            </h1>

            <p class="subheading font-weight-regular">
              Vuelos de {{ origin }} a {{ destination }}
            </p>
            <br />
            <p class="subheading font-weight-regular">
              {{ departure_date }} - {{ return_date }}
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="mb-5 col-sm-auto">
        <FlightCard v-for="i in 5" v-bind:key="i" />
      </v-col>
      <v-col class="mb-5 col-sm-auto">
        <FlightCard v-for="i in 5" v-bind:key="i" />
      </v-col>
      <v-col class="mb-5 col-sm-auto">
        <FlightCard v-for="i in 5" v-bind:key="i" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FlightCard from "../components/FlightCard.vue";

export default {
  name: "Result",

  components: {
    FlightCard,
  },

  computed: {
    origin() {
      return this.$route.query.origin;
    },
    destination() {
      return this.$route.query.destination;
    },
    departure_date() {
      return this.$route.query.departure_date;
    },
    return_date() {
      return this.$route.query.return_date;
    },
  },
};
</script>

<style>
.mini-banner {
  margin-top: 25px;
}
</style>