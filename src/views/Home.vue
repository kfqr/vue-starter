<template>
  <div>

    <v-row :style="bannerStyle" align="center" justify="center" class="fill-height">
      <v-col align="center" justify="center">
        <v-img src="@/asset/img/logo.png" lazy-src="@/asset/img/logo.png" contain
               max-height="150"
               max-width="250"></v-img>
        <h2>{{ logoText }}</h2>
        <p align="center">
          <v-switch
              style="display: inline-flex"
              v-model="$vuetify.theme.dark"
              inset
              :label="$vuetify.theme.dark?'Dark':'Light'"
          ></v-switch>
        </p>
        <div class="navigation">
          <v-tabs hide-slider centered class="nav-tabs">
            <v-tab v-for="item in menuItems" :to="item.path" :key="item.title">
              {{ item.title }}
            </v-tab>
          </v-tabs>
        </div>
      </v-col>
    </v-row>
    <v-container style="padding-top: 0">

      <v-row no-gutters>
        <v-col cols="12">
          <v-parallax
              :style="paraStyle"
              src="../asset/img/6.jpg"
          >
          </v-parallax>

        </v-col>
        <v-col cols="12">

          <v-sheet
              elevation="1"
              color="white"
              height="100%"
              width="100%"
              class="text-center pa-16"
          >

            <h1 class="display-1 font-weight-thin mb-4">
              Бонвилльский треугольник
            </h1>
            <v-divider></v-divider>
            <h4 class="subheading">
              это не простая лаборатория, а цифровая, с современным фрезерным Cad/Cam
              центром (Computer Aided Design — компьютерное проектирование, Computer Aided Manufacturing —
              компьютерное
              изготовление). Кроме пластиковых, металлокерамических и цельнокерамических коронок и протезов, во
              фрезерном центре изготавливаются позиционные хирургические шаблоны для малоинвазивной сверхточной
              имплантации, а
              также ортодонтические эллайнеры для быстрого и незаметного исправления неправильного прикуса.
              Современные
              фрезерные Сad/Сam системы позволяют изготавливать высокоточные изделия с краевым прилеганием 20 мкм и
              менее, а
              также обрабатывать высокопрочные и инновационные материалы (титан, хром-кобальт, диоксид циркония,
              Peek,
              Pmma, Trinia, Enamic и др).
            </h4>

          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-row no-gutters class="ml-n4 mr-n6 ">
      <v-col cols="12">
        <v-parallax
            src="../asset/img/7.jpg"
        >
        </v-parallax>

      </v-col>
      <v-col cols="12" class="mt-0">

        <v-sheet
            elevation="1"
            color="white"
            height="100%"
            width="100%"
            class="text-center pa-16"
        >

          <h1 class="display-1 font-weight-thin mb-4">
            Бонвилльский треугольник
          </h1>
          <v-divider></v-divider>
          <h4 class="subheading pa-16">
            это не простая лаборатория, а цифровая, с современным фрезерным Cad/Cam
            центром (Computer Aided Design — компьютерное проектирование, Computer Aided Manufacturing —
            компьютерное
            изготовление). Кроме пластиковых, металлокерамических и цельнокерамических коронок и протезов, во
            фрезерном центре изготавливаются позиционные хирургические шаблоны для малоинвазивной сверхточной
            имплантации, а
            также ортодонтические эллайнеры для быстрого и незаметного исправления неправильного прикуса.
            Современные
            фрезерные Сad/Сam системы позволяют изготавливать высокоточные изделия с краевым прилеганием 20 мкм и
            менее, а
            также обрабатывать высокопрочные и инновационные материалы (титан, хром-кобальт, диоксид циркония,
            Peek,
            Pmma, Trinia, Enamic и др).
          </h4>

        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      menuItems: [
        {title: 'О лаборатории', path: '/', icon: this.$vuetify.icons.values.home},
        {title: 'Заказ', path: '/pdf', icon: this.$vuetify.icons.values.pdf},
      ]
    };
  },
  computed: {
    logoText() {
      return process.env.VUE_APP_APP_NAME.toUpperCase()
    },
    bannerStyle() {
      return {
        'max-width': '100vw',
        'height': 'calc( 100vh - ' + (this.$vuetify.theme.options.sassOptions.gutters / 2) + 'px )',
        'padding': 0,
        'margin': 0
      }
    },
    paraStyle() {
      return {
        minHeight: 'calc (100vh / ' + 2 + 'px)',
        padding: this.$vuetify.theme.options.sassOptions.gutters * 5 + 'px ' + this.$vuetify.theme.options.sassOptions.gutters * 7 + 'px'
      }
    }
  }
}
</script>
<style scoped>

.navigation >>> .theme--light.v-tabs > .v-tabs-bar {
  background: linear-gradient(90deg, transparent, 30%, #ffffff7a, 70%, transparent);
}

.navigation >>> .theme--dark.v-tabs > .v-tabs-bar {
  background: linear-gradient(90deg, transparent, 30%, #00000066, 70%, transparent);
}

</style>