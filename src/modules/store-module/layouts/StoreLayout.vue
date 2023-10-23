<template>
  <div id="breadcrumb" class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="breadcrumb-tree">
            <li>
              <router-link :to="{ name: 'home' }">Inicio</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'store' }">Tienda</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'promotions' }">Promociones</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="row">
        <div id="aside" class="col-md-3">
          <div class="aside">
            <h3 class="aside-title">Categorías</h3>
            <div class="checkbox-filter">
              <div class="input-checkbox">
                <input type="checkbox" id="category-1">
                <label for="category-1">
                  <span></span>
                  Laptops
                  <small>(120)</small>
                </label>
              </div>
            </div>
          </div>

          <div class="aside">
            <h3 class="aside-title">Precio</h3>
            <div class="price-filter">
              <div class="price-slider"></div>
              <div class="input-number price-min">
                <input type="number" id="price-min">
                <span class="qty-up">+</span>
                <span class="qty-down">-</span>
              </div>
              <span>-</span>
              <div class="input-number price-max">
                <input id="price-max" type="number">
                <span class="qty-up">+</span>
                <span class="qty-down">-</span>
              </div>
            </div>
          </div>

          <div class="aside">
            <h3 class="aside-title">Marca</h3>
            <div class="checkbox-filter">
              <div class="input-checkbox">
                <input type="checkbox" id="brand-1">
                <label for="brand-1">
                  <span></span>
                  SAMSUNG
                  <small>(578)</small>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div id="store" class="col-md-9">
          <div class="store-filter clearfix">
            <div class="sotre-sort">
              <label class="mx-2">Ordenar Por:
                <select class="input-select">
                  <option value="0">Popular</option>
                  <option value="1">Position</option>
                </select>
              </label>
              <label class="mx-2"> Mostrar:
                <select class="input-select">
                  <option value="0">20</option>
                  <option value="1">50</option>
                </select>
              </label>
            </div>
            <ul class="store-grid">
              <li class="active"><i class="fa fa-th"></i></li>
              <li><a href="#"><i class="fa fa-th-list"></i></a></li>
            </ul>
          </div>

          <div class="row">
            <router-view v-slot="{ Component, route }">
              <keep-alive>
                <component :is="Component" :key="route.name" />
              </keep-alive>
            </router-view>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>    
<script>
export default {
  setup() {

  }

}
</script>
<style scoped>
.router-link-active.router-link-exact-active {
  text-decoration: underline;
}
</style>