<template>
  <div class="moboverclocking">
    <div class="moboverclocking__img">
      <img src="../assets/SystemMobile/motherboard.png" />
    </div>
    <div class="moboverclocking__info">
      <p class="moboverclocking__text">
        1. Overclocking RAM (DDR4 / DDR5) - increase the frequency of memory,
        setting primary, secondary, tertiary timings, voltage selection on the
        memory and memory controller.
      </p>
      <p class="moboverclocking__text">
        2. GPU overclocking - overclocking the core / memory frequency, removing
        the power consumption limits, selecting the voltage per core, adjusting
        the fan speed, video card stress test.
      </p>
      <p class="moboverclocking__text">
        3. CPU overclocking - increasing CPU core and ring frequency, selecting
        LLC level, motherboard VRM setup, power scheme setup and CPU stress test
        in Prime95 / OCCT / Cinebench R23 / Linpack Xtreme
      </p>
    </div>
    <div class="moboverclocking__purshase">
      <button class="moboverclocking__btn" @click="nextStep">Купить</button>
      <div class="moboverclocking__image">
        <img src="../assets/SystemMobile/line.svg" />
      </div>
      <div class="moboverclocking__over">
        <div class="moboverclocking__card">
          <p class="moboverclocking__ram">RAM</p>
          <input
            class="moboverclocking__input"
            type="checkbox"
            @change="getRam"
            v-model="inputRam"
          />
          <p class="moboverclocking__pursh">от 1 200 ₽</p>
        </div>
        <div class="moboverclocking__card">
          <p class="moboverclocking__ram">GPU</p>
          <input
            class="moboverclocking__input"
            type="checkbox"
            @change="getGpu"
            v-model="inputGpu"
          />
          <p class="moboverclocking__pursh">650 ₽</p>
        </div>
        <div class="moboverclocking__card">
          <p class="moboverclocking__ram">CPU</p>
          <input
            class="moboverclocking__input"
            type="checkbox"
            @change="getCpu"
            v-model="inputCpu"
          />
          <p class="moboverclocking__pursh">650 ₽</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputRam: false,
      inputGpu: false,
      inputCpu: false,
    };
  },
  methods: {
    nextStep() {
      window.open("https://vk.com/airopctuning", "_blank");
      //   if (
      //     this.getRam() !== false ||
      //     this.getGpu() !== false ||
      //     this.getCpu() !== false
      //   ) {
      //     const summ = this.getRam() + this.getGpu() + this.getCpu();
      //     this.$emit("payment");
      //     this.$store.state.priceEn = summ;
      //     this.$store.state.overclock = true;
      //   }
    },
    getRam() {
      if (this.inputRam === true) {
        return 45;
      } else {
        return false;
      }
    },
    getGpu() {
      if (this.inputGpu === true) {
        return 20;
      } else {
        return false;
      }
    },
    getCpu() {
      if (this.inputCpu === true) {
        return 20;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.moboverclocking {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8vw;
}
.moboverclocking__info {
  margin-top: 2vw;
}
.moboverclocking__text {
  font-weight: 400;
  font-size: 2.6vw;
  color: #e1e1e1;
  text-align: center;
  margin: 0 4vw 1vw 4vw;
  line-height: 150%;
}
.moboverclocking__purshase {
  display: flex;
  align-items: center;
  margin-top: 8vw;
}

.moboverclocking__btn {
  font-weight: 500;
  font-size: 2.8000000000000003vw;
  padding: 2.6vw 3.4000000000000004vw;
  border: 1px solid #d9d9d9;
  background: none;
  margin-right: 12vw;
  color: #ffffff;
}

.moboverclocking__over {
  margin-left: 12vw;
}
.moboverclocking__card {
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
}
.moboverclocking__ram {
  font-weight: 600;
  font-size: 2.8000000000000003vw;
  width: 7.000000000000001vw;
  margin-right: 7.000000000000001vw;
  color: #444141;
}
.moboverclocking__pursh {
  font-weight: 600;
  font-size: 2.8000000000000003vw;
  margin-left: 4vw;
  color: #ffffff;
}
.moboverclocking__img img {
  width: 40vw;
}
</style>
