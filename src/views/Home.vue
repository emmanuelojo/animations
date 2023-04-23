<template>
  <div class="container">
    <span class="parallax-text" text="FILA"> FILA </span>

    <img src="../assets/images/fila.png" alt="Fila Sneaker" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  margin: 0;
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
}

.parallax-text {
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-size: 25vw;
  font-weight: 900;
}

.parallax-text::after {
  content: attr(text);
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  color: transparent;
  -webkit-text-stroke: 0.15vw black;
}

img {
  width: 66vw;
  animation: sneakerAnimation 2s cubic-bezier(0.25, 1, 0.5, 1) infinite
    alternate;
}

@keyframes sneakerAnimation {
  0%,
  10% {
    transform: translate(100vw, 0) rotate(15deg);
  }
  90%,
  100% {
    transform: translate(-5vw, -5vw) rotate(-30deg);
  }
}
</style>
