<template>
  <div class="main-header-container">
    <div class="logo-container">
      <router-link :to="`/`">
        <img class="logo" src="/ikea.svg" alt="ikea_logo" />
      </router-link>
    </div>

    <div class="user-action-container">
      <div class="search-box">
        <button class="search-button">
          <span class="material-symbols-outlined search-icon" @click="onSearch">
            search
          </span>
        </button>
        <input
          type="text"
          placeholder="What are you looking for?"
          v-model="lv_search"
        />
      </div>
    </div>

    <div class="user-stat-container">
      <button class="user-button">
        <span class="material-symbols-outlined"> person_filled </span>
      </button>
      <span>Hey, Abhijit</span>
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
  margin: 0 1.5rem;
  justify-content: center;
  align-items: center;
}
.logo-container:hover {
  cursor: pointer;
}
.main-header-container {
  display: flex;
  padding: 1rem 0;
  justify-content: space-between;
}
.search-box {
  display: flex;
  width: 100%;
  padding: 0.1rem 1rem;
  background: #dfdfdf;
  /* border: 1.5px solid black; */
  /* border-radius: 25px 25px 25px 25px; */
  border-radius: 3rem;
}
.search-box input {
  border: none;
  width: 100%;
  padding: 0 1rem;
  background-color: #dfdfdf;
  color: black;
  font-size: 1rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
}
::placeholder {
  color: black;
}
.search-box input:focus {
  outline: none;
  color: black;
}
.search-box:focus {
  outline: none;
}
.user-action-container {
  width: 100%;
  display: flex;
  padding: 0.5rem;
}
.user-button {
  background: transparent;
  border: none;
}
.user-button img {
  width: 21px;
  height: 21px;
}
.user-button:hover {
  cursor: pointer;
}
.user-stat-container {
  display: flex;
  flex-shrink: 0;
  padding: 1rem;
  margin: 0 1rem;
  justify-content: center;
  align-items: center;
  font-family: "Hind", sans-serif;
  font-weight: 500;
}
.search-container {
  display: flex;
  width: 100%;
}
.search-button {
  padding: 0%;
  background: transparent;
  border: none;
  margin: 0 0.5rem;
}
.search-button:hover {
  cursor: pointer;
}
.search-icon {
  margin-top: 10px;
  font-size: 1.4rem;
}
</style>
