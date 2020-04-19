<template>
  <main>
    <div class="box first" @click="click.pointer = !click.pointer">
      <div :class="[click.pointer ? 'rotate' : '']" id="pointer"></div>
    </div>
    <div class="box head" @click="click.head = !click.head">
      <h1 v-if="click.head">BRAIN CRACKER</h1>
      <h2
        v-else
      >How about selling purple cows? Wouldn't people line up to buy whatever it tastes like?</h2>
    </div>
    <a class="box" target="_blank" href="https://naverd2clone.netlify.com/">
      <h3>NAVER D2 CLONE</h3>
      <p>DESKTOP STYLE ONLY</p>
    </a>
    <a class="nickname box" target="_blank" href="https://nicknamegenerator.netlify.com/">
      <h3>NICKNAME GENERATOR</h3>
      <picture>
        <img src="/sun.png" alt="sun" />
      </picture>
    </a>
    <a class="writer box" target="_blank" href="https://dontstopwriter.netlify.app/">
      <h3>DON'T STOP WRITER</h3>
      <p>SIXTY SECONDS REST</p>
    </a>
    <div class="vertical box"></div>
    <a class="airdesk box" target="_blank" href="http://www.airdesk.co.kr/">
      <h2>AIRDESK</h2>
      <p>NEW TAB BROWSER EXTENSION INSPIRED ON MAC OS</p>
    </a>
    <a class="box" target="_blank" href="https://brunch.co.kr/@skykamja24">
      <h3>BRUNCH</h3>
      <p>OFFICIAL STORIES</p>
      <picture>
        <img src="/brunch.jpg" alt="brunch" />
      </picture>
    </a>
    <div class="box" @click="click.magazine = !click.magazine">
      <h3>IMAGINE MAGAZINE</h3>
      <p v-if="!click.magazine">SEE BEAUTIFUL FUTURE</p>
      <p v-else>please wait... It's under developing</p>
    </div>
    <a class="box" href="https://brunch.co.kr/brunchbook/hanslife1" target="_blank">
      <h3>LIFE STORY</h3>
      <p>Honesty is stronger than any lie.</p>
    </a>
    <a class="sun box" href="https://basakhansun.netlify.app/" target="_blank">
      <h3>BASAKHAN SUN</h3>
      <p>all adjectives of Korea</p>
    </a>
    <a class="youtube box" href="https://1f60d-youtube-analysis.netlify.app/" target="_blank">
      <h3>YOUTUBE CHANNEL ANALYSIS</h3>
      <p>SEARCH YOUTUBER</p>
    </a>
    <a class="contact box" href="mailto:hansanghun@airdesk.co.kr">
      <h3>CONTACT</h3>
      <h4>EMAIL: hansanghun@airdesk.co.kr</h4>
    </a>
  </main>
</template>

<script>
export default {
  data() {
    return {
      click: {
        pointer: false,
        head: false,
        magazine: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
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
  box-sizing: border-box;
  &.first {
    grid-area: 1 / 1 / 3 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: $c-bg-main;
    }
  }
  &.head {
    grid-area: 1 / 3 / 2 / 6;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  &.contact {
    grid-area: 5 / 2 / 6 / 6;
  }
  &.vertical {
    grid-area: 3/ 1 / 6 / 2;
    background-color: $c-black;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: $c-white;
    font-weight: 400;
    font-size: 32px;
  }
  &.airdesk {
    grid-area: 3 / 2 / 4 / 5;
    background-color: #00ceff;
  }
  &.writer {
    background-color: #15ad5c;
  }
  &.sun {
    background-color: #fcff4a;
  }
}
#pointer {
  width: 200px;
  height: 40px;
  position: relative;
  background: $c-black;
  animation: rotate 10s infinite;
  &.rotate {
    transform: rotate(180deg);
  }
}
#pointer:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid $c-white;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
#pointer:before {
  content: "";
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid $c-black;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
@media (max-width: $bp-min-desktop) {
  main {
    grid-template-columns: 30px 1fr 1fr 1fr;
  }
  .box {
    &.head {
      grid-area: 1 / 3 / 2 / 5;
    }
    &.contact {
      grid-area: auto;
    }
    &.airdesk {
      grid-area: 3/ 3/4/ 5;
    }
    &.vertical {
      padding: 0;
      grid-area: 3/ 1 / 7 / 2;
    }
  }
}
@media (max-width: 880px) {
  main {
    grid-template-columns: 30px 2fr 3fr;
  }
  .box {
    &.head {
      grid-area: 1 / 3 / 2 / 4;
    }
    &.contact {
      grid-column: 2 / 4;
    }
    &.airdesk {
      grid-area: 3/ 3/4/ 4;
    }
    &.vertical {
      padding: 0;
      grid-area: 3/ 1 / 8 / 2;
    }
  }
}

@media (max-width: 705px) {
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
  h4 {
    font-size: 16px;
  }
  main {
    grid-template-columns: 1fr 1fr;
  }
  .box {
    &.first {
      display: none;
    }
    &.head {
      grid-area: auto;
    }
    &.contact {
      grid-column: 1 / 3;
    }
    &.airdesk {
      grid-area: auto;
    }
    &.vertical {
      display: none;
      grid-area: auto;
    }
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
  h4 {
    font-size: 14px;
  }
  main {
    grid-template-columns: 1fr 1fr;
  }
  .box {
    &.first {
      display: none;
    }
    &.head,
    &.writer,
    &.contact,
    &.airdesk,
    &.youtube {
      grid-column: 1 / 3;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
