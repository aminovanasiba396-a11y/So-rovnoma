/* =====================================================================
   12 mashg'ulotning talabaga ko'rinadigan materiallari.
   Matnni o'zgartirish uchun faqat shu faylni tahrirlang.
   Har bir mashg'ulot:
     n        - tartib raqami
     modul    - 1 (Anglash), 2 (Chuqurlashtirish), 3 (Mustahkamlash)
     fan      - fan dasturidagi amaliy mavzu (A3-A14)
     nom      - mashg'ulot nomi
     tarkibiy - emotsional intellektning asosiy tarkibiy qismi
     maqsad   - bir jumlali maqsad
     natijalar- mashg'ulotdan keyin talaba nima qila oladi
     oqish    - mashg'ulotdan oldin o'qiladigan matn (abzaslar)
     savollar - 3 ta tekshiruv savoli: q, v (variantlar), t (to'g'ri javob tartibi 0..3), izoh
     topshiriq- maktab amaliyotida bajariladigan vazifa
     mahsulot - mashg'ulot natijasida tayyorlanadigan kasbiy mahsulot
   ===================================================================== */

const MODULLAR = {
  1: { nom: "Anglash",          izoh: "Emotsional-pedagogik vaziyatni ko‘rish, nomlash va izohlash" },
  2: { nom: "Chuqurlashtirish", izoh: "Vaziyatga mos pedagogik yechimni tanlash va asoslash" },
  3: { nom: "Mustahkamlash",    izoh: "O‘z faoliyatini baholash va yaxlit kasbiy mahsulot yaratish" }
};

/* Refleksiv kundalikning olti bosqichi (G.Gibbs refleksiya sikli asosida) */
const KUNDALIK_BOSQICHLARI = [
  { id: "tavsif",   nom: "Tavsif",          savol: "Mashg‘ulotda yoki amaliyot kunida nima bo‘ldi? Bitta aniq lahzani tasvirlang: qaysi dars, qaysi bosqich, kim nima dedi yoki qildi." },
  { id: "hissiyot", nom: "His-tuyg‘ular",   savol: "O‘sha lahzada o‘zingizni qanday his qildingiz? Holatingizni aniq so‘z bilan nomlang. O‘quvchi nimani his qilgan bo‘lishi mumkin?" },
  { id: "baholash", nom: "Baholash",        savol: "Bu lahzada nima kutilganidek chiqdi, nima kutilganidek chiqmadi?" },
  { id: "tahlil",   nom: "Tahlil",          savol: "Nega aynan shunday bo‘ldi? Mashg‘ulotdagi qaysi tushuncha buni izohlaydi? Vaziyatni o‘quvchi qanday ko‘rgan bo‘lishi mumkin?" },
  { id: "xulosa",   nom: "Xulosa",          savol: "Bu voqeadan bo‘lajak o‘qituvchi sifatida nimani o‘rgandingiz?" },
  { id: "reja",     nom: "Harakat rejasi",  savol: "Keyingi amaliyot kunida aniq nimani boshqacha qilasiz? Bitta o‘lchab bo‘ladigan harakat yozing." }
];

/* 1 va 12-mashg'ulotda yoziladigan qiyoslash vazifasi */
const QIYOS_VAZIYAT = "2-sinfda matematika darsi. O‘quvchi daftarini yopib, «Ustoz, zerikdim» dedi. Siz unga birinchi bo‘lib nima deysiz va nima qilasiz? Aynan aytadigan so‘zlaringizni yozing.";

const MASHGULOTLAR = [

  /* ============================ I MODUL ============================ */
  {
    n: 1, modul: 1,
    fan: "A3. O‘qituvchi pedagogik qobiliyatining asosiy sifatlari va yetakchi xususiyatlari",
    nom: "Emotsional intellekt pedagogik qobiliyat tarkibida",
    tarkibiy: "To‘rt tarkibiy qism (kirish)",
    maqsad: "Emotsional intellektning to‘rt tarkibiy qismini pedagogik qobiliyat tarkibida ajrata olish.",
    natijalar: [
      "emotsional intellektning to‘rt tarkibiy qismini dars vaziyatidagi misol bilan izohlaysiz;",
      "o‘z holatingizni umumiy so‘z o‘rniga aniq so‘z va daraja bilan nomlaysiz;",
      "refleksiv kundalikning olti bosqichini bilasiz."
    ],
    oqish: [
      "Pedagogik qobiliyat faqat bilim va metodlarni bilishdan iborat emas. Boshlang‘ich sinf o‘qituvchisi har bir darsda o‘quvchilarning kayfiyatiga, o‘z holatiga va sinfdagi munosabatlarga duch keladi. Bularni ko‘ra olish va ularga to‘g‘ri javob bera olish emotsional intellekt bilan bog‘liq.",
      "Pedagogik ma’noda emotsional intellekt o‘qituvchining o‘z kechinmalarini anglashi, o‘z holatini boshqarishi, o‘quvchilar holatini tushunishi va ularni vaziyatga mos pedagogik javob orqali yo‘naltirishidir. Bu ta’rifda to‘rt tarkibiy qism bor. Ularning har biri keyingi mashg‘ulotlarda alohida mashq qilinadi.",
      "Birinchi qism o‘z kechinmasini anglash. Masalan, o‘qituvchi savolga javob topa olmay qolganda o‘zida xijolatni sezadi va uni aniq nomlaydi. Ikkinchi qism o‘z holatini boshqarish: shu xijolat ovozga va yuz ifodasiga o‘tmaydi. Uchinchi qism o‘quvchi holatini tushunish: o‘qituvchi jim qolgan bolaning javobni bilmasligini yoki xato qilishdan cho‘chiyotganini farqlaydi. To‘rtinchi qism vaziyatga mos javob: o‘qituvchi bolani sharmanda qilmay, unga keyingi qadamni ko‘rsatadi.",
      "Holatni aniq nomlash boshqarishning dastlabki sharti hisoblanadi. «Yomon bo‘ldi» deb o‘ylagan o‘qituvchi nima qilishini bilmaydi. «Xavotirlandim, chunki dars rejasidan ortda qoldim» deb nomlagan o‘qituvchi esa sababni ko‘radi va keyingi qadamni tanlay oladi. Shuning uchun his-tuyg‘u so‘zlari lug‘atida holatlar uch darajada beriladi: kuchsiz, o‘rta va kuchli. Masalan, g‘ashi keldi, jahli chiqdi, g‘azablandi.",
      "Har bir mashg‘ulot oxirida refleksiv kundalik yoziladi. U olti bosqichdan iborat: tavsif, his-tuyg‘ular, baholash, tahlil, xulosa va harakat rejasi. Kundalik sizning kasbiy o‘sishingizni ko‘rsatadigan asosiy hujjat bo‘ladi."
    ],
    savollar: [
      { q: "O‘qituvchi xato qilgan bolaga «Hech qisi yo‘q, qayerdan adashganingni birga topamiz» dedi. Bu emotsional intellektning qaysi tarkibiy qismiga eng yaqin?",
        v: ["O‘z kechinmasini anglash", "O‘z holatini boshqarish", "O‘quvchi holatini tushunish", "Vaziyatga mos pedagogik javob orqali yo‘naltirish"],
        t: 3, izoh: "O‘qituvchi bolaga keyingi qadamni ko‘rsatmoqda. Bu vaziyatga mos pedagogik javob orqali yo‘naltirishdir." },
      { q: "Quyidagi qaysi ifoda holatni eng aniq nomlaydi?",
        v: ["Kayfiyatim yomon", "Charchadim", "Xavotirlandim, chunki darsni vaqtida tugatolmayman deb o‘yladim", "Bugun hammasi og‘ir bo‘ldi"],
        t: 2, izoh: "Aniq nom va uning sababi birga berilgan. Bunday nomlash keyingi qadamni tanlashga yordam beradi." },
      { q: "Refleksiv kundalikda «Keyingi darsda aniq nimani boshqacha qilaman?» savoli qaysi bosqichga tegishli?",
        v: ["Tavsif", "Baholash", "Xulosa", "Harakat rejasi"],
        t: 3, izoh: "Kundalikning oxirgi bosqichi harakat rejasi. Unda keyingi amaliyotda bajariladigan aniq harakat yoziladi." }
    ],
    topshiriq: "Amaliyot kunlarida har bir darsdan keyin o‘z holatingizni aniq so‘z va daraja bilan qayd eting, yoniga bir qator sharoit yozing. Masalan: «3-dars, o‘qish: xijolat tortdim (kuchsiz), chunki savolga javob topa olmadim». Bitta o‘quvchini ikki dars kuzatib, uning holatini ko‘rsatgan beshta tashqi belgini yozing.",
    mahsulot: "Birinchi kundalik yozuvi va «Zerikdim» vaziyatiga boshlang‘ich javob",
    qiyos: true
  },

  {
    n: 2, modul: 1,
    fan: "A4. O‘qituvchining kommunikativ qobiliyatida pedagogik ta’sir ko‘rsatish",
    nom: "O‘quvchi holatini payqash va pedagogik ta’sirni tanlash",
    tarkibiy: "O‘quvchi holatini tushunish",
    maqsad: "Dars voqeasida o‘quvchi holatini tashqi belgilar orqali payqash va unga mos pedagogik ta’sirni tanlash.",
    natijalar: [
      "kuzatilgan belgini uning talqinidan ajratasiz;",
      "o‘quvchi holati haqida kamida ikkita belgiga tayanib xulosa chiqarasiz;",
      "holatga mos pedagogik ta’sir turini tanlab, asoslaysiz."
    ],
    oqish: [
      "Kommunikativ qobiliyatning asosiy ko‘rinishi pedagogik ta’sir ko‘rsatishdir. Ammo ta’sir bolaning holatini bilmasdan tanlansa, kutilgan natija bermasligi mumkin. Tanbeh charchagan bolani yanada chetlatadi, qo‘rqqan bolani esa jim qilib qo‘yadi. Shuning uchun pedagogik ta’sir o‘quvchi holatini payqashdan boshlanadi.",
      "Boshlang‘ich sinf o‘quvchisi holatini ko‘pincha so‘z bilan aytmaydi. U holatini tashqi belgilar orqali ko‘rsatadi. Bunday belgilar beshta: yuz ifodasi, tana holati, qo‘l harakati, nigoh va ovoz. Masalan, partaga egilib o‘tirish, qalamni tishlash, ko‘z aloqasidan qochish yoki odatdagidan past ovozda javob berish.",
      "Payqashda ikki bosqich bor. Avval faqat ko‘rilgan narsa yoziladi: «Bola qo‘lini ko‘tarib, darhol tushirdi». Keyin uning talqini beriladi: «Javobni bilishi mumkin, lekin xato qilishdan cho‘chiyapti». Bu ikki bosqich aralashtirilsa, o‘qituvchi o‘z taxminini haqiqat deb qabul qilishi mumkin.",
      "Bitta belgiga qarab xulosa chiqarilmaydi. Esnash charchoqni ham, zerikishni ham, uyqusizlikni ham bildirishi mumkin. Ishonchli xulosa uchun kamida ikki belgi va vaziyat hisobga olinadi: dars bosqichi, topshiriq qiyinligi, oldingi voqea.",
      "Holat aniqlangach, ta’sir turi tanlanadi. Qiziqishi so‘ngan bolaga yangi vazifa yoki tanlov beriladi. Qo‘rqqan bolaga xavfsiz imkon yaratiladi, masalan, javobni avval sherigiga aytish. Charchagan bolaga qisqa harakat yoki topshiriqni bo‘lish yordam beradi. Shu tarzda kommunikativ qobiliyat bolaning holatiga moslashgan ta’sirga aylanadi."
    ],
    savollar: [
      { q: "Quyidagilardan qaysi biri kuzatilgan belgi, talqin emas?",
        v: ["Bola darsdan zerikkan", "Bola savol berilganda nigohini partaga qaratdi", "Bola xafa bo‘lgan", "Bola o‘qituvchini yoqtirmaydi"],
        t: 1, izoh: "Nigohni partaga qaratish ko‘rilgan harakat. Qolgan uchtasi o‘qituvchining xulosasi." },
      { q: "O‘quvchi holati haqida ishonchli xulosa chiqarish uchun nima zarur?",
        v: ["Eng yorqin bitta belgiga tayanish", "Kamida ikki belgi va vaziyatni hisobga olish", "Bolaning o‘zidan darhol sababini so‘rash", "Sinfdoshlarining fikrini bilish"],
        t: 1, izoh: "Bitta belgi turli holatlarni bildirishi mumkin. Bir nechta belgi va dars vaziyati birga ko‘rilganda xulosa ishonchliroq bo‘ladi." },
      { q: "Javobni bilsa ham xato qilishdan cho‘chiyotgan bolaga qaysi ta’sir mosroq?",
        v: ["Uni darhol doskaga chaqirish", "Sinf oldida tanbeh berish", "Javobni avval sherigiga aytish imkonini berish", "E’tibor bermaslik"],
        t: 2, izoh: "Xavfsiz imkon bolaga qo‘rquvni yengib, javob berishga yo‘l ochadi." }
    ],
    topshiriq: "O‘quvchi holati kuzatuv kartasini to‘ldiring. Bitta o‘quvchini ikki dars kuzating. Kartaga beshta kuzatilgan belgini, ularning talqinini, siz yoki sinf o‘qituvchisi tanlagan ta’sirni va bolaning bunga qanday javob berganini yozing.",
    mahsulot: "O‘quvchi holati kuzatuv kartasi"
  },

  {
    n: 3, modul: 1,
    fan: "A5. Pedagogik muloqot – o‘qituvchining ijodiy faoliyatini va tashabbuskorligini namoyon etuvchi xususiyat",
    nom: "O‘quvchi holatini nomlab javob qaytarish",
    tarkibiy: "Vaziyatga mos pedagogik javob orqali yo‘naltirish",
    maqsad: "O‘quvchi holatini nomlab, unga keyingi qadamni ko‘rsatadigan javob tuzish.",
    natijalar: [
      "holatni nomlaydigan javobning uch qismini bilasiz;",
      "bolaning his-tuyg‘usini inkor qiladigan javoblarni ajratasiz;",
      "o‘z javoblar to‘plamingizni tuzasiz."
    ],
    oqish: [
      "Pedagogik muloqotda o‘qituvchining ijodkorligi tayyor qoliplarni takrorlashda emas, har bir vaziyatga mos so‘z topishda ko‘rinadi. Bu ayniqsa o‘quvchi xafa bo‘lgan, qo‘rqqan yoki jahli chiqqan paytlarda muhim.",
      "Bunday paytlarda o‘qituvchilar ko‘pincha to‘rt xil javob beradi. Birinchisi e’tiborsiz qoldirish. Ikkinchisi his-tuyg‘uni inkor qilish: «Yig‘lama, arzimagan narsa». Uchinchisi ayblash: «O‘zing aybdorsan». To‘rtinchisi shoshilib maslahat berish. Bu javoblar bolaga uning holati muhim emasligini bildiradi.",
      "Holatni nomlaydigan javob uch qismdan tuziladi. Avval o‘qituvchi ko‘rganini aytadi: «Masala qiyin tuyulayotganini ko‘ryapman». Keyin holatning sababini tan oladi: «Yangi mavzu, avval hammaga qiyin bo‘ladi». So‘ng keyingi qadamni taklif qiladi: «Birinchi qatorni birga yechamiz, keyingisini o‘zing qilasan».",
      "Bu javob bolani tinchlantirish uchun emas, o‘qishni davom ettirish uchun beriladi. U o‘quvchiga o‘z holatini anglashni ham o‘rgatadi. Kichik yoshdagi bola holatini so‘z bilan ifodalashni ko‘pincha kattalardan eshitib o‘rganadi.",
      "Bir xil qolip tez-tez takrorlansa, u o‘z ta’sirini yo‘qotadi. Shuning uchun har bir talaba o‘z javoblar to‘plamini tuzadi. To‘plamda turli holatlar uchun turlicha ifodalar bo‘ladi va u amaliyot davomida boyitib boriladi."
    ],
    savollar: [
      { q: "Quyidagi javoblardan qaysi biri bolaning his-tuyg‘usini inkor qiladi?",
        v: ["Xafa bo‘lganingni ko‘ryapman", "Bunga xafa bo‘lish shart emas, katta bola bo‘lib qolding", "Bu topshiriq qiyinroq ekan", "Keling, birga ko‘ramiz"],
        t: 1, izoh: "«Xafa bo‘lish shart emas» degan javob bolaning holatini tan olmaydi va uni yashirishga undaydi." },
      { q: "Holatni nomlaydigan javobning to‘g‘ri tartibi qaysi?",
        v: ["Maslahat, sabab, nomlash", "Ko‘rganini aytish, sababni tan olish, keyingi qadam", "Tanbeh, tushuntirish, topshiriq", "Sabab, tanbeh, keyingi qadam"],
        t: 1, izoh: "Avval holat nomlanadi, keyin sababi tan olinadi, oxirida o‘qishni davom ettiradigan qadam taklif qilinadi." },
      { q: "Holatni nomlab javob qaytarishning asosiy pedagogik maqsadi nima?",
        v: ["Bolani har qanday yo‘l bilan tinchlantirish", "Bolaga yoqish", "O‘quv faoliyatini davom ettirish va bolaga holatini anglashni o‘rgatish", "Darsni to‘xtatib, suhbat o‘tkazish"],
        t: 2, izoh: "Javob o‘qishni davom ettirishga xizmat qiladi va bolaga o‘z holatini so‘z bilan ifodalashni o‘rgatadi." }
    ],
    topshiriq: "Amaliyot kunlarida holatni nomlaydigan javobni kamida uch marta qo‘llang. Har biri uchun vaziyatni, aynan aytgan so‘zlaringizni va bolaning javobini yozing. Bu yozuvlar javoblar to‘plamingizning birinchi qismi bo‘ladi.",
    mahsulot: "Javoblar to‘plami"
  },

  {
    n: 4, modul: 1,
    fan: "A6. O‘qituvchi kasbiy faoliyatida muloqot madaniyati va psixologiyasi",
    nom: "Qiyin lahzada o‘z holatini boshqarish",
    tarkibiy: "O‘z holatini boshqarish",
    maqsad: "Qiyin pedagogik lahzada to‘xtab, o‘ylab javob berish usulini qo‘llash va o‘lchanadigan maqsad qo‘yish.",
    natijalar: [
      "«meta-moment» usulining to‘rt qadamini tartibi bilan qo‘llaysiz;",
      "o‘z holatingiz sinf muhitiga qanday ta’sir qilishini izohlaysiz;",
      "o‘zingiz uchun uchta o‘lchanadigan maqsad yozasiz."
    ],
    oqish: [
      "Muloqot madaniyati o‘qituvchining qiyin paytdagi xatti-harakatida eng aniq ko‘rinadi. Sinf shovqin qilganda, bola qo‘pol gapirganda yoki dars rejadan chiqib ketganda, o‘qituvchining holati tezda sinfga o‘tadi. Asabiy o‘qituvchi oldida bolalar ham bezovtalanadi, xotirjam o‘qituvchi oldida esa tezroq tinchlanadi.",
      "Bunday paytda birinchi kelgan javob ko‘pincha keskin bo‘ladi: ovoz ko‘tariladi, tanbeh beriladi. Keyin o‘qituvchi bu javobdan afsuslanadi. Shuning uchun javobdan oldin qisqa to‘xtash kerak. Bu mashg‘ulotda M.Brackett va hamkasblarining «meta-moment» usuliga tayanib moslashtirilgan to‘rt qadamli tartib aynan shu to‘xtashni o‘rgatadi.",
      "Tartib to‘rt qadamdan iborat. Birinchi qadam: to‘xta, ya’ni darhol javob berma. Ikkinchi qadam: nafas ol, bir-ikki chuqur nafas holatni yumshatadi. Uchinchi qadam: holatingni his qil, ichingda uni aniq nomla. To‘rtinchi qadam: maqsadli javob ber, ya’ni bola va dars maqsadi uchun eng to‘g‘ri yo‘lni tanla.",
      "To‘rtinchi qadamda o‘qituvchi o‘ziga savol beradi: «Shu bolaga va dars maqsadiga hozir nima kerak?» Bu savol keskin javob o‘rniga pedagogik javobni tanlashga yordam beradi.",
      "Usul bir marta o‘rganish bilan odatga aylanmaydi. Uni amaliyotda qo‘llash uchun o‘lchanadigan maqsad qo‘yiladi. O‘lchanadigan maqsadda aniq harakat, son va muddat bo‘ladi. Masalan: «Keyingi ikki amaliyot kunida sinf shovqin qilganda kamida ikki marta ovozimni ko‘tarmasdan to‘xtash usulini qo‘llayman»."
    ],
    savollar: [
      { q: "«Meta-moment» usulida birinchi qadam qaysi?",
        v: ["Nafas olish", "Holatni his qilish", "To‘xtash", "Maqsadli javob berish"],
        t: 2, izoh: "Usul darhol javob bermaslikdan, ya’ni to‘xtashdan boshlanadi." },
      { q: "Quyidagi maqsadlardan qaysi biri o‘lchanadigan?",
        v: ["Sabrliroq bo‘laman", "Bolalarga yaxshiroq munosabatda bo‘laman", "Seshanba kuni ikkala darsda xato qilgan har bir bolaga kamida bitta rag‘batlantiruvchi gap aytaman", "Holatimni boshqarishni o‘rganaman"],
        t: 2, izoh: "Unda aniq harakat, son va muddat bor, shuning uchun bajarilganini tekshirish mumkin." },
      { q: "To‘rtinchi qadamda o‘qituvchi o‘ziga qaysi savolni beradi?",
        v: ["Bu bolani qanday jazolayman?", "Shu bolaga va dars maqsadiga hozir nima kerak?", "Boshqalar nima deb o‘ylaydi?", "Darsni qanday tezroq tugataman?"],
        t: 1, izoh: "Maqsadli javob bolaning ehtiyoji va dars maqsadidan kelib chiqib tanlanadi." }
    ],
    topshiriq: "Uchta o‘lchanadigan maqsad yozing va keyingi ikki amaliyot kunida ularni sinab ko‘ring. Har bir maqsad uchun necha marta bajarilganini va nima xalaqit berganini qayd eting. Keyingi mashg‘ulotga amaliyotda o‘tilgan yoki o‘tiladigan bitta dars ishlanmasini olib keling.",
    mahsulot: "Uchta o‘lchanadigan maqsad va ularning bajarilish qaydi"
  },

  /* ============================ II MODUL =========================== */
  {
    n: 5, modul: 2,
    fan: "A7. Pedagogik muloqotda umuminsoniy qadriyatlarning ustuvorligi",
    nom: "Bola ehtiyoji va dars rejasi to‘qnashganda",
    tarkibiy: "O‘z kechinmasini anglash",
    maqsad: "Bola ehtiyoji va dars rejasi to‘qnashgan vaziyatda insonga hurmat qadriyatiga tayangan pedagogik qaror qabul qilish.",
    natijalar: [
      "to‘qnashuv vaziyatida o‘z kechinmangizni va bolaning ehtiyojini ajratasiz;",
      "dars maqsadini saqlagan holda bolaga yordam beradigan qaror tanlaysiz;",
      "dars ishlanmasiga «kutilayotgan hissiy vaziyat» qatorini qo‘shasiz."
    ],
    oqish: [
      "Umuminsoniy qadriyatlar pedagogik muloqotda so‘zda emas, o‘qituvchi qarorida ko‘rinadi. Insonga hurmat qadriyati, masalan, bolaning holati dars rejasidan muhimroq bo‘lgan lahzada sinovdan o‘tadi.",
      "Bunday lahzalar boshlang‘ich sinfda tez-tez uchraydi. Nazorat ishi boshlanishi oldidan bola yig‘lab qoladi. Yangi mavzu tushuntirilayotganda bolalardan biri uydagi voqeani gapira boshlaydi. O‘qituvchi bir vaqtning o‘zida ikki talabga duch keladi: dars rejasini bajarish va bolaga yordam berish.",
      "Bu vaziyatda avval o‘qituvchi o‘z kechinmasini anglaydi. Ko‘pincha bu vaqt yetmasligidan xavotir yoki metodist oldida noqulaylik bo‘ladi. Kechinma anglanmasa, qaror shu xavotir ta’sirida qabul qilinadi va bola e’tiborsiz qoladi.",
      "Keyin uch savol beriladi. Bolaga hozir nima kerak? Sinfning qolgan qismiga nima kerak? Qaysi yechim ikkalasini ham saqlaydi? Ko‘pincha bunday yechim mavjud bo‘ladi. Masalan, sinfga mustaqil topshiriq berib, bola bilan bir daqiqa alohida gaplashish mumkin.",
      "Bunday vaziyatlarning bir qismini oldindan ko‘rish mumkin. Buning uchun dars ishlanmasiga «kutilayotgan hissiy vaziyat» qatori qo‘shiladi. Unda darsning qaysi bosqichida qaysi o‘quvchi qiyinlanishi mumkinligi, buning qanday belgisi bo‘lishi va o‘qituvchi nima qilishi yoziladi. Bu darsdan oldingi refleksiyadir."
    ],
    savollar: [
      { q: "Bola ehtiyoji va dars rejasi to‘qnashganda o‘qituvchi avval nima qiladi?",
        v: ["Darsni darhol to‘xtatadi", "O‘z kechinmasini anglaydi", "Bolani sinfdan chiqaradi", "Rejani o‘zgartirmasdan davom etadi"],
        t: 1, izoh: "Kechinma anglanmasa, qaror xavotir yoki noqulaylik ta’sirida qabul qilinadi." },
      { q: "«Kutilayotgan hissiy vaziyat» qatorida nima yoziladi?",
        v: ["Darsning maqsadi va natijasi", "Qaysi bosqichda qaysi o‘quvchi qiyinlanishi, uning belgisi va o‘qituvchi harakati", "O‘quvchilarning baholari", "Uyga vazifa"],
        t: 1, izoh: "Bu qator kutiladigan qiyinchilikni, uning belgisini va o‘qituvchining javobini oldindan belgilaydi." },
      { q: "Nazorat ishi oldidan bola yig‘lab qoldi. Qaysi yechim bola va sinf ehtiyojini birga saqlaydi?",
        v: ["Nazorat ishini bekor qilish", "Bolaga e’tibor bermay, ishni boshlash", "Sinfga topshiriqni berib, bola bilan bir daqiqa alohida gaplashish", "Bolani uyga jo‘natish"],
        t: 2, izoh: "Sinf ishlashda davom etadi, bola esa yordam oladi." }
    ],
    topshiriq: "Ishlanmani amaliyotda qo‘llang. Darsdan keyin har bir qator uchun yozing: vaziyat yuz berdimi; yuz bergan bo‘lsa, rejadagi harakat ish berdimi; yuz bermagan bo‘lsa, uning o‘rniga qanday kutilmagan voqea bo‘ldi.",
    mahsulot: "«Kutilayotgan hissiy vaziyat» qatori qo‘shilgan dars ishlanmasi"
  },

  {
    n: 6, modul: 2,
    fan: "A8. O‘qituvchi va o‘quvchi o‘rtasida jonli muloqotni tashkil etish. Pedagogik nizolar va ziddiyatlarni bartaraf etish",
    nom: "Bolalar nizosi va psixologik xavfsiz sinf muhiti",
    tarkibiy: "O‘quvchi holatini tushunish",
    maqsad: "Bolalar o‘rtasidagi nizoni hal etish bosqichlarini qo‘llash va sinf muhitini uch yo‘nalishda baholash.",
    natijalar: [
      "nizoni hal etishning besh bosqichini qo‘llaysiz;",
      "psixologik xavfsiz sinf muhitining uch yo‘nalishini ko‘rsatkichlar bilan izohlaysiz;",
      "amaliyot sinfi muhiti xaritasini tuzasiz."
    ],
    oqish: [
      "Jonli muloqot o‘quvchi o‘zini xavfsiz his qilgan sinfda yuzaga keladi. Bunday sinfda bola savol berishdan, xato qilishdan va o‘z fikrini aytishdan qo‘rqmaydi. Bu holat psixologik xavfsiz sinf muhiti deb ataladi.",
      "Psixologik xavfsiz muhit uch yo‘nalishda baholanadi. Jismoniy yo‘nalish: bola o‘zini jismonan himoyalangan his qiladi, sinf tartibli va qulay. Hissiy yo‘nalish: bola his-tuyg‘usini ko‘rsatishi mumkin, uni masxara qilishmaydi. Ijtimoiy yo‘nalish: har bir bola jamoaga tegishli, hech kim chetda qolmaydi.",
      "Bolalar o‘rtasidagi nizo bu muhitni tezda buzadi. O‘qituvchi ko‘pincha aybdorni darhol topishga harakat qiladi. Ammo shoshilib chiqarilgan hukm bir bolada adolatsizlik hissini qoldiradi va nizo keyinroq qayta boshlanadi.",
      "Nizo besh bosqichda hal qilinadi. Birinchi: bolalarni tinchlantirib, bir-biridan ajratish. Ikkinchi: har birini navbat bilan, so‘zini bo‘lmasdan tinglash. Uchinchi: har birining his-tuyg‘usini nomlash: «Sen qalaming olinganidan jahling chiqdi». To‘rtinchi: yechimni bolalarning o‘zi bilan birga topish. Beshinchi: keyingi kunlarda munosabatni kuzatish.",
      "Bu bosqichlar bolalarga nizoni so‘z bilan hal qilishni ham o‘rgatadi. Vaqt o‘tib, ular o‘qituvchisiz ham shu yo‘lni qo‘llay boshlaydi."
    ],
    savollar: [
      { q: "Psixologik xavfsiz sinf muhiti qaysi uch yo‘nalishda baholanadi?",
        v: ["Jismoniy, hissiy, ijtimoiy", "Aqliy, axloqiy, jismoniy", "Tashkiliy, ma’naviy, hissiy", "Ijtimoiy, iqtisodiy, madaniy"],
        t: 0, izoh: "Uch yo‘nalish: jismoniy himoya, his-tuyg‘uni ko‘rsatish erkinligi va jamoaga tegishlilik." },
      { q: "Nizoni hal etishda ikkinchi bosqich qaysi?",
        v: ["Aybdorni aniqlash", "Har bir bolani navbat bilan, so‘zini bo‘lmasdan tinglash", "Ota-onalarga xabar berish", "Ikkalasini jazolash"],
        t: 1, izoh: "Bolalar ajratilgandan keyin har biri alohida tinglanadi." },
      { q: "Ijtimoiy xavfsizlikning ko‘rsatkichi qaysi?",
        v: ["Partalar to‘g‘ri joylashgan", "Guruh ishida hech bir bola chetda qolmaydi", "Sinfda yorug‘lik yetarli", "Bola xato qilganda kulishmaydi"],
        t: 1, izoh: "Ijtimoiy yo‘nalish har bir bolaning jamoaga tegishli bo‘lishi bilan bog‘liq. Kulmaslik hissiy yo‘nalish ko‘rsatkichi." }
    ],
    topshiriq: "Amaliyot sinfining muhit xaritasini tuzing. Uch yo‘nalishning har biri bo‘yicha ikkitadan kuzatilgan ko‘rsatkich yozing va muhitni yaxshilash uchun bitta taklif bering. Agar sinfda nizo bo‘lsa, uning qanday hal qilinganini besh bosqich bilan solishtiring. Kundalikdan yoki amaliyotdan hal qilinmagan bitta vaziyatni tanlab, keyingi mashg‘ulotga olib keling.",
    mahsulot: "Amaliyot sinfi muhiti xaritasi"
  },

  {
    n: 7, modul: 2,
    fan: "A9. Pedagogik nazokat va xushmuomalalik, kasbiy pedagogik dilkashlikning o‘qituvchi xulq-atvorida shakllanishi",
    nom: "Pedagogik vaziyatni besh qadamda yechish",
    tarkibiy: "Vaziyatga mos pedagogik javob orqali yo‘naltirish",
    maqsad: "O‘z amaliyotidagi pedagogik vaziyatni besh qadamli tartibda yechish va pedagogik nazokat me’yoriga baholash.",
    natijalar: [
      "vaziyat yechimining besh qadamini tartibi bilan qo‘llaysiz;",
      "kamida ikki yechimni oqibati bilan solishtirasiz;",
      "yechimingizni pedagogik nazokat mezonlari bilan baholaysiz."
    ],
    oqish: [
      "Pedagogik nazokat o‘qituvchining me’yor hissidir. U qachon gapirish va qachon jim turish, qachon talab qilish va qachon kechirishni bilishda ko‘rinadi. Nazokatli o‘qituvchi bolaning qadr-qimmatini kamsitmaydi, lekin talabchanligini ham yo‘qotmaydi.",
      "Nazokat tug‘ma xislat emas, u vaziyatlarni tahlil qilish orqali shakllanadi. Buning uchun besh qadamli yechim tartibi qo‘llanadi.",
      "Birinchi qadam: vaziyatni tavsiflash. Nima bo‘lgani baholarsiz, faktlar bilan yoziladi. Ikkinchi qadam: hissiyotni aniqlash. O‘qituvchi va bola nimani his qilgani nomlanadi. Uchinchi qadam: boshqalar nuqtai nazarini tushunish. Vaziyatga bola, sinfdoshlar va ota-ona ko‘zi bilan qaraladi.",
      "To‘rtinchi qadam: variant taklif qilish. Kamida ikki yechim yoziladi va har birining bola uchun, sinf uchun oqibati solishtiriladi. Beshinchi qadam: refleksiya. Tanlangan yechim qo‘llanganidan keyin natija tahlil qilinadi.",
      "Yechim pedagogik nazokat bo‘yicha uch savol bilan baholanadi. Bolaning qadr-qimmati saqlandimi? Talab o‘z kuchida qoldimi? Yechim sinfdagi boshqa bolalarga to‘g‘ri namuna bo‘ladimi?"
    ],
    savollar: [
      { q: "Besh qadamli yechimda hissiyotni aniqlashdan keyin qaysi qadam keladi?",
        v: ["Variant taklif qilish", "Boshqalar nuqtai nazarini tushunish", "Refleksiya", "Vaziyatni tavsiflash"],
        t: 1, izoh: "Tartib: tavsiflash, hissiyotni aniqlash, boshqalar nuqtai nazarini tushunish, variant taklif qilish, refleksiya." },
      { q: "Vaziyatni tavsiflash qadamida qaysi jumla to‘g‘ri yozilgan?",
        v: ["Anvar yana darsni buzdi", "Anvar dangasa, shuning uchun ishlamadi", "Anvar ikkinchi topshiriqda daftarini yopib, deraza tomonga qaradi", "Anvar meni hurmat qilmaydi"],
        t: 2, izoh: "Tavsifda faqat kuzatilgan faktlar yoziladi, baho va taxmin keyingi qadamlarda beriladi." },
      { q: "Pedagogik nazokat nimada eng aniq ko‘rinadi?",
        v: ["Har doim yumshoq gapirishda", "Talabni yo‘qotmasdan bolaning qadr-qimmatini saqlashda", "Bolalarning barcha xohishini bajarishda", "Qat’iy intizom o‘rnatishda"],
        t: 1, izoh: "Nazokat me’yor hissi: talabchanlik va hurmat birga saqlanadi." }
    ],
    topshiriq: "Vaziyat yoki unga o‘xshash holat takrorlansa, tanlangan yechimni qo‘llang. Keys varag‘idagi beshinchi qadamni, ya’ni refleksiyani, amaliyotdan keyin to‘ldiring. Keys yechimi portfolioga qo‘shiladi. Keyingi mashg‘ulotda har bir talaba 5 daqiqalik mikro-dars o‘tadi: o‘z amaliyot faningizdan bitta dars boshlanishini tayyorlab keling.",
    mahsulot: "O‘z amaliyotidagi vaziyatning yozma keys yechimi"
  },

  {
    n: 8, modul: 2,
    fan: "A10. Pedagogik texnika va aktyorlikka xos xususiyatlar. Pedagogik texnika va murabbiylik shartlari",
    nom: "Tashqi ifoda va ichki holat muvofiqligi: birinchi mikro-dars",
    tarkibiy: "O‘z holatini boshqarish",
    maqsad: "Pedagogik texnika vositalari orqali o‘z holatini boshqarib, besh daqiqalik dars parchasini o‘tkazish.",
    natijalar: [
      "mimika, tana holati, nigoh va ovozni dars maqsadiga moslaysiz;",
      "darsdan oldin o‘zingizni ish holatiga keltirish usulini qo‘llaysiz;",
      "mikro-darsingizni kuzatuv mezonlari bo‘yicha tahlil qilasiz."
    ],
    oqish: [
      "Pedagogik texnika o‘qituvchining o‘zini boshqarish va o‘quvchilarga ta’sir ko‘rsatish usullari majmuidir. Unga mimika, pantomimika, ya’ni tana holati va imo-ishora, nigoh, ovoz va nutq kiradi. Bu vositalar o‘qituvchining ichki holatini ham ko‘rsatadi.",
      "Pedagogik texnikada aktyorlikka xos xususiyat bor, lekin o‘qituvchi rol o‘ynamaydi. U ichki holatini sinf uchun to‘g‘ri tashqi ifodaga aylantiradi. Charchagan o‘qituvchi ham dars boshida bolalarni xotirjam, ochiq yuz bilan qarshilaydi. Bu yolg‘on emas, kasbiy mas’uliyatdir.",
      "Buning uchun darsdan oldin o‘zini ish holatiga keltirish usuli qo‘llanadi. Sinfga kirishdan oldin bir daqiqa to‘xtab, o‘z holatini nomlash, darsning birinchi jumlasini xayolan aytish va tana holatini to‘g‘rilash yetarli. Bu kichik harakat darsning boshlanishini o‘zgartiradi.",
      "Tashqi ifoda ichki holatga mos kelmasa, bolalar buni tez sezadi. Jilmaygan, lekin qo‘llari asabiy harakat qilayotgan o‘qituvchiga bolalar ishonmaydi. Shuning uchun texnika ichki holatni boshqarish bilan birga mashq qilinadi.",
      "Kasbiy barqarorlik odati ham shu mashg‘ulot mavzusi. Har kuni takrorlanadigan hissiy yuk o‘qituvchini charchatadi. Unga qarshi barqarorlik odati tanlanadi. Yaxshi barqarorlik odati amaliy va o‘lchanadigan bo‘ladi, masalan: «Har kuni darsdan keyin o‘n daqiqa davomida eng muvaffaqiyatli lahzani yozaman»."
    ],
    savollar: [
      { q: "Pedagogik texnikaga quyidagilardan qaysi biri kirmaydi?",
        v: ["Mimika", "Ovoz va nutq", "Tana holati va imo-ishora", "Dars rejasining tuzilishi"],
        t: 3, izoh: "Dars rejasi didaktik vosita. Pedagogik texnika o‘qituvchining o‘zini ifodalash vositalaridan iborat." },
      { q: "Pedagogik texnikadagi «aktyorlik» nimani anglatadi?",
        v: ["Bolalarni aldash", "Ichki holatni sinf uchun to‘g‘ri tashqi ifodaga aylantirish", "Har doim jilmayib turish", "Sahnada chiqish qilish"],
        t: 1, izoh: "O‘qituvchi rol o‘ynamaydi, u holatini boshqarib, kasbiy ifoda tanlaydi." },
      { q: "Quyidagilardan qaysi biri amaliy va o‘lchanadigan barqarorlik odati?",
        v: ["Kamroq asabiylashaman", "Ishni yaxshi ko‘raman", "Haftada uch marta darsdan keyin 20 daqiqa piyoda yuraman", "Hamma narsaga ijobiy qarayman"],
        t: 2, izoh: "Harakat, son va vaqt aniq, uning bajarilishini tekshirish mumkin." }
    ],
    topshiriq: "Amaliyotda o‘zingiz o‘tadigan darsdan oldin ish holatiga keltirish usulini qo‘llang. Darsning birinchi besh daqiqasini sinf o‘qituvchisi yoki sherigingiz kuzatsin va bitta izoh bersin. Tanlangan barqarorlik odatini bir hafta davomida sinab, qaydini yuriting.",
    mahsulot: "Birinchi mikro-dars va uning kuzatuv bahosi",
    mikrodars: 1
  },

  /* ============================ III MODUL ========================== */
  {
    n: 9, modul: 3,
    fan: "A11. Nutq texnikasi va notiqlik madaniyati. O‘qituvchi nutqining to‘g‘riligi, ravonligi, aniqligi va ta’sirchanligini oshirish",
    nom: "Ovoz ohangi, sur’at va pauza: ota-ona bilan suhbat",
    tarkibiy: "Vaziyatga mos pedagogik javob orqali yo‘naltirish",
    maqsad: "Nutq texnikasi vositalarini suhbatdoshning holatiga moslab, ziddiyatli ota-ona bilan kasbiy suhbat o‘tkazish.",
    natijalar: [
      "ohang, sur’at va pauzani suhbatdosh holatiga moslaysiz;",
      "ota-ona bilan suhbatning besh bosqichini qo‘llaysiz;",
      "suhbat matnini nutq ko‘rsatkichlari bo‘yicha tahlil qilasiz."
    ],
    oqish: [
      "Nutq texnikasi nafas, ovoz kuchi, ohang, sur’at, pauza va diksiyadan iborat. O‘qituvchi nutqining ta’sirchanligi faqat so‘zlarga emas, shu vositalarga ham bog‘liq. Bir xil gap baland va tez aytilganda tanbeh, past va sekin aytilganda g‘amxo‘rlik bo‘lib eshitiladi.",
      "Ta’sirchan nutq suhbatdoshning holatiga moslashadi. Xafa bolaga past ovozda, sekin gapiriladi. Hayajonlangan sinfga qisqa jumlalar va pauzalar bilan murojaat qilinadi. Pauza nutqning muhim vositasi: u tinglovchiga o‘ylashga, so‘zlovchiga esa o‘zini bosib olishga vaqt beradi.",
      "Bu ayniqsa ota-ona bilan suhbatda muhim. Farzandidan xavotirlangan ota-ona ko‘pincha keskin ohangda gapiradi. O‘qituvchidan bir vaqtning o‘zida uch narsa talab qilinadi: ota-onaning holatini tushunish, o‘z holatini boshqarish va kasbiy munosabatni saqlash. Ota-onaning har bir fikriga qo‘shilish bu talablar qatoriga kirmaydi.",
      "Suhbat besh bosqichda o‘tkaziladi. Birinchi: so‘zini bo‘lmasdan tinglash. Ikkinchi: xavotirni tan olish: «Farzandingiz uchun qayg‘urayotganingizni tushunaman». Uchinchi: faktlarni xotirjam ohangda bayon qilish. To‘rtinchi: birga reja tuzish. Beshinchi: kelishuvni takrorlab, suhbatni yakunlash.",
      "Suhbatda o‘qituvchining ohangi ota-ona ohangiga ergashmasligi kerak. Keskin gapga keskin javob emas, sekinroq sur’at va pastroq ovoz bilan javob berilganda suhbat ko‘pincha tinchlanadi."
    ],
    savollar: [
      { q: "Ziddiyatli ota-ona bilan suhbatda o‘qituvchidan talab qilinadigan uch narsaga qaysi biri kirmaydi?",
        v: ["Ota-onaning holatini tushunish", "O‘z holatini boshqarish", "Kasbiy munosabatni saqlash", "Ota-onaning har bir fikriga qo‘shilish"],
        t: 3, izoh: "O‘qituvchi ota-onani tushunadi, lekin kasbiy pozitsiyasini saqlaydi." },
      { q: "Suhbatning ikkinchi bosqichi qaysi?",
        v: ["Faktlarni bayon qilish", "Xavotirni tan olish", "Birga reja tuzish", "Suhbatni yakunlash"],
        t: 1, izoh: "Tinglangandan keyin ota-onaning xavotiri tan olinadi, shundan so‘ng faktlarga o‘tiladi." },
      { q: "Pauzaning nutqdagi vazifasi nima?",
        v: ["Nutqni uzaytirish", "Tinglovchiga o‘ylash, so‘zlovchiga o‘zini bosib olish uchun vaqt berish", "Gapni unutganini yashirish", "Ovozni dam oldirish"],
        t: 1, izoh: "Pauza ikki tomonga ham xizmat qiladi: tinglovchi anglaydi, so‘zlovchi holatini boshqaradi." }
    ],
    topshiriq: "Sinf o‘qituvchisi va ota-onaning roziligi bilan sinf o‘qituvchisining ota-ona bilan suhbatini kuzating yoki sinf o‘qituvchisi ishtirokida qisqa suhbat o‘tkazing. Suhbatni besh bosqich va nutq ko‘rsatkichlari (ohang, sur’at, pauza) bo‘yicha tahlil qiling. Keyingi mashg‘ulot uchun 4–5 kishilik, soni oltitadan oshmaydigan loyiha guruhlari tuziladi.",
    mahsulot: "Suhbat tahlili"
  },

  {
    n: 10, modul: 3,
    fan: "A12. Hozirgi kunda o‘qituvchi tarbiyachilik mahoratining asosiy mohiyati",
    nom: "Emotsional maqsadli tarbiyaviy soat loyihasi",
    tarkibiy: "To‘rt tarkibiy qism (yaxlit)",
    maqsad: "Boshlang‘ich sinf o‘quvchilarida his-tuyg‘ularni anglash va ifodalash madaniyatini shakllantiruvchi tarbiyaviy soatni loyihalash.",
    natijalar: [
      "tarbiyaviy soat uchun bilim, munosabat va xatti-harakat maqsadini yozasiz;",
      "6–10 yoshga mos tarbiya usullarini tanlaysiz;",
      "guruh bilan tarbiyaviy soat ishlanmasini tuzib, himoya qilasiz."
    ],
    oqish: [
      "O‘qituvchining tarbiyachilik mahorati bolaning bilimigina emas, uning his-tuyg‘ulari va munosabatlari rivojiga ham ta’sir qiladi. Boshlang‘ich sinf yoshida bola o‘z his-tuyg‘ularini tanish, nomlash va boshqalarga zarar yetkazmasdan ifodalashni o‘rganadi. Bu jarayonda o‘qituvchi namuna va yo‘l ko‘rsatuvchi bo‘ladi.",
      "Mashg‘ulotlarda siz o‘zingizda rivojlantirgan ko‘nikmalarni endi o‘quvchilarga o‘rgatish mumkin. Masalan, holatni aniq nomlash, nizoni so‘z bilan hal qilish yoki boshqaning holatini tushunishga urinish.",
      "Tarbiyaviy soat maqsadi uch qismda yoziladi. Bilim maqsadi: bolalar beshta his-tuyg‘uni nomlay oladi. Munosabat maqsadi: boshqaning his-tuyg‘usiga hurmat bilan qaraydi. Xatti-harakat maqsadi: jahli chiqqanda uni so‘z bilan aytadi.",
      "6–10 yoshdagi bolalar uchun mos usullar: ertak va hikoya tahlili, rasm chizish, rolli o‘yin, «His-tuyg‘ular burchagi», qo‘g‘irchoq teatri. Usul bolaning faol ishtirokini ta’minlashi kerak, faqat tinglash yetarli emas.",
      "Ishlanmada natijani tekshirish usuli ham ko‘rsatiladi. Masalan, darsdan keyin bolalar «Bugun men o‘zimni … his qildim, chunki …» jumlasini davom ettiradi."
    ],
    savollar: [
      { q: "«Bolalar jahli chiqqanda uni so‘z bilan aytadi» qaysi turdagi maqsad?",
        v: ["Bilim maqsadi", "Munosabat maqsadi", "Xatti-harakat maqsadi", "Rivojlantiruvchi maqsad"],
        t: 2, izoh: "Maqsad bolaning aniq xatti-harakatini ko‘rsatadi." },
      { q: "6–10 yoshdagi bolalar bilan his-tuyg‘ular haqidagi tarbiyaviy soatda qaysi usul kamroq mos?",
        v: ["Ertak tahlili", "Rolli o‘yin", "Uzoq ma’ruza", "Rasm chizish"],
        t: 2, izoh: "Bu yoshdagi bolalar faol ishtirok etganda yaxshiroq o‘rganadi." },
      { q: "Tarbiyaviy soat natijasini tekshirish usuliga qaysi biri misol bo‘ladi?",
        v: ["Bolalarga baho qo‘yish", "Bolalar «Bugun men o‘zimni … his qildim, chunki …» jumlasini davom ettiradi", "Ota-onalarga xat yozish", "Darsni qayta o‘tkazish"],
        t: 1, izoh: "Jumlani davom ettirish bolaning holatni nomlash ko‘nikmasini ko‘rsatadi." }
    ],
    topshiriq: "Guruhingiz bilan tuzilgan tarbiyaviy soat ishlanmasini sinf o‘qituvchisiga ko‘rsating va uning fikrini yozib keling. Imkon bo‘lsa, ishlanmadagi bitta faoliyatni sinfda o‘tkazing. 2-mikro-darsga tayyorlaning: 1-mikro-darsdagi o‘zgartirish maqsadini hisobga olib, ichida bitta baholash lahzasi bo‘lgan 5 daqiqalik dars parchasini tayyorlang.",
    mahsulot: "Tarbiyaviy soat ishlanmasi"
  },

  {
    n: 11, modul: 3,
    fan: "A13. Samarali o‘qitish va baholash orqali faol o‘rganishni osonlashtirish",
    nom: "Baholashdagi izoh: ikkinchi mikro-dars",
    tarkibiy: "Vaziyatga mos pedagogik javob orqali yo‘naltirish",
    maqsad: "O‘quvchini faol o‘rganishga undaydigan izoh berish va ikkinchi mikro-darsda o‘z o‘sishini aniqlash.",
    natijalar: [
      "samarali izohning to‘rt belgisini bilasiz;",
      "xato qilgan bolaga rag‘batlantiruvchi izoh berasiz;",
      "ikki mikro-darsingiz natijalarini solishtirasiz."
    ],
    oqish: [
      "Baholash faqat ball qo‘yish emas. Shakllantiruvchi baholashda o‘qituvchi bolaga nimani to‘g‘ri qilganini va keyin nima qilishini ko‘rsatadi. Bunday baholash o‘quvchini faol o‘rganishga undaydi.",
      "Bolaning baholashga munosabati ko‘pincha o‘qituvchi izohiga bog‘liq. «Yana xato qilding» degan izoh bolada xijolat va qo‘rquv uyg‘otadi. «Ikkita misolni to‘g‘ri yechding, uchinchisida qo‘shishni tekshirib ko‘r» degan izoh esa uni harakatga undaydi.",
      "Samarali izohning to‘rt belgisi bor. U aniq: nima to‘g‘ri va nima noto‘g‘ri ekanini ko‘rsatadi. U bolaning shaxsiga emas, ishiga qaratiladi. U keyingi qadamni ko‘rsatadi. U o‘z vaqtida beriladi.",
      "Xato o‘rganish manbai sifatida qabul qilinsa, bola xato qilishdan qo‘rqmaydi. Buning uchun o‘qituvchi xatoni sinf oldida muhokama qilishda bolaning qadr-qimmatini saqlaydi, uning urinishini rag‘batlantiradi.",
      "Bu mashg‘ulotda siz ikkinchi mikro-darsni o‘tkazasiz. U birinchi mikro-dars bilan bir xil mezonlar bo‘yicha baholanadi. Shu tariqa o‘z o‘sishingizni raqamlarda ko‘rasiz."
    ],
    savollar: [
      { q: "Quyidagi izohlardan qaysi biri samarali?",
        v: ["Zo‘r!", "Yana xato qilding", "Ikki misolni to‘g‘ri yechding, uchinchisida qo‘shishni tekshirib ko‘r", "Sen bundan yaxshiroq qila olasan"],
        t: 2, izoh: "Izoh aniq, ishga qaratilgan va keyingi qadamni ko‘rsatadi." },
      { q: "Samarali izoh nimaga qaratiladi?",
        v: ["Bolaning shaxsiga", "Bolaning ishiga", "Sinfdoshlar bilan solishtirishga", "Ota-ona fikriga"],
        t: 1, izoh: "Shaxsga qaratilgan izoh bolaning o‘zini baholashiga ta’sir qiladi, ishga qaratilgan izoh esa o‘rganishga yo‘l ko‘rsatadi." },
      { q: "Shakllantiruvchi baholashning asosiy maqsadi nima?",
        v: ["Chorak bahosini chiqarish", "O‘quvchilarni saralash", "Bolaga nimani bilganini va keyin nima qilishini ko‘rsatish", "Ota-onaga hisobot berish"],
        t: 2, izoh: "Shakllantiruvchi baholash o‘rganish jarayonining ichida bo‘ladi va keyingi qadamni belgilaydi." }
    ],
    topshiriq: "Amaliyotda o‘quvchilarga kamida beshta og‘zaki yoki yozma izoh bering. Har birini to‘rt belgi bo‘yicha tekshiring va bolaning javobini yozing. Portfolio himoyasiga tayyorlaning: portfoliodagi hujjatlarni yig‘ing va beshta o‘sish dalilini tanlang.",
    mahsulot: "Ikkinchi mikro-dars bahosi va rag‘batlantiruvchi izohlar to‘plami",
    mikrodars: 2
  },

  {
    n: 12, modul: 3,
    fan: "A14. Ta’lim va o‘qitish tamoyillarini tushunish",
    nom: "O‘sish dalillari va kasbiy pozitsiya: portfolio himoyasi",
    tarkibiy: "To‘rt tarkibiy qism (yakuniy), kasbiy-emotsional identifikatsiya mexanizmi",
    maqsad: "Mashg‘ulotlar davomida to‘plangan dalillar asosida o‘z kasbiy o‘sishini tahlil qilish va kasbiy pozitsiyasini bayon etish.",
    natijalar: [
      "portfoliongizdan beshta o‘sish dalilini ajratasiz;",
      "emotsional intellektni ta’lim tamoyillari bilan bog‘laysiz;",
      "kasbiy pozitsiyangizni qisqa bayon qilasiz."
    ],
    oqish: [
      "Ta’lim tamoyillari o‘qituvchi faoliyatining asosiy talablaridir. Ular orasida onglilik va faollik, ko‘rgazmalilik, tizimlilik, individual yondashuv va tarbiyaviylik bor. Emotsional intellekt bu tamoyillarni amalda bajarishga yordam beradi. Masalan, individual yondashuv bolaning holatini tushunmasdan amalga oshmaydi.",
      "Mashg‘ulot boshida yakuniy so‘rovnoma to‘ldiriladi. Keyin har bir talaba o‘z portfoliosi bilan ishlaydi. Portfolioda kundalik yozuvlari, o‘quvchi holati kuzatuv kartasi, javoblar to‘plami, o‘lchanadigan maqsadlar, keys yechimi, ikki mikro-dars bahosi va tarbiyaviy soat ishlanmasi bor.",
      "Portfoliodan beshta o‘sish dalili ajratiladi. Har bir dalil «Avval … edi, endi …» tuzilmasida yoziladi va hujjat bilan tasdiqlanadi. Masalan: «Avval holatimni «charchadim» deb yozardim, endi «sabrim tugadi, chunki bir xil savolga uchinchi marta javob berdim» deb yozaman (3 va 9-kundalik)».",
      "Platformada siz birinchi mashg‘ulotda «Zerikdim» vaziyatiga yozgan javobingizni ko‘rasiz. Unga bugun yangi javob yozasiz va ikkalasini solishtirasiz.",
      "Mashg‘ulot kasbiy pozitsiya bayoni bilan yakunlanadi. Unda siz o‘quvchilaringiz bilan qanday o‘qituvchi bo‘lishni va buning uchun nimani davom ettirishni yozasiz."
    ],
    savollar: [
      { q: "O‘sish dalili qanday tuzilmada yoziladi?",
        v: ["«Men yaxshi o‘qituvchiman»", "«Avval … edi, endi …» va hujjat bilan tasdiqlanadi", "«Mashg‘ulotlar menga yoqdi»", "«Kelajakda yaxshiroq bo‘laman»"],
        t: 1, izoh: "Dalil o‘zgarishni ko‘rsatadi va portfoliodagi hujjatga tayanadi." },
      { q: "Individual yondashuv tamoyili emotsional intellektning qaysi tarkibiy qismisiz amalga oshmaydi?",
        v: ["O‘quvchi holatini tushunish", "Nutq texnikasi", "Dars rejasini tuzish", "Baholash"],
        t: 0, izoh: "Bolaga individual yondashish uchun avval uning holatini tushunish kerak." },
      { q: "Portfolio himoyasining asosiy maqsadi nima?",
        v: ["Yuqori baho olish", "Kasbiy o‘sishni dalillar asosida tahlil qilish", "Mashg‘ulotlarni qayta takrorlash", "Boshqa talabalar bilan raqobatlashish"],
        t: 1, izoh: "Himoya talabaga o‘z o‘sishini ko‘rish va keyingi rivojini rejalashtirishga yordam beradi." }
    ],
    topshiriq: "Kasbiy pozitsiya bayonini yakunlab, portfolioga qo‘shing. Uni pedagogik amaliyotning keyingi bosqichida o‘zingiz uchun yo‘l ko‘rsatkich sifatida ishlating.",
    mahsulot: "Portfolio va kasbiy pozitsiya bayoni",
    qiyos: true
  }
];
