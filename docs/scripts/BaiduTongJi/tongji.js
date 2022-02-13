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

//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?030e1e62da5455adb0328a84fbf7ec93";
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);

  function appendScript() {
    var hm = document.createElement('script');
    hm.src = "https://hm.baidu.com/hm.js?030e1e62da5455adb0328a84fbf7ec93";
    //   document.head.appendChild(hm);
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  }

  function init(id) {
    appendScript();
    window.BaiduTongJi =
      window.BaiduTongJi ||
      function() {
        (window.BaiduTongJi.code = window.BaiduTongJi.code || []).push(arguments);
      };
  }

  function collect() {
    if (!window.BaiduTongJi) {
      init($docsify.BaiduTongJi);
    }
  }

  var install = function(hook) {
    if (!$docsify.BaiduTongJi) {
      console.error('[Docsify] BaiduTongJi is required.');
      return;
    }

    hook.beforeEach(collect);
  };

  $docsify.plugins = [].concat(install, $docsify.plugins);
})();

// (function () {
//     function appendScript() {
//       var hm = document.createElement('script');
//       hm.src = "https://hm.baidu.com/hm.js?030e1e62da5455adb0328a84fbf7ec93";
//         document.head.appendChild(hm);
//     //   var s = document.getElementsByTagName("script")[0]; 
//     //   s.parentNode.insertBefore(hm, s);
//     }
  
//     function init(id) {

//       var _hmt = _hmt || [];
//       window._hmt = _hmt;

//       appendScript();
//       window.BaiduTongJi =
//         window.BaiduTongJi ||
//         function() {
//           (window.BaiduTongJi.code = window.BaiduTongJi.code || []).push(arguments);
//         };
//     }
  
//     function collect() {
//       if (!window.BaiduTongJi) {
//         init($docsify.BaiduTongJi);
//       }
//     }
  
//     var install = function(hook) {
//       if (!$docsify.BaiduTongJi) {
//         console.error('[Docsify] BaiduTongJi is required.');
//         return;
//       }
  
//       hook.beforeEach(collect);
//     };

//     $docsify.plugins = [].concat(install, $docsify.plugins);
  
//   }());
