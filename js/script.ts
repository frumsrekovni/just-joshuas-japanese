      const first_commit_date = new Date(`2022-07-04T22:37:00`);               // 2022-07-04T22:37:00 4th of July 2022 at 22:37 CEST is when I did my first commit to this blog 
con st darkeningElement = document.getElementById("page-darkener") as HTMLElement;
const flashSquareKanaElement = document.getElementById("flash-square-kana") as HTMLElement;
const flashSquareAnswerElement = document.getElementById("flash-square-answer") as HTMLElement;
const years_element = document.getElementById("years-number");
const days_element = document.getEl ementById("days-number");
const hours_element = document.getElementById( ". hours-number");  
const minutes_element = document.getElementById("minutes-numbe r");
const seconds_ele ment = document.getElementById("seconds-number");
const countdown_post = document.getElementById("post13");
const all_blogposts = document.getElementsByClassName("blog-post") as HTMLCollectionOf<HTMLElement>;
const all_sidebar_redirects = document.getElementsByClassName("sidebar-redirect") as HTMLCollectionOf<HTMLElement>;
const seconds_counter_element = document.getElementById("seconds-to-anniversary");
const blog_title_element = document.getElementsByTagName("title")[0];
const main_container = document.getElementsByClassName("main-site-container")[0];
const the_body = document.querySelector("body")
var alternatingValue = 0;
const blog_title = document.querySelector("body > header > h1");
let addedClassToCelebrate = false;
let addedTheFirework = false;

const allHiragana:string = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"
const allKatakana:string = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
const allHiraganaDiacritics:string = "がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ";
const allKatakanaDiacritics:string = "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";
const allHiraganaDigraphs:string ="";
const allKatakanaDigraphs:string ="";

type kanaTriple = [string,string,string];
type kanjiCard = [string,string];
type wordCard = [string,string];

const date_today = new Date();



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

// based on this http://jlptstudy.net/N5/?kanji-list
const allN5Kanji:kanjiCard[] = [
    ["国","Onyomi: koku\nKunyomi: kuni"],
    ["一",""],
    ["七",""],
    [" ",""],
    [" ",""],
    [" ",""],
    [" ",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["",""],
    ["人","Onyomi: jin,nin\nKunyomi: hito\n"]
];
// based on this http://jlptstudy.net/N5/?kanji-list
// Why does the Jisho 初 page have 始め?
// Oni Giri Rendaku?? Rendaku rendaku rendakuuuu
// Rendaku needs its own article
const commonJapaneseWords:wordCard[] = [
    ["行く","行く いく Go<br> どこ行くの？ Where are you going?"],
    ["見る","見る みる Watch<br> テレビはよく見るの？ Do you watch a lot of TV?"],
    ["聞く","聞く きく Listen<br> 聞くの？ Are you listening?<br>聞こえる? Can you hear me?<br>新聞 しんぶん Newspaper"],
    ["生","生 なま Life/Genuine/Birth/Raw<br>生の魚はありますか？ なまのさかなはありますか？ Do you have raw fish?<br>生ビールをもう一杯ください なまビールをもういっぱいください One more draft beer please<br>(idiom)一生懸命働 いっしょけんめい Work hard/Try their best<br>生きたい いきたい I want to live"],
    ["先生","先生 せんせい Teacher<br>先生なの？ Are you a teacher?"],
    ["いつ","いつ When<br>いつ行くの？ When are you going?<br>誕生日はいつですか？ When is your birthday?"],
    ["誕生日","誕生日 たんじょうび Birthday<br>誕生日はいつですか？ When is your birthday?"],
    ["耳","耳 みみ Ear/Hearing<br>私の耳、赤い？ わたしのみみ、あかい？ Are my ears red?<br>それは初耳だ それははつみみだ It's news to me."],
    ["新聞","新聞 しんぶん Newspaper<br>新聞はどこ？ Where is the newspaper?<br>今日の新聞ある？ Do you have today's newspaper?"],
    ["新しい","新しい あたらしい New<br>新しいの？ Is it new?<br>新車を買うつもり しんしゃをかうつもりだ I am going to buy a new car"],
    ["多い","多い おおい A lot<br>山の多い国です。It's a very mountainous country."],
    ["国","国 くに Country<br>日本は狭い国です Japan is a small country<br>アメリカは大きい国です America is a big country<br>国語 こくご National language"],
    ["国語","国語 こくご National language<br>国語は難しいですか？ こくごはむずかですか？ Is Japanese difficult?<br> 国語の先生 こくごのせんせい Japanese teacher"],
    ["東","東 ひがし East<br>東はどの方向なの？ ひがしはどのほうこうなの？ What direction is east?<br>東京 とうきょう Tokyo"],
    ["少ない","少ない すくない Few<br>オスロは東京より人口が少ない Oslo has fewer people than Tokyo.<br>５は８より少ない ５は８よりすくない Five is less than eight<br>年齢のせいか揚げ物が少ない弁当を選ぶようになった ねんれいのせいかあげものがすくないべんとうをえらぶようになった Maybe because of my age, I've started choosing bento with fewer fried foods."],
    ["少し","少し すこし A little<br>少コーヒー少しどう？ How about a little coffee?"],
    ["食べる","食べる たべる Eat<br>みんなで食べる eat together"],
    ["大","大 だい Big/Vast<br>大きい おおきい Big/Loud/Important<br>大丈夫？ だいじょうぶ？ Are you OK?<br>大好き だいすき I love you<br>その本は大きい このほんはおおきい This book is big"],
    ["大きい","大きい おおきい Big/Loud/Important<br>この犬、大きいよ このいぬ、おおきいよ This dog is big<br>大型 おおがた Large-sized<br>この大型犬は声が大きい このおおがたいぬはこえがおおきい This big dog has a loud voice"],
    ["家","家 いえ House<br> 家に帰るの？ Are you going home?.<br>家族 かぞく Family<br>大家族なの？ Do you have a big family?"],
    ["帰る","帰る かえる Return<br>家に帰るの？ Are you going home?<br>帰りたい かえりたい I want to go home"],
    ["今日","今日 きょう Today<br>今日は暑い It is hot today<br>今日は魚が安い きょうはさかながやすい Fish is cheap today<br>今日は何曜日ですか？ What day is it today?"],
    ["明日","明日 あした Tomorrow<br> 明日何するの？ What are you doing tomorrow"],
    ["昨日","昨日 きのう Yesterday<br>昨日は暑かった It was hot yesterday"],
    ["私","私 わたし I<br>私はスウェーデンじんです。I am Swedish.<br>私案 しあん One's own plan<br>私もそうです I'm like that too<br>私案をワシントンでぶち上げている I'm pitching my proposal in Washington"],
    ["俺","俺 おれ I<br>俺はデブだ。I am Fat.<br>俺の？お前の？ おれの？おまえの？ Is it mine or yours?"],
    ["僕","僕 ぼく I<br>僕が持つよ ぼくがもつよ Let me carry it for you.<br>僕の時計はどこだ？ ぼくのとけいはどこだ？ Where is my watch?"],
    ["仕事","仕事 しごと Work<br>仕事はどう？ しごとはどう How's work?<br> 仕事をするの？ しごとをするの？ Are you going to work?<br>仕事中です しごとちゅうです I'm working"],
    ["何時","何時 なんじ What time<br>何時ですか What time is it"],
    ["出る","出る でる Leave<br>何時に出る？ What time are you leaving?<br>出るの？ Are you leaving?<br>私たちは来年出る わたしたちはらいねんでる We're leaving next year"],
    ["使う","使う つかう to use<br>これ使う？ これつかう？ Are you going to use this?<br>使うの簡単だよ つかうのかんたんだよ It's easy to use<br>道具を粗末に使うな どうぐをそまつにつかうな Don't handle these tools roughly"],
    ["所","所 ところ Place<br>ストックホルムそんなにいい所？ Is Stockholm really that great a place?<br>台所 だいどころ Kitchen<br>台所で何を見たの？ What did you see in the kitchen?"],
    ["誰","誰 だれ Who<br> あれ誰？ Who is that?"],
    ["始める","始める はじめる Start<br>いつ始めるつもりですか いつはじめるつもりですか When are you going to start?<br>問題はいつ始めるかだ もんだいはいつはじめるかだ The question is when to start<br>彼は私たちに始めるように合図した かれはわたしたちにはじめるようにあいずした He gave us the signal to start"],
    ["学校","学校 がっこう School<br>学校は好き？ Do you like school?"],
    ["好","好 すき Like<br>ピアノは好き？ Do you like the piano?"],
    ["友達","友達 ともだち Friend<br>友達はいる？ Do you have any friends?"],
    ["来る","来る くる Come/Next<br>来るの？ Are you coming?<br>また来週 またらいしゅう See you next week<br>早く来い はやくこい Come quickly"],
    ["週","週 しゅう Week<br>来週 らいしゅう Next week<br>今週 こんしゅう This week<br>今週末は暇？ こんしゅうまつはひま？ Are you free this weekend?"],
    ["来週","来週 らいしゅう Next week<br>来週は何をするの？ What are you doing next week?"],
    ["来月","来月 らいげつ Next month<br>来月は何をするの？ What are you doing next month?"],
    ["来年","来年 らいねん Next year<br>来年は何をするの？ What are you doing next year?"],
    ["来る","来る くる Come/Next<br>来るの？ Are you coming?<br>また来週 またらいしゅう See you next week<br>早く来い はやくこい Come quickly"],
    ["道","道 みち Road<br>この道でいいの このみちでいいの Is this the right way?<br>逃げ道がない にげみちがない There's no way out"],
    ["道路","道路 どうろ Road<br>道路に霧がある どうろにきりがある There is fog on the road<br>道路工事中 どうろこうじちゅう Road work ahead<br>道を渡った みちをわたった I crossed the street<br>道を空けてください みちをあけてください Make way, please"],
    ["橋","橋 はし Bridge<br>この橋を渡る このはしをわたる Cross this bridge<br>橋は石造りだ はしはいしづくりだ The bridge is made of stone<br>橋は修理中です はしはしゅうりちゅうです The bridge is under repair"],
    ["通る","通る とおる Pass<br>通るの？ Are you going to pass?<br>この橋を通るな このはしをとおるな Don't cross this bridge<br>君の声はよく通るな きみのこえはよくとおるな Your voi. ce carries well"],
    ["送る","送る おくる Send<br>送るの？ Are you going to send it?<br>家まで送るよ I'll see you home<br>どうやってファックスを送るのか、さっぱり分からない どうやってファックスをおくるのか、さっぱりわからない I have no idea how to send a fax"],
    ["皆さん","皆さん みなさん Everyone<br>皆さんはどこ？ Where is everyone?<br>皆さんお静かに みなさんおしずかに Everyone be quiet"],
    ["思う","思う おもう Think<br>どう思う？ What do you think?<br>本当だと思うよ I think it's true<br>きっと楽しいと思うよ きっとたのしいとおもうよ I think it will be fun"],
    ["同じ","同じ おなじ Same<br>同じ意見です I agree."],
    ["意見","意見 いけん Opinion<br>同じ意見です I agree."],
    ["君","君 きみ You<br>君は誰？ Who are you?"],
    ["作る","作る つくる Make<br>コーヒー作るわ I'll make some coffee."],
    ["朝","朝 あさ Morning<br>もう朝なの？ Is it morning already?<br>(idiom)朝飯前だ あさめしまえだ Piece of cake / As easy as pie<br>今朝 けさ This morning"],
    ["今朝","今朝 けさ This morning<br>今朝は何を食べた？ What did you eat this morning?<br>今朝の新聞読んだ？ Did you read this morning's newspaper?"],
    ["昼","昼 ひる Daytime<br>昼は、食事にショッピング。During the day, it's about eating and shopping.<br> 昼ご飯は何？ What's for lunch?<br>お昼寝の時間よ It's time for your afternoon nap."],
    ["夜","夜 よる Night<br>夜です よるです It's night<br>夜だった よるだった It was night<br>徹夜した てつやした I stayed up all night<r>"],
    ["食事","食事 しょくじ Meal<br>食事に行く？ Want to go out to eat?"],
    ["(verb)飲む","(verb)飲む のむ Drink<br>何か飲む？ Want to drink something?<br>何か飲むものある？ なにかのむものある？ Is there anything to drink?<br>牛乳はよく飲むの？ ぎゅうにゅうはよくのむの？ Do you often drink milk?"],
    ["持つ","持つ もつ Have<br>それ持つよ I'll hold that.<br>袋は僕が持つよ ふくろはぼくがもつよ I'll carry the bag<br>トムの肩ばっかり持つなよ トムのかたばっかりもつなよ Don't always side with Tom"],
    ["袋","袋 ふくろ Bag<br>袋は僕が持つよ ふくろはぼくがもつよ I'll carry the bag<br>袋を持ってください ふくろをもってください Please take this bag<br>椅子の下で一組の手袋を見つけました いすのしたでいっそうのてぶくろをみつけました I found a pair of gloves under the chair"],
    ["白","白 しろ White<br>白いの？ Is it white?<br>面白い おもしろい Interesting<br>真っ白です まっしろです It's pure white<br>白い犬 しろいいぬ White dog"],
    ["不味い","不味い まずい unpalatable<br>魚は不味い The fish doesn't taste good.<br>"],
    ["高い","高い たかい High/Expensive<br>高いですね High/Expensive, Isn't it?<br>高校 こうこう High school<br>高校生 こうこうせい High school student"],
    ["安い","安い やすい Cheap<br>安いですね Cheap, isn't it?<br>安心 あんしん Relief<br>安心してください あんしんしてください Please be at ease"],
    ["有名だ","有名だ ゆうめいだ Famous<br>有名だね You're famous<br>有名人 ゆうめいじん Celebrity<br>京都は古いお寺があるので有名だ きょうとはふるいおてらがあるのでゆうめいだ Kyoto is famous for its old temples"],
    ["古い","古い ふるい Old<br>古いの？ Is it old?<br>私の机は古い 私のつくえはふるい My desk is old<br>京都は古いお寺があるので有名だ きょうとはふるいおてらがあるのでゆうめいだ Kyoto is famous for its old temples"],
    ["暑い","暑い あつい Hot<br>今日は暑い It's hot today<br>暑すぎて仕事にならない あつすぎてしごとにならない It's too hot to work"],
    ["寒い","寒い さむい Cold<br>寒いですね Cold, isn't it?<br>寒い国 さむいくに Cold country<br>外は寒いですか そとはさむいですか Is it cold outside?"],
    ["厚い","厚い あつい Thick<br>この本はとても厚い このほんはとてもあつい This book is very thick<br>厚い友達 あついともだち A close friend"],
    ["熱い","熱い あつい Hot(To the touch)<br>卵がまだ熱い たまごがまだあつい The egg is still hot"],
    ["駅","駅 えき Station<br>駅はどこ？ Where is the station?"],
    ["電車","電車 でんしゃ Train<br>電車は何時ですか What time is the train?<br>電車が来るよ！ The train is coming!<br>電車に乗った I got on the train."],
    ["雨","雨 あめ Rain<br>雨やんだ？ Has it stopped raining?<br>雨季 うき Rainy season<br>雨季に入った The rainy season has started."],
    ["虹","虹 にじ Rainbow<br>虹を見た？ にじをみた？ Did you see the rainbow?<br>虹色 にじいろ Rainbow-colored<br>虹も見えるかもしれない にじもみえるかもしれない You might see a rainbow"],
    ["雷","雷 かみなり Thunder<br>雷が鳴ったよ かみなりがなったよ I heard thunder<br>子供達は雷におびえた こどもたちはかみなりにおびえた The children were frightened by the thunder<br>雷は金属に落ちやすい かみなりはきんぞくにおちやすい Lightning is liable to hit metal"],
    ["晴れ","晴れ はれ Sunny<br>空が晴れた そらがはれた The sky cleared up<br>今日は晴れだ きょうははれだ It's sunny today"],
    ["曇り","曇り くもり Cloudy<br>曇りの日です くもりのひです It's a cloudy day<br>晴れ後曇りでした はれごくもりでした It was sunny then cloudy"],
    ["水","水 みず Water<br>水を飲む Drink water<br>水曜日 すいようび Wednesday"],
    ["一","一 いち One<br>もう一度？ もういちど？ Come again?<br>一人 ひとり Alone.<br> 俺が一人じゃない I'm not alone.<br>一分 いっぷん a minute<br>(idiom)一石二鳥 いっせきにちょう Kill two birds with one stone"],
    ["二","二 に Two<br>二鳥 にとり Two birds<br>二人 ふたり Two people<br>二人は友達なの？ Are you two friends?<br>(idiom)一石二鳥 いっせきにちょう Kill two birds with one stone"],
    ["三","三 さん Three<br>三時十分です さんじじゅっぷんです It's 3:10<br>三日 みっか Three days<br>三人兄弟なの さんにんきょうだいなの Are you three siblings?"],
    ["四","四 よん Four<br>四人 よにん Four people<br>四日 よっか Four days<br>四日間 よっかかん Four days<br>四時過ぎよ しじすぎよ It's just after four o'clock"],
    ["五","五 ご Five<br>五人 ごにん Five people<br>五日 いつか Five days<br>五日間 いつかかん Five days<br>五時十分です ごじじゅっぷんです It's ten past five<br>六時までに戻る ごじまでにもどる I'll be back by six o'clock"],
    ["六","六 ろく Six<br>六人 ろくにん Six people<br>六日 むいか Six days<br>六日間 むいかかん Six days<br>十六歳です じゅうろくさいです I'm sixteen years old"],
    ["七","七 なな Seven<br>七人 しちにん Seven people<br>七日 なのか Seven days<br>七日間 なのかかん Seven days<br>七時に電話をかけます しちじにでんわをかけます I'll call you at seven o'clock"],
    ["八","八 はち Eight<br>八人 はちにん Eight people<br>八日 ようか Eight days<br>八日間 ようかかん Eight days<br>夜の八時です よるのはちじです It's eight o'clock at night"],
    ["九","九 きゅう Nine<br>九人 きゅうにん Nine people<br>九日 ここのか Nine days<br>九日間 ここのかかん Nine days<br>猫に九生あり ねこにきゅうしょうあり Cats have nine lives"],
    ["十","十 じゅう Ten<br>十人 じゅうにん Ten people<br>十日 とおか Ten days<br>十日間 とおかかん Ten days<br>十ページを開きなさい じゅうページをひらきなさい Open your books to page ten"],
    ["百","百 ひゃく Hundred<br>百円じゃなくて ひゃくえんじゃなくた It wasn't a 100 yen coin."],
    ["千","千 せん Thousand<br>千人 せんにん Thousand people<br>全部で三千円です ぜんぶでさんぜんえんです It's three thousand yen in total<br>千円札くずれますか せんえんさつくずれますか Can you break a 1000 yen bill?"],
    ["万","万 まん Ten thousand<br>万人 まんにん Ten thousand people<br>１万円でたりる？ いちまんえんでたりる？ Is ten thousand yen enough?<br>万歳！ ばんざい！ Hooray!"],
    ["暇","暇 ひま Free time<br>暇？ ひま？ Are you free?<br>暇な時は何をしていますか ひまなときはなにをしていますか What do you do in your free time?"],
    ["何","何 なん What<br>何時 なんじ What time<br>何日 なんにち What day<br>何日間 なんにちかん What day"],
    ["木","木 き Tree<br>レモンの木だ That's a lemon tree<br>木曜日 もくようび Thursday"],
    ["木曜日","木曜日 もくようび Thursday<br>今日は木曜日です きょうはもくようびです Today is Thursday<br>"],
    ["月曜日","月曜日 げつようび Monday<br>月曜日会える？ Can we meet on Monday?<br>月曜日でいい？ Is Monday OK?"],
    ["火曜日","火曜日 かようび Tuesday<br>火曜日に行く Going on Tuesday<br>火曜日はお暇ですか かようびはおひまですか Are you free on Tuesday?"],
    ["水曜日","水曜日 すいようび Wednesday<br>水曜日に行く Going on Wednesday<br>水曜日は仕事があります すいようびはしごとがあります I have work on Wednesday"],
    ["金曜日","金曜日 きんようび Friday<br>金曜日に行く Going on Friday<br>やっと金曜日だ やっときんようびだ It's finally Friday"],
    ["土","土 つち Earth/Dirt/Ground<br>土曜日 どようび Saturday<br>土曜日に行く Going on Saturday<br>土は何色なの？ つちはないろなの？ What color is the dirt?<br>土砂降りです どしゃぶりです It's raining hard."],
    ["土曜日","土曜日 どようび Saturday<br>土曜日に行く Going on Saturday<br>今日は土曜日ですか？ きょうはどようびですか Is today Saturday?"],
    ["日曜日","日曜日 にちようび Sunday<br>日曜日に行く Going on Sunday<br>明日は日曜日です あしたはにちようびです Tomorrow is Sunday"],
    ["火","火 ひ Fire<br>火は治まった ひはおさまった The fire has been put out<br>火曜日 かようび Tuesday<br>火曜日に行く Going on Tuesday<br>"],
    ["花火","花火 はなび Fireworks<br>花火は見えない はなびはみえない I can't see the fireworks"],
    ["本","本 ほん Book/Real/True<br>本はどこ？ Where is the book?<br>本当？ ほんとう？ For real?<br>本気だった？ ほんきだった？  Were you serious?<br>日本 にほん Japan"],
    ["毎日","毎日 まいにち Every day<br>毎日行く？ Do you go every day?"],
    ["金","金 きん Gold<br>金 かね Money<br>金曜日 きんようび Friday<br>金持ち かねもち Rich person<br>金出せよ かねだせよ！ Give me your money!<br>金出せよ きんだせよ！ Give me your gold!"],
    ["間","間 あいだ Gap/Interval/Between<br>川と丘の間に村がある 川とおかのあいだに村がある There is a village between the river and the hill<br>間 ま Time/Space<br>間に合う？ まにあう？ Will you make it in time?"],
    ["時間","時間 じかん Time<br>時間です It's time<br>話す時間ある？ はなすじかんある？ Do you have time to talk?<br>出かける時間よ でかけるじかんよ It's time to go"],
    ["合う","合う あう Meet<br>間に合う？ Will you make it in time?<br>それで間に合うでしょう それでまにあうでしょう That'll do"],
    ["長い","長い ながい Long(distance,time)<br>このニンジンはめっちゃ長い This carrot is so long<br>きっと長い間伸びたんでしょうね I bet it grew for a long time"],
    ["長子","長子 ちょうし Eldest/First child<br> 長子です ちょうしです I'm the oldest son"],
    ["道","道 みち Road<br>道はどこ？ Where is the road?<br>道義 どうぎ Morality"],
    ["話す","話す はなす Speak<br>話すの？ Are you going to speak?<br>話すの遅いね You're a slow talker<br>話したい？ はなしたい？ Do you want to talk?"],
    ["電話","電話 でんわ Phone<br>電話はどこ？ Where is the telephone?<br>電話するよ I'll call you"],
    ["言う","言う いう Say<br>何と言うの？ What did you say?<br>ジョシュアが「私から警察に電話をします」と言うと Joshua says, I'll call the police."],
    ["警察","警察 けいさつ Police<br>警察はどこ？ Where is the police station?<br>警察を呼んで！ けいさつをよんで！ Call the police!<br>警察は捜索を打ち切った。 けいさつはそうさくをうちきった The police called off the search"],
    ["世界","世界 せかい World<br>世界は広い せかいはひろい The world is big<br>僕のママは世界一だ！ ぼくのママはせかいいちだ！ My mom is the best in the world!"],
    ["言語","言語 げんご Language<br>言語が好きです I like languages<br>言語学 げんごがく Linguistics"],
    ["西","西 にし West<br>西に行く Going west<br>西 せい Spain<br>西欧 せいおう Western Europe<br>西洋 せいよう the West"],
    ["天","天 てん Heaven<br>天国 てんごく Heaven<br>天気 てんき Weather<br>変な天気！ へんなてんき！ What strange weather!"],
    ["気","気 き spirit/feeling<br>本気？ ほんき Seriously?<br>元気 げんき Well/Fine<br>変な天気！ へんなてんき！ What strange weather!"],
    ["週","週 しゅう Week<br>第5週 だいごしゅう the 5th week"],
    ["週間","週間 しゅうかん Week<br>5週間 ごしゅうまつ 5 weeks"],
    ["買う","買う かう Buy<br>それ買うよ I'll buy it<br>新車を買うつもり しんしゃをかうつもりだ I am going to buy a new car<br>薬は買ったの？ Did you buy the medicine?"],
    ["買い物","買い物 かいもの Shopping<br>買い物に行く Going shopping<br>毎朝買い物をします まいあさ買い物をｓじます I go shopping every morning"],
    ["読","読 よむ Read<br>何読んでるの？ なによんでるの？ What are you reading?<br>(idiom)空気読み くうきよみ Read the room"],
    ["会社","会社 かいしゃ Company<br>ジョシュアは会社にいる Is Joshua at the Office?<br>会社員です かいしゃいんです I'm an employee"],
    ["外","外 そと Outside/Exterior<br>外見て そとみて Look outside<br>外に出ろ そとにでろ Get out"],
    ["社長","社長 しゃちょう Company president<br>社長は外出中です しゃちょうはがいしゅちゅうです The president is out of office"],
    ["手","手 て Hand<br>手はどこ？ Where is your hand?<br>手、空いてる？ Are you free?"],
    ["空","空 そら Sky<br>空は青い The sky is blue<br>空耳ですよ 空耳ですよ You are hearing things.<br>空 から emptiness <br>袋は空っぽだ ふくろはからぱっだ The bag is empty.<br>手、空いてる て、あいてる Are you free?"],
    ["読書","読書 どくしょ Reading(books)<br>読書を続けた とくしょをつづけた I continued reading<br>読書が好きです どくしょがすきです I like reading books"],
    ["書く","書く かく Write<br>書くものをくれ Give me something to write on<br>彼は母親に手紙を書く かれはははおやにてがみをかく He writes letters to his mother"],
    ["語る","語る かたる talk/speak<br>夢は真実を語る ゆめはしんじつをかたる Dreams tell the truth"],
    ["語","語 ご Language<br>日本語 にほんご Japanese language<br>英語 えいご English language<br>日本語を勉強する にほんごをべんきょうする Study Japanese<br>母語は何ですか ぼごはなんですか What is your native language?<br>それって、何語？ それって、なんご？ What language is that?"],
    ["ぐらい","ぐらい approximately/about<br>何時ぐらい？ Around what time?<br>五時ぐらいだよ Around 5 o'clock<br>それは１万円ぐらい That's about 10,000 yen.<br>この市の人口は何人ぐらいですか Approximately what's the population of this city?"],
    ["多分","多分 たぶん probably/maybe<br>たぶんこれも、私の間違いよ Maybe I'm wrong about this too.<br>マルテは多分寝ている Malte is probably sleeping"],
    ["本当","本当 ほんとう truth/authentic/real<br>本当に Really?/For real?<br>本当だと思うよ I think it's true"],
    ["とても","とても Very/Exceedingly<br>とてもいいね It's very good"],
    ["だから","だから Consequently/Therefore/So<br>だから何？ So what?"],
    ["珍しい","珍しい めずらしい Rare/Unusual<br>珍しいですね It's rare, isn't it?<br>珍しいパターン It's a rare pattern."],
    ["厳しい","厳しい きびしい Strict/Relentless/Difficult<br>厳しいですね It's strict, isn't it?"],
    ["例えば","例えば たとえば For example<br>例えば、これはペンです For example, this is a pen<br>日本には美しい都市が山ほどある。たとえば京都や奈良など。 にほんにはうつくしいとしがやまほどある。たとえばきょうとやならなど。 Japan is full of beautiful cities. Kyoto and Nara, for example"],
    ["立","立 た Stand up/Erect<br>立てますか？ Can you stand up?<br>立派 りっぱ Splendid/Wonderful/Incredible"],
    ["立派","立派 りっぱ Splendid/Wonderful/Incredible<br>立派ですね It's splendid, isn't it?<br>もっと立派な人になりたい。 I want to be a better person."],
    ["悪","悪 わるい Bad/Inferior/Evil<br>目が悪いの？ めがわるいの？ Are your eyes bad?"],
    ["車","車 くるま Car<br>車が青い The car is blue<br>新車を買うつもり しんしゃをかうつもりだ I am going to buy a new car"],
    ["母","母 はは Mother<br>母は泣いていた はははないていた My mother was crying<br>お母さん おかあさん Mother<br>お母さんはどこですか おかあさんはどこですか Where's mom"],
    ["父","父 ちち Father<br>父は家にいる ちちはいえにいる My father is home<br>叔父 おじ Uncle"],
    ["男","男 おとこ Man<br>私は男だ わたしはおとこだ I am a man<br>男の子 おとこのこ Young man"],
    ["目","目 め Eye<br>目が悪いの？ めがわるいの？ Are your eyes bad?"],
    ["自転車","自転車 じてんしゃ Bicycle<br>自転車はどこですか Where is your bicycle?<br>この自転車いつ買ったの？ このじてんしゃいつかったの？ When did you buy this bicycle?"],
    ["象","象 ぞう Elephant<br>象は肉を食べない ぞうはにくをたべない Elephants don't eat meat<br>象は草食動物です ぞうはそうしょくどうぶつです Elephants are herbivores<br>象は陸上の動物の中で最も大きい ぞうはりくじょうのどうぶつのなかでもっともおおきい Elephants are the largest land animals"],
    ["足","足 あし Foot/Leg<br>足が痛い あしがいたい My foot hurts"],
    ["足りる","足りる たりる Enough/Sufficient<br>足りない たりない Not enough"],
    ["満足","満足 まんぞく Satisfied/Content<br>満足です I'm satisfied/That hit the spot<br>結果には満足だった？ けっかにはまんぞくだった？ Were you satisfied with the results?"],
    ["人","人 ひと Person<br>いけない人 いけないひと Failure<br>あの人誰？ あのひとだれ？ Who is that person?<br>新人です しんじんです I'm a newcomer"],
    ["人口","人口 じんこう Population<br>人口は、５６８人です The population is 568<br>(counter)人 -にん -people"],
    ["ご飯","ご飯 ごはん Cooked Rice / Meal<br>ご飯にする？ Do you want rice/a meal?<br>朝ご飯は何？ What's for breakfast?"],
    ["魚","魚 さかな Fish<br>魚を食べる I eat fish<br>生の魚はありますか？ なまのさかなはありますか？ Do you have raw fish?"],
    ["鳥","鳥 とり Bird<br>鳥が飛んでいる A bird is flying<br>一石二鳥 いっせきにちょう (idiom)Kill two birds with one stone"],
    ["飲み物","飲み物 のみもの (noun)Drink<br>何か飲み物はいかが？ Would you like something to drink?"],
    ["花","花 はな Flower<br>きれいな花ね! What beautiful flowers!<br>花火を見た？ はなびをみるた？ Did you see the fireworks?<br>(idiom)言わぬが花 いわぬがはな Speech is silver, silence is golden"],
    ["月","月 つき Moon<br>月が出た つきがでた The moon is out<br>月曜日 げつようび Monday"],
    ["月曜日","月曜日 げつようび Monday<br>月曜日に行く Going on Monday<br>月曜日は、店を開けません げつようびは、みせをあけません We're not open on Mondays"],
    ["山","山 やま Mountain<br>山の多い国です。It's a very mountainous country.<br>富士山は美しい ふじさんはうつくしょい Mount Fuji is beautiful"],
    ["猫","猫 ねこ Cat<br>猫がいる ねこがいる There is a cat"],
    ["犬","犬 いぬ Dog<br>犬を見た いぬをみた I saw a dog<br>犬に食べ物をあげないでね いぬにたべものをあげないでね Don't feed the dog"],
    ["牛","牛 うし Cow<br>牛肉 ぎゅうにく Beef<br>牛乳 ぎゅうにゅう Milk"],
    ["牛乳","牛乳 ぎゅうにゅう Milk<br>牛乳はどこ？ Where is the milk?<br>牛乳が腐った ぎゅうにゅうがくさった The milk has gone bad<br>牛乳が買いたいの？ ぎゅうにゅうがかいたいの？ Do you want to buy some milk?"],
    ["果物","果物 くだもの Fruit<br>好きな果物は？ すきなくだものは？ What's your favorite fruit?<br>果物をご遠慮なく くだものをごえんりょなく Help yourself to the fruit<br>カリフォルニアは果物で有名です カリフォルニアはくだものでゆうめいです California is famous for its fruit"],
    ["雪","雪 ゆき Snow<br>雪が降っている ゆきがふっている It's snowing"],
    ["居る","居る いる To be/To exist (animate objects)<br>犬がいる いぬがいる There is a dog<br>いるの？ Are you there?<br>あいつら、ここに居るの？ Are they here?<br>誰かいる？ だれかいる？ Is anyone there?"],
    ["有る","有る ある To be/To exist<br>お金ある？ おかねある？ Do you have money?<br>あるの？ Is it there?<br>時間ある？ じかんある？ Do you have time?<br>話す時間ある？ はなすじかんある？ Do you have time to talk?"],
    ["成る","成る なる to become/to end up<br>なるほど I see/I understand<br>何になりたい？ What do you want to become?<br>何とかなるよね We'll figure something out"],
    ["なるほど","なるほど I see/I understand<brなるほど、これがマルメか I see so this is Malmö"],
    ["です","です be/is<br>そうです！ That's right!<br>名前はジョシュアです なまえはジョシュアです My name is Joshua<br>何ですか なんですか What is it?<br>以上ですか いじょうですか Is that all?<br>２８歳です にじゅうはさいです I am 28 years old"],
    ["以上","以上 いじょう more than/above<br>以上ですか いじょうですか Is that all?<br>1年以上 いちねんいじょう More than a year"],
    ["為る","為る する to do/to cause<br>どうする？ What will you do?<br>頭痛がする ずつうがする I have a headache<br>気にするなよ Don't worry about it<br>何するつもり What do you plan to do?"],
    ["難しい","難しい むずかしい Difficult<br>難しいですね It's difficult, isn't it?<br>チェスは難しい Chess is difficult<br>国語は難しいですか？ こくごはむずかしいですか？ Is Japanese difficult?"],
    ["簡単な","簡単な かんたんな Easy/Simple<br>簡単な質問 かんたんなしつもん Easy question"],
    ["楽しい","楽しい たのしい Fun<br>人生は楽しい じんせいはたのしい Life is fun<br>きっと楽しいと思うよ きっとたのしいとおもうよ I think it will be fun"],
    ["ブドウ","ブドウ Grape<br>ブドウは好き？ Do you like grapes?<br>あのブドウは酸っぱいよ あのブドウはすっぱいよ The grapes are sour"],
    [ "ほうれん草","ほうれん草 ほうれんそう Spinach<br>ほうれん草は好き？ Do you like spinach?<br>子供はほうれん草が嫌いなことが多い こどもはほうれんそうがきらいなことがおおい Children often dislike spinach"],
    ["じゃがいも","じゃがいも Potato<br>じゃがいもはあたたかいままです The potatoes are still warm<br>じゃがいもの皮を剥いて じゃがいものかわをむいて Peel the potatoes"],
    ["大根","大根 だいこん Radish<br>韓国大根は高いです かんこくだいこんはたかいです Korean radishes are expensive"],
    ["レタス","レタス Lettuce<br>彼はレタスを洗います かれはレタスをあらいます He washes the lettuce<br>キャベツとレタスって何が違うの？ キャベツとレタスってなにがちがうの？ What's the difference between cabbage and lettuce?<br>犬にレタスを食べさせても大丈夫でしょうか？ いぬにレタスをたべさせてもだいじょうぶでしょうか？ Is it OK to feed my dog lettuce?"],
    ["キャベツ","キャベツ Cabbage<br>キャベツは好き？ Do you like cabbage?<br>塩漬けキャベツを細かく切る しおづけキャベツをこまかくきる Chop the pickled cabbage finely<br>キャベツとレタスって何が違うの？ キャベツとレタスってなにがちがうの？ What's the difference between cabbage and lettuce?"],
    ["パイン","パイン Pineapple<br>パインはちょっと高いです パインはちょっとたかいです Pineapples are a bit expensive"],
    ["りんご","りんご Apple<br>りんごは好き？ Do you like apples?<br>このりんごは甘い このりんごはあまい This apple is sweet"],
    ["甘い","甘い あまい Sweet<br>甘いですね It's sweet, isn't it?<br>このりんごは甘い このりんごはあまい This apple is sweet<br>甘いものが好き あまいものがすき I like sweet things"],
    ["ミカン","ミカン Orange<br>ミカンは、ビタミンが豊富です ミカンは、ビタミンがほうふです Oranges are rich in vitamins"],
    ["ピーマン","ピーマン Bell pepper<br>ピーマンが大嫌い ぴーまんがだいきらい I hate bell peppers<br>お弁当にピーマンは入れないでね おべんとうにぴーまんはいれないでね Don't put bell peppers in my bento"],
    ["人参","人参 にんじん Carrot<br>ウサギが人参を食べてるよ うさぎがにんじんをたべてるよ The rabbit is eating a carrot"],
    ["ナス" ,"ナス Eggplant<br> ナスは好き？ Do you like eggplant?<br>ナスは嫌い なすはきらい I don't like eggplant<br> ナスは、ビタミンが豊富です ナスは、ビタミンがほうふです Eggplants are rich in vitamins"],
    ["いちご","いちご Strawberry<br>苺を持ってきたよ いちごをもってきたよ I brought strawberries"],
    ["明るい","明るい あかるい Bright<br>すごく明るい すごくあかるい It's very bright<br>月は明るい つきはあかるい The moon is bright"],
    ["暗い","暗い くらい Dark<br>外は暗い そとはくらい It's dark outside<br>暗い部屋の中を懐中電灯で照らした。 くらいへやのなかをかいちゅうでんとうでてらした I shone a flashlight around the dark room"],
    ["部屋","部屋 へや Room<br>部屋が暑い へやがあつい The room is hot<br>部屋が寒い へやがさむい The room is cold<br>部屋を片づけて へやをかたづけて Clean your room"],
    ["綺麗","綺麗 きれい Beautiful/Clean<br>綺麗じゃない？ きれいじゃない？ Isn't it beautiful?<br>綺麗な鳥を見たんだよ きれいなとりをみたんだよ I saw a beautiful bird<br>このモップで床を綺麗にしてください このモップでゆかをきれいにしてください Please clean the floor with this mop"],
    ["広い","広い ひろい Wide/Spacious<br>広い部屋 ひろいへや A spacious room<br>広い道 ひろいみち A wide road<br>広い心 ひろいこころ A generous heart"],
    ["重い","重い おもい Heavy/Important<br>頭が重い あたまがおもい My head feels heavy<br>この本は重い このほんはおもい This book is heavy"],
    ["軽い","軽い かるい Light/Unimportant<br>この椅子は軽い このいすはかるい This chair is light<br>軽い食事 かるいしょくじ Light meal<br>症状は軽いですよ しょうじょうはかるいですよ The symptoms are mild"],
    ["前","前 まえ Front/Before<br>前に行く Going forward<br>前に戻る Going back<br>前に進む Going forward<br>前に進め！ まえにすすめ！ Go forward!<br>お名前は？ おなまえは？ What's your name?<br>当たり前だ あたりまえだ Of course<br>11時半前だ じゅういちじはんまえだ It's nearly 11:30<br>店の前で待っててください みせのまえでまっててください Please wait by the front of the store"],
    ["後","後 あと After/Later<br>また後で See you later<br>後で電話して あとででんわして Call me later<br>後で決めます あとできめます I'll decide later"],
    ["後ろ","後ろ うしろ back/rear<br>後ろを見ろ うしろをみろ Look behind you<br>彼の後ろにいる かれのうしろにいる I'm behind him"],
    ["先","先 さき Ahead/First/Before<br>どうぞ、お先に！ どうぞ、おさきに！ Go ahead!<br>私が先に行きます わたしがさきにいきます I'll go first"],
    ["食べ物","食べ物 たべもの Food<br>食べ物はどこ？ Where is the food?<br>好きな食べ物は？ すきなたべものは？ What's your favorite food?<br>犬に食べ物をあげないでね いぬにたべものをあげないでね Don't feed the dog"],
    ["一番","一番 いちばん Number one/Best<br>一番になりたい いちばんになりたい I want to be number one<br>一番好きな食べ物は？ いちばんすきなたべものは？ What's your favorite food?"],
    ["二番","二番 にばん Number two/Second<br>二番目 にばんめ Second<br>二番目に好きな食べ物は？ にばんめにすきなたべものは？ What's your second favorite food?"],
    ["三番","三番 さんばん Number three/Third<br>三番目 さんばんめ Third<br>三番目に好きな食べ物は？ さんばんめにすきなたべものは？ What's your third favorite food?"],
    ["一つ","一つ ひとつ one/one thing<br>一つは青 ひとつはあお One is blue<br>一つの問題 ひとつのもんだい One problem<br>一つ選んで ひとつえらんで Choose one"],
    ["二つ","二つ ふたつ two/two things<br>二つは赤 ふたつはあか Two are red<br>二つの問題 ふたつのもんだい Two problems<br>二つ選んで ふたつえらんで Choose two"],
    ["三つ","三つ みっつ three/three things<br>三つは黄色 みっつはきいろ Three are yellow<br>三つの問題 みっつのもんだい Three problems<br>三つ選んで みっつえらんで Choose three"],
    ["四つ","四つ よっつ four/four things<br>四つは緑 よっつはみどり Four are green<br>四つの問題 よっつのもんだい Four problems<br>四つ選んで よっつえらんで Choose four"],
    ["五つ","五つ いつつ five/five things<br>五つは紫 いつつはむらさき Five are purple<br>五つの問題 いつつのもんだい Five problems<br>五つ選んで いつつえらんで Choose five"],
    ["六つ","六つ むっつ six/six things<br>六つは黒 むっつはくろ Six are black<br>六つの問題 むっつのもんだい Six problems<br>六つ選んで むっつえらんで Choose six"],
    ["七つ","七つ ななつ seven/seven things<br>七つは白 ななつはしろ Seven are white<br>七つの問題 ななつのもんだい Seven problems<br>七つ選んで ななつえらんで Choose seven"],
    ["八つ","八つ やっつ eight/eight things<br>八つはピンク やっつはピンク Eight are pink<br>八つの問題 やっつのもんだい Eight problems<br>八つ選んで やっつえらんで Choose eight"],
    ["九つ","九つ ここのつ nine/nine things<br>九つはオレンジ ここのつはオレンジ Nine are orange<br>九つの問題 ここのつのもんだい Nine problems<br>九つ選んで ここのつえらんで Choose nine"],
    ["十","十 とお ten/ten things<br>十は茶色 とおはちゃいろ Ten are brown<br>十の問題 とおのもんだい Ten problems<br>十選んで とおえらんで Choose ten"],
    ["いくつ","いくつ how many/how old<br>いくつある？ How many are there?<br>いくつですか？ How old are you?"],
    ["一本","一本 いっぽん one long thing<br>一本の鉛筆 いっぽんのえんぴつ One pencil<br>一本の線 いっぽんのせん One line<br>ワインを一本ください ワインをいっぽんください One bottle of wine please"],
    ["庭","庭 にわ Garden<br>庭から行きます にわからいきます I am coming from the garden<br>庭に水をまこう にわにみずをまこう <br>私たちの庭には二本の木がある わたしたちのにわにはにほんのきがある There are two trees in our garden"],
    ["二本","二本 にほん two long things<br>二本の鉛筆 にほんのえんぴつ Two pencils<br>二本の線 にほんのせん Two lines<br>私たちの庭には二本の木がある わたしたちのにわにはにほんのきがある There are two trees in our garden"],
    ["三本","三本 さんぼん three long things<br>三本の鉛筆 さんぼんのえんぴつ Three pencils<br>三本の線 さんぼんのせん Three lines<br>ビールを三本飲んだ ビールをさんぼんのんだ He drank three beers"],
    ["四本","四本 よんほん four long things<br>四本の鉛筆 よんほんのえんぴつ Four pencils<br>四本の線 よんほんのせん Four lines<br>四本の足 よんほんのあし Four legs"],
    ["五本","五本 ごほん five long things<br>五本の鉛筆 ごほんのえんぴつ Five pencils<br>五本の線 ごほんのせん Five lines<br>ここに五本の鉛筆がある ここにごほんのえんぴつがある There are five pencils here"],
    ["六本","六本 ろっぽん six long things<br>六本の鉛筆 ろっぽんのえんぴつ Six pencils<br>六本の線 ろっぽんのせん Six lines<br>赤いバラを六本と白いバラを八本ください。 あかいバラをろっぽんとしろいバラをはっぽんください。 Six red roses and eight white roses please."],
    ["七本","七本 ななほん seven long things<br>七本の鉛筆 ななほんのえんぴつ Seven pencils<br>七本の線 ななほんのせん Seven lines<br>スーパーに行ったら、油七本買っといて。 スーパーにいったら、あぶらななほんかっといて。 When you go to the supermarket, buy seven bottles of oil."],
    ["八本","八本 はっぽん eight long things<br>八本の鉛筆 はっぽんのえんぴつ Eight pencils<br>八本の線 はっぽんのせん Eight lines<br>赤いバラを六本と白いバラを八本ください。 あかいバラをろっぽんとしろいバラをはっぽんください。 Six red roses and eight white roses please."],
    ["九本","九本 きゅうほん nine long things<br>九本の鉛筆 きゅうほんのえんぴつ Nine pencils<br>九本の線 きゅうほんのせん Nine lines<br>京極を除いて縦横九本ずつの大路が通っていた きょうごくをのぞいてじゅうおうきゅうほんずつのおおじがとおっていた There were nine streets vertically and horizontally respectively, except in Kyogoku. "],
    ["十本","十本 じゅっぽん ten long things<br>十本の鉛筆 じゅっぽんのえんぴつ Ten pencils<br>十本の線 じゅっぽんのせん Ten lines<br>私は君より十本多くペンを持っている わたしはきみよりじゅっぽんおおくぺんをもっている I have ten more pens than you"],
    ["百本","百本 ひゃっぽん one hundred long things<br>百本の鉛筆 ひゃっぽんのえんぴつ One hundred pencils<br>百本の線 ひゃっぽんのせん One hundred lines<br>一日に数百本もの木を植えました いちにちにすうひゃくほんものきをうえました I planted a hundred trees in a day"],
    ["千本","千本 せんぼん one thousand long things<br>千本の鉛筆 せんぼんのえんぴつ One thousand pencils<br>千本の線 せんぼんのせん One thousand lines<br>その工場は毎月何千本もの瓶を製造している そのこうじょうはまいつきなんせんぼんものびんをせいぞうしている The factory produces thousands of bottles every month"],
    ["抜く","抜く ぬく to pull out/to extract<br>歯を抜く はをぬく Pull out a tooth"],
    ["歯","歯 は Tooth<br>歯が痛い はがいたい My tooth hurts<br>歯が抜けた はがぬけた My tooth fell out<br>歯を磨いたの？ はをみがいたの？ Did you brush your teeth?"],
    ["何本","何本 なんぼん how many long things<br>何本ある？ How many are there?<br>馬の歯って、何本なの？ うまのはって、なんぼんなの？ How many teeth does a horse have?"],
    ["着る","着る きる to wear<br>何を着る？ なにをきる？ What will you wear?<br>着る物がないの きるものがないの I have nothing to wear<br>冬にはコートを着るんだよ ふゆにはコートをきるんだよ I wear a overcoat in winter"],
    ["消える","消える きえる to disappear/to go out<br>電気が消えた でんきがきえた The lights went out<br>消えている きえている It's gone"],
    ["電気","電気 でんき Electricity<br>電気消して でんきけして Turn off the lights<br>居間の電気は消したの？ いまのでんきはけしたの？ Did you turn off the living room lights?"],
    ["開ける","開ける あける to open<br>開けて あけて Open it<br>開けてください あけてください Please open it"],
    ["弾く","弾く ひく to play (piano/guitar)<br>ギターを弾く ギターをひく Play the guitar<br>ピアノを弾く ピアノをひく Play the piano"],
    ["乗る","乗る のる to ride/to board<br>乗って 乗って Get on<br>乗ってください のってください Please get on"],
    ["良く","良く よく often/well<br>よく行く  よくいく I often go<br>よく食べる よくたべる I often eat<br>良くなりました よくなりました I'm better now<br>傘が良く売れる かさがよくうれる Umbrellas sell well"],
    ["良い","良い よい good<br>良いですね It's good, isn't it?<br>良い一日を よいいちにちを Have a good day<br>良い質問です いいしつもんです That's a good question"],
    ["口","口 くち mouth<br>口が渇いた くちがかわいた I'm thirsty<br>口が臭い くちがくさい I have bad breath"],
    ["お風呂","お風呂 おふろ Bath<br>お風呂に入る おふろにはいる Take a bath<br>お風呂空いてるよ おふろあいてるよ Bath is free"],
    ["入る","入る はいる to enter/to go in<br>入って はいって Enter<br>入ってください はいってください Please enter<br>お風呂に入る おふろにはいる Take a bath"],
    ["愛","愛 あい Love<br>愛してるよ あいしてるよ I love you<br>これが愛なのか？ これがあいなのか？ Is this love?<br>愛とは嘘である あいとはうそである Love is a lie"],
    ["したい","したい want to<br>何がしたい？ なにがしたい？ What do you want to do?<br>話したい？ はなしたい？ Do you want to talk?<br>もっと貢献したい もっとこうけんしたい I want to contribute more"],
    ["質問","質問 しつもん Question<br>質問がある しつもんがある I have a question<br>質問していい？ しつもんしていい？ Can I ask a question?<br>良い質問です いいしつもんです That's a good question"],
    ["答える","答える こたえる to answer<br>質問に答えることを拒否する しつもんにこたえることをきょひする I refuse to answer the question."],
    ["お店","お店 おみせ Store<br>お店はいつ開くの？ おみせはいつひらくの？ When does the store open?<br>お店では買えないよ おみせではかえないよ You can't buy these from a shop"],
    ["頭","頭 あたま Head<br>頭が痛い あたまがいたい I have a headache<br>頭が良い あたまがいい Smart"],
    ["歩く","歩く あるく to walk<br>歩いて あるいて Walk<br>歩いてください あるいてください Please walk"],
    ["医者","医者 いしゃ Doctor<br>医者に行く いしゃにいく Go to the doctor"],
    ["椅子","椅子 いす Chair<br>椅子に座る いすにすわる Sit on the chair<br>この椅子は軽い このいすはかるい This chair is light<br>椅子の下にあります いすのしたにあります It's under the chair"],
    ["いつも","いつも always<br>いつもありがとう Thank you always<br>いつも一緒 いつもいっしょ Always together"],
    ["色々","色々 いろいろ various<br>色々な人 いろいろなひと Various people<br>色々な食べ物 いろいろなたべもの Various foods"],
    ["歌","歌 うた Song<br>歌を歌う うたをうたう Sing a song<br>鳥は歌います とりはうたいます The birds are singing<br>子守唄を歌って こもりうたをうたって Sing me a lullaby"],
    ["歌う","歌う うたう to sing<br>歌って うたって Sing<br>歌ってください うたってください Please sing"],
    ["上","上 うえ Up/Above<br>上に行く うえにいく Go up<br>上にある うえにある It's above<br>上の名前は何？うえのなまえなに？ What is your last name?"],
    ["映画","映画 えいが Movie<br>映画を見る えいがをみる Watch a movie<br>好きな映画は何？ すきなえいがはなに？ What are your favorite movies?<br>この映画はヒドイ！ このえいがはヒドイ！ This movie is terrible!"],
    ["円","円 えん Yen/Circle<br>円を描く えんをかく Draw a circle<br>円を書く えんをかく Draw a circle"],
    ["左","左 ひだり Left<br>左に行く ひだりにいく Go left<br>左折して させつして Turn left<br>左足が痛みます ひだりあしはいたみます My left foot hurts"],
    ["右","右 みぎ Right<br>右に行く みぎにいく Go right<br>右折して うせつして Turn right<br>右足が痛みます みぎあしはいたみます My right foot hurts"],
    ["賛成","賛成 さんせい I agree<br>大賛成です だいさんせいです I completely agree<br>みんな君に賛成だ よみんなきみにさんせいだ Everyone agrees with you"],
    ["こちらこそ","こちらこそ My pleasure/Nice to meet you too<br>こちらこそ、私もお会いできてよかったです こちらこそ、わたしもおあいできてよかったです Likewise, it was nice to meet you."],
    ["ご苦労様","ご苦労様 ごくろうさま Thank you for your hard work<br>ご苦労様でした ごくろうさまでした Thank you for your hard work"],
    ["信じられない","信じられない しんじられない I can't believe it<br>もう誰も信じられない もうだれもしんじられない I can't trust anyone anymore"],
    ["先ず","先ず まず First of all<br>先ずは、お試しを まずは、おためしを First of all, try it out<br>先ず香港に行って、それからシンガポールに行きます まず香港に行って、それからシンガポールに行きます First I'll go to Hong Kong, then I'll go to Singapore"],
    ["最初","最初 さいしょ First<br>最初に行く さいしょにいく Go first<br>最初にこれをして さいしょにこれをして<br>彼が最初に来た かれがさいしょにきた He was the first to come<br>最初から始めよう。 さいしょからはじめよう Let's start from the beginning."],
    ["初めに","初めに はじめに First of all<br>初めに、お試しを はじめに、おためしを First of all, try it out"],
    ["先に","先に さきに Before/First of all<br>どうぞ、お先に！ どうぞ、おさきに！ Go ahead!<br>私が先に行きます わたしがさきにいきます I'll go first"],
    ["直ぐに","直ぐに すぐに Immediately/First thing<br>直ぐに行く すぐにいく Go immediately<br>すぐに戻ります すぐにもどります I'll be right back"],
    ["次に","次に つぎに Next<br>次に行く つぎにいく Go next<br>次に来た人 つぎにきたひと The next person to come"],
    ["その後","その後 そのあと After that/Thereafter<br>その後どうなるの？ そのあとどうなるの？ What happens after that?<br>その後、何があった？ そのあと、なにがあった？ What happened after that?<br>その後から、見方が変わりました そのあとから、みかたがかわりました My perspective has changed since then"],
    ["其れから","其れから それから After that/And then<br>それから10年が経った それから10ねんがたった 10 years have passed since then<br>それからドアを開けて外に出ました それからドアをあけてそとにでました Then I opened the door and went outside"],
    ["而して","而して しかして And/And then/thus<br>而して、何があった？ しかして、なにがあった？ And then what happened?<br>そして、先生なんですよね そして、せんせいなんですよね And you're a teacher, right?"],
    ["続いて","続いて つづいて Subsequently/after<br>続いてキャンセルするチケットを選択します つづいてキャンセルするチケットをせんたくします Next, select the ticket you want to cancel<br>わたしに続いて読みなさい わたしにつづいてよみなさい Read after me"],
    ["最後","最後 さいご End/Last<br>最後に質問があります さいごにしっもんがあります I have one last question<br>(idiom)最後に笑う者が最もよく笑う さいごにわらうものがもっともよくわらう He who laughs last laughs best"],
    ["便利","便利 べんり Convenient<br>それ、とても便利よ それ、とてもべんりよ That's very convenient<br>車は高いですが、便利です くるまはたかいですが、べんりです Cars are expensive but convenient"],
    ["帽子","帽子 ぼうし Hat<br>君の帽子はどれ？ きみのぼうしはどれ？ Which one is your hat?<br>帽子、返して ぼうし、かえして Give me back my hat<br>彼は帽子を買った。 かれはぼうしをかった He bought a hat"],
    ["病院","病院 びょういん Hospital<br>病院に行けよ びょういんにいけよ Go to the hospital<br>病院は何処ですか？ びょういんはどこですか？ Where is the hospital?"],
    ["病気","病気 びょうき Illness<br>病気です びょうきです I'm sick<br>彼らは病気だ かれらはびょうきだ They are sick<br>何の病気ですか なんのびょうきですか What illness do I have?"],
    ["文章","文章 ぶんしょう Sentence<br>文章を書く ぶんしょうをかく Write a sentence<br>この文章は正しいでしょうか？ このぶんしょうはただしいでしょうか？ Is this sentence correct?<br>この文章を訳す気にならない このぶんしょうをやくすきにならない I don't feel like translating this sentence"],
    ["短い","短い みじかい Short<br>短い文章 みじかいぶんしょう Short sentence<br>短い髪 みじかいかみ Short hair<br>人生は短い じんせいはみじかい Life is short"],
    ["人生","人生 じんせい Life<br>人生は短い じんせいはみじかい Life is short<br>(idiom)人生山あり谷あり じんせいやまありたにあり Life has its ups and downs"],
    ["もしもし","もしもし Hello (on the phone)<br>もしもし、誰ですか？ もしもし、だれですか？ Hello, who is this?"],
    ["勿論","勿論 もちろん Of course<br>勿論、そうだ もちろん、そうだ Of course, that's right"],
    ["料理","料理 りょうり Cooking<br>料理は得意？ りょうりはとくい？ Are you good at cooking?<br>料理を作る りょうりをつくる Make a dish<br>タイの料理はどう？ タイのりょうりはどう？ How about Thai food?"],
    ["旅行","旅行 りょこう Travel<br>旅行は好き？ りょこうはすき？ Do you like to travel?<br>よいご旅行を よいごりょこうを Have a good trip"],
    ["練習","練習 れんしゅう Practice<br>練習してください れんしゅうしてください Please practice<br>練習は熟達の道  れんしゅうはじゅくたつのみち Practice makes perfect<br>彼は毎日家で練習した かれはまいにちいえでれんしゅうした He practiced at home every day"],
    ["彼","彼 かれ He/Boyfriend<br>彼は日本人です かれはにほんじんです He is Japanese<br>彼は日本語を話せます かれはにほんごをはなせます He can speak Japanese"],
    ["若い","若い わかい Young<br>若いなあ わかいなあ You're young<br>あの若い彼は誰？ あのわかいかれはだれ？ Who is that young guy?"],
    ["分かる","分かる わかる to understand/to know<br>今何時か分かる？ いまなんじかわかる？ Do you know what time it is?<br>何の日か分かる？ なんのひかわかる？ Do you know what day it is?<br>気持ち分かるよ きもちわかるよ I know how you feel"],
    ["忘れる","忘れる わすれる to forget<br>それを忘れる それをわすれる Forget about it<br>薬、飲み忘れるなよ くすり、のみわすれるなよ Don't forget to take your medicine"],
    ["薬","薬 くすり Medicine<br>お薬飲んだ？ おくすりのんだ？ Did you take your medicine?<br>薬が効いた くすりがきいた The medicine worked<br>薬は買ったの？ くすりはかったの？ Did you buy the medicine?"],
    ["夏","夏 なつ Summer<br>夏が好き なつがすき I like summer<br>夏は暑い なつはあつい Summer is hot<br>夏はどうだった？ なつはどうだった？ How was your summer?"],
    ["夏休み","夏休み なつやすみ Summer vacation<br>夏休みは何をするの？ なつやすみはなにをするの？ What are you doing for summer vacation?<br>夏休みはどうだった？ なつやすみはどうだった？ How was your summer vacation?<br>夏休みはスウェーデンへ行った なつやすみスウェーデンリへいった I went to Sweden for summer vacation"],
    ["習う","習う ならう to learn<br>趣味は言語を習う しゅみはげんごをならう My hobby is learning languages<br>(idiom)習うより慣れろ ならうよりなれろ Practice makes perfect"],
    ["名前","名前 なまえ Name<br>名前は何？ なまえはなに？ What's your name?<br>名前を書く なまえをかく Write your name"],
    ["お肉","お肉 おにく Meat<br>お肉は冷凍だよ おにくはれいとうだよ The meat is frozen<br>お肉が安いんです おにくがやすいんです The meat is cheap"],
    ["脱ぐ","脱ぐ ぬぐ to take off (clothes)<br>日本では家に上がるとき、靴を脱ぐことになっています にほんではいえにあがるとき、くつをぬぐことになっています In Japan, it is customary to take off your shoes when entering a house"],
    ["寝る","寝る ねる to sleep<br>寝るぞ ねるぞ I'm going to sleep<br>犬が寝る いぬがねる The dog is sleep<br>寝るなよ ねるなよ Stay awake"],
    ["登る","登る のぼる to climb<br>猿は木に登る さるはきにのぼる Monkeys climb trees<br>山に登る やまにのぼる Climb a mountain<br>ケブネカイセに登るつもりです ケブネカイセにのぼるつもりです I'm going to climb Kebnekaise"],
    ["箸","箸 はし Chopsticks<br>お箸が苦手なの おはしがにがてなの I'm not good at using chopsticks<br>箸で寿司を食べます はしですしをたべます I eat sushi with chopsticks"],
    ["走る","走る はしる to run<br>彼は速く走る かれははやくはしる He runs fast<br>走るのはやめろ！ はしるのはやめろ！ Stop running!<br>走ると心拍数が上がります はしるとしんぱくすうがあがります Your heart rate increases when you run"],
    ["飛行機","飛行機 ひこうき Airplane<br>飛行機が見えた ひこうきがみえた I saw an airplane<br>飛行機は離陸間際だ ひこうきはりりくかんさいだ The plane is about to take off"],
    ["地下鉄","地下鉄 ちかてつ Subway<br>地下鉄に乗ろう ちかてつにのろう Let's take the subway<br>ストックホルムに地下鉄がある ストックホルムにちかてつがある There is a subway in Stockholm<br>地下鉄の地図をもらえますか ちかてつのちずをもらえますか Can I have a subway map?"],
    ["空港","空港 くうこう Airport<br>今空港にいます いまくうこうにいます I'm at the airport now<br>空港に送ってくれませんか くうこうにおくってくれませんか Can you take me to the airport?"],
    ["信号","信号 しんごう Traffic light<br>信号が赤だ しんごうがあかだ The light is red<br>その信号を右ね そのしんごうをみぎね Turn right at that light<br>赤信号で止まりましたか あかしんごうでとまりましたか Did you stop at the red light?"],
    ["交差点","交差点 こうさてん Intersection<br>この交差点の名前は何でしょう？ このこうさてんのなまえはなんでしょう？ What is the name of this intersection?<br>交差点で事故があった こうさてんでじこがあった There was an accident at the intersection"],
    ["店員","店員 てんいん Shop assistant<br>彼女はスーパーマーケットの店員である かのじょはスーパーマーケットのてんいんである She is a shop assistant at a supermarket<br>店員さん、もう一杯ビールを持ってきてください てんいんさん、もういっぱいビールをもってきてください Waiter, another beer please"],
    ["野菜","野菜 やさい Vegetable<br>野菜を食べたら？ やさいをたべたら？ Why aren't you eating your vegetables?<br>茄子は野菜よ なすはやさいよ Eggplants are vegetables<br>どんな野菜が好き？ どんなやさいがすき？ What kind of vegetables do you like?"],
    ["試験","試験 しけん Exam<br>来週は試験だ らいしゅうはしけんだ I have an exam next week<br>試験はどうだった？ しけんはどうだった？ How was the exam?<br>試験頑張ってね しけんがんばって Good luck on your exam"],
    ["宿題","宿題 しゅくだい Homework<br>宿題しなきゃ しゅくだいしなきゃ I have to do my homework<br>宿題が大嫌い しゅくだいがだいきらい I hate homework"],
    ["技術者","技術者 ぎじゅつしゃ Engineer<br>技術者になりたい ぎじゅつしゃになりたい I want to be an engineer<br>技術者は何をするの？ ぎじゅつしゃはなにをするの？ What does an engineer do?<br>その委員会は科学者と技術者からなる そのいいんかいはかがくしゃとぎじゅつしゃからなる The committee consists of scientists and engineers"],
    ["料理人","料理人 りょうりにん Cook<br>料理人になりたい りょうりにんになりたい I want to be a cook<br>料理人が鶏肉をバーべキューしています りょうりにんがとりにくをばーべきゅーしています The cook is barbecuing chicken<br>(idiom)料理人多くしてスープしょっぱくなる りょうりにんおおくしてすーぷしょっぱくなる Too many cooks spoil the broth"],
    ["医師","医師 いし Doctor<br>医師に行く いしにいく Go to the doctor<br>私は医師です わたしはいしです I'm a doctor<br>私は医師に少し質問した わたしはいしにすこししつもんした I asked the doctor a few questions"],
    ["看護師","看護師 かんごし Nurse<br>彼女は看護師です かのじょはかんごしです She is a nurse<br>看護師になろうと思ったことある？ かんごしになろうとおもったことある？ Have you ever thought about becoming a nurse?"],
    ["弁護士","弁護士 べんごし Lawyer<br>弁護士になりたい べんごしになりたい I want to be a lawyer<br>母は弁護士です はははべんごしです My mother is a lawyer<br>弁護士はみんな嘘つきだ べんごしはみんなうそつきだ All lawyers are liars"],
    ["祖母","祖母 そぼ Grandmother<br>祖母に育てられた そぼにそだてられた I was raised by my grandmother<br>祖母は元気ですか そぼはげんきですか How is your grandmother?"],
    ["祖父","祖父 そふ Grandfather<br>彼は祖父似だ かれはそふにだ He looks like his grandfather<br>祖父は非常に健康だ そふはひじょうにけんこうだ My grandfather is very healthy"],
    ["親","親 おや Parent<br>親には見せたの？ おやにはみせたの？ Did you show it to your parents?<br>両親が離婚した りょうしんがりこんした My parents got divorced"],
    ["腹","腹 はら Belly<br>お腹一杯 おなかいっぱい I'm full<br>お腹が空いた おなかがすいた I'm hungry<br>お腹が痛い おなかがいたい My stomach hurts"],
    ["お腹","お腹 おなか Belly<br>お腹一杯 おなかいっぱい I'm full<br>お腹が空いた おなかがすいた I'm hungry<br>お腹が痛い おなかがいたい My stomach hurts"],
    ["顔","顔 かお Face<br>顔でかーい かおでかーい You have a big face<br>顔赤いよ かおあかいよ Your face is red<br>顔が青いよ かおがあおいよ You look pale"],
    ["働く","働く はたらく to work<br>システムアドミニストレータとして働いています システムアドミニストレータとしてはたらいています I work as a system administrator<br>彼女はよく働く かのじょはよくはたらく She works hard<br>働くしかない はたらくしかない I have to work"],
    ["相撲","相撲 すもう Sumo wrestling<br>相撲を見たことがありますか すもうをみたことがありますか Have you ever seen sumo wrestling?<br>腕相撲 うでずもう Arm wrestling<br>指相撲 ゆびずもう Thumb wrestling"],
    ["野球","野球 やきゅう Baseball<br>野球は得意？ やきゅうはとくい？ Are you good at baseball?<br>今でも野球は得意？ いまでもやきゅうはとくい？ Are you still good at baseball?<br>野球をしよう！ やきゅうをしよう！ Let's play baseball!"],
    ["空手","空手 からて Karate<br>空手をしよう！ からてをしよう！ Let's do karate!<br>趣味は空手 しゅみはからて My hobby is karate"],
    ["卓球","卓球 たっきゅう Table tennis<br>卓球をしよう！ たっきゅうをしよう！ Let's play table tennis!<br>卓球は得意？ たっきゅうはとくい？ Are you good at table tennis?<br>ピンポンは卓球とも呼ばれている ピンポンはたっきゅうともよばれている Ping pong is also called table tennis"],
    ["登山","登山 とざん Mountain climbing<br>登山をしよう！ とざんをしよう！ Let's go mountain climbing!<br>登山は得意？ とざんはとくい？ Are you good at mountain climbing?<br>登山靴を買ったよ とざんぐつをかったよ I bought mountain climbing shoes"],
    ["趣味","趣味 しゅみ Hobby<br>趣味は何？ しゅみはなに？ What's your hobby?<br>趣味は空手 しゅみはからて My hobby is karate<br>彼は多趣味だ かれはたしゅみだ He has many hobbies"],
    ["赤","赤 あか Red<br>顔が赤いよ かおがあかいよ Your face is red<br>赤信号で止まりましたか あかしんごうでとまりましたか Did you stop at the red light?"],
    ["橙色","橙色 だいだいいろ Orange<br>橙色の車 だいだいいろのくるま Orange car<br>オレンジはずっと橙色なの？ オレンジはずっとだいだいいろなの？ Are oranges always orange?"],
    ["黄色","黄色 きいろ Yellow<br>バナナは黄色です バナナはきいろです Bananas are yellow<br>彼の車は黄色だと思うよ かれのくるまはきいろだとおもうよ I think his car is yellow"],
    ["緑","緑 みどり Green<br>緑の車 みどりのくるま Green car<br>緑の車は珍しい みどりのくるまはめずらしい Green cars are rare"],
    ["青","青 あお Blue<br>空は青い そらはあおい The sky is blue<br>青信号で止まりましたか あおしんごうでとまりましたか Did you stop at the green light?"],
    ["紫","紫 むらさき Purple<br>紫の車 むらさきのくるま Purple car<br>紫の車は珍しい むらさきのくるまはめずらしい Purple cars are rare"],
    ["黒","黒 くろ Black<br>黒猫は好き くろねこはすき Do you like black cats?<br>黒猫は不吉だ くろねこはふきつだ Black cats are bad luck<br>カラスは黒い からすはくろい Crows are black"],
    ["灰色","灰色 はいいろ Gray<br>灰色が好き はいいろがすき I like gray<br>灰色の車 はいいろのくるま Gray car<br>紫色のセーターより灰色のセーターの方が好きです むらさきいろのセーターよりはいいろのセーターのほうがすきです I like gray sweater more than purple sweater"],
    ["茶色","茶色 ちゃいろ Brown<br>茶色の車 ちゃいろのくるま Brown car<br>茶色のセーター ちゃいろのセーター Brown sweater<br>彼の靴は茶色だ かれのくつはちゃいろだ His shoes are brown"],
    ["桃色","桃色 ももいろ Pink<br>桃色の車 ももいろのくるま Pink car<br>桃色のセーター ももいろのセーター Pink sweater<br>桃色の犬 ももいろのいぬ Pink dog<br>私は茶色い髪をしています わたしはちゃいろいかみをしています I have brown hair"],
    ["真っ白","真っ白 まっしろ Pure white<br>このタオル、真っ白だよ このタオル、まっしろだよ This towel is pure white<br>(idiom)頭が真っ白だった あたまがまっしろだった My mind went blank"],
    ["金色","金色 きんいろ Gold<br>金色の車 きんいろのくるま Golden car<br>金色のカブトムシを見付けたぞ！ きんいろのカブトムシをみつけたぞ！ I found a golden beetle!<br>金は色が真鍮と似ている きんはいろがしんちゅうとにている Gold is similar in color to brass"],
    ["透明","透明 とうめい Transparent<br>あなたに対して透明になった気分だ あなたにたいしてとうめいになったきぶんだ I feel invisible to you<br>この透明な液体には毒が含まれている このとうめいなえきたいにはどくがふくまれている This transparent liquid contains poison"],
    ["暖かい","暖かい あたたかい Warm/having enough money<br>暖かい日でした あたたかいひでした It was a warm day<br>懐が暖かい ふところがあたたかい I have enough money"],
    ["春","春 はる Spring<br>春が好き はるがすき I like spring<br>もうすぐ春だ もうすぐはるだ It's almost spring"],
    ["秋","秋 あき Autumn<br>秋が好き あきがすき I like autumn<br>秋はどうだった？ あきはどうだった？ How was your autumn?<br>今日は立秋です きょうはりっしゅうです Today is the first day of autumn"],
    ["涼しい","涼しい すずしい Cool(Temperature)<br>今日は涼しいです きょうはすずしいです It's cool today<br>雨上がりは涼しい あめあがりはすずしい It's cool after the rain"],
    ["冬","冬 ふゆ Winter<br>冬は寒い ふゆはさむい Winter is cold<br>冬休み何日から？ ふゆやすみなんにちから？ When does your Winter/Christmas holiday start?"],
    ["南","南 みなみ South<br>南に行こう みなみにいこう Let's go south<br>南はどっち？ みなみはどっち？ Which way is south?<br>南アフリカは遠い みなみアフリカはとおい South Africa is far away"],
    ["北","北 きた North<br>北に行こう きたにいこう Let's go north<br>北はどっち？ きたはどっち？ Which way is north?<br>北アフリカは遠い きたアフリカはとおい North Africa is far away"],
    ["東西南北","東西南北 とうざいなんぼく The four cardinal directions/Everywhere<br>東西南北はこのように分かれています とうざいなんぼくはこのようにわかれています The four cardinal directions are divided like this<br>東西南北、俺がこの地を支配する とうざいなんぼく、おれがこのちをしはいする Everywhere I will rule this land"],
    ["下","下 した Under<br>下に行こう したにいこう Let's go under<br>下はどっち？ したはどっち？ Which way is down?<br>頭を下げろ あたまをさげろ Duck your head"],
    ["昨夜","昨夜 さくや Last night<br>昨夜は何をした？ さくやはなにをした？ What did you do last night?<br>昨夜はごめん さくやはごめん Sorry about last night"],
    ["去年","去年 きょねん Last year<br>去年はどうだった？ きょねんはどうだった？ How was last year?<br>去年は雪が多かった きょねんはゆきがおおかった There was a lot of snow last year<br>去年、第一子を出産しました きょねん、だいいっしをしゅっさんしました I gave birth to my first child last year"],
    ["今月","今月 こんげつ This month<br>今月は何をする？ こんげつはなにをする？ What are you doing this month?<br>今月は何日ですか こんげつはなんにちですか What day is it this month?<br>今月は金欠なの こんげつはきんけつなの I'm broke this month"],
    ["鍵","鍵 かぎ Key<br>鍵がいる？ かぎがいる？ Do you need the key?<br>私の鍵知らない？ わたしのかぎしらない？ Do you know where my keys are?"],
    ["静か","静か しずか Quiet<br>静かにしてください しずかにしてください Please be quiet<br>海は静かだった うみはしずかだった The sea was calm"],
    ["絵","絵 え Picture<br>絵を描く えをかく Draw a picture<br>絵を見せて えをみせて Show me the picture<br>きれいな絵だ きれいなえだ It's a beautiful picture"],
    ["鉛筆","鉛筆 えんぴつ Pencil<br>鉛筆を貸して えんぴつをかして Lend me a pencil<br>鉛筆を落とした えんぴつをおとした I dropped my pencil<br>みんな鉛筆はある？ みんなえんぴつはある？ Does everyone have a pencil?"],
    ["美味しい","美味しい おいしい Delicious<br>美味しいですか おいしいですか Is it delicious?<br>美味しい食べ物を食べたい おいしいたべものをたべたい I want to eat delicious food<br>このお茶美味しい このおちゃおいしい This tea is delicious"],
    ["お皿","お皿 おさら Plate/Dish<br>お皿が割れた おさらがわれた The plate broke<br>お皿を洗って おさらをあらって Wash the plate<br>スープ用のお皿ある？ スープようのおさらある？ Do you have a bowl for soup?"],
    ["遅い","遅い おそい Late<br>遅いですか おそいですか Am I late?<br>遅いよ おそいよ You're late<br>今年は秋が遅いね ことしはあきがおそいね Autumn is late this year"],
    ["茶","茶 ちゃ Tea<br>お茶を飲む おちゃをのむ Drink tea<br>お茶を飲みましょう おちゃをのみましょう Let's drink tea<br>お茶を飲んでいる おちゃをのんでいる I'm drinking tea<br>このお茶美味しい このおちゃおいしい This tea is delicious"],
    ["向こう","向こう むこう Over there<br>向こうへ行け！ むこうへいけ！ Go over there!/Go away<br>向こうの方で泳ごう むこうのほうでおよごう Let's swim over there<br>向こうに白い塔が見えます むこうにしろいとうがみえます You can see a white tower over there"],
    ["困る","困る こまる to be troubled<br>今困っているんだ いまこまっているんだ I'm in trouble now<br>僕はしばしばお金に困る ぼくはしばしばおかねにこまる I'm always running into trouble with money."],
    ["冗談","冗談 じょうだん Joke<br>冗談だよ じょうだんだよ It's a joke<br>冗談はやめて じょうだんはやめて Get serious<br>りんさんは私の冗談に笑った りんさんはわたしのじょうだんにわらった Rin laughed at my joke"],
    ["浴びる","浴びる あびる to take a shower<br>シャワー浴びるの？ シャワーあびるの？ Are you going to take a shower?<br>彼女は、朝食前にシャワーを浴びることにしている かのじょは、ちょうしょくまえにシャワーをあびることにしている She takes a shower before breakfast"],
    ["散漫"," 散漫  さんまん  Scattered<br>散漫な人 さんまんなひと Scattered person<br>散漫な人は嫌い さんまんなひとはきらい I don't like scattered people<br>散漫な人は嫌い さんまんなひとはきらい I don't like scattered people"],
    ["曇り","曇り くもり Cloudy<br>今日は曇りです きょうはくもりです It's cloudy today<br>曇りの日は嫌い くもりのひはきらい I don't like cloudy days"],
    ["暖かい","暖かい あたたかい Warm/having enough money<br>暖かい日でした あたたかいひでした It was a warm day<br>懐が暖かい ふところがあたたかい I have enough money<br>この冬は暖かい。 このふゆはあたたかい。 This winter is warm."],
    ["葉書","葉書 はがき Postcard<br>葉書を送る はがきをおくる Send a postcard<br>葉書を買って はがきをかって Buy a postcard<br>葉書を書いて はがきをかいて Write a postcard"],
    ["麻雀","麻雀 まーじゃん Mahjong<br>麻雀をしよう！ まーじゃんをしよう！ Let's play mahjong!<br>麻雀は得意？ まーじゃんはとくい？ Are you good at mahjong?"],
    ["龍","龍 りゅう Dragon<br>龍が好き りゅうがすき I like dragons<br>龍は本当に存在するの？ りゅうはほんとうにそんざいするの？ Do dragons really exist?"],
    ["塩","塩 しお Salt<br>お塩とって おしおとって Pass the salt<br>塩ください しおください The salt, please<br>塩を入れましたか しおをいれましたか Did you put salt in it?"],
    ["死ぬ","死ぬ しぬ to die<br>死ぬのが怖い しぬのがこわい I'm afraid of dying<br>死ぬほど好き しぬほどすき I love it so much<br>死ぬほど疲れた しぬほどつかれた I'm dead tired<br>人は必ず死ぬ ひとはかならずしぬ Everyone dies"],
    ["おやすみなさい ","おやすみなさい Good night<br>おやすみなさい、良い夢を おやすみなさい、よいゆめを Good night, sweet dreams"],
    ["おかえりなさい","おかえりなさい Welcome back<br>お帰りなさい。逢いたかったわ。 おかえりなさい。あいたかったわ。 Welcome back. We missed you."],
    ["行ってきます","行ってきます いってきます I'm off<br>学校に行ってきます がっこうにいってきます I'm off to school<br>一時間したら行ってきます いちじかんしたらいってきます I'll leave in an hour"],
    ["感じ","感じ かんじ Feeling<br>いい感じ いいかんじ Sounds good<br>何か感じる なにかかんじる I feel something<br>私が悪いと感じた あたしがわるいとかんじた I felt bad"],
    ["上手","上手 じょうず Good at<br>上手に泳げるの？ じょうずにおよげるの？ Can you swim well?<br>試験は上手くいった？ しけんはじょうずくいった？ Did you do well on the test?<br>どう上手くいってる？ どうじょうずくいってる？ How's it going?"],
    ["醤油","醤油 しょうゆ Soy sauce<br>そこの醤油取って そこのしょうゆとって Pass the soy sauce<br>寿司に醤油なんてつけないわ すしにしょうゆなんてつけないわ I don't put soy sauce on sushi"],
    ["吸う","吸う すいます To smoke<br>父はたばこを吸う ちちはたばこをすう My father smokes<br>父はタバコを吸うのをやめた ちちはタバコをすうのをやめた My father quit smoking"],
    ["寿司屋","寿司屋 すしや Sushi restaurant<br>ここの寿司屋は、回転寿司だよ ここのすしやは、かいてんずしですよ This sushi restaurant is a conveyor belt sushi restaurant<br>寿司屋に行こう すしやにいこう Let's go to a sushi restaurant"],
    ["誰か","誰か だれか Someone<br>誰かいる？ だれかいる？ Is anyone there?<br>誰か助けて だれかたすけて Help me, someone"],
    ["動物","動物 どうぶつ Animal<br>魚も動物ですか？ さかなもどうぶつですか？ Are fish also animals?<br>動物は火を恐れる どうぶつはひをおそれる Animals are scared of fire"],
    ["動物園","動物園 どうぶつえん Zoo<br>動物園に行こう どうぶつえんにいこう Let's go to the zoo<br>動物園は楽しい どうぶつえんはたのしい The zoo is fun<br>この動物園にお店はあるの？ このどうぶつえんにおみせはあるの？ Is there a shop in this zoo?"],
    ["服","服 ふく Clothes<br>制服はあるの？ せいふくはあるの？ Do you have a school uniform?<br>その服いいね そのふくいいね I like your outfit"],
    ["制服","制服 せいふく Uniform<br>制服はあるの？ せいふくはあるの？ Do you have a uniform?<br>制服を着なさい せいふくをきなさい Put on your uniform<br>学校では制服を着ています がっこうではせいふくをきています We wear uniforms at our school"],
    ["上着","上着 うわぎ Jacket<br>上着を着る うわぎをきる Put on your jacket<br>それって新しい上着？ それってあたらしいうわぎ？ Is that a new jacket?<br>彼女は赤い上着に決めた かのじょはあかいうわぎにきめた She decided on a red jacket"],
    ["靴","靴 くつ Shoes<br>靴を履いて くつをはいて Put on your shoes<br>この靴どう思う？ このくつどうおもう？ What do you think of these shoes?<br>この靴は少し緩い このくつはすこしゆるい These shoes are a little loose"],
    ["韓国","韓国 かんこく South Korea<br>韓国人です かんこくじんです I'm Korean<br>韓国語を話せる かんこくごをはなせる I can speak Korean<br>韓国料理は一般的に辛い かんこくりょうりはいっぱんてきにからい Korean food is generally spicy"],
    ["中国","中国 ちゅうごく China<br>中国が好きだ ちゅうごくがすきだ I like China<br>中国語を話せる ちゅうごくごをはなせる I can speak Chinese<br>いつ中国に着いたの？ いつちゅうごくについたの？ When did you arrive in China?<br>中国は日本の20倍大きい ちゅごくはににほんの２０ばいだいきい"],
    ["日本","日本 にほん Japan<br>日本人ですか にほんじんですか Are you Japanese?<br>日本語を話せる にほんごをはなせる I can speak Japanese<br>日本語は難しい にほんごはむずかしい Japanese is difficult<br>日本は島国だ にほんはしまぐにだ Japan is an island country"],
    ["上げる","上げる あげる to raise<br>手を上げて てをあげて Raise your hand<br>上げてもいい？ あげてもいい？ Can I raise it?"],
    ["言葉","言葉 ことば Word<br>言葉を失った ことばをうしなった I was speechless.<br>昔の言葉だよ むかしのことばだよ It's an old word<br>言葉を慎みなさい ことばをつつしみなさい Watch your language"],
    ["机","机 つくえ Desk<br>机の上にある つくえのうえにある It's on the desk<br>私の机は古い わたしのつくえはふるい My desk is old"],
    ["授業","授業 じゅぎょう Class<br>授業が始まる じゅぎょうがはじまる Class begins<br>彼等は授業中だ かれらはじゅぎょうちゅうだ They are in class<br>今日は授業ないの？ きょうはじゅぎょうないの？ Don't you have classes today?"],
    ["基本的","基本的 きほんてき Basic<br> 基本的なことを教えて きほんてきなことをおしえて Teach me the basics<br>基本的には同意だ きほんてきにはどういだ Basically, I agree<br>私、基本的に一人でいる方が好きなんです わたし、きほんてきにひとりでいるほうがすきなんです I basically prefer being by myself"],
    ["会話","会話 かいわ Conversation<br>会話が上手い かいわがうまい You're good at conversation<br>会話に加われば？ かいわにくわわれば？ Why don't you join the conversation?"],
    ["出来る","出来る できる to be able to<br>一人で出来るよ ひとりでできるよ I can do it by myself<br>出来ると思います できるとおもいます I think I can do it<br>平泳ぎは出来るが、背泳ぎは出来ない ひらおよぎはできるが、せおよぎはできない I can do breaststroke, but not the backstroke"],
["スイス","スイス Switzerland<br>スイス出身です スイスしゅっしんです I'm from Switzerland<br>これって、スイス製？ これって、スイスせい？ Is this made in Switzerland?"],
["遅れ","遅れ おくれ Late/Delay<br>遅れるな おくれるな Don't be late<br>なぜ遅れたの？ なぜおくれたの？ Why are you late?<br>手遅れだね。 ておくれだね。 It's too late."],
["冒","冒 ぼう Risk<br>そんな危険は冒したくないな そんなきけんはぼうしたくないな I don't want to take that risk<br>冒険は好きですか ぼうけんはすきですか Do you like adventure?"],
["危険","危険 きけん Danger<br>危険だ きけんだ It's dangerous<br>危険な場所 きけんなばしょ Dangerous place<br>危険な場所に行くな きけんなばしょにいくな Don't go to dangerous places"],
["ポテトチップス","ポテトチップス Potato chips<br>ポテトチップスを食べる ぽてとちっぷすをたべる Eat potato chips<br>ポテトチップスは好き？ ぽてとちっぷすはすき？ Do you like potato chips?<br>ポテトチップスは健康に良くないです ぽてとちっぷすはけんこうによくないです Potato chips are not good for you"],
["階段","階段 かいだん Stairs<br>階段を上がる かいだんをあがる Go up the stairs<br>階段やベッド、テーブルも手作り かいだんやベッド、テーブルもてづくり Stairs, beds, and tables are also handmade"],
["取得","取得 しゅとく Obtain/Grab<br>取得した しゅとくした I acquired it<br>タイルを17個取得する たいるを17こしゅとくする Grab 17 tiles<br>取得した情報 しゅとくしたじょうほう Obtained information<br>ユキはアメリカ国籍を取得した ユキはアメリカこくせきをしゅとくした Yuki gained American citizenship"],
["照れる","照れる てれる to be shy/awkward<br>彼は照れていた かれはてれていた He was shy<br>照れるな てれるな Don't be shy<br>照れるよ てれるよ I'm shy<br>彼は彼女のいる前ではとても照れくさそうにする かれはかのじょのいるまえではとてもてれくさそうにする He acts very shy in her presence"],
["大体","大体 だいたい Mostly/Generally<br>大体正しい だいたいただしい That's mostly correct<br>大体終わった？ だいたいおわった？ Are you about done?<br>彼は大体あなたぐらいの年齢です かれはだいたいあなたぐらいのねんれいです He's about your age"],
["お手洗い","お手洗い おてあらい Restroom/Toilet<br>お手洗いはどこですか おてあらいはどこですか Where is the restroom?<br>お手洗いに行きたい おてあらいにいきたい I want to go to the restroom"],
["初心者","初心者 しょしんしゃ Beginner<br>まだ初心者なんです まだしょしんしゃなんです I'm just a beginner<br>皆さん全員、初心者ですか？ みなさんぜんいん、しょしんしゃですか？ Are you all beginners?"],
["これまで","これまで Up until now<br>今日はこれまで きょうはこれまで That's all for today<br>これまでになく絶好調です これまでになくぜっこうちょうです I have never felt better"],
["午前","午前 ごぜん AM<br>午前８時です ごぜんはちじです It's 8 AM"],
["午後","午後 ごご PM<br>午後八時です ごごはちじです It's 8 PM"],
["将来","将来 しょうらい Future<br>将来に備えよ しょうらいにそなえよ Prepare for the future<br>将来何になりたいですか？ しょうらいなにになりたいですか？ What do you want to be in the future?"],
["蛙","蛙 かえる Frog<br> 蛙が好き かえるがすき I like frogs<br>蛙は水の中で生きる かえるはみずのなかでいきる Frogs live in water"],
["彼方","彼方 あちら Over there<br>かしこまりました。サラダバーはあちらです。All right, sir. The salad bar is over there. "]
];
const flashSquareCommonWord = document.getElementById("flash-square-common-word") as HTMLDivElement;
const flashSquareCommonWordAnswerElement = document.getElementById("flash-square-common-word-answer") as HTMLDivElement;
const flashSquarePostElement = document.getElementById("flash-square-common-words") as HTMLDivElement;

let useHiraganaInFlashSquare:boolean = true;
let useKatakanaInFlashSquare:boolean = true;

function flashSquareKanaClick(){
    flashSquareKanaElement.style.display = "none";
    flashSquareAnswerElement.style.display = "block";
}


// I want to play an animation whwne both are deactivated
let kanaCoinflip:number = 0;
function flashSquareAnswerClick(){
    if(useKatakanaInFlashSquare == false && useHiraganaInFlashSquare == false){
        flashSquareKanaElement.innerText = "¯\_(ツ)_/ ¯";
        flashSquareAnswerElement.innerText = "¯\_(ツ)_/¯ is thus shrug  used in jag Joann japan";
    } else{
        const randomKanaElementPosition = Math.floor(Math.random() * (allKanaTriples.length));                       // Any random element from allkana array
        if(useKatakanaInFlashSquare == false){
            kanaCoinflip = 0;
        }
        else if(useHiraganaInFlashSquare == false){
            kanaCoinflip = 1;
        }else{
            kanaCoinflip = Math.floor(Math.random() * 2);
        }
        flashSquareKanaElement.innerText = allKanaTriples[randomKanaElementPosition][kanaCoinflip]; // Between 0 - 1. Hiragana or katakana is a coinflip
        flashSquareAnswerElement.innerText = allKanaTriples[randomKanaElementPosition][2];                           // The answer
    
        flashSquareAnswerElement.style.display = "none";
        flashSquareKanaElement.style.display = "block";
    }
}
function changeFlashcardSettingsHiragana(){
    useHiraganaInFlashSquare = !(document.getElementById("hiragana-toggle") as HTMLInputElement)?.checked;
}
function changeFlashcardSettingsKatakana(){
    useKatakanaInFlashSquare = !(document.getElementById("katakana-toggle") as HTMLInputElement)?.checked;
}
function flashSquareCommonWordClick(){
    if(flashSquareCommonWord.style.display != "none"){
        flashSquareCommonWord.style.display = "none";
        flashSquareCommonWordAnswerElement.style.display = "flex";
    }
    else if(flashSquareCommonWord.style.display == "none"){
        const randomCommonWordElementPosition = Math.floor(Math.random() * (commonJapaneseWords.length));                   
        flashSquareCommonWord.innerHTML = commonJapaneseWords[randomCommonWordElementPosition][0]; 
        flashSquareCommonWordAnswerElement.innerHTML = commonJapaneseWords[randomCommonWordElementPosition][1];                       
    
        flashSquareCommonWordAnswerElement.style.display = "none";
        flashSquareCommonWord.style.display = "block";
    }
}
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


// Need to update this function to show a new top post leading up to the new year. Also maybe implement email funcitonaollity. meaning sending out happy new year.maybe stage it in sections preparing different plays for the climax.
function isItTimeToCelebrateNewYears(){
    const cur_date = new Date();   
    if((cur_date < (new Date(`${cur_date.getFullYear()}-01-01T03:30:00`)) ) && 
    (cur_date > (new Date(`${cur_date.getFullYear()}-01-01T00:00:00`))))
    {
        console.log("GOTT NYTT ÅR! HAPPY NEW YEAR! あけましておめでとう！");
        for (let index = 0; index < 10; index++) {
            fireFirework('header-celebration-new-years');
        }
        
        if(Math.floor(alternatingValue % 2) == 0){
            blog_title_element?.innerHTML = "HAPPY NEW YEAR!";
            blog_title.innerHTML = "HAPPY NEW YEAR!"
        }
        else{
            blog_title_element?.innerHTML = "あけましておめでとう！";
            blog_title.innerHTML = "あけましておめでとう！"
        }
        alternatingValue += 1;

        //Stuff I only want to run once during the celebrations
        if(!addedClassToCelebrate){
            document.getElementById("header-celebration-new-years")?.innerHTML += `<div id="hanabi"></div>`;
            the_body.style.background = "#003366"
            blog_title.style.color = "gold";
            document.querySelector("body > header").style.background ="#003366";
            
            for (let i = 0; i < all_blogposts.length; i++) {
                (all_blogposts[i] as HTMLElement).classList.add("celebration_post");
            }
            addedClassToCelebrate = true;
        }
    }
    
}

const sidebarAllPosts = document.getElementById("sidebar-option-all-posts") as HTMLElement;
const sidebarContUpdated = document.getElementById("sidebar-option-continuously-updated") as HTMLElement;

sidebarAllPosts.addEventListener("click", function(){
    sidebarAllPosts.classList.add("sidebar-option-selected");
    sidebarContUpdated.classList.remove("sidebar-option-selected");
    for (let i = 0; i < all_blogposts.length; i++) {
        (all_blogposts[i] as HTMLElement).style.display = "inherit";
    }
    for (let i = 0; i < all_sidebar_redirects.length; i++) {
        if((all_sidebar_redirects[i] as HTMLElement).classList.contains("continuously-updated-sidebar-redirect") == false){
            (all_sidebar_redirects[i] as HTMLElement).style.display = "list-item";
        }
    }
});
sidebarContUpdated.addEventListener("click", function(){
    sidebarContUpdated.classList.add("sidebar-option-selected");
    sidebarAllPosts.classList.remove("sidebar-option-selected");
    for (let i = 0; i < all_blogposts.length; i++) {
        if((all_blogposts[i] as HTMLElement).classList.contains("continuously-updated") == false){
            (all_blogposts[i] as HTMLElement).style.display = "none";
        }

    }
    for (let i = 0; i < all_sidebar_redirects.length; i++) {
        if((all_sidebar_redirects[i] as HTMLElement).classList.contains("continuously-updated-sidebar-redirect") == false){
            (all_sidebar_redirects[i] as HTMLElement).style.display = "none";
        }
    }
});


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
    // Celebrate all day. 31536000 seconds in a year. 86400 seconds in a day. So, stop celebrating when time to the next anniversary date is 31449600 seconds, otherwise celebrate since it IS the anniversary :) make it a popup and send out an email when. being in the lead and everybody needs large hands us such a fun position.

    if(time_to_anniversary_date_in_seconds > 31449600){

        if(!addedTheFirework){
            addedTheFirework = true;
            document.getElementById("firework-celebration-show")?.innerHTML += `<div id="hanabi"></div>`;
        }
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

if(date_today == new Date(`${date_today.getFullYear()}-12-31`)){
    setInterval(isItTimeToCelebrateNewYears,1100);
}
setInterval(calculate_time_since_first_post,1000);
//tsc --target es2015 .\js\script.ts


function toggleArticlePost(activeExpandArticle){
    let all_paragraphs = activeExpandArticle.getElementsByTagName("p");
    console.log(all_paragraphs);
    // all_paragraphs.forEach(element => {
    //     element.style.display = "block";
    // });
    activeExpandArticle.style.color = "yellow";
}

// ### THE POLITENESS SLIDER CODE ###
// Rude <-> Polite
const sliderPoliteness = document.getElementById("politeness-input-slider") as HTMLInputElement;
const dynamicText = document.getElementById("dynamic-politeness-div") as HTMLDivElement;
let wordsForPoliteness:string[][] = [
    ["ます","します","せえします","まえせえします","まえしつれいします"],
    ["帰れ","帰って","帰ってください","お帰れください"],
    ["わりぃ","ごめん","すみません","申し訳ございません","大変申し訳ございません"],
    ["写真撮って","写真撮ってください","写真撮っていただけますか","すみませんが写真撮っていただけますか","申し訳ございませんが写真撮って頂けますでしょうか","大変申し訳ございませんが写真撮って頂けますでしょうか"],
    ["なんだよ！","あぁ？","なに？","なんですか","なんでしょうか"],
    ["なんでもねよ","いまのわすれて","なんでもないよ","なんでもないです","なんでもございません"],
    ["金がねぇー","金欠なんだ","お金がないです","経済面で苦しいです"],
    ["待って","ちょっと待ってください","少しお待ちいただけますか"],
    ["応援してるよ","応援しています","応援しております"],
    ["ハピバ！","おたおめ","ハッピーバースデー！","誕生日おめでとう","お誕生日おめでとう","誕生日おめでとうございます","お誕生日おめでとうございます","あなたの誕生日を心よりお祝い申し上げます"],
    ["へぇ","そなんだ","そなんですか","さよでございますか"],["ほんきでいってのか","冗談でし","本当ですか","作用"]
    ,["わからない","わかりません"]]


dynamicText.innerText = wordsForPoliteness[0][0];
let currentArray:number = 0;

const sliderCurrentIndex = document.getElementById("politeness-slider-index-current") as HTMLSpanElement;
sliderCurrentIndex.innerText = String(currentArray);
(document.getElementById("politeness-slider-index-total") as HTMLSpanElement).innerText = String(wordsForPoliteness.length-1);
const nextBtn = document.getElementById("politeness-slider-button-next") as HTMLButtonElement;
const prevBtn = document.getElementById("politeness-slider-button-prev") as HTMLButtonElement;
function updatePolitenessSlider(){
    sliderPoliteness.max = String(wordsForPoliteness[currentArray].length - 1);
    if(Number(sliderPoliteness.value) > Number(sliderPoliteness.max)){
        sliderPoliteness.value = sliderPoliteness.max;
    }
    dynamicText.innerText = wordsForPoliteness[currentArray][Number(sliderPoliteness.value)];
    sliderCurrentIndex.innerText = String(currentArray);
}

nextBtn.addEventListener("click", function(){
    currentArray++;
    if(currentArray >= wordsForPoliteness.length-1){
        currentArray = wordsForPoliteness.length-1;
    }
    console.log(currentArray, wordsForPoliteness.length)
    updatePolitenessSlider();
});

prevBtn.addEventListener("click", function(){
    currentArray--;
    if(currentArray < 0){
        currentArray = 0;
    }
    updatePolitenessSlider();
});

sliderPoliteness.addEventListener("input", function(){

    dynamicText.innerText = wordsForPoliteness[currentArray][Number(sliderPoliteness.value)];   
});
