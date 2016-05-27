/**
 * Created by ogi on 27.05.16.
 */

module.exports = function (source) {
    // console.log("start reactIntlJson-loader source:", source);

    this.cacheable && this.cacheable();
    var value = typeof source === "string" ? JSON.parse(source) : source;
    // console.log(" plugin value:", value);

    var result = {};
    value.map(function (e) {
        result [e.id] = e.defaultMessage;
    })
    // console.log(" plugin result:", result);

    // this.value = [value];
    return "module.exports = " + JSON.stringify(result, undefined, "\t") + ";";
}