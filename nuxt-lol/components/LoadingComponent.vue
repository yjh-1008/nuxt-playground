<template>
  <div class="loading-wrapper" v-show="loaingState">
    <div class="loading-circle">
    </div>
    <div class="loading-icon">
</div>
  </div>
</template>

<script lang="ts" setup>
import {useLoadingStore} from '@/stores/useLoadingStore';
const loadingStore = useLoadingStore();
const {loaingState} = storeToRefs(loadingStore);
</script>

<style lang="scss">
/* import poroIcon from '' */
.loading-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(211, 211, 211,0.9);
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