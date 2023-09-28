<script setup>
  const props = defineProps({
    user: {
      type: Object,
      default: [],
      required: true,
    }
  })

</script>

<template>
  <div class="user">
    <div class="user__top-bar">
      <div class="user__top-bar_name">{{user.name}}</div>
      <div class="user__top-bar_close">X</div>
    </div>
    <div class="user__content">
      <div class="user__content_photo">
        <img src="@/assets/user-icon.jpg" alt="user">
      </div>
      <div class="user__content_text">
        <p>{{user.email}}</p>
        <p>{{user.username}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .user{
    flex-basis: calc(25% - 10px);
    max-width: 25%;
    &__top-bar{
      background: #027ff4;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
    &__content{
      display: flex;
      align-items: center;
      border: 1px solid #e4e4e4;
      padding: 10px;
      justify-content: space-between;
      &_photo{
        width: 90px;
        height: 80px;
        overflow: hidden;
        img{
          width: 100px;
          height: 100px;
        }
      }
      &_text{
        p{
          font-size: 12px;
        }
      }
    }
  }
</style>