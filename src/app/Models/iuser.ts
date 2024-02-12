export interface IUser {
  id: number;
  fullName: string;
  email: string;
  mobileNumbers: string[];
  address: {
    city: string;
    postalCode: string;
    street: string;
  };
  password: string;
  confirmPassword?: string;
}
