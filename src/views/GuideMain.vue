<template>
  <div class="guide">
    <div class="guide__logo">
      <router-link :to="'/'">
        <img src="../assets/logo.svg" />
      </router-link>
    </div>
    <p class="guide__name">Гайд по разгону ОЗУ / DDR4 на платформах Intel</p>
    <div class="guide__navbar">
      <div class="guide__menu">
        <ul>
          <li
            :class="{ active: this.$route.path === '/guide/software' }"
            @click="goSoftware"
          >
            Software
          </li>
          <li
            :class="{ active: this.$route.path === '/guide/bios-settings' }"
            @click="goBios"
          >
            BIOS Settings
          </li>
          <li
            :class="{ active: this.$route.path === '/guide/overclocking' }"
            @click="goOverclocking"
          >
            Overclocking
          </li>
          <li
            :class="{ active: this.$route.path === '/guide/rtl-iol' }"
            @click="goRtl"
          >
            RTL-IOL Control
          </li>
          <li
            :class="{ active: this.$route.path === '/guide/stability-test' }"
            @click="goTest"
          >
            Stability Test
          </li>
          <li
            :class="{ active: this.$route.path === '/guide/skew-control' }"
            @click="goSkew"
          >
            Skew Control
          </li>
          <li
            :class="{ active: this.$route.path === '/guide/tips-tricks' }"
            @click="goTips"
          >
            Tips and Tricks
          </li>
          <li
            :class="{ active: this.$route.path === '/guide/useful-links' }"
            @click="goLinks"
          >
            Useful Links
          </li>
        </ul>
      </div>
    </div>
    <div class="guide__content">
      <router-view name="guide"></router-view>
    </div>
    <div class="guide__footer"><img :src="'../preload/perehod.svg'" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      software: true,
      bios: false,
      overclocking: false,
      rtl: false,
      test: false,
      skew: false,
      tips: false,
      links: false,
    };
  },
  methods: {
    goSoftware() {
      this.$router.push("/guide/software");
    },
    goBios() {
      this.$router.push("/guide/bios-settings");
    },
    goOverclocking() {
      this.$router.push("/guide/overclocking");
    },
    goRtl() {
      this.$router.push("/guide/rtl-iol");
    },
    goTest() {
      this.$router.push("/guide/stability-test");
    },
    goSkew() {
      this.$router.push("/guide/skew-control");
    },
    goTips() {
      this.$router.push("/guide/tips-tricks");
    },
    goLinks() {
      this.$router.push("/guide/useful-links");
    },
    mainPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.guide {
  position: relative;
  height: 100vh;
  background: #000205;
  overflow: hidden;
}
.guide__logo {
  position: absolute;
  top: 4.5%;
  left: 2%;
  cursor: pointer;
}
.guide__logo img {
}
.guide__header {
  width: 100%;
}
.guide__name {
  text-align: center;
  font-weight: 600;
  font-size: 2.5vw;
  color: #ffffff;
  margin-bottom: 2.8125vw;
  margin-top: 2.2916666666666665vw;
}
.guide__navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.guide__menu {
  border: 0.052083333333333336vw solid #ffffff;
  border-radius: 100px;
  padding: 0.78125vw 0;
}
.guide__menu ul {
  display: flex;
  align-items: center;
}
.guide__menu ul li {
  list-style-type: none;
  padding: 0.78125vw 0;
}
.guide__menu ul li {
  font-weight: 400;
  font-size: 0.8333333333333334vw;
  color: #ffffff;
  padding: 0.5208333333333333vw 0.9375vw;
  border-radius: 100px;
  margin: 0 1.25vw 0 0;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.guide__menu ul li:first-child {
  margin-left: 1.25vw;
}
.guide__menu ul li:hover {
  background: #22c8ff;
  color: #fff;
}
.guide__footer {
  max-width: 1920px;
  margin: 0 auto;
}
.guide__footer img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
}
.active {
  background: #22c8ff;
  color: #fff;
}
</style>
