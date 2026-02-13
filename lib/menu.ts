export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  popular?: boolean;
  chef?: boolean;
  image?: string;
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const dietaryFilters = [
  { id: 'vegetarian', label: 'Vegetarian', color: 'bg-emerald-500' },
  { id: 'vegan', label: 'Vegan', color: 'bg-green-500' },
  { id: 'gluten-free', label: 'Gluten Free', color: 'bg-amber-500' },
  { id: 'spicy', label: 'Spicy', color: 'bg-red-500' },
];

export const menuCategories: MenuCategory[] = [
  {
    id: 'antipasti',
    name: 'Antipasti',
    description: 'Begin your journey with our carefully curated selection of Italian starters',
    items: [
      {
        id: '1',
        name: 'Carpaccio di Manzo',
        description: 'Thinly sliced prime beef tenderloin, arugula, shaved parmesan, truffle oil, capers',
        price: 22,
        tags: ['gluten-free'],
        chef: true,
        allergens: ['dairy'],
      },
      {
        id: '2',
        name: 'Burrata e Prosciutto',
        description: 'Creamy burrata from Puglia, 24-month aged prosciutto di Parma, heirloom tomatoes, basil oil',
        price: 24,
        tags: ['gluten-free'],
        popular: true,
        allergens: ['dairy'],
      },
      {
        id: '3',
        name: 'Polpette della Nonna',
        description: 'Traditional meatballs in San Marzano tomato sauce, whipped ricotta, fresh basil',
        price: 18,
        tags: [],
        allergens: ['dairy', 'gluten'],
      },
      {
        id: '4',
        name: 'Carpaccio di Salmone',
        description: 'Scottish salmon, avocado mousse, cucumber gel, dill crème fraîche, salmon roe',
        price: 20,
        tags: ['gluten-free'],
        chef: true,
        allergens: ['dairy', 'fish'],
      },
      {
        id: '5',
        name: 'Melanzane alla Parmigiana',
        description: 'Layered eggplant, buffalo mozzarella, parmesan, fresh basil, tomato sauce',
        price: 16,
        tags: ['vegetarian'],
        popular: true,
        allergens: ['dairy', 'gluten'],
      },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta Fresca',
    description: 'Hand-rolled pasta crafted daily using centuries-old techniques and imported Italian flour',
    items: [
      {
        id: '6',
        name: 'Tagliatelle al Tartufo Nero',
        description: 'Fresh tagliatelle, black winter truffle, butter, parmesan fondue',
        price: 38,
        tags: ['vegetarian'],
        chef: true,
        allergens: ['dairy', 'gluten'],
      },
      {
        id: '7',
        name: 'Linguine alle Vongole Veraci',
        description: 'Manila clams, white wine, garlic, chili flakes, fresh parsley, extra virgin olive oil',
        price: 32,
        tags: [],
        popular: true,
        allergens: ['gluten', 'shellfish'],
      },
      {
        id: '8',
        name: 'Risotto allo Scoglio',
        description: 'Carnaroli rice, mixed seafood, saffron, fish stock, lemon zest',
        price: 34,
        tags: ['gluten-free'],
        chef: true,
        allergens: ['shellfish', 'fish'],
      },
      {
        id: '9',
        name: 'Cacio e Pepe',
        description: 'Spaghetti, pecorino Romano DOP, black pepper, pasta water emulsion',
        price: 24,
        tags: ['vegetarian'],
        popular: true,
        allergens: ['dairy', 'gluten'],
      },
      {
        id: '10',
        name: 'Paccheri alla Genovese',
        description: 'Large pasta tubes, slow-braised beef and onion ragù, parmesan',
        price: 28,
        tags: [],
        allergens: ['dairy', 'gluten'],
      },
      {
        id: '11',
        name: 'Ravioli di Zucca',
        description: 'Butternut squash filled pasta, sage brown butter, amaretti crumble, parmesan',
        price: 26,
        tags: ['vegetarian'],
        allergens: ['dairy', 'gluten', 'nuts'],
      },
    ],
  },
  {
    id: 'secondi',
    name: 'Secondi Piatti',
    description: 'Exquisite main courses featuring premium proteins and seasonal ingredients',
    items: [
      {
        id: '12',
        name: 'Branzino in Crosta di Sale',
        description: 'Whole Mediterranean sea bass baked in sea salt crust, tableside presentation, seasonal vegetables',
        price: 48,
        tags: ['gluten-free'],
        chef: true,
        allergens: ['fish'],
      },
      {
        id: '13',
        name: 'Filetto di Manzo',
        description: 'Prime beef tenderloin, Barolo wine reduction, truffle mashed potatoes, asparagus',
        price: 56,
        tags: ['gluten-free'],
        popular: true,
        allergens: ['dairy'],
      },
      {
        id: '14',
        name: 'Osso Buco alla Milanese',
        description: 'Braised veal shank, saffron risotto, gremolata, bone marrow',
        price: 52,
        tags: ['gluten-free'],
        chef: true,
        allergens: ['dairy'],
      },
      {
        id: '15',
        name: 'Agnello al Rosmarino',
        description: 'Herb-crusted lamb rack, rosemary jus, ratatouille, crispy polenta',
        price: 54,
        tags: ['gluten-free'],
        popular: true,
        allergens: [],
      },
      {
        id: '16',
        name: 'Vitello Tonnato',
        description: 'Thinly sliced roasted veal, tuna-caper sauce, celery, lemon',
        price: 32,
        tags: ['gluten-free'],
        allergens: ['dairy', 'fish'],
      },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza Napoletana',
    description: 'Wood-fired Neapolitan pizzas with 72-hour fermented dough and San Marzano tomatoes',
    items: [
      {
        id: '17',
        name: 'Margherita DOP',
        description: 'San Marzano tomatoes, buffalo mozzarella DOP, fresh basil, extra virgin olive oil',
        price: 20,
        tags: ['vegetarian'],
        popular: true,
        allergens: ['dairy', 'gluten'],
      },
      {
        id: '18',
        name: 'Quattro Stagioni',
        description: 'Artichokes, ham, mushrooms, olives, mozzarella, tomato sauce',
        price: 24,
        tags: [],
        allergens: ['dairy', 'gluten'],
      },
      {
        id: '19',
        name: 'Diavola',
        description: 'Spicy salami, mozzarella, chili oil, roasted peppers, tomato sauce',
        price: 23,
        tags: ['spicy'],
        allergens: ['dairy', 'gluten'],
      },
      {
        id: '20',
        name: 'Tartufata',
        description: 'Black truffle cream, mozzarella, mushrooms, arugula, parmesan shavings',
        price: 28,
        tags: ['vegetarian'],
        chef: true,
        allergens: ['dairy', 'gluten'],
      },
    ],
  },
  {
    id: 'dolci',
    name: 'Dolci',
    description: 'Artisanal desserts crafted by our pastry chef using the finest ingredients',
    items: [
      {
        id: '21',
        name: 'Tiramisu della Casa',
        description: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa powder, aged rum',
        price: 14,
        tags: ['vegetarian'],
        popular: true,
        allergens: ['dairy', 'gluten', 'eggs'],
      },
      {
        id: '22',
        name: 'Panna Cotta ai Frutti di Bosco',
        description: 'Vanilla bean panna cotta, mixed berry compote, pistachio crumble',
        price: 13,
        tags: ['vegetarian', 'gluten-free'],
        allergens: ['dairy', 'nuts'],
      },
      {
        id: '23',
        name: 'Torta Caprese',
        description: 'Flourless chocolate almond cake, whipped cream, fresh raspberries',
        price: 15,
        tags: ['gluten-free'],
        chef: true,
        allergens: ['dairy', 'nuts'],
      },
      {
        id: '24',
        name: 'Cannoli Siciliani',
        description: 'Crispy shells filled with ricotta, chocolate chips, candied orange, pistachios',
        price: 12,
        tags: ['vegetarian'],
        popular: true,
        allergens: ['dairy', 'gluten', 'nuts'],
      },
      {
        id: '25',
        name: 'Gelato Artigianale',
        description: 'Selection of house-made gelato: pistachio, stracciatella, hazelnut, lemon',
        price: 10,
        tags: ['vegetarian', 'gluten-free'],
        allergens: ['dairy', 'nuts'],
      },
    ],
  },
];

export const winePairings = [
  { category: 'Antipasti', wine: 'Prosecco Superiore DOCG', description: 'Crisp bubbles to awaken the palate' },
  { category: 'Pasta Fresca', wine: 'Barbera d\'Alba', description: 'Medium-bodied with bright acidity' },
  { category: 'Secondi Piatti', wine: 'Brunello di Montalcino', description: 'Bold tannins complement rich proteins' },
  { category: 'Dolci', wine: 'Moscato d\'Asti', description: 'Sweet and effervescent finale' },
];
