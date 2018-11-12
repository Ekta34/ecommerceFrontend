import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://immense-sands-79544.herokuapp.com/"
});

export default client