function showContent(number) {

  // すべて非表示にする
  const contents = document.querySelectorAll(".content");
  contents.forEach(content => {
    content.style.display = "none";
  });

  // 指定されたコンテンツだけ表示
  const target = document.getElementById("content" + number);
  if (target) {
    target.style.display = "block";
  }

  if (number == 1) {
    overview();
  }
   else if (number == 2) {
    rule();
  } else if (number == 3) {
    item();
  } else if (number == 4){
    positionAndSkill();
  }
}

function overview() {
  document.getElementById("overview").textContent = "「墜落した巨大飛行船の残骸世界」を舞台に、プレイヤーが生存者となり、資源を管理し、他の生存者と交流・対立しながら生き残ることを目指すシステム。"
}

function rule() {
  document.getElementById("rule").innerHTML =
    "墜落船回収業者（PC）を作成する<br>" +
    "→ 目的の墜落船を決める<br>" +
    "→ アイテムを購入する<br>" +
    "→ 墜落船に行く<br>" +
    "→ 墜落船を探索してお金を稼ぐ<br>" +
    "→ 壁街に戻る<br>" +
    "→ 精算";
}

function item() {
  const data = [
    ["01", "回収業者許可証", "1", "新品", "特殊", "<p>アイテム名：<br>回収業者許可証</p><p>効果：<br>墜落船を購入すると発行される許可証。これを持たずに船に潜ったことが知れると大変なことになる。</p><p>フレーバー：<br>あああ</p><p>備考：<br>墜落船の正規の回収業者だと証明する証。これがないと違法回収業者となり、処罰の対象となる。回収業者単位で所持していればOK。</p>"],

    ["02", "防毒面", "2", "新品", "20EU", "<p>アイテム名：<br>防毒面</p><p>効果：<br>【汚染耐性】 + 1</p><p>フレーバー：<br>この世界の環境は汚染されている。<br>場所によって程度の違いこそあるものの、基本的なそれが生物にとって厳しいものであることは同じだ。<br>それ故に防毒面を作る技術は異様に発達している。</p><p>備考：<br>すごく大切。</p>"],

    ["04", "頭陀袋", "1", "新品", "15EU", "<p>アイテム名：<br>頭陀袋</p><p>効果：<br></p><p>備考：<br>すごく大切。</p>"],

    ["04", "賦活剤A", "3", "新品", "10EU", "<p>アイテム名：<br>賦活剤A</p><p>効果：<br></p><p>備考：<br></p>"],

    ["05", "賦活剤B", "1", "新品", "30EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["05", "蘇生剤", "1", "新品", "10EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "混紡", "1", "新品", "10EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "戦斧", "2", "新品", "50EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "大鉈", "2", "新品", "100EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "屑盾", "1", "新品", "25EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "屑服", "1", "新品", "50EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "屑鎧", "2", "新品", "50EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "十字弓", "1", "新品", "50EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "螺子銃", "1", "新品", "50EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "台車", "1", "新品", "30EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "馬人畜", "10", "新品", "40EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["03", "かなてこ", "1", "新品", "15EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["05", "発光筒", "1", "新品", "15EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["07", "炸裂弾", "1", "新品", "30EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["04", "煙幕弾", "1", "新品", "20EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["06", "閃光弾", "1", "新品", "0EU", "<p>効果：<br></p><p>備考：<br></p>"],

    ["05", "救難信号弾", "1", "新品", "50EU", "<p>効果：<br></p><p>備考：<br></p>"],
    
    ["05", "現金", "1", "新品", "特殊", "<p>効果：<br></p><p>備考：<br></p>"],

  ];

  const tbody = document.getElementById("tableBody");

  const descriptionDiv = document.getElementById("itemDescription");

  // 再表示対策（重要）
  tbody.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < data[i].length - 1; j++) {
      const td = document.createElement("td");
      td.innerHTML = data[i][j];

      // ★ td はここで tr に追加
      tr.appendChild(td);
    }

    // ★ 行クリック時の処理
    tr.addEventListener("click", () => {
      descriptionDiv.innerHTML = data[i][5];
    });
    // ★ tr はここで tbody に追加
    tbody.appendChild(tr);
  }
}

function positionAndSkill(){
    document.getElementById("positionAndSkill").textContent = "役職"
}
