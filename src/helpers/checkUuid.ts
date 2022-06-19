import { validate as uuidValidate } from 'uuid';
import { version as uuidVersion } from 'uuid';

export const uuidValidateV4 = (uuid: string): boolean => {
    console.log(uuidValidate(uuid))
   
  return uuidValidate(uuid) && uuidVersion(uuid) === 4;
};