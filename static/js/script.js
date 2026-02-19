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


// Mobile Menu Toggle Functionality
function hamburgerMenuMobile() {
    var centerGroup = document.getElementById("center-group");
    var icon = document.getElementById("menu-icon");

    var currentDisplay = window.getComputedStyle(centerGroup).display;

    if (currentDisplay === "none") {
        // Show the menu and override none display with !important
        centerGroup.style.setProperty("display", "flex", "important");
        centerGroup.style.setProperty("flex-direction", "column");

        // Change icon to Google "X"
        icon.className = "material-symbols-outlined";
        icon.innerText = "close"; 
    } else {
        // Hide the menu
        centerGroup.style.setProperty("display", "none", "important");

        // Change icon back to your 2-line CSS
        icon.className = "hamburger-menus"; // Restores your custom CSS
        icon.innerText = ""; // Clears the "close" text
    }
}


// Editorial mobile toggle
document.addEventListener("DOMContentLoaded", function () {

    const editorialTrigger = document.querySelector(".editorial-trigger");
    const menuContainer = document.querySelector(".menu-item-container");
    const overlayArea = document.getElementById("overlay-area");

    if (overlayArea) {
        // Define the new links to be added only in mobile view
        if (window.innerWidth <= 768) {
            const newLinks = [
                { text: "L’OFFICIAL THAILAND", url: "#" },
                { text: "NUMERO", url: "#" },
                { text: "VOGUE", url: "#" }
            ];

            // Loop through and append them
            newLinks.forEach(linkData => {
                const newAnchor = document.createElement("a");
                newAnchor.href = linkData.url;
                newAnchor.textContent = linkData.text;
                overlayArea.appendChild(newAnchor);
            });

            if (editorialTrigger) {

                // Inject the caret HTML into the .editorial-trigger element in mobile view
                editorialTrigger.innerHTML += '&nbsp;<span class="caret">▾</span>';

                // Mobile Click Logic
                editorialTrigger.addEventListener("click", function (e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();  // Prevents the click from bubbling up to the document.

                        // Toggle the "active" class on the menu
                        if (menuContainer) {
                            menuContainer.classList.toggle("active");
                        }
                    }
                });
            }
        }
    }
});


// Scrolling for moving "NEW" and "BESSELLER"
window.addEventListener('scroll', function() {
    // Select all headers you want to move (NEW, BESTSELLER, etc.)
    const headers = document.querySelectorAll('.frame-text-h2-mv');

    headers.forEach(header => {
        const parent = header.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const headerRect = header.getBoundingClientRect();
        
        // Calculate how much the parent has scrolled past the top of the screen
        // If parentRect.top is negative, the user has scrolled into/past the section
        if (parentRect.top < 0 && parentRect.bottom > headerRect.height) {
            
            // Calculate the new Y position
            // We move the text by the amount the parent has gone off-screen
            let moveY = Math.abs(parentRect.top);
            
            // Constraint: Don't let it go past the bottom of the parent
            const maxMove = (parentRect.height - headerRect.height)/2;
            
            if (moveY > maxMove) {
                moveY = maxMove;
            }

            // Apply the movement
            header.style.transform = `translateY(${moveY}px)`;
        } else {
            // Reset to top/center if we haven't reached the section yet
            header.style.transform = `translateY(0px)`;
        }
    });
});