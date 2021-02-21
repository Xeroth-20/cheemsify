const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;

export const datediff = (dateToCompare) => {
    const now = Date.now();
    const msdiff = now - dateToCompare.getTime();
    const pre = 'Hace ';
    let post;

    if (msdiff < minute) {
        post = 'un momento';
    } else if(msdiff < hour) {
        post = `${Math.floor(msdiff / minute)} minutos(s)`;
    } else if(msdiff < day) {
        post = `${Math.floor(msdiff / hour)} hora(s)`;
    } else if(msdiff < week) {
        post = `${Math.floor(msdiff / day)} día(s)`;
    } else {
        post = '?';
    }

    return pre + post;
};
