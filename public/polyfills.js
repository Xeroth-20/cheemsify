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
