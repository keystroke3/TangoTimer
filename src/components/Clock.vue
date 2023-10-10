<template>
    <p>
        {{ formatTime(remainingTime ?? 0) }}
    </p>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import { useTimerStore } from '@/stores/timer';

const Timer = useTimerStore()

const currentTime = ref(new Date());
const endTime = Timer.endTime
const remainingTime = ref(endTime ? endTime.getTime() - currentTime.value.getTime() : null);
let timerInterval: any


const updateTimer = () => {
    if (Timer.status !== 'count') {
        return
    }
    currentTime.value = new Date();
    remainingTime.value = endTime ? endTime.getTime() - currentTime.value.getTime() : null;

    // if (remainingTime.value ?? 0 <= 0) {
    //     clearInterval(timerInterval);
    // }
};

onMounted(() => {
    timerInterval = setInterval(updateTimer)
})
onUnmounted(() => {
    clearInterval(timerInterval)
})

const formatTime = (time: number) => {
    const hours = String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(2, '0')
    const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, '0')
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0')
    const milliseconds = String(time % 1000).padStart(3, '0');
    if (time < 0.001) {
        return "0s"
    }
    if (time < 60000) {
        return `${seconds}s ${milliseconds}ms`;
    } else if (time < 60 * 60 * 1000) {
        return `${minutes}m ${seconds}s`;
    } else {
        return `${hours}h ${minutes}m ${seconds}s`;
    }
};
</script>
  
<style scoped >
p {
    margin: auto;
    font-size: clamp(3rem, 10vw, 15rem);
    font-family: monospace;
    white-space: nowrap;
}
</style>