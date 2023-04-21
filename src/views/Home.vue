<template>
  <div class="container">
    <nav>
      <h1>Parlour</h1>
      <!-- <ion-icon name="search-outline"></ion-icon> -->
    </nav>

    <h2>
      A Parlour <br />
      is a <span>reception</span>
    </h2>
    <p>Learn More</p>

    <div @click="handleCard1" class="card card-1" ref="card1">
      <h3>Julia, Negeria</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nemo
      </p>

      <button>More Information</button>
      <!-- <ion-icon name="arrow-back-outline"></ion-icon> -->
    </div>

    <div class="card card-2">
      <h3>Olowo, Nigeria</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  card1.value = document.querySelector(".card-1");
  reverse.value = document.querySelector(".left");
});

// const card1 = ref() as Ref<HTMLDivElem ent>;
const card1 = ref();
const reverse = ref();

const t1 = ref(gsap.timeline({ paused: true, reversed: true }));

const handleCard1 = (e: any) => {
  e.stopPropagation();
  t1.value.play();
};

const handleReverse = (e: any) => {
  e.stopPropagation();
  t1.value.reverse();
};

// t1.value.to(".card-1", {
//   ease: Power1.easeInOut,
//   height: 640,
//   width: 320,
//   top: 0,
//   left: 0,
//   margin: 0,
// });
t1.value.to(".card-1", {
  //   ease: Power1.easeInOut,
  height: 640,
  width: 320,
  top: 0,
  left: 0,
  margin: 0,
  duration: 0.5,
});

t1.value.to(
  ".card-2",
  {
    duration: 0.5,
    x: 400,
  },
  0.1
);

t1.value.to(
  ".card-1 h3",
  {
    //   ease: Power1.easeInOut,
    duration: 0.5,
    fontSize: 24,
    margin: "32px",
    y: -250,
  },
  0.1
);

t1.value.to(
  ".card-1 p",
  {
    //   ease: Power1.easeInOut,
    duration: 0.5,
    padding: 24,
    marginLeft: 8,
    y: -580,
  },
  0.2
);

t1.value.to(".card-1 button", {
  //   ease: "elastic.out(1,.9)",
  duration: 0.5,
  bottom: "60px",
  marginLeft: 8,
});

t1.value.to(".left", {
  //   ease: "elastic.out(1,.9)",
  duration: 0.5,
  top: "24px",
  left: "24px",
});
</script>

<style scoped>
.container {
  width: 320px;
  height: 640px;
  background: linear-gradient(to right bottom, #323941, #061018);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 0px 56px 72px -30px rgba(50, 55, 63, 0.66);
  color: white;
  font-family: "Poppins", sans-serif;
  line-height: 1.7;
  overflow: hidden;
}

.container nav {
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container nav h1 {
  font-size: 30px;
  font-weight: 500;
  font-family: "Kaushan Script", sans-serif;
}

.container nav ion-icon {
  width: 18px;
  height: 18px;
  fill: white;
}

.container h2 {
  font-size: 32px;
  margin: 60px 24px 0 24px;
}

.container h2 span {
  color: #ffc107;
}

.container p {
  font-size: 14px;
  margin: 12px 0px 10px 24px;
  color: #545d68;
}

.container .card {
  width: 160px;
  height: 220px;
  position: absolute;
  margin-top: 40px;
  box-shadow: 0px 5px 10px rgba(7, 7, 7, 0.226);
  background-position: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px;
}

.container .card-1 {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  left: 24px;
  margin-right: 20px;
  background-image: linear-gradient(
      to bottom,
      rgba(34, 34, 34, 0.048),
      rgba(34, 34, 34, 0.596)
    ),
    url("../assets/images/ice-cream1.jpg");
  cursor: pointer;
}

.container .card-2 {
  right: -50px;
  background-image: linear-gradient(
      to bottom,
      rgba(34, 34, 34, 0.048),
      rgba(34, 34, 34, 0.596)
    ),
    url("../assets/images/ice-cream2.jpg");
}

.container .card p {
  position: absolute;
  color: white;
  bottom: -50px;
}

.container .card button {
  position: absolute;
  bottom: -500px;
  padding: 10px;
  color: white;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.212);
  border-radius: 99em;
  left: 24px;
  outline: none;
}

.container .card .left {
  position: absolute;
  top: -100px;
  width: 20px;
  height: 20px;
  fill: white;
  cursor: pointer;
}

.container .card h3 {
  position: absolute;
  bottom: 0;
  margin: 15px 20px;
  font-size: 14px;
  font-weight: 500;
}
</style>
