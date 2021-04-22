<template>
  <div class="parent">
    <h1>{{gameName}}</h1>
    <v-btn color='info' @click="doUpdate()">更新</v-btn>
    <v-btn color='purple' dark @click="openModal()">大会結果入力</v-btn>
    <MyModal @close="closeModal()" v-if="modal">
      <!-- default スロットコンテンツ -->
      <p>Vue.js Modal Window!</p>
      <div><input v-model="message"></div>
      <!-- /default -->
      <!-- footer スロットコンテンツ -->
      <template slot="footer">
        <button @click="doSend()">送信</button>
      </template>
      <!-- /footer -->
    </MyModal>
    <div v-for="(container, key) in containers" :key="key" class="container">
      <span v-for="(block, key) in container" :key="key" v-bind:style="block.blockStyle" v-bind:class="block.blockClass">{{block.playerName}}</span>
    </div>
    <v-container>
      <v-row style="justify-content: flex-end;">
        <v-btn @click="$router.push({ name: 'tournamentList' })" class="ma-2" color="orange darken-2" dark>
          <v-icon dark left>mdi-arrow-left</v-icon>戻る
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>

function initialState() {
  return {
    modal: false,
    gameName: "",
    gameInfo: {},
    containers: [[]]
  }
}
import MyModal from './MyModal.vue'
export default {
    components: { MyModal },
    created() {
      if(!this.$route.params.game_id){
        return;
      }
      this.search();
    },
    data () {
        return initialState();
    },
    methods: {
      openModal() {
        this.modal = true
      },
      closeModal() {
        this.modal = false
      },
      doSend() {
        if (this.message.length > 0) {
          alert(this.message)
          this.message = ''
          this.closeModal()
        } else {
          alert('メッセージを入力してください')
        }
      },
      async search(){
        const baseUrl = 'http://localhost:8081/tournament/game?'
        const params = {
            gameId: this.$route.params.game_id
        }
        const queryParams = new URLSearchParams(params);

        const gameInfo = await fetch(baseUrl + queryParams, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
        }).then(x => x.json());
        // const gameId = gameInfo.gameId;
        this.gameName = gameInfo.gameName;
        // const participantsNum = gameInfo.participantsNum;
        const finalRound = gameInfo.finalRound;
        gameInfo.roundInfoList.forEach(roundInfo =>{
          //const round = roundInfo.round;
          // const roundName = roundInfo.roundName;
          const round = roundInfo.round;
          if(round > finalRound){
            return;
          }
          console.log(roundInfo);
          this.createBlocks(roundInfo);
        })
      },
      createBlocks(roundInfo){
        const round = roundInfo.round;
        const minimumWidth = 50;
        this.createRoundBlocks(roundInfo);
        if(round === 1){
          const blocks2 = [];
          const playerBlocks = [];
          for(var j = 0; j < roundInfo.battleInfoList.length; j++){
            const battle = roundInfo.battleInfoList[j];
            if(round == 1){
              if(battle.leftPlayer.playerName == null || battle.rightPlayer.playerName == null){
                const sideBlockLeft = {
                  blockStyle: {width: minimumWidth + "px"},
                  blockClass: {}
                };
                const sideBlockRight = {
                  blockStyle: {width: minimumWidth + "px"},
                  blockClass: {}
                };
                const nonRoundBlock = {
                  blockStyle: {width: minimumWidth*2 + "px"},
                  blockClass: {
                    "non-round": true
                    , winner: (battle.battleStatusCd > 0)
                  }
                };
                blocks2.push(sideBlockLeft);
                blocks2.push(nonRoundBlock);
                blocks2.push(sideBlockRight);

                let player = battle.leftPlayer;
                if(player === null){
                  player = battle.rightPlayer;
                }
                const playerBlock = {
                  blockStyle: {width: minimumWidth*2 + "px"},
                  blockClass: {
                    playerName: true
                  },
                  playerName:player.playerName
                };
                playerBlocks.push(sideBlockLeft);
                playerBlocks.push(playerBlock);
                playerBlocks.push(sideBlockRight);
              }else{
                const nonRoundBlockLeft = {
                  blockStyle: {width: minimumWidth*2 + "px"},
                  blockClass: {
                    "non-round": true
                    , winner: (battle.battleStatusCd === 1)
                  }
                };
                const nonRoundBlockRight = {
                  blockStyle: {width: minimumWidth*2 + "px"},
                  blockClass: {
                    "non-round": true
                    , winner: (battle.battleStatusCd === 2)
                  }
                };
                blocks2.push(nonRoundBlockLeft);
                blocks2.push(nonRoundBlockRight);
                const leftPlayerBlock = {
                  blockStyle: {width: minimumWidth*2 + "px"},
                  blockClass: {
                    playerName: true
                  },
                  playerName: battle.leftPlayer.playerName
                };
                const rightPlayerBlock = {
                  blockStyle: {width: minimumWidth*2 + "px"},
                  blockClass: {
                    playerName: true
                  },
                  playerName:battle.rightPlayer.playerName
                };
                playerBlocks.push(leftPlayerBlock);
                playerBlocks.push(rightPlayerBlock);
              }
            }
          }
          this.containers.push(blocks2);
          this.containers.push(playerBlocks);
        }
      },
      createRoundBlocks(roundInfo){
        const round = roundInfo.round;
        const minimumWidth = 50;
        // 両脇の幅
        const sideNonBlockWidth = minimumWidth * (2 ** (round - 1));
        // ラウンドブロックの幅
        const roundBlockWidth = minimumWidth * (2 ** round);
        // ラウンド間のブロックの幅
        const middleNonBlockWidth = minimumWidth * (2 ** round);
        
        const blocks = [];
        // 左脇のブロックを追加
        const sideBlockLeft = {
            blockStyle: {width: sideNonBlockWidth + "px"},
            blockClass: {}
        };
        blocks.push(sideBlockLeft);
        // 
        for(var i = 0; i < roundInfo.battleInfoList.length; i++){
            if(i > 0){
                const middleNonBlock = {
                    blockStyle: {width: middleNonBlockWidth + "px"},
                    blockClass: {}
                };
                blocks.push(middleNonBlock);
            }
            const battle = roundInfo.battleInfoList[i];
            let roundFlg = true;
            if(round === 1){
              if(battle.leftPlayer.playerName == null || battle.rightPlayer.playerName == null){
                roundFlg = false;
              }
            }
            const roundBlock = {
                blockStyle: {width: roundBlockWidth + "px"},
                blockClass: {
                  round: roundFlg
                  , "non-round": !roundFlg
                  , winner: (battle.battleStatusCd > 0)
                  , left: roundFlg && (battle.battleStatusCd === 1)
                  , right: roundFlg && (battle.battleStatusCd === 2)
                }
            };
            blocks.push(roundBlock);
        }
        // 右脇のブロックを追加
        const sideBlockRight = {
            blockStyle: {width: sideNonBlockWidth + "px"},
            blockClass: {}
        };
        blocks.push(sideBlockRight);
        this.containers.push(blocks);
      },
      doUpdate(){
        Object.assign(this.$data, initialState());
        this.search();
      }
    }
  }
</script>

<style>
.container{
    display: flex;
    justify-content: space-between;
    width:800px;
    padding: 0;
}
.player-container{
    display: flex;
    justify-content: space-between;
    width:800px;
}
.container>span:not(.playerName){
    position: relative;
    display:inline-block;
    height:100px;
}
.round{
    border-bottom: solid 2px black;
}
.round:before,.non-round:before{
   content:"";
   display:inline-block;
   width:3px;
   height:100%;
   position:absolute;
   left:50%;
}
.round:before,.non-round:before{
    background-color:black;
 }
.winner:before{
    background-color:blue;
}
.winner.left::after,.winner.right::after{
    content: "";
    display: block;
    line-height: 0;
    overflow: hidden;
    position: absolute;
    bottom: -2px;
    width: 50%;
    border-bottom: 2px solid red;
}
.winner.left::after {
    left: 0%;
}
.winner.right::after {
    left: 50%;
}
.playerName{
    writing-mode: vertical-rl;
    height:100px;
    display:inline-block;
    vertical-align: top;
    transform: translateX(-37%);
}
</style>