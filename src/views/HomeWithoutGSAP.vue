<template>
  <div class="wrapper">
    <div class="container">
      <nav>
        <h1>&#127848;Parlour</h1>
        <ion-icon name="search-outline"></ion-icon>
      </nav>

      <h2>
        A Parlour <br />
        for <span>delicious</span>
        gelato.
      </h2>

      <p class="learn-more">Learn More</p>

      <div class="cards scrollbar-hide">
        <Card
          v-for="(card, idx) in cards"
          :key="idx"
          :card="card"
          @click="handleCard(card)"
        />
      </div>

      <transition name="slide-up" appear mode="in-out">
        <div
          v-if="showModal && selectedCard"
          class="details"
          :style="{ backgroundImage: `url(${selectedCard.image})` }"
        >
          <button
            @click="showModal = false"
            class="w-6 h-6 flex justify-center items-center bg-transparent border-none outline-none"
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>

          <transition name="slide-up2" appear mode="in-out">
            <div class="details-text">
              <h2>{{ selectedCard.title }}</h2>
              <p>{{ selectedCard.desc }}</p>

              <transition name="bounce" appear mode="in-out">
                <button>More Information</button>
              </transition>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import Modal from "../components/Modal.vue";
import Card from "../components/Card.vue";

interface Detail {
  title: string;
  image: string;
  desc: string;
}

const modalKey = ref(0);
const showModal: Ref<boolean> = ref(false);
const selectedCard = ref<Detail>();

const cards = [
  {
    title: "Julia, Abuja",
    image: "/src/assets/images/ice-cream1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nemo",
  },
  {
    title: "Kunle, Lagos",
    image: "/src/assets/images/ice-cream2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid sit ipsam sapiente harum aspernatur saepe nam ipsa iusto! Necessitatibus incidunt adipisci perferendis dolor explicabo officiis fugit praesentium impedit aut.",
  },
  {
    title: "Emeka, Anambra",
    image: "/src/assets/images/ice-cream3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid sit ipsam sapiente harum aspernatur saepe nam ipsa iusto! Necessitatibus incidunt adipisci perferendis dolor explicabo officiis fugit praesentium impedit aut.",
  },
  {
    title: "Fuhad, Kano",
    image: "/src/assets/images/ice-cream4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid sit ipsam sapiente harum aspernatur saepe nam ipsa iusto! Necessitatibus incidunt adipisci perferendis dolor explicabo officiis fugit praesentium impedit aut.",
  },
  {
    title: "Bella, PortHarcout",
    image: "/src/assets/images/hotdog.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid sit ipsam sapiente harum aspernatur saepe nam ipsa iusto! Necessitatibus incidunt adipisci perferendis dolor explicabo officiis fugit praesentium impedit aut.",
  },
];

const handleCard = (card: Detail) => {
  modalKey.value++;
  selectedCard.value = card;
  showModal.value = true;
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 100vh;
  width: 100vw;
}
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
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container nav h1 {
  font-size: 30px;
  font-weight: 500;
  font-family: "Kaushan Script", sans-serif;
  padding: 0;
  margin: 0;
}

.container nav ion-icon {
  width: 18px;
  height: 18px;
  fill: white;
  cursor: pointer;
}

.container h2 {
  font-size: 32px;
  margin: 60px 24px 0 24px;
  text-align: left;
}

.container h2 span {
  color: #ffc107;
}

.container .learn-more {
  text-align: left;
  cursor: pointer;
}
.container p {
  font-size: 14px;
  margin: 12px 0px 10px 24px;
  color: #545d68;
}

.container .cards {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 20px;
  overflow-x: auto;
  margin-top: 40px;
  padding-left: 16px;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.details {
  width: 320px;
  height: 640px;
  background-size: cover;
  background-position: center;
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
  padding: 20px;
}

.details-text {
  display: grid;
  gap: 16px;
  position: absolute;
  bottom: 60px;
  left: 10px;
  right: 16px;
}

.details-text h2 {
  font-size: 22px;
  font-weight: 600;
}

.details-text p {
  font-size: 14px;
  color: white;
}

.details-text button {
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid white;
  border-radius: 20px;
  margin-left: 24px;
}

.slide-up-enter-from {
  opacity: 0;
  /* transform: translateY(-20px); */
  transform: translateY(100%);
  /* transform: translateY(0); */
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-in;
}
.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(150%);
}

.slide-up2-enter-active {
  animation: text-in 2.25s;
}

.bounce-enter-active {
  animation: bounce-in 2.3s;
  transition-delay: 2.3s;
}
.bounce-leave-active {
  animation: bounce-in 2.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes text-in {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
