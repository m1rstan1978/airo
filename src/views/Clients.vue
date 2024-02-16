<template>
  <div class="clients">
    <h2 class="clients__header">Наши клиенты</h2>
    <div class="clients__content">
      <img src="@/assets/clients/1.png" />
    </div>
    <div class="clients__left">
      <img src="@/assets/clients/left.svg" />
    </div>
    <div class="clients__right">
      <img src="@/assets/clients/right.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.clients {
  position: relative;
  width: 100%;
}
.clients__header {
  padding-top: 5.208333333333334vw;
  padding-bottom: 3.854166666666667vw;
  text-align: center;
  font-weight: 600;
  font-size: 2.5vw;
  color: #ffffff;
}
.clients__content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.clients__left {
  position: absolute;
  top: 60%;
  left: -20%;
}
.clients__right {
  position: absolute;
  top: 25%;
  right: -20%;
}
</style>
