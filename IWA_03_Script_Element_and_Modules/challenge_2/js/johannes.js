export const firstname = "Johannes";
export const surname = "Potgieter";
export const role = "Intern";

export const display = firstname + " " + surname + ", " + role + ".";
document.querySelector("#johannes").innerText = display;
