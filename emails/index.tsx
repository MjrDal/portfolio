import { Body, Container, Head, Html, Text } from "@react-email/components";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
  email: string;
  message: string;
}

export const KoalaWelcomeEmail = ({
  email,
  userFirstname,
  message,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi Julien,</Text>
        <Text style={paragraph}>
          Vous avez recut un message de la part de {userFirstname},
        </Text>
        <Text style={paragraph}>voici sont adresse mail : {email}</Text>
        <Text style={paragraph}>voici sont message : {message}</Text>
      </Container>
    </Body>
  </Html>
);

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "5px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
