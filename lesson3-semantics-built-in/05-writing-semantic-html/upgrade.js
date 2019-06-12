let wombatDIV = document.getElementById("wombats-button");
let mainParent = wombatDIV.parentElement;
mainParent.removeChild(wombatDIV);
let wombatButton = document.createElement("BUTTON");
wombatButton.id = "wombats-button"
wombatButton.textContent = "Give me wombats"
wombatButton.classList.add("button")
mainParent.appendChild(wombatButton);
