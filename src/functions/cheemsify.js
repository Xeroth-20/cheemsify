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

export const cheemsify = (text) => {
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
