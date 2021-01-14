const cheemsify = (text) => {
    return text.replace(/[aáeéiíoóuú]+[^aáeéiíoóuúmnñry]/gi, (value) => {
        const pre = value.slice(0, value.length - 1);
        const post = value[value.length - 1];
        
        return pre + 'm' + post;
    });
};

const init = () => {
    const defaultValue = 'Contemxtom éml teniam unam...';
    const jxText = document.querySelector('#txt');
    const jxBtn = document.querySelector('.jx-btn');
    const jxResult = document.querySelector('.result-body');
    const cleanButton = document.querySelector('.clean-option');
    const copyButton = document.querySelector('.copy-option');
    
    const cleanText = () => {
        jxText.value = null;
        jxResult.innerText = defaultValue;
    };

    const asignText = () => {
        const text = jxText.value || defaultValue;
        jxResult.innerText = cheemsify(text);
    };


    jxText.addEventListener('keydown', () => {
        if ($event.keyCode == 13) {
            asignText();
        } 
    });

    jxBtn.addEventListener('click', asignText);

    cleanButton.addEventListener('click', cleanText);

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(jxResult.innerText);
    });
};

window.addEventListener('load', () => {
    init();
});