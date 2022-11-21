export type User = {
  id: string;
  dateJoined: number;
  username: string;
  email: string;
  hashedPassword: string;
  verified: boolean;
  otp?: {
    hashedCode: string;
    expiryDate: number;
  }
};
