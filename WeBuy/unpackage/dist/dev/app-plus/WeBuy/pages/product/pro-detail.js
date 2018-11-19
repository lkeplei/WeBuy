
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([],undefined,{path:"./pages/product/pro-detail.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/product/pro-detail.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      