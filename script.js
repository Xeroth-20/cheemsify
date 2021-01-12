const cheemsify = (text) => {
    return text.replace(/[aáeéiíoóuú]+[^mnaáeéiíoóuú]/gi, (value) => {
        const pre = value.slice(0, value.length - 1);
        const post = value[value.length - 1];
        
        return pre + 'm' + post;
    });
};

const init = () => {
    const jxText = document.querySelector('#txt');
    const jxBtn = document.querySelector('.jx-btn');
    const jxResult = document.querySelector('.jx-result');
    const imgWrap = document.querySelector('.img-wrap');
    const asignText = () => {
        const text = jxText.value || 'Conmtemxtom eml temniam umna...';
        jxResult.innerText = cheemsify(text);
    };

    jxText.addEventListener('keydown', ($event) => {
        if ($event.keyCode == 13) {
            asignText();
        } 
    });
    jxBtn.addEventListener('click', ($event) => {
        asignText();
    });
    imgWrap.addEventListener('click', ($event) => {
        navigator.clipboard.writeText(jxResult.innerText);
    });
};

window.addEventListener('load', () => {
    init();
});