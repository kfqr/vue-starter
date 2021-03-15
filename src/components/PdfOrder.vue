<template>
  <div class="pdf-order">
    <v-autocomplete
        v-model="orderSubjects"
        :items="subjectItems"
        dense
        chips
        small-chips
        label="Что делаем?"
        multiple
        solo
    ></v-autocomplete>
    <v-text-field label="Для кого делаем?" v-model="orderRecipient" solo></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'PdfOrder',
  model: {
    prop: 'pdfData',
    event: 'change'
  },
  props: {
    pdfData: {
      type: Object,
    }
  },
  computed: {
    orderSubjects: {
      get() {
        return this.pdfData.subject;
      },
      set(val) {
        this.$emit('change', Object.assign({}, this.pdfData, {subjects: val}));
      },
    },
    orderRecipient: {
      get() {
        return this.pdfData.recipient;
      },
      set(val) {
        this.$emit('change', Object.assign({}, this.pdfData, {recipient: val}));
      },
    },
  },
  data() {
    return {
      subjectItems: ['Положи', 'Зубы', 'На', 'Полку'],
    }
  }
}
</script>

<style scoped lang="scss">

</style>
