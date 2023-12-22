class PhoneMask {
  constructor(inputElement) {
    this.inputElement = inputElement;
    this.init();
  }

  init() {
    this.inputElement.style.fontWeight = "bold";
    this.inputElement.placeholder = "+7 (___) ___-__-__";
    this.inputElement.value = "+7 (";
    this.inputElement.addEventListener("input", this.onInput.bind(this));
    this.inputElement.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  onInput(event) {
    if (event.inputType === "insertText") {
      let value = this.inputElement.value.replace(/\D/g, "").slice(0, 11);
      let formattedValue =
        "+7 (" +
        value.slice(1, 4) +
        ") " +
        value.slice(4, 7) +
        "-" +
        value.slice(7, 9) +
        "-" +
        value.slice(9);
      this.inputElement.value = formattedValue;
    }
  }

  onKeyDown(event) {
    if (event.key === "Backspace") {
      if (this.inputElement.value === "+7 (") {
        event.preventDefault();
      }
      if (event.key === "Backspace" && this.inputElement.value.length === 7) {
        event.preventDefault();
        this.inputElement.value = "+7 (";
      } else if (
        event.key === "Backspace" &&
        this.inputElement.value.length > 7
      ) {
        event.preventDefault();
        let value = this.inputElement.value.replace(/\D/g, "").slice(0, -1);
        let formattedValue =
          "+7 (" +
          value.slice(1, 4) +
          ") " +
          value.slice(4, 7) +
          "-" +
          value.slice(7, 9) +
          "-" +
          value.slice(9);
        this.inputElement.value = formattedValue;
      }
    }
    if (
      this.inputElement.value === "+7 () --" ||
      this.inputElement.value === "+7 ("
    ) {
      this.inputElement.value = "+7 (";
    }
  }
}
