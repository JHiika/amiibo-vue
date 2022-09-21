<template>
  <div class="home">
    <section id="intro" class="container">
        <div class="row">
          <CardsAmiibo/>
          <CardsAmiibo/>
          <CardsAmiibo/>
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
import CardsAmiibo from '@/components/CardsAmiibo.vue';

export default {
  name: 'HomeView',
  components: {
    CardsAmiibo
  }
}
</script>
