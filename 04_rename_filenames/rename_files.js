function renameFiles(array) {
  var newarray = [];
  
  function recRename(name, i) {
    i = i || 1;
    if (newarray.indexOf(name) === -1) {
      newarray.push(name);
    } else {
      var newname = "";
      var version = /\(\d+\)/;
      if (version.test(name)) {
        i++
        newname = name.replace(version,'(' + i + ')');
      } else {
        newname = name + '(' + i + ')';
      }
      recRename(newname, i);
    }
  }
  array.forEach(function(name) {
    recRename(name);
  })
  return newarray;
}