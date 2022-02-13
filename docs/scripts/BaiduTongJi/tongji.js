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
"use strict";
var _hmt = _hmt || [];
(function() {

  const BaiduTongJiOptions = {
    debug: false,
    code: "",
  };

  function appendScript(code) {
    console.log("appendScript");
    var hm = document.createElement('script');
    // hm.src = "https://hm.baidu.com/hm.js?030e1e62da5455adb0328a84fbf7ec93";
    hm.src = "https://hm.baidu.com/hm.js?" + code;
    hm.id = "baidu_tongji";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  }

  // function init(id) {
  //   appendScript(code);
  //   window.BaiduTongJi =
  //     window.BaiduTongJi ||
  //     function() {
  //       (window.BaiduTongJi.code = window.BaiduTongJi.code || []).push(arguments);
  //     };
  // }

  // function collect() {
  //   if (!window.BaiduTongJi) {

  //     window.BaiduTongJi = window.$docsify.BaiduTongJi;

  //   //   init($docsify.BaiduTongJi);
  //     appendScript(window.BaiduTongJi.code);
  //     // window.BaiduTongJi =
  //     //   window.BaiduTongJi ||
  //     //   function() {
  //     //     (window.BaiduTongJi.code = window.BaiduTongJi.code || []).push(arguments);
  //     //   };
  //   }
  // }

  var plugin = function(hook) {
    if (BaiduTongJiOptions.code.length === 0) {
      console.error('[BaiduTongJi] "code" is required.');
      return;
    }

    hook.beforeEach(function() {

      var _baidu_tongji = document.getElementById("baidu_tongji");
      if (!_baidu_tongji) {
        console.log("_baidu_tongji no found");
        appendScript(BaiduTongJiOptions.code);
      }

        // if (!window.BaiduTongJi) {
    
        //   window.BaiduTongJi = window.$docsify.BaiduTongJi;
    
        // //   init($docsify.BaiduTongJi);
        //   appendScript(window.BaiduTongJi.code);
        //   // window.BaiduTongJi =
        //   //   window.BaiduTongJi ||
        //   //   function() {
        //   //     (window.BaiduTongJi.code = window.BaiduTongJi.code || []).push(arguments);
        //   //   };
        // }
    });
  };

  window.$docsify.BaiduTongJi = Object.assign(BaiduTongJiOptions, window.$docsify.BaiduTongJi);
  window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
})();
