import { State } from '../../types';

export interface AuthProvider extends State {
  login(payload: any): Promise<any>;
  logout(): Promise<boolean | void>;
  checkAuth(payload: any): Promise<any>;
  getUserInfo?: () => Promise<{
    id?: string;
    username?: string;
    avatar?: string;
  }>;
}
