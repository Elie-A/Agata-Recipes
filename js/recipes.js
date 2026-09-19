const recipesData = [
    {
        id: "kaake",
        title: "Kaake",
        subtitle: "Chlebek lewantyński z sezamem",
        category: "Pieczywo",
        icon: "🥖",
        prepTime: "2h 15m",
        difficulty: "Średni",
        tags: ["pieczywo", "wege", "kuchnia lewantyńska"],
        servings: 7,

        ingredients: [
            { name: "mąki", amount: 3.5, unit: "szklanki" },
            { name: "suchych drożdży instant", amount: 7, unit: "g" },
            { name: "cukru", amount: 3, unit: "łyżki" },
            { name: "soli", amount: 0.5, unit: "łyżki" },
            { name: "mleka", amount: 4, unit: "łyżki" },
            { name: "ciepłej wody", amount: null, unit: "według potrzeb" },
            { name: "sezamu", amount: 1, unit: "szklanka" },
            { name: "miodu", amount: 1, unit: "łyżeczka", optional: true }
        ],

        instructions: [
            "W misce wymieszaj mąkę, drożdże, cukier, sól i mleko.",
            "Stopniowo dodawaj ciepłą wodę, mieszając ciasto.",
            "Posmaruj ciasto odrobiną oliwy z oliwek, pozostaw je w misce i przykryj wilgotną ściereczką.",
            "Odstaw ciasto na godzinę lub do momentu, aż podwoi swoją objętość.",
            "Podziel ciasto na równe części, około 7, i uformuj z nich kulki.",
            "Lekko posmaruj kulki ciasta z obu stron wodą i obtocz je w sezamie.",
            "Delikatnie oprósz powierzchnię mąką i rozwałkuj ciasto.",
            "Używając szklanki, zrób otwór w górnej części ciasta.",
            "Przykryj ciasto i odstaw na godzinę. W międzyczasie rozgrzej piekarnik do 250–275°C.",
            "Umieść ciasto na środkowej półce piekarnika i piecz przez 5–6 minut.",
            "Opcjonalnie w osobnej miseczce wymieszaj miód z połową szklanki wody. Możesz użyć samej wody.",
            "Możesz nadziać je labneh lub serem. Możesz też przygotować na nim manakish albo pizzę."
        ],

        tips: []
    },

    {
        id: "labneh",
        title: "Labneh",
        subtitle: "Gęsty jogurt w stylu libańskim",
        category: "Dodatki",
        icon: "🥛",
        prepTime: "12–48h",
        difficulty: "Łatwy",
        tags: ["wege", "dip", "kuchnia libańska"],
        servings: 6,

        ingredients: [
            { name: "naturalnego jogurtu", amount: 1, unit: "litr" },
            { name: "soli", amount: 0.5, unit: "łyżeczki" },
            { name: "gazy lub cienkiej ściereczki", amount: 1, unit: "szt." },
            { name: "sitka", amount: 1, unit: "szt." },
            { name: "miski", amount: 1, unit: "szt." }
        ],

        instructions: [
            "Wymieszaj jogurt z solą w dużej misce.",
            "Przygotuj sito: umieść je na misce tak, aby nie dotykało dna.",
            "Wyłóż sito gazą złożoną 2–3 razy lub cienką, czystą ściereczką.",
            "Przelej jogurt do gazy.",
            "Zwiąż końce gazy i zawieś nad miską lub pozostaw w sicie w lodówce.",
            "Pozostaw do odsączenia przez 12–24 godziny, aby uzyskać kremowy labneh, lub 48 godzin albo dłużej, aby uzyskać gęsty labneh.",
            "Przełóż labneh do pojemnika lub miski i dodaj oliwę z oliwek.",
            "Przechowuj w lodówce do 5 dni."
        ],

        tips: [
            "Aby zrobić kulki z labneh, użyj bardzo gęstego labneh, uformuj małe kulki i susz je przez kilka godzin w lodówce.",
            "Kulki możesz zanurzyć w oliwie z ziołami, np. tymiankiem, czosnkiem, oregano lub sumakiem.",
            "Podawaj skropione oliwą i posypane za'atarem, sumakiem lub świeżą miętą.",
            "Podawaj z chlebem pita, pomidorami, ogórkami lub jako dip do mezze.",
            "Opcjonalnie możesz dodać toum i suszoną miętę.",
            "Kulki przechowywane w oliwie mogą być przechowywane przez kilka tygodni."
        ]
    },

    {
        id: "kafta",
        title: "Kafta",
        subtitle: "Libańskie kotleciki z mięsa mielonego",
        category: "Dania główne",
        icon: "🥩",
        prepTime: "45 min",
        difficulty: "Średni",
        tags: ["mięso", "grill", "kuchnia libańska"],
        servings: 4,

        ingredients: [
            { name: "mielonej wołowiny lub jagnięciny", amount: 500, unit: "g" },
            { name: "średniej cebuli", amount: 1, unit: "szt." },
            { name: "natki pietruszki", amount: 1, unit: "pęczek" },
            { name: "mielonego cynamonu", amount: 1, unit: "łyżeczka" },
            { name: "mielonego ziela angielskiego", amount: 1, unit: "łyżeczka" },
            { name: "mielonego czarnego pieprzu", amount: 0.5, unit: "łyżeczki" },
            { name: "soli", amount: 1, unit: "łyżeczka" },
            { name: "czosnku", amount: 1, unit: "ząbek", optional: true }
        ],

        instructions: [
            "W dużej misce wymieszaj mielone mięso, cebulę, natkę pietruszki, przyprawy i czosnek.",
            "Wyrabiaj ręką przez kilka minut, aż masa stanie się jednolita i kleista.",
            "Uformuj kaftę w podłużne kotleciki lub kulki. Jeśli grillujesz, możesz nabić je na szpikulce.",
            "Grilluj na grillu lub patelni grillowej po 3–4 minuty z każdej strony, aż będą dobrze przypieczone.",
            "W przypadku pieczenia z warzywami ułóż kotleciki w naczyniu żaroodpornym.",
            "Dodaj pokrojone pomidory, cebulę i ziemniaki.",
            "Polej wszystko rozcieńczonym koncentratem pomidorowym.",
            "Piecz w temperaturze 200°C przez około 30–40 minut, aż ziemniaki będą miękkie."
        ],

        tips: [
            "Podawaj z ryżem, chlebem pita, hummusem lub tabbouleh."
        ]
    },

    {
        id: "hommus-tahini",
        title: "Hommus Tahini",
        subtitle: "Kremowy hummus z tahini",
        category: "Dodatki",
        icon: "🧆",
        prepTime: "30 min + moczenie",
        difficulty: "Łatwy",
        tags: ["wege", "dip", "kuchnia bliskowschodnia"],
        servings: 6,

        ingredients: [
            { name: "suchej ciecierzycy", amount: 1, unit: "szklanka" },
            { name: "lub ugotowanej ciecierzycy", amount: 2, unit: "szklanki" },
            { name: "pasty tahini", amount: 0.5, unit: "szklanki" },
            { name: "soku z cytryny", amount: 2, unit: "łyżki" },
            { name: "czosnku", amount: 2, unit: "ząbki" },
            { name: "soli", amount: 0.5, unit: "łyżeczki" },
            { name: "zimnej wody", amount: 0.25, unit: "szklanki" },
            { name: "oliwy z oliwek", amount: null, unit: "do polania" },
            { name: "kuminu", amount: null, unit: "szczypta", optional: true },
            { name: "natki pietruszki", amount: null, unit: "do dekoracji", optional: true },
            { name: "papryki słodkiej lub wędzonej", amount: null, unit: "do dekoracji", optional: true }
        ],

        instructions: [
            "Jeśli używasz suchej ciecierzycy, namocz ją przez noc w dużej ilości wody. Rano odcedź i ugotuj do miękkości przez około 1–1,5 godziny.",
            "Dla bardziej kremowej konsystencji możesz obrać ciecierzycę ze skórki po ugotowaniu.",
            "Jeśli używasz ciecierzycy z puszki, przepłucz ją i gotuj przez 15–20 minut w wodzie, aby była bardziej miękka.",
            "W malakserze zmiksuj tahini z sokiem z cytryny i czosnkiem przez około 30 sekund.",
            "Dodaj ugotowaną ciecierzycę i sól.",
            "Miksuj przez 2–3 minuty, stopniowo dolewając zimną wodę.",
            "Spróbuj i dopraw według własnych preferencji.",
            "Przełóż hummus do miski, wygładź powierzchnię łyżką, polej oliwą i posyp wybranymi dodatkami."
        ],

        tips: [
            "Im bardziej miękka ciecierzyca, tym gładszy hummus.",
            "Do uzyskania lekkiej, aksamitnej konsystencji użyj lodowatej wody.",
            "Jeśli chcesz bardzo gładki hummus, możesz dodatkowo przetrzeć go przez sito.",
            "Hummus można przechowywać w lodówce przez 4–5 dni."
        ]
    },

    {
        id: "toum",
        title: "Toum",
        subtitle: "Czosnkowy sos",
        category: "Sosy",
        icon: "🧄",
        prepTime: "20 min",
        difficulty: "Średni",
        tags: ["wege", "sos", "czosnek"],
        servings: 6,

        videoUrl: "https://www.youtube.com/embed/uYIDfBbgVVI?start=426",

        ingredients: [
            { name: "czosnku", amount: 6, unit: "ząbków" },
            { name: "oleju roślinnego", amount: 1, unit: "szklanka" },
            { name: "soku z cytryny", amount: 2, unit: "łyżki" },
            { name: "soli", amount: 0.5, unit: "łyżeczki" },
            { name: "zimnej wody", amount: 2, unit: "łyżki" }
        ],

        instructions: [
            "Obierz ząbki czosnku i usuń ewentualne zielone pędy.",
            "W malakserze lub blenderze umieść czosnek i sól. Miksuj, aż czosnek będzie bardzo drobno posiekany.",
            "Nadal miksując, bardzo powoli, cienkim strumieniem zacznij wlewać olej.",
            "Po dodaniu około połowy oleju dodaj sok z cytryny oraz 1–2 łyżki zimnej wody.",
            "Kontynuuj miksowanie.",
            "Stopniowo wlewaj pozostały olej i wodę, aż uzyskasz gęsty, biały i kremowy sos.",
            "Spróbuj i w razie potrzeby dopraw solą lub sokiem z cytryny."
        ],

        tips: [
            "Olej należy dodawać bardzo powoli, aby sos dobrze się emulgował.",
            "Możesz dodać więcej soku z cytryny dla bardziej intensywnego smaku.",
            "Toum można przechowywać w lodówce do tygodnia w szczelnym pojemniku.",
            "Jeśli sos się zważy, spróbuj uratować go odrobiną zimnej wody."
        ]
    },

    {
        id: "warak-enab",
        title: "Warak Enab",
        subtitle: "Liście winogron faszerowane ryżem i warzywami",
        category: "Dania główne",
        icon: "🍃",
        prepTime: "1h 15m",
        difficulty: "Średni",
        tags: ["wege", "ryż", "kuchnia libańska"],
        servings: 5,

        ingredients: [
            { name: "liści winogron konserwowanych", amount: 400, unit: "g" },
            { name: "ryżu", amount: 1, unit: "szklanka" },
            { name: "pomidorów", amount: 2, unit: "szt." },
            { name: "cebuli", amount: 1, unit: "szt." },
            { name: "świeżej pietruszki", amount: 0.5, unit: "szklanki" },
            { name: "mięty świeżej lub suszonej", amount: 0.25, unit: "szklanki" },
            { name: "oliwy z oliwek", amount: 0.25, unit: "szklanki" },
            { name: "soku z cytryny", amount: 1, unit: "szt. cytryny" },
            { name: "soli", amount: null, unit: "do smaku" },
            { name: "pieprzu", amount: null, unit: "do smaku" },
            { name: "sosu pomidorowego lub koncentratu", amount: 2, unit: "łyżki", optional: true }
        ],

        instructions: [
            "Ryż przepłucz i odsącz.",
            "W dużej misce wymieszaj ryż, pomidory, cebulę, pietruszkę, miętę, sól, pieprz i połowę oliwy.",
            "Opcjonalnie dodaj koncentrat pomidorowy.",
            "Liście winogron dokładnie opłucz, jeśli są słone.",
            "Na każdy liść nałóż około 1 łyżkę farszu.",
            "Zawiń liść jak gołąbki: boki do środka i następnie ciasno zwiń.",
            "Ułóż zwinięte liście ciasno w garnku warstwami.",
            "Polej pozostałą oliwą i sokiem z cytryny.",
            "Możesz położyć na wierzchu talerz, aby liście nie rozwinęły się podczas gotowania.",
            "Możesz dodatkowo obciążyć talerz kubkiem z wodą.",
            "Zalej ciepłą wodą tak, aby przykryła liście.",
            "Przykryj pokrywką i gotuj na małym ogniu przez około 40–50 minut, aż ryż będzie miękki."
        ],

        tips: []
    },

    {
        id: "fattoush",
        title: "Fattoush",
        subtitle: "Sałatka z pitą i sumakiem",
        category: "Sałatki",
        icon: "🥗",
        prepTime: "20 min",
        difficulty: "Łatwy",
        tags: ["wege", "sałatka", "kuchnia libańska"],
        servings: 4,

        ingredients: [
            { name: "pomidorów", amount: 2, unit: "duże szt." },
            { name: "ogórka", amount: 1, unit: "szt." },
            { name: "czerwonej cebuli", amount: 1, unit: "szt." },
            { name: "sałaty rzymskiej lub mieszanki sałat", amount: 1, unit: "garść" },
            { name: "świeżej mięty", amount: 1, unit: "garść" },
            { name: "rzodkiewek", amount: 2, unit: "szt." },
            { name: "pity", amount: 3, unit: "szt." },
            { name: "sumaku", amount: 2, unit: "łyżki" },
            { name: "oliwy z oliwek", amount: 3, unit: "łyżki" },
            { name: "soku z cytryny", amount: 1, unit: "szt. cytryny" },
            { name: "soli", amount: null, unit: "do smaku" },
            { name: "pieprzu", amount: null, unit: "do smaku" }
        ],

        instructions: [
            "Warzywa i zioła wymieszaj w dużej misce.",
            "Pity podpraż w piekarniku lub na patelni, aż będą chrupiące.",
            "Pokrusz lub pokrój pity na kawałki i dodaj do sałatki.",
            "W małej misce wymieszaj oliwę, sok z cytryny, sumak, sól i pieprz.",
            "Polej sałatkę dressingiem i dokładnie wymieszaj."
        ],

        tips: [
            "Sumak nadaje charakterystyczny kwaskowaty smak.",
            "Podawaj od razu, aby pita pozostała chrupiąca."
        ]
    },

    {
        id: "manakish",
        title: "Manakish",
        subtitle: "Wegetariańskie warianty libańskich placków",
        category: "Pieczywo",
        icon: "🫓",
        prepTime: "1h 20m",
        difficulty: "Łatwy",
        tags: ["wege", "pieczywo", "zaatar"],
        servings: 4,

        ingredients: [
            { name: "mąki pszennej", amount: 2, unit: "szklanki" },
            { name: "suchych drożdży", amount: 1, unit: "łyżeczka" },
            { name: "soli", amount: 0.5, unit: "łyżeczki" },
            { name: "ciepłej wody", amount: 0.75, unit: "szklanki" },
            { name: "oliwy z oliwek", amount: 2, unit: "łyżki" },
            { name: "za'ataru", amount: null, unit: "do smaku" },
            { name: "białego sera", amount: null, unit: "opcjonalnie", optional: true },
            { name: "pomidorów", amount: null, unit: "opcjonalnie", optional: true },
            { name: "szpinaku", amount: null, unit: "opcjonalnie", optional: true }
        ],

        instructions: [
            "W misce wymieszaj mąkę, sól i drożdże.",
            "Dodaj wodę i oliwę.",
            "Wyrób ciasto, aż będzie elastyczne i nieklejące, około 10 minut.",
            "Przykryj i odstaw na 1 godzinę do wyrośnięcia.",
            "Podziel ciasto na mniejsze kulki i rozwałkuj na cienkie placki.",
            "Na każdy placek posmaruj oliwą, posyp obficie za'atarem lub połóż ser i warzywa.",
            "Piecz w piekarniku nagrzanym do 220°C przez 8–10 minut, aż ciasto się zarumieni i będzie chrupiące."
        ],

        tips: [
            "Manakish najlepiej jeść na ciepło, zaraz po upieczeniu.",
            "Można mieszać dodatki, np. za'atar z serem lub warzywami.",
            "Jeśli nie masz suchych drożdży, możesz użyć około 15 g świeżych drożdży."
        ]
    },

    {
        id: "knafeh-filo",
        title: "Knafeh z ciastem filo",
        subtitle: "Knafeh z serem Akkawi lub mozzarellą",
        category: "Desery",
        icon: "🍰",
        prepTime: "1h",
        difficulty: "Średni",
        tags: ["deser", "ser", "kuchnia bliskowschodnia"],
        servings: 6,

        ingredients: [
            { name: "sera Akkawi lub mozzarelli", amount: 250, unit: "g" },
            { name: "wody różanej", amount: 1, unit: "łyżka" },
            { name: "wody z kwiatów pomarańczy", amount: 1, unit: "łyżka" },
            { name: "kaszki manny", amount: 2, unit: "łyżki", optional: true },
            { name: "cukru", amount: 200, unit: "g" },
            { name: "wody", amount: 120, unit: "ml" },
            { name: "soku z cytryny", amount: 1, unit: "łyżeczka" },
            { name: "pistacji", amount: 2, unit: "łyżki" },
            { name: "ciasta filo", amount: 250, unit: "g" },
            { name: "masła", amount: null, unit: "do smarowania" }
        ],

        instructions: [
            "Ser Akkawi namocz w wodzie przez około 1 godzinę, następnie dokładnie odsącz i zetrzyj.",
            "Wymieszaj ser z wodą różaną i wodą z kwiatów pomarańczy.",
            "W małym garnku połącz cukier i wodę. Doprowadź do wrzenia, zmniejsz ogień i gotuj 8–10 minut.",
            "Dodaj sok z cytryny, wodę różaną i wodę z kwiatu pomarańczy. Odstaw syrop do ostygnięcia.",
            "Rozmrożone ciasto filo pokrój na cienkie paski o szerokości około 3–5 mm.",
            "Wymieszaj ciasto filo z roztopionym masłem.",
            "Nagrzej piekarnik do 180°C i nasmaruj masłem okrągłą formę o średnicy 24 cm.",
            "Na dnie formy rozłóż połowę ciasta filo i lekko dociśnij.",
            "Opcjonalnie posyp ciasto kaszą manną.",
            "Równomiernie rozłóż starty ser.",
            "Przykryj pozostałym ciastem filo, delikatnie dociskając.",
            "Posmaruj wierzch masłem.",
            "Piecz przez 30–35 minut, aż wierzch będzie złocisty i chrupiący.",
            "Po upieczeniu od razu wylej ostudzony syrop na gorące ciasto.",
            "Odstaw na 5–10 minut, aby ciasto wchłonęło syrop.",
            "Posyp pistacjami i podawaj na ciepło."
        ],

        tips: [
            "Phyllo ma chrupiącą teksturę, ale możesz łatwo podpiec paski dla bardziej złocistego efektu.",
            "Knafeh najlepiej smakuje świeże, gdy ser jest ciągnący."
        ]
    },

    {
        id: "knafeh-vermicelli",
        title: "Knafeh z makaronem vermicelli",
        subtitle: "Knafeh z chrupiącym makaronem",
        category: "Desery",
        icon: "🍰",
        prepTime: "50 min",
        difficulty: "Średni",
        tags: ["deser", "ser", "kuchnia bliskowschodnia"],
        servings: 6,

        ingredients: [
            { name: "cienkiego makaronu vermicelli", amount: 200, unit: "g" },
            { name: "wody różanej", amount: 1, unit: "łyżka" },
            { name: "wody z kwiatów pomarańczy", amount: 1, unit: "łyżka" },
            { name: "kaszki manny", amount: 2, unit: "łyżki", optional: true },
            { name: "sera", amount: 250, unit: "g" },
            { name: "cukru", amount: 200, unit: "g" },
            { name: "wody", amount: 120, unit: "ml" },
            { name: "soku z cytryny", amount: 1, unit: "łyżeczka" },
            { name: "pistacji", amount: 2, unit: "łyżki" },
            { name: "masła", amount: null, unit: "do smarowania" }
        ],

        instructions: [
            "W małym garnku połącz cukier i wodę.",
            "Zagotuj, zmniejsz ogień i gotuj przez 8–10 minut.",
            "Dodaj sok z cytryny oraz opcjonalnie wodę różaną i wodę z kwiatu pomarańczy. Odstaw do ostygnięcia.",
            "Makaron vermicelli pokrój na kawałki o długości około 3–4 cm.",
            "Na suchej patelni lekko go podpraż, aż będzie złocisty.",
            "Po zdjęciu z ognia wymieszaj z roztopionym masłem.",
            "Nagrzej piekarnik do 180°C i nasmaruj masłem okrągłą formę o średnicy 24 cm.",
            "Na dnie formy rozłóż połowę makaronu i lekko dociśnij.",
            "Opcjonalnie posyp kaszą manną.",
            "Rozłóż równomiernie starty ser.",
            "Przykryj pozostałym makaronem i lekko dociśnij.",
            "Posmaruj wierzch masłem.",
            "Piecz przez 25–30 minut, aż wierzch będzie złocisty i chrupiący.",
            "Po upieczeniu od razu wylej ostudzony syrop na gorące ciasto.",
            "Odstaw na 5–10 minut.",
            "Posyp pistacjami i podawaj na ciepło."
        ],

        tips: [
            "Prażenie vermicelli przed pieczeniem sprawia, że wierzch jest bardziej chrupiący.",
            "Podawaj gorące, gdy ser jest ciągnący, a makaron chrupiący."
        ]
    },

    {
        id: "mbasbas",
        title: "Mbasbas",
        subtitle: "Tradycyjne ciasteczka z anyżem",
        category: "Desery",
        icon: "🍪",
        prepTime: "45 min",
        difficulty: "Średni",
        tags: ["deser", "ciastka", "anyż"],
        servings: 25,

        ingredients: [
            { name: "mąki pszennej", amount: 4, unit: "szklanki" },
            { name: "cukru", amount: 1, unit: "szklanka" },
            { name: "oleju roślinnego lub roztopionego masła", amount: 1, unit: "szklanka" },
            { name: "mleka", amount: 1, unit: "szklanka" },
            { name: "nasion anyżu", amount: 1, unit: "łyżka" },
            { name: "nasion kopru włoskiego", amount: 1, unit: "łyżka", optional: true },
            { name: "mahleb", amount: 1, unit: "łyżeczka", optional: true },
            { name: "proszku do pieczenia", amount: 1, unit: "łyżeczka" },
            { name: "sody oczyszczonej", amount: 0.5, unit: "łyżeczki" },
            { name: "soli", amount: null, unit: "szczypta" },
            { name: "wanilii lub wody z kwiatu pomarańczy", amount: 1, unit: "łyżeczka", optional: true }
        ],

        instructions: [
            "W dużej misce połącz mąkę, cukier, anyż, koper włoski, mahleb, proszek do pieczenia, sodę i sól.",
            "Dodaj olej lub roztopione masło i rozcieraj palcami, aż mieszanina będzie przypominać mokry piasek.",
            "Stopniowo dodawaj mleko, zagniatając, aż powstanie zwarte, miękkie ciasto, które nie klei się do rąk.",
            "Przykryj ciasto i odstaw na 15–20 minut.",
            "Formuj małe kulki ciasta, spłaszcz je i delikatnie wciśnij w formę do maamoul lub kaak.",
            "Nagrzej piekarnik do 180°C.",
            "Wyłóż blachę papierem do pieczenia.",
            "Ułóż ciastka na blasze i piecz 12–18 minut, aż spód będzie lekko złocisty.",
            "Wierzch powinien pozostać jasny.",
            "Odstaw do całkowitego ostygnięcia."
        ],

        tips: [
            "Z tej porcji wychodzi około 22–28 ciastek.",
            "Jeśli chcesz ciastka bardziej chrupiące, piecz o 2–3 minuty dłużej.",
            "Możesz zastąpić mleko wodą z dodatkiem 1 łyżki mleka w proszku.",
            "Ciasto powinno być zwarte i lekko twardawe przed pieczeniem."
        ]
    },

    {
        id: "healthy-chocolate-banana-dessert",
        title: "Zdrowy deser czekoladowo-bananowy",
        subtitle: "Kremowy deser z banana, jogurtu i gorzkiej czekolady",
        category: "Desery",
        icon: "🍫",
        prepTime: "35 min",
        difficulty: "Łatwy",
        tags: ["deser", "czekolada", "banan"],
        servings: 1,

        ingredients: [
            { name: "dojrzałego banana", amount: 0.5, unit: "szt." },
            { name: "ciemnego kremu czekoladowego", amount: 0.5, unit: "łyżki" },
            { name: "gorzkiej czekolady Lindt 90–99%", amount: 10, unit: "g" },
            { name: "jogurtu greckiego", amount: 1, unit: "szklanka" },
            { name: "mleka", amount: 1, unit: "łyżka", optional: true },
            { name: "kakao naturalnego", amount: null, unit: "do smaku", optional: true },
            { name: "cynamonu", amount: null, unit: "do smaku", optional: true },
            { name: "soli", amount: null, unit: "szczypta", optional: true }
        ],

        instructions: [
            "W miseczce nadającej się do mikrofali rozgnieć banana na gładką masę.",
            "Dodaj ciemny krem czekoladowy oraz drobno posiekaną gorzką czekoladę.",
            "Podgrzewaj w mikrofalówce przez 60–90 sekund, aż czekolada się rozpuści.",
            "Odstaw na 2–3 minuty.",
            "Dodaj jogurt grecki i dokładnie wymieszaj.",
            "Jeśli konsystencja jest zbyt gęsta, dodaj do 1 łyżki mleka.",
            "Wstaw deser do zamrażarki na 20–30 minut.",
            "Przed podaniem posyp kakao, cynamonem lub dodaj szczyptę soli."
        ],

        tips: []
    },

    {
        id: "frozen-chocolate-mousse",
        title: "Mrożony Mus Czekoladowy",
        subtitle: "Mrożony deser bananowo-czekoladowy",
        category: "Desery",
        icon: "🍨",
        prepTime: "3h 30m",
        difficulty: "Łatwy",
        tags: ["deser", "czekolada", "banan", "mrożone"],
        servings: 2,

        ingredients: [
            { name: "bardzo dojrzałego banana", amount: 1, unit: "szt." },
            { name: "niesłodzonego kakao", amount: 2, unit: "łyżki" },
            { name: "tłustego mleka lub pełnotłustego mleka roślinnego", amount: 1, unit: "szklanka" },
            { name: "ekstraktu waniliowego", amount: 0.5, unit: "łyżeczki" },
            { name: "miodu", amount: 1, unit: "łyżeczka", optional: true }
        ],

        instructions: [
            "Połącz zamrożonego banana, kakao, mleko, ekstrakt waniliowy i opcjonalnie miód w blenderze.",
            "Miksuj na wysokich obrotach przez około 60 sekund.",
            "Przelej masę do rondelka.",
            "Podgrzewaj na małym ogniu, stale mieszając rózgą, aby delikatnie zagęścić bazę.",
            "Gdy pojawią się pierwsze małe bąbelki, zdejmij rondelek z ognia.",
            "Nie gotuj zbyt długo, aby masa nie stała się gumowata.",
            "Odstaw na 15–20 minut.",
            "Przelej masę do szerokiego, płytkiego naczynia.",
            "Wstaw do zamrażarki.",
            "Po 1 godzinie wyjmij i energicznie wymieszaj widelcem, rozbijając zamarznięte brzegi.",
            "Powtórz mieszanie po 2 godzinach.",
            "Po około 3 godzinach deser powinien mieć gładką, mrożoną konsystencję musu."
        ],

        tips: []
    },

    {
        id: "chickpea-banana-fudge",
        title: "Czekoladowe Fudge z Ciecierzycy i Bananów",
        subtitle: "Bez pieczenia",
        category: "Desery",
        icon: "🍫",
        prepTime: "3–4h",
        difficulty: "Łatwy",
        tags: ["deser", "bez-pieczenia", "czekolada", "ciecierzyca"],
        servings: 8,

        ingredients: [
            { name: "ciecierzycy", amount: 425, unit: "g" },
            { name: "dojrzałego banana", amount: 1, unit: "szt." },
            { name: "miodu", amount: 2, unit: "łyżki" },
            { name: "soli", amount: null, unit: "szczypta" },
            { name: "kawałków czekolady", amount: 0.33, unit: "szklanki" },
            { name: "wody", amount: 3, unit: "łyżeczki", optional: true }
        ],

        instructions: [
            "Wyłóż małe naczynie lub foremkę papierem do pieczenia.",
            "Po odsączeniu dokładnie osusz ciecierzycę ręcznikiem.",
            "Dodaj ciecierzycę, banana, miód i sól do blendera lub robota kuchennego.",
            "Miksuj do całkowitej gładkości.",
            "Jeśli masa jest zbyt gęsta, dodawaj wodę po 1 łyżeczce.",
            "Rozpuść połowę kawałków czekolady w mikrofalówce w krótkich odstępach 15–20 sekund, mieszając między podgrzewaniem.",
            "Wmieszaj rozpuszczoną czekoladę do masy z ciecierzycy.",
            "Dodaj pozostałe kawałki czekolady.",
            "Przełóż masę do przygotowanego naczynia.",
            "Dokładnie ugnieć szpatułką lub dnem szklanki.",
            "Zamroź masę na około 2 godziny.",
            "Gdy masa będzie wystarczająco sztywna, przenieś ją do lodówki na około 1–2 godziny.",
            "Wyjmij masę, pokrój na kwadraty i przechowuj w lodówce przez 3–4 dni."
        ],

        tips: []
    },

    {
        id: "ice-cream",
        title: "Lody",
        subtitle: "Domowe lody bananowo-orzechowe",
        category: "Desery",
        icon: "🍦",
        prepTime: "Noc + przygotowanie",
        difficulty: "Średni",
        tags: ["deser", "mrożone", "banan"],
        servings: 4,

        ingredients: [
            { name: "dojrzałego banana", amount: 1, unit: "szt." },
            { name: "jogurtu greckiego lub roślinnego", amount: 200, unit: "g" },
            { name: "mleka sojowego lub kokosowego", amount: 150, unit: "ml" },
            { name: "surowych pistacji lub migdałów", amount: 50, unit: "g" },
            { name: "gorącej wody", amount: null, unit: "do namaczania orzechów" },
            { name: "ekstraktu waniliowego", amount: 0.5, unit: "łyżeczki" },
            { name: "soli", amount: null, unit: "szczypta" },
            { name: "mleka", amount: 4, unit: "łyżki", optional: true },
            { name: "miodu lub syropu klonowego", amount: 2, unit: "łyżeczki", optional: true },
            { name: "posiekanych pistacji lub migdałów", amount: null, unit: "garść", optional: true },
            { name: "awokado", amount: 1, unit: "szt.", optional: true }
        ],

        instructions: [
            "Pistacje lub migdały zalej wrzątkiem i mocz przez około 20 minut.",
            "Odcedź orzechy. Migdały można dodatkowo obrać ze skórki.",
            "Pokrój banana i zamroź go przez minimum 4 godziny lub najlepiej na noc.",
            "Umieść namoczone orzechy, zamrożonego banana, jogurt, wanilię, sól oraz mleko w blenderze.",
            "Blenduj do uzyskania gładkiej, kremowej masy.",
            "W razie potrzeby dodaj niewielką ilość mleka.",
            "Przełóż masę do pojemnika i zamrażaj przez noc.",
            "Następnego dnia ponownie zblenduj masę, dodając odrobinę mleka.",
            "Podawaj od razu jako lody typu soft serve lub lekko podmroź, jeśli wolisz twardszą strukturę."
        ],

        tips: [
            "Jeśli używasz mleka zamiast jogurtu greckiego, dodaj awokado lub dodatkowego banana."
        ]
    },

    {
        id: "chocolate-oatmeal-fruit-almonds",
        title: "Czekoladowa owsianka z owocami i migdałami",
        subtitle: "Nocna owsianka z kakao, owocami i migdałami",
        category: "Śniadania",
        icon: "🥣",
        prepTime: "4h lub noc",
        difficulty: "Łatwy",
        tags: ["śniadanie", "owsianka", "czekolada"],
        servings: 1,

        ingredients: [
            { name: "płatków owsianych", amount: 0.5, unit: "szklanki" },
            { name: "jogurtu greckiego", amount: 3, unit: "łyżki" },
            { name: "ekstraktu waniliowego", amount: 1, unit: "łyżeczka" },
            { name: "kakao naturalnego", amount: 1, unit: "łyżka" },
            { name: "miodu", amount: 1, unit: "łyżka" },
            { name: "mleka", amount: 1, unit: "szklanka" },
            { name: "soli", amount: null, unit: "szczypta" },
            { name: "cynamonu", amount: 0.5, unit: "łyżeczki", optional: true },
            { name: "banana", amount: 0.5, unit: "szt." },
            { name: "owoców jagodowych", amount: 0.5, unit: "szklanki" },
            { name: "posiekanych migdałów", amount: 2, unit: "łyżki" }
        ],

        instructions: [
            "W słoiku lub misce wymieszaj płatki owsiane, kakao, sól oraz cynamon.",
            "Dodaj jogurt grecki, ekstrakt waniliowy, miód i mleko.",
            "Dokładnie wymieszaj.",
            "Przykryj i wstaw do lodówki na co najmniej 4 godziny, najlepiej na całą noc.",
            "Przed podaniem dodaj plasterki banana, owoce jagodowe oraz posiekane migdały.",
            "Wymieszaj lub pozostaw dodatki na wierzchu i podawaj na zimno."
        ],

        tips: []
    },

    {
        id: "lebanese-tabbouleh",
        title: "Libańska Tabbouleh",
        subtitle: "Klasyczna sałatka z dużą ilością pietruszki",
        category: "Sałatki",
        icon: "🥗",
        prepTime: "1h 15m",
        difficulty: "Średni",
        tags: ["wege", "sałatka", "kuchnia libańska"],
        servings: 6,

        ingredients: [
            { name: "świeżej pietruszki", amount: 350, unit: "g" },
            { name: "pomidorów typu plum", amount: 3, unit: "duże szt." },
            { name: "cebuli", amount: 100, unit: "g" },
            { name: "drobnego bulguru #1", amount: 40, unit: "g" },
            { name: "świeżej mięty", amount: 10, unit: "gałązek" },
            { name: "świeżo wyciśniętego soku z cytryny", amount: 100, unit: "ml" },
            { name: "oliwy extra virgin", amount: 60, unit: "ml" },
            { name: "soli", amount: 0.75, unit: "łyżeczki" },
            { name: "świeżo mielonego czarnego pieprzu", amount: 0.5, unit: "łyżeczki" }
        ],

        instructions: [
            "Umieść bulgur w misce, dodaj około 30 ml soku z cytryny, wymieszaj i odstaw na 30 minut.",
            "Bardzo drobno posiekaj cebulę. Dodaj sól i pieprz, dokładnie wymieszaj i odstaw na 30 minut.",
            "Przekrój pomidory na pół, usuń pestki oraz wodnisty środek, a następnie pokrój miąższ w bardzo drobną kostkę.",
            "Oderwij liście pietruszki od grubych łodyg i bardzo drobno posiekaj je nożem.",
            "Oderwij liście mięty od łodyżek i pokrój je w cienkie paski.",
            "W dużej misce wymieszaj pietruszkę, pomidory, cebulę, namoczony bulgur i oliwę.",
            "Dodaj miętę.",
            "Stopniowo dodawaj pozostały sok z cytryny, mieszając i próbując, aż osiągniesz odpowiednią równowagę smaków.",
            "Odstaw tabbouleh na co najmniej 30 minut przed podaniem.",
            "Przed podaniem spróbuj i w razie potrzeby dodaj więcej soli, soku z cytryny lub oliwy."
        ],

        tips: []
    },

    {
        id: "silken-tofu-chocolate-mousse",
        title: "Aksamitny Mus Czekoladowy z Tofu",
        subtitle: "Kremowy mus z jedwabistego tofu",
        category: "Desery",
        icon: "🍫",
        prepTime: "2h 15m",
        difficulty: "Łatwy",
        tags: ["deser", "czekolada", "tofu"],
        servings: 4,

        ingredients: [
            { name: "jedwabistego tofu", amount: 300, unit: "g" },
            { name: "gorzkiej czekolady", amount: 60, unit: "g" },
            { name: "kakao", amount: 8, unit: "g" },
            { name: "miodu", amount: 15, unit: "g" },
            { name: "ekstraktu z wanilii", amount: 5, unit: "ml" },
            { name: "soli", amount: null, unit: "szczypta" },
            { name: "mleka", amount: 45, unit: "ml", optional: true }
        ],

        instructions: [
            "Roztop gorzką czekoladę w kąpieli wodnej lub w kuchence mikrofalowej.",
            "Umieść jedwabiste tofu, roztopioną czekoladę, kakao, miód, ekstrakt z wanilii oraz sól w kielichu blendera.",
            "Dodaj 2 łyżki mleka i blenduj na wysokich obrotach przez 30–60 sekund.",
            "Jeśli blender ma trudności z pracą lub masa jest zbyt gęsta, dodaj jeszcze 1 łyżkę mleka.",
            "Spróbuj musu i w razie potrzeby dostosuj poziom słodyczy.",
            "Przełóż mus do pucharków lub miseczek.",
            "Wstaw do lodówki na co najmniej 2 godziny, najlepiej na całą noc.",
            "Przed podaniem opcjonalnie udekoruj świeżymi owocami, wiórkami czekolady lub orzechami."
        ],

        tips: []
    },

    {
        id: "creamy-chocolate-oatmeal",
        title: "Kremowa Czekoladowa Owsianka z Owocami",
        subtitle: "Gęsta owsianka o konsystencji budyniu",
        category: "Śniadania",
        icon: "🥣",
        prepTime: "10 min",
        difficulty: "Łatwy",
        tags: ["śniadanie", "owsianka", "czekolada", "szybkie"],
        servings: 2,

        ingredients: [
            { name: "płatków owsianych", amount: 100, unit: "g" },
            { name: "mleka", amount: 400, unit: "ml" },
            { name: "kakao", amount: 10, unit: "g" },
            { name: "ekstraktu z wanilii", amount: 0.5, unit: "łyżeczki" },
            { name: "soli", amount: null, unit: "szczypta" },
            { name: "banana lub brzoskwini", amount: 1, unit: "szt." },
            { name: "borówek", amount: null, unit: "do dekoracji", optional: true },
            { name: "orzeszków ziemnych", amount: null, unit: "do dekoracji", optional: true }
        ],

        instructions: [
            "Umieść płatki owsiane, mleko, kakao, ekstrakt z wanilii, sól oraz banana lub brzoskwinię w kielichu blendera.",
            "Blenduj przez około 30 sekund, aż masa będzie całkowicie płynna i gładka.",
            "Przelej zblendowaną masę do małego rondelka.",
            "Gotuj na małym lub średnio-małym ogniu przez 3–5 minut, często mieszając trzepaczką lub łyżką.",
            "Gotuj, aż masa zgęstnieje do konsystencji budyniu.",
            "Zdejmij z ognia i przełóż do miski.",
            "Odstaw na 2–3 minuty do lekkiego ostygnięcia i dalszego zgęstnienia.",
            "Udekoruj świeżymi borówkami, orzeszkami ziemnymi lub pozostałymi kawałkami owoców."
        ],

        tips: []
    }
];
