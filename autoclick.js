function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  function onGot(item) {
    var auto_click = true;
    if (item.auto_click) {
        var anchors = document.getElementsByClassName('arrow');
        for (var index = 0; index < anchors.length; ++index) {
            if(anchors[index].innerText == 'Appointments are available' || anchors[index].innerText == 'Book this appointment') {
                anchors[index].click();
                break;
            }
        }

        if(typeof document.getElementById("appointment_newAppointmentForm_captchaText") !== 'undefined') {
            document.getElementById("appointment_newAppointmentForm_captchaText").focus();
        }
    }
  }
  
  var getting = browser.storage.local.get("auto_click");
  getting.then(onGot, onError);