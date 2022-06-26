<template>
  <div class="sort-action">
    <div class="sort" @click="dropdownActive">
      <button class="sort-button">{{ picked }}</button>
      <span
        class="material-symbols-outlined"
        :class="{
          'dropdown-icon': !dropdownIsactive,
          'dropdown-icon-reversed': dropdownIsactive,
        }"
      >
        expand_more
      </span>
    </div>
    <div
      :class="{
        'sort-dropdown': dropdownIsactive,
        'sort-dropdown-invisible': !dropdownIsactive,
      }"
    >
      <div>
        <input
          type="radio"
          id="price-low-to-high"
          value="Price: Low to High"
          v-model="picked"
          @change="$emit('selectSort', picked)"
        />
        <label for="price-low-to-high">Price: Low to High</label>
        <br />
        <input
          type="radio"
          id="price-high-to-low"
          value="Price: Hight to Low"
          v-model="picked"
          @change="$emit('selectSort', picked)"
        />
        <label for="price-high-to-low">Price: High to Low</label>
        <br />
        <input
          type="radio"
          id="rating"
          value="Customer rating"
          v-model="picked"
          @change="$emit('selectSort', picked)"
        />
        <label for="rating">Customer rating</label>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSort",
  data() {
    return {
      dropdownIsactive: false,
      picked: "Sort",
    };
  },
  methods: {
    dropdownActive() {
      this.dropdownIsactive = !this.dropdownIsactive;
    },
  },
};
</script>

<style scoped>
.sort {
  margin-left: 6.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #dfdfdf;
  border-radius: 25px;
  border: none;
  display: flex;
  align-items: center;
}
.sort-dropdown-invisible {
  display: none;
}

.sort-dropdown input {
  margin: 1rem;
}
.sort-dropdown label {
  margin: 1rem;
}
.sort-dropdown {
  position: absolute;
  padding: 1rem;
  background: whitesmoke;
  border-radius: 25px;
  margin-left: 6.5rem;
  margin-top: 0.5rem;
}
.sort-button {
  background: transparent;
  border: none;
}
.sort-button:hover {
  cursor: pointer;
}
.dropdown-icon {
  transform: rotate(360deg);
  transition-duration: 0.3s;
}
.dropdown-icon:hover {
  cursor: pointer;
}
.dropdown-icon-reversed {
  transform: rotate(180deg);
  transition-duration: 0.3s;
}

.dropdown-icon-reversed:hover {
  cursor: pointer;
}
</style>
