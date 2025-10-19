<script setup>

</script>

<template>
    <section class="banniere">
        <img class="banniereImg" src="../assets/images/bannerBase.png" alt="Bannière Wout Van Aert"></img>
        <h1 class="h1Banniere"><span>Wout </span><span>Van Aert</span></h1>
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
    margin-right: -70px;
    font-size: clamp(1.875rem, 5.167vw + 0.8rem, 7rem);
}

@media (min-width: 500px) {
    .h1Banniere{
        margin-right: -100px;
    }
}

@media (min-width: 900px) {
    .h1Banniere{
        margin-right: -170px;
    }
}

@media (min-width: 1200px) {
    .h1Banniere{
        margin-right: -190px;
    }
}
</style>
