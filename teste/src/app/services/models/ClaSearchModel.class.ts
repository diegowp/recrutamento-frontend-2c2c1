export class ClaSearchModel{
  badge?: {
    category?: string,
    id?: number,
    image?: string,
    name?: string,
  }
  donations?: number;
  location?: {
    name?: string, 
    isCountry?: boolean, 
    code?: string
  };
  memberCount?: number;
  name?: string;
  requiredScore?: number;
  score?: number;
  tag?: string;
  type?: string;
}