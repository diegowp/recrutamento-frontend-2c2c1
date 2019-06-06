export interface ClanDetailModel{
  tag?: string;
  name?: string;
  description?: string;
  type?: string;
  score?: number;
  memberCount?: number;
  requiredScore?: number;
  donations?: number;
  badge?: {
    name?: string,
    category?: string,
    id?: number,
    image?: string,
  };
  location?: {
    name?: string,
    isCountry?: boolean,
    code?: string,
  };
  members?: [
    {
      name?: string,
      tag?: string,
      rank?: number,
      role?: string,
      expLevel?: number,
      trophies?: number,
      donations?: number,
      donationsReceived?: number,
      donationsDelta?: number,
      arena?: {
        name?: string,
        arena?: string,
        arenaID?: number,
        trophyLimit?: number
      },
      donationsPercent?: number
    }
  ];
  tracking?: {
    active?: boolean,
    available?: boolean,
    snapshotCount?: number
  }
}