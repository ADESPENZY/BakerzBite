const bakerzItems = [
    // Cakes
    { id: 1, title: "Vanilla Bliss", image: "/images/cake1.jpg", description: "Classic vanilla cream cake.", price: 5000, category: "Cakes" },
    { id: 2, title: "Choco Lava", image: "/images/cake2.jpg", description: "Molten chocolate center cake.", price: 10000, category: "Cakes" },
    { id: 3, title: "Red Velvet", image: "/images/cake3.jpg", description: "Velvety smooth and creamy.", price: 7000,  category: "Cakes" },
    { id: 4, title: "Strawberry Cream", image: "/images/cake4.jpg", description: "Loaded with strawberries.", price: 9000,  category: "Cakes" },
    { id: 5, title: "Black Forest", image: "/images/cake5.jpg", description: "Chocolate cherry dream.", price: 27000,  category: "Cakes" },
    { id: 6, title: "Lemon Drizzle", image: "/images/cake6.jpg", description: "Zesty lemon goodness.", price: 15000,  category: "Cakes" },
    { id: 7, title: "Carrot Cake", image: "/images/cake7.jpg", description: "Spiced and nutty carrot cake.", price: 25000,  category: "Cakes" },
    { id: 8, title: "Cheesecake", image: "/images/cake8.jpg", description: "Classic New York cheesecake.", price: 30000,  category: "Cakes" },
    { id: 9, title: "Birthday Blast", image: "/images/cake9.jpg", description: "Perfect birthday delight.", price: 56000,  category: "Cakes" },
  
    // Pastries
    { id: 10, title: "Croissant", image: "/images/pastry1.jpg", description: "Buttery flaky pastry.", price: 16000, category: "Pastries" },
    { id: 11, title: "Pain au Chocolat", image: "/images/pastry2.jpg", description: "Chocolate filled goodness.", price: 17000, category: "Pastries" },
    { id: 12, title: "Apple Danish", image: "/images/pastry3.jpg", description: "Topped with caramel.", price: 26000, category: "Pastries" },
    { id: 13, title: "Almond Twist", image: "/images/pastry4.jpg", description: "Crispy with almond glaze.", price: 9000, category: "Pastries" },
    { id: 14, title: "Cream Horn", image: "/images/pastry5.jpg", description: "Filled with vanilla cream.", price: 11000, category: "Pastries" },
    { id: 15, title: "Strudel", image: "/images/pastry6.jpg", description: "Warm apple filling.", price: 17000, category: "Pastries" },
    { id: 16, title: "Cinnamon Roll", image: "/images/pastry7.jpg", description: "Sticky, sweet & spicy.", price: 37000, category: "Pastries" },
    { id: 17, title: "Mille-Feuille", image: "/images/pastry8.jpg", description: "Layered with custard.", price: 18000, category: "Pastries" },
    { id: 18, title: "Puff Pastry Bites", image: "/images/pastry9.jpg", description: "Perfect finger food.", price: 62000, category: "Pastries" },
  
    // Bread
    { id: 19, title: "Sourdough", image: "/images/bread1.jpg", description: "Tangy artisan loaf.", price: 29000, category: "Bread" },
    { id: 20, title: "Brioche", image: "/images/bread2.jpg", description: "Soft and buttery.", price: 40000, category: "Bread" },
    { id: 21, title: "Ciabatta", image: "/images/bread3.jpg", description: "Rustic Italian bread.", price: 32000, category: "Bread" },
    { id: 22, title: "Baguette", image: "/images/bread4.jpg", description: "French crusty stick.", price: 21000, category: "Bread" },
    { id: 23, title: "Focaccia", image: "/images/bread5.jpg", description: "With rosemary & olives.", price: 23000, category: "Bread" },
    { id: 24, title: "Whole Wheat", image: "/images/bread6.jpg", description: "Healthy & hearty.", price: 12000, category: "Bread" },
    { id: 25, title: "Garlic Bread", image: "/images/bread7.jpg", description: "Infused with herbs.", category: "Bread" },
    { id: 26, title: "Milk Loaf", image: "/images/bread8.jpg", description: "Soft & fluffy.", price: 19000, category: "Bread" },
    { id: 27, title: "Bagel", image: "/images/bread9.jpg", description: "Toasted & chewy.", price: 37000, category: "Bread" },
  
    // Drinks
    { id: 28, title: "Fruit Punch", image: "/images/drink1.jpg", description: "Tropical blend.", category: "Drinks" },
    { id: 29, title: "Lemonade", image: "/images/drink2.jpg", description: "Freshly squeezed.", category: "Drinks" },
    { id: 30, title: "Choco Milkshake", image: "/images/drink3.jpg", description: "Thick and creamy.", category: "Drinks" },
    { id: 31, title: "Coffee Latte", image: "/images/drink4.jpg", description: "Warm & energizing.", category: "Drinks" },
    { id: 32, title: "Matcha", image: "/images/drink5.jpg", description: "Green tea power.", category: "Drinks" },
    { id: 33, title: "Smoothie Mix", image: "/images/drink6.jpg", description: "Fruity blast.", category: "Drinks" },
    { id: 34, title: "Iced Tea", image: "/images/drink7.jpg", description: "Chilled and refreshing.", category: "Drinks" },
    { id: 35, title: "Vanilla Shake", image: "/images/drink8.jpg", description: "Sweet and creamy.", category: "Drinks" },
    { id: 36, title: "Cold Brew", image: "/images/drink9.jpg", description: "Brewed to chill.", category: "Drinks" },
  
    // Snacks
    { id: 37, title: "Meat Pie", image: "/images/snack1.jpg", description: "Flaky beef pie.", category: "Snacks" },
    { id: 38, title: "Sausage Roll", image: "/images/snack2.jpg", description: "Stuffed & crispy.", category: "Snacks" },
    { id: 39, title: "Chin Chin", image: "/images/snack3.jpg", description: "Crunchy bites.", category: "Snacks" },
    { id: 40, title: "Doughnut", image: "/images/snack4.jpg", description: "Sugary rings.", category: "Snacks" },
    { id: 41, title: "Spring Rolls", image: "/images/snack5.jpg", description: "Veggie-filled rolls.", category: "Snacks" },
    { id: 42, title: "Puff Puff", image: "/images/snack6.jpg", description: "Nigerian delight.", category: "Snacks" },
    { id: 43, title: "Mini Pizza", image: "/images/snack7.jpg", description: "Cheesy snack bites.", category: "Snacks" },
    { id: 44, title: "Mozzarella Sticks", image: "/images/snack8.jpg", description: "Ooey gooey cheese.", category: "Snacks" },
    { id: 45, title: "Samosa", image: "/images/snack9.jpg", description: "Spiced and savory.", category: "Snacks" },
  
    // Special Orders
    { id: 46, title: "Wedding Cake", image: "/images/special1.jpg", description: "Custom tiered cake.", category: "Special Orders" },
    { id: 47, title: "Baby Shower Cake", image: "/images/special2.jpg", description: "Cute & pastel.", category: "Special Orders" },
    { id: 48, title: "Graduation Cake", image: "/images/special3.jpg", description: "Cap & diploma theme.", category: "Special Orders" },
    { id: 49, title: "Unicorn Cake", image: "/images/special4.jpg", description: "Magical birthday cake.", category: "Special Orders" },
    { id: 50, title: "Photo Cake", image: "/images/special5.jpg", description: "Edible image topper.", category: "Special Orders" },
    { id: 51, title: "Theme Cupcakes", image: "/images/special6.jpg", description: "Custom for parties.", category: "Special Orders" },
    { id: 52, title: "Letter Cake", image: "/images/special7.jpg", description: "Alphabet-shaped cake.", category: "Special Orders" },
    { id: 53, title: "Surprise Box Cake", image: "/images/special8.jpg", description: "Fun reveal inside.", category: "Special Orders" },
    { id: 54, title: "Number Cake", image: "/images/special9.jpg", description: "Age or date cake.", category: "Special Orders" },
  ]
  
  export default bakerzItems
  