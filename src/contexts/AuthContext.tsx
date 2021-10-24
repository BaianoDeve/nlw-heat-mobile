import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSessions from 'expo-auth-session';
import { api } from '../services/api';

const CLIENT_ID = 'ef4d863eec9560281ac6';
const SCOPE = 'read:user';
const USER_STORAGE = '@nlwheat:user';
const TOKEN_STORAGE = '@nlwheat:token';

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  isSinging: boolean;
  singIn: () => Promise<void>;
  singOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthResponse = {
  token: string;
  user: User;
};

type AuthorizationResponse = {
  params: {
    code?: string;
    error?: string;
  };
  type?: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isSinging, setIsSinging] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  async function singIn() {
    try {
      setIsSinging(true);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;

      const authSessionResponse = (await AuthSessions.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (
        authSessionResponse.type === 'success' &&
        authSessionResponse.params.error !== 'access_denied'
      ) {
        const authResponse = await api.post('/authenticate', {
          code: authSessionResponse.params.code,
        });
        const { user, token } = authResponse.data as AuthResponse;

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        await AsyncStorage.multiSet([
          [USER_STORAGE, JSON.stringify(user)],
          [TOKEN_STORAGE, token],
        ]);

        setUser(user);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSinging(false);
    }
  }

  async function singOut() {
    setUser(null);
    await AsyncStorage.clear();
  }

  useEffect(() => {
    async function loadStorageData() {
      const [[, userStorage], [, tokenStorage]] = await AsyncStorage.multiGet([
        USER_STORAGE,
        TOKEN_STORAGE,
      ]);

      if (userStorage && tokenStorage) {
        api.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
        setUser(JSON.parse(userStorage));
      }

      setIsSinging(false);
    }

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ singIn, singOut, user, isSinging }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
