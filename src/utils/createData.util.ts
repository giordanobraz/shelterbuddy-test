export interface Data {
  id: number;
  name: string;
  type: string;
  breed: string;
  gender: string;
  color: string;
}

export function createData(
  id: number,
  name: string,
  type: string,
  breed: string,
  gender: string,
  color: string
): Data {
  return {
    id,
    name,
    type,
    breed,
    gender,
    color,
  };
}
