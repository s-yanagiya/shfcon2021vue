<template>
    <!-- <v-layout row wrap>
      <v-flex xs12>
        <h1>マイアドレス帳</h1>
        <p>マイアドレス帳をご利用の方は、Googleアカウントでログインしてください。</p>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color='info' @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-layout> -->
    <!-- <div class="parent">
        <div style="top: 0px; left: 450px;" class="block round4 border-l" :class="{ 'border-color-red' : blocks[0].isRed}"></div>
        <div style="top: 100px; left: 250px;" class="block round3 border-tl" :class="{ 'border-color-red' : blocks[1].isRed}"></div>
        <button style="top: 90px; left: 440px;" class="btn-kifu" @click="search">勝敗更新</button>
        <div style="top: 100px; left: 450px;" class="block round3 border-tr" :class="{ 'border-color-red' : blocks[2].isRed}"></div>
        <div style="top: 200px; left: 150px;" class="block round2 border-tl" :class="{ 'border-color-red' : blocks[3].isRed}"></div>
        <button style="top: 190px; left: 235px;" class="btn-kifu">勝敗更新</button>
        <div style="top: 200px; left: 250px;" class="block round2 border-tr" :class="{ 'border-color-red' : blocks[4].isRed}"></div>
        <div style="top: 200px; left: 550px;" class="block round2 border-tl" :class="{ 'border-color-red' : blocks[5].isRed}"></div>
        <button style="top: 190px; left: 635px;" class="btn-kifu">勝敗更新</button>
        <div style="top: 200px; left: 650px;" class="block round2 border-tr" :class="{ 'border-color-red' : blocks[6].isRed}"></div>
        <div style="top: 300px; left: 100px;" class="block round1 border-tl" :class="{ 'border-color-red' : blocks[7].isRed}"></div>
        <button style="top: 290px; left: 135px;" class="btn-kifu">勝敗更新</button>
        <div style="top: 300px; left: 150px;" class="block round1 border-tr" :class="{ 'border-color-red' : blocks[8].isRed}"></div>
        <div style="top: 300px; left: 300px;" class="block round1 border-tl" :class="{ 'border-color-red' : blocks[11].isRed}"></div>
        <button style="top: 290px; left: 335px;" class="btn-kifu">勝敗更新</button>
        <div style="top: 300px; left: 350px;" class="block round1 border-tr" :class="{ 'border-color-red' : blocks[12].isRed}"></div>
        <div style="top: 300px; left: 500px;" class="block round1 border-tl" :class="{ 'border-color-red' : blocks[15].isRed}"></div>
        <button style="top: 290px; left: 535px;" class="btn-kifu">勝敗更新</button>
        <div style="top: 300px; left: 550px;" class="block round1 border-tr" :class="{ 'border-color-red' : blocks[16].isRed}"></div>
        <div style="top: 300px; left: 700px;" class="block round1 border-tl" :class="{ 'border-color-red' : blocks[19].isRed}"></div>
        <button style="top: 290px; left: 735px;" class="btn-kifu">勝敗更新</button>
        <div style="top: 300px; left: 750px;" class="block round1 border-tr" :class="{ 'border-color-red' : blocks[20].isRed}"></div>
        <div style="top: 400px; left: 75px;" class="block round1 border-none playerName">{{ blocks[9].playerName }}</div>
        <div style="top: 400px; left: 175px;" class="block round1 border-none playerName">{{ blocks[10].playerName }}</div>
        <div style="top: 400px; left: 275px;" class="block round1 border-none playerName">{{ blocks[13].playerName }}</div>
        <div style="top: 400px; left: 375px;" class="block round1 border-none playerName">{{ blocks[14].playerName }}</div>
        <div style="top: 400px; left: 425px;" class="block round1 border-none playerName"></div>
        <div style="top: 400px; left: 475px;" class="block round1 border-none playerName">{{ blocks[17].playerName }}</div>
        <div style="top: 400px; left: 575px;" class="block round1 border-none playerName">{{ blocks[18].playerName }}</div>
        <div style="top: 400px; left: 675px;" class="block round1 border-none playerName">{{ blocks[21].playerName }}</div>
        <div style="top: 400px; left: 775px;" class="block round1 border-none playerName">{{ blocks[22].playerName }}</div>
    </div> -->


    <!-- <div class="parent">
      <div class="container">
        <span class="non-block4"></span>
        <span class="round depth-3"></span>
        <span class="non-block4"></span>
      </div>
      <div class="container">
        <span class="non-block2"></span>
        <span class="round depth-2"></span>
        <span class="non-block4"></span>
        <span class="round depth-2"></span>
        <span class="non-block2"></span>
      </div>
      <div class="container">
        <span class="non-block1"></span>
        <span class="round depth-1 winner left"></span>
        <span class="non-block2"></span>
        <span class="round depth-1 winner right"></span>
        <span class="non-block2"></span>
        <span class="round depth-1"></span>
        <span class="non-block2"></span>
        <span class="round depth-1"></span>
        <span class="non-block1"></span>
      </div>
      <div class="container">
        <span class="non-round depth-1 winner"></span>
        <span class="non-round depth-1"></span>
        <span class="non-round depth-1"></span>
        <span class="non-round depth-1"></span>
        <span class="non-round depth-1"></span>
        <span class="non-round depth-1"></span>
        <span class="non-round depth-1"></span>
        <span class="non-round depth-1"></span>
      </div>
      <div class="container">
        <span class="playerName">あああ</span>
        <span class="playerName">いいい</span>
        <span class="playerName">ううう</span>
        <span class="playerName">えええ</span>
        <span class="playerName">おおお</span>
        <span class="playerName">かか</span>
        <span class="playerName">く</span>
        <span class="playerName">せせせせせ</span>
      </div>
    </div> -->
    <div class="parent">
      <div v-for="(aaa, key) in containers" :key="key" class="container">
        <span v-for="(block, key) in aaa" :key="key" v-bind:style="block.blockStyle" v-bind:class="block.blockClass"></span>
      </div>
    </div>
</template>

<script>

export default {
    created() {
      this.search()
    },
    data () {
        return {
            gameInfo: {},
            containers: [
              [ {blockStyle:{width:{}}, blockClass:{round:{}, winner:{}, left:{}, right:{}} } ]
            ]
        }
    },
    methods: {
        async search(){
          const block1 = {
            blockStyle: {width: "200px"},
            blockClass: {}
          };
          const block2 = {
            blockStyle: {width: "400px"},
            blockClass: {round: true}
          };
          const blocks1 = [block1, block2, block1];

          const block3 = {
            blockStyle: {width: "100px"},
            blockClass: {}
          };
          const block4 = {
            blockStyle: {width: "200px"},
            blockClass: {round: true}
          };
          const block5 = {
            blockStyle: {width: "200px"},
            blockClass: {}
          };
          const blocks2 = [block3, block4, block5, block4, block3];

          const containers = [blocks1, blocks2];
          this.containers = containers;
            // const baseUrl = 'http://localhost:8081/tournament/game?'
            // const params = {
            //   gameId: 1
            // }
            // const queryParams = new URLSearchParams(params)

            //const gameInfo = await fetch(baseUrl + queryParams).then(x => x.json())
            // gameInfo.roundInfoList.forEach(roundInfo =>{
            //   if(roundInfo.depth == 4){
            //     const block = {}
            //     block.isRed = false
            //     if(roundInfo.roundStatusCd > 0){
            //       block.isRed = true
            //     }
            //     this.blocks.push(block)
            //     return
            //   }
            //   if(roundInfo.depth > 1){
            //     const blockLeft = {}
            //     const blockRight = {}
            //     blockLeft.isRed = false
            //     blockRight.isRed = false
            //     if(roundInfo.roundStatusCd == 1){
            //       blockLeft.isRed = true
            //     }else if(roundInfo.roundStatusCd == 2){
            //       blockRight.isRed = true
            //     }
            //     this.blocks.push(blockLeft)
            //     this.blocks.push(blockRight)
            //   }
            //   if(roundInfo.depth == 1){
            //     const blockLeft1 = {}
            //     const blockRight1 = {}
            //     blockLeft1.isRed = false
            //     blockRight1.isRed = false
            //     if(roundInfo.roundStatusCd == 1){
            //       blockLeft1.isRed = true
            //     }else if(roundInfo.roundStatusCd == 2){
            //       blockRight1.isRed = true
            //     }
            //     this.blocks.push(blockLeft1)
            //     this.blocks.push(blockRight1)

            //     const blockLeft2 = {}
            //     const blockRight2 = {}
            //     blockLeft2.playerName = roundInfo.lftPlayerName
            //     blockRight2.playerName = roundInfo.rgtPlayerName
            //     this.blocks.push(blockLeft2)
            //     this.blocks.push(blockRight2)
            //   }
            // })
            // console.log(this.blocks)
            // console.log(gameInfo)
            // console.log(gameInfo.roundInfoList[0].roundId)
            // this.gameInfo = gameInfo;
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
.container span{
    position: relative;
    display:inline-block;
    height:50px;
}
.non-block1{
    width:50px;
}
.non-block2{
    width:100px;
}
.non-block3{
    width:150px;
}
.non-block4{
    width:200px;
}
.round{
    border-bottom: solid 2px black;
}
.depth-3 {
  width:400px;
}
.depth-2 {
  width:200px;
}
.depth-1 {
  width:100px;
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
    display: flex;
    position: relative;
    width:200px;
    height:100px;
    transform: translateX(-37%);
    display:inline-block;
}
</style>