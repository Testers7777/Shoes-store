function updatedSiz(checkbox) {
    if (checkbox.checked) {
      var checkboxes = document.querySelectorAll('.siz');
      checkboxes.forEach(function(element) {
        if (element !== checkbox) {
          element.checked = false;
        }
      });
    }
  }
  function updatedColor(checkbox) {
    if (checkbox.checked) {
      var checkboxes = document.querySelectorAll('.colora');
      checkboxes.forEach(function(element) {
        if (element !== checkbox) {
          element.checked = false;
        }
      });
    }
  }