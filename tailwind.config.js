/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        iceCream1: "url('/src/assets/images/ice-cream1.jpg')",
        iceCream2: "url('/src/assets/images/ice-cream2.jpg')",
        iceCream3: "url('/src/assets/images/ice-cream3.jpg')",
        iceCream4: "url('/src/assets/images/ice-cream4.jpg')",
        hotdog: "url('/src/assets/images/hotdog.jpg')",
      },
    },
  },
  plugins: [],
};
