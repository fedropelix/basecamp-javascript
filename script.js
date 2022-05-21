function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin');
usuarios.set('Pedro', 'Admin');
usuarios.set('Amanda', 'User');
usuarios.set('Maria', 'Admin');

console.log(getAdmins(usuarios));