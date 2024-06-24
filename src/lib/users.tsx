type UserStatus = "Active" | "Pending" | "Blacklisted" | "Inactive";

interface User {
  org: string;
  username: string;
  personal_info: PersonalInfo;
  education_and_employment: EducationAndEmployment;
  socials: Socials;
  guarantor: guarantor;
  status: UserStatus;
  date_joined: string;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface EducationAndEmployment {
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: number;
  loan_repayment: number;
}

interface PersonalInfo {
  full_name: string;
  phone_number: string;
  email_address: string;
  bvn: string;
  gender: string;
  marital_status: string;
  children: number;
  type_of_residence: string;
}

interface guarantor {
  full_name: string;
  phone_number: string;
  email_address: string;
  relationship: string;
}

export const users: User[] = [
  {
    org: "Lendsqr",
    username: "Chinenye Okon",
    personal_info: {
      full_name: "Chinenye Okon",
      phone_number: "08123456789",
      email_address: "chinenyeokon@lendsqr.com",
      bvn: "1234567890",
      gender: "Female",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Finance",
      duration_of_employment: "5 years",
      office_email: "chinenyeokon@lendsqr.com",
      monthly_income: 500000,
      loan_repayment: 20000,
    },
    socials: {
      twitter: "@chinenyeokon",
      facebook: "chinenyeokon",
      instagram: "chinenyeokon",
    },
    guarantor: {
      full_name: "Chukwuma Okon",
      phone_number: "08111111111",
      email_address: "chukwumaokon@lendsqr.com",
      relationship: "Brother",
    },
    status: "Active",
    date_joined: "2020-05-01",
  },
  {
    org: "Irorun",
    username: "Chidinma Nwosu",
    personal_info: {
      full_name: "Chidinma Nwosu",
      phone_number: "07012345678",
      email_address: "chidinmanwosu@irorun.com",
      bvn: "2345678901",
      gender: "Female",
      marital_status: "Married",
      children: 2,
      type_of_residence: "Owner",
    },
    education_and_employment: {
      level_of_education: "MSc",
      employment_status: "Part-time",
      sector_of_employment: "Healthcare",
      duration_of_employment: "3 years",
      office_email: "chidinmanwosu@irorun.com",
      monthly_income: 300000,
      loan_repayment: 15000,
    },
    socials: {
      twitter: "@chidinmanwosu",
      facebook: "chidinmanwosu",
      instagram: "chidinmanwosu",
    },
    guarantor: {
      full_name: "Ikenna Nwosu",
      phone_number: "08122222222",
      email_address: "ikennanwosu@irorun.com",
      relationship: "Husband",
    },
    status: "Blacklisted",
    date_joined: "2020-04-15",
  },
  {
    org: "Vibesmeet",
    username: "Chukwuemeka Okoro",
    personal_info: {
      full_name: "Chukwuemeka Okoro",
      phone_number: "08090123456",
      email_address: "chukwuemekaokoro@vibesmeet.com",
      bvn: "3456789012",
      gender: "Male",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Tech",
      duration_of_employment: "4 years",
      office_email: "chukwuemekaokoro@vibesmeet.com",
      monthly_income: 400000,
      loan_repayment: 18000,
    },
    socials: {
      twitter: "@chukwuemekaokoro",
      facebook: "chukwuemekaokoro",
      instagram: "chukwuemekaokoro",
    },
    guarantor: {
      full_name: "Chinwe Okoro",
      phone_number: "08133333333",
      email_address: "chinweokoro@vibesmeet.com",
      relationship: "Sister",
    },
    status: "Pending",
    date_joined: "2020-03-20",
  },
  {
    org: "Lendsqr",
    username: "Nneoma Onyema",
    personal_info: {
      full_name: "Nneoma Onyema",
      phone_number: "08123456789",
      email_address: "nneomaonyema@lendsqr.com",
      bvn: "4567890123",
      gender: "Female",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Finance",
      duration_of_employment: "5 years",
      office_email: "nneomaonyema@lendsqr.com",
      monthly_income: 500000,
      loan_repayment: 20000,
    },
    socials: {
      twitter: "@nneomaonyema",
      facebook: "nneomaonyema",
      instagram: "nneomaonyema",
    },
    guarantor: {
      full_name: "Chukwuma Onyema",
      phone_number: "08111111111",
      email_address: "chukwumaonyema@lendsqr.com",
      relationship: "Brother",
    },
    status: "Inactive",
    date_joined: "2020-05-15",
  },
  {
    org: "Irorun",
    username: "Ikenna Nwosu",
    personal_info: {
      full_name: "Ikenna Nwosu",
      phone_number: "07012345678",
      email_address: "ikennanwosu@irorun.com",
      bvn: "5678901234",
      gender: "Male",
      marital_status: "Married",
      children: 2,
      type_of_residence: "Owner",
    },
    education_and_employment: {
      level_of_education: "MSc",
      employment_status: "Part-time",
      sector_of_employment: "Healthcare",
      duration_of_employment: "3 years",
      office_email: "ikennanwosu@irorun.com",
      monthly_income: 300000,
      loan_repayment: 15000,
    },
    socials: {
      twitter: "@ikennanwosu",
      facebook: "ikennanwosu",
      instagram: "ikennanwosu",
    },
    guarantor: {
      full_name: "Chidinma Nwosu",
      phone_number: "08122222222",
      email_address: "chidinmanwosu@irorun.com",
      relationship: "Wife",
    },
    status: "Active",
    date_joined: "2020-04-20",
  },
  {
    org: "Vibesmeet",
    username: "Chinwe Okoro",
    personal_info: {
      full_name: "Chinwe Okoro",
      phone_number: "08090123456",
      email_address: "chinweokoro@vibesmeet.com",
      bvn: "6789012345",
      gender: "Female",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Tech",
      duration_of_employment: "4 years",
      office_email: "chinweokoro@vibesmeet.com",
      monthly_income: 400000,
      loan_repayment: 18000,
    },
    socials: {
      twitter: "@chinweokoro",
      facebook: "chinweokoro",
      instagram: "chinweokoro",
    },
    guarantor: {
      full_name: "Chukwuemeka Okoro",
      phone_number: "08133333333",
      email_address: "chukwuemekaokoro@vibesmeet.com",
      relationship: "Brother",
    },
    status: "Pending",
    date_joined: "2020-03-25",
  },
  {
    org: "Lendsqr",
    username: "Aisha Mohammed",
    personal_info: {
      full_name: "Aisha Mohammed",
      phone_number: "08123456789",
      email_address: "aishamohammed@lendsqr.com",
      bvn: "1234567890",
      gender: "Female",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Finance",
      duration_of_employment: "5 years",
      office_email: "aishamohammed@lendsqr.com",
      monthly_income: 500000,
      loan_repayment: 20000,
    },
    socials: {
      twitter: "@aishamohammed",
      facebook: "aishamohammed",
      instagram: "aishamohammed",
    },
    guarantor: {
      full_name: "Abdullahi Mohammed",
      phone_number: "08111111111",
      email_address: "abdullahimohammed@lendsqr.com",
      relationship: "Brother",
    },
    status: "Active",
    date_joined: "2020-05-25",
  },
  {
    org: "Lendsqr",
    username: "Chukwuma Okon",
    personal_info: {
      full_name: "Chukwuma Okon",
      phone_number: "08123456789",
      email_address: "chukwumaokon@lendsqr.com",
      bvn: "7890123456",
      gender: "Male",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Finance",
      duration_of_employment: "5 years",
      office_email: "chukwumaokon@lendsqr.com",
      monthly_income: 500000,
      loan_repayment: 20000,
    },
    socials: {
      twitter: "@chukwumaokon",
      facebook: "chukwumaokon",
      instagram: "chukwumaokon",
    },
    guarantor: {
      full_name: "Chinenye Okon",
      phone_number: "08111111111",
      email_address: "chinenyeokon@lendsqr.com",
      relationship: "Sister",
    },
    status: "Active",
    date_joined: "2020-05-20",
  },
  {
    org: "Irorun",
    username: "Ikemefuna Nwosu",
    personal_info: {
      full_name: "Ikemefuna Nwosu",
      phone_number: "07012345678",
      email_address: "ikemefunanwosu@irorun.com",
      bvn: "8901234567",
      gender: "Male",
      marital_status: "Married",
      children: 2,
      type_of_residence: "Owner",
    },
    education_and_employment: {
      level_of_education: "MSc",
      employment_status: "Part-time",
      sector_of_employment: "Healthcare",
      duration_of_employment: "3 years",
      office_email: "ikemefunanwosu@irorun.com",
      monthly_income: 300000,
      loan_repayment: 15000,
    },
    socials: {
      twitter: "@ikemefunanwosu",
      facebook: "ikemefunanwosu",
      instagram: "ikemefunanwosu",
    },
    guarantor: {
      full_name: "Chidinma Nwosu",
      phone_number: "08122222222",
      email_address: "chidinmanwosu@irorun.com",
      relationship: "Wife",
    },
    status: "Active",
    date_joined: "2020-04-25",
  },
  {
    org: "Vibesmeet",
    username: "Chukwuemeka Okoro",
    personal_info: {
      full_name: "Chukwuemeka Okoro",
      phone_number: "08090123456",
      email_address: "chukwuemekaokoro@vibesmeet.com",
      bvn: "9012345678",
      gender: "Male",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Tech",
      duration_of_employment: "4 years",
      office_email: "chukwuemekaokoro@vibesmeet.com",
      monthly_income: 400000,
      loan_repayment: 18000,
    },
    socials: {
      twitter: "@chukwuemekaokoro",
      facebook: "chukwuemekaokoro",
      instagram: "chukwuemekaokoro",
    },
    guarantor: {
      full_name: "Chinwe Okoro",
      phone_number: "08133333333",
      email_address: "chinweokoro@vibesmeet.com",
      relationship: "Sister",
    },
    status: "Inactive",
    date_joined: "2020-03-30",
  },
  {
    org: "Lendsqr",
    username: "Nneoma Onyema",
    personal_info: {
      full_name: "Nneoma Onyema",
      phone_number: "08123456789",
      email_address: "nneomaonyema@lendsqr.com",
      bvn: "4567890123",
      gender: "Female",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Finance",
      duration_of_employment: "5 years",
      office_email: "nneomaonyema@lendsqr.com",
      monthly_income: 500000,
      loan_repayment: 20000,
    },
    socials: {
      twitter: "@nneomaonyema",
      facebook: "nneomaonyema",
      instagram: "nneomaonyema",
    },
    guarantor: {
      full_name: "Chukwuma Onyema",
      phone_number: "08111111111",
      email_address: "chukwumaonyema@lendsqr.com",
      relationship: "Brother",
    },
    status: "Active",
    date_joined: "2020-05-20",
  },
  {
    org: "Irorun",
    username: "Ikenna Nwosu",
    personal_info: {
      full_name: "Ikenna Nwosu",
      phone_number: "07012345678",
      email_address: "ikennanwosu@irorun.com",
      bvn: "5678901234",
      gender: "Male",
      marital_status: "Married",
      children: 2,
      type_of_residence: "Owner",
    },
    education_and_employment: {
      level_of_education: "MSc",
      employment_status: "Part-time",
      sector_of_employment: "Healthcare",
      duration_of_employment: "3 years",
      office_email: "ikennanwosu@irorun.com",
      monthly_income: 300000,
      loan_repayment: 15000,
    },
    socials: {
      twitter: "@ikennanwosu",
      facebook: "ikennanwosu",
      instagram: "ikennanwosu",
    },
    guarantor: {
      full_name: "Chidinma Nwosu",
      phone_number: "08122222222",
      email_address: "chidinmanwosu@irorun.com",
      relationship: "Wife",
    },
    status: "Pending",
    date_joined: "2020-04-25",
  },
  {
    org: "Vibesmeet",
    username: "Chinwe Okoro",
    personal_info: {
      full_name: "Chinwe Okoro",
      phone_number: "08090123456",
      email_address: "chinweokoro@vibesmeet.com",
      bvn: "6789012345",
      gender: "Female",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Tech",
      duration_of_employment: "4 years",
      office_email: "chinweokoro@vibesmeet.com",
      monthly_income: 400000,
      loan_repayment: 18000,
    },
    socials: {
      twitter: "@chinweokoro",
      facebook: "chinweokoro",
      instagram: "chinweokoro",
    },
    guarantor: {
      full_name: "Chukwuemeka Okoro",
      phone_number: "08133333333",
      email_address: "chukwuemekaokoro@vibesmeet.com",
      relationship: "Brother",
    },
    status: "Blacklisted",
    date_joined: "2020-03-30",
  },
  {
    org: "Lendsqr",
    username: "Aisha Mohammed",
    personal_info: {
      full_name: "Aisha Mohammed",
      phone_number: "08123456789",
      email_address: "aishamohammed@lendsqr.com",
      bvn: "1234567890",
      gender: "Female",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Finance",
      duration_of_employment: "5 years",
      office_email: "aishamohammed@lendsqr.com",
      monthly_income: 500000,
      loan_repayment: 20000,
    },
    socials: {
      twitter: "@aishamohammed",
      facebook: "aishamohammed",
      instagram: "aishamohammed",
    },
    guarantor: {
      full_name: "Abdullahi Mohammed",
      phone_number: "08111111111",
      email_address: "abdullahimohammed@lendsqr.com",
      relationship: "Brother",
    },
    status: "Active",
    date_joined: "2020-05-25",
  },
  {
    org: "Irorun",
    username: "Élise Ngomba",
    personal_info: {
      full_name: "Élise Ngomba",
      phone_number: "07012345678",
      email_address: "elisengomba@irorun.com",
      bvn: "2345678901",
      gender: "Female",
      marital_status: "Married",
      children: 2,
      type_of_residence: "Owner",
    },
    education_and_employment: {
      level_of_education: "MSc",
      employment_status: "Part-time",
      sector_of_employment: "Healthcare",
      duration_of_employment: "3 years",
      office_email: "elisengomba@irorun.com",
      monthly_income: 300000,
      loan_repayment: 15000,
    },
    socials: {
      twitter: "@elisengomba",
      facebook: "elisengomba",
      instagram: "elisengomba",
    },
    guarantor: {
      full_name: "Pierre Ngomba",
      phone_number: "08122222222",
      email_address: "pierengomba@irorun.com",
      relationship: "Husband",
    },
    status: "Pending",
    date_joined: "2020-04-30",
  },
  {
    org: "Vibesmeet",
    username: "李伟锋 (Lǐ Wěifēng)",
    personal_info: {
      full_name: "李伟锋 (Lǐ Wěifēng)",
      phone_number: "08090123456",
      email_address: "liweifeng@vibesmeet.com",
      bvn: "3456789012",
      gender: "Male",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time",
      sector_of_employment: "Tech",
      duration_of_employment: "4 years",
      office_email: "liweifeng@vibesmeet.com",
      monthly_income: 400000,
      loan_repayment: 18000,
    },
    socials: {
      twitter: "@liweifeng",
      facebook: "liweifeng",
      instagram: "liweifeng",
    },
    guarantor: {
      full_name: "王丽 (Wáng Lì)",
      phone_number: "08133333333",
      email_address: "wangli@vibesmeet.com",
      relationship: "Sister",
    },
    status: "Blacklisted",
    date_joined: "2020-03-31",
  },
  {
    org: "Lendsqr",
    username: "Nneoma Onyema",
    personal_info: {
      full_name: "Nneoma Onyema",
      phone_number: "08123456789",
      email_address: "nneomaonyema@lendsqr.com",
      bvn: "4567890123",
      gender: "Female",
      marital_status: "Single",
      children: 0,
      type_of_residence: "Renting",
    },
    education_and_employment: {
      level_of_education: "BSc",
      employment_status: "Full-time ",
      sector_of_employment: "Finance",
      duration_of_employment: "5 years",
      office_email: "nneomaonyema@lendsqr.com",
      monthly_income: 500000,
      loan_repayment: 20000,
    },
    socials: {
      twitter: "@nneomaonyema",
      facebook: "nneomaonyema",
      instagram: "nneomaonyema",
    },
    guarantor: {
      full_name: "Chukwuma Onyema",
      phone_number: "08111111111",
      email_address: "chukwumaonyema@lendsqr.com",
      relationship: "Brother",
    },
    status: "Inactive",
    date_joined: "2020-05-20",
  },
  {
    org: "Irorun",
    username: "Ikenna Nwosu",
    personal_info: {
      full_name: "Ikenna Nwosu",
      phone_number: "07012345678",
      email_address: "ikennanwosu@irorun.com",
      bvn: "5678901234",
      gender: "Male",
      marital_status: "Married",
      children: 2,
      type_of_residence: "Owner (Onye Ọnye Ụlọ)",
    },
    education_and_employment: {
      level_of_education: "MSc",
      employment_status: "Part-time",
      sector_of_employment: "Healthcare",
      duration_of_employment: "3 years",
      office_email: "ikennanwosu@irorun.com",
      monthly_income: 300000,
      loan_repayment: 15000,
    },
    socials: {
      twitter: "@ikennanwosu",
      facebook: "ikennanwosu",
      instagram: "ikennanwosu",
    },
    guarantor: {
      full_name: "Chidinma Nwosu",
      phone_number: "08122222222",
      email_address: "chidinmanwosu@irorun.com",
      relationship: "Wife",
    },
    status: "Pending",
    date_joined: "2020-04-25",
  },
];
