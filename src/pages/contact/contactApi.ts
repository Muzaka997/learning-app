import { gql } from "@apollo/client";
import { apolloClient } from "../../apollo/client";

const SEND_CONTACT_MESSAGE = gql`
  mutation SendContactMessage($name: String, $message: String!) {
    sendContactMessage(name: $name, message: $message) {
      sent
      note
    }
  }
`;

// Contact requires auth and uses the account's registered email (server-side).
export const sendContactMessage = async (data: {
  name: string;
  message: string;
}) => {
  return apolloClient.mutate({
    mutation: SEND_CONTACT_MESSAGE,
    variables: { name: data.name, message: data.message },
  });
};

export default sendContactMessage;
