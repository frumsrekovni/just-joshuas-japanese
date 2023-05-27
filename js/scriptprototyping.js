const first_commit_date = new Date(`2022-07-04T22:37:00`); // 2022-07-04T22:37:00 4th of July 2022 at 22:37 CEST is when I did my first commit to this blog 
const darkeningElement = document.getElementById("page-darkener");
const flashSquareKanaElement = document.getElementById("flash-square-kana");
const flashSquareAnswerElement = document.getElementById("flash-square-answer");
const years_element = document.getElementById("years-number");
const days_element = document.getElementById("days-number");
const hours_element = document.getElementById("hours-number");
const minutes_element = document.getElementById("minutes-number");
const seconds_element = document.getElementById("seconds-number");
const countdown_post = document.getElementById("post13");
const all_blogposts = document.getElementsByClassName("blog-post");
const seconds_counter_element = document.getElementById("seconds-to-anniversary");
const blog_title_element = document.getElementsByTagName("title")[0];
const main_container = document.getElementsByClassName("main-site-container")[0];
const the_body = document.querySelector("body");
var alternatingValue = 0;
const blog_title = document.querySelector("body > header > h1");
let addedClassToCelebrate = false;
let addedTheFirework = false;
const allHiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const allKatakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const allHiraganaDiacritics = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const allKatakanaDiacritics = "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const allHiraganaDigraphs = "";
const allKatakanaDigraphs = "";
const date_today = new Date();
const allKanaTriples = [
    ["あ", "ア", "a"],
    ["い", "イ", "i"],
    ["え", "エ", "e"],
    ["う", "ウ", "u"],
    ["お", "オ", "o"],
    ["か", "カ", "ka"],
    ["き", "キ", "ki"],
    ["け", "ケ", "ke"],
    ["く", "ク", "ku"],
    ["こ", "コ", "ko"],
    ["さ", "サ", "sa"],
    ["し", "シ", "shi"],
    ["す", "ス", "su"],
    ["せ", "セ", "se"],
    ["そ", "ソ", "so"],
    ["た", "タ", "ta"],
    ["ち", "チ", "chi"],
    ["つ", "ツ", "tsu"],
    ["て", "テ", "te"],
    ["と", "ト", "to"],
    ["な", "ナ", "na"],
    ["に", "ニ", "ni"],
    ["ぬ", "ヌ", "nu"],
    ["ね", "ネ", "ne"],
    ["の", "ノ", "no"],
    ["は", "ハ", "ha"],
    ["ひ", "ヒ", "hi"],
    ["ふ", "フ", "fu"],
    ["へ", "ヘ", "he"],
    ["ほ", "ホ", "ho"],
    ["ま", "マ", "ma"],
    ["み", "ミ", "mi"],
    ["む", "ム", "mu"],
    ["め", "メ", "me"],
    ["も", "モ", "mo"],
    ["や", "ヤ", "ya"],
    ["ゆ", "ユ", "yu"],
    ["よ", "ヨ", "yo"],
    ["ら", "ラ", "ra"],
    ["り", "リ", "ri"],
    ["る", "ル", "ru"],
    ["れ", "レ", "re"],
    ["ろ", "ロ", "ro"],
    ["わ", "ワ", "wa"],
    ["ウィ", "ウィ", "wi"],
    ["ウェ", "ウェ", "we"],
    ["ウォ", "ウォ", "wo"],
    ["を", "ヲ", "(w)o"],
    ["ん", "ン", "ｎ"],
    ["が", "ガ", "ga"],
    ["ぎ", "ギ", "gi"],
    ["ぐ", "グ", "gu"],
    ["げ", "ゲ", "ge"],
    ["ご", "ゴ", "go"],
    ["ざ", "ザ", "za"],
    ["じ", "ジ", "ji"],
    ["ず", "ズ", "zu"],
    ["ぜ", "ゼ", "ze"],
    ["ぞ", "ゾ", "zo"],
    ["だ", "ダ", "da"],
    ["ぢ", "ヂ", "ji"],
    ["づ", "ズ", "zu"],
    ["で", "デ", "de"],
    ["ど", "ド", "do"],
    ["ば", "バ", "ba"],
    ["び", "ビ", "bi"],
    ["ぶ", "ブ", "bu"],
    ["べ", "ベ", "be"],
    ["ぼ", "ボ", "bo"],
    ["ぱ", "パ", "pa"],
    ["ぴ", "ピ", "pi"],
    ["ぷ", "プ", "pu"],
    ["ぺ", "ペ", "pe"],
    ["ぽ", "ポ", "po"],
    ["きゃ", "キャ", "kya"],
    ["きゅ", "キュ", "kyu"],
    ["きょ", "キョ", "kyo"],
    ["ぎゃ", "ギャ", "gya"],
    ["ぎゅ", "ギュ", "gyu"],
    ["ぎょ", "ギョ", "gyo"],
    ["にゃ", "ニャ", "nya"],
    ["にゅ", "ニュ", "nyu"],
    ["にょ", "ニョ", "nyo"],
    ["ひゃ", "ヒャ", "hya"],
    ["ひゅ", "ヒュ", "hyu"],
    ["ひょ", "ヒョ", "hyo"],
    ["びゃ", "ビャ", "bya"],
    ["びゅ", "ビュ", "byu"],
    ["びょ", "ビョ", "byo"],
    ["ぴゃ", "ピャ", "pya"],
    ["ぴゅ", "ピュ", "pyu"],
    ["ぴょ", "ピョ", "pyo"],
    ["みゃ", "ミャ", "mya"],
    ["みゅ", "ミュ", "myu"],
    ["みょ", "ミョ", "myo"],
    ["りゃ", "リャ", "rya"],
    ["りゅ", "リュ", "ryu"],
    ["りょ", "リョ", "ryo"],
    ["じゃ", "ジャ", "ja"],
    ["じゅ", "ジュ", "ju"],
    ["じぇ", "ジェ", "je"],
    ["じょ", "ジョ", "jo"],
    ["ちゃ", "チャ", "cha"],
    ["ちゅ", "チュ", "chu"],
    ["ちぇ", "チェ", "che"],
    ["ちょ", "チョ", "cho"],
    ["しゃ", "シャ", "sha"],
    ["しゅ", "シュ", "shu"],
    ["しぇ", "シェ", "she"],
    ["しょ", "ショ", "sho"]
];
// based on this http://jlptstudy.net/N5/?kanji-list
const allN5Kanji = [
    ["国", "Onyomi: koku\nKunyomi: kuni"],
    ["一", ""],
    ["七", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["人", "Onyomi: jin,nin\nKunyomi: hito\n"]
];
// <ruby> KANJI <rp>(</rp><rt> FURIGANA </rt><rp>)</rp></ruby>
// 手持ち
const commonJapaneseWords = [
    ["行く", "行く いく Go<br> どこ行くの？ Where are you going?"],
    ["見る", "見る みる Watch<br> テレビはよく見るの？ Do you watch a lot of TV?"],
    ["多い", "多い おおい A lot<br>山の多い国です。It's a very mountainous country."],
    ["少ない", "少ない すくない Few<br>オスロは東京より人口が少ない Oslo has fewer people than Tokyo."],
    ["少し", "少し すこし A little<br>少コーヒー少しどう？ How about a little coffee?"],
    ["食べる", "食べる たべる Eat<br>みんなで食べる eat together"],
    ["家", "家 いえ House<br> 家に帰るの？ Are you going home?.<br>家族 かぞく Family<br> 大家族なの？ Do you have a big family?"],
    ["今日", "今日 きょう Today<br>今日は暑い It is hot today"],
    ["明日", "明日 あした Tomorrow<br> 明日何するの？ What are you doing tomorrow"],
    ["昨日", "昨日 きのう Yesterday<br>昨日は暑かった It was hot yesterday"],
    ["私", "私 わたし I<br>私はスウェーデンじんです。I am Swedish.<br>私案 しあん One's own plan<br>私案をワシントンでぶち上げている I'm pitching my proposal in Washington"],
    ["俺", "俺 おれ I<br>俺はデブだ。I am Fat."],
    ["僕", "僕 ぼく I<br>僕が持つよ Let me carry it for you."],
    ["仕事", "仕事 しごと Work<br>仕事はどう？ How's work?"],
    ["何時", "何時 なんじ What time<br>何時ですか What time is it"],
    ["出る", "出る でる Leave<br>何時に出る？ "],
    ["使う", "使う つかう to use<br>これ使う？ Are you going to use this?"],
    ["所", "所 ところ Place<br>ストックホルムそんなにいい所？ Is Stockholm really that great a place?<br>台所 だいどころ Kitchen<br>台所で何を見たの？ What did you see in the kitchen?"],
    ["誰", "誰 だれ Who<br> あれ誰？ Who is that?"],
    ["始める", "始める はじめる Start<br>When do you plan on beginning?　いつ始めるつもりですか"],
    ["学校", "学校 がっこう School<br>学校は好き？ Do you like school?"],
    ["好", "好 すき Like<br>ピアノは好き？ Do you like the piano?"],
    ["友達", "友達 ともだち Friend<br>友達はいる？ Do you have any friends?"],
    ["思う", "思う おもう Think<br>どう思う？ What do you think?"],
    ["同じ", "同じ おなじ Same<br>同じ意見です I agree."],
    ["意見", "意見 いけん Opinion<br>同じ意見です I agree."],
    ["君", "君 きみ You<br>君は誰？ Who are you?"],
    ["作る", "作る つくる Make<br>コーヒー作るわ I'll make some coffee."],
    ["朝", "朝 あさ Morning<br>もう朝なの？ Is it morning already?<br>(idiom)朝飯前だ あさめしまえだ Piece of cake / As easy as pie"],
    ["昼", "昼 ひる Daytime<br>昼は、食事にショッピング。During the day, it's about eating and shopping.<br> 昼ご飯は何？ What's for lunch?<br>お昼寝の時間よ It's time for your afternoon nap."],
    ["夜", "夜 よる Night<br>夜は何をする？ What do you do at night?"],
    ["食事", "食事 しょくじ Meal<br>食事に行く？ Want to go out to eat?"],
    ["(verb)飲む", "(verb)飲む のむ Drink<br>何か飲む？ Want to drink something?"],
    ["持つ", "持つ もつ Have<br>それ持つよ I'll hold that."],
    ["一", "一 いち One<br> 一度 いちど Once<br>もう一度？ もういちど？ Come again?<br>一人 ひとり　Alone.<br> 俺が一人じゃない　I'm not alone.<br>一分 いっぷん a minute"],
    ["不味い", "不味い まずい unpalatable<br>魚は不味い The fish doesn't taste good.<br>"],
    ["高い", "高い たかい High/Expensive<br>高いですね High/Expensive, Isn't it?<br>高校 こうこう High school<br>高校生 こうこうせい High school student"],
    ["駅", "駅 えき Station<br>駅はどこ？ Where is the station?"],
    ["電車", "電車 でんしゃ Train<br>電車は何時ですか What time is the train?<br>電車が来るよ！ The train is coming!<br>電車に乗った I got on the train."],
    ["雨", "雨 あめ Rain<br>雨やんだ？ Has it stopped raining?<br>雨季 うき Rainy season<br>雨季に入った The rainy season has started."],
    ["水", "水 みず Water<br>水を飲む Drink water<br>水曜日 すいようび Wednesday"],
    ["二", "二 に Two<br>二鳥 にとり Two birds<br>二人 ふたり Two people<br>二人は友達なの？ Are you two friends?"],
    // These need to be fixed
    ["三", "三 さん Three<br>三時十分です さんじじゅっぷんです It's 3:10<br>三日 みっか Three days"],
    // ["四","四 よん Four<br>四人 よにん Four people<br>四日 よっか Four days<br>四日間 よっかかん Four days"],
    // ["五","五 ご Five<br>五人 ごにん Five people<br>五日 いつか Five days<br>五日間 いつかかん Five days"],
    // ["六","六 ろく Six<br>六人 ろくにん Six people<br>六日 むいか Six days<br>六日間 むいかかん Six days"],
    // ["七","七 なな Seven<br>七人 しちにん Seven people<br>七日 なのか Seven days<br>七日間 なのかかん Seven days"],
    // ["八","八 はち Eight<br>八人 はちにん Eight people<br>八日 ようか Eight days<br>八日間 ようかかん Eight days"],
    // ["九","九 きゅう Nine<br>九人 きゅうにん Nine people<br>九日 ここのか Nine days<br>九日間 ここのかかん Nine days"],
    // ["十","十 じゅう Ten<br>十人 じゅうにん Ten people<br>十日 とおか Ten days<br>十日間 とおかかん Ten days"],
    ["百", "百 ひゃく Hundred<br>百円じゃなくて ひゃくえんじゃなくた It wasn't a 100 yen coin."],
    ["千", "千 せん Thousand<br>千人 せんにん Thousand people"],
    ["万", "万 まん Ten thousand<br>万人 まんにん Ten thousand people<br>１万円でたりる？ いちまんえんでたりる？ Is ten thousand yen enough?<br>万歳！ ばんざい！ Hooray!"],
    ["何", "何 なん What<br>何時 なんじ What time<br>何日 なんにち What day<br>何日間 なんにちかん What day"],
    ["木", "木 き Tree<br>レモンの木だ That's a lemon tree<br>木曜日 もくようび Thursday<br>木曜日に行く Going on Thursday"],
    ["本", "本 ほん Book<br>本はどこ？ Where is the book?"],
    ["毎日", "毎日 まいにち Every day<br>毎日行く？ Do you go every day?"],
    ["金", "金 きん Gold<br>金 かね Money<br>金曜日 きんようび Friday<br>金持ち かねもち Rich person<br>金出せよ かねだせよ！ Give me your money!<br>金出せよ きんだせよ！ Give me your gold!"],
    ["間", "間 あいだ Gap/Interval/Between<br>川と丘の間に村がある 川とおかのあいだに村がある There is a village between the river and the hill<br>間 ま Time/Space<br>間に合う？ まにあう？ Will you make it in time?"],
    ["時間", "時間 じかん Time<br>時間です It's time"],
    ["合", "合 あう Meet<br>間に合う？ Will you make it in time?"],
    ["長い", "長い ながい Long(distance,time)<br>このニンジンはめっちゃ長い This carrot is so long<br>きっと長い間伸びたんでしょうね I bet it grew for a long time"],
    ["長子", "長子 ちょうし Eldest/First child<br> 長子です ちょうしです I'm the oldest son"],
    ["道", "道 みち Road<br>道はどこ？ Where is the road?<br>道義 どうぎ Morality"],
    //     Use 週 when you specify a week. e.g. 第5週 = the fifth week
    // Use 週間 when you refer to a time span. e.g. 5週間 = five weeks.
    ["週", "週 しゅう Week<br>第5週 だいごしゅう the 5th week"],
    ["週間", "週間 しゅうかん Week<br>5週間 ごしゅうまつ 5 weeks"],
    ["買う", "買う かう Buy<br>それ買うよ I'll buy it"],
    ["買い物", "買い物 かいもの Shopping<br>買い物に行く Going shopping<br>毎朝買い物をします まいあさ買い物をｓじます I go shopping every morning"],
    ["読", "読 よむ Read<br>何読んでるの？ なによんでるの？ What are you reading?<br>(idiom)空気読み くうきよみ Read the room"],
    ["読書", "読書 どくしょ Reading(books)<br>読書を続けた とくしょをつづけた I continued reading<br>読書が好きです どくしょがすきです I like reading books"],
    ["書く", "書く かく Write<br>書くものをくれ Give me something to write on"],
    ["語る", "語る かたる talk/speak<br>夢は真実を語る ゆめはしんじつをかたる Dreams tell the truth"],
    ["語", "語 ご Language<br>日本語 にほんご Japanese language<br>英語 えいご English language<br>日本語を勉強する にほんごをべんきょうする Study Japanese<br>母語は何ですか ぼごはなんですか What is your native language?<br>それって、何語？ それって、なんご？ What language is that?"],
    // Nouns
    ["車", "車 くるま Car<br>車が青い The car is blue"],
    ["自転車", "自転車 じてんしゃ Bicycle<br>自転車はどこですか Where is your bicycle?"],
    ["足", "足 あし Foot/Leg<br>足が痛い あしがいたい My foot hurts"],
    ["足りる", "足りる たりる Enough/Sufficient<br>足りない たりない Not enough"],
    ["満足", "満足 まんぞく Satisfied/Content<br>満足です I'm satisfied/That hit the spot"],
    ["人", "人 ひと Person<br>いけない人 Failure"],
    ["人口", "人口 じんこう Population<br>人口は、５６８人です The population is 568<br>(counter)人 -にん -people"],
    ["ご飯", "ご飯 ごはん Cooked Rice / Meal<br>ご飯にする？ Do you want rice/a meal?<br>朝ご飯は何？ What's for breakfast?"],
    ["魚", "魚 さかな Fish<br>魚を食べる I eat fish"],
    ["鳥", "鳥 とり Bird<br>鳥が飛んでいる A bird is flying<br>一石二鳥 いっせきにちょう (idiom)Kill two birds with one stone"],
    ["飲み物", "飲み物 のみもの (noun)Drink<br>何か飲み物はいかが？ Would you like something to drink?"]
];
function resizeCounter() {
    const countdown_toggle = document.getElementById("countdown-toggle");
    countdown_toggle.checked = !countdown_toggle.checked;
}
function fireFirework(elementId) {
    let firework = document.createElement('div');
    firework.addEventListener("animationend", deleteFirework);
    firework.style.setProperty('--finalSize', Math.floor(Math.random() * 50) + 25 + "vmin");
    firework.style.setProperty('--initialY', Math.floor(Math.random() * 120) + 30 + "vmin");
    firework.style.setProperty('--particleSize', (Math.random() * 2.0) + 0.1 + "vmin");
    firework.style.setProperty('--x', Math.floor(Math.random() * 120) - 60 + "vmin");
    firework.style.setProperty('--y', Math.floor(Math.random() * -60) - 30 + "vmin");
    firework.style.setProperty('--rotationY', Math.floor(Math.random() * 80) - 40 + "deg");
    firework.style.setProperty('--rotation', Math.floor(Math.random() * 240) - 120 + "deg");
    firework.style.setProperty('--color1', '#' + Math.floor(Math.random() * 16777215).toString(16));
    firework.style.setProperty('--color2', '#' + Math.floor(Math.random() * 16777215).toString(16));
    firework.style.setProperty('--color3', '#' + Math.floor(Math.random() * 16777215).toString(16));
    firework.style.setProperty('--color4', '#' + Math.floor(Math.random() * 16777215).toString(16));
    firework.style.setProperty('--color5', '#' + Math.floor(Math.random() * 16777215).toString(16));
    firework.style.setProperty('--color6', '#' + Math.floor(Math.random() * 16777215).toString(16));
    firework.style.left = Math.floor(Math.random() * 50) + 25 + "%";
    firework.style.top = Math.floor(Math.random() * 50) + 50 + "%";
    firework.style.animationDelay = (Math.random() * 2.0) + "s";
    const fireworks = document.getElementById(elementId);
    fireworks === null || fireworks === void 0 ? void 0 : fireworks.appendChild(firework);
}
function deleteFirework() {
    this.remove();
}
function isItTimeToCelebrateNewYears() {
    var _a;
    const cur_date = new Date();
    if ((cur_date < (new Date(`${cur_date.getFullYear()}-01-01T03:30:00`))) &&
        (cur_date > (new Date(`${cur_date.getFullYear()}-01-01T00:00:00`)))) {
        console.log("GOTT NYTT ÅR! HAPPY NEW YEAR! あけましておめでとう！");
        for (let index = 0; index < 10; index++) {
            fireFirework('header-celebration-new-years');
        }
        if (Math.floor(alternatingValue % 2) == 0) {
            blog_title_element === null || blog_title_element === void 0 ? void 0 : blog_title_element.innerHTML = "HAPPY NEW YEAR!";
            blog_title.innerHTML = "HAPPY NEW YEAR!";
        }
        else {
            blog_title_element === null || blog_title_element === void 0 ? void 0 : blog_title_element.innerHTML = "あけましておめでとう！";
            blog_title.innerHTML = "あけましておめでとう！";
        }
        alternatingValue += 1;
        //Stuff I only want to run once during the celebrations
        if (!addedClassToCelebrate) {
            (_a = document.getElementById("header-celebration-new-years")) === null || _a === void 0 ? void 0 : _a.innerHTML += `<div id="hanabi"></div>`;
            the_body.style.background = "#003366";
            blog_title.style.color = "gold";
            document.querySelector("body > header").style.background = "#003366";
            for (let i = 0; i < all_blogposts.length; i++) {
                all_blogposts[i].classList.add("celebration_post");
            }
            addedClassToCelebrate = true;
        }
    }
}
function calculate_time_since_first_post() {
    var _a;
    const cur_date = new Date(); // The date right now
    const anniversary_date = new Date(`${cur_date.getFullYear()}-07-04T22:37:00`); // 2022-07-04T22:37:00 was the initial commit time
    // If the anniversary has passed on the current calender year, the anniversary date should be the next year's
    if (cur_date.valueOf() > anniversary_date.valueOf()) {
        anniversary_date.setFullYear(cur_date.getFullYear() + 1);
    }
    const time_to_anniversary_date_in_seconds = (anniversary_date.valueOf() - cur_date.valueOf()) / 1000; //in seconds
    const tot_diff = (cur_date.valueOf() - first_commit_date.valueOf()); // Total time to endDate In milliseconds
    const totseconds = tot_diff / 1000; // Total time to endDate in seconds
    const seconds = String(Math.floor(totseconds % 60)); // Timer showing seconds between    0 to 59
    const minutes = String(Math.floor(totseconds / 60) % 60); // Timer showing minutes between    0 to 59
    const hours = String(Math.floor((totseconds / 60) / 60) % 24); // Timer showing hours between      0 to 23
    const days = String(Math.floor(((totseconds / 60) / 60) / 24) % 365); // Timer showing days between       0 to 364
    const years = String(Math.floor((((totseconds / 60) / 60) / 24) / 365) % 100); // Timer showing years between       0 to 99
    seconds_element === null || seconds_element === void 0 ? void 0 : seconds_element.innerHTML = seconds;
    minutes_element === null || minutes_element === void 0 ? void 0 : minutes_element.innerHTML = minutes;
    hours_element === null || hours_element === void 0 ? void 0 : hours_element.innerHTML = hours;
    days_element === null || days_element === void 0 ? void 0 : days_element.innerHTML = days;
    years_element === null || years_element === void 0 ? void 0 : years_element.innerHTML = years;
    // Doing cur_date == end_date doesnt actually work the way youd think it does
    // Celebrate all day. 31536000 seconds in a year. 86400 seconds in a day. So, stop celebrating when time to the next anniversary date is 31449600 seconds, otherwise celebrate since it IS the anniversary :)
    if (time_to_anniversary_date_in_seconds > 31449600) {
        if (!addedTheFirework) {
            addedTheFirework = true;
            (_a = document.getElementById("firework-celebration-show")) === null || _a === void 0 ? void 0 : _a.innerHTML += `<div id="hanabi"></div>`;
        }
        countdown_post === null || countdown_post === void 0 ? void 0 : countdown_post.classList.add("celebration_post");
        for (let index = 0; index < 4; index++) {
            fireFirework('firework-celebration-show');
        }
        if (Math.floor(time_to_anniversary_date_in_seconds % 2) == 0) {
            seconds_counter_element === null || seconds_counter_element === void 0 ? void 0 : seconds_counter_element.innerHTML = "HAPPY COMMIT ANNIVERSARY!";
        }
        else {
            seconds_counter_element === null || seconds_counter_element === void 0 ? void 0 : seconds_counter_element.innerHTML = "コミット記念日おめでとう！";
        }
    }
    else {
        seconds_counter_element === null || seconds_counter_element === void 0 ? void 0 : seconds_counter_element.innerHTML = String(Math.floor((time_to_anniversary_date_in_seconds)));
    }
}
const running_stick = document.getElementById("running-stick-gif");
// getComputedStyle(document.documentElement).getPropertyValue('--running-length')
running_stick.onanimationend = () => {
    running_stick.classList.remove('start_running');
    let current_running_time = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--running-time')) - 0.5;
    if (current_running_time < 0) {
        current_running_time = 0.5;
    }
    document.documentElement.style.setProperty('--running-time', current_running_time + 's');
    void running_stick.offsetWidth; // trigger reflow
    running_stick.classList.add('start_running');
};
const pop_post = document.getElementById("ppoppost");
pop_post.onanimationend = () => {
    pop_post.classList.remove('pop-post');
    void pop_post.offsetWidth; // trigger reflow
    pop_post.classList.add('pop-post');
};
function darkenPage() {
    darkeningElement.style.display = "block";
}
function undarkenPage() {
    darkeningElement.style.display = "none";
}
function flashSquareKanaClick() {
    flashSquareKanaElement.style.display = "none";
    flashSquareAnswerElement.style.display = "block";
}
const flashSquareCommonWord = document.getElementById("flash-square-common-word");
const flashSquareCommonWordAnswerElement = document.getElementById("flash-square-common-word-answer");
const flashSquarePostElement = document.getElementById("flash-square-common-words");
function flashSquareCommonWordClick() {
    if (flashSquareCommonWord.style.display != "none") {
        flashSquareCommonWord.style.display = "none";
        flashSquareCommonWordAnswerElement.style.display = "flex";
    }
    else if (flashSquareCommonWord.style.display == "none") {
        const randomCommonWordElementPosition = Math.floor(Math.random() * (commonJapaneseWords.length));
        flashSquareCommonWord.innerHTML = commonJapaneseWords[randomCommonWordElementPosition][0];
        flashSquareCommonWordAnswerElement.innerHTML = commonJapaneseWords[randomCommonWordElementPosition][1];
        flashSquareCommonWordAnswerElement.style.display = "none";
        flashSquareCommonWord.style.display = "block";
    }
}
function flashSquareAnswerClick() {
    const randomKanaElementPosition = Math.floor(Math.random() * (allKanaTriples.length)); // Any random element from allkana array
    flashSquareKanaElement.innerText = allKanaTriples[randomKanaElementPosition][Math.floor(Math.random() * 2)]; // Between 0 - 1. Hiragana or katakana is a coinflip
    flashSquareAnswerElement.innerText = allKanaTriples[randomKanaElementPosition][2]; // The answer
    flashSquareAnswerElement.style.display = "none";
    flashSquareKanaElement.style.display = "block";
}
function flashSquareN5Click() {
    var _a, _b;
    (_a = document.getElementById("flash-square-N5")) === null || _a === void 0 ? void 0 : _a.style.display = "none";
    (_b = document.getElementById("flash-square-N5-answer")) === null || _b === void 0 ? void 0 : _b.style.display = "block";
}
function flashSquareN5AnswerClick() {
    const rndAllN5KanjiPosition = Math.floor(Math.random() * (allN5Kanji.length)); // Any random element from allN5kanji array
    document.getElementById("flash-square-N5").innerText = allN5Kanji[rndAllN5KanjiPosition][Math.floor(Math.random() * 2)];
    document.getElementById("flash-square-N5-answer").innerText = allN5Kanji[rndAllN5KanjiPosition][2];
}
if (date_today == new Date(`${date_today.getFullYear()}-12-31`)) {
    setInterval(isItTimeToCelebrateNewYears, 1100);
}
setInterval(calculate_time_since_first_post, 1000);
//tsc --target es2015 .\js\script.ts
function toggleArticlePost(activeExpandArticle) {
    let all_paragraphs = activeExpandArticle.getElementsByTagName("p");
    console.log(all_paragraphs);
    // all_paragraphs.forEach(element => {
    //     element.style.display = "block";
    // });
    activeExpandArticle.style.color = "yellow";
}
const post16post = document.getElementById("post16");
// post16post.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const textFile = event.dataTransfer?.files[0];
// });
function acceptFile(event) {
    var _a;
    event.preventDefault();
    (_a = document.getElementById("post16")) === null || _a === void 0 ? void 0 : _a.style.backgroundColor = "green";
}
function readFile(event) {
    event.preventDefault();
    post16post.style.backgroundColor = "blue";
}
function leftPostDrag(event) {
    var _a;
    event.preventDefault();
    (_a = document.getElementById("post16")) === null || _a === void 0 ? void 0 : _a.style.backgroundColor = "white";
}
