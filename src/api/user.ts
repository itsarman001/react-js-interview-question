const user = {
  name: "John Doe",
  email: "johndoe@email.com",
  userid: "johndoe",
  password: "1234",
};

type UserCredentials = {
  userid: string;
  password: string;
};

type User = {
  name: string;
  email: string;
  userid: string;
};

type UserApiResponse = {
  success: true;
  message: string;
  user: User;
};

export const userApi = ({
  userid,
  password,
}: UserCredentials): Promise<UserApiResponse> => {
  return new Promise<UserApiResponse>((resolve, reject) => {
    setTimeout(() => {
      if (userid === user.userid && password === user.password) {
        resolve({
          success: true,
          message: "Login successful!",
          user: {
            name: user.name,
            email: user.email,
            userid: user.userid,
          },
        });
      } else {
        reject(new Error("Invalid user ID or password"));
      }
    }, 2000);
  });
};
