export type BlogSection = { heading?: string; body: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Weight Loss"
    | "Healthy Eating"
    | "Exercise"
    | "Lifestyle"
    | "Nutrition";
  date: string;
  readTime: string;
  author: string;
  content: BlogSection[];
};

export const posts: BlogPost[] = [
  {
    slug: "10-natural-ways-to-lose-weight-in-pakistan",
    title: "10 Natural Ways to Lose Weight in Pakistan",
    excerpt:
      "Practical, budget-friendly and desi-friendly tips to lose weight naturally without crash diets or expensive gym memberships.",
    category: "Weight Loss",
    date: "2026-01-12",
    readTime: "6 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Losing weight in Pakistan does not have to mean expensive supplements or starving yourself. With a few simple, consistent habits built around our local food and lifestyle, you can lose weight naturally and keep it off.",
        ],
      },
      {
        heading: "1. Start your day with warm lemon water",
        body: [
          "A glass of warm water with lemon first thing in the morning helps kickstart your metabolism and keeps you hydrated. It is a cheap, easy habit that supports digestion throughout the day.",
        ],
      },
      {
        heading: "2. Replace white rice with brown rice or roti",
        body: [
          "White rice is a staple in most Pakistani homes, but swapping it for brown rice or a whole-wheat roti adds fibre, keeps you full longer and prevents blood-sugar spikes.",
        ],
      },
      {
        heading: "3. Control your portions",
        body: [
          "You do not have to give up your favourite salan — just reduce the portion. Use a smaller plate and fill half of it with vegetables or salad before adding rice or roti.",
        ],
      },
      {
        heading: "4. Cut down on sugary chai and drinks",
        body: [
          "Two or three cups of sweet chai a day can add hundreds of hidden calories. Reduce sugar gradually or switch to green tea, which supports fat metabolism.",
        ],
      },
      {
        heading: "5. Walk after meals",
        body: [
          "A simple 10–15 minute walk after dinner improves digestion and helps control blood sugar. It is free and one of the most effective weight-loss habits you can build.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Small, consistent changes beat extreme diets every time. Combine these habits with plenty of water, good sleep and a natural herbal supplement like SehatSlim for steady, sustainable results.",
        ],
      },
    ],
  },
  {
    slug: "best-desi-foods-for-weight-loss",
    title: "Best Desi Foods for Weight Loss",
    excerpt:
      "You can eat delicious Pakistani food and still lose weight. Here are the healthiest desi foods to add to your plate.",
    category: "Healthy Eating",
    date: "2026-01-18",
    readTime: "5 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Weight loss does not mean giving up desi food. Many traditional Pakistani foods are naturally healthy and filling when prepared the right way.",
        ],
      },
      {
        heading: "Daal (lentils)",
        body: [
          "Lentils are packed with plant protein and fibre, keeping you full for hours. Cook them with less oil and enjoy with a small roti for a balanced, low-calorie meal.",
        ],
      },
      {
        heading: "Sabzi (vegetable curries)",
        body: [
          "Vegetable dishes like bhindi, karela, palak and lauki are low in calories and high in nutrients. Use minimal oil and plenty of tomatoes, onion and spices for flavour.",
        ],
      },
      {
        heading: "Dahi (yogurt)",
        body: [
          "Plain yogurt is rich in protein and probiotics that support digestion. Have it as raita or with fruit instead of sugary desserts.",
        ],
      },
      {
        heading: "Chana and beans",
        body: [
          "Boiled chana makes a great high-protein snack that curbs cravings between meals — far better than fried samosas or biscuits.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Focus on whole, home-cooked desi foods with less oil and sugar. Pair them with our free diet plans for a simple, sustainable eating routine.",
        ],
      },
    ],
  },
  {
    slug: "simple-home-workouts-no-equipment",
    title: "Simple Home Workouts With No Equipment",
    excerpt:
      "No gym, no problem. These beginner-friendly home workouts help you burn fat and build strength using just your body weight.",
    category: "Exercise",
    date: "2026-01-24",
    readTime: "5 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "You do not need an expensive gym membership to get fit. These simple body-weight exercises can be done at home in 20–30 minutes.",
        ],
      },
      {
        heading: "Brisk walking or marching in place",
        body: [
          "Start every session with 5 minutes of brisk walking to warm up your muscles and raise your heart rate.",
        ],
      },
      {
        heading: "Squats",
        body: [
          "Squats strengthen your legs and burn plenty of calories. Aim for 3 sets of 12–15 reps.",
        ],
      },
      {
        heading: "Push-ups (or wall push-ups for beginners)",
        body: [
          "Push-ups build upper-body strength. If regular push-ups are too hard, start against a wall.",
        ],
      },
      {
        heading: "Plank",
        body: [
          "Hold a plank for 20–30 seconds to strengthen your core. Increase the time as you get stronger.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Consistency matters more than intensity. Exercise 4–5 times a week, stay hydrated and support your progress with a balanced diet.",
        ],
      },
    ],
  },
  {
    slug: "how-much-water-should-you-drink",
    title: "How Much Water Should You Drink to Lose Weight?",
    excerpt:
      "Water is one of the most underrated weight-loss tools. Learn how much you really need and when to drink it.",
    category: "Lifestyle",
    date: "2026-01-30",
    readTime: "4 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Staying hydrated is one of the simplest things you can do to support weight loss, yet most people do not drink enough water.",
        ],
      },
      {
        heading: "How much water do you need?",
        body: [
          "A general guideline is 8–10 glasses (about 2–2.5 litres) per day. You may need more in Pakistan’s hot summers or if you are active.",
        ],
      },
      {
        heading: "Drink a glass before meals",
        body: [
          "Drinking water before you eat helps you feel fuller, so you naturally eat smaller portions.",
        ],
      },
      {
        heading: "Swap sugary drinks for water",
        body: [
          "Replacing soft drinks and sugary juices with water can save you hundreds of calories every day.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Keep a water bottle with you and sip throughout the day. Hydration boosts metabolism and reduces false hunger.",
        ],
      },
    ],
  },
  {
    slug: "understanding-calories-and-metabolism",
    title: "Understanding Calories and Metabolism",
    excerpt:
      "What are calories, and how does your metabolism affect weight loss? A simple guide for beginners.",
    category: "Nutrition",
    date: "2026-02-05",
    readTime: "6 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "To lose weight effectively, it helps to understand two things: calories and metabolism. Do not worry — you do not need to be a scientist.",
        ],
      },
      {
        heading: "What is a calorie?",
        body: [
          "A calorie is a unit of energy from food. Your body burns calories for everything from breathing to walking. When you eat fewer calories than you burn, you lose weight.",
        ],
      },
      {
        heading: "What is metabolism?",
        body: [
          "Metabolism is the rate at which your body burns calories. A faster metabolism burns more calories even at rest. Muscle mass, activity level and age all affect it.",
        ],
      },
      {
        heading: "How to find your calorie needs",
        body: [
          "Use our free Calorie Calculator to estimate your daily calorie needs based on your age, gender, height, weight and activity level. Then aim for a small, sustainable deficit.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "You do not need to count every calorie. Focus on whole foods, portion control and staying active.",
        ],
      },
    ],
  },
  {
    slug: "healthy-breakfast-ideas-pakistani",
    title: "Healthy Pakistani Breakfast Ideas",
    excerpt:
      "Start your day right with these quick, nutritious and desi breakfast ideas that support weight loss.",
    category: "Healthy Eating",
    date: "2026-02-11",
    readTime: "5 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Breakfast sets the tone for your whole day. A protein-rich, balanced breakfast keeps you full and reduces cravings.",
        ],
      },
      {
        heading: "Anda (egg) and vegetables",
        body: [
          "Two boiled or lightly fried eggs with tomatoes and onions is a high-protein, low-carb start to the day.",
        ],
      },
      {
        heading: "Oats with fruit",
        body: [
          "Oats are high in fibre and keep you full for hours. Add banana, apple or a few nuts for flavour and nutrition.",
        ],
      },
      {
        heading: "Dahi with fruit",
        body: [
          "Plain yogurt with seasonal fruit is a light, refreshing and protein-rich breakfast.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Avoid heavy, oily parathas every day. Choose protein and fibre to stay energised and avoid mid-morning snacking.",
        ],
      },
    ],
  },
  {
    slug: "why-sleep-matters-for-weight-loss",
    title: "Why Sleep Matters for Weight Loss",
    excerpt:
      "Poor sleep can sabotage your weight-loss efforts. Here is how better sleep helps you lose weight.",
    category: "Lifestyle",
    date: "2026-02-17",
    readTime: "4 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Many people focus only on diet and exercise, but sleep is an equally important part of losing weight.",
        ],
      },
      {
        heading: "Sleep and hunger hormones",
        body: [
          "Lack of sleep increases the hunger hormone ghrelin and reduces the fullness hormone leptin, making you crave more food, especially sugary snacks.",
        ],
      },
      {
        heading: "Aim for 7–8 hours",
        body: [
          "Most adults need 7–8 hours of quality sleep. A regular sleep schedule keeps your metabolism balanced.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Prioritise sleep as much as diet and exercise. Avoid screens and heavy meals right before bed.",
        ],
      },
    ],
  },
  {
    slug: "green-tea-benefits-for-weight-loss",
    title: "Green Tea Benefits for Weight Loss",
    excerpt:
      "Green tea is a natural fat-burning drink. Learn how it works and how to add it to your routine.",
    category: "Nutrition",
    date: "2026-02-23",
    readTime: "4 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Green tea is one of the healthiest drinks you can add to your weight-loss routine, and it is easily available in Pakistan.",
        ],
      },
      {
        heading: "How green tea helps",
        body: [
          "Green tea is rich in antioxidants called catechins that support metabolism and fat oxidation. It also provides a gentle energy boost without the crash of sugary drinks.",
        ],
      },
      {
        heading: "When to drink it",
        body: [
          "Enjoy a cup after meals to aid digestion, or in the morning for a natural energy lift. Avoid adding sugar.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Green tea is a simple, affordable habit. SehatSlim also contains green tea extract to support your daily fat-burning goals.",
        ],
      },
    ],
  },
  {
    slug: "avoiding-common-weight-loss-mistakes",
    title: "Avoiding Common Weight-Loss Mistakes",
    excerpt:
      "Stuck despite your efforts? These common mistakes might be holding back your weight-loss progress.",
    category: "Weight Loss",
    date: "2026-03-01",
    readTime: "5 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "If the scale is not moving, you might be making one of these common mistakes.",
        ],
      },
      {
        heading: "Skipping meals",
        body: [
          "Skipping meals often leads to overeating later. Eat regular, balanced meals to keep hunger under control.",
        ],
      },
      {
        heading: "Relying on crash diets",
        body: [
          "Extreme diets are hard to maintain and slow your metabolism. Choose sustainable habits instead.",
        ],
      },
      {
        heading: "Drinking your calories",
        body: [
          "Sugary chai, juices and soft drinks add hidden calories. Switch to water or green tea.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Be patient and consistent. Healthy weight loss is 0.5–1 kg per week — slow and steady wins.",
        ],
      },
    ],
  },
  {
    slug: "staying-motivated-on-your-journey",
    title: "Staying Motivated on Your Weight-Loss Journey",
    excerpt:
      "Motivation fades, but systems last. Here is how to stay consistent and reach your goals.",
    category: "Lifestyle",
    date: "2026-03-07",
    readTime: "5 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Losing weight is a journey, and staying motivated is often the hardest part. These strategies will keep you going.",
        ],
      },
      {
        heading: "Set small, realistic goals",
        body: [
          "Instead of aiming to lose 20 kg, focus on the next 2 kg. Small wins build momentum and confidence.",
        ],
      },
      {
        heading: "Track your progress",
        body: [
          "Take photos and measurements, not just weight. Sometimes the scale hides real progress in inches and energy.",
        ],
      },
      {
        heading: "Find support",
        body: [
          "Share your goals with family or friends. A supportive environment makes a huge difference.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Build habits you can maintain for life. Celebrate progress and be kind to yourself on tough days.",
        ],
      },
    ],
  },
  {
    slug: "how-to-lose-belly-fat-naturally",
    title: "How to Lose Belly Fat Naturally: A Complete Guide for Beginners",
    excerpt:
      "Discover practical and science-based tips to reduce belly fat naturally with healthy eating, exercise and sustainable lifestyle habits.",
    category: "Weight Loss",
    date: "2026-08-02",
    readTime: "8 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Belly fat is one of the most common health concerns among men and women in Pakistan. While many products promise quick results, there is no magic solution that removes belly fat overnight. Healthy and long-lasting results come from consistent habits, balanced nutrition and regular physical activity.",
          "If you are looking for safe and natural ways to reduce belly fat, this guide explains practical strategies that can fit into everyday Pakistani lifestyles. The goal is not only to improve appearance but also to support overall health and wellbeing.",
        ],
      },

      {
        heading: "What Causes Belly Fat?",
        body: [
          "Belly fat develops for many reasons, including consuming more calories than the body uses, sitting for long periods, poor sleep, stress and limited physical activity. Genetics and age can also influence where the body stores fat.",
          "Understanding these factors makes it easier to create realistic habits instead of searching for quick fixes.",
        ],
      },

      {
        heading: "1. Eat More Protein",
        body: [
          "Protein helps keep you full for longer, supports muscle maintenance and may reduce unnecessary snacking. Include foods such as eggs, chicken, fish, lentils, beans and yogurt in your daily meals.",
        ],
      },

      {
        heading: "2. Reduce Sugary Foods and Drinks",
        body: [
          "Sugary drinks, desserts and excessive sweets add extra calories without providing lasting fullness. Replacing soft drinks with water or unsweetened beverages is a simple step toward reducing calorie intake.",
        ],
      },
      {
        heading: "3. Increase Daily Physical Activity",
        body: [
          "Regular exercise is one of the most effective ways to reduce body fat. Aim for at least 30 to 45 minutes of brisk walking, cycling or other physical activities most days of the week. Strength training can also help preserve muscle while losing fat.",
        ],
      },

      {
        heading: "4. Eat More Fibre",
        body: [
          "Foods rich in fibre help you stay full for longer and may reduce overeating. Vegetables, fruits, oats, lentils and whole grains are excellent choices for a balanced diet.",
        ],
      },

      {
        heading: "5. Get Enough Sleep",
        body: [
          "Poor sleep can affect hunger hormones and increase cravings for high-calorie foods. Most adults benefit from 7 to 8 hours of quality sleep each night.",
        ],
      },

      {
        heading: "6. Stay Hydrated",
        body: [
          "Drinking enough water throughout the day supports normal body functions and may help control appetite. Many people confuse thirst with hunger, leading to unnecessary snacking.",
        ],
      },

      {
        heading: "7. Manage Stress",
        body: [
          "Long-term stress may encourage unhealthy eating habits. Relaxation techniques, regular walks, prayer, hobbies and spending time with family can help reduce stress levels.",
        ],
      },

      {
        heading: "Common Mistakes to Avoid",
        body: [
          "Avoid crash diets, skipping meals and expecting instant results. Sustainable weight management comes from healthy habits maintained over time rather than extreme short-term approaches.",
        ],
      },
      {
        heading: "Can You Target Belly Fat Only?",
        body: [
          "A common misconception is that you can lose fat from only one area of the body. In reality, the body loses fat gradually from different areas. Regular exercise, healthy eating and patience are the most effective combination for reducing overall body fat, including belly fat.",
        ],
      },

      {
        heading: "Healthy Habits That Make a Difference",
        body: [
          "Small daily habits often produce the biggest long-term results. Choose home-cooked meals, control portion sizes, stay active, drink enough water and remain consistent with your routine. Even modest improvements maintained over several months can have a meaningful impact on your health.",
        ],
      },

      {
        heading: "Final Thoughts",
        body: [
          "There is no shortcut to healthy weight loss. Focus on building sustainable habits instead of searching for quick fixes. A balanced diet, regular physical activity, quality sleep and consistency remain the foundation of long-term success.",
          "If you are following a healthy lifestyle and are looking for additional support, you can also explore Dr Rubina Phaki as part of your overall weight management routine. Remember that no supplement replaces a healthy diet and active lifestyle.",
        ],
      },
    ],
  },
  {
    slug: "best-pakistani-diet-plan-for-weight-loss",
    title: "Best Pakistani Diet Plan for Weight Loss (7-Day Meal Plan)",
    excerpt:
      "Follow this simple 7-day Pakistani diet plan for healthy and sustainable weight loss using affordable local foods and balanced nutrition.",
    category: "Healthy Eating",
    date: "2026-08-03",
    readTime: "9 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "Many people believe they must stop eating Pakistani food to lose weight. The truth is that weight loss is possible while enjoying traditional meals. The key is choosing balanced portions, cooking with less oil and building healthy daily habits.",
          "This seven-day Pakistani meal plan is designed for beginners who want practical ideas using foods commonly available across Pakistan. It focuses on consistency, balanced nutrition and sustainable lifestyle changes rather than extreme dieting.",
        ],
      },

      {
        heading: "General Guidelines Before You Start",
        body: [
          "Drink 8 to 10 glasses of water every day, include protein in every meal, avoid sugary drinks, choose whole foods whenever possible and stay physically active for at least 30 minutes daily.",
        ],
      },

      {
        heading: "Day 1",
        body: [
          "Breakfast: Two boiled eggs with one whole wheat roti and a cup of unsweetened tea.",
          "Lunch: Grilled chicken with mixed salad and one whole wheat roti.",
          "Dinner: Lentil curry (daal) with cooked vegetables and a small roti.",
        ],
      },

      {
        heading: "Day 2",
        body: [
          "Breakfast: Plain yogurt with oats and seasonal fruit.",
          "Lunch: Chicken vegetable soup with one whole wheat roti.",
          "Dinner: Grilled fish with cucumber and tomato salad.",
        ],
      },

      {
        heading: "Day 3",
        body: [
          "Breakfast: Vegetable omelette with one slice of whole wheat bread.",
          "Lunch: Chickpea salad with fresh vegetables.",
          "Dinner: Spinach (palak) with grilled chicken and a small roti.",
        ],
      },
      {
        heading: "Day 4",
        body: [
          "Breakfast: A bowl of oatmeal with a handful of almonds.",
          "Lunch: Grilled chicken tikka with fresh salad.",
          "Dinner: Mixed vegetable curry with one whole wheat roti.",
        ],
      },

      {
        heading: "Day 5",
        body: [
          "Breakfast: Plain yogurt with apple slices.",
          "Lunch: Daal with cucumber salad and one whole wheat roti.",
          "Dinner: Grilled fish with steamed vegetables.",
        ],
      },

      {
        heading: "Day 6",
        body: [
          "Breakfast: Two boiled eggs and a cup of green tea.",
          "Lunch: Chicken salad with olive oil and lemon dressing.",
          "Dinner: Lauki or tinda cooked with less oil and one small roti.",
        ],
      },

      {
        heading: "Day 7",
        body: [
          "Breakfast: Vegetable omelette with tomatoes and cucumbers.",
          "Lunch: Brown rice with grilled chicken and vegetables.",
          "Dinner: Lentil soup with mixed salad.",
        ],
      },

      {
        heading: "Healthy Snack Ideas",
        body: [
          "Choose healthy snacks such as fresh fruit, roasted chickpeas, plain yogurt, a handful of almonds or walnuts, cucumber slices or boiled eggs instead of biscuits, chips and sugary snacks.",
        ],
      },

      {
        heading: "Foods to Limit",
        body: [
          "Reduce sugary drinks, bakery products, deep-fried foods, excessive sweets and oversized portions. These foods can make it harder to maintain a calorie deficit.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        body: [
          "Can I eat roti during weight loss? Yes. Whole wheat roti can be included in a balanced diet when eaten in appropriate portions.",
          "Can I eat rice? Yes. Brown rice or a small serving of white rice can fit into a healthy eating plan if your overall calorie intake is balanced.",
          "How much weight can I lose in one month? Healthy and sustainable weight loss varies from person to person. Focus on building consistent habits instead of expecting rapid results.",
        ],
      },

      {
        heading: "Tips for Better Results",
        body: [
          "Walk for at least 30 to 45 minutes daily, drink enough water, avoid eating late at night, sleep for 7 to 8 hours and remain consistent with your meal plan. Small improvements maintained over time often produce the best long-term results.",
        ],
      },

      {
        heading: "Final Thoughts",
        body: [
          "A healthy Pakistani diet does not require expensive foods or complicated recipes. By choosing balanced meals, controlling portion sizes and staying physically active, you can work toward your weight management goals while still enjoying traditional Pakistani cuisine.",
          "If you are looking for additional support alongside healthy eating and exercise, you can also learn more about Dr Rubina Phaki. It is intended to complement a healthy lifestyle and should not be considered a replacement for a balanced diet or regular physical activity.",
        ],
      },
    ],
  },
  {
    slug: "weight-loss-after-pregnancy-safe-tips",
    title: "Weight Loss After Pregnancy: Safe Tips for New Mothers",
    excerpt:
      "Learn safe and practical ways to lose weight after pregnancy with healthy eating, gentle exercise and sustainable lifestyle habits.",
    category: "Weight Loss",
    date: "2026-08-04",
    readTime: "8 min read",
    author: "SehatSlim Team",
    content: [
      {
        body: [
          "After pregnancy, many mothers want to return to a healthy weight, but it is important to approach weight loss with patience and care. Your body needs time to recover after childbirth, and focusing on overall health is more important than rapid weight loss.",
          "This guide shares practical tips for new mothers who want to lose weight safely while maintaining energy levels and supporting their daily routine.",
        ],
      },

      {
        heading: "Give Your Body Time to Recover",
        body: [
          "Every pregnancy and delivery is different. Many healthcare professionals recommend allowing your body adequate time to recover before starting a structured weight-loss routine. If you have recently given birth or had a medical procedure, follow your healthcare provider’s advice before making major changes to your diet or activity level.",
        ],
      },

      {
        heading: "Eat Balanced Meals",
        body: [
          "Choose meals that include lean protein, vegetables, fruits, whole grains and healthy fats. Avoid skipping meals, as doing so may leave you feeling tired and increase the likelihood of overeating later in the day.",
        ],
      },

      {
        heading: "Stay Hydrated",
        body: [
          "Drink enough water throughout the day. Proper hydration supports overall health and may also help reduce unnecessary snacking caused by confusing thirst with hunger.",
        ],
      },

      {
        heading: "Start With Gentle Exercise",
        body: [
          "Begin with light activities such as walking, stretching or other gentle movements if they are appropriate for your stage of recovery. Increase activity gradually instead of trying intense workouts immediately.",
        ],
      },
      {
        heading: "Choose Healthy Snacks",
        body: [
          "Instead of processed snacks, choose healthier options such as fresh fruit, plain yogurt, boiled eggs, roasted chickpeas or a small handful of nuts. These foods provide nutrients while helping you stay satisfied between meals.",
        ],
      },

      {
        heading: "Sleep Whenever Possible",
        body: [
          "Sleep can be challenging with a newborn, but getting enough rest whenever possible supports overall wellbeing. Poor sleep may increase cravings and make healthy eating more difficult.",
        ],
      },

      {
        heading: "Manage Stress in Healthy Ways",
        body: [
          "Adjusting to life with a new baby can be stressful. Gentle walks, spending time with family, relaxation techniques and asking for support when needed can help reduce stress and support healthy habits.",
        ],
      },

      {
        heading: "Breastfeeding and Nutrition",
        body: [
          "If you are breastfeeding, focus on eating a balanced diet and staying well hydrated. Weight-loss goals should never compromise your nutritional needs or your baby’s wellbeing. If you have questions about your diet while breastfeeding, seek guidance from a qualified healthcare professional.",
        ],
      },

      {
        heading: "Common Mistakes to Avoid",
        body: [
          "Avoid crash diets, skipping meals or starting intense exercise too soon after delivery. These approaches are difficult to maintain and may interfere with recovery. Long-term healthy habits are generally more effective than quick fixes.",
        ],
      },

      {
        heading: "Be Patient With Your Progress",
        body: [
          "Every mother recovers at a different pace. Comparing your progress with others can be discouraging. Focus on steady improvements in your eating habits, activity levels and overall health rather than the number on the scale.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        body: [
          "When can I start trying to lose weight after pregnancy? The right time varies for every mother. Follow your healthcare provider’s advice before beginning a structured weight-loss plan.",
          "Can I exercise every day? Gentle daily activity may be suitable for many people, but the type and intensity of exercise should match your recovery stage and overall health.",
          "How quickly should I expect results? Healthy weight management is a gradual process. Focus on consistent habits rather than rapid weight loss.",
        ],
      },

      {
        heading: "Healthy Daily Routine for New Mothers",
        body: [
          "Start your morning with a nutritious breakfast, drink water regularly, include protein in every meal, take short walks when possible and prioritise rest whenever your baby is sleeping. Small daily habits often lead to meaningful long-term improvements.",
        ],
      },

      {
        heading: "Final Thoughts",
        body: [
          "Losing weight after pregnancy should never feel like a race. A balanced diet, gentle physical activity, good hydration and patience are the foundations of healthy progress. Celebrate small improvements and give your body the time it needs to recover.",
          "If you are looking for additional support as part of a healthy lifestyle, you can also learn more about Dr Rubina Phaki. It is designed to complement healthy eating and regular physical activity, not replace them. Individual results vary, and maintaining healthy habits remains the most important part of long-term weight management.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
