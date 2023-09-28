<script setup>
import User from "@/components/User.vue";
import {ref} from "vue";

const users = ref([])
const fetchUsers = async () =>{
  users.value = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return  response.json()
      })
}
fetchUsers()
</script>

<template>
  <main>
    <div class="container">
      <div class="users">
        <User v-for="user in users"
              :user="user"
        />
      </div>
    </div>
  </main>
</template>
<style lang="scss">
.users{
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
  padding-top: 100px;
  justify-content: space-between;
}
</style>

