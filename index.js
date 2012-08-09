
/**
 * Expose `thumb()`.
 */

module.exports = thumb;

/**
 * Scale `img` to fit within `width` / `height`
 * and return `Image`.
 *
 * @param {String|Image} img or data uri
 * @param {Number} width [200]
 * @param {Number} height [200]
 * @return {Image}
 * @api public
 */

function thumb(img, width, height) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  width = width || 200;
  height = height || width || 200;

  img = 'string' == typeof img
    ? fromURI(img)
    : img;

  var ratio = img.width / width > img.height / height
    ? img.width / width
    : img.height / height;

  if (ratio > 1) {
    width = Math.ceil(img.width / ratio);
    height = Math.ceil(img.height / ratio);
  } else {
    width = img.width;
    height = img.height;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);

  return fromURI(canvas.toDataURL());
}

/**
 * Return `Image` from data uri `str`.
 *
 * @param {String} str
 * @return {Image}
 * @api private
 */

function fromURI(str) {
  var img = new Image
  img.src = str;
  return img;
}