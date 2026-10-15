document.getElementById('changeText').addEventListener('click', function() {
    const paragraph = document.querySelector('main p');
    if (paragraph.textContent.includes('第一段')) {
        paragraph.textContent = '文字已被成功修改！这是JavaScript的魔力。';
    } else {
        paragraph.textContent = '165。';
    }
});
