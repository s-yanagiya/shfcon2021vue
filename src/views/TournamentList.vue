<template>
    <div class="parent">
        <h1>トーナメント一覧</h1>
        <v-container text-xs-center justify-center>
            <v-layout row wrap>
                <v-flex xs12 mt-3 justify-center>
                    <v-data-table :headers='headers' :items='tournaments'>
                        <template v-slot:item.action="{ item }">
                        <router-link :to="{ name: 'tournament', params: { game_id: item.gameId }}">
                            <v-icon small class="mr-2">mdi-pencil</v-icon>
                        </router-link>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    created() {
      this.search()
    },
    data () {
        return {
            headers: [
                { text: '試合名', value: 'gameName' },
                { text: '参加者数', value: 'participantsNum' },
                { text: '操作', value: 'action' }
            ],
            tournaments: []
        }
    },
    methods: {
        async search(){
            const baseUrl = 'http://localhost:8081/tournament/game'
            const gameInfoList = await fetch(baseUrl).then(x => x.json());
            gameInfoList.forEach(gameInfo =>{
                this.tournaments.push({
                    gameId: gameInfo.gameId
                    , gameName: gameInfo.gameName
                    , participantsNum: gameInfo.participantsNum
                })
            })
        }
    }
}
</script>