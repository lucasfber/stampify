import styled from "styled-components";
import Table from "../ui/Table";

const Name = styled.div`
  font-family: "Sono", sans-serif;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Text = styled.div`
  font-family: "Sono", sans-serif;
  font-weight: 600;
  color: var(--color-grey-600);
`;

export default function CustomerRow({ customer }) {
  return (
    <Table.Row>
      <Text>{customer.id}</Text>
      <Text>{customer.name}</Text>
      <Text>{customer.phone}</Text>
      <Text>{customer.email}</Text>
    </Table.Row>
  );
}
