// set click listener
var imageHelper = require('imageInfo')
var images = imageHelper.getImageNames();
var imagesPath = imageHelper.paths.images;

var ImagesCollection = Backbone.Collection.extend({
  model: imageEntry,

  events: {
    click: selectImage,
  },

  initialize: function() {
    for (var i = 0; i < images.length; i++) {
      this.addImage(images[i]);
    }
  },

  addImage: function(image) {
    this.add({
      title: image.title,
      src: imagePath+'/'+image.fileName,
    });
  },
  // selectImage: function(e) {
  //   var ta

  // },

});
