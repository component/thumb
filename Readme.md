
# Thumb

  Scale an image or data uri within the given dimensions.

  ![canvas thumbnail image generator](http://f.cl.ly/items/3V2X113N01042G1H0A1u/Screen%20Shot%202012-08-09%20at%2011.35.20%20AM.png)

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
```

## License

  MIT