<template>

  <div class="entry-container mb-3 p-2 pointer">


    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">8 </span>
      <span class="mx-1 fs-5">Junio </span>
      <span class="mx-2 fw-light">2022, miércoles</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi magnam magni sequi! A amet assumenda, autem
      deleniti et hic minima minus modi, nihil porro provident ratione sit unde vitae voluptatibus!
    </div>

  </div>
</template>

<script>
export default {
  name: "Entry-"
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}

</style>