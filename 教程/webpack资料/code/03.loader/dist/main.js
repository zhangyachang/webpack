(() => {
  'use strict';
  function e(e, n) {
    for (var t = 0; t < n.length; t++) {
      var a = n[t];
      (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  console.log('hello atguigu');
  var n = (function () {
    function n(e) {
      !(function (e, n) {
        if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
      })(this, n),
        (this.name = e);
    }
    var t, a;
    return (
      (t = n),
      (a = [
        {
          key: 'setName',
          value: function (e) {
            this.name = e;
          },
        },
      ]) && e(t.prototype, a),
      n
    );
  })();
  console.log(new n('jack'));
})();
