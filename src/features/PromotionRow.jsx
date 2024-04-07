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

const Price = styled.div`
  font-family: "Sono", sans-serif;
  font-weight: 600;
`;

function displayMonetaryValue(value) {
  return `R$ ${value}`;
}

export default function PromotionRow({ promo }) {
  return (
    <Table.Row>
      <Text>{promo.id}</Text>
      <Text>{promo.name}</Text>
      <Text>{promo.totalSales}</Text>
      <Price>{displayMonetaryValue(promo.totalSold)}</Price>
    </Table.Row>
  );
}
