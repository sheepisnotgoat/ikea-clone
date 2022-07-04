<template>
  <div class="price-filter">
    <div class="filter-wrapper" @click="handleDropdown">
      <button class="btn-transparent">Price</button>
    </div>
    <div v-if="dropDownActive" class="click-out" @click="handleDropdown"></div>
    <div v-if="dropDownActive" class="drop-down"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropDownActive: false,
    };
  },
  methods: {
    handleDropdown() {
      console.log("click");
      this.dropDownActive = !this.dropDownActive;
    },
  },
};
</script>

<style scoped>
.filter-wrapper {
  padding: 0.5rem 2rem;
  /* border: 1px solid black; */
  background: #f5f5f5;
  border-radius: 25px 25px 25px 25px;
}
.filter-wrapper:hover {
  cursor: pointer;
  background: #dfdfdf;
}
.btn-transparent {
  background: none;
  border: none;
}
button:hover {
  cursor: pointer;
}

.drop-down {
  position: absolute;
  width: 20rem;
  height: 30rem;
  border: 1px solid black;
}
.click-out {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: transparent;
}
</style>
