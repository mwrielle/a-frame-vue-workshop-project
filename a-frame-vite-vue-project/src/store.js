import {
    ref,
    watch
} from "vue";

export const nbCoins = ref(0);

export const secondLeft = ref(60);

export const showOnboarding = ref(true);

export const gameover = ref(false);


watch(nbCoins, () => console.log(nbCoins.value));