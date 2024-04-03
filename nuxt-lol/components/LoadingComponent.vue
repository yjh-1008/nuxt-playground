<template>
  <div class="loading-wrapper" v-show="loadingStore.$state.loaingState">
    <div class="loading-circle">
    </div>
    <div class="loading-icon">
</div>
  </div>
</template>

<script lang="ts" setup>
import {useLoadingStore} from '@/stores/useLoadingStore';
const loadingStore = useLoadingStore();
console.log(loadingStore.$state.loaingState);
</script>

<style lang="scss">
/* import poroIcon from '' */
.loading-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(211, 211, 211, 0.3);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  .loading-circle {
    position: relative;
    /* left: 43%;
    top: 43%; */
    width: 120px;
    height: 120px;
    border: 3px solid gray;
    border-top-color: #fff;
    border-radius: 100%;
    background: no-repeat center url('../assets/icons/sleeping_poro.gif');
    background-size: 70px;
    animation: spin 1s ease-in-out infinite;
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
  
}
</style>