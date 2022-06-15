<template>
  <div class="entry-title d-flex justify-content-between p-2">

    <div>
      <span class="text-success fs-3 fw-bold">15 </span>
      <span class="mx-1 fs-3">Julio </span>
      <span class="mx-2 fs-4 fw-light">2022, Sabado</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>

  </div>

  <hr>

  <div class="d-flex flex-column  px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>

  <Fab icon="fa-save"/>

  <img
      src="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
      class="img-thumbnail"
      alt="entry-picture">
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "EntryView",
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab'))
  }
}
</script>

<style lang="scss" scoped>

textarea {
  border: none;
  height: 100%;
  font-size: 20px;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba($color: #242424, $alpha: 0.2);
}


</style>