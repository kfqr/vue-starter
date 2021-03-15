<template>
  <v-card color="primary">
    <v-card-title>
      MAKE ORDER
    </v-card-title>
    <v-card-text>
      <pdf-order v-model="pdfData"></pdf-order>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="$refs.html2Pdf.generatePdf()">get pdf</v-btn>
    </v-card-actions>
    <v-card-text>
      <v-sheet rounded elevation="0">
        <p>{{ pdfData.subjects }}</p>
        <p>{{ pdfData.recipient }}</p>

        <v-divider/>
        <vue-html2pdf :show-layout="false"
                      :float-layout="true"
                      :enable-download="true"
                      :preview-modal="true"
                      :paginate-elements-by-height="1400"
                      :filename="`order-${pdfData.recipient}`"
                      :pdf-quality="2"
                      :manual-pagination="true"
                      pdf-format="a4"
                      pdf-orientation="landscape"
                      pdf-content-width="800px"

                      @progress="onProgress($event)"
                      @hasStartedGeneration="hasStartedGeneration()"
                      @hasGenerated="hasGenerated($event)"
                      ref="html2Pdf"
        >
          <section slot="pdf-content">
            <p>{{ pdfData.subjects }}</p>
            <p>{{ pdfData.recipient }}</p>
          </section>
        </vue-html2pdf>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script>
import PdfOrder from "@/components/PdfOrder";
import VueHtml2pdf from 'vue-html2pdf'

export default {
  name: 'Pdf',
  components: {PdfOrder, VueHtml2pdf},
  data() {
    return {
      pdfData: {}
    }
  }
}
</script>
