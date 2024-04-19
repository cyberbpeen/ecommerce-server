export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string | null;
  isActive: boolean;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
