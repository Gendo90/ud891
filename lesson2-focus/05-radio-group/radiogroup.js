(function() {
  'use strict';

  // Define values for keycodes
  var VK_ENTER      = 13;
  var VK_SPACE      = 32;
  var VK_LEFT       = 37;
  var VK_UP         = 38;
  var VK_RIGHT      = 39;
  var VK_DOWN       = 40;

  // Helper function to convert NodeLists to Arrays
  function slice(nodes) {
    return Array.prototype.slice.call(nodes);
  }

  function RadioGroup(id) {
    this.el = document.querySelector(id);
    this.buttons = slice(this.el.querySelectorAll('.radio'));
    this.focusedIdx = 0;
    this.focusedButton = this.buttons[this.focusedIdx];

    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  RadioGroup.prototype.handleKeyDown = function(e) {
    switch(e.keyCode) {

      case VK_UP: {

          e.preventDefault();
          // keeps focus on the same item
          break;
      }
      case VK_LEFT: {

        e.preventDefault();
        // keeps focus on the same item
        break;
      }

      case VK_DOWN: {

          e.preventDefault();
          // Changes focus to the next radio button
          // Using the RadioGroup changeFocus method
          this.changeFocus(this.focusedIdx+1);

          break;
      }
      case VK_RIGHT: {

        e.preventDefault();
        // Changes focus to the next radio button
        // Using the RadioGroup changeFocus method
        this.changeFocus(this.focusedIdx+1);

        break;
      }

    }

  };

  RadioGroup.prototype.changeFocus = function(idx) {
    // Set the old button to tabindex -1
    this.focusedButton.tabIndex = -1;
    this.focusedButton.removeAttribute('checked');

    console.log(this.focusedButton)

    // Set the new button to tabindex 0 and focus it
    if(this.focusedIdx+1<this.buttons.length) {
        this.focusedButton = this.buttons[idx];
        this.focusedIdx++;
    }
    else {
        this.focusedIdx = 0;
        this.focusedButton = this.buttons[this.focusedIdx];
        console.log(this.focusedButton)
    }

    this.focusedButton.tabIndex = 0;
    this.focusedButton.focus();
    this.focusedButton.setAttribute('checked', 'checked');
  };

  var group1 = new RadioGroup('#group1');

}());
