# HTML Captcha

Version 0.1.0

## Summary

Generate a simple HTML Captcha in your form with single line of code. 

* <strong>Super lightweight, only 3KB</strong><br>
* <strong>Only single JS file</strong><br>
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

<script src="cookieBar.min.js"></script>
<script>
    new htmlCaptcha({
		target: '#captcha'
	});
</script>

```

## Parameters

There are 2 optional parameters in this plugin:

```js script

new htmlCaptcha({
    target: '#captcha',
    debug: true		// Will show the valid code in console
});

```

## License

This plugin is under the MIT license.
