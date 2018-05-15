function saveOptions(e) {
    browser.storage.local.set({
      auto_click: document.querySelector("#enable").checked
    });
    console.log(document.querySelector("#enable").checked);
  }
  
  function restoreOptions() {
  
    function setCurrentChoice(result) {
      document.querySelector("#enable").checked = result.auto_click;
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    var getting = browser.storage.local.get("auto_click");
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("#enable").addEventListener("change", saveOptions);