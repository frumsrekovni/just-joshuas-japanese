const first_commit_date = new Date(`2022-07-04T22:37:00`);               // 2022-07-04T22:37:00 4th of July 2022 at 22:37 CEST is when I did my first commit to this blog 
const darkeningElement = document.getElementById("page-darkener") as HTMLElement;
const flashSquareKanaElement = document.getElementById("flash-square-kana") as HTMLElement;
const flashSquareAnswerElement = document.getElementById("flash-square-answer") as HTMLElement;
const years_element = document.getElementById("years-number");
const days_element = document.getElementById("days-number");
const hours_element = document.getElementById("hours-number");
const minutes_element = document.getElementById("minutes-number");
const seconds_element = document.getElementById("seconds-number");
const countdown_post = document.getElementById("post13");
const seconds_counter_element = document.getElementById("seconds-to-anniversary");

const allHiragana:string = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"
const allKatakana:string = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
const allHiraganaDiacritics:string = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const allKatakanaDiacritics:string = "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const allHiraganaDigraphs:string ="";
const allKatakanaDigraphs:string ="";

type kanaTriple = [string,string,string];
type kanjiCard = [string,string];

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

const allN5Kanji:kanjiCard[] = [
    ["国","Onyomi: koku\nKunyomi: kuni"],
    ["人","Onyomi: jin,nin\nKunyomi: hito\n"],
];

function resizeCounter(){
    const countdown_toggle = document.getElementById("countdown-toggle") as HTMLInputElement;
    countdown_toggle.checked = !countdown_toggle.checked;
}

function fireFirework(elementId:string){
    let firework = document.createElement('div');
    firework.addEventListener("animationend", deleteFirework);
    firework.style.setProperty('--finalSize', Math.floor(Math.random() * 50) + 25 + "vmin");
    firework.style.setProperty('--initialY', Math.floor(Math.random() * 120) + 30 + "vmin");
    firework.style.setProperty('--particleSize', (Math.random() * 2.0)+0.1 + "vmin");
    firework.style.setProperty('--x', Math.floor(Math.random() * 120) - 60 + "vmin");
    firework.style.setProperty('--y', Math.floor(Math.random() * -60) - 30 + "vmin");
    firework.style.setProperty('--rotationY', Math.floor(Math.random() * 80) - 40 + "deg");
    firework.style.setProperty('--rotation', Math.floor(Math.random() * 240) - 120 + "deg");
    firework.style.setProperty('--color1', '#'+Math.floor(Math.random()*16777215).toString(16));
    firework.style.setProperty('--color2', '#'+Math.floor(Math.random()*16777215).toString(16));
    firework.style.setProperty('--color3', '#'+Math.floor(Math.random()*16777215).toString(16));
    firework.style.setProperty('--color4', '#'+Math.floor(Math.random()*16777215).toString(16));
    firework.style.setProperty('--color5', '#'+Math.floor(Math.random()*16777215).toString(16));
    firework.style.setProperty('--color6', '#'+Math.floor(Math.random()*16777215).toString(16));
    firework.style.left = Math.floor(Math.random() * 50) + 25+"%";
    firework.style.top  = Math.floor(Math.random() * 50) + 50+"%";
    firework.style.animationDelay = (Math.random() * 2.0)+"s";
    
    const fireworks = document.getElementById(elementId);
    fireworks?.appendChild(firework);
}


function deleteFirework(){
    this.remove();
}

function isItTimeToCelebrateNewYears(){
    const cur_date = new Date();   
    console.log(cur_date);
    // if((cur_date < (new Date(`${cur_date.getFullYear()}-01-01T03:30:00`)) ) && 
    // (cur_date > (new Date(`${cur_date.getFullYear()}-01-01T00:00:00`))))
    // {
    //     console.log("GOTT NYTT ÅR! HAPPY NEW YEAR!");
    //     fireFirework('blog-header-title');
    // }
    for (let index = 0; index < 4; index++) {
        fireFirework('header-celebration-new-years');
    }
}

function calculate_time_since_first_post(){
    const cur_date = new Date();                                    // The date right now
    const anniversary_date = new Date(`${cur_date.getFullYear()}-07-04T22:37:00`); // 2022-07-04T22:37:00 was the initial commit time


    // If the anniversary has passed on the current calender year, the anniversary date should be the next year's
    if(cur_date.valueOf() > anniversary_date.valueOf()){
        anniversary_date.setFullYear(cur_date.getFullYear()+1);
    }
    const time_to_anniversary_date_in_seconds = (anniversary_date.valueOf() - cur_date.valueOf()) / 1000; //in seconds

    const tot_diff = (cur_date.valueOf() - first_commit_date.valueOf());    // Total time to endDate In milliseconds

    const totseconds = tot_diff / 1000;                                     // Total time to endDate in seconds
    const seconds = String(Math.floor(totseconds % 60));                    // Timer showing seconds between    0 to 59
    const minutes = String(Math.floor(totseconds / 60) % 60);               // Timer showing minutes between    0 to 59
    const hours =   String(Math.floor((totseconds / 60)/60) % 24);          // Timer showing hours between      0 to 23
    const days =    String(Math.floor(((totseconds / 60)/60)/24)%365);      // Timer showing days between       0 to 364
    const years =   String(Math.floor((((totseconds / 60)/60)/24)/365)%100);// Timer showing years between       0 to 99
    seconds_element?.innerHTML= seconds;
    minutes_element?.innerHTML= minutes;
    hours_element?.innerHTML=   hours;
    days_element?.innerHTML=    days;   
    years_element?.innerHTML=   years;

    // Doing cur_date == end_date doesnt actually work the way youd think it does
    // Celebrate all day. 31536000 seconds in a year. 86400 seconds in a day. So, stop celebrating when time to the next anniversary date is 31449600 seconds, otherwise celebrate since it IS the anniversary :)
    if(time_to_anniversary_date_in_seconds > 31449600){
        countdown_post?.classList.add("celebration_post");
        for (let index = 0; index < 4; index++) {
            fireFirework('firework-celebration-show');
        }
        if(Math.floor(time_to_anniversary_date_in_seconds % 2) == 0){
            seconds_counter_element?.innerHTML = "HAPPY COMMIT ANNIVERSARY!";
        }
        else{
            
            seconds_counter_element?.innerHTML = "コミット記念日おめでとう！";
        }
    }
    else{
        seconds_counter_element?.innerHTML = String(Math.floor((time_to_anniversary_date_in_seconds)));
    }
    
}

function darkenPage(){
    darkeningElement.style.display = "block";
}
function undarkenPage(){
    darkeningElement.style.display = "none";
}

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

calculate_time_since_first_post();
setInterval(calculate_time_since_first_post,1000);
setInterval(isItTimeToCelebrateNewYears,1100);


//tsc --target es2015 .\js\script.ts