<script setup>

</script>

<template>
    <section class="banniere">
        <img class="banniereImg" src="../../src/assets/images/bannerPrize.png" alt="Bannière Wout Van Aert"></img>
        <h1 class="h1Banniere"><span>His </span><span>prize list</span></h1>
    </section>
</template>

<style scoped>
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
    padding-left: 120px;
}

span {
    display: block;
    margin: 12px 0;
    margin-bottom: 27px;
}
</style>
