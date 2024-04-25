import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0);
  const name = ref<string>('');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  return {
    count,
    name,
    doubleCount,
    increment,
  };
});
