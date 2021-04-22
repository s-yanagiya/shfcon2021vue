<template>
  <div class="parent">
    <v-form>
      <v-text-field v-model="gameName" label="大会名" /><br>
      <h2>プレイヤー名を入力してください</h2>
       <v-container v-for="(player,index) in players" :key="index">
         <v-row>
            <v-text-field v-model="players[index]" :label="`プレイヤー${index + 1}`" />
            <v-btn color="red" dark depressed @click="removeInput(index)">
              <v-icon left>mdi-delete</v-icon>削除
            </v-btn>
         </v-row>
       </v-container>
      <br>
      <v-container>
        <v-row style="justify-content: flex-end;">
          <v-btn color='info' @click="addInput">追加する</v-btn>
        </v-row>
      </v-container>
      <br>
      <br>
      <v-container>
        <v-row style="justify-content: center;">
          <v-btn color='success' @click="onSubmit">
            送信する<v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <br>
      <div>
        
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  created(){
    
  },
  data () {
    return {
      gameName: "",
      players: [""]
    }
  },
  methods: {
    removeInput(index) {
      this.players.splice(index, 1);
    },
    addInput() {
      this.players.push('');
    },
    async onSubmit() {
      const baseUrl = 'http://localhost:8081/tournament/game';
      console.log(this.gameName);
      console.log(this.players);
      await fetch(baseUrl, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          , 'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          gameName: this.gameName,
          playerList: this.players
        })
      }).then();
    }
  }
}
</script>