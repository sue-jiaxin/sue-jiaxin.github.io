document.getElementById('changeText').addEventListener('click', function() {
    const paragraph = document.querySelector('main p');
    if (paragraph.textContent.includes('第一段')) {
        paragraph.textContent = '废物吴言忠。';
    } else {
        paragraph.textContent = 'fw吴言忠。';
    }
});
