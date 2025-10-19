<script setup>

</script>

<template>
    <section class="banniere">
        <img class="banniereImg" src="../../src/assets/images/bannerPrize.png" alt="Bannière Wout Van Aert"></img>
        <h1 class="h1Banniere"><span>Wout </span><span>Michel</span></h1>
    </section>
</template>

<style scoped>
.banniere {
    display: flex;
    justify-content: end;
    align-items: center;
}

.banniereImg{
    width: 100%;
    position: relative;
    z-index: 0;
}

.h1Banniere{
    position: absolute;
    color: #000;
    transform: rotateZ(90deg);
}
</style>
