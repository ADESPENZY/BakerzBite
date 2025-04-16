const merchItems = [
    // Aprons
    { id: 1, title: "Classic Baker Apron", image: "/images/apron1.jpg", description: "Adjustable and durable.", price: 16000,   type: "merchandize",  category: "Aprons" },
    { id: 2, title: "Floral Apron", image: "/images/apron2.jpg", description: "Chic and comfy.",  type: "merchandize", price: 12000,   category: "Aprons" },
    { id: 3, title: "Kids Apron Set", image: "/images/apron3.jpg", description: "Mini baker style.",  type: "merchandize", price: 10000,  category: "Aprons" },
    { id: 4, title: "Leather Apron", image: "/images/apron4.jpg", description: "Stylish and strong.",  type: "merchandize", price: 18000,  category: "Aprons" },
    { id: 5, title: "Personalized Apron", image: "/images/apron5.jpg", description: "Add your name or logo.",  type: "merchandize", price: 11000,  category: "Aprons" },
    { id: 6, title: "Holiday Apron", image: "/images/apron6.jpg", description: "Festive baking vibes.",  type: "merchandize", price: 20000,  category: "Aprons" },
  
    // Mugs
    { id: 7, title: "Bake Life Mug", image: "/images/mug1.jpg", description: "Start your day right.",  type: "merchandize", price: 26000,  category: "Mugs" },
    { id: 8, title: "Cupcake Queen Mug", image: "/images/mug2.jpg", description: "Perfect for sweet sips.",  type: "merchandize", price: 11000,  category: "Mugs" },
    { id: 9, title: "Whisk Taker Mug", image: "/images/mug3.jpg", description: "For risk-takers!",  type: "merchandize", price: 23000,  category: "Mugs" },
    { id: 10, title: "Logo Mug", image: "/images/mug4.jpg", description: "Show off your brand.",  type: "merchandize", price: 25000,  category: "Mugs" },
    { id: 11, title: "Custom Photo Mug", image: "/images/mug5.jpg", description: "Your memories, your mug.",  type: "merchandize", price: 13000,  category: "Mugs" },
    { id: 12, title: "Icing & Coffee Mug", image: "/images/mug6.jpg", description: "Perfect combo mug.",  type: "merchandize", price: 29000,  category: "Mugs" },
  
    // T-Shirts
    { id: 13, title: "Bake Mode Tee", image: "/images/shirt1.jpg", description: "Soft cotton tee.",  type: "merchandize", price: 16000,  category: "T-Shirts" },
    { id: 14, title: "Whisk Squad Shirt", image: "/images/shirt2.jpg", description: "Join the team!",  type: "merchandize", price: 19000,  category: "T-Shirts" },
    { id: 15, title: "Cupcake Crew Tee", image: "/images/shirt3.jpg", description: "Colorful and fun.",  type: "merchandize", price: 15000,  category: "T-Shirts" },
    { id: 16, title: "Baker Vibes Only", image: "/images/shirt4.jpg", description: "Good vibes tee.",  type: "merchandize", price: 20000,  category: "T-Shirts" },
    { id: 17, title: "Eat Cake Shirt", image: "/images/shirt5.jpg", description: "Life motto tee.",  type: "merchandize", price: 18000,  category: "T-Shirts" },
    { id: 18, title: "Custom Name Tee", image: "/images/shirt6.jpg", description: "Personalize it!",  type: "merchandize", price: 12000,  category: "T-Shirts" },
  
    // Tote Bags
    { id: 19, title: "Bake & Carry Tote", image: "/images/tote1.jpg", description: "Spacious & stylish.",  type: "merchandize", price: 26000,  category: "Tote Bags" },
    { id: 20, title: "Cupcake Print Tote", image: "/images/tote2.jpg", description: "Adorable print.",  type: "merchandize", price: 24000,  category: "Tote Bags" },
    { id: 21, title: "Reusable Grocery Tote", image: "/images/tote3.jpg", description: "Eco-friendly shopping.",  type: "merchandize", price: 23000,  category: "Tote Bags" },
    { id: 22, title: "Custom Logo Tote", image: "/images/tote4.jpg", description: "Perfect promo bag.",  type: "merchandize", price: 21000,  category: "Tote Bags" },
    { id: 23, title: "Canvas Tote", image: "/images/tote5.jpg", description: "Simple & strong.",  type: "merchandize", price: 26000,  category: "Tote Bags" },
    { id: 24, title: "Mini Baker Bag", image: "/images/tote6.jpg", description: "Kids size fun.",  type: "merchandize", price: 29000,  category: "Tote Bags" },
  
    // Baking Tools
    { id: 25, title: "Silicone Spatula Set", image: "/images/tool1.jpg", description: "Heat-resistant tools.",  type: "merchandize", price: 11000,  category: "Baking Tools" },
    { id: 26, title: "Measuring Cups", image: "/images/tool2.jpg", description: "Accurate and pretty.",  type: "merchandize", price: 12000,  category: "Baking Tools" },
    { id: 27, title: "Whisk Set", image: "/images/tool3.jpg", description: "For all textures.",  type: "merchandize", price: 10000,  category: "Baking Tools" },
    { id: 28, title: "Cookie Cutter Kit", image: "/images/tool4.jpg", description: "Shapes galore!",  type: "merchandize", price: 16000,  category: "Baking Tools" },
    { id: 29, title: "Rolling Pin", image: "/images/tool5.jpg", description: "Smooth baking flow.",  type: "merchandize", price: 19000,  category: "Baking Tools" },
    { id: 30, title: "Icing Nozzles Set", image: "/images/tool6.jpg", description: "Pro designs easy.",  type: "merchandize", price: 16700,  category: "Baking Tools" },
  
    // Gift Sets
    { id: 31, title: "Baking Starter Box", image: "/images/gift1.jpg", description: "Great for beginners.",  type: "merchandize", price: 15000,  category: "Gift Sets" },
    { id: 32, title: "Cupcake Lover Box", image: "/images/gift2.jpg", description: "Everything cupcakes!",  type: "merchandize", price: 21000,  category: "Gift Sets" },
    { id: 33, title: "Holiday Gift Set", image: "/images/gift3.jpg", description: "Festive treats pack.",  type: "merchandize", price: 28000,  category: "Gift Sets" },
    { id: 34, title: "Deluxe Baker's Box", image: "/images/gift4.jpg", description: "All-in-one tools.",  type: "merchandize", price: 10000,  category: "Gift Sets" },
    { id: 35, title: "Choco Heaven Set", image: "/images/gift5.jpg", description: "For chocoholics.",  type: "merchandize", price: 16000,  category: "Gift Sets" },
    { id: 36, title: "Custom Gift Box", image: "/images/gift6.jpg", description: "Curated just for you.",  type: "merchandize", price: 17000,  category: "Gift Sets" },
  ];
  
  export default merchItems;
  