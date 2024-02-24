<template>
  <div class="mobsystem">
    <div class="mobsystem__img">
      <img src="../assets/SystemMobile/video.png" />
    </div>
    <div class="mobsystem__info">
      <p class="mobsystem__text">
        1. Clean installation of Windows 10 22H2 Pro and its further setup
      </p>
      <p class="mobsystem__text">
        2. Tips for upgrading accessories + ongoing support from experts
      </p>
      <p class="mobsystem__text">
        3. Setting up OBS for video recording/streaming (If needed)
      </p>
      <p class="mobsystem__text">
        4. Cutting out unnecessary Microsoft applications and disabling<br />
        services that are not used by the average Windows user
      </p>
    </div>
    <div class="mobsystem__purshase">
      <button class="mobsystem__btn" @click="nextStep">Купить</button>
      <div class="mobsystem__image">
        <img src="../assets/SystemMobile/line.svg" />
      </div>
      <p class="mobsystem__money">1 500 ₽</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    nextStep() {
      window.open(
        "https://vk.com/airopctuning?w=product-212081876_6968521%2Fquery",
        "_blank"
      );
      //   this.$emit("payment");
      //   this.$store.state.priceEn = 35;
      //   this.$store.state.overclock = false;
    },
  },
};
</script>

<style scoped>
.mobsystem {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 7.000000000000001vw;
}
.mobsystem__info {
  margin-top: 4vw;
}
.mobsystem__text {
  font-weight: 400;
  font-size: 2.6vw;
  margin: 0 4vw 1vw 4vw;
  line-height: 150%;
  text-align: center;
  color: #e1e1e1;
}
.mobsystem__purshase {
  display: flex;
  align-items: center;
  margin-top: 8vw;
  margin-right: 12vw;
}
.mobsystem__btn {
  font-weight: 500;
  font-size: 2.8000000000000003vw;
  padding: 2.6vw 3.4000000000000004vw;
  border: 1px solid #d9d9d9;
  background: none;
  margin-right: 21.5vw;
  color: #ffffff;
}
.mobsystem__money {
  font-weight: 600;
  font-size: 4.5999999999999996vw;
  margin-left: 21.5vw;
  color: #ffffff;
}
.mobsystem__img img {
  width: 60vw;
}
</style>
