export function getAllUsers(req) {
}
  
export function createUser(req, { username, password, name }) {
}
  
export function findUserByUsername(req, username) {
}
  
export function updateUserByUsername(req, username, update) {
}
  
export function deleteUser(req, username) {
}
  
// Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
}