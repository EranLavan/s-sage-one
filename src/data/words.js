const words = [
  {
    id: 1,
    english: 'Ice-cream',
    russian: 'Мороженое',
    hebrew: 'גלידה',
    pronuncEng: 'glidA',
    pronuncRus: 'глидА',
    category: 'grocery'
  },

  {
    id: 2,
    english: 'Watermelon',
    russian: 'Арбуз',
    hebrew: 'אבטיח',
    pronuncEng: 'avatiakh',
    pronuncRus: 'аватИах',
    category: 'grocery'
  },

  {
    id: 3,
    english: 'Melon',
    russian: 'Дыня',
    hebrew: 'מילון',
    pronuncEng: 'milOn',
    pronuncRus: 'милОн',
    category: 'grocery'
  },

  {
    id: 4,
    english: 'Cucumber',
    russian: 'Огурец',
    hebrew: 'מלפפון',
    pronuncEng: 'melafefOn',
    pronuncRus: 'мелафефОн',
    category: 'grocery'
  },

  {
    id: 5,
    english: 'Tomato',
    russian: 'Помидор',
    hebrew: 'עגבנייה',
    pronuncEng: 'agvaniyA',
    pronuncRus: 'агваниЯ',
    category: 'grocery'
  },

  {
    id: 6,
    english: 'Lemon',
    russian: 'Лимон',
    hebrew: 'לימון',
    pronuncEng: 'limOn',
    pronuncRus: 'лимон',
    category: 'grocery'
  },

  {
    id: 7,
    english: 'Pomegranate',
    russian: 'Гранат',
    hebrew: 'רימון',
    pronuncEng: 'rimOn',
    pronuncRus: 'римОн',
    category: 'grocery'
  },

  {
    id: 8,
    english: 'Onion',
    russian: 'Лук',
    hebrew: 'בצל',
    pronuncEng: 'batzAl',
    pronuncRus: 'бацАль',
    category: 'grocery'
  },

  {
    id: 9,
    english: 'Peach',
    russian: 'Персик',
    hebrew: 'אפרסק',
    pronuncEng: 'afarsEk',
    pronuncRus: 'афарсЕк',
    category: 'grocery'
  },

  {
    id: 10,
    english: 'Nectarine',
    russian: 'Нектарин',
    hebrew: 'נקטרינה',
    pronuncEng: 'nektarIna',
    pronuncRus: 'нектарИна',
    category: 'grocery'
  },

  {
    id: 11,
    english: 'Mango',
    russian: 'Манго',
    hebrew: 'מנגו',
    pronuncEng: 'mango',
    pronuncRus: 'манго',
    category: 'grocery'
  },

  {
    id: 12,
    english: 'Pineapple',
    russian: 'Ананас',
    hebrew: 'אננס',
    pronuncEng: 'ananAs',
    pronuncRus: 'ананас',
    category: 'grocery'
  },

  {
    id: 13,
    english: 'Banana',
    russian: 'Банан',
    hebrew: 'בננה',
    pronuncEng: 'banana',
    pronuncRus: 'банана',
    category: 'grocery'
  },

  {
    id: 14,
    english: 'Avocado',
    russian: 'Авокадо',
    hebrew: 'אבוקדו',
    pronuncEng: 'avokado',
    pronuncRus: 'авокадо',
    category: 'grocery'
  },

  {
    id: 15,
    english: 'Carrot',
    russian: 'Морковь',
    hebrew: 'גזר',
    pronuncEng: 'gEzer',
    pronuncRus: 'гЕзэр',
    category: 'grocery'
  },

  {
    id: 16,
    english: 'Pepper',
    russian: 'Перец',
    hebrew: 'פלפל',
    pronuncEng: 'pilpel',
    pronuncRus: 'пИльпель',
    category: 'grocery'
  },

  {
    id: 17,
    english: 'Eggplant / Aubergine',
    russian: 'Баклажан',
    hebrew: 'חציל',
    pronuncEng: 'khatzil',
    pronuncRus: 'хацИль',
    category: 'grocery'
  },

  {
    id: 18,
    english: 'Mushroom',
    russian: 'Гриб',
    hebrew: 'פטרייה',
    pronuncEng: 'pitriyA',
    pronuncRus: 'питриЯ',
    category: 'grocery'
  },

  {
    id: 19,
    english: 'Strawberry',
    russian: 'Клубника',
    hebrew: 'תות',
    pronuncEng: 'tut',
    pronuncRus: 'тут',
    category: 'grocery'
  },

  {
    id: 20,
    english: 'Cherry',
    russian: 'Вишня',
    hebrew: 'דובדבן',
    pronuncEng: 'duvdevAn',
    pronuncRus: 'дувдэвАн',
    category: 'grocery'
  },

  {
    id: 21,
    english: 'Raspberry',
    russian: 'Малина',
    hebrew: 'פטל אדום',
    pronuncEng: 'pEtel adOm',
    pronuncRus: 'пЕтэль адОм',
    category: 'grocery'
  },

  {
    id: 22,
    english: 'Blackberry',
    russian: 'Ежевика',
    hebrew: 'פטל שחור',
    pronuncEng: 'pEtel shakhOr',
    pronuncRus: 'пЕтэль шахОр',
    category: 'grocery'
  },

  {
    id: 23,
    english: 'Chicken (meat)',
    russian: 'Курица (курятина)',
    hebrew: 'עוף',
    pronuncEng: 'of',
    pronuncRus: 'оф',
    category: 'grocery'
  },

  {
    id: 24,
    english: 'Meat',
    russian: 'Мясо',
    hebrew: 'בשר',
    pronuncEng: 'basAr',
    pronuncRus: 'басАр',
    category: 'grocery'
  },

  {
    id: 25,
    english: 'Beef',
    russian: 'Говядина',
    hebrew: 'בקר',
    pronuncEng: 'bakAr',
    pronuncRus: 'бакАр',
    category: 'grocery'
  },

  {
    id: 26,
    english: 'Turkey (meat)',
    russian: 'Индейка (мясо)',
    hebrew: 'חודו',
    pronuncEng: 'khOdu',
    pronuncRus: 'хОду',
    category: 'grocery'
  },

  {
    id: 27,
    english: 'Beverage',
    russian: 'Напиток',
    hebrew: 'משקא',
    pronuncEng: 'mashkE',
    pronuncRus: 'машкЕ',
    category: 'grocery'
  },

  {
    id: 28,
    english: 'Beer',
    russian: 'Пиво',
    hebrew: 'בירה',
    pronuncEng: 'bira',
    pronuncRus: 'бИра',
    category: 'grocery'
  },

  {
    id: 29,
    english: 'Wine',
    russian: 'Вино',
    hebrew: 'יין',
    pronuncEng: 'yAin',
    pronuncRus: 'Яин',
    category: 'grocery'
  },
  
  {
    id: 30,
    english: 'Juice',
    russian: 'Сок',
    hebrew: 'מיץ',
    pronuncEng: 'mitz',
    pronuncRus: 'миц',
    category: 'grocery'
  },
  
  {
    id: 31,
    english: 'Water',
    russian: 'Вода',
    hebrew: 'מים',
    pronuncEng: 'mAim',
    pronuncRus: 'мАим',
    category: 'grocery'
  },

  {
    id: 32,
    english: 'Tea',
    russian: 'Чай',
    hebrew: 'תה',
    pronuncEng: 'te',
    pronuncRus: 'тэ',
    category: 'grocery'
  },
  
  {
    id: 33,
    english: 'Coffee',
    russian: 'Кофе',
    hebrew: 'קפה',
    pronuncEng: 'KafE',
    pronuncRus: 'кафЭ',
    category: 'grocery'
  },
  
  {
    id: 34,
    english: 'Bread',
    russian: 'Хлеб',
    hebrew: 'לחם',
    pronuncEng: 'lekhem',
    pronuncRus: 'лехем',
    category: 'grocery'
  },
  
  {
    id: 35,
    english: 'Sugar',
    russian: 'Сахар',
    hebrew: 'סוכר',
    pronuncEng: 'sukAr',
    pronuncRus: 'сукАр',
    category: 'grocery'
  },
  
  {
    id: 36,
    english: 'Salt',
    russian: 'Соль',
    hebrew: 'מלח',
    pronuncEng: 'mElakh',
    pronuncRus: 'мЕлах',
    category: 'grocery'
  },
  
  {
    id: 37,
    english: 'Cheese',
    russian: 'Сыр',
    hebrew: 'גבינה',
    pronuncEng: 'gvinA',
    pronuncRus: 'гвинА',
    category: 'grocery'
  },
  
    {
      id: 38,
      english: '',
      russian: '',
      hebrew: '',
      pronuncEng: '',
      pronuncRus: ''
    }
  ]

export default words