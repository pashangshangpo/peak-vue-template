<template>
  <svg :class="className" aria-hidden="true">
    <use :xlink:href="iconId"></use>
  </svg>
</template>

<script>
  export default {
    props: {
      name: String,
      className: {
        default: 'icon',
        type: String
      }
    },
    computed:{
      iconId(){
        return `#icon-${this.name}`
      }
    }
  }
</script>