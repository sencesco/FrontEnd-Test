// Currency Dropdown Functionality
document.addEventListener("DOMContentLoaded", () => {
    const currencyBtn = document.getElementById("currency-btn");
    const currencyOption = document.querySelector(".currency-option");

    // Guard clause (prevents future errors if element is missing)
    if (!currencyBtn || !currencyOption) return;

    currencyOption.addEventListener("click", (e) => {
        e.preventDefault(); // For anchor tag behavior that prevents page jump

        const current = currencyBtn.childNodes[0].nodeValue.trim();
        const selected = currencyOption.textContent.trim();

        currencyBtn.childNodes[0].nodeValue = selected + " ";
        currencyOption.textContent = current;
    });
});
