<template>
  <div class="find">
    <p class="find__header">{{ guideTitle }}</p>
    <div class="find__content">
      <div class="find__ddr4">
        <p class="find__title">{{ guideDDR4 }}</p>
        <img class="find__icon" src="../assets/find/1.webp" />
        <router-link :to="'guide/software'">
          <button class="find__btn">{{ btn }}</button></router-link
        >
      </div>
      <div class="find__img"><img src="../assets/find/line.svg" /></div>
      <div class="find__ddr5">
        <p class="find__title">{{ guideDDR5 }}</p>
        <img class="find__icon" src="../assets/find/2.webp" />
        <button class="find__btn">SOON</button>
      </div>
    </div>
    <div class="find__back"><img src="../assets/find/perehod.svg" /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guideTitle: "Гайды",
      guideDDR4: "Гайд по разгону ОЗУ / DDR4 на платформах Intel",
      guideDDR5: "Гайд по разгону ОЗУ / DDR5 на платформах Intel",
      btn: "Открыть руководство",
    };
  },
  methods: {
    checkLang() {
      if (localStorage.getItem("en") === null) {
        this.guideTitle = "Гайды";
        this.guideDDR4 = "Гайд по разгону ОЗУ / DDR4 на платформах Intel";
        this.guideDDR5 = "Гайд по разгону ОЗУ / DDR5 на платформах Intel";
        this.btn = "Открыть руководство";
      } else {
        this.guideTitle = "Guides";
        this.guideDDR4 = "Overclocking guide for RAM / DDR4 on Intel platforms";
        this.guideDDR5 = "Overclocking guide for RAM / DDR5 on Intel platforms";
        this.btn = "Open the manual";
      }
    },
  },
  mounted() {
    this.checkLang();
  },
};
</script>

<style scoped>
.find {
  overflow: hidden;
  width: 100%;
  /* background: url("@/assets/find/back.png"); */
}
.find__header {
  padding-top: 5.208333333333334vw;
  padding-bottom: 3.854166666666667vw;
  text-align: center;
  font-weight: 600;
  font-size: 2.5vw;
  color: #ffffff;
}
.find__content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.find__ddr4 {
  margin-right: 5.3125vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.find__title {
  font-weight: 500;
  font-size: 1.4583333333333333vw;
  color: #ffffff;
}
.find__img img {
  height: 26.666666666666668vw;
}
.find__btn {
  border: 1px solid #ffffff;
  background: none;
  outline: none;
  padding: 0.9375vw 1.8229166666666667vw;
  font-weight: 500;
  font-size: 0.8333333333333334vw;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
}

.find__btn:hover {
  background: #fff;
  color: #070200;
}
.find__ddr5 {
  margin-left: 5.3125vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.find__back {
  margin-top: 5.9375vw;
}
.find__back img {
  width: 100vw;
}
@media (max-width: 1300px) {
  .find__icon {
    height: 18.229166666666664vw;
  }
}
</style>
