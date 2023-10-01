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
      english: '',
      russian: '',
      hebrew: '',
      pronuncEng: '',
      pronuncRus: ''
    }
  ]

export default words