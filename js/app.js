var VCdev = VCdev || {};
"use strict";

VCdev.app = {
  initialize : function() {
    $(window).resize(function() {
      // update measurements
      VCdev.app.browserResults();
    });

    window.orientationchange = function() {
      // update measurements        
      VCdev.app.browserResults();
    };
  
    VCdev.app.browserResults();
  },
  getDevicePixelRatio : function() {
    // No pixel ratio available. Assume 1:1.
    if (window.devicePixelRatio === undefined) {
      return 1;
    } else {
      return window.devicePixelRatio;
    }
  },
  browserResults : function() {
    var dpr = VCdev.app.getDevicePixelRatio(),
        reportedWidth = $(window).width(),
        reportedHeight = $(window).height(),
        actualWidth = reportedWidth*dpr,
        actualHeight = reportedHeight*dpr,
        viewportDetails = $("meta[name='viewport']").attr("content");

    $(".js-reported-resolution").text(reportedWidth+" x "+reportedHeight);
    $(".js-actual-resolution").text(actualWidth+" x "+actualHeight);
    $(".js-dpr").text(dpr);
    $(".js-is-mobile").text(WURFL.is_mobile);
    $(".js-user-agent").text(navigator.userAgent);
    
    $(".js-device-name").text(WURFL.complete_device_name);
    $(".js-form-factor").text(WURFL.form_factor);
    $(".js-viewport-details").text(viewportDetails);
  }
};

VCdev.app.initialize();
