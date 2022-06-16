<template>
  <div class="main-header-container">
    <div class="logo-container" @click="routeToHome">
      <img class="logo" src="/ikea.svg" alt="ikea_logo" />
    </div>

    <div class="user-action-container">
      <div class="search-container">
        <input
          class="search-box"
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          v-model="lv_search"
        />
        <button class="search-button">
          <img
            class="search-icon"
            src="/search-button.svg"
            alt="search!"
            @click="onSearch"
          />
        </button>
      </div>
    </div>

    <div class="user-stat-container">
      <button class="user-button">
        <img src="/user-icon.png" alt="User" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      lv_search: "",
    };
  },
  methods: {
    onSearch() {
      alert(this.lv_search);
    },
    routeToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.logo {
  width: 100px;
  height: 30px;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-container:hover {
  cursor: pointer;
}
.main-header-container {
  display: flex;
  justify-content: space-between;
}
.search-box {
  padding: 10px;
  width: 90%;
  height: 25px;
  margin-right: 1%;
  background: transparent;
  border: 1px solid black;
  border-radius: 25px 25px 25px 25px;
}
.search-box:focus {
  outline: none;
}
.user-action-container {
  width: 35%;
  display: flex;
}
.user-button {
  background: transparent;
  border: none;
}
.user-button:hover {
  cursor: pointer;
}
.user-stat-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-container {
  display: flex;
  width: 100%;
}
.search-button {
  width: 45px;
  height: 45px;
  background: transparent;
  border: none;
}
.search-button:hover {
  cursor: pointer;
}
.search-icon {
  width: 25px;
  height: 25px;
}
</style>
