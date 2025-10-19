<script setup>

</script>

<template>
    <main>
        <section class="who">
            <h2>Who ?</h2>
            <p>From the mud to the asphalt. Three-time cyclo-cross world champion Wout van Aert has shown in recent years that he is also one of the world's best road racers. Van Aert shows his versatility and rides in front in the classics, in sprints, in time trials and occasionally in mountain stages. Since joining Team Visma | Lease a Bike in 2019, he has managed to win Strade Bianche, Milan-Sanremo, the Amstel Gold Race, Gent-Wevelgem and the Omloop Het Nieuwsblad in addition to several Vuelta a España and Tour de France stages and the green jersey. He signed a contract through the end of his active career with the team in late 2024. In 2025, he completed his trilogy of grand tours with a magnificent stage win in the Giro d'Italia. During the final stage of the Tour de France, he did it again in style, crossing the finish line solo on the Champs-Élysées.</p>
        </section>
        <section class="ATeammate">
            <h2>A teammate</h2>
            <p>Behind the victories and the jerseys lies an athlete driven by more than ambition. Wout van Aert is known for his relentless work ethic and his loyalty to his teammates. Whether leading out a sprint or pulling at the front for his leaders, he embodies the essence of teamwork. His resilience, forged through setbacks and injuries, has become one of his trademarks. Each comeback tells the story of a rider who refuses to settle, who channels frustration into strength. Outside competition, Van Aert remains grounded — a family man, admired for his honesty and humility. On and off the bike, he stands as a symbol of dedication, balance, and respect for the sport that shaped him.</p>
        </section>
        <section class="HisDisciplines">
            <h2>His disciplines</h2>
            <div class="images">
                <div class="image-container">
                    <img src="../assets/images/vanAert_cyclocross.png" alt="Wout Van Aert in the mud on his Cyclocross bike">
                    <div class="overlay"><h3 class="text-mask">Cyclocross</h3></div>
                </div>

                <div class="image-container">
                    <img src="../assets/images/vanAert_route.png" alt="Wout Van Aert on his road bike">
                    <div class="overlay"><h3 class="text-mask">Road</h3></div>
                </div>

                <div class="image-container">
                    <img src="../assets/images/vanAert_clm.png" alt="Wout Van Aert on his Time Trial bike">
                    <div class="overlay"><h3 class="text-mask">Time Trial</h3></div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    margin: 70px 27px 0;
}
.HisDisciplines {
    display: flex;
    flex-direction: column;
    align-items: center;
}
span {
    display: block;
    margin: 12px 0;
    margin-bottom: 27px;
}
h2 {
    justify-self: center;
    font-size: clamp(1.625rem, 2.331vw + 1.14rem, 3.938rem);
}
p{
    font-size: clamp(1rem, 0.252vw + 0.948rem, 1.25rem);
}

.images {
    display: flex;
    flex-direction: column;
    gap: 66px;
}
.image-container {
  position: relative;
  display: inline-block;
  width: 100%;
  border: 5px solid #000;
  box-sizing: border-box;
}


.image-container img {
  display: block;
  width: 100%;
  height: auto;
  transition: 0.3s ease;
}

/* Calque gris semi-transparent */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 61, 61, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Texte avec fond transparent (image visible à travers) */
.text-mask {
  font-size: 48px;
  font-weight: bold;
  background: url('../assets/images/vanAert_cyclocross.png') center/cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

/* Activation au survol */
.image-container:hover .overlay {
  opacity: 1;
}



@media (min-width: 1024px) {
    main {
        display: grid;
        grid-template-columns: 120px 1fr 80px 1fr 120px;
        margin: 224px 0 0;
    }
    .who {
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: center;
    }
    .ATeammate {
        grid-column: 2/3;
        grid-row: 2/3;
        justify-self: center;
    }
    .HisDisciplines {
        grid-column: 4/5;
        grid-row: 1/3;
    }
}
</style>
