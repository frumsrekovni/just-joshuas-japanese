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

type kanaTuple = [string,string,string];

const allKanaTuples:kanaTuple[] = [
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
    ["と","ト", "to"]
];

function flashSquareKanaClick(){
    flashSquareKanaElement.style.display = "none";
    flashSquareAnswerElement.style.display = "block";
}

function flashSquareAnswerClick(){
    const randomKanaElementPosition = Math.floor(Math.random() * (allKanaTuples.length));                       // Any random element from allkana array
    flashSquareKanaElement.innerText = allKanaTuples[randomKanaElementPosition][Math.floor(Math.random() * 2)]; // Between 0 - 1. Hiragana or katakana is a coinflip
    flashSquareAnswerElement.innerText = allKanaTuples[randomKanaElementPosition][2];                           // The answer

    flashSquareAnswerElement.style.display = "none";
    flashSquareKanaElement.style.display = "block";
}