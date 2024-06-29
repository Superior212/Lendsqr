export type UserStatus = "Active" | "Pending" | "Blacklisted" | "Inactive";

export interface PersonalInfo {
  full_name: string;
  phone_number: string;
  email_address: string;
  bvn: number;
  gender: string;
  marital_status: string;
  children: number;
  type_of_residence: string;
}

export interface User {
  org: string;
  username: string;
  personal_info: PersonalInfo;
  status: UserStatus;
  date_joined: string;
}
