<template>
    <div class="container">
        <Clock v-if="['count', 'pause'].includes(Timer.status)" />
        <TimeInput v-else />
        <div class="controls">
            <button @click="toggleTimer()">
                <template v-if="['pause', 'start'].includes(Timer.status)">
                    <PlayIcon />
                    Start
                </template>
                <template v-else>
                    <PauseIcon />
                    Pause
                </template>
            </button>
            <button @click="Timer.restart()">
                <RestartIcon />
                Restart
            </button>

            <button @click="Timer.reset()">
                <StopIcon />
                Clear
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Clock from './Clock.vue';
import TimeInput from './TimeInput.vue';
import PlayIcon from './icons/PlayIcon.vue';
import PauseIcon from './icons/PauseIcon.vue';
import StopIcon from './icons/StopIcon.vue';
import RestartIcon from './icons/RestartIcon.vue';

import { useTimerStore } from '@/stores/timer';
const Timer = useTimerStore()


function toggleTimer() {
    Timer.status === 'count' ? Timer.pause() : Timer.start()
}


</script>

<style scoped>
button {
    padding: 0.3rem;
    font-size: 1.5rem;
    font-family: monospace;
    vertical-align: middle;
    border-radius: 10px;
}

.container {
    display: flex;
    flex-direction: column;
    width: max-content;
    align-items: center;
    justify-content: center;
    margin: auto;
}

.controls {
    display: flex;
    gap: 2rem;
    width: inherit;
    margin: auto;
    align-items: center;
    justify-content: center;
}
</style>