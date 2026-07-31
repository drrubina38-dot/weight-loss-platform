export type Meal = { time: string; title: string; items: string[] }
export type DietPlan = {
  slug: string
  name: string
  calories: string
  description: string
  meals: Meal[]
}

export const dietPlans: DietPlan[] = [
  {
    slug: 'balanced-1500',
    name: 'Balanced Desi Plan (~1500 kcal)',
    calories: '~1500 kcal/day',
    description: 'A balanced, everyday Pakistani meal plan for steady, healthy weight loss.',
    meals: [
      {
        time: 'Breakfast',
        title: 'Protein start',
        items: ['2 boiled eggs', '1 small whole-wheat roti', 'Tomato & cucumber slices', 'Green tea (no sugar)'],
      },
      {
        time: 'Mid-morning',
        title: 'Light snack',
        items: ['1 apple or seasonal fruit', 'A few almonds'],
      },
      {
        time: 'Lunch',
        title: 'Home-cooked meal',
        items: ['1 cup daal or chicken salan (less oil)', '1 medium roti', 'Large fresh salad', '1 cup plain dahi'],
      },
      {
        time: 'Evening',
        title: 'Tea time',
        items: ['Green tea or black coffee', 'Boiled chana (small bowl)'],
      },
      {
        time: 'Dinner',
        title: 'Light & early',
        items: ['Grilled chicken or vegetable sabzi', '1 small roti or salad only', 'Warm water with lemon'],
      },
    ],
  },
  {
    slug: 'high-protein-1800',
    name: 'High-Protein Plan (~1800 kcal)',
    calories: '~1800 kcal/day',
    description: 'Higher protein plan ideal for those who are active or doing workouts.',
    meals: [
      {
        time: 'Breakfast',
        title: 'Egg & oats',
        items: ['3 egg-white omelette with vegetables', 'Half cup oats with milk', 'Green tea'],
      },
      {
        time: 'Mid-morning',
        title: 'Yogurt bowl',
        items: ['1 cup Greek-style yogurt', '1 banana'],
      },
      {
        time: 'Lunch',
        title: 'Protein plate',
        items: ['Grilled chicken breast (150g)', '1 cup brown rice', 'Mixed salad with lemon'],
      },
      {
        time: 'Pre-workout',
        title: 'Energy snack',
        items: ['1 apple', 'A handful of peanuts'],
      },
      {
        time: 'Dinner',
        title: 'Light protein',
        items: ['Fish or chicken tikka', 'Steamed vegetables', 'Bowl of dahi'],
      },
    ],
  },
  {
    slug: 'vegetarian-1400',
    name: 'Vegetarian Plan (~1400 kcal)',
    calories: '~1400 kcal/day',
    description: 'A meat-free, plant-based plan rich in lentils, vegetables and dairy.',
    meals: [
      {
        time: 'Breakfast',
        title: 'Fruit & yogurt',
        items: ['1 cup yogurt with mixed fruit', '1 tbsp seeds or nuts', 'Green tea'],
      },
      {
        time: 'Mid-morning',
        title: 'Fresh fruit',
        items: ['1 orange or guava'],
      },
      {
        time: 'Lunch',
        title: 'Daal & sabzi',
        items: ['1 cup mixed daal', '1 medium roti', 'Vegetable sabzi (less oil)', 'Salad'],
      },
      {
        time: 'Evening',
        title: 'Chana chaat',
        items: ['Boiled chana with onion, tomato & lemon'],
      },
      {
        time: 'Dinner',
        title: 'Light veg',
        items: ['Palak or lauki sabzi', '1 small roti', 'Cucumber raita'],
      },
    ],
  },
]

export const weightLossTips = [
  'Drink a glass of water before every meal to feel fuller.',
  'Use a smaller plate to control portions naturally.',
  'Fill half your plate with vegetables and salad.',
  'Avoid sugary drinks — choose water or green tea instead.',
  'Walk for at least 30 minutes every day.',
  'Eat dinner early and keep it light.',
  'Get 7–8 hours of quality sleep each night.',
  'Cook at home with less oil and fewer fried foods.',
  'Snack on fruit, chana or nuts instead of biscuits and chips.',
  'Be consistent — aim for 0.5–1 kg of healthy weight loss per week.',
]

export function getDietPlan(slug: string) {
  return dietPlans.find((p) => p.slug === slug)
}
