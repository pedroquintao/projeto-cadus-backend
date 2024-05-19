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
    
    static async updateUser (req, res) {
        try {
            const id = req.params.id;
            await user.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Usuário atualizado com sucesso!"});
        } catch(e) {
            res.status(500).json({message: `${e.message} - Falha ao atualizar usuário!`});
        }
    }

    static async deleteUser (req, res) {
        try {
            const id = req.params.id;
            await user.findByIdAndDelete(id);
            res.status(200).json({message: "Usuário excluído com sucesso!"});
        } catch (e) {
            res.status(500).json({message: `${e.message} - falha ao excluir usuário!`})
        }
    }
}


export default UserController;