<template>
  <h1>Nueva Submarca</h1>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="marca" class="col-form-label">Marca: </label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="marca" name="marca" placeholder="Nombre de la Marca"
              autofocus="autofocus">
          </div>
        </div>

        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label class="col-form-label" for="sub-marca">Submarca:</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="sub-marca" name="sub-marca"
              placeholder="Nombre de la Submarca" />
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer text-center"><a class="btn btn-success text-white btn-sm mx-2"
        onclick="guardar()">Guardar</a><a class="btn btn-danger text-white btn-sm mx-2" onclick="salir()">Cancelar</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>