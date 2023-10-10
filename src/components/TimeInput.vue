<template>
    <div class="time-input">
        <div class="inputs">
            <input v-model="Timer.hours" placeholder="23" type="number" name="hours" id="hours">
            <label for="hours">Hours</label>
        </div>
        <div class="inputs">
            <input v-model="Timer.minutes" placeholder="59" type="number" name="minutes" id="minutes">
            <label for="minutes">Minutes</label>
        </div>
        <div class="inputs">
            <input v-model="Timer.seconds" placeholder="59" type="number" name="seconds" id="seconds" />
            <label for="seconds">Seconds</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTimerStore } from '@/stores/timer';
const Timer = useTimerStore()

</script>
  
<style scoped >
p {
    margin: auto;
    font-size: clamp(3rem, 10vw, 15rem);
    font-family: monospace;
    white-space: nowrap;
}

input {
    width: 8vw;
    aspect-ratio: 1/1;
    font-size: 6rem;
    text-align: center;
    border-radius: 10px;
    display: block;
}

.time-input {
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;
}
</style>