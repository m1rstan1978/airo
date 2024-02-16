<template>
  <div class="memory">
    <div class="memory__content">
      <div class="memory__block">
        <p class="memory__text">MRC Fast Boot / Memory Fast Boot - Disabled</p>
        <p class="memory__under">
          Этот параметр отключаем для того, чтобы контроллер памяти был обучен
          новым настройкам ОЗУ
        </p>
      </div>
      <div class="memory__img">
        <img :src="'../preload/line.svg'" />
      </div>
      <div class="memory__block">
        <p class="memory__text">MCH Full Check - Enabled (Asus)</p>
        <p class="memory__under">
          Параметр выполняет полную проверку памяти, всегда включайте его для
          обеспечения стабильности системы
        </p>
      </div>
      <div class="memory__img">
        <img src="../assets/bios/line.webp" />
      </div>
      <div class="memory__block">
        <p class="memory__text">Dram Ref Clock - 133 Mhz</p>
        <p class="memory__under">
          Anta777 рекомендует установить множитель памяти на 133, чтобы создать
          комфортные условия для контроллера памяти вашего процессора
        </p>
      </div>
    </div>
    <p class="memory__ram">
      Также не забудьте обновить BIOS материнской платы для обеспечения полной
      функциональности, обновления<br />
      можно найти на сайте производителя материнской платы.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.memory {
  height: 28.645833333333332vw;
}
.memory__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.memory__block {
  margin-bottom: 1.3541666666666667vw;
}
.memory__img {
  margin-bottom: 1.3541666666666667vw;
}
.memory__img img {
  width: 2.65625vw;
}
.memory__text {
  font-weight: 500;
  font-size: 1.9791666666666665vw;
  line-height: 2.3958333333333335vw;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0.78125vw;
}
.memory__under {
  font-weight: 300;
  font-size: 0.8333333333333334vw;
  line-height: 140%;
  text-align: center;
  color: #cecece;
}
.memory__ram {
  text-align: center;
  margin-top: 1.6666666666666667vw;
  font-weight: 300;
  font-size: 0.7291666666666666vw;
  color: #9e9e9e;
  margin-top: 2.604166666666667vw;
}
</style>
