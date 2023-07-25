import { createContext, useState } from 'react';

export const UsuarioContex = createContext();
UsuarioContex.displayName = "Usuário";

export const UsuarioProvider = ({ children }) => {

    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState(0);

    return (
        <UsuarioContex.Provider value={{ nome, setNome, saldo, setSaldo }}>
            {children}
        </UsuarioContex.Provider>
    )
};
