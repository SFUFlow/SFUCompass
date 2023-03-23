export function getAllUsers(req: any) {
}
  
export function createUser(req: any, { username, password, name }: { username: string, password: string, name: string }) {
}
  
export function findUserByUsername(req: any, username: string) {
    return null;
}
  
export function updateUserByUsername(req: any, username: string, update: any) {
}
  
export function deleteUser(req: any, username: string) {
}

export function validatePassword(user: string, inputPassword: string) {
    return false;
}