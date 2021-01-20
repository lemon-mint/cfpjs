let cfp2js = async () => {
    async function HASH(type, message) {
        const msgUint8 = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest(type, msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }
    let fp = "";

    fp += String(window.screen.width * window.devicePixelRatio);
    fp += String(window.screen.height * window.devicePixelRatio);
    fp += String(new Date().getTimezoneOffset());
    try {
        fp += String(new Gyroscope().activated);
        fp += "Gyro_OK";
    } catch {
        fp += "Gyro_ERROR";
    }
    try {
        fp += String(new Accelerometer().activated);
        fp += "Accel_OK";
    } catch {
        fp += "Accel_ERROR";
    }

    fp += String(typeof (window.matchMedia));
    fp += String(window.matchMedia);
    fp += String(Object.keys(navigator));
    //fp += String(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    fp += String(document.fonts.check("10px monospace"));
    fp += String(document.fonts.check("10px Andale Mono"));
    fp += String(document.fonts.check("10px Arial Black"));
    fp += String(document.fonts.check("10px Courier New"));
    fp += String(document.fonts.check("10px Malgun Gothic"));
    fp += String(document.fonts.check("10px Nanum Gothic"));
    fp += String(document.fonts.check("10px Open Sans"));
    fp += String(document.fonts.check("10px Noto Sans"));
    fp += String(document.fonts.check("10px Noto Serif"));
    fp += String(document.fonts.check("10px Adobe Arabic"));

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

    fp += String(typeof (MathMLElement));
    fp += String(typeof (PointerEvent));
    fp += String(typeof (window.mozInnerScreenX));
    fp += String(typeof (window.u2f));
    fp += String(typeof (WebGL2RenderingContext));
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
    var __fp__b_2_g__ = __fp__ctx__.createLinearGradient(0, 0, 0, 150);
    __fp__b_2_g__.addColorStop(0, "black");
    __fp__b_2_g__.addColorStop(1, "gray");
    __fp__ctx__.fillStyle = __fp__b_2_g__;
    __fp__ctx__.shadowBlur = 20;
    __fp__ctx__.shadowColor = "black";
    __fp__ctx__.beginPath();
    __fp__ctx__.arc(50, 80, 30, 0, 2 * Math.PI);
    __fp__ctx__.stroke();
    __fp__ctx__.beginPath();
    __fp__ctx__.arc(40, 70, 50, 0, 2 * Math.PI);
    __fp__ctx__.rotate(5 * Math.PI / 180);
    __fp__ctx__.font = "30px Arial";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁🍕😀😁", 10, 50);
    __fp__ctx__.font = "15px Big Caslon";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 60);
    __fp__ctx__.font = "15px Bodoni 72";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 100);
    __fp__ctx__.font = "30px sans-serif";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 70);
    __fp__ctx__.font = "15px monospace";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 80);
    __fp__ctx__.font = "15px Yu Gothic";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 90);
    __fp__ctx__.font = "15px Gulim";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 110);
    __fp__ctx__.font = "15px Malgun Gothic";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 120);
    __fp__ctx__.font = "15px Batang";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 130);
    __fp__ctx__.font = "15px BatangChe";
    __fp__ctx__.fillText("abcd-*Z 가加🍕😀😁", 10, 140);
    __fp__ctx__.stroke();
    ___c___.toDataURL("image/png");
    fp += ___c___.toDataURL("image/png");
    ___c___.hidden = true;
    ___c___.remove()
    let __fp__webgl___ = document.createElement("canvas");
    document.body.appendChild(__fp__webgl___);
    let __fp__webgl_ctx__ = __fp__webgl___.getContext("webgl");
    try {
        var debugInfo = __fp__webgl_ctx__.getExtension('WEBGL_debug_renderer_info');
        fp += String(__fp__webgl_ctx__.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL));
        fp += String(__fp__webgl_ctx__.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
        fp += "get_webgl_ok";
    } catch {
        fp += "get_webgl_error";
    }
    __fp__webgl___.hidden = true;
    __fp__webgl___.remove();

    fp = await HASH("SHA-384", fp);

    return fp
};
