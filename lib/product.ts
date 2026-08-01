export const product = {
  slug: "dr-rubina-herbal-weight-loss",
  name: "Dr. Rubina Herbal Weight Loss Powder",
  shortName: "Dr. Rubina",
  price: 1999,
  oldPrice: 2999,
  rating: 4.9,
  reviewCount: 100000,
  servings: "1 Jar (30 Days Supply)",

  tagline:
    "A natural herbal wellness formula designed to support healthy weight management when combined with a balanced diet and active lifestyle.",

  images: [
    "/product-bottle.png",
    "/ingredients.png",
    "/product-2.png",
    "/product-3.png",
    "/product-4.png",
    "/product-5.png",
    "/product-6.png",
  ],

  benefits: [
    "Supports healthy weight management",
    "Helps maintain a balanced lifestyle",
    "Made with carefully selected herbal ingredients",
    "Supports digestive wellness",
    "Easy to include in your daily routine",
    "No harsh stimulants",
  ],

  ingredients: [
    {
      name: "Natural Herbal Blend",
      detail: "A blend of carefully selected herbal ingredients.",
    },
    {
      name: "Green Tea Extract",
      detail: "Traditionally used as part of healthy lifestyle routines.",
    },
    {
      name: "Ginger",
      detail: "Traditionally used to support digestion.",
    },
    {
      name: "Cinnamon",
      detail: "A commonly used natural ingredient.",
    },
  ],

  usage: [
    "Use according to the instructions provided with the product.",
    "Drink enough water throughout the day.",
    "For best results, combine with a balanced diet and regular physical activity.",
  ],

  disclaimer:
    "This product is not intended to diagnose, treat, cure or prevent any disease. Individual results may vary. Consult your healthcare professional before use if you are pregnant, nursing, taking medication, or have any medical condition.",
};

export type Product = typeof product;
