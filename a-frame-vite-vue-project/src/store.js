import {
    ref,
    watch
} from "vue";

export const nbCoins = ref(0);

export const secondLeft = ref(10);


watch(nbCoins, () => console.log(nbCoins.value));