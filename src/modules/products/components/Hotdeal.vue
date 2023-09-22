<template>
    <div class="section" id="hot-deal">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="hot-deal">
                        <ul class="hot-deal-countdown">
                            <li>
                                <div>
                                    <h3>{{ day }}</h3><span>Days</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>{{ hour }}</h3><span>Hours</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>{{ minutes }}</h3><span>Mins</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>{{ seconds }}</h3><span>Secs</span>
                                </div>
                            </li>
                        </ul>
                        <h2 class="text-uppercase">Semana de remates</h2>
                        <p>Nuevos productos con hasta un 50% de descuento</p><a class="primary-btn cta-btn" href="#">Entrar !!!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onActivated, onMounted, ref, watch } from 'vue';
import useProducts from '../composables/useProducts';

export default {
    setup() {
        const mSeconds = 1000
        const mMinute = mSeconds * 60
        const mHour = mMinute * 60
        const mDay = mHour * 24

        const { hotdealDate } = useProducts()
        const day = ref(0)
        const hour = ref(0)
        const minutes = ref(0)
        const seconds = ref(0)

        const updateHotdealDate = () => {
            let dif = hotdealDate.value - new Date()

            day.value = Math.floor(dif / mDay)
            dif = dif - (day.value * mDay)

            hour.value = Math.floor(dif / mHour)
            dif = dif - (hour.value * mHour)

            minutes.value = Math.floor(dif / mMinute)
            dif = dif - (minutes.value * mMinute)

            seconds.value = Math.floor(dif / mSeconds)
            dif = dif - (seconds.value * mSeconds)
        }

        onMounted(() => {
            setInterval(() => {
                updateHotdealDate()
            }, 1000)
        })


        return {
            day,
            hour,
            minutes,
            seconds,
        }
    },
    watch: {
        today: () => {

        }
    }
}
</script>

<style lang="scss" scoped></style>