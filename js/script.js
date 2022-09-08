const darkeningElement = document.getElementById("page-darkener");
const flashSquareKanaElement = document.getElementById("flash-square-kana");
const flashSquareAnswerElement = document.getElementById("flash-square-answer");
const days_element = document.getElementById("days-number");
const hours_element = document.getElementById("hours-number");
const minutes_element = document.getElementById("minutes-number");
const seconds_element = document.getElementById("seconds-number");
const cur_date = new Date(); // The date right now
const end_date = new Date(`2022-07-05`); // 5th of July is when I published my first post
const cur_date_value_of = cur_date.valueOf();
const end_date_value_of = end_date.valueOf();
const tot_diff = (end_date.valueOf() - cur_date.valueOf()); // Total time to endDate In milliseconds
const totseconds = tot_diff / 1000; // Total time to endDate in seconds
const seconds = String(Math.floor(totseconds % 60)); // Timer showing seconds between    0 to 59
const minutes = String(Math.floor(totseconds / 60) % 60); // Timer showing minutes between    0 to 59
const hours = String(Math.floor((totseconds / 60) / 60) % 24); // Timer showing hours between      0 to 23
const days = String(Math.floor(((totseconds / 60) / 60) / 24) % 365); // Timer showing days between       0 to 364
seconds_element.innerHTML = seconds;
minutes_element.innerHTML = minutes;
hours_element.innerHTML = hours;
days_element.innerHTML = days;
function darkenPage() {
    darkeningElement.style.display = "block";
}
function undarkenPage() {
    darkeningElement.style.display = "none";
}
const allHiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const allKatakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const allHiraganaDiacritics = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const allKatakanaDiacritics = "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const allHiraganaDigraphs = "";
const allKatakanaDigraphs = "";
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
function flashSquareKanaClick() {
    flashSquareKanaElement.style.display = "none";
    flashSquareAnswerElement.style.display = "block";
}
function flashSquareAnswerClick() {
    const randomKanaElementPosition = Math.floor(Math.random() * (allKanaTriples.length)); // Any random element from allkana array
    flashSquareKanaElement.innerText = allKanaTriples[randomKanaElementPosition][Math.floor(Math.random() * 2)]; // Between 0 - 1. Hiragana or katakana is a coinflip
    flashSquareAnswerElement.innerText = allKanaTriples[randomKanaElementPosition][2]; // The answer
    flashSquareAnswerElement.style.display = "none";
    flashSquareKanaElement.style.display = "block";
}
