type DataUserProfile = {
  user_id: number;
  name: string;
  email: string;
  wallet_id: number;
  wallet_number: string;
  profile_image: string;
  amount: string;
};

type ResUserProfile = {
  message: string;
  data: DataUserProfile;
};

type ResErrorUpdateProfile = {
  message: string;
  details: [
    {
      field: string;
      message: string;
    },
  ];
};

export type { DataUserProfile, ResErrorUpdateProfile, ResUserProfile };
