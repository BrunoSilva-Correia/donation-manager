import * as bcrypt from 'bcrypt';

export const hashPassword = async (value: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(value, saltRounds);
};
