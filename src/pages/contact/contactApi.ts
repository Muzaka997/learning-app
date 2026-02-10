import authApi from "../auth/authApi";

// Contact endpoint now requires auth and uses the account's registered email
export const sendContactMessage = async (data: {
  name: string;
  message: string;
}) => {
  return authApi.post("/contact", data);
};

export default sendContactMessage;
