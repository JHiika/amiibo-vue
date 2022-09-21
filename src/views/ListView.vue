<template>
    <div>
        <article class="box post">

            <header>
                <h2>Ma Collection</h2>
                <p>(ici le nombre d'amiibo)</p>
            </header>
            <p>
            <table>
                <tr>
                    <th>Character</th>
                    <th>Game Series</th>
                    <th>Action</th>
                </tr>
                <tr v-for="amiibo in amiibos" :key="amiibo.tail">
                    <td>{{amiibo.character}}</td>
                    <td>{{amiibo.gameSeries}}</td>
                    <td @click="goToAmiiboDetails(amiibo.tail)">Details</td>
                </tr>
            </table>
            </p>

        </article>
    </div>
</template>

<script>
import axios from 'axios';

const API_AMIIBO_URL = process.env.VUE_APP_AMIIBO_API;

export default {
    name: 'AmiiboList',
    data: () => ({
        amiibos: '',
    }),
    props: {
    },
    components: {
    },
    methods: {
        async getAmiibo() {
            let rep = await axios.get(API_AMIIBO_URL);
            this.amiibos = rep.data.amiibo;
            console.log(this.amiibos);
        },
        goToAmiiboDetails(amiiboTail) {
            this.$router.push({ name: 'amiiboDetails', params: { amiiboTail: amiiboTail } });
        }
    },
    async created() {
        await this.getAmiibo();
    }
}
</script>
    