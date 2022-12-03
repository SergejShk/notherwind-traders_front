import { Box, Title, LogoImg, Text, LinkText } from "./Home.style";

const HomePage: React.FC = () => {
  return (
    <Box>
      <Title>Welcome to Northwind Traders</Title>
      <LogoImg src="assets/logo.webp" alt="Logo" />
      <Text>
        This dataset was sourced from{" "}
        <LinkText
          href="https://github.com/SergejShk/notherwind-traders_back"
          target="_blank"
          rel="noreferrer noopener"
        >
          northwind-PostgreSQL
        </LinkText>
        .
      </Text>
      <Text>
        You can use the UI to explore Supplies, Orders, Customers, Employees and
        Products, or you can use search if you know what you're looking for.
      </Text>
    </Box>
  );
};

export default HomePage;
