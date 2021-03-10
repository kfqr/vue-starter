<template>
  <v-card>
    <v-card-title>
      This is an HOME page
    </v-card-title>
    <v-card-text>
      icons example
    </v-card-text>
    <v-card-actions>
      <v-icon>{{ $vuetify.icons.values.pig }}</v-icon>
      <v-icon v-text="'$pig'" color="primary" large></v-icon>
      <v-icon v-html="'$pig'" color="red" x-large></v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {};
  }
}
</script>