<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: "FabNewEntry",
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>

button {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 70px;
  height: 70px;
  border-radius: 100%;
}

</style>