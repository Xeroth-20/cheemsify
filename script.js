String.prototype.majority = function () {
    const lowercaseCount = (this.match(/[a-záéíóú]/g) || []).length;
    const uppercaseCount = (this.match(/[A-ZÁÉÍÓÚ]/g) || []).length;

    if (lowercaseCount == uppercaseCount) return 0

    return uppercaseCount > lowercaseCount ? 1 : -1;
};

String.prototype.insert = function (index, value = '') {
    if (index == null || index < 0 || index >= this.length) return '';

    const pre = this.slice(0, index);
    const post = this.slice(index);

    return pre + value + post;
};

const expr = /[aáeéiíoóuú]+[^aáeéiíoóuúmnñry]/gi;

/*  OLD FUNCTION
    const cheemsify = (text) => {
        return text.replace(/[aáeéiíoóuú]+[^aáeéiíoóuúmnñry]/gi, (value) => {
            const pre = value.slice(0, value.length - 1);
            const post = value[value.length - 1];
            
            return pre + 'm' + post;
        });
    };
*/

const cheemsify = (text) => {
    const wordList = text.split(' ').map((word) => word + ' ');
    const cheemsifiedWordList = wordList.map((word) => {
        const majority = word.majority();
        const cheemsifiedWord = word.replace(expr, (value) => {
            return value.insert(value.length - 1, majority == 1 ? 'M' : 'm');
        });

        return cheemsifiedWord.slice(0, -1); // Remove added whitespace
    });

    return cheemsifiedWordList.join(' ');
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

    const assignText = () => {
        const text = jxText.value || defaultValue;
        jxResult.innerText = cheemsify(text);
    };


    jxText.addEventListener('keydown', ($event) => {
        if ($event.keyCode == 13) {
            assignText();
        }
    });

    jxBtn.addEventListener('click', assignText);

    cleanButton.addEventListener('click', cleanText);

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(jxResult.innerText);
    });
};

window.addEventListener('load', () => {
    init();
});
