// figmaの指定
// - アフターディレイ: 1ms
// - ムーブイン Right（ease-out / 300ms）でオーバーレイを開く
// - クリック時は即時（0ms）で閉じる

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.js-menu-toggle');    //開くボタン
    const sidebar = document.querySelector('.l-sidebar');        //サイドバー外枠(role="dialog")
    const panel = document.querySelector('.p-sidebar');          //パネル本体
    const overlay = document.querySelector('.c-sidebar-overlay');  //黒いオーバーレイ
    const closeEls = document.querySelectorAll('.js-sidebar-close');  //閉じるトリガー（✕ボタン/オーバーレイ）

    if (!openBtn || !sidebar || !panel || !overlay) return;

    // 初期状態:閉じ
    panel.style.transform = 'translateX(100%)';   //画面の右外で待機
    overlay.style.display = 'none';     // オーバーレイ非表示
    sidebar.setAttribute('aria-hidden', 'true'); 
    openBtn.setAttribute('aria-expanded', 'false');

    

})