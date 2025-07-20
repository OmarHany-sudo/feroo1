document.addEventListener('DOMContentLoaded', function() {
    const menuData = [
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "California Roll",
            "description": "California Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/california_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Crazy Roll",
            "description": "Crazy Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/crazy_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Dynamite Roll",
            "description": "Dynamite Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/dynamite_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Rainbow Roll",
            "description": "Rainbow Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/rainbow_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Spicy Crab Roll",
            "description": "Spicy Crab Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/spicy_crab_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Spicy Salmon Roll",
            "description": "Spicy Salmon Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/spicy_salmon_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Spicy Shrimp Roll",
            "description": "Spicy Shrimp Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/spicy_shrimp_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Spicy Tuna Roll",
            "description": "Spicy Tuna Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/spicy_tuna_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Crunchy Roll",
            "description": "Crunchy Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/crunchy_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Volcano Roll",
            "description": "Volcano Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/volcano_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Crispy Roll",
            "description": "Crispy Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/crispy_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Philadelphia Roll",
            "description": "Philadelphia Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/philadelphia_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Dragon Roll",
            "description": "Dragon Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/dragon_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Sweet & Spicy Roll",
            "description": "Sweet & Spicy Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/sweet_&_spicy_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Crispy Crab Roll",
            "description": "Crispy Crab Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/crispy_crab_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Shrimp Tempura Roll",
            "description": "Shrimp Tempura Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/shrimp_tempura_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Smoked Salmon Roll",
            "description": "Smoked Salmon Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/smoked_salmon_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Tuna Avocado Roll",
            "description": "Tuna Avocado Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/tuna_avocado_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "rolls",
            "section": "Classic Sushi Rolls",
            "name": "Salmon Avocado Roll",
            "description": "Salmon Avocado Roll",
            "price": "95 EGP",
            "image": "assets/menu_images/salmon_avocado_roll.jpg",
            "icon": "🍣"
        },
        {
            "category": "fried-sushi",
            "section": "Fried Sushi Rolls",
            "name": "Fried Chicken Sushi",
            "description": "Fried Chicken Sushi",
            "price": "90 EGP (6 pcs)",
            "image": "assets/menu_images/fried_chicken_sushi.jpg",
            "icon": "🍣"
        },
        {
            "category": "fried-sushi",
            "section": "Fried Sushi Rolls",
            "name": "Fried Sausage Sushi",
            "description": "Fried Sausage Sushi",
            "price": "90 EGP (6 pcs)",
            "image": "assets/menu_images/fried_sausage_sushi.jpg",
            "icon": "🍣"
        },
        {
            "category": "raw-cooked",
            "section": "Raw / Cooked Additions",
            "name": "Chicken Sushi",
            "description": "Chicken Sushi",
            "price": "90 EGP (6 pcs)",
            "image": "assets/menu_images/chicken_sushi.jpg",
            "icon": "🍣"
        },
        {
            "category": "raw-cooked",
            "section": "Raw / Cooked Additions",
            "name": "Sausage Sushi",
            "description": "Sausage Sushi",
            "price": "90 EGP (6 pcs)",
            "image": "assets/menu_images/sausage_sushi.jpg",
            "icon": "🍣"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Vanilla Mochi",
            "description": "Vanilla Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/vanilla_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Strawberry Mochi",
            "description": "Strawberry Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/strawberry_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Mocha Mochi",
            "description": "Mocha Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/mocha_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Yuzu Mochi",
            "description": "Yuzu Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/yuzu_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Blueberry Mochi",
            "description": "Blueberry Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/blueberry_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Mango Mochi",
            "description": "Mango Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/mango_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Chocolate Mochi",
            "description": "Chocolate Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/chocolate_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Banana Mochi",
            "description": "Banana Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/banana_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Bubblegum Mochi",
            "description": "Bubblegum Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/bubblegum_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Pina Colada Mochi",
            "description": "Pina Colada Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/pina_colada_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Coconut Mochi",
            "description": "Coconut Mochi",
            "price": "70 EGP",
            "image": "assets/menu_images/coconut_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Cookie & Cream Mochi",
            "description": "Cookie & Cream Mochi",
            "price": "85 EGP",
            "image": "assets/menu_images/cookie_&_cream_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Cheesecake Mochi",
            "description": "Cheesecake Mochi",
            "price": "85 EGP",
            "image": "assets/menu_images/cheesecake_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Watermelon Mochi",
            "description": "Watermelon Mochi",
            "price": "85 EGP",
            "image": "assets/menu_images/watermelon_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Sakura Mochi",
            "description": "Sakura Mochi",
            "price": "85 EGP",
            "image": "assets/menu_images/sakura_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Churro Lotus Mochi",
            "description": "Churro Lotus Mochi",
            "price": "85 EGP",
            "image": "assets/menu_images/churro_lotus_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Taro Mochi",
            "description": "Taro Mochi",
            "price": "85 EGP",
            "image": "assets/menu_images/taro_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Mochi Ice Cream",
            "name": "Passion Fruit Mochi",
            "description": "Passion Fruit Mochi",
            "price": "85 EGP",
            "image": "assets/menu_images/passion_fruit_mochi.jpg",
            "icon": "🍡"
        },
        {
            "category": "drinks",
            "section": "Boba Tea",
            "name": "Bubble Gum Boba Tea",
            "description": "Bubble Gum Boba Tea",
            "price": "130 EGP",
            "image": "assets/menu_images/bubble_gum_boba_tea.jpg",
            "icon": "🍹"
        },
        {
            "category": "drinks",
            "section": "Boba Tea",
            "name": "Matcha Boba Tea",
            "description": "Matcha Boba Tea",
            "price": "130 EGP",
            "image": "assets/menu_images/matcha_boba_tea.jpg",
            "icon": "🍹"
        },
        {
            "category": "drinks",
            "section": "Boba Tea",
            "name": "Strawberry Boba Tea",
            "description": "Strawberry Boba Tea",
            "price": "130 EGP",
            "image": "assets/menu_images/strawberry_boba_tea.jpg",
            "icon": "🍹"
        },
        {
            "category": "drinks",
            "section": "Boba Tea",
            "name": "Cheese Taro Boba Tea",
            "description": "Cheese Taro Boba Tea",
            "price": "130 EGP",
            "image": "assets/menu_images/cheese_taro_boba_tea.jpg",
            "icon": "🍹"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Gisha (Shrimp Crab)",
            "description": "Gisha (Shrimp Crab)",
            "price": "107 EGP (6 pcs)",
            "image": "assets/menu_images/gisha_shrimp_crab.jpg",
            "icon": "✨"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Shredded 'Hot' (Crab)",
            "description": "Shredded 'Hot' (Crab)",
            "price": "90 EGP (6 pcs)",
            "image": "assets/menu_images/shredded_hot_crab.jpg",
            "icon": "✨"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Golden (Crab Shrimp)",
            "description": "Golden (Crab Shrimp)",
            "price": "107 EGP (6 pcs)",
            "image": "assets/menu_images/golden_crab_shrimp.jpg",
            "icon": "✨"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Fire Ship (Doritos Shrimp)",
            "description": "Fire Ship (Doritos Shrimp)",
            "price": "107 EGP (6 pcs)",
            "image": "assets/menu_images/fire_ship_doritos_shrimp.jpg",
            "icon": "✨"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Crapo Chido (Cheddar Cheese Crab)",
            "description": "Crapo Chido (Cheddar Cheese Crab)",
            "price": "90 EGP (6 pcs)",
            "image": "assets/menu_images/crapo_chido_cheddar_cheese_crab.jpg",
            "icon": "✨"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Crispy Rice (Crab Shrimp)",
            "description": "Crispy Rice (Crab Shrimp)",
            "price": "107 EGP (6 pcs)",
            "image": "assets/menu_images/crispy_rice_crab_shrimp.jpg",
            "icon": "✨"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Slice Pizza Sushi",
            "description": "Slice Pizza Sushi",
            "price": "150 EGP",
            "image": "assets/menu_images/slice_pizza_sushi.jpg",
            "icon": "✨"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Open Sandwich",
            "description": "Open Sandwich",
            "price": "120 EGP",
            "image": "assets/menu_images/open_sandwich.jpg",
            "icon": "✨"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Sushi Burger",
            "description": "Sushi Burger",
            "price": "75 EGP",
            "image": "assets/menu_images/sushi_burger.jpg",
            "icon": "🍣🍔"
        },
        {
            "category": "inventions",
            "section": "New Inventions",
            "name": "Sushi Cake",
            "description": "Sushi Cake",
            "price": "400 EGP",
            "image": "assets/menu_images/sushi_cake.jpg",
            "icon": "🍣🎂"
        }
    ];

    const menuGrid = document.getElementById('menuGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderMenu(filterCategory = 'all') {
        menuGrid.innerHTML = ''; // Clear current menu items
        let currentSection = '';

        menuData.forEach(item => {
            if (filterCategory === 'all' || item.category === filterCategory) {
                if (item.section !== currentSection) {
                    currentSection = item.section;
                    const sectionHeader = `
                        <div class="col-span-full text-center mb-8">
                            <h3 class="text-3xl font-playfair font-bold text-sushi-gold">${currentSection}</h3>
                            <div class="w-16 h-1 bg-gradient-to-r from-sushi-gold to-yellow-400 mx-auto rounded-full mt-2"></div>
                        </div>
                    `;
                    menuGrid.insertAdjacentHTML('beforeend', sectionHeader);
                }

                const menuItemHtml = `
                    <div class="menu-item menu-card glass-effect rounded-2xl p-6 ${item.category}" data-aos="fade-up">
                        <div class="relative mb-4 overflow-hidden rounded-xl">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500">
                            <div class="absolute top-4 right-4 bg-sushi-gold text-sushi-black px-3 py-1 rounded-full text-sm font-semibold">
                                ${item.icon}
                            </div>
                        </div>
                        <h3 class="text-xl font-playfair font-bold mb-2 text-sushi-gold">${item.name}</h3>
                        <p class="text-gray-300 mb-4">${item.description}</p>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-2xl font-bold text-sushi-gold">${item.price}</span>
                        </div>
                        <button class="btn-glow w-full bg-gradient-to-r from-sushi-red to-red-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Order Now
                        </button>
                    </div>
                `;
                menuGrid.insertAdjacentHTML('beforeend', menuItemHtml);
            }
        });
    }

    // Initial render
    renderMenu('all');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-gradient-to-r', 'from-sushi-gold', 'to-yellow-400', 'text-sushi-black');
                b.classList.add('bg-transparent', 'border-2', 'border-sushi-gold', 'text-sushi-gold');
            });
            btn.classList.add('active', 'bg-gradient-to-r', 'from-sushi-gold', 'to-yellow-400', 'text-sushi-black');
            btn.classList.remove('bg-transparent', 'border-2', 'border-sushi-gold', 'text-sushi-gold');

            const filter = btn.getAttribute('data-filter');
            renderMenu(filter);
        });
    });
});


