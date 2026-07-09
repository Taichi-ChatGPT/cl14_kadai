// 蝶々（すべて）にマウスが乗ったら画面内のどこかにランダムに動かす
document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    const newX = Math.random() * 850;
    const newY = Math.random() * 420;
    
    el.style.left = newX + 'px';
    el.style.top = newY + 'px';
  });
});

// 青い奴（5匹すべて）にマウスが乗ったら動かす
document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    
    // 【ポイント】家の中（窓の範囲）だけで動く確率を高く、たまに外に飛び出すようにします
    // 画面全体（0〜900）の中でランダムな位置を計算
    const newX = Math.random() * 850;
    const newY = Math.random() * 400;

    // 窓の安全な範囲（家の中の座標）
    const minX = 320;
    const maxX = 820;
    const minY = 200;
    const maxY = 330;

    // もし、計算された移動先が「家の中」だったら、そのまま移動して消えません！
    if (newX >= minX && newX <= maxX && newY >= minY && newY <= maxY) {
      el.style.left = newX + 'px';
      el.style.top = newY + 'px';
    } else {
      // もし計算された移動先が「家の外」だった場合：
      // 5回に4回は家の中に無理やり引き戻して動かし続け、残りの1回だけ本当に外へ飛び出させて消します
      if (Math.random() < 0.8) {
        // 家の中のランダムな位置に直して移動（これなら消えずに家の中で動きます）
        const insideX = minX + Math.random() * (maxX - minX);
        const insideY = minY + Math.random() * (maxY - minY);
        el.style.left = insideX + 'px';
        el.style.top = insideY + 'px';
      } else {
        // 本当に外に飛び出させて、消す！
        el.style.left = newX + 'px';
        el.style.top = newY + 'px';
        el.classList.add('hidden'); // 外に出たので消える
      }
    }
  });
});