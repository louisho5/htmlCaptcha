# HTML Captcha

Version 0.3.0

## Summary

Generate a simple HTML Captcha in your form with single line of code. 

* <strong>Super lightweight, less then 10KB</strong><br>
* <strong>No frameworks. No libraries.</strong><br>
* <strong>Minimal and ease to use</strong><br>

## Author

@louisho5

## Installation

To include the plugin in your code:

```js script

<script src="htmlCaptcha.js"></script>

```

or


```js script

<script src="htmlCaptcha.min.js"></script>
	
```

## Requirements/Browsers

Works in Edge 12+, Chrome 29+, Safari 9+, Firefox 28+.

## Code Example

**index.html**:

```html

<form>
    <div id="captcha"></div>
</form>

<script src="htmlCaptcha.min.js"></script>
<script>
    new htmlCaptcha({
        target: '#captcha'
    });
</script>

```

## Parameters

There are 2 parameters in this plugin:

```js script

new htmlCaptcha({
    target: '#captcha',	// Required
    placeholder: 'Enter valid code',	// Optional
    debug: true		// Optional, Will log the validation code in console
});

```

## Styling

It is possible to override the CSS for all items:

```css

.html-captcha-canvas {
    border: none !important;
}
.html-captcha-refresh {
    border-radius: 0 !important;
}
.html-captcha-input {
    color: red !important;
}

```

## License

This plugin is under the MIT license.
