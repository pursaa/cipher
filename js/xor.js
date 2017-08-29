function xor(key, message){
        var output = [];
        for (var i = 0; i < message.length; ){
                for(var j = 0; (j < key.length && i < message.length); i++, j++) {
                        output += String.fromCharCode(message[i].charCodeAt(0) ^ key[j].charCodeAt(0));
                        console.log(output);
                }
        }
        output = output.hexEncode();
        console.log(output);
        return output;
}

function xorDecode(key, message){
        message = message.hexDecode();
        var output = [];
        for (var i = 0; i < message.length; ){
                for(var j = 0; (j < key.length && i < message.length); i++, j++) {
                        output += String.fromCharCode(message[i].charCodeAt(0) ^ key[j].charCodeAt(0));
                        console.log(output);
                }
        }
        console.log(output);
        return output;
}

String.prototype.hexEncode = function(){
        var hex, i;
        var result = "";
        for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
        }
        return result
}

String.prototype.hexDecode = function(){
        var j;
        var hexes = this.match(/.{1,4}/g) || [];
        var back = "";
        for(j = 0; j<hexes.length; j++) {
                back += String.fromCharCode(parseInt(hexes[j], 16));
        }
        return back;
}
