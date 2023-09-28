<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <div class="logo">
          <img src="@/assets/logo.png" alt="">
          <span>Customer management</span>
        </div>
        <nav>
          <ul class="header-nav">
            <li class="header-nav__element"> <RouterLink :to="{ name: 'customers'}">Customers</RouterLink></li>
            <li class="header-nav__element"> <RouterLink :to="{ name: 'orders'}">Orders</RouterLink></li>
            <li class="header-nav__element"> <RouterLink :to="{ name: 'about'}">About</RouterLink></li>
            <li class="header-nav__element"> <RouterLink :to="{ name: 'login'}">Login</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-wrapper{
  background: #027ff4;
  color: #fff;
  padding: 20px 10px;
  display: flex;
  column-gap: 200px;
  align-items: center;
}
.logo{
  display: flex;
  column-gap: 15px;
  span{
    font-size: 20px;
  }
  img{
    width: 30px;
  }
}
.header-nav{
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin: 0;
  padding: 0;
  &__element{
   list-style-type: none;
    a{
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>