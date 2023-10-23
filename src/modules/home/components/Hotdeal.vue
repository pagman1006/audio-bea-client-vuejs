<template>
  <div class="section" id="hot-deal">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hot-deal">
            <ul class="hot-deal-countdown">
              <li>
                <div>
                  <h3>{{ days }}</h3><span>Days</span>
                </div>
              </li>
              <li>
                <div>
                  <h3>{{ hours }}</h3><span>Hours</span>
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
            <p>Nuevos productos con hasta un 50% de descuento</p><a class="primary-btn cta-btn" href="#">Entrar
              !!!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useProducts from '@/modules/products/composables/useProducts'

export default {
  setup() {

    const {
      days,
      hours,
      minutes,
      seconds,
    } = useProducts()

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }
}
</script>

<style lang="scss" scoped></style>