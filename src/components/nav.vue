<script setup>

</script>

<template>
  <nav>
    <ul>
      <li><a href="Home.vue">The Rider</a></li>
      <li><a href="PrizeList.vue">His prize list</a></li>
    </ul>
  </nav>
</template>

<style scoped>
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
  }

  a:hover {
    color: #E6CF1D;
  }
</style>
