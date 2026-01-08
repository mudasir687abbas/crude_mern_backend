import db from "../config/db.js";

const User = {
getUsers  : async () => {
  const [rows] = await db.query("SELECT * FROM user");
  return rows;
},
getUserById : async (id) => {
  const [rows] = await db.query("SELECT * FROM user WHERE id=?", [id]);
  return rows[0];
},
createUser : async (name, role) => {
  const [result] = await db.query(
    "INSERT INTO user (name, role) VALUES (?,?)",
    [name, role]
  );
  return result.insertId;
},
updateUser : async (id, name, role) => {
  await db.query(
    "UPDATE user SET name=?, role=? WHERE id=?",
    [name, role, id]
  );
},
deleteUser : async (id) => {
  await db.query("DELETE FROM user WHERE id=?", [id]);
}
}


export default User;