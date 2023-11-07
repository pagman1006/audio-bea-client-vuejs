<template>
  <h1>Nuevo Producto</h1>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label for="nombre" class="col-form-label">Nombre del Producto: </label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="nombre" name="nombre" placeholder="Nombre del Producto"
              autofocus="autofocus">
          </div>
        </div>

        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label class="col-form-label" for="marca">Marca:</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="marca" name="marca" placeholder="Marca del Producto" />
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
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label class="col-form-label" for="tipo">Tipo de Producto:</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="text" id="tipo" name="tipo" placeholder="Tipo del Producto" />
          </div>
        </div>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label class="col-form-label" for="tipo">Precio (MXN):</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input" type="number" id="precio_pesos" name="precio_pesos"
              placeholder="Precio en pesos" />
          </div>
        </div>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label class="col-form-label" for="imagen">Imagen:</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <input class="form-control input check" type="file" id="images" name="images" accept="image/png, image/jpeg"
              multiple />
          </div>
        </div>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label class="form-check-label" for="mostrar">Mostrar al Inicio</label>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <div class="form-check text-left">
              <input class="form-check-input" type="checkbox" name="mostrar" />
            </div>
          </div>
        </div>
        <div class="form-group row my-3">
          <div class="col-lg-3 col-md-4 col-12">
            <label class="col-form-label" for="descripcion">Descripción del Producto:</label>
            <input class="form-control" type="text" hidden="hidden" rows="4" id="descripcion" name="descripcion"
              placeholder="Descripción del Producto" />
          </div>
          <VueTrix localStorage autofocus v-model="content1" placeholder="Enter your content"
            @trix-file-accept="handleFile" @trix-attachment-add="handleAttachmentAdd"
            @trix-attachment-remove="handleAttachmentRemove" @trix-focus="handleEditorFocus"
            @trix-blur="handleEditorBlur" />
        </div>
        <editor api-key="no-api-key" :init="{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
                                                                 alignleft aligncenter alignright alignjustify | \
                                                                 bullist numlist outdent indent | removeformat | help'
        }" />
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