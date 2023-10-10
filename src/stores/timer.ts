import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', () => {
  const endTime = ref(<Date | null>(null))
  const status = ref('start')
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)

  function setTime(time: Date) {
    endTime.value = time
  }
  function start() {
    if (status.value === 'start') {
      init()
    }
    status.value = 'count'
  }
  function pause() {
    status.value = 'pause'
  }
  function clear() {
    status.value = 'start'
    endTime.value = null
  }

  function init() {
    status.value = 'start'
    endTime.value = new Date(new Date().getTime() + (hours.value * 60 * 60 * 1000) + (minutes.value * 60 * 1000) + (seconds.value * 1000));
  }

  function setClock(hrs: number, mins: number, secs: number) {
    hours.value = hrs
    minutes.value = mins
    seconds.value = secs
    init()
  }
  return { endTime, status, hours, minutes, seconds, setTime, start, pause, clear, init, setClock }
})