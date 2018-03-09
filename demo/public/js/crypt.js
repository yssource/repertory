function encode64(g) {
    if (/([^\u0000-\u00ff])/.test(g)) {
        throw new Error("Can't base64 encode non-ASCII characters.")
    }
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    c = 0,
    f, d, b, a = [];
    while (c < g.length) {
        f = g.charCodeAt(c);
        b = c % 3;
        switch (b) {
        case 0:
            a.push(e.charAt(f >> 2));
            break;
        case 1:
            a.push(e.charAt((d & 3) << 4 | (f >> 4)));
            break;
        case 2:
            a.push(e.charAt((d & 15) << 2 | (f >> 6)));
            a.push(e.charAt(f & 63));
            break
        }
        d = f;
        c++
    }
    if (b == 0) {
        a.push(e.charAt((d & 3) << 4));
        a.push("==")
    } else {
        if (b == 1) {
            a.push(e.charAt((d & 15) << 2));
            a.push("=")
        }
    }
    return a.join("")
}
function decode64(g) {
    g = g.replace(/\s/g, "");
    if (! (/^[a-z0-9\+\/\s]+\={0,2}$/i.test(g)) || g.length % 4 > 0) {
        throw new Error("Not a base64-encoded string.")
    }
    var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    f, c, e, b = 0,
    a = [];
    g = g.replace(/=/g, "");
    while (b < g.length) {
        f = d.indexOf(g.charAt(b));
        e = b % 4;
        switch (e) {
        case 1:
            a.push(String.fromCharCode(c << 2 | f >> 4));
            break;
        case 2:
            a.push(String.fromCharCode((c & 15) << 4 | f >> 2));
            break;
        case 3:
            a.push(String.fromCharCode((c & 3) << 6 | f));
            break
        }
        c = f;
        b++
    }
    return a.join("")
}
function ord(c) {
    var e = c + "",
    d = e.charCodeAt(0);
    if (55296 <= d && d <= 56319) {
        var b = d;
        if (e.length === 1) {
            return d
        }
        var a = e.charCodeAt(1);
        return ((b - 55296) * 1024) + (a - 56320) + 65536
    }
    if (56320 <= d && d <= 57343) {
        return d
    }
    return d
}
function decrypt(a, e) {
    var d = "";
    a = decode64(a);
    var c = 0;
    for (c = 0; c < a.length; c++) {
        var f = a.substr(c, 1);
        var b = e.substr(c % e.length - 1, 1);
        f = Math.floor(ord(f) - ord(b));
        f = String.fromCharCode(f);
        d = d + f
    }
    return d
}
function encrypt(a, e) {
    var d = "";
    var c = 0;
    for (c = 0; c < a.length; c++) {
        var f = a.substr(c, 1);
        var b = e.substr(c % e.length - 1, 1);
        f = Math.floor(ord(f) + ord(b));
        f = String.fromCharCode(f);
        d = d + f
    }
    return encode64(d)
};

//document.write(decrypt('qJzXqw==', 'mySuperSecretPassword'));����
// document.write(encrypt('test','mySuperSecretPassword'));����

//document.write(decrypt('qJzXqw==', 'mySuperSecretPassword'));����
// document.write(encrypt('test','mySuperSecretPassword'));����
