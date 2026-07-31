export type Review = {
  name: string
  city: string
  rating: number
  text: string
  result?: string
}

export const reviews: Review[] = [
  {
    name: 'Ayesha Khan',
    city: 'Lahore',
    rating: 5,
    result: 'Lost 7 kg in 2 months',
    text: 'I was struggling with my weight after my second baby. SehatSlim helped control my cravings and I finally started losing weight without feeling weak. Delivery was fast and COD made it so easy.',
  },
  {
    name: 'Bilal Ahmed',
    city: 'Karachi',
    rating: 5,
    result: 'Lost 5 kg in 6 weeks',
    text: 'Honestly I was doubtful but combined with the diet plan on their website, I feel lighter and more active. No side effects and the energy boost is real.',
  },
  {
    name: 'Fatima Riaz',
    city: 'Islamabad',
    rating: 4,
    result: 'Reduced bloating',
    text: 'My digestion improved a lot and the bloating I always felt after meals is much better now. Slowly losing weight too. Very happy with the natural ingredients.',
  },
  {
    name: 'Usman Tariq',
    city: 'Faisalabad',
    rating: 5,
    result: 'Lost 8 kg in 3 months',
    text: 'Great product for the price. The team guided me on WhatsApp about how to use it properly. Cash on delivery is a big plus, I paid only when I received it.',
  },
  {
    name: 'Sana Malik',
    city: 'Rawalpindi',
    rating: 5,
    result: 'Fits into old clothes again',
    text: 'I can finally wear my old shalwar kameez comfortably. It took patience but with the meal suggestions it really worked for me. Recommended to my sisters too.',
  },
  {
    name: 'Hamza Sheikh',
    city: 'Multan',
    rating: 4,
    result: 'Better appetite control',
    text: 'The biggest change for me was appetite control. I stopped eating late night snacks and slowly the weight came down. Good quality herbal capsules.',
  },
]
