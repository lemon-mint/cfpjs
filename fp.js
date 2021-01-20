cfpjs = async () => {
    async function HASH(type, message) {
        const msgUint8 = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest(type, msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }
    let cf_response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    let cf_text = await cf_response.text();
    let cf_lines = cf_text.match(/[^\r\n]+/g);
    let cf_data = {};
    cf_lines.forEach((line) => {
        cf_data[line.split("=")[0]] = line.split("=")[1];
    });
    let fp = "";
    
    fp += String(cf_data.colo);
    fp += String(cf_data.ip);
    fp += String(cf_data.uag);
    fp += String(cf_data.http);
    fp += String(cf_data.loc);
    fp += String(cf_data.tls);
    fp += String(cf_data.sni);
    fp += String(cf_data.warp);
    fp += String(cf_data.gateway);
    fp += String(cf_data.visit_scheme);
    fp = await HASH("SHA-384", fp);

    fp += navigator.userAgent;
    fp += String(navigator.javaEnabled());
    fp += String(navigator.javaEnabled());
    fp += String(navigator.doNotTrack);
    fp += String(navigator.appVersion);
    fp += String(navigator.language);
    fp += String(navigator.languages);
    fp += String(navigator.appName);
    fp += String(navigator.appCodeName);
    fp += String(navigator.product);
    fp += String(navigator.hardwareConcurrency);
    fp += String(navigator.maxTouchPoints);
    fp += String(navigator.deviceMemory);
    fp += String(navigator.cookieEnabled);
    fp += String(navigator.userActivation);
    fp += String(navigator.plugins);
    fp += String(navigator.plugins.length);
    fp += String(navigator.oscpu);
    fp += String(navigator.buildID);
    fp += navigator.userAgent;
    fp = await HASH("SHA-384", fp);

    for (let index = 0; index < navigator.plugins.length; index++) {
        const plugin = navigator.plugins[index];
        fp += String(plugin);
        fp += String(plugin.name);
        fp += String(plugin.description);
        fp += String(plugin.length);
        fp += String(plugin.filename);
    }
    fp = await HASH("SHA-384", fp);

    fp += String(typeof(MathMLElement));
    fp += String(typeof(PointerEvent));
    fp += String(typeof(window.mozInnerScreenX));
    fp += String(typeof(window.u2f));
    fp += String(typeof(WebGL2RenderingContext));
    fp = await HASH("SHA-384", fp);

    fp += String(Math.PI);
    fp += String(Math.E);
    fp += String(Math.LN2);
    fp += String(Math.LN10);
    fp += String(Math.SQRT1_2);
    fp += String(Math.SQRT2);
    fp = await HASH("SHA-384", fp);

    let ___c___ = document.createElement("canvas");
    document.body.appendChild(___c___);
    ___c___.width = 300;
    ___c___.height = 300;
    let __fp__ctx__ = ___c___.getContext("2d");
    __fp__ctx__.beginPath();
    __fp__ctx__.arc(50, 80, 30, 0, 2 * Math.PI);
    __fp__ctx__.stroke();
    __fp__ctx__.beginPath();
    __fp__ctx__.arc(40, 70, 50, 0, 2 * Math.PI);
    __fp__ctx__.font = "30px Arial";
    __fp__ctx__.fillText("abcd-*Z 가加", 10, 50);
    __fp__ctx__.stroke();
    ___c___.toDataURL("image/png");
    fp += ___c___.toDataURL("image/png");
    ___c___.hidden = true;
    ___c___.remove()
    fp = await HASH("SHA-384", fp);

    return fp
};
