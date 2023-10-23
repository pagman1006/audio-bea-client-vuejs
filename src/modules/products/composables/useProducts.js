import { computed, onMounted, ref } from "vue"
import { useStore } from "vuex"

const mSeconds = 1000
const mMinute = mSeconds * 60
const mHour = mMinute * 60
const mDay = mHour * 24

const useProducts = () => {

  const store = useStore()

  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)

  onMounted(async () => {
    await store.dispatch('product/getHotdealDate')
    setInterval(() => {
      const { day, hour, minute, second } = updateHotdealDate(store.getters['product/getHotdealDate'])
      days.value = day
      hours.value = hour
      minutes.value = minute
      seconds.value = second
    }, 1000)
  })

  return {
    products: computed(() => store.getters['product/getProducts']),
    productsCollection: computed(() => store.getters['product/getCollections']),
    days,
    hours,
    minutes,
    seconds,
  }
}

const updateHotdealDate = (hotdealDate) => {
  let dif = hotdealDate - new Date()
  const day = Math.floor(dif / mDay)
  dif = dif - (day * mDay)

  const hour = Math.floor(dif / mHour)
  dif = dif - (hour * mHour)

  const minute = Math.floor(dif / mMinute)
  dif = dif - (minute * mMinute)

  const second = Math.floor(dif / mSeconds)
  dif = dif - (second * mSeconds)

  return {
    day,
    hour,
    minute,
    second
  }
}

export default useProducts