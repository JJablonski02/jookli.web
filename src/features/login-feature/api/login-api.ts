import { LoginCommand } from "../types/types";

type LoginResponse = {
    access_token: string,
    refresh_token: string
}

export const loginApi = async (command: LoginCommand): Promise<LoginResponse> => {
    const response = await fetch("https://jookli-api.azurewebsites.net/connect/token", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username" : command.email ,
            "password" : command.password,
            "grant_type" : "password",
            "scope" : "jookliApi.read jookliApi.write offline_access",
            "client_id" : "joyprofits.web",
            "client_secret" : "axokf9begvvswvjbpq0i0wlm2wtpyoda",
        }),
    })

    if (!response.ok) {
        throw new Error("Logowanie nieudane");
    }
    
    return response.json();
}