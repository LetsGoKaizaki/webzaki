const access = document.querySelector('.btn');
const kankou = document.querySelector('.kankou2');

access.addEventListener('click', () => {
    kankou.scrollIntoView({
        behavior: "smooth"
    });
});


document.querySelector('.fotter img').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const galleryLinks = [
    'https://www.navitime.co.jp/route/comparison?orvName=%E6%9C%AD%E5%B9%8C&dnvName=%E5%8C%97%E8%A6%8B&orvNodeCode=00002928&dnvNodeCode=00008302',
    'https://www.navitime.co.jp/transfer/searchlist?orvStationCode=00000592&dnvStationCode=00008302&defaultCondition=0',
    'https://www.navitime.co.jp/transfer/searchlist?orvStationName=Kansai+International+Airport&orvStationCode=00001353&dnvStationName=Kitami%28Hokkaido%29&dnvStationCode=00008302&defaultCondition=0'
];

document.querySelectorAll('.gallery3 .item3 img').forEach((img, i) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        window.open(galleryLinks[i], '_blank');
    });
});


const kitaAll = document.querySelectorAll('.kitamiicon');
const abaAll = document.querySelectorAll('.abasiriicon');
const monAll = document.querySelectorAll('.monbetuicon');
const sireAll = document.querySelectorAll('.siretokoicon');

// 後方互換のため1個目を変数に保持
const kita = kitaAll[0];
const aba = abaAll[0];
const mon = monAll[0];
const sire = sireAll[0];
const mainImg = document.querySelector('.dekaicon img');
const mapname = document.querySelector('.mapname');
const Sub3 = document.querySelector('.sub3');
const setumei2 = document.querySelector('.setumei2');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const spot1 = document.querySelector('.spot1');
const spot2 = document.querySelector('.spot2');
const spot3 = document.querySelector('.spot3');
const spot4 = document.querySelector('.spot4');
const spot5 = document.querySelector('.spot5');
const spot6 = document.querySelector('.spot6');
const spot7 = document.querySelector('.spot7');
const spot8 = document.querySelector('.spot8');
const ohotuku = document.querySelector('ohotuku');




abaAll.forEach(el => el.addEventListener('click', () => {
    mainImg.src = './img/dekaicon2.png';
    mainImg.animate({ opacity: [0, 1] }, 500);


    /*網走*/
    mapname.textContent = '網走';

    Sub3.innerHTML = '学んで遊べる<br>流氷の街';

    setumei2.innerHTML = '流氷やオホーツク海の大自然を間近に感じられる街。<br>流氷観光船や水族館など、子供がわくわくする体験が豊富です。<br> 自然・学び・遊びを一度に楽しめることができます。';

    card1.src = './img/AbashiriPhoto1.png';
    spot1.querySelector('h3').textContent = '網走監獄';
    spot1.querySelector('p').textContent = '1000円　小中学生750円';
    spot1.querySelectorAll('li')[0].textContent = '子供も楽しみながら歴史を学べる';
    spot1.querySelectorAll('li')[1].textContent = 'リアルなろう人形が展示されている ';
    spot1.querySelectorAll('li')[2].textContent = '監獄食が食べられる ';


    card2.src = './img/AbashiriPhoto2.png';
    spot2.querySelector('h3').textContent = '流氷観光砕氷船おーろら';
    spot2.querySelector('p').textContent = '5,000円　小2,000円';
    spot2.querySelectorAll('li')[0].textContent = '迫力の流氷砕氷体験 ';
    spot2.querySelectorAll('li')[1].textContent = '暖房完備で寒さが苦手な人でも大丈夫';
    spot2.querySelectorAll('li')[2].textContent = '野生のアザラシを見ることができるかも';


    card3.src = './img/AbashiriPhoto3.png';
    spot3.querySelector('h3').textContent = 'オホーツク流氷館';
    spot3.querySelector('p').textContent = '900円　高880円　小中770円';
    spot3.querySelectorAll('li')[0].textContent = '流氷の仕組みを学べる';
    spot3.querySelectorAll('li')[1].textContent = 'クリオネを間近で観察できる ';
    spot3.querySelectorAll('li')[2].textContent = '流氷に実際に触れることができる';


    card4.src = './img/AbashiriPhoto4.png';
    spot4.querySelector('h3').textContent = '北浜駅';
    spot4.querySelector('p').textContent = '無料';
    spot4.querySelectorAll('li')[0].textContent = 'オホーツク海がすぐ目の前';
    spot4.querySelectorAll('li')[1].textContent = '写真スポット・展望デッキあり';
    spot4.querySelectorAll('li')[2].textContent = '移動の合間に立ち寄りやすい';

    spot5.querySelector('img').src = 'img/ketu.png';
    spot5.querySelector('h3').textContent = 'Arcadia';
    spot5.querySelector('p').textContent = '3000~5000円';
    spot5.querySelectorAll('li')[0].textContent = '網走産の新鮮食材が主役の料理';
    spot5.querySelectorAll('li')[1].textContent = '洋食のラインナップが幅広い';
    spot5.querySelectorAll('li')[2].textContent = '駅から徒歩すぐ';

    spot6.querySelector('img').src = 'img/ketu2.png';
    spot6.querySelector('h3').textContent = ' 鮨やまし田';
    spot6.querySelector('p').textContent = ' 8000~10000円';
    spot6.querySelectorAll('li')[0].textContent = '北海道の旬の海の幸を味わえる本格寿司体験';
    spot6.querySelectorAll('li')[1].textContent = '冷凍なし・旬素材のみの本物志向';
    spot6.querySelectorAll('li')[2].textContent = '大将が気さくな方';


    spot7.querySelector('img').src = 'img/ketu3.png';
    spot7.querySelector('h3').textContent = ' 酒菜亭 喜八';
    spot7.querySelector('p').textContent = ' 4000~5000円';
    spot7.querySelectorAll('li')[0].textContent = '網走ならではの鯨料理 ';
    spot7.querySelectorAll('li')[1].textContent = '広い席・個室ありで子供連れでも安心';
    spot7.querySelectorAll('li')[2].textContent = '地元文化を感じるグルメ体験として思い出に残る';

    spot8.querySelector('img').src = 'img/ketu4.png';
    spot8.querySelector('h3').textContent = ' ケの日ごはん猯家';
    spot8.querySelector('p').textContent = ' 1000~2000円';
    spot8.querySelectorAll('li')[0].textContent = ' 体にやさしい家庭料理';
    spot8.querySelectorAll('li')[1].textContent = '網走駅から徒歩圏のアクセス良好な立地';
    spot8.querySelectorAll('li')[2].textContent = '小さなお店ならではのアットホームな雰囲気';
}));



monAll.forEach(el => el.addEventListener('click', () => {
    mainImg.src = './img/monbetudekaicon.png';
    mainImg.animate({ opacity: [0, 1] }, 500);


    /*網走*/
    mapname.textContent = '紋別';

    Sub3.innerHTML = '家族でゆったり<br>過ごせる街';

    setumei2.innerHTML = '巨大な蟹のオブジェが目印の、海と流氷のまち。<br>遊びつつ、自然の不思議を学ぶことができる。<br> 観光地がまとまっていて小さなお子様連れでも回りやすいです。';

    card1.src = './img/monbetu1.png';
    spot1.querySelector('h3').textContent = '氷海展望塔';
    spot1.querySelector('p').textContent = '800円 小人400円';
    spot1.querySelectorAll('li')[0].textContent = '世界初・日本最大級の氷海海中展望塔 ';
    spot1.querySelectorAll('li')[1].textContent = '海底から海面まで丸ごと体験 ';
    spot1.querySelectorAll('li')[2].textContent = 'カフェがある';


    card2.src = './img/monbetu2.png';
    spot2.querySelector('h3').textContent = 'ガリンコ号';
    spot2.querySelector('p').textContent = '5000円 小人2500円';
    spot2.querySelectorAll('li')[0].textContent = 'アルキメディアンスクリューで豪快に砕氷';
    spot2.querySelectorAll('li')[1].textContent = '北海道遺産・最新鋭の快適な船 ';
    spot2.querySelectorAll('li')[2].textContent = '冬以外も乗れる';


    card3.src = './img/monbetu3.png';
    spot3.querySelector('h3').textContent = 'オホーツク流氷科学センター';
    spot3.querySelector('p').textContent = '450円 高校150円 以下無料';
    spot3.querySelectorAll('li')[0].textContent = 'マイナス20℃の厳寒体験';
    spot3.querySelectorAll('li')[1].textContent = '日本一のクリオネ展示と氷の水族館';
    spot3.querySelectorAll('li')[2].textContent = '全天周ドームシアターで迫力映像';


    card4.src = './img/monbetu4.png';
    spot4.querySelector('h3').textContent = 'オホーツクとっかりセンター';
    spot4.querySelector('p').textContent = '200円 小人100円 幼児無料';
    spot4.querySelectorAll('li')[0].textContent = '日本で唯一のアザラシ専門保護施設';
    spot4.querySelectorAll('li')[1].textContent = '触れ合い体験ができる';
    spot4.querySelectorAll('li')[2].textContent = '毎日5回のえさの時間が見どころ ';

    spot5.querySelector('img').src = 'img/monbetumesi1.png';
    spot5.querySelector('h3').textContent = '和風レストランなぎさ';
    spot5.querySelector('p').textContent = '1000~2000円';
    spot5.querySelectorAll('li')[0].textContent = '紋別産ホタテ食べ放題の朝食ビュッフェ';
    spot5.querySelectorAll('li')[1].textContent = 'ホテル内で観光拠点として便利';
    spot5.querySelectorAll('li')[2].textContent = 'コース料理がある';

    spot6.querySelector('img').src = 'img/monbetumesi2.png';
    spot6.querySelector('h3').textContent = '寿司処';
    spot6.querySelector('p').textContent = '昼1,000~2,000 夜3,000~4,000';
    spot6.querySelectorAll('li')[0].textContent = '北海道の旬の海の幸を味わえる本格寿司体験';
    spot6.querySelectorAll('li')[1].textContent = '地元グルメ体験としての価値が高い';
    spot6.querySelectorAll('li')[2].textContent = '落ち着いた店内でゆっくり過ごせる空間';


    spot7.querySelector('img').src = 'img/monbetumesi3.png';
    spot7.querySelector('h3').textContent = '海鮮料理 りん';
    spot7.querySelector('p').textContent = ' 3000~8000円';
    spot7.querySelectorAll('li')[0].textContent = 'オホーツクの海の幸を存分に味わえる料理';
    spot7.querySelectorAll('li')[1].textContent = '座敷＆個室など家族でゆったり過ごせる空間';
    spot7.querySelectorAll('li')[2].textContent = '素材を活かした創作メニューも魅力';

    spot8.querySelector('img').src = 'img/monbetumesi4.png';
    spot8.querySelector('h3').textContent = 'まりーさんの木';
    spot8.querySelector('p').textContent = ' 1000~2000円';
    spot8.querySelectorAll('li')[0].textContent = ' 子供連れでも入りやすい雰囲気';
    spot8.querySelectorAll('li')[1].textContent = 'オホーツク名物も楽しめる';
    spot8.querySelectorAll('li')[2].textContent = '休憩スポっとしてつかえる';
}));




/*===================================知床=====================================*/


sireAll.forEach(el => el.addEventListener('click', () => {
    mainImg.src = './img/siretokodekaicon.png';
    mainImg.animate({ opacity: [0, 1] }, 500);

    mapname.textContent = '知床';

    Sub3.innerHTML = '本物の自然に<br>出会える街';

    setumei2.innerHTML = '世界自然遺産にも登録された自然豊かな地域流氷や野生動物、手つかずの森林など四季ごとの大自然を体験できる。大自然の魅力を間近で感じながら観光やアクティビティを楽しむことができる。';

    card1.src = './img/siretoko1.png';
    spot1.querySelector('h3').textContent = '知床五湖';
    spot1.querySelector('p').textContent = '無料';
    spot1.querySelectorAll('li')[0].textContent = '自然で手軽にハイキング体験';
    spot1.querySelectorAll('li')[1].textContent = '野生動物や景観を間近で体験できる';
    spot1.querySelectorAll('li')[2].textContent = '安全で便利な施設も充実';


    card2.src = './img/siretoko2.png';
    spot2.querySelector('h3').textContent = '知床峠';
    spot2.querySelector('p').textContent = '無料';
    spot2.querySelectorAll('li')[0].textContent = '短時間で自然を体験できる';
    spot2.querySelectorAll('li')[1].textContent = '車で簡単に絶景を楽しめる';
    spot2.querySelectorAll('li')[2].textContent = '四季ごとに違う景色を楽しめる';


    card3.src = './img/siretoko3.png';
    spot3.querySelector('h3').textContent = 'フリぺの滝';
    spot3.querySelector('p').textContent = '無料';
    spot3.querySelectorAll('li')[0].textContent = '安全で短時';
    spot3.querySelectorAll('li')[1].textContent = '滝と海の絶景が同時に楽しめる';
    spot3.querySelectorAll('li')[2].textContent = '野生動物や植物の観察に最適';


    card4.src = './img/siretoko4.png';
    spot4.querySelector('h3').textContent = '知床観光船';
    spot4.querySelector('p').textContent = '5000~7000円 ';
    spot4.querySelectorAll('li')[0].textContent = '安全で快適な海上からの大自然体験';
    spot4.querySelectorAll('li')[1].textContent = '季節ごとに変わる自然と野生動物を観察できる';
    spot4.querySelectorAll('li')[2].textContent = '屋内と屋外スペースで過ごせる';

    spot5.querySelector('img').src = 'img/siretokomesi1.png';
    spot5.querySelector('h3').textContent = '知床食堂';
    spot5.querySelector('p').textContent = '1000~2000円';
    spot5.querySelectorAll('li')[0].textContent = '地元の新鮮な海の幸を手ごろな価格で楽しめる';
    spot5.querySelectorAll('li')[1].textContent = '道の駅にあるから休憩と食事を一度にできる';
    spot5.querySelectorAll('li')[2].textContent = '朝～夜まで通しで開いていて使い勝手が良い';

    spot6.querySelector('img').src = 'img/siretokomesi2.png';
    spot6.querySelector('h3').textContent = '炉ばた くまの家';
    spot6.querySelector('p').textContent = '昼1,000~2,000円';
    spot6.querySelectorAll('li')[0].textContent = '種類豊富なメニュー';
    spot6.querySelectorAll('li')[1].textContent = '道の駅近くでアクセスしやすい';
    spot6.querySelectorAll('li')[2].textContent = '地元の海の幸を味わえる';


    spot7.querySelector('img').src = 'img/siretokomesi3.png';
    spot7.querySelector('h3').textContent = '知床ごはんtomoni';
    spot7.querySelector('p').textContent = ' 1000~2000円';
    spot7.querySelectorAll('li')[0].textContent = '地元の食材を使った定食';
    spot7.querySelectorAll('li')[1].textContent = '子供も楽しめるメニュー';
    spot7.querySelectorAll('li')[2].textContent = '宿泊先として利用可能';

    spot8.querySelector('img').src = 'img/siretokomesi4.png';
    spot8.querySelector('h3').textContent = 'ウトロ漁協婦人堂食堂';
    spot8.querySelector('p').textContent = '2000~3000円';
    spot8.querySelectorAll('li')[0].textContent = ' 地元で水揚げされた海の幸を味わえる';
    spot8.querySelectorAll('li')[1].textContent = '漁港の雰囲気を感じられるロケーション';
    spot8.querySelectorAll('li')[2].textContent = '手頃で満足度の高い価格帯';
}));

/*==================================北見=======================================*/
kitaAll.forEach(el => el.addEventListener('click', () => {
    mainImg.src = './img/siretokodekaicon.png';
    mainImg.animate({ opacity: [0, 1] }, 500);

    mapname.textContent = '北見';

    Sub3.innerHTML = '自然とグルメを<br>楽しめる街';

    setumei2.innerHTML = '北見は混雑を気にせず自然をのびのび楽しめます。<br>子供が喜ぶ体験や家族が楽しめるグルメが豊富。<br>温泉や各地へのアクセスも良く、家族旅行の拠点にぴったりです';

    card1.src = './img/ana1.png';
    spot1.querySelector('h3').textContent = '北見ファミリーランド';
    spot1.querySelector('p').textContent = '一日フリーパス券 1,400円';
    spot1.querySelectorAll('li')[0].textContent = '幼児～小学生が楽しめる遊具が多い';
    spot1.querySelectorAll('li')[1].textContent = '混雑が少なくのびのび遊べる';
    spot1.querySelectorAll('li')[2].textContent = '休憩スペースあり';


    card2.src = './img/ana2.png';
    spot2.querySelector('h3').textContent = 'キタキツネ牧場';
    spot2.querySelector('p').textContent = '300~500円 幼児無料';
    spot2.querySelectorAll('li')[0].textContent = '四季で異なるキツネが楽しめる';
    spot2.querySelectorAll('li')[1].textContent = '間近でキタキツネと触れ合える';
    spot2.querySelectorAll('li')[2].textContent = '餌やり体験ができる';


    card3.src = './img/ana3.png';
    spot3.querySelector('h3').textContent = '北の大地の水族館';
    spot3.querySelector('p').textContent = '大人830円　中・小学生400円';
    spot3.querySelectorAll('li')[0].textContent = '日本唯一の滝つぼの水槽がある';
    spot3.querySelectorAll('li')[1].textContent = '冬季は屋外水槽で氷の下を泳ぐ魚を見れる';
    spot3.querySelectorAll('li')[2].textContent = '餌やり体験ができる';


    card4.src = './img/ana4.png';
    spot4.querySelector('h3').textContent = 'ワッカ原生花園';
    spot4.querySelector('p').textContent = '無料';
    spot4.querySelectorAll('li')[0].textContent = '季節ごとに違う自然体験ができる';
    spot4.querySelectorAll('li')[1].textContent = '体験型アクティビティがある';
    spot4.querySelectorAll('li')[2].textContent = '広大でのびのび遊べる';

    spot5.querySelector('img').src = 'img/dekamara (2).png';
    spot5.querySelector('h3').textContent = '味覚園　北見本店';
    spot5.querySelector('p').textContent = '3000~4000円';
    spot5.querySelectorAll('li')[0].textContent = '昭和43年創業・北見焼肉文化を作った老舗';
    spot5.querySelectorAll('li')[1].textContent = '商標登録された氷〆ホルモンが絶品';
    spot5.querySelectorAll('li')[2].textContent = '40日熟成の肉厚サガリ';

    spot6.querySelector('img').src = 'img/o.png';
    spot6.querySelector('h3').textContent = '羊屋鮮肉';
    spot6.querySelector('p').textContent = '6000~8000円';
    spot6.querySelectorAll('li')[0].textContent = '流通量1%未満の希少な北海道産羊肉が食べられる';
    spot6.querySelectorAll('li')[1].textContent = '臭みがまったくない';
    spot6.querySelectorAll('li')[2].textContent = '各部位を食べ比べすることができる';


    spot7.querySelector('img').src = 'img/dekamara (4).png';
    spot7.querySelector('h3').textContent = '百萬力 北見本店';
    spot7.querySelector('p').textContent = ' 6000~8000円';
    spot7.querySelectorAll('li')[0].textContent = '精肉店直営で、肉の質がかなり高い';
    spot7.querySelectorAll('li')[1].textContent = '囲炉裏×炭火';
    spot7.querySelectorAll('li')[2].textContent = '和牛ユッケなど生肉メニューが強い';

    spot8.querySelector('img').src = 'img/dekamara (1).png';
    spot8.querySelector('h3').textContent = '四条ホルモン';
    spot8.querySelector('p').textContent = '3000~4000円';
    spot8.querySelectorAll('li')[0].textContent = '新鮮なホルモンと地元肉が強い';
    spot8.querySelectorAll('li')[1].textContent = '秘伝の生ダレで食べるのが特徴的';
    spot8.querySelectorAll('li')[2].textContent = '炭火焼で香ばしく仕上がる';
}));





