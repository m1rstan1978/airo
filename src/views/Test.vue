<template>
  <div class="test">
    <div class="test__content">
      <p class="test__title" v-html="title"></p>
      <p class="test__title_mob" v-html="titleMob"></p>
      <div class="test__list">
        <div class="test__about">
          <p class="test__name">Counter Strike 2</p>
          <div class="test__fps">
            <div class="test__circle">
              <div class="test__img">
                <img src="../assets/test/circle1.svg" />
              </div>
              <p class="test__aver">Average FPS</p>
            </div>
            <div class="test__circle">
              <div class="test__img">
                <img src="../assets/test/circle2.svg" />
              </div>
              <p class="test__aver">1% percentile FPS</p>
            </div>
            <div class="test__circle">
              <div class="test__img">
                <img src="../assets/test/circle3.svg" />
              </div>
              <p class="test__aver">0.1% percentile FPS</p>
            </div>
          </div>
          <div class="test__menu">
            <div class="test__games">
              <div class="test__game">
                <p class="test__names">
                  Premium настройка ( Custom ISO + RAM / GPU OC )
                </p>
                <p class="test__des">
                  NVIDIA Geforce RTX 3060 + CPU INTEL I5 12600K
                </p>
              </div>
              <div class="test__game">
                <p class="test__names">RAM / GPU OC</p>
                <p class="test__des">
                  NVIDIA Geforce RTX 3060 + CPU INTEL I5 12600K
                </p>
              </div>
              <div class="test__game">
                <p class="test__names">RAM OC</p>
                <p class="test__des">
                  NVIDIA Geforce RTX 3060 + CPU INTEL I5 12600K
                </p>
              </div>
              <div class="test__game">
                <p class="test__names">
                  Windows 22H2 Stock XMP 4000 CL19-19-19-39
                </p>
                <p class="test__des">
                  NVIDIA Geforce RTX 3060 + CPU INTEL I5 12600K
                </p>
              </div>
            </div>
            <div class="test__images">
              <div class="test__card">
                <img class="test__img1" src="../assets/test/1.svg" />
              </div>
              <div class="test__card">
                <img class="test__img2" src="../assets/test/2.svg" />
              </div>
              <div class="test__card">
                <img class="test__img3" src="../assets/test/3.svg" />
              </div>
              <div class="test__cardsec">
                <img class="test__img4" src="../assets/test/4.svg" />
              </div>
            </div>
          </div>
          <div class="test__menu_mob">
            <div class="test__games">
              <div class="test__game">
                <p class="test__names">
                  Premium настройка ( Custom ISO + RAM / GPU OC )
                </p>
                <p class="test__des">
                  NVIDIA Geforce RTX 3060 + CPU INTEL I5 12600K
                </p>
              </div>
              <div class="test__card">
                <img class="test__img1" src="../assets/test/1.svg" />
              </div>
              <div class="test__game">
                <p class="test__names">RAM / GPU OC</p>
                <p class="test__des">
                  NVIDIA Geforce RTX 3060 + CPU INTEL I5 12600K
                </p>
              </div>
              <div class="test__card">
                <img class="test__img2" src="../assets/test/2.svg" />
              </div>
              <div class="test__game">
                <p class="test__names">RAM OC</p>
                <p class="test__des">
                  NVIDIA Geforce RTX 3060 + CPU INTEL I5 12600K
                </p>
              </div>
              <div class="test__card">
                <img class="test__img3" src="../assets/test/3.svg" />
              </div>
              <div class="test__game">
                <p class="test__names">
                  Windows 21H2 Stock XMP 4000 CL19-19-19-39
                </p>
                <p class="test__des">
                  NVIDIA Geforce RTX 3060 + CPU INTEL I5 12600K
                </p>
              </div>
              <div class="test__cardsec">
                <img class="test__img4" src="../assets/test/4.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:
        "Прирост производительности от покупки Premium настройки в сравнении с <br> стоковой Windows 10 22H2 и XMP профилем 4000 CL19-19-19 ",
      titleMob:
        "Прирост производительности от покупки Premium настройки в сравнении с стоковой Windows 10 21H2 и XMP профилем 4000 CL19-19-19 ",
    };
  },
  methods: {
    checkLang() {
      if (localStorage.getItem("en") === null) {
        this.title =
          "Прирост производительности от покупки Premium настройки в сравнении с <br> стоковой Windows 10 22H2 и XMP профилем 4000 CL19-19-19 ";
      } else {
        this.title =
          "Performance gains from buying Custom Tweaking vs. stock Windows 10 21H2<br> and XMP profile 4000 CL19-19-19 ";
      }
    },
  },
  mounted() {
    this.checkLang();
  },
};
</script>

<style scoped>
.test {
  width: 100%;

  background: url("../assets/test/back.webp") no-repeat;
  background-size: cover;
}
.test__content {
  margin-left: 15.312500000000002vw;
  padding-bottom: 2.604166666666667vw;
}
.test__title {
  padding-top: 3.3854166666666665vw;
  font-weight: 500;
  font-size: 1.4583333333333333vw;
  line-height: 1.7708333333333333vw;
  color: #ffffff;
  margin-bottom: 2.604166666666667vw;
}
.test__name {
  font-weight: 400;
  font-size: 0.9375vw;
  color: #ffffff;
  margin-bottom: 1.6666666666666667vw;
}
.test__fps {
  display: flex;
  align-items: center;
  padding-bottom: 2.7083333333333335vw;
}
.test__circle {
  display: flex;
  align-items: center;
  margin-right: 1.7187500000000002vw;
}
.test__circle img {
  display: flex;
  align-items: center;
  width: 1.09375vw;
}
.test__aver {
  margin-left: 0.4166666666666667vw;
  font-weight: 300;
  font-size: 0.7291666666666666vw;
  color: #ffffff;
}
.test__menu {
  display: flex;
}
.test__game {
  padding-bottom: 2.7083333333333335vw;
}
.test__names {
  font-weight: 600;
  font-size: 0.9375vw;
  color: #ffffff;
  margin-bottom: 0.5729166666666666vw;
}
.test__des {
  font-weight: 600;
  font-size: 0.9375vw;
  color: #ffffff;
}
.test__images {
  margin-left: 9.427083333333334vw;
}

.test__img1 {
  width: 29.531249999999996vw;
  margin-top: 0.26041666666666663vw;
}
.test__img2 {
  margin-top: 1.0416666666666665vw;
  width: 26.041666666666668vw;
}
.test__img3 {
  margin-top: 1.0416666666666665vw;
  width: 22.395833333333336vw;
}
.test__img4 {
  margin-top: 1.0416666666666665vw;
  width: 20.416666666666668vw;
}
.test__title_mob {
  display: none;
  padding-top: 5.3854166666666665vw;
  font-size: 4.4583333333333333vw;
  line-height: 6.1708333333333333vw;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 5.604166666666667vw;
  margin-left: 5px;
  margin-right: 5px;
}
.test__menu_mob {
  display: none;
}
@media (max-width: 500px) {
  .test {
    background: none;
  }
  .test__content {
    margin-left: 0;
    padding-bottom: 2.604166666666667vw;
  }
  .test__title {
    display: none;
  }
  .test__title_mob {
    display: block;
    margin-top: 20px;
  }
  .test__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .test__fps {
    flex-direction: column;
    padding-bottom: 2.7083333333333335vw;
  }
  .test__name {
    text-align: center;
  }
  .test__name {
    font-weight: 400;
    font-size: 4vw;
    color: #ffffff;
    margin-bottom: 3.6666666666666667vw;
  }
  .test__circle {
    display: flex;
    align-items: center;
    margin-right: 1.7187500000000002vw;
    margin-bottom: 12px;
  }
  .test__circle img {
    width: 3.09375vw;
  }
  .test__aver {
    margin-left: 0.4166666666666667vw;
    font-size: 3.2291666666666666vw;
  }
  .test__names {
    font-size: 3.5375vw;
    margin-bottom: 0.5729166666666666vw;
    margin-left: 20px;
    margin-top: 20px;
  }

  .test__des {
    font-size: 3.5vw;
    font-weight: 400;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .test__menu {
    display: none;
  }
  .test__menu_mob {
    display: block;
  }
  .test__game p {
    text-align: center;
  }
  .test__games {
    display: flex;
    flex-direction: column;
  }
  .test__games img {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .test__img1 {
    width: 80.531249999999996vw;
    margin-top: 0.26041666666666663vw;
    margin-left: 20px;
  }

  .test__img2 {
    margin-top: 1.0416666666666665vw;
    width: 75.041666666666668vw;
    margin-left: 20px;
  }

  .test__img3 {
    margin-top: 1.0416666666666665vw;
    width: 70.395833333333336vw;
    margin-left: 20px;
  }

  .test__img4 {
    margin-top: 1.0416666666666665vw;
    width: 60.416666666666668vw;
    margin-bottom: 10vw;
    margin-left: 20px;
  }
}
</style>
