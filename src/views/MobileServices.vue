<template>
  <div class="mobservices">
    <p class="mobservices__title">
      High FPS and Low System<br />
      Latency
    </p>
    <div class="mobservices__content">
      <div class="mobservices__choice">
        <p
          class="mobservices__nav"
          @click="
            mobSystem = true;
            mobOverclock = false;
            mobCustom = false;
          "
          :class="{ active: mobSystem === true }"
        >
          STANDARD
        </p>
        <p
          class="mobservices__nav"
          @click="
            mobSystem = false;
            mobOverclock = true;
            mobCustom = false;
          "
          :class="{ active: mobOverclock === true }"
        >
          OVERCLOCKING
        </p>
        <p
          class="mobservices__nav"
          @click="
            mobSystem = false;
            mobOverclock = false;
            mobCustom = true;
          "
          :class="{ active: mobCustom === true }"
        >
          PREMIUM
        </p>
      </div>
      <ph-mobile-system-tweaking
        v-if="mobSystem === true"
        @payment="$emit('GoStepFirst')"
      ></ph-mobile-system-tweaking>
      <ph-mobile-overclocking
        v-else-if="mobOverclock === true"
        @payment="$emit('GoStepFirst')"
      ></ph-mobile-overclocking>
      <ph-mobile-custom
        v-else
        @payment="$emit('GoStepFirst')"
      ></ph-mobile-custom>
    </div>
  </div>
</template>

<script>
import PhMobileSystemTweaking from "@/components/PhMobileSystemTweaking.vue";
import PhMobileOverclocking from "@/components/PhMobileOverclocking.vue";
import PhMobileCustom from "@/components/PhMobileCustom.vue";
export default {
  components: { PhMobileSystemTweaking, PhMobileOverclocking, PhMobileCustom },
  data() {
    return {
      mobSystem: true,
      mobOverclock: false,
      mobCustom: false,
      payment: false,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.mobservices__title {
  font-weight: 700;
  font-size: 5.6000000000000005vw;
  margin-top: 3vw;
  text-align: center;
  color: #ffffff;
}
.mobservices__content {
  margin-top: 10vw;
}
.mobservices__choice {
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobservices__nav {
  font-weight: 500;
  font-size: 2.6vw;
  margin: 0 1vw;
  padding-bottom: 2vw;
  color: #959493;
}
.active {
  color: #ffffff;
  border-bottom: 0.2vw solid #ff0200;
}
</style>
