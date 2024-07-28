'use client';

import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  User,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

interface AuthContextProps {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
});

/**
 * Custom hook to consume the AuthContext.
 *
 * @returns AuthContextProps containing the current user or null.
 */
export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * AuthProvider component.
 *
 * This component wraps the application (typically at root-level layout.tsx)
 * and provides an authentication context. It listens for changes in Supabase
 * auth state and updates the context accordingly.
 *
 * @example
 * ```tsx
 * import { useAuthContext } from '../AuthProvider';
 *
 * export const ComponentUsingAuth: FunctionComponent = () => {
 *  const { user } = useAuthContext();
 *  return (
 *     <div>
 *       {user ? `Hello, ${user.email}` : 'Please log in'}
 *     </div>
 *   );
 * }
 * ```
 *
 * @param {ReactNode} children Child components (typically your entire app).
 * @returns {JSX.Element} The AuthContext.Provider.
 */
export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
