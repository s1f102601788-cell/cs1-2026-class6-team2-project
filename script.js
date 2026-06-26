document.getElementById('logo-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // サイドバーに 'active' クラスを付け外しする
    sidebar.classList.toggle('active');

    // 必要に応じて、body全体にクラスを付けてメインエリアの動きを制御
    body.classList.toggle('sidebar-active');
});