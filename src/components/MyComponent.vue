<template>
    <p class="greeting">{{ greeting }}</p>
  </template>
  
  <script>
  export default {
    data() {
      return {
        greeting: 'Привет всем!'
      }
    }
  }
  </script>
  
  <style>
  .greeting {
    color: red;
    font-weight: bold;
  }
  </style>