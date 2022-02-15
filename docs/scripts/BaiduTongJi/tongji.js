/*
<script>
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?667fea7094083e702d3942f545000af6";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();
</script>
*/
var _hmt = _hmt || [];
(function() {

  function appendScript(code) {
    var hm = document.createElement('script');
    hm.src = "https://hm.baidu.com/hm.js?" + code;
    hm.id = "baidu_tongji";
    var s = document.getElementsByTagName("script")[0];
    baidu_tongji_debug("insert script.");
    s.parentNode.insertBefore(hm, s);
  }

  var plugin = function(hook, vm) {
    if (!$docsify.BaiduTongJi || !$docsify.BaiduTongJi.code.length === 0) {
      baidu_tongji_err('BaiduTongJi is required.');
      return;
    }

    hook.beforeEach(function() {
      var _baidu_tongji = document.getElementById("baidu_tongji");
      if (!_baidu_tongji) {
        appendScript($docsify.BaiduTongJi.code);
      } else {
        baidu_tongji_debug("baidu_tongji exists.")
      }
    });
  };

  function baidu_tongji_debug(msg) {
    if ($docsify.BaiduTongJi.debug) console.log("[BaiduTongJi] : " + msg);
  }

  function baidu_tongji_err(msg) {
    console.error("[BaiduTongJi] : " + msg);
  }

  $docsify.plugins = [].concat(plugin, $docsify.plugins);
})();