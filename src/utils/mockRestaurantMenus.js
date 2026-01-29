const restaurantMenu = {
  "restaurantName": "Foodies Hub",
  "currency": "INR",
  "categories": [
    {
      "categoryId" :1,
      "category": "Recommended",
      "items": [
        {
          "id": 1,
          "dishName": "Classic Chicken Burger",
          "description": "Juicy chicken patty with lettuce",
          "price": 179,
          "isVeg": false,
          "isBestseller": true,
          "image": "https://picsum.photos/seed/chicken-burger/300/300"
        },
        {
          "id": 2,
          "dishName": "Veg Supreme Burger",
          "description": "Crispy veg patty with cheese",
          "price": 149,
          "isVeg": true,
          "isBestseller": true,
          "image": "https://picsum.photos/seed/veg-burger/300/300"
        },
        {
          "id": 3,
          "dishName": "Spicy Chicken Wrap",
          "description": "Grilled spicy chicken wrap",
          "price": 189,
          "isVeg": false,
          "isBestseller": false,
          "image": "https://picsum.photos/seed/chicken-wrap/300/300"
        },
        {
          "id": 4,
          "dishName": "Cheese Burst Burger",
          "description": "Extra molten cheese burger",
          "price": 199,
          "isVeg": true,
          "isBestseller": true,
          "image": "https://picsum.photos/seed/cheese-burger/300/300"
        },
        {
          "id": 5,
          "dishName": "Grilled Veg Sandwich",
          "description": "Healthy grilled vegetable sandwich",
          "price": 139,
          "isVeg": true,
          "isBestseller": false,
          "image": "https://picsum.photos/seed/veg-sandwich/300/300"
        }
      ]
    },

    {
      "categoryId" :2,
      "category": "Combos",
      "items": [
        {
          "id": 6,
          "dishName": "Burger + Fries Combo",
          "description": "Chicken burger with fries",
          "price": 249,
          "isVeg": false,
          "image": "https://picsum.photos/seed/burger-fries/300/300"
        },
        {
          "id": 7,
          "dishName": "Veg Combo Meal",
          "description": "Veg burger with fries",
          "price": 219,
          "isVeg": true,
          "image": "https://picsum.photos/seed/veg-combo/300/300"
        },
        {
          "id": 8,
          "dishName": "Family Combo",
          "description": "Meals for 3 people",
          "price": 499,
          "isVeg": false,
          "image": "https://picsum.photos/seed/family-combo/300/300"
        },
        {
          "id": 9,
          "dishName": "Wrap Combo",
          "description": "Wrap + soft drink",
          "price": 229,
          "isVeg": true,
          "image": "https://picsum.photos/seed/wrap-combo/300/300"
        },
        {
          "id": 10,
          "dishName": "Office Lunch Combo",
          "description": "Quick office lunch",
          "price": 259,
          "isVeg": false,
          "image": "https://picsum.photos/seed/office-lunch/300/300"
        }
      ]
    },

    {
      "categoryId" :3,
      "category": "Party Dish",
      "items": [
        {
          "id": 11,
          "dishName": "Family Chicken Bucket",
          "description": "Crispy chicken pieces",
          "price": 599,
          "image": "https://picsum.photos/seed/chicken-bucket/300/300"
        },
        {
          "id": 12,
          "dishName": "Mega Party Platter",
          "description": "Wings, nuggets & fries",
          "price": 799,
          "image": "https://picsum.photos/seed/party-platter/300/300"
        },
        {
          "id": 13,
          "dishName": "Veg Party Box",
          "description": "Veg snacks platter",
          "price": 549,
          "image": "https://picsum.photos/seed/veg-party/300/300"
        },
        {
          "id": 14,
          "dishName": "BBQ Chicken Platter",
          "description": "BBQ grilled chicken",
          "price": 699,
          "image": "https://picsum.photos/seed/bbq-chicken/300/300"
        },
        {
          "id": 15,
          "dishName": "Ultimate Party Feast",
          "description": "Mega sharing feast",
          "price": 999,
          "image": "https://picsum.photos/seed/party-feast/300/300"
        }
      ]
    },

    {
      "categoryId" :4,
      "category": "Burger & Wraps",
      "items": [
        {
          "id": 16,
          "dishName": "Paneer Burger",
          "description": "Grilled paneer patty",
          "price": 169,
          "image": "https://picsum.photos/seed/paneer-burger/300/300"
        },
        {
          "id": 17,
          "dishName": "Chicken Zinger Burger",
          "description": "Crispy chicken zinger",
          "price": 199,
          "image": "https://picsum.photos/seed/zinger-burger/300/300"
        },
        {
          "id": 18,
          "dishName": "Veggie Wrap",
          "description": "Healthy veggie wrap",
          "price": 139,
          "image": "https://picsum.photos/seed/veggie-wrap/300/300"
        },
        {
          "id": 19,
          "dishName": "Chicken Wrap",
          "description": "Juicy chicken wrap",
          "price": 189,
          "image": "https://picsum.photos/seed/chicken-wrap2/300/300"
        }
      ]
    },

    {
      "categoryId" :5,
      "category": "Fries & Slice",
      "items": [
        {
          "id": 20,
          "dishName": "Classic Fries",
          "description": "Golden crispy fries",
          "price": 99,
          "image": "https://picsum.photos/seed/classic-fries/300/300"
        },
        {
          "id": 21,
          "dishName": "Peri Peri Fries",
          "description": "Spicy peri peri fries",
          "price": 129,
          "image": "https://picsum.photos/seed/peri-fries/300/300"
        },
        {
          "id": 22,
          "dishName": "Cheesy Fries",
          "description": "Cheese loaded fries",
          "price": 139,
          "image": "https://picsum.photos/seed/cheesy-fries/300/300"
        },
        {
          "id": 23,
          "dishName": "Veg Pizza Slice",
          "description": "Cheese veg slice",
          "price": 119,
          "image": "https://picsum.photos/seed/veg-pizza/300/300"
        },
        {
          "id": 24,
          "dishName": "Pepperoni Slice",
          "description": "Pepperoni cheese slice",
          "price": 149,
          "image": "https://picsum.photos/seed/pepperoni/300/300"
        }
      ]
    }
  ],

  "addons": [
    { "id": "a1", "name": "Extra Cheese", "price": 30 },
    { "id": "a2", "name": "Extra Patty", "price": 50 },
    { "id": "a3", "name": "Extra Fries", "price": 60 },
    { "id": "a4", "name": "Soft Drink", "price": 40 },
    { "id": "a5", "name": "Extra Sauce", "price": 20 }
  ]
}

  

export default restaurantMenu;
