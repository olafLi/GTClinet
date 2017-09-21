import gps from './gps'

let Formatter = {
    formatter (data, style = "default") {
        var _this = this
        var lines = data.split('\n');
        var result = [];
        lines.forEach(function (line) {
            if (line === null || line.length == 0 || line.trim().length == 0) {
                result.push("error:line is null or empty");
                return;
            }
            var line_result = _this.transfer(line, style)
            result.push(line_result)
        })
        return result.join('\n');
    },
    transfer (line, style){
        var _this = this
        var regexp = /[1-9]\d*\.?\d*/gi;
        var match;
        var array = line.match(regexp)

        if (array == null || array.length == 0) {
            return line;
        }
       
        let length = array.length
        if (length % 2 == 1) {
            return "error:this line data formatter error:" + line;
        }
    
        var results = [];
        for (var i = 0; i < length; i += 2) {
            var item = {
                lat: Number(array[1]),
                lon: Number(array[0])
            }
            console.log(item)
            var p = gps.gcj_decrypt(item.lat, item.lon)
            results.push(_this.stringify(p, style))
        }
        if (style === "json") {
            return "[" + results.join(',') + "]";
        }
        return results.join(' ');
    },
    stringify (p, style){
        if (style === "json") {
            return "{ lat:" + p.lat + ", log" + p.lon + "}"
        }
        return p.lat + " , " + p.lon;
    }
}
export default Formatter