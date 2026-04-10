import User from "../model/user.model.js";
import validate from "../utils/validate.js";

export const signin = async (req,res) => {
        try {
            const {fullname,mobile,email,password,role} = req.body;

            const {isValid, errors} = validate(fullname,mobile,email,password,role);

            if(!isValid)
            {
                return res.status(400).json({errors});
            }

            let user = await User.findOne({email});
            if(user)
            {
                return res.status(400).json({message: "User Already Exist"});
            }

        } catch (error) {
            return res.status(500).json({message: "Internal Server Error"})
        }
}

export const login = async (req,res) => {}

export const logout = async (req,res) => {}