import User from '../model/users.js';

const getAllUser = async (req, res) => {
    let user = await User.find({});
    res.send(user);
};

const createUser = (req, res) => {
    const user = req.body;
    const newUser = new User(user);

    newUser.save()
        .then(() => {
            res.status(201).json({ message: 'User created successfully!' });
        })
        .catch((error) => {
            res.status(400).json({ message: 'Error creating user', error });
        });
};

const UpdateUser = (req, res) => {
    const user = req.body;
    const id = req.params.id;
    User.findByIdAndUpdate(id, user, { new: true })
        .then(() => {
            res.status(200).json({ message: 'User updated successfully!' });
        })
        .catch((error) => {
            res.status(400).json({ message: 'Error updating user', error });
        });
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: 'User deleted successfully!' });
        })
        .catch((error) => {
            res.status(400).json({ message: 'Error deleting user', error });
        });
};
export {
    getAllUser,
    createUser,
    UpdateUser,
    deleteUser,
}