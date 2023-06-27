export enum DepartmentEnum {
  LEADER = "leader",
  MARKETING = "marketing",
  PRODUCT = "product",
  OFFICE = "office",
}

export type DepartmentType =
  | DepartmentEnum.LEADER
  | DepartmentEnum.MARKETING
  | DepartmentEnum.PRODUCT
  | DepartmentEnum.OFFICE;

export interface ITeam {
  id: number;
  name: string;
  position: string;
  department: DepartmentType;
  photo: string;
}
