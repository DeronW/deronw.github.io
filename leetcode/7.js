/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var r;
    var t = x.toString().split('').reverse()
    if (t[t.length - 1] == '-') {
        t.pop()
        r = '-' + t.join('')
    } else {
        r = t.join('')
    }

    r = parseInt(r)
    return r > 2147483648 || r < -2147483647 ? 0 : r
};