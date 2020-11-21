/* Declara la etiqueta "mis-checks" para manejar checkboxes. */
customElements.define("mis-checks", class extends HTMLElement {
  get value() {
    /** @type {HTMLInputElement[]} */
    const checked = Array.from(this.querySelectorAll(":checked"));
    return checked.map(check => check.value);
  }
  set value(value) {
    const set = new Set(value || []);
    /** @type {HTMLInputElement[]} */
    const checks = Array.from(this.querySelectorAll("[type=checkbox]"));
    for (const check of checks) {
      check.checked = set.has(check.value);
    }
  }
});