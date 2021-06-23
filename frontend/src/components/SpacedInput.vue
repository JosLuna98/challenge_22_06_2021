<template>
  <div class="custom-input">
    <h2 class="headline font-weight-bold mb-5">{{ label }}</h2>
    <input
      class="form-control"
      v-bind:placeholder="placeholder ?? ''"
      aria-describedby="basic-addon1"
      v-bind:type="type"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "type", "placeholder", "value"],
};
</script>

<style>
.custom-input {
  padding-bottom: 30px;
}
</style>
