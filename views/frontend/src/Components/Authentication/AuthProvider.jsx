export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Aquí puedes agregar más información sobre el usuario, como el nombre, el correo electrónico, etc., si es necesario.
  // Por ejemplo:
  // const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};