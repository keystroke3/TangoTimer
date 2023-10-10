<template>
    <p>
        {{ formatTime(remainingTime ?? 0) }}
    </p>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useTimerStore } from '@/stores/timer';
import { storeToRefs } from 'pinia';

const Timer = useTimerStore()

const currentTime = ref(new Date());
const { endTime } = storeToRefs(Timer)
const remainingTime = ref(endTime.value ? endTime.value.getTime() - currentTime.value.getTime() : null);
let timerInterval: any


const updateTimer = () => {
    if (Timer.status !== 'count') {
        return
    }
    currentTime.value = new Date();
    remainingTime.value = endTime.value ? endTime.value.getTime() - currentTime.value.getTime() : null;

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
        return "00"
    }
    let timeString: string
    if (time < 60000) {
        timeString = `00:${seconds}`;
        document.title = `TangoTimer - ${timeString}`
        return `${seconds}:${milliseconds}`;
    } else if (time < 60 * 60 * 1000) {
        timeString = `${minutes}:${seconds}`;
        document.title = `TangoTimer - ${timeString}`
        return timeString
    } else {
        timeString = `${hours}:${minutes}:${seconds}`;;
        document.title = `TangoTimer - ${timeString}`
        return timeString
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