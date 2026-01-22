// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="canning/index.html"><strong aria-hidden="true">2.</strong> Canning Calendar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="equipment/index.html"><strong aria-hidden="true">3.</strong> Equipment</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="equipment/nespresso.html"><strong aria-hidden="true">3.1.</strong> Nespresso Descaling</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="equipment/smokey_mountain_cooker.html"><strong aria-hidden="true">3.2.</strong> Smoker</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appetizers/index.html"><strong aria-hidden="true">4.</strong> Appetizers</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appetizers/blue_cheese_dip.html"><strong aria-hidden="true">4.1.</strong> Blue Cheese Dip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appetizers/chicken_satay.html"><strong aria-hidden="true">4.2.</strong> Chicken Satay</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appetizers/corn_dip.html"><strong aria-hidden="true">4.3.</strong> Corn Dip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appetizers/cheese_spread.html"><strong aria-hidden="true">4.4.</strong> Latin Quarter Cheese Spread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appetizers/nacho_cheese.html"><strong aria-hidden="true">4.5.</strong> Nacho Cheese</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appetizers/shrimp_cocktail.html"><strong aria-hidden="true">4.6.</strong> Shrimp Cocktail</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appetizers/shrimp_skewers.html"><strong aria-hidden="true">4.7.</strong> Thai Shrimp Skewers</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/index.html"><strong aria-hidden="true">5.</strong> Beverages</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/agave_simple_syrup.html"><strong aria-hidden="true">5.1.</strong> Agave Simple Syrup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/smoothie.html"><strong aria-hidden="true">5.2.</strong> Breakfast Smoothie</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/cold_brew_coffee.html"><strong aria-hidden="true">5.3.</strong> Cold Brew Coffee</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/french_press.html"><strong aria-hidden="true">5.4.</strong> French Press Coffee</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/irish_cream.html"><strong aria-hidden="true">5.5.</strong> Irish Cream</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/lemonade_concentrate.html"><strong aria-hidden="true">5.6.</strong> Leomonade Concentrate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/paloma.html"><strong aria-hidden="true">5.7.</strong> Paloma</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="beverages/percolator_coffee.html"><strong aria-hidden="true">5.8.</strong> Percolator Coffee</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/index.html"><strong aria-hidden="true">6.</strong> Bread</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/bagels.html"><strong aria-hidden="true">6.1.</strong> Bagels</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/corn_tortillas.html"><strong aria-hidden="true">6.2.</strong> Corn Tortillas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/daily_sourdough.html"><strong aria-hidden="true">6.3.</strong> Daily Sourdough</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/easy_biscuits.html"><strong aria-hidden="true">6.4.</strong> Easy Biscuits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/english_muffins.html"><strong aria-hidden="true">6.5.</strong> English Muffins</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/four_small_loaves.html"><strong aria-hidden="true">6.6.</strong> Four Small Loaves</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/gravity_cheese_biscuits.html"><strong aria-hidden="true">6.7.</strong> Gravity Cheese Biscuits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/naan.html"><strong aria-hidden="true">6.8.</strong> Naan</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/no_knead_bread.html"><strong aria-hidden="true">6.9.</strong> No-Knead Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/parker_house_rolls.html"><strong aria-hidden="true">6.10.</strong> Parker House Rolls</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/pl_sourdough.html"><strong aria-hidden="true">6.11.</strong> Perfect Loaf Sourdough</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/sandwich_bread.html"><strong aria-hidden="true">6.12.</strong> Sandwich Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/sesame_buns.html"><strong aria-hidden="true">6.13.</strong> Sesame Buns</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/sourdough_bagels.html"><strong aria-hidden="true">6.14.</strong> Sourdough Bagels</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/sourdough_experiment.html"><strong aria-hidden="true">6.15.</strong> Sourdough Experiment</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/tb_sourdough.html"><strong aria-hidden="true">6.16.</strong> Tartine Bread Sourdough</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bread/weeknight_sourdough.html"><strong aria-hidden="true">6.17.</strong> Weeknight Sourdough</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/index.html"><strong aria-hidden="true">7.</strong> Condiments, Spices &amp; Sauces</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/bbq_rub.html"><strong aria-hidden="true">7.1.</strong> BBQ Rub</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/blue_cheese_dressing.html"><strong aria-hidden="true">7.2.</strong> Blue Cheese Dressing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/caesar_dressing.html"><strong aria-hidden="true">7.3.</strong> Caesar Dressing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/herb_vinaigrette.html"><strong aria-hidden="true">7.4.</strong> Herb Vinaigrette</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/cheese_sauce.html"><strong aria-hidden="true">7.5.</strong> Cheese Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/chili_sauce.html"><strong aria-hidden="true">7.6.</strong> Chili Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/chimichurri.html"><strong aria-hidden="true">7.7.</strong> Chimichurri</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/chipotle_mayo.html"><strong aria-hidden="true">7.8.</strong> Chipotle Mayo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/cranberry_sauce.html"><strong aria-hidden="true">7.9.</strong> Cranberry Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/cream_cheese.html"><strong aria-hidden="true">7.10.</strong> Cream Cheese</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/crema.html"><strong aria-hidden="true">7.11.</strong> Crema</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/habanero_pepper_sauce.html"><strong aria-hidden="true">7.12.</strong> Habanero Pepper Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/hollandaise.html"><strong aria-hidden="true">7.13.</strong> Hollandaise</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/horseradish_cream.html"><strong aria-hidden="true">7.14.</strong> Horseradish Cream</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/hot_sauce.html"><strong aria-hidden="true">7.15.</strong> Hot Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/kfc.html"><strong aria-hidden="true">7.16.</strong> KFC Spice</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/korean_bbq.html"><strong aria-hidden="true">7.17.</strong> Korean BBQ Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/mayonnaise.html"><strong aria-hidden="true">7.18.</strong> Mayonnaise</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/mop.html"><strong aria-hidden="true">7.19.</strong> Mop Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/mustard_sauce.html"><strong aria-hidden="true">7.20.</strong> Mustard Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/number_5_sauce.html"><strong aria-hidden="true">7.21.</strong> Number 5 Barbecue Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/olive_garden_dressing.html"><strong aria-hidden="true">7.22.</strong> Olive Garden Salad Dressing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/pesto.html"><strong aria-hidden="true">7.23.</strong> Pesto</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/pizza_sauce.html"><strong aria-hidden="true">7.24.</strong> Pizza Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/rub.html"><strong aria-hidden="true">7.25.</strong> Rub</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/salsa_verde.html"><strong aria-hidden="true">7.26.</strong> Salsa Verde</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/taco_seasoning.html"><strong aria-hidden="true">7.27.</strong> Taco Seasoning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/tartar_sauce.html"><strong aria-hidden="true">7.28.</strong> Tartar Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/tomato_sauce.html"><strong aria-hidden="true">7.29.</strong> Tomato Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/turkey_gravy.html"><strong aria-hidden="true">7.30.</strong> Turkey Gravy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/tzatziki.html"><strong aria-hidden="true">7.31.</strong> Tzatziki</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="condiments/vietnamese_dipping_sauces.html"><strong aria-hidden="true">7.32.</strong> Vietnamese Dipping Sauces</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/index.html"><strong aria-hidden="true">8.</strong> Desserts</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/apple_crumble.html"><strong aria-hidden="true">8.1.</strong> Apple Crumble</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/apple_fritter_bread.html"><strong aria-hidden="true">8.2.</strong> Apple Fritter Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/banana_bread.html"><strong aria-hidden="true">8.3.</strong> Banana Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/blueberry_buckle.html"><strong aria-hidden="true">8.4.</strong> Blueberry Buckle</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/blueberry_mug_cake.html"><strong aria-hidden="true">8.5.</strong> Blueberry Mug Cake</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/buttertart_pie.html"><strong aria-hidden="true">8.6.</strong> Butter Tart Pie</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/caramel_apple_crisp.html"><strong aria-hidden="true">8.7.</strong> Caramel Apple Crisp</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/cheesecake.html"><strong aria-hidden="true">8.8.</strong> Cheesecake in a Jar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/chocolate_pudding.html"><strong aria-hidden="true">8.9.</strong> Chocolate Pudding</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/chocolate_zucchini.html"><strong aria-hidden="true">8.10.</strong> Chocolate Zucchini Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/deep_dish_apple_pie.html"><strong aria-hidden="true">8.11.</strong> Deep Dish Apple Pie</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/dutchies.html"><strong aria-hidden="true">8.12.</strong> Dutchie Donuts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/gluten_free_apple_crisp.html"><strong aria-hidden="true">8.13.</strong> Gluten-Free Apple Crisp</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/gravity_carrot_cake.html"><strong aria-hidden="true">8.14.</strong> Gravity Carrot Cake</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/hard_chocolate_sauce.html"><strong aria-hidden="true">8.15.</strong> Hard Chocolate Sauce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/millionaires_shortbread.html"><strong aria-hidden="true">8.16.</strong> Millionaire&#39;s Shortbread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/mincemeat.html"><strong aria-hidden="true">8.17.</strong> Mincemeat</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/pie_dough.html"><strong aria-hidden="true">8.18.</strong> Pie Dough</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/pouding_chomeur.html"><strong aria-hidden="true">8.19.</strong> Pouding Chomeur</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/pumpkin_bread.html"><strong aria-hidden="true">8.20.</strong> Pumpkin Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/pumpkin_pie.html"><strong aria-hidden="true">8.21.</strong> Pumpkin Pie</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/salted_caramel_bars.html"><strong aria-hidden="true">8.22.</strong> Salted Caramel Chocolate Stack Bars</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/salted_peanut_caramel_tart.html"><strong aria-hidden="true">8.23.</strong> Salted Peanut And Caramel Tart</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/shortbread_cutout.html"><strong aria-hidden="true">8.24.</strong> Shortbread Cutout Cookies</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/strawberry_peach_cobbler.html"><strong aria-hidden="true">8.25.</strong> Strawberry Peach Cobbler</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="desserts/strawberry_rhubarb.html"><strong aria-hidden="true">8.26.</strong> Strawberry Rhubarb Crisp</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/index.html"><strong aria-hidden="true">9.</strong> Mains</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/air_fryer_wings.html"><strong aria-hidden="true">9.1.</strong> Air Fryer Wings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/argentinian_style_steak.html"><strong aria-hidden="true">9.2.</strong> Argentinian Style Steak</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/baked_ziti.html"><strong aria-hidden="true">9.3.</strong> Baked Ziti</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/beef_and_bean_chili.html"><strong aria-hidden="true">9.4.</strong> Beef And Bean Chili</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/beef_stew.html"><strong aria-hidden="true">9.5.</strong> Beef Stew</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/beef_stirfry.html"><strong aria-hidden="true">9.6.</strong> Beef Stir Fry</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/weeknight_bolognese.html"><strong aria-hidden="true">9.7.</strong> Bolognese</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/breakfast.html"><strong aria-hidden="true">9.8.</strong> Breakfast</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/brisket.html"><strong aria-hidden="true">9.9.</strong> Brisket</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/cabbage_rolls.html"><strong aria-hidden="true">9.10.</strong> Cabbage Rolls</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/cassoulet.html"><strong aria-hidden="true">9.11.</strong> Cassoulet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/chicken_and_sliders.html"><strong aria-hidden="true">9.12.</strong> Chicken And Sliders</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/chicken_pot_pie.html"><strong aria-hidden="true">9.13.</strong> Chicken Pot Pie</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/chicken_souvlaki.html"><strong aria-hidden="true">9.14.</strong> Chicken Souvlaki</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/chicken_vindaloo.html"><strong aria-hidden="true">9.15.</strong> Chicken Vindaloo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/coconut_curry_shrimp.html"><strong aria-hidden="true">9.16.</strong> Coconut Curry Shrimp</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/deconstructed_turkey.html"><strong aria-hidden="true">9.17.</strong> Deconstructed Turkey</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/detroit_pizza.html"><strong aria-hidden="true">9.18.</strong> Detroit Pizza</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/deviled_pork_chops.html"><strong aria-hidden="true">9.19.</strong> Deviled Pork Chops</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/donairs.html"><strong aria-hidden="true">9.20.</strong> Donairs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/alfredo.html"><strong aria-hidden="true">9.21.</strong> Fettuccine Alfredo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/grain_bowls.html"><strong aria-hidden="true">9.22.</strong> Grain Bowls</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/ground_beef_chili.html"><strong aria-hidden="true">9.23.</strong> Ground Beef Chili</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/panzanella_salad.html"><strong aria-hidden="true">9.24.</strong> Grilled Chicken Panzanella Salad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/grilled_pizza.html"><strong aria-hidden="true">9.25.</strong> Grilled Pizza</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/halloumi_caesar_salad.html"><strong aria-hidden="true">9.26.</strong> Halloumi Caesar Salad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/ham_with_pineapple.html"><strong aria-hidden="true">9.27.</strong> Ham with Pineapple</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/hoisin_pork_lettuce_wraps.html"><strong aria-hidden="true">9.28.</strong> Hoisin Pork Lettuce Wraps</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/huevos_rancheros.html"><strong aria-hidden="true">9.29.</strong> Huevos Rancheros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/jerk_chicken.html"><strong aria-hidden="true">9.30.</strong> Jerk Chicken</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/korean_wings.html"><strong aria-hidden="true">9.31.</strong> Korean Fried Chicken Wings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/kung_pao_chicken.html"><strong aria-hidden="true">9.32.</strong> Kung Pao Chicken</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/atk_meatballs.html"><strong aria-hidden="true">9.33.</strong> Meatballs (ATK)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/meatballs.html"><strong aria-hidden="true">9.34.</strong> Meatballs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/meatloaf.html"><strong aria-hidden="true">9.35.</strong> Meatloaf</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/mushroom_lasagna.html"><strong aria-hidden="true">9.36.</strong> Mushroom Lasagna</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/ny_street_cart_chicken.html"><strong aria-hidden="true">9.37.</strong> NY Street Cart Chicken</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/one_batch_fried_chicken.html"><strong aria-hidden="true">9.38.</strong> One Batch Fried Chicken</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/oven_ribs.html"><strong aria-hidden="true">9.39.</strong> Oven Ribs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pad_thai.html"><strong aria-hidden="true">9.40.</strong> Pad Thai</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pancakes.html"><strong aria-hidden="true">9.41.</strong> Pancakes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pasta_with_cauliflower.html"><strong aria-hidden="true">9.42.</strong> Pasta With Cauliflower</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/perfect_ramen.html"><strong aria-hidden="true">9.43.</strong> Perfect Ramen</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pesto.html"><strong aria-hidden="true">9.44.</strong> Pesto</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pizza_dough.html"><strong aria-hidden="true">9.45.</strong> Pizza Dough</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pizza_papalis.html"><strong aria-hidden="true">9.46.</strong> Pizza Papalis</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pork_belly_burnt_ends.html"><strong aria-hidden="true">9.47.</strong> Pork Belly Burnt Ends</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pork_carnitas.html"><strong aria-hidden="true">9.48.</strong> Pork Carnitas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/pressure_cooker_beef_stew.html"><strong aria-hidden="true">9.49.</strong> Pressure Cooker Beef Stew</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/prime_rib.html"><strong aria-hidden="true">9.50.</strong> Prime Rib</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/shaking_beef.html"><strong aria-hidden="true">9.51.</strong> Shaking Beef</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/shepherds_pie.html"><strong aria-hidden="true">9.52.</strong> Shepherd&#39;s Pie</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/shrimp_boil.html"><strong aria-hidden="true">9.53.</strong> Shrimp Boil</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/shrimp_burgers.html"><strong aria-hidden="true">9.54.</strong> Shrimp Burgers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/smoke_roasted_ham.html"><strong aria-hidden="true">9.55.</strong> Smoke Roasted Ham</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/smothered_chicken.html"><strong aria-hidden="true">9.56.</strong> Smothered Chicken</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/spaghetti_squash.html"><strong aria-hidden="true">9.57.</strong> Spaghetti Squash</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/macaroni_and_cheese.html"><strong aria-hidden="true">9.58.</strong> Stovetop Macaroni and Cheese</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/strip_loin_roast.html"><strong aria-hidden="true">9.59.</strong> Strip Loin Roast</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/stuffed_shells.html"><strong aria-hidden="true">9.60.</strong> Stuffed Shells</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/tacos_al_carbon.html"><strong aria-hidden="true">9.61.</strong> Tacos al Carbon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/top_loin_roast.html"><strong aria-hidden="true">9.62.</strong> Top Loin Roast</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/thick_cut_pork.html"><strong aria-hidden="true">9.63.</strong> Thick Cut Pork Chops</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/tuna_casserole.html"><strong aria-hidden="true">9.64.</strong> Tuna Casserole</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/tuna_lasagna.html"><strong aria-hidden="true">9.65.</strong> Tuna Lasagna</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/tuscan_steak.html"><strong aria-hidden="true">9.66.</strong> Tuscan Steak Salad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/vegetarian_chili.html"><strong aria-hidden="true">9.67.</strong> Vegetarian Chili</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/waffles.html"><strong aria-hidden="true">9.68.</strong> Waffles</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mains/welsh_rarebit.html"><strong aria-hidden="true">9.69.</strong> Welsh Rarebit</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mealPlanning/index.html"><strong aria-hidden="true">10.</strong> Meal Planning</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mealPlanning/thanksgiving_2019.html"><strong aria-hidden="true">10.1.</strong> Thanksgiving 2019</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mealPlanning/christmas_2019.html"><strong aria-hidden="true">10.2.</strong> Christmas 2019</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mealPlanning/christmas_2023.html"><strong aria-hidden="true">10.3.</strong> Christmas 2023</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mealPlanning/thanksgiving_2024.html"><strong aria-hidden="true">10.4.</strong> Thanksgiving 2024</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mealPlanning/easter_2025.html"><strong aria-hidden="true">10.5.</strong> Easter 2025</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="mealPlanning/christmas_2025.html"><strong aria-hidden="true">10.6.</strong> Christmas 2025</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="misc/index.html"><strong aria-hidden="true">11.</strong> Miscellaneous</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="misc/dog_food.html"><strong aria-hidden="true">11.1.</strong> Dog Food</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="misc/pill_pockets.html"><strong aria-hidden="true">11.2.</strong> Pill Pockets</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="misc/squirrel.html"><strong aria-hidden="true">11.3.</strong> Squirrel Repellant - Dry</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="misc/pepper_spray.html"><strong aria-hidden="true">11.4.</strong> Squirrel Repellant - Wet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="misc/turkey_brine.html"><strong aria-hidden="true">11.5.</strong> Turkey Brine</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/index.html"><strong aria-hidden="true">12.</strong> Preserving</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/bacon.html"><strong aria-hidden="true">12.1.</strong> Bacon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/dill_pickles.html"><strong aria-hidden="true">12.2.</strong> Dill Pickles</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/fermented_dill_pickles.html"><strong aria-hidden="true">12.3.</strong> Fermented Dill Pickles</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/horseradish.html"><strong aria-hidden="true">12.4.</strong> Horesradish</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/maraschino.html"><strong aria-hidden="true">12.5.</strong> Maraschino Cherries</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/pickled_cauliflower.html"><strong aria-hidden="true">12.6.</strong> Pickled Cauliflower</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/pickled_peppers.html"><strong aria-hidden="true">12.7.</strong> Pickled Peppers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/quick_pickles.html"><strong aria-hidden="true">12.8.</strong> Quick Pickles</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/saskatoon_jam.html"><strong aria-hidden="true">12.9.</strong> Saskatoon Jam</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/strawberry_jam.html"><strong aria-hidden="true">12.10.</strong> Strawberry Jam</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/tasso_ham.html"><strong aria-hidden="true">12.11.</strong> Tasso Ham</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/tomato_chow.html"><strong aria-hidden="true">12.12.</strong> Tomato Chow</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="preserving/tomato_sauce.html"><strong aria-hidden="true">12.13.</strong> Tomato Sauce</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/index.html"><strong aria-hidden="true">13.</strong> Sides</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/baked_beans.html"><strong aria-hidden="true">13.1.</strong> Baked Beans</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/baked_potatoes.html"><strong aria-hidden="true">13.2.</strong> Baked Potatoes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/brussels_sprouts.html"><strong aria-hidden="true">13.3.</strong> Brussels Sprouts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/buns.html"><strong aria-hidden="true">13.4.</strong> Buns</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/chinese_restaurant_rice.html"><strong aria-hidden="true">13.5.</strong> Chinese Restaurant Style Rice</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/chipotle_potatoes.html"><strong aria-hidden="true">13.6.</strong> Chipotle Smashed Sweet Potatoes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/ci_kale.html"><strong aria-hidden="true">13.7.</strong> CI Kale Caesar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/coconut_rice.html"><strong aria-hidden="true">13.8.</strong> Coconut Rice</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/coleslaw.html"><strong aria-hidden="true">13.9.</strong> Coleslaw</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/corn_bread.html"><strong aria-hidden="true">13.10.</strong> Corn Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/creamed_corn.html"><strong aria-hidden="true">13.11.</strong> Creamed Corn</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/potato_casserole.html"><strong aria-hidden="true">13.12.</strong> Crock Pot Potato Casserole</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/dauphinoise_potatoes.html"><strong aria-hidden="true">13.13.</strong> Dauphinoise Potatoes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/fluffy_rice.html"><strong aria-hidden="true">13.14.</strong> Fluffy Rice</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/fondant_potatoes.html"><strong aria-hidden="true">13.15.</strong> Fondant Potatoes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/french_fries.html"><strong aria-hidden="true">13.16.</strong> French Fries</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/frijoles_charros.html"><strong aria-hidden="true">13.17.</strong> Frijoles Charros</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/garlic_bread.html"><strong aria-hidden="true">13.18.</strong> Garlic Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/glazed_carrots.html"><strong aria-hidden="true">13.19.</strong> Glazed Carrots</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/golden_rice.html"><strong aria-hidden="true">13.20.</strong> Golden Rice</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/green_beans.html"><strong aria-hidden="true">13.21.</strong> Green Beans</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/hamburger_buns.html"><strong aria-hidden="true">13.22.</strong> Hamburger Buns</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/home_fries.html"><strong aria-hidden="true">13.23.</strong> Home Fries</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/jalapeno_cheddar_corn_bread.html"><strong aria-hidden="true">13.24.</strong> Jalapeno Cheddar Corn Bread</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/mexican_beans.html"><strong aria-hidden="true">13.25.</strong> Mexican Beans</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/mexican_rice.html"><strong aria-hidden="true">13.26.</strong> Mexican Rice</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/moms_green_salad.html"><strong aria-hidden="true">13.27.</strong> Mom&#39;s Green Salad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/orange_jello_salad.html"><strong aria-hidden="true">13.28.</strong> Orange Jello Salad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/potato_salad.html"><strong aria-hidden="true">13.29.</strong> Potato Salad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/scalloped_potatoes.html"><strong aria-hidden="true">13.30.</strong> Scalloped Potatoes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/steakhouse_salad.html"><strong aria-hidden="true">13.31.</strong> Steakhouse Salad</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/stuffing.html"><strong aria-hidden="true">13.32.</strong> Stuffing / Dressing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/tortillas.html"><strong aria-hidden="true">13.33.</strong> Tortillas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/una_caesar.html"><strong aria-hidden="true">13.34.</strong> Una Kale Caesar</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/vegetable_medley.html"><strong aria-hidden="true">13.35.</strong> Vegetable Medley</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/whole_roasted_cauliflower.html"><strong aria-hidden="true">13.36.</strong> Whole Roasted Cauliflower</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sides/yorkshire_pudding.html"><strong aria-hidden="true">13.37.</strong> Yorkshire Pudding</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/index.html"><strong aria-hidden="true">14.</strong> Snacks</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/beef_jerky.html"><strong aria-hidden="true">14.1.</strong> Beef Jerky</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/cocktail_crisps.html"><strong aria-hidden="true">14.2.</strong> Cocktail Crisps</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/egg_bites.html"><strong aria-hidden="true">14.3.</strong> Egg Bites</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/hot_donair_dip.html"><strong aria-hidden="true">14.4.</strong> Hot Donair Dip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/hummus.html"><strong aria-hidden="true">14.5.</strong> Hummus</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/nuts_bolts.html"><strong aria-hidden="true">14.6.</strong> Nuts &amp; Bolts</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/pb_energy.html"><strong aria-hidden="true">14.7.</strong> Peanut Butter Engergy Bites</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/perfect_popcorn.html"><strong aria-hidden="true">14.8.</strong> Perfect Popcorn</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="snacks/popcorn_maker.html"><strong aria-hidden="true">14.9.</strong> Popcorn Maker</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/index.html"><strong aria-hidden="true">15.</strong> Soups</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/avgolemono.html"><strong aria-hidden="true">15.1.</strong> Avgolemono</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/butternut_squash.html"><strong aria-hidden="true">15.2.</strong> Butternut Squash, Sweet Potato, Lentil</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/cauliflower.html"><strong aria-hidden="true">15.3.</strong> Cauliflower Soup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/chicken_stock.html"><strong aria-hidden="true">15.4.</strong> Breville Fast Slow Cooker Chicken Stock</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/farmhouse_chicken_noodle_soup.html"><strong aria-hidden="true">15.5.</strong> Farmhouse Chicken Noodle Soup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/french_onion_soup.html"><strong aria-hidden="true">15.6.</strong> French Onion Soup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/minestrone_soup.html"><strong aria-hidden="true">15.7.</strong> Minestrone Soup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/mushroom.html"><strong aria-hidden="true">15.8.</strong> Mushroom Soup</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="soups/vegetable_soup.html"><strong aria-hidden="true">15.9.</strong> Vegetable Soup</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/index.html"><strong aria-hidden="true">16.</strong> To Try</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/bb_pickles.html"><strong aria-hidden="true">16.1.</strong> Bread and Butter Pickles</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/buttermilk.html"><strong aria-hidden="true">16.2.</strong> Buttermilk Substitute</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/chili_crisp.html"><strong aria-hidden="true">16.3.</strong> Chili Crisp</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/dandan.html"><strong aria-hidden="true">16.4.</strong> Dan Dan Noodles</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/flour_tortillas.html"><strong aria-hidden="true">16.5.</strong> Flour Tortillas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/grill_fried_chicken_wings.html"><strong aria-hidden="true">16.6.</strong> Grill Fried Chicken Wings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/grown_up_grilled_cheese.html"><strong aria-hidden="true">16.7.</strong> Grown Up Grilled Cheese</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/hellmans.html"><strong aria-hidden="true">16.8.</strong> Hellman&#39;s Mayo Clone</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/helluva_good_dip.html"><strong aria-hidden="true">16.9.</strong> Helluva Good Dip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trial/raisin_cinnamon.html"><strong aria-hidden="true">16.10.</strong> No Knead Raisin Cinnamon Bread</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

