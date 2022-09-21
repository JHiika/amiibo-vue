<template>
  <div class="home">
    <section id="intro" class="container">
        <div class="row">
          <CardsAmiibo />
          <CardsAmiibo />
          <CardsAmiibo />
        </div>
        <footer>
					<ul class="actions">
						<li><router-link to="/list" class="button large">Liste complète</router-link></li>
					</ul>
				</footer>
      </section>
  </div>
</template>

<script>
import axios from 'axios';
import CardsAmiibo from '@/components/CardsAmiibo.vue';

const API_AMIIBO_URL=process.env.VUE_APP_AMIIBO_API;

export default {
  name: 'HomeView',
  data: () => ({
    amiibos:[],
  }),
  props:{
  },
  components: {
    CardsAmiibo
  },
  methods: {
    async getAmiibo() {
      let rep = await axios.get(API_AMIIBO_URL);
      this.amiibos = rep.data.amiibo;
      console.log(this.amiibos);
    },
  },
  async created() {
    await this.getAmiibo();
  }
}
</script>
