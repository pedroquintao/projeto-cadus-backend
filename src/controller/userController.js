import user from "../models/User.js";

class UserController {

    static async listUsers (req, res) {
        try {
            const getUsers = await user.find({});
            res.status(200).json(getUsers);
        } catch(e) {
            res.status(500).json({message: `${e.message} - falha na requisição`})
        }
    };

    static async registerUser (req, res) {
        try {
            const newUser = await user.create(req.body)
            res.status(201).json({ message: "Usuário cadastrado com sucesso!", name: newUser });
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar usuário`})
        }
    };
}

export default UserController;