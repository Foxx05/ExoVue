<script setup>

</script>

<template>
    <section class="banniere">
        <img class="banniereImg" src="../../src/assets/images/bannerPrize.png" alt="Bannière Wout Van Aert"></img>
        <h1 class="h1Banniere"><span>His </span><span>prize list</span></h1>
    </section>
</template>

<style scoped>
.oswald-bold {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

.banniere {
    display: flex;
    justify-content: start;
    align-items: end;
}

.banniereImg{
    width: 100%;
    position: relative;
    z-index: 0;
}

.h1Banniere{
    position: absolute;
    color: #000;
    padding-left: 12px;
    padding-bottom: 12px;
    font-size: clamp(1.875rem, 5.167vw + 0.8rem, 7rem);
    font-family: "Oswald", sans-serif;
    font-weight: 700;
}

span {
    display: block;
    margin: 12px 0;
    margin-bottom: 27px;
}

@media (min-width: 1024px) {
    .h1Banniere{
        padding-left: 120px;
        padding-bottom: 87px;
    }
}
</style>
