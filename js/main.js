// ==================================
// サイドバーメニュー制御
// ==================================

// 設定を外部化
const CONFIG = {
    BREAKPOINT_PC: 835,
    ANIMATION: {
        DURATION: 300,
        DELAY: 1,
        EASING: 'ease-out'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        openBtn: document.querySelector('.js-menu-toggle'),
        sidebar: document.querySelector('.l-sidebar'),
        panel: document.querySelector('.p-sidebar'),
        overlay: document.querySelector('.c-sidebar-overlay'),
        closeEls: document.querySelectorAll('.js-sidebar-close')
    };

    // 要素チェック
    if (!elements.openBtn || !elements.sidebar || !elements.panel || !elements.overlay) {
        console.warn('サイドバー要素が見つかりません');
        return;
    }

    const desktopQuery = window.matchMedia(`(min-width: ${CONFIG.BREAKPOINT_PC}px)`);
    let isMobileMode = false;

    // アニメーション安全実行
    function safeAnimate(element, keyframes, options) {
        if (typeof element.animate === 'function' && typeof element.getAnimations === 'function') {
            element.getAnimations().forEach(anim => anim.cancel());
            return element.animate(keyframes, options);
        }
        return null;
    }

    // 開く (ムーブイン Right:ease-out / 300ms / delay 1ms)
    function openSidebar() {
        overlay.style.display = 'block';
        sidebar.classList.add('is-open');

        safeAnimate(panel, [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(0)' }
        ], {
            duration: CONFIG.ANIMATION.DURATION,
            easing: CONFIG.ANIMATION.EASING,
            fill: 'forwards',
            delay: CONFIG.ANIMATION.DELAY
        });

        sidebar.setAttribute('aria-hidden', 'false');
        openBtn.setAttribute('aria-expanded', 'true');
    }

    // 閉じる (即時 0ms)
    function closeSidebarInstant() {
        safeAnimate(panel, [
            { transform: 'translateX(0)' },
            { transform: 'translateX(100%)' }
        ], {
            duration: 0,
            fill: 'forwards'
        });

        overlay.style.display = 'none';
        sidebar.classList.remove('is-open');
        sidebar.setAttribute('aria-hidden', 'true');
        openBtn.setAttribute('aria-expanded', 'false');
    }

    // Escキー対応
    function handleKeyDown(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
            closeSidebarInstant();
        }
    }

    // モバイルモード開始
    function enterMobileMode() {
        if (isMobileMode) return;
        isMobileMode = true;

        panel.style.transform = 'translateX(100%)';
        overlay.style.display = 'none';
        sidebar.classList.remove('is-open');
        sidebar.setAttribute('aria-hidden', 'true');
        openBtn.setAttribute('aria-expanded', 'false');

        openBtn.addEventListener('click', openSidebar);
        elements.closeEls.forEach((el) => el.addEventListener('click', closeSidebarInstant));
        document.addEventListener('keydown', handleKeyDown);
    }

    // モバイルモード終了
    function exitMobileMode() {
        if (typeof panel.getAnimations === 'function') {
            panel.getAnimations().forEach((animation) => animation.cancel());
        }

        panel.style.removeProperty('transform');
        overlay.style.removeProperty('display');
        sidebar.classList.add('is-open');
        sidebar.setAttribute('aria-hidden', 'false');
        openBtn.setAttribute('aria-expanded', 'true');

        if (isMobileMode) {
            openBtn.removeEventListener('click', openSidebar);
            elements.closeEls.forEach((el) => el.removeEventListener('click', closeSidebarInstant));
            document.removeEventListener('keydown', handleKeyDown);
            isMobileMode = false;
        }
    }

    // ビューポート変更ハンドラ
    function handleViewportChange(e) {
        const isDesktop = e.matches ?? desktopQuery.matches;
        if (isDesktop) {
            exitMobileMode();
        } else {
            enterMobileMode();
        }
    }

    // 初期化
    handleViewportChange(desktopQuery);
    desktopQuery.addEventListener('change', handleViewportChange);
});
