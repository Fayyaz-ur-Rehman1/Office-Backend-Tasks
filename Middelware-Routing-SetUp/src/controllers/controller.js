const users = [];

const getUsers = (req, res) => {
    res.status(200).json(users);
}

const createUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
}

const updateUserById = (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json({ message: 'User updated', user: users[id] });
};

const deleteUserById = (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json({ message: 'User deleted' });
}

export { getUsers, createUser, updateUserById, deleteUserById };