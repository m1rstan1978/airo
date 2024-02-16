<template>
  <div class="software">
    <div class="software__up">
      <p class="software__header">
        Разгон оперативной памяти очень важен, поскольку вы можете увеличить<br />
        производительность вашей системы в программах и играх за счет увеличения
        тактовой<br />
        частоты и тонкой настройки таймингов вашей ОЗУ
      </p>
      <div class="software__line"><img src="../assets/guide/line.svg" /></div>
      <p class="software__des">
        Ниже ссылки на все нужные программы для разгона оперативной памяти
      </p>
    </div>
    <div class="software__content">
      <div ref="swiper" class="software__slider swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="software__card">
              <div class="software__up">
                <div class="software__img">
                  <img :src="'../preload/1.svg'" />
                </div>
                <p class="software__title">Asrock Timing Configurator</p>
                <p class="software__text">
                  Утилита для просмотра таймингов из-под Windows
                </p>
              </div>
              <div class="software__under">
                <a
                  href="https://drive.google.com/file/d/1jY2QgkOI5n0JCUoI8NhNiDuS4SuUkByp/edit"
                  target="_blank"
                  >Скачать</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="software__card">
              <div class="software__up">
                <div class="software__img">
                  <img :src="'../preload/2.svg'" />
                </div>
                <p class="software__title">TM5</p>
                <p class="software__text">
                  Тест для нахождения ошибок оперативной памяти
                </p>
              </div>
              <div class="software__under">
                <a
                  href="https://mega.nz/file/vLhxBahB#WwJIpN3mQOaq_XsJUboSIcaMg3RlVBWvFnVspgJpcLY"
                  target="_blank"
                  >Скачать</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="software__card">
              <div class="software__up">
                <div class="software__img">
                  <img :src="'../preload/3.svg'" />
                </div>
                <p class="software__title">OCCT</p>
                <p class="software__text">
                  Тест для нахождения ошибок контроллера памяти
                </p>
              </div>
              <div class="software__under">
                <a href="https://www.ocbase.com/" target="_blank">Скачать</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="software__card">
              <div class="software__up">
                <div class="software__img">
                  <img :src="'../preload/4.svg'" />
                </div>
                <p class="software__title">AIDA64</p>
                <p class="software__text">
                  Измерение производительности памяти
                </p>
              </div>
              <div class="software__under">
                <a href="https://www.aida64.com/downloads" target="_blank"
                  >Скачать</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="software__card">
              <div class="software__up">
                <div class="software__img">
                  <img :src="'../preload/5.svg'" />
                </div>
                <p class="software__title">GSAT</p>
                <p class="software__text">
                  Тест для поиска<br />
                  сопротивлений RTT
                </p>
              </div>
              <div class="software__under">
                <a
                  href="https://forums.overclockers.ru/viewtopic.php?p=17452918#p17452918"
                  target="_blank"
                  >Скачать</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="software__card">
              <div class="software__up">
                <div class="software__img">
                  <img :src="'../preload/6.svg'" />
                </div>
                <p class="software__title">Rufus</p>
                <p class="software__text">
                  Утилита для записи GSAT на флешку (MBR + FAT32)
                </p>
              </div>
              <div class="software__under">
                <a href="https://rufus.ie/ru/" target="_blank">Скачать</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="software__card">
              <div class="software__up">
                <div class="software__img">
                  <img :src="'../preload/7.svg'" />
                </div>
                <p class="software__title">Thaiphoon Burner</p>
                <p class="software__text">
                  Программа для просмотра чипов оперативной памяти
                </p>
              </div>
              <div class="software__under">
                <a
                  href="https://drive.google.com/file/d/1B56Qmj97lzhcsd8wBD3HN_4tp28Ls86F/view?usp=share_link"
                  target="_blank"
                  >Скачать</a
                >
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="software__card">
              <div class="software__up">
                <div class="software__img">
                  <img :src="'../preload/8.svg'" />
                </div>
                <p class="software__title">HWINFO</p>
                <p class="software__text">
                  Просмотр датчиков температуры / напряжений
                </p>
              </div>
              <div class="software__under">
                <a href="https://www.hwinfo.com/" target="_blank">Скачать</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-prev">
      <img class="reviews__arrows" src="../assets/software/prev.svg" />
    </div>
    <div class="swiper-next">
      <img class="reviews__arrows" src="../assets/software/next.svg" />
    </div>
    <div class="software__motherboard">
      <img :src="'../preload/back.webp'" />
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from "swiper";
import "swiper/css";
export default {
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 50,
      allowTouchMove: false,
      speed: 450,
      loop: true,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      breakpoints: {
        1600: {
          spaceBetween: 30,
        },
        900: {
          spaceBetween: 70,
        },
        500: {
          spaceBetween: 40,
        },
        200: {
          spaceBetween: 10,
        },
      },
    });
  },
};
</script>

<style scoped>
.software {
  position: relative;
  margin-top: 2.1875vw;
}
.software__up {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.software__header {
  font-weight: 500;
  font-size: 1.25vw;
  line-height: 1.5104166666666667vw;
  text-align: center;
  color: #ffffff;
  margin-bottom: 1.0416666666666665vw;
}
.software__line {
  margin-bottom: 1.0416666666666665vw;
}
.software__des {
  text-align: center;
  font-weight: 300;
  font-size: 0.7291666666666666vw;
  color: #9c9c9c;
  margin-bottom: 1.6145833333333335vw;
}
.software__slider {
  position: relative;
  padding: 0 0.26041666666666663vw;
  width: 57.291666666666664vw;
}
.software__slider .swiper-slide {
  height: 13.854166666666668vw !important;
  box-sizing: border-box;
  border-radius: 0.5208333333333333vw;
  border: 0.052083333333333336vw solid #fff;
  background: none;
}
.software__card {
  padding: 1.0416666666666665vw 0.5208333333333333vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}
.software__img {
  width: 2.5vw;
  height: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.software__title {
  text-align: center;
  font-weight: 500;
  font-size: 0.8333333333333334vw;
  color: #ffffff;
  margin-top: 1.09375vw;
  margin-bottom: 0.7291666666666666vw;
}
.software__text {
  font-weight: 300;
  font-size: 0.7291666666666666vw;
  line-height: 0.8854166666666666vw;
  text-align: center;
  color: #c1c1c1;
}
.software__under a {
  font-weight: 300;
  font-size: 0.7291666666666666vw;
  color: #c1c1c1;
}
.reviews__arrows {
  width: 1.8vw;
}
.software .swiper-prev {
  position: absolute;
  bottom: 26%;
  left: 17%;
  transition: all 0.3s ease;
  cursor: pointer;
}
.software .swiper-prev:hover {
  opacity: 0.7;
  transform: scale(0.98);
}
.software .swiper-next {
  position: absolute;
  bottom: 26%;
  right: 17%;
  transition: all 0.3s ease;
  cursor: pointer;
}

.software .swiper-next:hover {
  opacity: 0.7;
  transform: scale(0.98);
}
.software__motherboard {
  position: absolute;
  top: 10%;
  right: 0;
}
@media (max-width: 1620px) {
  .software__motherboard img {
    width: 15.937499999999998vw;
  }
}
</style>
