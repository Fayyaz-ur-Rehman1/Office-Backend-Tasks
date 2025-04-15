const checkAge = (req, res, next) => {
    const age = req.query.age;
    if (!age) {
        return res.status(400).json({ message: "Age is required" })
    } else if (age < 18) {
        return res.status(403).json({ message: "You are not allowed to access this resource" })
    }
    next();
};

export {
    checkAge,
}