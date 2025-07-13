/**
 * Travel data for zFernand0.github.io
 * Contains all itinerary data for travel pages
 */

const TravelData = {
    japan: {
        title: "🇯🇵 Japan Adventure",
        subtitle: "August 30th - September 5th",
        description: "This action-packed itinerary is designed for early risers ready to see the best of Japan in a week. The chart below visualizes the allocation of your activities, highlighting a trip rich in sightseeing and cultural experiences.",
        tips: [
            "Luggage Forwarding: Use services like Yamato Transport (Takkyubin) to send large luggage between hotels (e.g., Tokyo ➡️ Kyoto).",
            "Japan Rail Pass: A 7-Day Pass is likely cost-effective. Activate on Day 2.",
            "Pre-Bookings: Reserve tickets for Shibuya Sky, Mt. Fuji buses, tea ceremonies, and especially Universal Studios Japan (USJ) well in advance.",
            "Connectivity: A pocket WiFi or local SIM is essential for navigation.",
            "Cash: Carry some Yen for smaller vendors, street food, and shrines."
        ],
        activities: [
            // Day 1
            { day: 1, city: 'tokyo', theme: 'arrival', title: 'Arrival & Airport Procedures', desc: 'Land at Narita (NRT), clear customs, get WiFi/SIM, buy N\'EX ticket.' },
            { day: 1, city: 'tokyo', theme: 'travel', title: 'Travel to Hotel', desc: 'Take Narita Express and check-in to your hotel.' },
            { day: 1, city: 'tokyo', theme: 'modern', title: 'Shibuya Immersion', desc: 'Experience Shibuya Scramble Crossing & Hachiko statue.' },
            { day: 1, city: 'tokyo', theme: 'shopping', title: 'Shopping & Snacks', desc: 'Explore Don Quijote MEGA store.' },
            { day: 1, city: 'tokyo', theme: 'view', title: 'Dinner & Optional Shibuya Sky', desc: 'Dinner in Shibuya, then optional Shibuya Sky view (pre-book!).' },
            
            // Day 2
            { day: 2, city: 'tokyo', theme: 'culture', title: 'Asakusa & Senso-ji', desc: 'Breakfast, then explore Senso-ji Temple & Nakamise-dori.' },
            { day: 2, city: 'tokyo', theme: 'modern', title: 'Tokyo Skytree', desc: 'View Skytree from its base and explore the mall.' },
            { day: 2, city: 'tokyo', theme: 'modern', title: 'Akihabara Exploration', desc: 'Dive into the world of anime and gaming.' },
            { day: 2, city: 'tokyo', theme: 'culture', title: 'Harajuku & Meiji Shrine', desc: 'Walk Takeshita Street, then find peace at Meiji Shrine.' },
            { day: 2, city: 'tokyo', theme: 'view', title: 'Tokyo Tower View & Dinner', desc: 'Visit Zojoji Temple for a great view of Tokyo Tower, then dinner. Activate JR Pass!' },
            
            // Day 3
            { day: 3, city: 'fuji', theme: 'travel', title: 'Depart for Kawaguchiko', desc: 'Breakfast, checkout, luggage forwarding, then bus to Fuji.' },
            { day: 3, city: 'fuji', theme: 'nature', title: 'Chureito Pagoda & Lake', desc: 'Visit the iconic pagoda, then explore and have lunch by Lake Kawaguchi.' },
            { day: 3, city: 'fuji', theme: 'return', title: 'Return to Tokyo', desc: 'Bus back to Shinjuku, rest, and have a light dinner.' },
            
            // Day 4
            { day: 4, city: 'kyoto', theme: 'travel', title: 'Shinkansen to Kyoto', desc: 'Travel to Kyoto, drop luggage at hotel, grab Soba brunch.' },
            { day: 4, city: 'kyoto', theme: 'nature', title: 'Arashiyama & Nijo Castle', desc: 'Visit the Bamboo Grove, then explore Nijo Castle\'s nightingale floors.' },
            { day: 4, city: 'kyoto', theme: 'culture', title: 'Kiyomizu-dera & Tea Ceremony', desc: 'View the temple\'s famous wooden stage, then participate in a tea ceremony.' },
            { day: 4, city: 'kyoto', theme: 'culture', title: 'Gion & Pontocho', desc: 'Stroll through Gion, browse Nishiki Market, and have dinner in Pontocho Alley.' },
            
            // Day 5
            { day: 5, city: 'kyoto', theme: 'culture', title: 'Fushimi Inari Taisha', desc: 'Hike through thousands of vibrant red torii gates at this iconic shrine.' },
            { day: 5, city: 'hiroshima', theme: 'culture', title: 'Hiroshima Peace Park', desc: 'Visit the Peace Memorial Museum, A-Bomb Dome, and reflect on history.' },
            { day: 5, city: 'hiroshima', theme: 'food', title: 'Hiroshima Okonomiyaki', desc: 'Try the local savory pancake, layered with noodles, cabbage, and other fillings.' },
            { day: 5, city: 'osaka', theme: 'modern', title: 'Dotonbori Exploration', desc: 'Experience Osaka\'s vibrant entertainment district with its neon lights and signs.' },
            { day: 5, city: 'osaka', theme: 'fun', title: 'Don Quijote Ferris Wheel', desc: 'Get a unique view of the Dotonbori canal from this oblong-shaped ferris wheel.' },
            
            // Day 6
            { day: 6, city: 'osaka', theme: 'fun', title: 'Universal Studios Japan', desc: 'Spend a half-day exploring attractions, with a focus on Super Nintendo World.' },
            { day: 6, city: 'osaka', theme: 'food', title: 'Lunch at Toyo', desc: 'If you can get a spot, experience the famous flame-cooking chef\'s delicious food.' },
            { day: 6, city: 'osaka', theme: 'culture', title: 'Osaka Castle', desc: 'Visit the grand castle, a symbol of Osaka\'s history and power.' },
            { day: 6, city: 'osaka', theme: 'culture', title: 'Shitennoji Temple', desc: 'Stop by one of Japan\'s oldest Buddhist temples.' },
            { day: 6, city: 'osaka', theme: 'view', title: 'Umeda Sky Building', desc: 'View the sunset from the Floating Garden Observatory for stunning city views.' }
        ],
        detailedTips: [
            {
                title: '🚄 Passes & Transportation',
                content: `<strong>Luggage Forwarding (Takkyubin):</strong> This is a game-changer! Send large luggage between hotels (e.g., Tokyo to Kyoto) and travel with just an overnight bag. It makes navigating train stations much easier.<br><br><strong>Japan Rail Pass (7-Day):</strong> Likely cost-effective for this itinerary. Activate it on Day 2 to cover your Shinkansen journeys to Kyoto and Hiroshima.<br><br><strong>Hakone Free Pass (2-Day):</strong> Your key to seamless travel within the Hakone region, covering buses, trains, boats, and ropeways.`
            },
            {
                title: '🎟️ Booking & Logistics',
                content: `<strong>Pre-Booking is Crucial:</strong> Tickets for Shibuya Sky, the Mt. Fuji highway bus, and popular experiences like the tea ceremony sell out quickly. Book these online in advance!<br><br><strong>Universal Studios Japan (USJ):</strong> Buy park tickets AND strongly consider an Express Pass. This is vital for Super Nintendo World entry and reducing wait times, especially on a tight schedule.<br><br><strong>Stay Connected:</strong> Google Maps is essential. A Pocket WiFi or local SIM card is a must for navigating public transport and looking up information on the go.`
            },
            {
                title: '👟 General Advice & Etiquette',
                content: `<strong>Cash is Still Useful:</strong> While cards are widely accepted, have Japanese Yen for smaller vendors, street food stalls, and temple entrance fees.<br><br><strong>Comfy Footwear:</strong> You will be walking a lot! Prioritize comfort over style to keep your feet happy.<br><br><strong>Flexibility is Key:</strong> This is a tightly scheduled itinerary. While you should aim to stick to the plan, be prepared for minor adjustments and don't stress if you have to skip something.`
            }
        ]
    },

    korea: {
        title: "🇰🇷 South Korea Adventure",
        subtitle: "September 5th - 8th, 2025",
        description: "This high-intensity itinerary is designed for travelers eager to experience Seoul and a taste of Busan in just four days. The chart below provides a quick visual summary of your activity allocation, showcasing a trip packed with cultural sights, culinary delights, and significant travel.",
        tips: [
            "T-Money Card: Purchase upon arrival for seamless public transport (subway, bus).",
            "Navigation Apps: Use Naver Map or KakaoMap as Google Maps functionality is limited in Korea.",
            "Currency: Korean Won (KRW). Credit cards are widely accepted, but cash is useful for small vendors.",
            "Pre-Bookings: Secure your Nanta performance and DMZ tour tickets well in advance. KTX tickets are also recommended for pre-booking.",
            "Hanbok Rental: Wearing a traditional hanbok can grant you free entry to palaces like Gyeongbokgung."
        ],
        activities: [
            // Day 1
            { day: 1, city: 'seoul', theme: 'arrival', title: 'Arrival at ICN & Hotel Travel', desc: 'Land at ICN, clear customs, grab your travel essentials (SIM/WiFi), and take the AREX to your Seoul hotel for check-in.' },
            { day: 1, city: 'seoul', theme: 'shopping', title: 'Myeongdong Street Food & Shopping', desc: 'Immerse yourself in the bustling Myeongdong district. Enjoy vibrant street food for an early dinner and explore cosmetic and fashion shops.' },
            { day: 1, city: 'seoul', theme: 'entertainment', title: 'Nanta Performance (Myeongdong)', desc: 'Head to the Myeongdong Nanta Theatre for the energetic 8:00 PM non-verbal show. Remember to pre-book your tickets!' },
            { day: 1, city: 'seoul', theme: 'view', title: 'N Seoul Tower Night View & Rest', desc: 'Take the cable car or bus up Namsan Mountain for panoramic night views of Seoul from N Seoul Tower. Afterwards, head back to your hotel for a well-deserved rest.' },
            
            // Day 2
            { day: 2, city: 'busan', theme: 'travel', title: 'KTX to Busan', desc: 'Wake up early, grab a quick breakfast, and make your way to Seoul Station for your high-speed KTX train to Busan. Enjoy the approximately 2.5-hour journey.' },
            { day: 2, city: 'busan', theme: 'art', title: 'Gamcheon Culture Village', desc: 'Upon arrival in Busan, head to Gamcheon Culture Village. Explore its vibrant, cascading houses, murals, and unique art installations. Enjoy the picturesque views.' },
            { day: 2, city: 'busan', theme: 'seafood', title: 'Jagalchi Fish Market & Lunch', desc: 'Experience Korea\'s largest seafood market, Jagalchi. Explore the lively stalls and enjoy a fresh seafood lunch in the Nampo-dong area. If time allows, a quick stroll through Gukje Market.' },
            { day: 2, city: 'busan', theme: 'return', title: 'Return to Seoul', desc: 'Take the KTX back to Seoul, arriving in the evening. Have a light dinner and rest for the next day\'s adventures.' },
            
            // Day 3
            { day: 3, city: 'seoul', theme: 'culture', title: 'Gyeongbokgung Palace & Hanbok', desc: 'Start your day with a visit to Gyeongbokgung Palace. Consider renting a hanbok for free entry and beautiful photos.' },
            { day: 3, city: 'seoul', theme: 'culture', title: 'Bukchon Hanok Village', desc: 'Explore the traditional Korean village with its well-preserved hanok houses and narrow alleyways.' },
            { day: 3, city: 'seoul', theme: 'food', title: 'Insadong Traditional Lunch', desc: 'Enjoy traditional Korean cuisine in Insadong, known for its cultural atmosphere and authentic restaurants.' },
            { day: 3, city: 'seoul', theme: 'shopping', title: 'Dongdaemun Design Plaza', desc: 'Visit this futuristic building and explore the surrounding shopping district, especially if you\'re interested in fashion.' },
            { day: 3, city: 'seoul', theme: 'food', title: 'Korean BBQ Dinner', desc: 'End your day with a classic Korean BBQ experience, trying different cuts of meat and side dishes.' },
            
            // Day 4
            { day: 4, city: 'seoul', theme: 'culture', title: 'DMZ Tour', desc: 'Take a guided tour to the Demilitarized Zone, learning about Korean history and the division of the peninsula.' },
            { day: 4, city: 'seoul', theme: 'shopping', title: 'Hongdae Street Performance', desc: 'Visit Hongdae area to see street performances and explore the youthful, artistic atmosphere.' },
            { day: 4, city: 'seoul', theme: 'food', title: 'Final Korean Feast', desc: 'Enjoy your last meal in Korea, perhaps trying something you haven\'t had yet like Korean fried chicken or street food.' },
            { day: 4, city: 'seoul', theme: 'return', title: 'Departure Preparation', desc: 'Pack up, return any rented items, and prepare for your departure the next day.' }
        ],
        detailedTips: [
            {
                title: '🚇 Transportation & Navigation',
                content: `<strong>T-Money Card:</strong> Purchase this rechargeable card at convenience stores or subway stations. It works on all public transport and can also be used for small purchases.<br><br><strong>Navigation Apps:</strong> Google Maps has limited functionality in Korea. Use Naver Map or KakaoMap for accurate directions and public transport information.<br><br><strong>Subway System:</strong> Seoul's subway is extensive, clean, and efficient. Most signs are in English, making it easy to navigate.`
            },
            {
                title: '🎫 Booking & Reservations',
                content: `<strong>Nanta Performance:</strong> This popular show sells out quickly. Book tickets online in advance, especially for evening shows.<br><br><strong>DMZ Tour:</strong> Due to security restrictions, DMZ tours must be booked through authorized tour companies. Book well in advance.<br><br><strong>KTX Tickets:</strong> While you can buy tickets at the station, booking in advance ensures you get the best times and prices.`
            },
            {
                title: '🍽️ Food & Culture',
                content: `<strong>Korean BBQ:</strong> Don't miss this quintessential Korean dining experience. Many restaurants have English menus or picture menus.<br><br><strong>Street Food:</strong> Myeongdong and Hongdae are excellent places to try Korean street food. Be adventurous and try new flavors!<br><br><strong>Hanbok Rental:</strong> Wearing a hanbok not only gives you free palace entry but also makes for beautiful photos. Many rental shops are located near palaces.`
            }
        ]
    }
};

// Export for use in other scripts
window.TravelData = TravelData; 