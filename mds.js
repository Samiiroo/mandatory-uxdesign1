const mds = {
    textField: function(element) {
    element.on("focus", function() {
      $(this)
        .siblings()
        .css({ top: "5px", color: "#760aa0", fontSize: "12px" });
    });
    element.on("focusout", function() {
      if ($(this).val() == "") {
        $(this)
          .siblings()
          .css({ top: "20px", color: "#7b7b7b", fontSize: "16px" });
      }
    });
  }
};
mds.textField($('input[type="text"].mds-text-field__input'));
