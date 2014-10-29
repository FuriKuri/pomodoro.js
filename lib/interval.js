module.exports = function(func, wait, times, callback) {
  var interv = function(w, t) {
    return function() {
      if (typeof t === "undefined" || t-- > 0) {
        setTimeout(interv, w);
        try {
          func.call(null);
          if (t == 0) {
            callback.call(null);
          }
        } catch(e) {
          t = 0;
          throw e.toString();
        }
      } 
    };
  }(wait, times);
  setTimeout(interv, wait);
};
