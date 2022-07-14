const darkeningElement = document.getElementById("page-darkener") as HTMLElement;
const flashSquareKanaElement = document.getElementById("flash-square-kana") as HTMLElement;
const flashSquareAnswerElement = document.getElementById("flash-square-answer") as HTMLElement;
function darkenPage(){
    darkeningElement.style.display = "block";
}
function undarkenPage(){
    darkeningElement.style.display = "none";
}
const allHiragana:string = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"
const allKatakana:string = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
const allHiraganaDiacritics:string = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const allKatakanaDiacritics:string = "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const allHiraganaDigraphs:string ="";
const allKatakanaDigraphs:string ="";

type kanaTriple = [string,string,string];

const allKanaTriples:kanaTriple[] = [
    ["あ","ア","a"],
    ["い","イ","i"],
    ["え","エ","e"],
    ["う","ウ","u"],
    ["お","オ","o"],
    ["か","カ","ka"],
    ["き","キ","ki"],
    ["け","ケ","ke"],
    ["く","ク", "ku"],
    ["こ","コ", "ko"],
    ["さ","サ", "sa"],
    ["し","シ", "shi"],
    ["す","ス", "su"],
    ["せ","セ", "se"],
    ["そ","ソ", "so"],
    ["た","タ", "ta"],
    ["ち","チ", "chi"],
    ["つ","ツ", "tsu"],
    ["て","テ", "te"],
    ["と","ト", "to"],
    ["な","ナ", "na"],
    ["に","ニ", "ni"],
    ["ぬ","ヌ", "nu"],
    ["ね","ネ", "ne"],
    ["の","ノ", "no"],
    ["は","ハ", "ha"],
    ["ひ","ヒ", "hi"],
    ["ふ","フ", "fu"],
    ["へ","ヘ", "he"],
    ["ほ","ホ", "ho"],
    ["ま","マ", "ma"],
    ["み","ミ", "mi"],
    ["む","ム", "mu"],
    ["め","メ", "me"],
    ["も","モ", "mo"],
    ["や","ヤ", "ya"],
    ["ゆ","ユ", "yu"],
    ["よ","ヨ", "yo"],
    ["ら","ラ", "ra"],
    ["り","リ", "ri"],
    ["る","ル", "ru"],
    ["れ","レ", "re"],
    ["ろ","ロ", "ro"],
    ["わ","ワ", "wa"],
    ["ウィ","ウィ", "wi"],
    ["ウェ","ウェ", "we"],
    ["ウォ","ウォ", "wo"],
    ["を","ヲ", "(w)o"],
    ["ん","ン", "ｎ"],
    ["が","ガ", "ga"],
    ["ぎ","ギ", "gi"],
    ["ぐ","グ", "gu"],
    ["げ","ゲ", "ge"],
    ["ご","ゴ", "go"],
    ["ざ","ザ", "za"],
    ["じ","ジ", "ji"],
    ["ず","ズ", "zu"],
    ["ぜ","ゼ", "ze"],
    ["ぞ","ゾ", "zo"],
    ["だ","ダ", "da"],
    ["ぢ","ヂ", "ji"],
    ["づ","ズ", "zu"],
    ["で","デ", "de"],
    ["ど","ド", "do"],
    ["ば","バ", "ba"],
    ["び","ビ", "bi"],
    ["ぶ","ブ", "bu"],
    ["べ","ベ", "be"],
    ["ぼ","ボ", "bo"],
    ["ぱ","パ", "pa"],
    ["ぴ","ピ", "pi"],
    ["ぷ","プ", "pu"],
    ["ぺ","ペ", "pe"],
    ["ぽ","ポ", "po"],
    ["きゃ","キャ", "kya"],
    ["きゅ","キュ", "kyu"],
    ["きょ","キョ", "kyo"],
    ["ぎゃ","ギャ", "gya"],
    ["ぎゅ","ギュ", "gyu"],
    ["ぎょ","ギョ", "gyo"],
    ["にゃ","ニャ", "nya"],
    ["にゅ","ニュ", "nyu"],
    ["にょ","ニョ", "nyo"],
    ["ひゃ","ヒャ", "hya"],
    ["ひゅ","ヒュ", "hyu"],
    ["ひょ","ヒョ", "hyo"],
    ["びゃ","ビャ", "bya"],
    ["びゅ","ビュ", "byu"],
    ["びょ","ビョ", "byo"],
    ["ぴゃ","ピャ", "pya"],
    ["ぴゅ","ピュ", "pyu"],
    ["ぴょ","ピョ", "pyo"],
    ["みゃ","ミャ", "mya"],
    ["みゅ","ミュ", "myu"],
    ["みょ","ミョ", "myo"],
    ["りゃ","リャ", "rya"],
    ["りゅ","リュ", "ryu"],
    ["りょ","リョ", "ryo"],
    ["じゃ","ジャ", "ja"],
    ["じゅ","ジュ", "ju"],
    ["じぇ","ジェ", "je"],
    ["じょ","ジョ", "jo"],
    ["ちゃ","チャ", "cha"],
    ["ちゅ","チュ", "chu"],
    ["ちぇ","チェ", "che"],
    ["ちょ","チョ", "cho"],
    ["しゃ","シャ", "sha"],
    ["しゅ","シュ", "shu"],
    ["しぇ","シェ", "she"],
    ["しょ","ショ", "sho"]
    
];

function flashSquareKanaClick(){
    flashSquareKanaElement.style.display = "none";
    flashSquareAnswerElement.style.display = "block";
}

function flashSquareAnswerClick(){
    const randomKanaElementPosition = Math.floor(Math.random() * (allKanaTriples.length));                       // Any random element from allkana array
    flashSquareKanaElement.innerText = allKanaTriples[randomKanaElementPosition][Math.floor(Math.random() * 2)]; // Between 0 - 1. Hiragana or katakana is a coinflip
    flashSquareAnswerElement.innerText = allKanaTriples[randomKanaElementPosition][2];                           // The answer

    flashSquareAnswerElement.style.display = "none";
    flashSquareKanaElement.style.display = "block";
}