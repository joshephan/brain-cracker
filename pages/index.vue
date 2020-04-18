<template>
  <main>
    <div class="box side"></div>
    <div class="box body">
      <div class="top-content">
        <h1>BRAIN CRACKER</h1>
        <h2></h2>
        <img src="" alt="main image">
      </div>
      <div class="row">
        <a class="content github" href="http://github.com/joshephan">
          <img src="" alt="to github" />
        </a>
        <a class="content brunch" href="https://brunch.co.kr/@skykamja24">
          <img src="" alt="to brunch" />
        </a>
        <div class="content quote">
          <blockquote :cite="quote[qIndex].cite">
            {{quote[qIndex].text}}
          </blockquote>
        </div>
      </div>
    </div>
    <div class="box side"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      quote: [],
      qIndex: 0
    }
  },
  created() {
    this.qIndex = Math.floor(Math.random() * (this.quote.length - 1));
  }
};
</script>

<style lang="scss" scoped>
$bp1: 1080px; // small desktop, half browser desktop window
$bp2: 768px; // tablet

main {
  display: flex;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 2px solid #111111;
  &.side {
    max-width: 100px;
  }
  &.body {
    max-width: 100%;
  }
}

.row {
  display: flex;
  width: 100%;
  height: 100%;
}
@media (max-width: $bp1) {
  
}
</style>
