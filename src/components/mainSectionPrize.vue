<script setup>
import { ref } from 'vue'

const likes = ref(0)
const comment = ref('')

const achievements = ref([
  'Cyclocross World Champion (2016–2018)',
  'Tour de France Stage Winner',
  'Tour de France Green Jersey (2022)',
  'Milan–San Remo Winner',
  'Olympic Silver Medalist',
  'Belgian National Road Champion (2021)',
  'Belgian National Time-Trial Champion (2016-2018, 2021-2022)',
])
</script>

<template>
  <main>
    <section class="ALegacy">
      <h2>A legacy</h2>
      <p>Few riders in modern cycling embody versatility and determination quite like Wout van Aert. Born in Belgium, the heartland of cycling, Van Aert has built a career defined by relentless drive, tactical intelligence, and a rare ability to excel across disciplines. From the mud-splattered circuits of cyclocross to the grand stages of the Tour de France, his name has become synonymous with both power and precision.</p>

      <p><span>Van Aert’s palmarès reflects his exceptional range as an athlete. A multiple cyclocross world champion, he transitioned seamlessly to road racing, where he quickly became one of the peloton’s most complete riders. His victories span one-day Classics, time trials, and sprint finishes — each win showcasing his unmatched adaptability and fierce competitive spirit. Beyond the podiums, Van Aert has also earned admiration for his selfless teamwork and sportsmanship, often sacrificing personal ambition to support his team’s broader goals.</span><span>Every race he enters carries a sense of anticipation — will he sprint, climb, or attack solo? That unpredictability has made him a fan favorite and a defining figure in contemporary cycling.</span></p>

      <ul>
        <li v-for="(achievement, index) in achievements" :key="index">
          &#x1F3C6; {{ achievement }}
        </li>
      </ul>
    </section>

    <img src="../assets/images/vanAert_run.png" alt="Wout Van Aert in the sand running with his Cyclocross bike" />

    <section class="commentLike">
        <div class="comment-section">
            <p>Leave a comment:</p>
            <input v-model="comment" placeholder="Write your comment here..." />
            <p v-if="comment">You wrote: "{{ comment }}"</p>
        </div>

        <button @click="likes++">Leave a &#x2764;&#xFE0F;</button>
        <p>Thank you for the {{ likes }} likes</p>
    </section>
  </main>
</template>


<style scoped>

.oswald-medium {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}


.outfit {
  font-family: "Outfit", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

main {
    display: flex;
    flex-direction: column;
    margin: 70px 27px 0;
}
span {
    display: block;
    margin: 12px 0;
    margin-bottom: 27px;
}
h2 {
    justify-self: center;
    font-size: clamp(1.625rem, 2.331vw + 1.14rem, 3.938rem);
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    margin-bottom: 50px;
}
p, ul, button {
    font-size: clamp(1rem, 0.252vw + 0.948rem, 1.25rem);
    font-family: "Outfit", sans-serif;
}

ul {
    list-style: none;
    margin: 27px 0;
    padding-left: 0;
}

input {
    font-family: "Outfit", sans-serif;
    cursor: pointer;
}

button {
    background-color: #FFEA62;
    cursor: pointer;
    margin-top: 23px;
    transition: all .3s;
}

button:hover {
    background-color: #506BA6;
    color: #FFFFFF;
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
    .commentLike {
        grid-column: 2/3;
        grid-row: 2/3;
    }
}
</style>
