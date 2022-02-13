/*
<script>
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?030e1e62da5455adb0328a84fbf7ec93";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();
</script>
*/
var _hmt = _hmt || [];
(function() {

  function appendScript(code) {
    var hm = document.createElement('script');
    // hm.src = "https://hm.baidu.com/hm.js?030e1e62da5455adb0328a84fbf7ec93";
    hm.src = "https://hm.baidu.com/hm.js?" + code;
    hm.id = "baidu_tongji";
    //   document.head.appendChild(hm);
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  }

  // function init(id) {
  //   appendScript();
  //   window.BaiduTongJi =
  //     window.BaiduTongJi ||
  //     function() {
  //       (window.BaiduTongJi.code = window.BaiduTongJi.code || []).push(arguments);
  //     };
  // }

  // function collect() {
  //   if (!window.BaiduTongJi) {
  //     init($docsify.BaiduTongJi);
  //   }
  // }

  var plugin = function(hook, vm) {
    if (!$docsify.BaiduTongJi || !$docsify.BaiduTongJi.code.length === 0) {
      console.error('[Docsify] BaiduTongJi is required.');
      return;
    }

    hook.beforeEach(function() {
      var _baidu_tongji = document.getElementById("baidu_tongji");
      if (!_baidu_tongji) {
        appendScript($docsify.BaiduTongJi.code);
      } else {
        console.log("baidu_tongji exists")
      }


      // if (!window.BaiduTongJi) {
      //   // init($docsify.BaiduTongJi);
      //   appendScript($docsify.BaiduTongJi.code);
      //   window.BaiduTongJi =
      //     window.BaiduTongJi ||
      //     function() {
      //       (window.BaiduTongJi.code = window.BaiduTongJi.code || []).push(arguments);
      //     };
      // }
    });
  };

  $docsify.plugins = [].concat(plugin, $docsify.plugins);
})();