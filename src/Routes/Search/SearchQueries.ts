import gql from "graphql-tag";

export const GET_IP = gql`
  query getIp($ip: String!) {
    GetIp(ip: $ip) {
      ip_info {
        ip
        range
        country
        region
        city
        ll
        metro
        zip
      }
      error
      ok
    }
  }
`;
