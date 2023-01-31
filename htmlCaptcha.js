/*!
 * Simple JS plugin for generating a simple HTML Captcha in your form
 *
 * Copyright (c) 2023 @louisho5
 * Under the MIT license.
 *
 * @version 0.2.0
 */

class htmlCaptcha {
    constructor(options = {}) {
        this.options = options;
        if (this.options.debug == undefined) {
            this.options.debug = false;
        }
        if (this.options.target == undefined) {
            return false;
        } else {
            this.init();
        }
    }
    init() {
        var captchaDebug = this.options.debug == true;

        /* Captcha Canvas */
        var captchaContainer = document.querySelector(this.options.target);

        var captchaValidCode = document.createElement('canvas');
        captchaValidCode.setAttribute("id", "html-captcha-canvas");
        var captchaBtnRefresh = document.createElement('button');
        captchaBtnRefresh.setAttribute("id", "html-captcha-refresh");
        captchaBtnRefresh.textContent = "↻";
        var captchaValidIuput = document.createElement('input');
        captchaValidIuput.setAttribute("type", "text");
        captchaValidIuput.setAttribute("id", "html-captcha-input");
        captchaValidIuput.setAttribute("required", "true");
        captchaValidIuput.setAttribute("maxlength", "4");
        captchaValidIuput.setAttribute("placeholder", "Enter valid code");

        captchaContainer.appendChild(captchaValidCode);
        captchaContainer.appendChild(captchaBtnRefresh);
        captchaContainer.appendChild(captchaValidIuput);

        captchaBtnRefresh.addEventListener('click', function () {
            createHTMLCaptcha();
        }, false);

        createHTMLCaptcha();

        function createHTMLCaptcha() {
            var captchaCodeArray = [];
            var captchaCanvasWidth = 100;
            var captchaCanvasHeight = 35;
            var captchaCanvas = captchaValidCode;
            var captchaCtx = captchaCanvas.getContext('2d');
            captchaCanvas.width = captchaCanvasWidth;
            captchaCanvas.height = captchaCanvasHeight;
            var captchaCodeChar = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9,@,#,$,%';
            var htmlCaptchaCodeArray = captchaCodeChar.split(',');
            var captchaLength = htmlCaptchaCodeArray.length;
            for (let i = 0; i <= 3; i++) {
                var captchaIndex = Math.floor(Math.random() * captchaLength);
                var captchaDeg = (Math.random() * 30 * Math.PI) / 180;
                var captchaCode = htmlCaptchaCodeArray[captchaIndex];
                captchaCodeArray[i] = captchaCode.toUpperCase();
                var x = 10 + i * 20;
                var y = 20 + Math.random() * 8;
                captchaCtx.font = 'bold 30px sans-serif';
                captchaCtx.translate(x, y);
                captchaCtx.rotate(captchaDeg);
                captchaCtx.strokeText(captchaCode, 0, 0);
                captchaCtx.rotate(-captchaDeg);
                captchaCtx.translate(-x, -y);
            }
            /* Lines */
            for (let i = 0; i <= 3; i++) {
                captchaCtx.strokeStyle = 'rgba(0,0,0,0.25)';
                captchaCtx.beginPath();
                captchaCtx.moveTo(
                    Math.random() * captchaCanvasWidth,
                    Math.random() * captchaCanvasHeight
                );
                captchaCtx.lineTo(
                    Math.random() * captchaCanvasWidth,
                    Math.random() * captchaCanvasHeight
                );
                captchaCtx.stroke();
            }
            /* Points */
            for (let i = 0; i < 30; i++) {
                captchaCtx.strokeStyle = 'rgba(0,0,0,0.75)';
                captchaCtx.beginPath();
                var x = Math.random() * captchaCanvasWidth;
                var y = Math.random() * captchaCanvasHeight;
                captchaCtx.moveTo(x, y);
                captchaCtx.lineTo(x + 1, y + 1);
                captchaCtx.stroke();
            }
            var captchaValidationCode = captchaCodeArray.join('');
            captchaValidIuput.setAttribute("pattern", "^(" + captchaValidationCode + ")$");
            if (captchaDebug) {
                console.log('Validation Code: ' + captchaValidationCode);
            }
        }
        /* Styling */
        captchaValidCode.style.setProperty("border", "1px solid lightgrey");
        captchaValidCode.style.setProperty("box-sizing", "border-box");
        captchaBtnRefresh.style.setProperty("border", "1px solid lightgrey");
        captchaBtnRefresh.style.setProperty("border-radius", "5px");
        captchaBtnRefresh.style.setProperty("color", "#666");
        captchaBtnRefresh.style.setProperty("font-family", "sans-serif");
        captchaBtnRefresh.style.setProperty("font-size", "20px");
        captchaBtnRefresh.style.setProperty("vertical-align", "top");
        captchaBtnRefresh.style.setProperty("width", "37px");
        captchaBtnRefresh.style.setProperty("height", "37px");
        captchaBtnRefresh.style.setProperty("padding", "0");
        captchaBtnRefresh.style.setProperty("margin", "auto 3px");
        captchaBtnRefresh.style.setProperty("cursor", "pointer");
		captchaBtnRefresh.style.setProperty("-webkit-appearance", "none");
		captchaBtnRefresh.style.setProperty("appearance", "none");
		captchaValidIuput.style.setProperty("display", "flex");
		captchaValidIuput.style.setProperty("font-size", "16px");
		captchaValidIuput.style.setProperty("width", "130px");
		captchaValidIuput.style.setProperty("height", "30px");
		captchaValidIuput.style.setProperty("padding", "0 5px");
		captchaValidIuput.style.setProperty("border", "1px solid lightgrey");
		captchaValidIuput.style.setProperty("background", "white");
		captchaValidIuput.style.setProperty("-webkit-appearance", "none");
		captchaValidIuput.style.setProperty("appearance", "none");
    }
}