<template>
  <div class="price-filter">
    <div class="filter-wrapper" @click="handleDropdown">
      <button class="btn-transparent">Price</button>
    </div>
    <div v-if="dropDownActive" class="click-out" @click="handleDropdown"></div>
    <div v-if="dropDownActive" class="drop-down">
      <div>
        <span class="styled-input-checkbox">
          <span class="material-symbols-outlined check-icon" v-if="check1">
            check
          </span>
          <input
            type="checkbox"
            id="range1"
            class="og-input-checkbox"
            v-model="priceFilter"
            value="pf1"
            :checked="priceFilterChecks.check1"
            @change="handleCheck1"
        /></span>
        <span class="filter-option">Rs. 100 - Rs. 999</span>
      </div>
      <div>
        <span class="styled-input-checkbox">
          <span class="material-symbols-outlined check-icon" v-if="check2">
            check
          </span>
          <input
            type="checkbox"
            id="range2"
            class="og-input-checkbox"
            v-model="priceFilter"
            value="pf2"
            :checked="priceFilterChecks.check2"
            @change="handleCheck2"
        /></span>
        <span class="filter-option">Rs. 1000 - Rs. 1999</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dropDownActive: false,
      check1: "",
      check2: "",
      priceFilter: [],
      filterMap: {
        pf1: {
          low: 100,
          high: 999,
          type: "productPrice",
        },
        pf2: {
          low: 1000,
          high: 1999,
          type: "productPrice",
        },
      },
      filterConfig: [],
    };
  },

  computed: {
    ...mapState(["priceFilterChecks"]),
  },
  mounted() {
    console.log("state check");
    console.log(this.$store.state.priceFilterChecks.check1);
    this.check1 = this.$store.state.priceFilterChecks.check1;
    this.check2 = this.$store.state.priceFilterChecks.check2;
  },
  methods: {
    handleDropdown() {
      console.log("click");
      this.dropDownActive = !this.dropDownActive;
    },
    handleCheck1() {
      this.check1 = !this.check1;
      this.storeCheck();
      this.generateFilterConfig();
    },
    handleCheck2() {
      this.check2 = !this.check2;
      this.storeCheck();
      this.generateFilterConfig();
    },
    storeCheck() {
      console.log("event fired");
      console.log(this.priceFilter);
      this.$store.dispatch("recordCheck", this.priceFilter);
    },
    generateFilterConfig() {
      this.filterConfig.length = 0;
      for (let filter of this.priceFilter) {
        this.filterConfig.push(this.filterMap[filter]);
      }
      console.log(this.filterConfig);
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
.styled-input-checkbox {
  border: 1px solid black;
}
.og-input-checkbox {
  opacity: 0;
}
.og-input-checkbox:hover {
  cursor: pointer;
}
.check-icon {
  position: absolute;
}
</style>
