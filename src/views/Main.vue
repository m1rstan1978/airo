<template>
  <div class="version">
    <div class="page">
      <div class="main" id="main">
        <header>
          <div class="main__content">
            <p class="main__logo">
              <router-link :to="'/'"
                ><img src="@/assets/logo.svg"
              /></router-link>
            </p>
            <div class="main__info"></div>
            <!-- <div class="main__languages">
              <p class="main__language" v-if="lang === null">RU</p>
              <p class="main__language" v-else>EN</p>
            </div> -->
          </div>
        </header>
        <div class="main__description">
          <div
            class="main__img"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img class="main__icon" src="../assets/main/mainlogo.svg" />
          </div>
          <p
            class="main__title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            FASTER THAN YOUR OS
          </p>
          <div
            class="main__blocked"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <a href="#services"><button class="main__btn">Services</button></a>
          </div>
        </div>
        <div class="main__bottom">
          <img src="../assets/main/perehod.svg" />
        </div>
      </div>
      <info></info>
      <!-- <windows></windows> -->
      <services></services>
      <test></test>
      <find></find>
      <!-- <faq></faq> -->
      <clients />
      <Footer />
    </div>
    <div class="mobile">
      <div class="mobile__sections" v-if="payment === false">
        <header>
          <div class="mobile__content">
            <p class="mobile__title">
              <router-link :to="'/'"
                ><img src="@/assets/logo.svg" />
              </router-link>
            </p>
            <div class="mobile__img">
              <img src="../assets/main/mainlogo.svg" />
            </div>
          </div>
        </header>
        <mobile-services @GoStepFirst="payment = true"></mobile-services>
        <mobile-test></mobile-test>
        <MobileWhyUs></MobileWhyUs>
        <mobile-discord></mobile-discord>
        <footer>
          <div class="footer__content">
            <div class="footer__img">
              <a href="https://vk.com/phantomboost"
                ><img src="../assets/SystemMobile/vk.png"
              /></a>
            </div>
            <div class="footer__img">
              <a href="https://discord.gg/bQkY2sRVne"
                ><img src="../assets/SystemMobile/ds.png"
              /></a>
            </div>
            <div class="footer__img">
              <a href="https://www.youtube.com/@PhantomBoost/featured"
                ><img src="../assets/SystemMobile/youtube.png"
              /></a>
            </div>
          </div>
        </footer>
      </div>
      <div class="mobile__steps" v-else>
        <mobile-first-step
          v-if="stepFirst === true"
          @goNext="
            stepFirst = false;
            stepSec = true;
          "
          @close="payment = false"
        ></mobile-first-step>
        <mobile-sec-step v-else @close="payment = false"></mobile-sec-step>
      </div>
    </div>
  </div>
</template>

<script>
import Info from "./Info.vue";
import Services from "./Services.vue";
import Windows from "./Windows.vue";
import Test from "./Test.vue";
import Find from "./Find.vue";
import Reviews from "./Reviews.vue";
import Faq from "./Faq.vue";
import Footer from "./Footer.vue";
import MobileServices from "./MobileServices.vue";
import MobileTest from "./MobileTest.vue";
import MobileWhyUs from "./MobileWhyUs.vue";
import MobileDiscord from "./MobileDiscord.vue";
import MobileFirstStep from "./MobileFirstStep.vue";
import MobileSecStep from "./MobileSecStep.vue";
import Clients from "./Clients.vue";

export default {
  data() {
    return {
      lang: false,
      payment: false,
      stepFirst: true,
      stepSec: false,
    };
  },
  methods: {},
  beforeMount() {
    localStorage.clear();
  },
  mounted() {
    this.lang = null;
  },
  components: {
    Info,
    Windows,
    Services,
    Test,
    Find,
    Reviews,
    Faq,
    Footer,
    MobileServices,
    MobileTest,
    MobileWhyUs,
    MobileDiscord,
    MobileFirstStep,
    MobileSecStep,
    Clients,
  },
};
</script>

<style scoped>
.page {
  background: #000205;
  overflow: hidden;
}

.main {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
}
header {
  width: 100%;
}
.main__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.1vw 1.98vw;
}
.main__logo a {
  font-weight: 700;
  font-size: 1.25vw;
  color: #ffffff;
  text-decoration: none;
}
.main__languages {
  border: 1px solid #ffffff;
  background: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.main__languages a {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}
.main__languages:hover {
  background: #fff;
}
.main__language {
  font-weight: 600;
  font-size: 0.8333333333333334vw;
  padding: 0.5729166666666666vw;
  transition: all 0.3s ease;
  color: #ffffff;
}
.main__languages:hover a {
  color: #070200;
}
.main__info {
  display: flex;
  align-items: center;
}
.main__phantom {
  font-weight: 500;
  font-size: 0.8333333333333334vw;
  color: #e7eaf3;
  margin-right: 50px;
  cursor: pointer;
}
.main__about {
  font-weight: 500;
  font-size: 0.8333333333333334vw;
  color: #e7eaf3;
  cursor: pointer;
}
.main__description {
  width: 42.395833333333336vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main__icon {
  margin-bottom: 1.083333333333333vw;
  width: 2.9vw;
}

.main__title {
  margin-bottom: 1.5625vw;
  font-weight: 700;
  font-size: 2.5vw;
  color: #ffffff;
}
.main__description a {
  width: 100%;
}
.main__blocked {
  width: 90%;
}
.main__btn {
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 100%;
  padding: 0.46875vw 0;
  font-weight: 500;
  font-size: 1.0416666666666665vw;
  color: #ffffff;
  background: none;
  transition: all 0.3s ease;
  cursor: pointer;
}
.main__btn:hover {
  background: #fff;
  color: #070200;
}
.main__bottom img {
  width: 100vw;
}
.main__arrow {
  position: absolute;
  left: 48.5vw;
  bottom: 20%;
  transition: all 0.3s ease;
  width: 1.0416666666666665vw;
  padding: 10px;
}
.main__arrow img {
  cursor: pointer;
}
.main__arrow img:hover {
  transform: scale(0.95);
  opacity: 0.7;
}
.mobile {
  display: none;
  background: #000205;
  min-height: 100vh;
}
header {
  width: 100%;
}
.mobile__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4vw 4.8vw;
}
.mobile__content img {
  width: 10vw;
  margin-right: 9vw;
}
.mobile__title {
  font-weight: 600;
  font-size: 3.5999999999999996vw;
  color: #ffffff;
}
.mobile__title a {
  text-decoration: none;
  color: #ffffff;
}

.mobile__langa {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 2.4vw;
  border: 0.2vw solid #ffffff;
  background: none;
  padding: 1.2vw;
  transition: all 0.3s ease;
  cursor: pointer;
}
.mobile__langa:hover {
  color: #070200;
  background: #fff;
}
.footer__content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6vw 0;
  border-top: 0.2vw solid #ff0000;
}
.footer__content img {
  margin: 0 2vw;
}
@media (max-width: 500px) {
  .page {
    display: none;
  }
  .mobile {
    display: block;
  }
  .main__content {
    padding: 7.1vw 6.98vw;
  }
  .main__logo a {
    font-size: 4.8vw;
  }
  .main__description {
    margin-bottom: 55vw;
  }
  .main__language {
    font-weight: 600;
    font-size: 3.533333333333334vw;
    padding: 2.5729166666666666vw;
    transition: all 0.3s ease;
    color: #ffffff;
  }
  .main__icon {
    margin-bottom: 9.083333333333333vw;
    margin-left: 5vw;
    width: 15.6458333333333335vw;
  }
  .main__title {
    margin-bottom: 5.5625vw;
    font-size: 5.9vw;
    width: 550px;
    text-align: center;
  }
  .main__btn {
    padding: 2vw 0;
    font-size: 4.0416666666666665vw;
  }
  .main__arrow {
    left: 44.5vw;
    bottom: 20%;
    width: 0.0116666666666665vw;
  }
  .main__bottom img {
    width: 200vw;
  }
}
</style>
