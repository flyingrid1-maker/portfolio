const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const menuWin = document.querySelector('#menuWin');
const linkLists = document.querySelectorAll('#menuWin li');


// メニューを開く
const openKeyframe = () => {
    menuWin.style.display = 'block';
    menuWin.animate(
        {
            translate: ['100vw', '0px'],
            opacity: [0, 1],
        },
        {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    openBtn.animate(
        {
            opacity: [1, 0],
        },
        {
            duration: 800,
            fill: 'forwards',
        }
    ).onfinish = () => {
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    };

    linkLists.forEach((linkList, index) => {
        linkList.animate(
            {
                opacity: [0, 1],
                translate: ['2rem', 0],
            },
            {
                duration: 1500,
                delay: 300 * index,
                easing: 'ease',
                fill: 'forwards',
            }
        );
    });

    closeBtn.animate(
        {
            opacity: [0, 1],
        },
        {
            duration: 500,
            fill: 'forwards',
        }
    );
};

// メニューを閉じる
const closeKeyframe = () => {
    menuWin.animate(
        {
            translate: ['0px', '100vw'],
            opacity: [1, 0],
        },
        {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    ).onfinish = () => {
        menuWin.style.display = 'none';
        closeBtn.style.display = 'none';
        openBtn.style.display = 'block';
    };

    closeBtn.animate(
        {
            opacity: [1, 0],
        },
        {
            duration: 500,
            fill: 'forwards',
        }
    );

    linkLists.forEach((linkList, index) => {
        linkList.animate(
            {
                opacity: [1, 0],
                translate: ['2rem', 0],
            },
            {
                duration: 500,
                easing: 'ease',
                fill: 'forwards',
            }
        );
    });

    openBtn.animate(
        {
            opacity: [0, 1],
        },
        {
            duration: 500,
            fill: 'forwards',
        }
    );
};

// メニューを開く
if(window.matchMedia("screen and (max-width: 959px)").matches){
    openBtn.addEventListener('click', openKeyframe);
}
// メニューを閉じる
// if(window.matchMedia("screen and (min-width: 959px)").matches){
    closeBtn.addEventListener('click', closeKeyframe);
// }


// メインビジュアルをふわっと表示
// const mainImg = document.getElementById("mainVisual");
// const mainImg = document.getElementById("mainCatchcopy");
// 画像のロード完了時にアニメーションを開始する
// mainImg.onload = () => {
//     mainImg.animate(
//         {
//             opacity: [0, 1],
//         },
//         {
//             duration: 2000,
//             fill: 'forwards',
//         }
//     );
// };
// すでに画像がキャッシュされている場合でもonloadが呼び出されるようにチェック
// if (mainImg.complete) {
//     mainImg.onload();
// }



// お悩み画像をスクロールで表示
// ① ターゲット要素を取得
const image = document.getElementById("nayamiImg");
// ③ オプション設定 ※デフォルトで良いなら記述しなくでも大丈夫です！
const options = {
  threshold: 0.5,
};
// ④ 要素が表示されたら実行
function showImage(entries) {  
  if (entries[0].isIntersecting) {
    image.style.opacity = 1;
  }
}
// ② IntersectionObserverを呼び出す
const observer = new IntersectionObserver(showImage, options);
// ⑤ 実行
observer.observe(image);