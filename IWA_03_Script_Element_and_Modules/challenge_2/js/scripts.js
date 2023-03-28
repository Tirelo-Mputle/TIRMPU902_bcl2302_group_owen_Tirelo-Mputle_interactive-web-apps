import {
  firstname as Nwabisa_firstname,
  surname as Nwabisa_surname,
  role as Nwabisa_role,
  display as Nwabisa_message,
} from "./nwabisa.js";
import {
  firstname as Alex_firstname,
  surname as Alex_surname,
  role as Alex_role,
  display as Alex_message,
} from "./alex.js";
import {
  firstname as Johannes_firstname,
  surname as Johannes_surname,
  role as Johannes_role,
  display as Johannes_message,
} from "./johannes.js";

const allRoles = `Roles: ${Nwabisa_role}, ${Johannes_role}, ${Alex_role}`;
console.log(allRoles);
