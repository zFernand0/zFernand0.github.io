/**
 * Travel data for zFernand0.github.io
 * Contains all itinerary data for travel pages
 */

const TravelData = {
  japan: {
    title: "🇯🇵 Japan Adventure",
    subtitle: "August 30th - September 5th",
    description:
      "This action-packed itinerary is designed for early risers ready to see the best of Japan in a week. The chart below visualizes the allocation of your activities, highlighting a trip rich in sightseeing and cultural experiences.",
    tips: [
      "Luggage Forwarding: Use services like Yamato Transport (Takkyubin) to send large luggage between hotels (e.g., Tokyo ➡️ Kyoto).",
      "Japan Rail Pass: A 7-Day Pass is likely cost-effective. Activate on Day 2.",
      "Pre-Bookings: Reserve tickets for Shibuya Sky, Mt. Fuji buses, tea ceremonies, and especially Universal Studios Japan (USJ) well in advance.",
      "Connectivity: A pocket WiFi or local SIM is essential for navigation.",
      "Cash: Carry some Yen for smaller vendors, street food, and shrines.",
    ],
    activities: [
      // Day 1
      {
        day: 1,
        city: "tokyo",
        theme: "arrival",
        title: "Arrival & Airport Procedures",
        desc: "Land at Narita (NRT), clear customs, get WiFi/SIM, buy N'EX ticket.",
      },
      {
        day: 1,
        city: "tokyo",
        theme: "travel",
        title: "Travel to Hotel",
        desc: "Take Narita Express and check-in to your hotel.",
      },
      {
        day: 1,
        city: "tokyo",
        theme: "modern",
        title: "Shibuya Immersion",
        desc: "Experience Shibuya Scramble Crossing & Hachiko statue.",
      },
      { day: 1, city: "tokyo", theme: "shopping", title: "Shopping & Snacks", desc: "Explore Don Quijote MEGA store." },
      {
        day: 1,
        city: "tokyo",
        theme: "view",
        title: "Dinner & Optional Shibuya Sky",
        desc: "Dinner in Shibuya, then optional Shibuya Sky view (pre-book!).",
      },

      // Day 2
      {
        day: 2,
        city: "tokyo",
        theme: "culture",
        title: "Asakusa & Senso-ji",
        desc: "Breakfast, then explore Senso-ji Temple & Nakamise-dori.",
      },
      {
        day: 2,
        city: "tokyo",
        theme: "modern",
        title: "Tokyo Skytree",
        desc: "View Skytree from its base and explore the mall.",
      },
      {
        day: 2,
        city: "tokyo",
        theme: "modern",
        title: "Akihabara Exploration",
        desc: "Dive into the world of anime and gaming.",
      },
      {
        day: 2,
        city: "tokyo",
        theme: "culture",
        title: "Harajuku & Meiji Shrine",
        desc: "Walk Takeshita Street, then find peace at Meiji Shrine.",
      },
      {
        day: 2,
        city: "tokyo",
        theme: "view",
        title: "Tokyo Tower View & Dinner",
        desc: "Visit Zojoji Temple for a great view of Tokyo Tower, then dinner. Activate JR Pass!",
      },

      // Day 3
      {
        day: 3,
        city: "fuji",
        theme: "travel",
        title: "Depart for Kawaguchiko",
        desc: "Breakfast, checkout, luggage forwarding, then bus to Fuji.",
      },
      {
        day: 3,
        city: "fuji",
        theme: "nature",
        title: "Chureito Pagoda & Lake",
        desc: "Visit the iconic pagoda, then explore and have lunch by Lake Kawaguchi.",
      },
      {
        day: 3,
        city: "fuji",
        theme: "return",
        title: "Return to Tokyo",
        desc: "Bus back to Shinjuku, rest, and have a light dinner.",
      },

      // Day 4
      {
        day: 4,
        city: "kyoto",
        theme: "travel",
        title: "Shinkansen to Kyoto",
        desc: "Travel to Kyoto, drop luggage at hotel, grab Soba brunch.",
      },
      {
        day: 4,
        city: "kyoto",
        theme: "nature",
        title: "Arashiyama & Nijo Castle",
        desc: "Visit the Bamboo Grove, then explore Nijo Castle's nightingale floors.",
      },
      {
        day: 4,
        city: "kyoto",
        theme: "culture",
        title: "Kiyomizu-dera & Tea Ceremony",
        desc: "View the temple's famous wooden stage, then participate in a tea ceremony.",
      },
      {
        day: 4,
        city: "kyoto",
        theme: "culture",
        title: "Gion & Pontocho",
        desc: "Stroll through Gion, browse Nishiki Market, and have dinner in Pontocho Alley.",
      },

      // Day 5
      {
        day: 5,
        city: "kyoto",
        theme: "culture",
        title: "Fushimi Inari Taisha",
        desc: "Hike through thousands of vibrant red torii gates at this iconic shrine.",
      },
      {
        day: 5,
        city: "hiroshima",
        theme: "culture",
        title: "Hiroshima Peace Park",
        desc: "Visit the Peace Memorial Museum, A-Bomb Dome, and reflect on history.",
      },
      {
        day: 5,
        city: "hiroshima",
        theme: "food",
        title: "Hiroshima Okonomiyaki",
        desc: "Try the local savory pancake, layered with noodles, cabbage, and other fillings.",
      },
      {
        day: 5,
        city: "osaka",
        theme: "modern",
        title: "Dotonbori Exploration",
        desc: "Experience Osaka's vibrant entertainment district with its neon lights and signs.",
      },
      {
        day: 5,
        city: "osaka",
        theme: "fun",
        title: "Don Quijote Ferris Wheel",
        desc: "Get a unique view of the Dotonbori canal from this oblong-shaped ferris wheel.",
      },

      // Day 6
      {
        day: 6,
        city: "osaka",
        theme: "fun",
        title: "Universal Studios Japan",
        desc: "Spend a half-day exploring attractions, with a focus on Super Nintendo World.",
      },
      {
        day: 6,
        city: "osaka",
        theme: "food",
        title: "Lunch at Toyo",
        desc: "If you can get a spot, experience the famous flame-cooking chef's delicious food.",
      },
      {
        day: 6,
        city: "osaka",
        theme: "culture",
        title: "Osaka Castle",
        desc: "Visit the grand castle, a symbol of Osaka's history and power.",
      },
      {
        day: 6,
        city: "osaka",
        theme: "culture",
        title: "Shitennoji Temple",
        desc: "Stop by one of Japan's oldest Buddhist temples.",
      },
      {
        day: 6,
        city: "osaka",
        theme: "view",
        title: "Umeda Sky Building",
        desc: "View the sunset from the Floating Garden Observatory for stunning city views.",
      },
    ],
    detailedTips: [
      {
        title: "🚄 Passes & Transportation",
        content: `<strong>Luggage Forwarding (Takkyubin):</strong> This is a game-changer! Send large luggage between hotels (e.g., Tokyo to Kyoto) and travel with just an overnight bag. It makes navigating train stations much easier.<br><br><strong>Japan Rail Pass (7-Day):</strong> Likely cost-effective for this itinerary. Activate it on Day 2 to cover your Shinkansen journeys to Kyoto and Hiroshima.<br><br><strong>Hakone Free Pass (2-Day):</strong> Your key to seamless travel within the Hakone region, covering buses, trains, boats, and ropeways.`,
      },
      {
        title: "🎟️ Booking & Logistics",
        content: `<strong>Pre-Booking is Crucial:</strong> Tickets for Shibuya Sky, the Mt. Fuji highway bus, and popular experiences like the tea ceremony sell out quickly. Book these online in advance!<br><br><strong>Universal Studios Japan (USJ):</strong> Buy park tickets AND strongly consider an Express Pass. This is vital for Super Nintendo World entry and reducing wait times, especially on a tight schedule.<br><br><strong>Stay Connected:</strong> Google Maps is essential. A Pocket WiFi or local SIM card is a must for navigating public transport and looking up information on the go.`,
      },
      {
        title: "👟 General Advice & Etiquette",
        content: `<strong>Cash is Still Useful:</strong> While cards are widely accepted, have Japanese Yen for smaller vendors, street food stalls, and temple entrance fees.<br><br><strong>Comfy Footwear:</strong> You will be walking a lot! Prioritize comfort over style to keep your feet happy.<br><br><strong>Flexibility is Key:</strong> This is a tightly scheduled itinerary. While you should aim to stick to the plan, be prepared for minor adjustments and don't stress if you have to skip something.`,
      },
    ],
  },


  camping: {
    title: "🏕️ July 4th Camping Adventure",
    subtitle: "July 4-6, 2025",
    description:
      "A personal journey into the wilderness, celebrating independence under the stars with friends, campfires, and unforgettable memories. This camping trip combines outdoor adventure with patriotic celebration.",
    tips: [
      "Weather Check: Always check the forecast before heading out and pack accordingly.",
      "Fire Safety: Follow all campfire regulations and never leave fires unattended.",
      "Leave No Trace: Pack out everything you bring in and respect the wilderness.",
      "First Aid: Bring a well-stocked first aid kit for any minor injuries.",
      "Water: Bring plenty of water and have a backup purification method.",
    ],
    activities: [
      // Day 1 - Arrival & Setup
      {
        day: 1,
        city: "arrival",
        theme: "setup",
        title: "Arrival at Campsite",
        desc: "Arrive at the campground and begin setting up our tents and camp area.",
      },
      {
        day: 1,
        city: "arrival",
        theme: "setup",
        title: "Camp Setup",
        desc: "Pitch tents, organize gear, and create our home away from home in the wilderness.",
      },
      {
        day: 1,
        city: "arrival",
        theme: "food",
        title: "First Campfire Dinner",
        desc: "Cook dinner over the campfire and enjoy our first meal under the stars.",
      },
      {
        day: 1,
        city: "arrival",
        theme: "relaxation",
        title: "Stargazing",
        desc: "End the day with stargazing and planning for tomorrow's adventures.",
      },

      // Day 2 - Exploration & July 4th
      {
        day: 2,
        city: "exploration",
        theme: "nature",
        title: "Morning Hike",
        desc: "Start the day with a refreshing hike through the surrounding wilderness.",
      },
      {
        day: 2,
        city: "exploration",
        theme: "food",
        title: "Campfire Breakfast",
        desc: "Enjoy a hearty breakfast cooked over the campfire.",
      },
      {
        day: 2,
        city: "exploration",
        theme: "nature",
        title: "Wildlife Watching",
        desc: "Explore the area and observe local wildlife in their natural habitat.",
      },
      {
        day: 2,
        city: "celebration",
        theme: "celebration",
        title: "July 4th Preparations",
        desc: "Prepare for the evening's Independence Day celebration with decorations and food.",
      },
      {
        day: 2,
        city: "celebration",
        theme: "food",
        title: "Patriotic BBQ",
        desc: "Grill up a traditional American BBQ feast to celebrate the 4th of July.",
      },
      {
        day: 2,
        city: "celebration",
        theme: "celebration",
        title: "Fireworks Show",
        desc: "Watch fireworks light up the night sky, celebrating freedom in the wilderness.",
      },
      {
        day: 2,
        city: "celebration",
        theme: "social",
        title: "Campfire Stories",
        desc: "Share stories, play games, and enjoy s'mores around the campfire.",
      },

      // Day 3 - Departure
      {
        day: 3,
        city: "departure",
        theme: "food",
        title: "Final Campfire Breakfast",
        desc: "Enjoy one last breakfast together before packing up.",
      },
      {
        day: 3,
        city: "departure",
        theme: "cleanup",
        title: "Pack Up Camp",
        desc: "Carefully pack up all gear and ensure we leave no trace behind.",
      },
      {
        day: 3,
        city: "departure",
        theme: "reflection",
        title: "Farewell to the Wilderness",
        desc: "Take final photos and say goodbye to our temporary home in nature.",
      },
    ],
    detailedTips: [
      {
        title: "🏕️ Camping Essentials",
        content: `<strong>Tent Setup:</strong> Practice setting up your tent at home before the trip. Choose a flat, dry spot away from water runoff.<br><br><strong>Sleeping Gear:</strong> Invest in a good sleeping bag rated for the expected temperatures and a comfortable sleeping pad.<br><br><strong>Weather Protection:</strong> Bring rain gear and extra layers, as weather can change quickly in the wilderness.`,
      },
      {
        title: "🔥 Fire Safety & Cooking",
        content: `<strong>Campfire Safety:</strong> Only build fires in designated fire rings or pits. Keep fires small and never leave them unattended.<br><br><strong>Cooking Equipment:</strong> Bring a portable stove as backup and pack all necessary cooking utensils and fuel.<br><br><strong>Food Storage:</strong> Store food properly to avoid attracting wildlife. Use bear-proof containers if required.`,
      },
      {
        title: "🎆 July 4th Celebrations",
        content: `<strong>Fireworks Safety:</strong> Check local regulations about fireworks. Many wilderness areas prohibit them due to fire risk.<br><br><strong>Patriotic Decorations:</strong> Bring flags and decorations that can be safely displayed and easily packed out.<br><br><strong>Group Activities:</strong> Plan games and activities that everyone can enjoy, from card games to outdoor sports.`,
      },
    ],
  },

  peru: {
    title: "🇵🇪 Peru Adventure",
    subtitle: "Your Trip Dates Here",
    description:
      "This adventure takes you through Peru's most iconic destinations, from the mystical Machu Picchu to the vibrant streets of Lima. The chart below visualizes the allocation of your activities, highlighting a trip rich in cultural experiences and natural wonders.",
    tips: [
      "Altitude Sickness: Acclimatize in Cusco for 2-3 days before visiting Machu Picchu.",
      "Machu Picchu Tickets: Book your entrance tickets and train tickets well in advance.",
      "Currency: Peruvian Sol (PEN). Credit cards are widely accepted in cities.",
      "Weather: Pack layers as temperatures can vary significantly between day and night.",
      "Transportation: Domestic flights and trains should be booked in advance.",
    ],
    activities: [
      // Day 1 - Lima
      {
        day: 1,
        city: "lima",
        theme: "arrival",
        title: "Arrival in Lima",
        desc: "Land at Jorge Chávez International Airport, clear customs, and transfer to your hotel.",
      },
      {
        day: 1,
        city: "lima",
        theme: "food",
        title: "Lima Food Scene",
        desc: "Experience Peru's world-renowned cuisine with dinner at a top restaurant.",
      },
      {
        day: 1,
        city: "lima",
        theme: "modern",
        title: "Miraflores District",
        desc: "Explore the modern coastal district with its parks and shopping areas.",
      },

      // Day 2 - Lima
      {
        day: 2,
        city: "lima",
        theme: "culture",
        title: "Historic Lima Center",
        desc: "Visit Plaza Mayor, Cathedral, and the historic colonial architecture.",
      },
      {
        day: 2,
        city: "lima",
        theme: "culture",
        title: "Larco Museum",
        desc: "Explore pre-Columbian art and artifacts at this renowned museum.",
      },
      {
        day: 2,
        city: "lima",
        theme: "food",
        title: "Barranco Food Tour",
        desc: "Discover the bohemian district and its culinary delights.",
      },

      // Day 3 - Cusco
      {
        day: 3,
        city: "cusco",
        theme: "travel",
        title: "Flight to Cusco",
        desc: "Fly to Cusco and begin acclimatization to the high altitude.",
      },
      {
        day: 3,
        city: "cusco",
        theme: "culture",
        title: "Cusco Plaza de Armas",
        desc: "Explore the main square and surrounding colonial architecture.",
      },
      {
        day: 3,
        city: "cusco",
        theme: "culture",
        title: "Sacsayhuamán",
        desc: "Visit the impressive Inca fortress overlooking Cusco.",
      },
      {
        day: 3,
        city: "cusco",
        theme: "food",
        title: "Cusco Cuisine",
        desc: "Try traditional Andean dishes and local specialties.",
      },

      // Day 4 - Machu Picchu
      {
        day: 4,
        city: "machupicchu",
        theme: "adventure",
        title: "Machu Picchu Day Trip",
        desc: "Early morning train to Aguas Calientes, then bus to the ancient citadel.",
      },
      {
        day: 4,
        city: "machupicchu",
        theme: "culture",
        title: "Machu Picchu Exploration",
        desc: "Guided tour of the iconic Inca ruins and terraces.",
      },
      {
        day: 4,
        city: "machupicchu",
        theme: "nature",
        title: "Huayna Picchu (Optional)",
        desc: "Optional challenging hike to the peak for spectacular views.",
      },
      {
        day: 4,
        city: "cusco",
        theme: "return",
        title: "Return to Cusco",
        desc: "Evening train back to Cusco for rest and recovery.",
      },

      // Day 5 - Sacred Valley
      {
        day: 5,
        city: "sacredvalley",
        theme: "culture",
        title: "Sacred Valley Tour",
        desc: "Visit Pisac market and the impressive terraces of Pisac ruins.",
      },
      {
        day: 5,
        city: "sacredvalley",
        theme: "culture",
        title: "Ollantaytambo Fortress",
        desc: "Explore the well-preserved Inca fortress and town.",
      },
      {
        day: 5,
        city: "sacredvalley",
        theme: "nature",
        title: "Maras Salt Mines",
        desc: "Visit the ancient salt pans still in use today.",
      },
      {
        day: 5,
        city: "cusco",
        theme: "food",
        title: "Farewell Dinner",
        desc: "Final dinner in Cusco, reflecting on your Peru adventure.",
      },
    ],
    detailedTips: [
      {
        title: "🏔️ Altitude & Health",
        content: `<strong>Altitude Sickness:</strong> Cusco is at 3,400m (11,200ft) above sea level. Spend 2-3 days acclimatizing before strenuous activities like Machu Picchu.<br><br><strong>Hydration:</strong> Drink plenty of water and avoid alcohol during the first few days at altitude.<br><br><strong>Medication:</strong> Consider bringing altitude sickness medication (consult your doctor) and coca tea helps with symptoms.`,
      },
      {
        title: "🎫 Booking & Logistics",
        content: `<strong>Machu Picchu Tickets:</strong> Entrance tickets are limited and must be booked in advance. Choose your time slot carefully.<br><br><strong>Train Tickets:</strong> PeruRail and IncaRail tickets should be booked early, especially during peak season.<br><br><strong>Domestic Flights:</strong> Book flights between Lima and Cusco well in advance for better prices.`,
      },
      {
        title: "🍽️ Food & Culture",
        content: `<strong>Peruvian Cuisine:</strong> Don't miss ceviche, lomo saltado, and guinea pig (cuy) if you're adventurous.<br><br><strong>Water Safety:</strong> Drink bottled water and avoid ice in drinks outside of major hotels.<br><br><strong>Markets:</strong> Visit local markets for authentic experiences and souvenirs. Bargaining is expected.`,
      },
    ],
  },
};

// Export for use in other scripts
window.TravelData = TravelData;
