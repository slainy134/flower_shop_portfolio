export const categories = [
    {
        name: "Розы"
    },
    {
        name: "Тюльпаны"
    },
    {
        name: "Хризантемы"
    },
    {
        name: "Пионы"
    },
    {
        name: "Сезонные цветы"
    },
    {
        name: "Конфетные композиции"
    },
    {
        name: "Подарки"
    },
]

export const variations = [
    {
        name: "Красная обертка",
        price: 130,
        imageUrl: "https://bloombox.com.ua/image/cache/catalog/2.06/IMG_7527-700x700.jpeg"
    },
    {
        name: "Розовая обертка",
        price: 130,
        imageUrl: "https://idealfloristika.ru/wa-data/public/shop/products/94/94/129494/images/123568/123568.970.jpg"
    },
    {
        name: "Белая обертка с кружевом",
        price: 150,
        imageUrl: "https://mirrey.ru/upload/news_images/1ab/p00wcn8xwhv7lt236ahvk309wnqo0i41.jpg"
    },
    {
        name: "Открытка 'Любимой'",
        price: 150,
        imageUrl: "https://static.insales-cdn.com/r/0Zh3F6Ey-o8/rs:fit:440:0:1/q:100/plain/images/products/1/4698/640995930/large_topper-mama2-jpg.jpg@jpg"
    },
    {
        name: "Открытка 'С Днём Рождения'",
        price: 150,
        imageUrl: "https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752/w1200/1528.jpg"
    },
    {
        name: "5 веток гипсофилы",
        price: 300,
        imageUrl: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_915,h_1024/https://privet-foodbyket.ru/wp-content/uploads/2021/10/gipsofila-915x1024.jpg"
    },
    {
        name: "Эвкалипт серебристый",
        price: 250,
        imageUrl: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400"
    },
    {
        name: "Коробка Raffaello 200 г",
        price: 550,
        imageUrl: "https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752/w1200/1528.jpg"
    },
    {
        name: "Шоколадный мишка 25 см",
        price: 890,
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
    },
    {
        name: "Гелиевый шарик сердце",
        price: 450,
        imageUrl: "https://images.unsplash.com/photo-1560815612-4485a9b0a0e4?w=400"
    },
    {
        name: "Большой бант из ленты",
        price: 120,
        imageUrl: "https://idealfloristika.ru/wa-data/public/shop/products/94/94/129494/images/123568/123568.970.jpg"
    },
    {
        name: "Добавить 3 ветки рускуса",
        price: 200,
        imageUrl: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400"
    }
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
    {
        name: 'Букет французских роз Барбадос 15 шт',
        price: 4200,
        description: 'Розовые пионовидные кустовые розы в нежной упаковке',
        imageUrl: 'https://lillelett.ee/uploads/gallery/PRODUCT_389/dsc_0169-2-2.jpg.big.jpg',
        categoryId: 1,
    },
    {
        name: '101 красная роза',
        price: 18500,
        description: 'Грандиозный букет для признания в любви',
        imageUrl: 'https://lillelett.ee/uploads/gallery/PRODUCT_389/dsc_0169-2-2.jpg.big.jpg',
        categoryId: 1,
    },
    {
        name: 'Монобукет роз Мадам Бомбастик 11 шт',
        price: 4980,
        description: 'Пионовидные кустовые розы насыщенного цвета',
        imageUrl: 'https://lillelett.ee/uploads/gallery/PRODUCT_389/dsc_0169-2-2.jpg.big.jpg',
        categoryId: 1,
    },
    {
        name: '7 красных роз Эквадор',
        price: 1800,
        description: 'Компактный классический букет для свидания',
        imageUrl: 'https://lillelett.ee/uploads/gallery/PRODUCT_389/dsc_0169-2-2.jpg.big.jpg',
        categoryId: 1,
    },
    {
        name: 'Розы Кения микс 25 шт',
        price: 3800,
        description: 'Смешанные оттенки красного и бордо в элегантной упаковке',
        imageUrl: 'https://lillelett.ee/uploads/gallery/PRODUCT_389/dsc_0169-2-2.jpg.big.jpg',
        categoryId: 1,
    },
    {
        name: 'Букет кустовых роз Мэнсфилд Парк',
        price: 3500,
        description: 'Нежные розовые кустовые розы с альстромерией',
        imageUrl: 'https://lillelett.ee/uploads/gallery/PRODUCT_389/dsc_0169-2-2.jpg.big.jpg',
        categoryId: 1,
    },
    {
        name: 'Букет из 25 тюльпанов с эвкалиптом',
        price: 4800,
        description: '25 разноцветных тюльпанов с добавлением эвкалипта для объема и аромата',
        imageUrl: 'https://bloomingails.ph/cdn/shop/files/tulip-burst-bouquet_2ce17047-65ad-469e-b3c8-69ea44e8cda5.jpg?v=1745418380&width=713',
        categoryId: 2,
    },
    {
        name: 'Желтые тюльпаны 25 шт',
        price: 3900,
        description: 'Солнечный букет из 25 желтых тюльпанов — для радости и позитива',
        imageUrl: 'https://bloomingails.ph/cdn/shop/files/tulip-burst-bouquet_2ce17047-65ad-469e-b3c8-69ea44e8cda5.jpg?v=1745418380&width=713',
        categoryId: 2,
    },
    {
        name: 'Розовые тюльпаны нежный букет 15 шт',
        price: 3200,
        description: 'Нежно-розовые тюльпаны в стильной упаковке под ленту',
        imageUrl: 'https://bloomingails.ph/cdn/shop/files/tulip-burst-bouquet_2ce17047-65ad-469e-b3c8-69ea44e8cda5.jpg?v=1745418380&width=713',
        categoryId: 2,
    },
    {
        name: 'Лавандовые тюльпаны 25 шт',
        price: 4800,
        description: 'Букет из 25 лавандовых/сиреневых тюльпанов — романтика и спокойствие',
        imageUrl: 'https://bloomingails.ph/cdn/shop/files/tulip-burst-bouquet_2ce17047-65ad-469e-b3c8-69ea44e8cda5.jpg?v=1745418380&width=713',
        categoryId: 2,
    },
    {
        name: 'Моно-букет белых тюльпанов 11 шт',
        price: 3011,
        description: 'Минималистичный букет из белых тюльпанов в белой упаковке',
        imageUrl: 'https://bloomingails.ph/cdn/shop/files/tulip-burst-bouquet_2ce17047-65ad-469e-b3c8-69ea44e8cda5.jpg?v=1745418380&width=713',
        categoryId: 2,
    },
    {
        name: 'Букет 35 тюльпанов микс',
        price: 5800,
        description: 'Большой яркий букет из 35 разноцветных тюльпанов для впечатляющего подарка',
        imageUrl: 'https://bloomingails.ph/cdn/shop/files/tulip-burst-bouquet_2ce17047-65ad-469e-b3c8-69ea44e8cda5.jpg?v=1745418380&width=713',
        categoryId: 2,
    },
    {
        name: 'Букет из кустовых хризантем Калимба',
        price: 3163,
        description: 'Яркий и пышный букет кустовых хризантем в оттенках Калимба — для позитивного настроения',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/20/1757754912_92995220.jpg',
        categoryId: 3,
    },
    {
        name: 'Авторский букет с хризантемой и диантусами',
        price: 3571,
        description: 'Сочетание хризантем и диантусов в авторской композиции — стойкий и нежный вариант',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/20/1757754912_92995220.jpg',
        categoryId: 3,
    },
    {
        name: 'Букет ПИОНЫ',
        price: 4590,
        description: 'Нежный монобукет пионов в пастельных тонах — для создания весеннего настроения',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/10/1725977754_93701210.jpg',
        categoryId: 4,
    },
    {
        name: 'Букет из 7 розовых пионов',
        price: 7847,
        description: 'Пышный букет из 7 розовых пионов с зеленью — стойкий и ароматный вариант',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/10/1725977754_93701210.jpg',
        categoryId: 4,
    },
    {
        name: 'Романтический букет с пионами',
        price: 6975,
        description: 'Романтичная композиция с пионами и дополнительными цветами — для особого повода',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/10/1725977754_93701210.jpg',
        categoryId: 4,
    },
    {
        name: 'Букет с пионами и маттиолой',
        price: 6900,
        description: 'Сочетание пионов и душистой маттиолы — нежный и ароматный букет',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/10/1725977754_93701210.jpg',
        categoryId: 4,
    },
    {
        name: 'Букет красных пионов 7 шт',
        price: 13860,
        description: 'Большой букет из 7 красных пионов — страстный и впечатляющий подарок',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/10/1725977754_93701210.jpg',
        categoryId: 4,
    },
    {
        name: 'Композиция из Raffaello и Kinder конфет',
        price: 3800,
        description: 'Сладкая композиция из конфет Raffaello, Kinder Surprise и батончиков в стильной коробке или букете — идеальный подарок для детей и взрослых',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/92/1750950379_72619992.jpg',
        categoryId: 6,
    },
    {
        name: 'Мягкая игрушка мишка с сердцем',
        price: 2500,
        description: 'Большой плюшевый мишка с сердечком в лапках — классический милый подарок для девушки или ребенка, в подарочной упаковке с лентой',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/61/1761028560_46167461.jpg',
        categoryId: 7,
    },
    {
        name: 'Подарочный набор с мягкой игрушкой и конфетами',
        price: 3800,
        description: 'Набор: плюшевая игрушка (зайчик или мишка), коробка Ferrero Rocher или Raffaello, открытка и упаковка — универсальный подарок на любой праздник',
        imageUrl: 'https://content2.flowwow-images.com/data/flowers/1000x1000/61/1761028560_46167461.jpg',
        categoryId: 7,
    },
];

export const productVariations = [
    { productId: 1, variationIds: [1, 2] },
    { productId: 13, variationIds: [1, 2, 3, 4, 5] },
    { productId: 14, variationIds: [6, 7, 8, 9, 10] },
];