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
    english: 'Egg',
    russian: 'яйцо',
    hebrew: 'ביצה',
    pronuncEng: 'beitzA',
    pronuncRus: 'бейцА',
    category: 'grocery'
  },

  {
    id: 39,
    english: 'Hummus',
    russian: 'Хумус',
    hebrew: 'חומוס',
    pronuncEng: 'humus',
    pronuncRus: 'хумус',
    category: 'grocery'
  },

  {
    id: 40,
    english: 'Spoon',
    russian: 'Ложка',
    hebrew: 'כף',
    pronuncEng: 'kaf',
    pronuncRus: 'каф',
    category: 'kitchen'
  },

  {
    id: 41,
    english: 'Teaspoon',
    russian: 'Чайная ложка',
    hebrew: 'כפית',
    pronuncEng: 'kapit',
    pronuncRus: 'капИт',
    category: 'kitchen'
  },

  {
    id: 42,
    english: 'Fork',
    russian: 'Вилка',
    hebrew: 'מזלג',
    pronuncEng: 'mazlEg',
    pronuncRus: 'мазлЕг',
    category: 'kitchen'
  },

  {
    id: 43,
    english: 'Knife',
    russian: 'Нож',
    hebrew: 'סכין',
    pronuncEng: 'sakin',
    pronuncRus: 'сакИн',
    category: 'kitchen'
  },

  {
    id: 44,
    english: 'Bowl',
    russian: 'Глубокая тарелка',
    hebrew: 'קערה',
    pronuncEng: 'kearA',
    pronuncRus: 'кеарА',
    category: 'kitchen'
  },

  {
    id: 45,
    english: 'Plate',
    russian: 'Плоская тарелка',
    hebrew: 'צלחת',
    pronuncEng: 'tzalAkhat',
    pronuncRus: 'цалАхат',
    category: 'kitchen'
  },

  {
    id: 46,
    english: 'Bottle',
    russian: 'Бутылка',
    hebrew: 'בקבוק',
    pronuncEng: 'bakbUk',
    pronuncRus: 'бакбУк',
    category: 'kitchen'
  },

  {
    id: 47,
    english: 'Cooking pot',
    russian: 'Кастрюля',
    hebrew: 'סיר',
    pronuncEng: 'sir',
    pronuncRus: 'сир',
    category: 'kitchen'
  },
  
    {
      id: 48,
      english: 'Ill, sick',
      russian: 'Больной',
      hebrew: 'חולה',
      pronuncEng: 'kholE',
      pronuncRus: 'холЕ',
      category: 'general'
    },

    {
      id: 49,
      english: 'I/You/He stand(s)',
      russian: 'Я/ты/он стою/стоишь/стоит',
      hebrew: 'עומד',
      pronuncEng: 'omEd',
      pronuncRus: 'омЭд',
      category: 'general'
    },

    {
      id: 50,
      english: 'I/You/She stands',
      russian: 'Я/ты/она стою/стоишь/стоит',
      hebrew: 'עומדת',
      pronuncEng: 'omEdet',
      pronuncRus: 'омЭдэт',
      category: 'general'
    },

    {
      id: 51,
      english: 'Lesson',
      russian: 'Урок',
      hebrew: 'שעור',
      pronuncEng: 'shiUr',
      pronuncRus: 'шиУр',
      category: 'general'
    },

    {
      id: 52,
      english: 'Hot, warm',
      russian: 'Горячий, тёплый',
      hebrew: 'חם',
      pronuncEng: 'kham',
      pronuncRus: 'хам',
      category: 'general'
    },

    {
      id: 53,
      english: 'Also, as well',
      russian: 'Тоже, также',
      hebrew: 'גם',
      pronuncEng: 'gam',
      pronuncRus: 'гам',
      category: 'general'
    },

    {
      id: 54,
      english: 'Soldier (male)',
      russian: 'Солдат',
      hebrew: 'חייל',
      pronuncEng: 'khayAl',
      pronuncRus: 'хаЯль',
      category: 'profession'
    },

    {
      id: 55,
      english: 'Window',
      russian: 'Окно',
      hebrew: 'חלון',
      pronuncEng: 'khalOn',
      pronuncRus: 'халОн',
      category: 'house'
    },

    {
      id: 56,
      english: 'Table, desk',
      russian: 'Стол',
      hebrew: 'שולחן',
      pronuncEng: 'shulkhAn',
      pronuncRus: 'шульхАн',
      category: 'house'
    },

    {
      id: 57,
      english: 'Garden',
      russian: 'Сад',
      hebrew: 'גן',
      pronuncEng: 'gan',
      pronuncRus: 'ган',
      category: 'city'
    },

    {
      id: 58,
      english: 'Winter',
      russian: 'Зима',
      hebrew: 'חורף',
      pronuncEng: 'khOref',
      pronuncRus: 'хОрэф',
      category: 'time'
    },

    {
      id: 59,
      english: 'Spring',
      russian: 'Весна',
      hebrew: 'אביב',
      pronuncEng: 'aviv',
      pronuncRus: 'авИв',
      category: 'time'
    },

    {
      id: 60,
      english: 'Summer',
      russian: 'Лето',
      hebrew: 'קיץ',
      pronuncEng: 'kAitz',
      pronuncRus: 'кАиц',
      category: 'time'
    },

    {
      id: 61,
      english: 'Autumn',
      russian: 'Осень',
      hebrew: 'סתיו',
      pronuncEng: 'stav',
      pronuncRus: 'став',
      category: 'time'
    },

    {
      id: 62,
      english: 'I/You/He work(s)',
      russian: 'я/ты/он работаю/ешь/ет',
      hebrew: 'עובד',
      pronuncEng: 'ovEd',
      pronuncRus: 'овЭд',
      category: 'verb'
    },

    {
      id: 63,
      english: 'I/You/She work(s)',
      russian: 'я/ты/она работаю/ешь/ет',
      hebrew: 'עובדת',
      pronuncEng: 'ovEdet',
      pronuncRus: 'овЭдэт',
      category: 'verb'
    },

    {
      id: 64,
      english: 'We/You/They (m+f) work',
      russian: 'мы/вы/они работаем/ете/ют (м или м+ж)',
      hebrew: 'עובדים',
      pronuncEng: 'ovdim',
      pronuncRus: 'овдИм',
      category: 'verb'
    },

    {
      id: 65,
      english: 'We/You/They (f) work',
      russian: 'мы/вы/они работаем/ете/ют (ж)',
      hebrew: 'עובדות',
      pronuncEng: 'ovdOt',
      pronuncRus: 'овдОт',
      category: 'verb'
    },

    {
      id: 66,
      english: 'I worked',
      russian: 'Я работал',
      hebrew: 'עבדתי',
      pronuncEng: 'avAdeti',
      pronuncRus: 'авАдэти',
      category: 'verb'
    },

    {
      id: 67,
      english: 'You (sing. masc.) worked',
      russian: 'Ты работал',
      hebrew: 'עבדת',
      pronuncEng: 'avAdeta',
      pronuncRus: 'авАдэта',
      category: 'verb'
    },

    {
      id: 68,
      english: 'You (sing. fem.) worked',
      russian: 'Ты работала',
      hebrew: 'עבדת',
      pronuncEng: 'avAdet',
      pronuncRus: 'авАдэт',
      category: 'verb'
    },

    {
      id: 69,
      english: 'He worked',
      russian: 'Он работал',
      hebrew: 'עבד',
      pronuncEng: 'avAd',
      pronuncRus: 'авАд',
      category: 'verb'
    },

    {
      id: 70,
      english: 'She worked',
      russian: 'Она работала',
      hebrew: 'עבדה',
      pronuncEng: 'avdA',
      pronuncRus: 'авдА',
      category: 'verb'
    },

    {
      id: 71,
      english: 'We worked',
      russian: 'Мы работали',
      hebrew: 'עבדנו',
      pronuncEng: 'avAdnu',
      pronuncRus: 'авАдну',
      category: 'verb'
    },

    {
      id: 72,
      english: 'You (pl. masc.) worked',
      russian: 'Вы (м или м+ж) работали',
      hebrew: 'עבדתם',
      pronuncEng: 'avAdetem',
      pronuncRus: 'авАдэтэм',
      category: 'verb'
    },

    {
      id: 73,
      english: 'You (pl. fem.) worked',
      russian: 'Вы (ж.) работали',
      hebrew: 'עבדתן',
      pronuncEng: 'avAdeten',
      pronuncRus: 'авАдэтэн',
      category: 'verb'
    },

    {
      id: 74,
      english: 'They worked',
      russian: 'Они работали',
      hebrew: 'עבדו',
      pronuncEng: 'avdU',
      pronuncRus: 'авдУ',
      category: 'verb'
    },

// СДЕЛАТЬ ФУНКЦИЮ "хватит", если юзер задолбался и хочет проверить, сколько у него уже сделано правильно
    
    {
      id: 75,
      english: '',
      russian: '',
      hebrew: '',
      pronuncEng: '',
      pronuncRus: '',
      category: ''
    },
  ]

export default words