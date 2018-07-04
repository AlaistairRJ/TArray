Array.prototype.first = function () {
    if (this.length)
        return this[0];

    return {};
};

Array.prototype.last = function () {
    if (this.length)
        return this[this.length - 1];

    return {};
};

Array.prototype.top = function (param) {
    if (param >= this.length)
        return this;

    var list = [];
    for (var i = 0; i < param; i++)
        list.push(this[i]);

    return list;
};