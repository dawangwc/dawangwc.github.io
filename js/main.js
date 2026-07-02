/* ============================================
   云序数字工作室 - 交互脚本
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === 汉堡菜单 ===
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // 点击菜单项后关闭
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });
  }

  // === FAQ 手风琴 ===
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');

      // 关闭所有
      document.querySelectorAll('.faq-item.active').forEach(i => {
        i.classList.remove('active');
      });

      // 如果之前未展开，则展开
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // === 导航栏滚动阴影 ===
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    const updateNavShadow = () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,.1)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', updateNavShadow, { passive: true });
    updateNavShadow(); // 初始化
  }

  // === 平滑滚动到页面锚点（配合 CSS scroll-behavior） ===
  // CSS 已设置 scroll-behavior: smooth，此处为兼容增强

});
