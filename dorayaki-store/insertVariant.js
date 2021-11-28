var file = document.getElementById('fileToUpload');

file.onchange = function(e) {
    var ext = this.value.match(/\.([^\.]+)$/)[1];
    switch (ext) {
      case 'jpg':
      case 'bmp':
      case 'png':
      case 'tif':
        break;
      default:
        alert('Not allowed');
        this.value = '';
    }
  };
  