import User from './user.model';

export function login(req, res, next) {
    res.status(200).json(req.user);
    return next();
}