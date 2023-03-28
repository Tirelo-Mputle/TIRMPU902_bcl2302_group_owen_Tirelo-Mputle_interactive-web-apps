export const firstname = "Alex";
export const surname = "Doe";
export const role = "Head of Marketing";

export const display = firstname + " " + surname + ", " + role + ".";
document.querySelector("#alex").innerText = display;
