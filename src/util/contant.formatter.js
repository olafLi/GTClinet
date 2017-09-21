var Formatter = function(){}
Formatter.prototype.contentFormatter = function(data, style = "default") {
    var lines = data.split('\n');
    var result = [];
    lines.forEach(function (line) {
        if (line.length == 0 || line.trim().length == 0) {
            result.push("error:line is null or empty");
            return;
        }
        var line_result = this.transfer(line, style)
        result.push(line_result)
    })
    return result.join('\n');
}
Formatter.prototype.transfer = function(line, style) {
    var regexp = /d+\.?d*/gi;
    var array = line.match(regexp)
    if (array.length == 0) {
        return line;
    }

    let length = array.length
    if (length % 2 == 0) {
        return "error:this line data formatter error:" + line;
    }

    var results = [];
    for (i = 0; i < length; i += 2) {
        var item = {
            lat: Number(array[0]),
            lon: Number(array[1])
        }
        var p = gps.gcj_decrypt(data.lat, data.lon)
        results.push(this.stringify(p, style))
    }
    if (style === "json") {
        return "[" + results.join(',') + "]";
    }
    return results.join(' ');
}

Formatter.prototype.stringify = function (p, style) {
    if (style === "json") {
        return "{ lat:" + p.lat + ", log" + p.lon + "}"
    }
    return p.lat + " , " + p.lon;
}

export default Formatter