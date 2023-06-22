interface ICoachDesc {
  value: string;
}

export interface ICoach {
  coach_name: string;
  coach_photo: string;
  description: ICoachDesc[];
}
