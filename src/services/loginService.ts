import { z } from "zod";
import { http } from "../lib/axios/http";

// Log in with Facebook: (This feature will be done later);
const loginWithFacebook = () => {
    alert(
        "You now can't log in with Facebook, we will develope it later. Sorry!:vvv"
    );
};

// Login Data validation:
const loginDataSchema = z.object({
    username: z.string().min(1, { message: "Your username is required!" }),
    password: z.string().min(1, { message: "Your password is required!" }),
});

type LoginData = z.infer<typeof loginDataSchema>;

// Validate Login Data:
const validateLoginData = (data: LoginData) => {
    const result = loginDataSchema.safeParse(data);
    return result;
};

const login = async (data: LoginData) => {
    try {
        const response = await http.post("/auth/login", data);
        return response;
    } catch (error) {
        return error;
    }
};

export { loginWithFacebook, validateLoginData, login };
