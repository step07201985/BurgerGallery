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

    // 開く (ムーブイン Right:ease-out / 300ms / delay 1ms)
    function openSidebar() {
        overlay.style.display = 'block'; 

        panel.animate(
            [
                { transform: 'translateX(100%)' },
                { transform: 'translateX(0)' }
            ],
            {
                duration: 300,    // animation duration 300ms
                easing: 'ease-out',  // animation timing function ease-out
                fill: 'forwards',   
                delay: 1          // animation delay 1ms
            }
        );
        
        sidebar.setAttribute('aria-hidden', 'false');
        openBtn.setAttribute('aria-expanded', 'true');
    }

    // 閉じる (即時 0ms)

})