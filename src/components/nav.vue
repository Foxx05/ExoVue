<script setup>

</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">The Rider</router-link></li>
      <li><router-link to="/PrizeList.vue">His prize list</router-link></li>
    </ul>
  </nav>
</template>


<style scoped>
  .outfit {
    font-family: "Outfit", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 68px;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 60px;
    margin-right: 70px;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #FFF;
    transition: all .3s;
    font-size: clamp(1rem, 0.252vw + 0.948rem, 1.25rem);
    font-family: "Outfit", sans-serif;
  }

  a:hover {
    color: #E6CF1D;
  }
</style>
