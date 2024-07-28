'use client';

import { FunctionComponent, ReactNode, useEffect } from 'react';
import { useAuthContext } from '../AuthProvider';
import { useRouter } from 'next/navigation';

type RequireAuthProps = {
  children: ReactNode;
  redirectTo: string;
};

/**
 * This component wraps any page where aut is required.
 * If the user is not authenticated, they will be redirected to the specified route.
 *
 * @example
 * ```tsx
 * import { RequireAuth } from '@/components';
 *
 * const MyPage = () => {
 *   return (
 *     <RequireAuth redirectTo="/login">
 *       // Your page content here
 *     </RequireAuth>
 *   );
 * };
 * ```
 *
 * @param {React.ReactNode} children Your page content.
 * @param {string} redirectTo The route to redirect to if the user is not authenticated.
 * @returns {React.ReactNode} The page content if the user is authenticated, otherwise performs a redirection.
 */
export const RequireAuth: FunctionComponent<RequireAuthProps> = ({
  children,
  redirectTo,
}) => {
  const { user, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(redirectTo);
    }
  }, [loading, user, router, redirectTo]);

  return <>{children}</>;
};
