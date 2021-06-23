<template>
  <v-card class="custom-card mx-auto my-2" max-width="500" min-height="500">
    <form>
      <SpacedInput
        label="Ciudad de origen"
        type="text"
        placeholder="Origen"
        v-bind:value="origin"
        v-on:input="origin = $event.target.value"
      />
      <SpacedInput
        label="Ciudad de destino"
        type="text"
        placeholder="Destino"
        v-bind:value="destination"
        v-on:input="destination = $event.target.value"
      />
      <SpacedInput
        label="Fecha de salida"
        type="date"
        v-bind:value="departure_date"
        v-on:input="departure_date = $event.target.value"
      />
      <SpacedInput
        label="Fecha de retorno"
        type="date"
        v-bind:value="return_date"
        v-on:input="return_date = $event.target.value"
      />
      <br />
      <v-btn class="ma-2" color="info" @click="search"> Buscar </v-btn>
    </form>
  </v-card>
</template>

<script>
import SpacedInput from "./SpacedInput.vue";

export default {
  name: "SearchBox",

  components: {
    SpacedInput,
  },

  data: () => ({
    origin: "",
    destination: "",
    departure_date: "",
    return_date: "",
  }),

  methods: {
    search() {
      if (
        this.origin.length != 0 &&
        this.destination.length != 0 &&
        this.departure_date.length != 0 &&
        this.return_date.length != 0
      ) {
        this.$router.push({
          path: "/result",
          query: {
            origin: this.origin,
            destination: this.destination,
            departure_date: this.departure_date,
            return_date: this.return_date,
          },
        });
      } else {
        alert("Complete todos los campos para continuar");
      }
    },
  },
};
</script>

<style>
.custom-card {
  padding: 50px 0 50px 0;
}
</style>