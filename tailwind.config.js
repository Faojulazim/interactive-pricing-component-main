/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        SoftCyanFullSliderBar: "hsl(174, 77%, 80%)",
        StrongCyanSliderBackround: "hsl(174, 86%, 45%)",
        LightGrayishRedDiscountBackground: "hsl(14, 92%, 95%)",
        LightRedDiscountText: "hsl(15, 100%, 70%)",
        PaleBlueCTAText: "hsl(226, 100%, 87%)",
        WhitePricingComponentBackground: "hsl (0, 0%, 100%)",
        VeryPaleBlueMainBackground: "hsl(230, 100%, 99%)",
        LightGrayishBlueEmptySliderBar: "hsl(224, 65%, 95%)",
        LightGrayishBlueToggleBackground: "hsl(223, 50%, 87%)",
        GrayishBlueText: "hsl(225, 20%, 60%)",
        DarkDesaturatedBlueTextAndCTABackground: "hsl(227, 35%, 25%)",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        eesm: "375px",
        esm: "425px",
      },
    },
  },
  plugins: [],
};
