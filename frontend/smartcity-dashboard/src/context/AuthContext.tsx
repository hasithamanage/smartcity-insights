import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

interface AuthUser {
  username: string;
  token: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isInitializing: boolean; // Add this line!
  login: (userData: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  // Initialize from storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('smartcity_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        localStorage.removeItem('smartcity_user');
      }
    }
    setIsInitializing(false); // Initial check complete
  }, []);

  const login = (userData: AuthUser) => {
    // 1. Update State first (Triggers React re-render)
    setUser(userData);
    // 2. Persist for refresh
    localStorage.setItem('smartcity_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('smartcity_user');
  };

  
  const value = useMemo(() => ({
    user,
    isAuthenticated: !!user,
    isInitializing, // This value changes from true to false
    login,
    logout
  }), [user, isInitializing]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};