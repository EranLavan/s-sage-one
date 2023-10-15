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
    
    {
      id: 75,
      english: 'Heart',
      russian: 'Сердце',
      hebrew: 'לב',
      pronuncEng: 'lev',
      pronuncRus: 'лев',
      category: 'body'
    },

    {
      id: 76,
      english: 'Sure',
      russian: 'Точно, уверен',
      hebrew: 'בטח',
      pronuncEng: 'bEtakh',
      pronuncRus: 'бЕтах',
      category: 'adverb'
    },

    {
      id: 77,
      english: 'Small',
      russian: 'Маленький',
      hebrew: 'קטן',
      pronuncEng: 'katAn',
      pronuncRus: 'катАн',
      category: 'adjective'
    },

    {
      id: 78,
      english: 'Big',
      russian: 'Большой',
      hebrew: 'גדול',
      pronuncEng: 'gadOl',
      pronuncRus: 'гадОль',
      category: 'adjective'
    },

    {
      id: 79,
      english: 'Bag',
      russian: 'Сумка',
      hebrew: 'תיק',
      pronuncEng: 'tik',
      pronuncRus: 'тик',
      category: 'general'
    },

    {
      id: 80,
      english: 'Doctor',
      russian: 'Врач',
      hebrew: 'רופא',
      pronuncEng: 'rofE',
      pronuncRus: 'рофЭ',
      category: 'profession'
    },

    {
      id: 81,
      english: 'Chair',
      russian: 'Стул',
      hebrew: 'כיסא',
      pronuncEng: 'kisE',
      pronuncRus: 'кисЭ',
      category: 'general'
    },

    {
      id: 82,
      english: 'Book',
      russian: 'Книга',
      hebrew: 'ספר',
      pronuncEng: 'sEfer',
      pronuncRus: 'сЭфер',
      category: 'general'
    },

    {
      id: 83,
      english: 'Plane',
      russian: 'Самолёт',
      hebrew: 'מטוס',
      pronuncEng: 'matOs',
      pronuncRus: 'матОс',
      category: 'general'
    },

    {
      id: 84,
      english: 'Engineer',
      russian: 'Инженер',
      hebrew: 'מהנדס',
      pronuncEng: 'mehandEs',
      pronuncRus: 'меhандЭс',
      category: 'profession'
    },

    {
      id: 85,
      english: 'Page',
      russian: 'Страница',
      hebrew: 'עמוד',
      pronuncEng: 'amUd',
      pronuncRus: 'амУд',
      category: 'general'
    },

    {
      id: 86,
      english: 'Family',
      russian: 'Семья',
      hebrew: 'משפחה',
      pronuncEng: 'mishpakhA',
      pronuncRus: 'мишпахА',
      category: 'general'
    },

    {
      id: 87,
      english: 'Story',
      russian: 'Рассказ, история',
      hebrew: 'סיפור',
      pronuncEng: 'sipUr',
      pronuncRus: 'сипУр',
      category: 'general'
    },

    {
      id: 88,
      english: 'Now',
      russian: 'Сейчас',
      hebrew: 'עכשיו',
      pronuncEng: 'akhshAv',
      pronuncRus: 'ахшАв',
      category: 'adverb'
    },

    {
      id: 89,
      english: 'Letter (message)',
      russian: 'Письмо',
      hebrew: 'מכתב',
      pronuncEng: 'MikhtAv',
      pronuncRus: 'михтАв',
      category: 'general'
    },

    {
      id: 90,
      english: 'President',
      russian: 'Президент',
      hebrew: 'נשיא',
      pronuncEng: 'nasi',
      pronuncRus: 'насИ',
      category: 'profession'
    },

    {
      id: 91,
      english: 'Address',
      russian: 'Адрес',
      hebrew: 'כתובת',
      pronuncEng: 'ktOvet',
      pronuncRus: 'ктОвет',
      category: 'general'
    },

    {
      id: 92,
      english: 'Place, settlement',
      russian: 'Населённый пункт',
      hebrew: 'ישוב',
      pronuncEng: 'yishUv',
      pronuncRus: 'йишУв',
      category: 'general'
    },

    {
      id: 93,
      english: 'Zip code',
      russian: 'Почтовый индекс',
      hebrew: 'מיקוד',
      pronuncEng: 'mikUd',
      pronuncRus: 'микУд',
      category: 'general'
    },

    {
      id: 94,
      english: 'Red',
      russian: 'Красный',
      hebrew: 'אדום',
      pronuncEng: 'adOm',
      pronuncRus: 'адОм',
      category: 'color'
    },

    {
      id: 95,
      english: 'Orange',
      russian: 'Оранжевый',
      hebrew: 'כתום',
      pronuncEng: 'katOm',
      pronuncRus: 'катОм',
      category: 'color'
    },

    {
      id: 96,
      english: 'Yellow',
      russian: 'Жёлтый',
      hebrew: 'צהוב',
      pronuncEng: 'tzehOv',
      pronuncRus: 'цэhОв',
      category: 'color'
    },

    {
      id: 97,
      english: 'Green',
      russian: 'Зелёный',
      hebrew: 'ירוק',
      pronuncEng: 'yarOk',
      pronuncRus: 'ярОк',
      category: 'color'
    },

    {
      id: 98,
      english: 'Blue',
      russian: 'Синий',
      hebrew: 'כחול',
      pronuncEng: 'kakhOl',
      pronuncRus: 'кахОль',
      category: 'color'
    },

    {
      id: 99,
      english: 'Purple',
      russian: 'Малиновый',
      hebrew: 'סגול',
      pronuncEng: 'sagOl',
      pronuncRus: 'сагОль',
      category: 'color'
    },

    {
      id: 100,
      english: 'Pink',
      russian: 'Розовый',
      hebrew: 'ורוד',
      pronuncEng: 'varOd',
      pronuncRus: 'варОд',
      category: 'color'
    },

    {
      id: 101,
      english: 'Brown',
      russian: 'Коричневый',
      hebrew: 'חום',
      pronuncEng: 'khum',
      pronuncRus: 'хум',
      category: 'color'
    },

    {
      id: 102,
      english: 'Gray',
      russian: 'Серый',
      hebrew: 'אפור',
      pronuncEng: 'afOr',
      pronuncRus: 'афОр',
      category: 'color'
    },

    {
      id: 103,
      english: 'Black',
      russian: 'Чёрный',
      hebrew: 'שחור',
      pronuncEng: 'shakhOr',
      pronuncRus: 'шахОр',
      category: 'color'
    },

    {
      id: 104,
      english: 'White',
      russian: 'Белый',
      hebrew: 'לבן',
      pronuncEng: 'lavAn',
      pronuncRus: 'лавАн',
      category: 'color'
    },

    {
      id: 105,
      english: 'Daughters',
      russian: 'Дочери',
      hebrew: 'בנות',
      pronuncEng: 'banOt',
      pronuncRus: 'банОт',
      category: 'family'
    },

    {
      id: 106,
      english: 'Rule (noun)',
      russian: 'Правило',
      hebrew: 'כלל',
      pronuncEng: 'klal',
      pronuncRus: 'кляль',
      category: 'general'
    },

    {
      id: 107,
      english: 'Usually',
      russian: 'Обычно',
      hebrew: 'בדרך כלל',
      pronuncEng: 'bedErekh klal',
      pronuncRus: 'бедЭрех кляль',
      category: 'adverb'
    },

    {
      id: 108,
      english: 'I',
      russian: 'Я',
      hebrew: 'אני',
      pronuncEng: 'ani',
      pronuncRus: 'анИ',
      category: 'pronoun'
    },

    {
      id: 109,
      english: 'You (male sing.)',
      russian: 'Ты (муж.)',
      hebrew: 'אתה',
      pronuncEng: 'atA',
      pronuncRus: 'атА',
      category: 'pronoun'
    },

    {
      id: 110,
      english: 'You (fem. sing.)',
      russian: 'Ты (жен.)',
      hebrew: 'את',
      pronuncEng: 'at',
      pronuncRus: 'ат',
      category: 'pronoun'
    },

    {
      id: 111,
      english: 'He',
      russian: 'Он',
      hebrew: 'הוא',
      pronuncEng: 'hu',
      pronuncRus: 'у',
      category: 'pronoun'
    },

    {
      id: 112,
      english: 'She',
      russian: 'Она',
      hebrew: 'היא',
      pronuncEng: 'hi',
      pronuncRus: 'и',
      category: 'pronoun'
    },

    {
      id: 113,
      english: 'We',
      russian: 'Мы',
      hebrew: 'אנחנו',
      pronuncEng: 'anAkhnu',
      pronuncRus: 'анАхну',
      category: 'pronoun'
    },

    {
      id: 114,
      english: 'You (male or combined plural)',
      russian: 'Вы (муж. множ.)',
      hebrew: 'אתם',
      pronuncEng: 'atEm',
      pronuncRus: 'атЭм',
      category: 'pronoun'
    },

    {
      id: 115,
      english: 'You (female plural)',
      russian: 'Вы (жен. множ.)',
      hebrew: 'אתן',
      pronuncEng: 'atEn',
      pronuncRus: 'атЭн',
      category: 'pronoun'
    },

    {
      id: 116,
      english: 'They (male or combined)',
      russian: 'Они (муж. множ.)',
      hebrew: 'הם',
      pronuncEng: 'hem',
      pronuncRus: 'hэм',
      category: 'pronoun'
    },

    {
      id: 117,
      english: 'They (female)',
      russian: 'Они (жен. множ.)',
      hebrew: 'הן',
      pronuncEng: 'hen',
      pronuncRus: 'hэн',
      category: 'pronoun'
    },

    {
      id: 118,
      english: 'Board, table (chart)',
      russian: 'доска, таблица',
      hebrew: 'לוח',
      pronuncEng: 'lUakh',
      pronuncRus: 'лУах',
      category: 'general'
    },

    {
      id: 119,
      english: 'Example',
      russian: 'пример',
      hebrew: 'דוגמה',
      pronuncEng: 'dugmA',
      pronuncRus: 'дугмА',
      category: 'general'
    },

    {
      id: 120,
      english: 'Dictation',
      russian: 'диктант',
      hebrew: 'כתיבה',
      pronuncEng: 'ktivA',
      pronuncRus: 'ктивА',
      category: 'general'
    },

    {
      id: 121,
      english: 'Flower',
      russian: 'цветок',
      hebrew: 'פרח',
      pronuncEng: 'pEreh',
      pronuncRus: 'пЕрех',
      category: 'general'
    },

    {
      id: 122,
      english: 'Soup',
      russian: 'суп',
      hebrew: 'מרק',
      pronuncEng: 'marAk',
      pronuncRus: 'марАк',
      category: 'grocery'
    },

    {
      id: 123,
      english: 'Male',
      russian: 'мужской род',
      hebrew: 'זכר',
      pronuncEng: 'zakhAr',
      pronuncRus: 'захАр',
      category: 'general'
    },

    {
      id: 124,
      english: 'Female',
      russian: 'женский род',
      hebrew: 'נקבה',
      pronuncEng: 'nekevA',
      pronuncRus: 'нэкевА',
      category: 'general'
    },

    {
      id: 125,
      english: 'Plural male or combined',
      russian: 'множественное число мужского рода (или общее)',
      hebrew: 'רבים',
      pronuncEng: 'ravim',
      pronuncRus: 'равИм',
      category: 'general'
    },

    {
      id: 126,
      english: 'Plural female',
      russian: 'множественное число женского рода',
      hebrew: 'רבות',
      pronuncEng: 'ravOt',
      pronuncRus: 'равОт',
      category: 'general'
    },

    {
      id: 127,
      english: 'Neighbours',
      russian: 'соседи',
      hebrew: 'שכנים',
      pronuncEng: 'shkhenim',
      pronuncRus: 'шхенИм',
      category: 'general'
    },

    {
      id: 128,
      english: 'Relatives',
      russian: 'родственники',
      hebrew: 'קרובים',
      pronuncEng: 'kruvim',
      pronuncRus: 'крувИм',
      category: 'general'
    },

    {
      id: 129,
      english: '(I) can',
      russian: '(я) могу',
      hebrew: 'יכול',
      pronuncEng: 'yekhOl',
      pronuncRus: 'йехОль',
      category: 'general'
    },

    {
      id: 130,
      english: 'Note, small letter',
      russian: 'записка',
      hebrew: 'פתק',
      pronuncEng: 'pEtek',
      pronuncRus: 'пЕтэк',
      category: 'general'
    },

    {
      id: 131,
      english: 'Manager',
      russian: 'менеджер, начальник',
      hebrew: 'מנהל',
      pronuncEng: 'menahEl',
      pronuncRus: 'менаЭль',
      category: 'profession'
    },

    {
      id: 132,
      english: 'Problem',
      russian: 'проблема',
      hebrew: 'בעיה',
      pronuncEng: "be'aya",
      pronuncRus: "бэ'айя",
      category: 'general'
    },

    {
      id: 133,
      english: 'Clerk (m)',
      russian: 'клерк',
      hebrew: 'פקיד',
      pronuncEng: 'pakid',
      pronuncRus: 'пакИд',
      category: 'profession'
    },

    {
      id: 134,
      english: 'Intermission',
      russian: 'перерыв',
      hebrew: 'הפסקה',
      pronuncEng: 'afsakA',
      pronuncRus: 'афсакА',
      category: 'general'
    },

    {
      id: 135,
      english: 'Later',
      russian: 'позже',
      hebrew: 'אחר כך',
      pronuncEng: 'Akhar kakh',
      pronuncRus: 'Ахар ках',
      category: 'adverb'
    },

    {
      id: 136,
      english: 'Right (side)',
      russian: 'правый',
      hebrew: 'ימינה',
      pronuncEng: 'yamina',
      pronuncRus: 'ямИна',
      category: 'general'
    },

    {
      id: 137,
      english: 'Left',
      russian: 'левый',
      hebrew: 'שמולה',
      pronuncEng: 'smOla',
      pronuncRus: 'смОла',
      category: 'general'
    },

    {
      id: 138,
      english: 'Talk, conversation',
      russian: 'разговор',
      hebrew: 'שיחה',
      pronuncEng: 'sikhA',
      pronuncRus: 'сихА',
      category: 'general'
    },

    {
      id: 139,
      english: 'Party',
      russian: 'вечеринка',
      hebrew: 'מסיבה',
      pronuncEng: 'mesibA',
      pronuncRus: 'месибА',
      category: 'general'
    },

    {
      id: 140,
      english: 'Army',
      russian: 'армия',
      hebrew: 'צבא',
      pronuncEng: 'tzava',
      pronuncRus: 'цава',
      category: 'general'
    },

    {
      id: 141,
      english: 'Secretary (m)',
      russian: 'секретарь',
      hebrew: 'מזכיר',
      pronuncEng: 'mazkir',
      pronuncRus: 'мазкИр',
      category: 'profession'
    },

    {
      id: 142,
      english: 'Singer',
      russian: 'певец',
      hebrew: 'זמר',
      pronuncEng: 'zamAr',
      pronuncRus: 'замАр',
      category: 'profession'
    },

    {
      id: 143,
      english: 'More',
      russian: 'ещё',
      hebrew: 'עוד',
      pronuncEng: 'od',
      pronuncRus: 'од',
      category: 'adverb'
    },

    {
      id: 144,
      english: 'Quickly, fast',
      russian: 'быстро',
      hebrew: 'מהר',
      pronuncEng: 'mahEr',
      pronuncRus: 'маhэр',
      category: 'adverb'
    },

    {
      id: 145,
      english: 'More than',
      russian: 'более, больше',
      hebrew: 'יותר',
      pronuncEng: 'yotEr',
      pronuncRus: 'йотЭр',
      category: 'adverb'
    },

    {
      id: 146,
      english: 'Slowly',
      russian: 'медленно',
      hebrew: 'לאט',
      pronuncEng: 'leAt',
      pronuncRus: 'леАт',
      category: 'adverb'
    },

    {
      id: 147,
      english: 'Ball or pill',
      russian: 'мяч, шар (и таблетка тоже)',
      hebrew: 'כדור',
      pronuncEng: 'kadUr',
      pronuncRus: 'кадУр',
      category: 'general'
    },

    {
      id: 148,
      english: 'Limited',
      russian: 'ограничено',
      hebrew: 'מצומצם',
      pronuncEng: 'metzumtzAm',
      pronuncRus: 'мецумцАм',
      category: 'adverb'
    },

    {
      id: 149,
      english: 'To recommend (infinitive)',
      russian: 'рекомендовать (инфинитив)',
      hebrew: 'להמליץ',
      pronuncEng: 'lehamlitz',
      pronuncRus: 'леhамлИц',
      category: 'hifil'
    },

    {
      id: 150,
      english: 'Recommend (present time, m)',
      russian: 'рекомендую (м)',
      hebrew: 'ממליץ',
      pronuncEng: 'mamlitz',
      pronuncRus: 'мамлИц',
      category: 'hifil'
    },

    {
      id: 151,
      english: 'I recommended',
      russian: 'Я рекомендовал(а)',
      hebrew: 'המלצתי',
      pronuncEng: 'himlAtzti',
      pronuncRus: 'hимлАцти',
      category: 'hifil'
    },

    {
      id: 152,
      english: 'He recommended',
      russian: 'Он рекомендовал',
      hebrew: 'המליץ',
      pronuncEng: 'himlitz',
      pronuncRus: 'hимлИц',
      category: 'hifil'
    },

    {
      id: 153,
      english: 'We recommended',
      russian: 'Мы рекомендовали',
      hebrew: 'המלצנו',
      pronuncEng: 'himlAtznu',
      pronuncRus: 'hимлАцну',
      category: 'hifil'
    },

    {
      id: 154,
      english: 'You (pl.m) recommended',
      russian: 'Вы (мн.м) рекомендовали',
      hebrew: 'המלצתם',
      pronuncEng: 'himlatztem',
      pronuncRus: 'hимлАцтэм',
      category: 'hifil'
    },

    {
      id: 155,
      english: 'They recommended',
      russian: 'Они рекомендовали',
      hebrew: 'המליצו',
      pronuncEng: 'himlitzu',
      pronuncRus: 'hимлицУ',
      category: 'hifil'
    },

    {
      id: 156,
      english: 'I will recommend',
      russian: 'Я буду рекомендовать',
      hebrew: 'אמליץ',
      pronuncEng: 'amlitz',
      pronuncRus: 'амлИц',
      category: 'hifil'
    },

    {
      id: 157,
      english: 'You (sing.m) will recommend',
      russian: 'Ты (м) будешь рекомендовать',
      hebrew: 'תמליץ',
      pronuncEng: 'tamlitz',
      pronuncRus: 'тамлИц',
      category: 'hifil'
    },

    {
      id: 158,
      english: 'You (sing.f) will recommend',
      russian: 'Ты (ж) будешь рекомендовать',
      hebrew: 'תמליצי',
      pronuncEng: 'tamlitzi',
      pronuncRus: 'тамлицИ',
      category: 'hifil'
    },

    {
      id: 159,
      english: 'He will recommend',
      russian: 'Он будет рекомендовать',
      hebrew: 'ימליץ',
      pronuncEng: 'yamlitz',
      pronuncRus: 'ямлИц',
      category: 'hifil'
    },

    {
      id: 160,
      english: 'She will recommend',
      russian: 'Она будет рекомендовать',
      hebrew: 'תמליץ',
      pronuncEng: 'tamlitz',
      pronuncRus: 'тамлИц',
      category: 'hifil'
    },

    {
      id: 161,
      english: 'We will recommend',
      russian: 'Мы будем рекомендовать',
      hebrew: 'נמליץ',
      pronuncEng: 'namlitz',
      pronuncRus: 'намлИц',
      category: 'hifil'
    },

    {
      id: 162,
      english: 'You (pl.m) will recommend',
      russian: 'Вы (мн.м) будете рекомендовать',
      hebrew: 'תמליצו',
      pronuncEng: 'tamlitzu',
      pronuncRus: 'тамлицУ',
      category: 'hifil'
    },

    {
      id: 163,
      english: 'You (pl.f) will recommend',
      russian: 'Вы (мн.ж) будете рекомендовать',
      hebrew: 'ימליצו',
      pronuncEng: 'yamlitzu',
      pronuncRus: 'ямлицУ',
      category: 'hifil'
    },

    {
      id: 164,
      english: 'Something',
      russian: 'Что-то, что-либо',
      hebrew: 'משהו',
      pronuncEng: 'mAshehu',
      pronuncRus: 'мАшеhу',
      category: 'general'
    },

    {
      id: 165,
      english: '',
      russian: '',
      hebrew: '',
      pronuncEng: '',
      pronuncRus: '',
      category: ''
    },



  ]

export default words