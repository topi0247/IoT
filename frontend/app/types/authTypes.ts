export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const getSignUpParams = (params: SignUpParams): SignUpParams => {
  const { name, email, password, passwordConfirmation } = params;
  return {
    name: name,
    email: email,
    password: password,
    passwordConfirmation: passwordConfirmation,
  };
};

export type LoginParams = {
  email: string;
  password: string;
};
