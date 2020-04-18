<template>
  <main>
    <div class="box"></div>
    <div class="box">
      BRAIN CRACKER
    </div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      quote: [],
      qIndex: 0
    };
  },
  created() {
    this.qIndex = Math.floor(Math.random() * (this.quote.length - 1));
  }
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 10px solid $c-black;
  background: $c-bg-main;
  & > .box {
    border-bottom: 2px solid $c-black;
    border-right: 2px solid $c-black;
  }
}

.box {
  padding: 10px 20px;
  &:nth-child(1) {
    grid-area: 1 / 1 / 3 / 3;
  }
  &:nth-child(2) {
    grid-area: 1 / 3 / 2 / 6;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 120px;
  }
  &:nth-child(6) {
    grid-area: 3/ 1 / 5 / 2;
    background-color: $c-black;
  }
}
</style>
