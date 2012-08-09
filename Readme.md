
# Thumb

  Scale an image or data uri within the given dimensions.

## Installation

```
$ npm install thumb-component
```

## Example

```js
var thumb = require('thumb');
var input = document.querySelector('input');

input.onchange = function(e){
  var reader = new FileReader;

  reader.onload = function(){
    var img = thumb(reader.result);
    document.body.appendChild(img);
    document.body.appendChild(thumb(img, 100, 100));
    document.body.appendChild(thumb(img, 100, 50));
    document.body.appendChild(thumb(img, 50, 100));
    document.body.appendChild(thumb(img, 25));
  };

  reader.readAsDataURL(input.files[0]);
};
``

## License

  MIT