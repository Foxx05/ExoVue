<script setup>

</script>

<template>
    <main>
        <section class="ALegacy">
            <h2>A legacy</h2>
            <p>Few riders in modern cycling embody versatility and determination quite like Wout van Aert. Born in Belgium, the heartland of cycling, Van Aert has built a career defined by relentless drive, tactical intelligence, and a rare ability to excel across disciplines. From the mud-splattered circuits of cyclocross to the grand stages of the Tour de France, his name has become synonymous with both power and precision.</p>
            <p><span>Van Aert’s palmarès reflects his exceptional range as an athlete. A multiple cyclocross world champion, he transitioned seamlessly to road racing, where he quickly became one of the peloton’s most complete riders. His victories span one-day Classics, time trials, and sprint finishes — each win showcasing his unmatched adaptability and fierce competitive spirit. Beyond the podiums, Van Aert has also earned admiration for his selfless teamwork and sportsmanship, often sacrificing personal ambition to support his team’s broader goals.</span><span>Every race he enters carries a sense of anticipation — will he sprint, climb, or attack solo? That unpredictability has made him a fan favorite and a defining figure in contemporary cycling.</span></p>
            <p>This section celebrates the milestones, triumphs, and unforgettable performances that make up Wout van Aert’s remarkable career — a testament to his consistency, courage, and the enduring artistry of a true all-rounder.</p>
        </section>
        <img src="../assets/images/vanAert_run.png" alt="Wout Van Aert in the sand running with his Cyclocross bike"></img>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    margin: 224px 27px 0;
}
span {
    display: block;
    margin: 12px 0;
    margin-bottom: 27px;
}
h2 {
    justify-self: center;
}

@media (min-width: 1024px) {
    main {
        display: grid;
        grid-template-columns: 120px 1fr 80px 1fr 120px;
        margin: 224px 0 0;
    }
    .ALegacy {
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: center;
    }
    img {
        justify-self: end;
        grid-column: 4/6;
        grid-row: 1/2;
    }
}
</style>
