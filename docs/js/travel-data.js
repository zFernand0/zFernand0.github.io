/**
 * Travel Data for zFernand0.github.io
 * Contains all travel itinerary data and tips
 */

// Japan Travel Data
const japanActivities = [
    { day: 1, city: 'tokyo', theme: 'modern', title: 'Shibuya Scramble Crossing', desc: 'Immerse yourself in the iconic, bustling intersection, a symbol of modern Tokyo.' },
    { day: 1, city: 'tokyo', theme: 'modern', title: 'Hachiko Statue', desc: 'Visit the famous statue honoring the loyal dog, a beloved meeting point.' },
    { day: 1, city: 'tokyo', theme: 'fun', title: 'Don Quijote MEGA Shibuya', desc: 'Explore a massive discount store filled with unique snacks, souvenirs, and goods.' },
    { day: 1, city: 'tokyo', theme: 'food', title: 'Dinner in Shibuya', desc: 'Enjoy the vibrant nightlife with dinner options like sushi, izakaya, or ramen.' },
    { day: 1, city: 'tokyo', theme: 'modern', title: 'Shibuya Sky (Optional)', desc: 'Experience breathtaking 360° night views of the city from this rooftop observatory.' },
    { day: 2, city: 'tokyo', theme: 'culture', title: 'Senso-ji Temple', desc: 'Explore Tokyo\'s oldest temple in the historic Asakusa district.' },
    { day: 2, city: 'tokyo', theme: 'modern', title: 'Nakamise-dori Street', desc: 'Wander the vibrant shopping street leading to Senso-ji, full of traditional snacks.' },
    { day: 2, city: 'tokyo', theme: 'modern', title: 'Tokyo Skytree View', desc: 'View the towering communications and observation tower from its base.' },
    { day: 2, city: 'tokyo', theme: 'modern', title: 'Akihabara Exploration', desc: 'Dive into the electric town famous for anime, manga, and electronics stores.' },
    { day: 2, city: 'tokyo', theme: 'modern', title: 'Harajuku & Takeshita Street', desc: 'Discover quirky fashion, crepe stalls, and the vibrant youth culture.' },
    { day: 2, city: 'tokyo', theme: 'culture', title: 'Meiji Jingu Shrine', desc: 'Find peace at this major Shinto shrine dedicated to Emperor Meiji.' },
    { day: 2, city: 'tokyo', theme: 'culture', title: 'Zojoji Temple', desc: 'Visit this historic Buddhist temple which offers a classic view of Tokyo Tower.' },
    { day: 2, city: 'tokyo', theme: 'food', title: 'Uobei Sushi', desc: 'Enjoy a fun and affordable meal at this popular conveyor belt sushi restaurant.' },
    { day: 3, city: 'fuji', theme: 'nature', title: 'Highway Bus to Kawaguchiko', desc: 'Travel from Shinjuku to the Fuji Five Lakes region with scenic views en route.' },
    { day: 3, city: 'fuji', theme: 'nature', title: 'Chureito Pagoda', desc: 'Capture the iconic photo of the five-storied pagoda with Mt. Fuji in the background.' },
    { day: 3, city: 'fuji', theme: 'nature', title: 'Lake Kawaguchi', desc: 'Soak in the stunning views of Mt. Fuji from the shores of this beautiful lake.' },
    { day: 3, city: 'fuji', theme: 'fun', title: 'Panoramic Ropeway', desc: 'Optional: Ride the Kachi-Kachi Yama ropeway for elevated views of the lake and mountain.' },
    { day: 4, city: 'kyoto', theme: 'nature', title: 'Arashiyama Bamboo Grove', desc: 'Walk through the magical, towering bamboo stalks for an ethereal experience.' },
    { day: 4, city: 'kyoto', theme: 'culture', title: 'Tenryu-ji Temple', desc: 'Visit this UNESCO World Heritage site with its stunning garden and mountain views.' },
    { day: 4, city: 'kyoto', theme: 'culture', title: 'Kinkaku-ji (Golden Pavilion)', desc: 'Marvel at the iconic golden temple reflected in its mirror-like pond.' },
    { day: 4, city: 'kyoto', theme: 'culture', title: 'Ryoan-ji Rock Garden', desc: 'Contemplate the famous Zen rock garden, a masterpiece of minimalism.' },
    { day: 4, city: 'kyoto', theme: 'food', title: 'Nishiki Market', desc: 'Explore Kyoto\'s kitchen with its traditional food stalls and local delicacies.' },
    { day: 5, city: 'hiroshima', theme: 'culture', title: 'Peace Memorial Park', desc: 'Visit the sobering memorial to the victims of the atomic bombing.' },
    { day: 5, city: 'hiroshima', theme: 'culture', title: 'Atomic Bomb Dome', desc: 'See the preserved ruins that stand as a powerful symbol of peace.' },
    { day: 5, city: 'hiroshima', theme: 'culture', title: 'Hiroshima Peace Memorial Museum', desc: 'Learn about the devastating impact of nuclear weapons.' },
    { day: 5, city: 'osaka', theme: 'modern', title: 'Osaka Castle', desc: 'Visit the reconstructed castle that played a crucial role in Japanese history.' },
    { day: 5, city: 'osaka', theme: 'food', title: 'Dotonbori District', desc: 'Experience Osaka\'s famous food culture with neon signs and street food.' },
    { day: 6, city: 'osaka', theme: 'fun', title: 'Universal Studios Japan', desc: 'Spend a day at this world-class theme park with unique Japanese attractions.' },
    { day: 6, city: 'osaka', theme: 'food', title: 'Osaka Food Tour', desc: 'Sample local specialties like takoyaki, okonomiyaki, and kushikatsu.' },
    { day: 7, city: 'osaka', theme: 'modern', title: 'Umeda Sky Building', desc: 'Visit the futuristic building with its floating garden observatory.' },
    { day: 7, city: 'osaka', theme: 'shopping', title: 'Shinsaibashi Shopping', desc: 'Explore one of Osaka\'s premier shopping districts.' },
    { day: 7, city: 'osaka', theme: 'food', title: 'Farewell Dinner', desc: 'Enjoy a final meal of Osaka\'s famous cuisine before departure.' }
];

const japanTips = [
    {
        title: '🚄 Transportation & Navigation',
        content: `<strong>JR Pass:</strong> If you plan to visit multiple cities, consider the Japan Rail Pass for unlimited travel on JR lines.<br><br><strong>IC Cards:</strong> Get a Suica or Pasmo card for convenient access to trains, buses, and even some vending machines.<br><br><strong>Google Maps:</strong> Works excellently in Japan with detailed train schedules and walking directions.<br><br><strong>Language Barrier:</strong> While English signage is common in major cities, learning basic Japanese phrases will enhance your experience.`
    },
    {
        title: '🏨 Accommodation & Logistics',
        content: `<strong>Hotel Location:</strong> Stay near major train stations for easy access to attractions and transportation.<br><br><strong>Luggage:</strong> Consider using luggage forwarding services between cities to avoid carrying heavy bags on trains.<br><br><strong>Pocket WiFi:</strong> Rent a portable WiFi device for reliable internet access throughout your trip.<br><br><strong>Cash vs Cards:</strong> While cards are widely accepted, carry some cash for smaller vendors and temples.`
    },
    {
        title: '🍜 Food & Dining',
        content: `<strong>Reservations:</strong> Popular restaurants often require reservations, especially for dinner.<br><br><strong>Vending Machines:</strong> Japan's vending machines offer everything from hot coffee to ramen - don't miss them!<br><br><strong>Convenience Stores:</strong> 7-Eleven, FamilyMart, and Lawson offer surprisingly good food options.<br><br><strong>Etiquette:</strong> Say "itadakimasu" before eating and "gochisosama" after finishing your meal.`
    },
    {
        title: '⛩️ Cultural Etiquette & Customs',
        content: `<strong>Temple Etiquette:</strong> Bow slightly when entering temples, remove shoes when required, and be respectful of worshippers.<br><br><strong>Photography:</strong> Always check if photography is allowed, especially in temples and museums.<br><br><strong>Queuing:</strong> Japanese people are very orderly - always queue properly and don't cut lines.<br><br><strong>Public Behavior:</strong> Keep voices down on public transportation and avoid eating while walking.`
    },
    {
        title: '👟 General Advice & Etiquette',
        content: `<strong>Cash is Still Useful:</strong> While cards are widely accepted, have Japanese Yen for smaller vendors, street food stalls, and temple entrance fees.<br><br><strong>Comfy Footwear:</strong> You will be walking a lot! Prioritize comfort over style to keep your feet happy.<br><br><strong>Flexibility is Key:</strong> This is a tightly scheduled itinerary. While you should aim to stick to the plan, be prepared for minor adjustments and don't stress if you have to skip something.`
    }
];

// Korea Travel Data
const koreaActivities = [
    { day: 1, city: 'seoul', theme: 'modern', title: 'Myeongdong Shopping District', desc: 'Explore Seoul\'s premier shopping area with international brands and street food.' },
    { day: 1, city: 'seoul', theme: 'culture', title: 'N Seoul Tower', desc: 'Visit the iconic tower for panoramic views of the city skyline.' },
    { day: 1, city: 'seoul', theme: 'food', title: 'Korean BBQ Dinner', desc: 'Experience authentic Korean barbecue with various cuts of meat and side dishes.' },
    { day: 2, city: 'seoul', theme: 'culture', title: 'Gyeongbokgung Palace', desc: 'Visit the main royal palace of the Joseon dynasty with traditional architecture.' },
    { day: 2, city: 'seoul', theme: 'culture', title: 'Bukchon Hanok Village', desc: 'Walk through traditional Korean houses and experience historic Seoul.' },
    { day: 2, city: 'seoul', theme: 'food', title: 'Insadong Traditional Market', desc: 'Explore traditional crafts, tea houses, and Korean cultural items.' },
    { day: 3, city: 'seoul', theme: 'modern', title: 'Gangnam District', desc: 'Experience modern Seoul with luxury shopping and entertainment.' },
    { day: 3, city: 'seoul', theme: 'fun', title: 'Lotte World', desc: 'Visit the indoor theme park and shopping complex.' },
    { day: 3, city: 'seoul', theme: 'food', title: 'Street Food Tour', desc: 'Sample various Korean street foods like tteokbokki, hotteok, and fish cakes.' }
];

const koreaTips = [
    {
        title: '🚇 Transportation',
        content: `<strong>T-Money Card:</strong> Get a T-Money card for convenient access to subways, buses, and even some convenience stores.<br><br><strong>Subway System:</strong> Seoul's subway is extensive, clean, and easy to navigate with English signage.<br><br><strong>Kakao Maps:</strong> Consider using Kakao Maps for more detailed local navigation.`
    },
    {
        title: '🍜 Food & Dining',
        content: `<strong>Korean BBQ:</strong> Don't miss authentic Korean barbecue - it's a must-try experience.<br><br><strong>Street Food:</strong> Korean street food is delicious and affordable - try everything!<br><br><strong>Spice Levels:</strong> Korean food can be very spicy - ask about spice levels if you're sensitive.`
    },
    {
        title: '🏛️ Cultural Sites',
        content: `<strong>Palace Etiquette:</strong> Be respectful when visiting palaces and temples.<br><br><strong>Traditional Dress:</strong> Many palaces offer hanbok rental for photos.<br><br><strong>Photography:</strong> Check photography rules at cultural sites.`
    }
];

// Export data for use in other files
window.TravelData = {
    japan: {
        activities: japanActivities,
        tips: japanTips
    },
    korea: {
        activities: koreaActivities,
        tips: koreaTips
    }
}; 