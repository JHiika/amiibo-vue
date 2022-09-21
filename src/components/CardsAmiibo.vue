<template>
        <div class="col-4 col-12-medium">
            <section class="middle">
                <img
                    :src="amiibo.image" style="height:350px"/>
                <header>
                    <h2>{{amiibo.character}}</h2>
                </header>
                <p>{{amiibo.gameSeries}}</p>
            </section>
        </div>
</template>

<script>
    import axios from 'axios';
    const API_AMIIBO_URL=process.env.VUE_APP_AMIIBO_API;

    export default {
      name: 'CardsAmiibo',
      data:()=>({
        amiibos:{}
      }),
      props:{
        amiibo:{
            type: Object,
        }
      },
      methods:{
        async created() {
          // Je récupère l'id de l'amiibo
            const {amiiboTail} = this.$route.params;
            console.log(amiiboTail);
          // Je construis l'URL de l'api pour l'amiibo avec son tail
            const apiDetailsUri=API_AMIIBO_URL+'?tail='+amiiboTail;
          // Je récupère les datas
            const thisAmiibo = await axios.get(apiDetailsUri);
          // Je récupère les datas de la recherche
            console.log(thisAmiibo.data);
            // this.amiibo=thisAmiibo.data.amiibo[0];    
        }
      }
    }
    </script>