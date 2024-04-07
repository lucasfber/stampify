import Table from "../ui/Table";
import PromotionRow from "./PromotionRow";

export default function PromotionsTable() {
  // const { isLoading, promotions} = usePromotions()

  const data = [
    { id: 1, name: "PROMO1", totalSold: 99.33, totalSales: 54 },
    { id: 2, name: "PROMO2", totalSold: 11.55, totalSales: 32 },
    { id: 3, name: "PROMO3", totalSold: 22.44, totalSales: 11 },
    { id: 4, name: "PROMO4", totalSold: 12.13, totalSales: 22 },
  ];

  // if (isLoading) return <Spinner />;

  return (
    <Table columns="0.6fr 1.8fr 0.6fr 0.8fr">
      <Table.Header>
        <div>ID</div>
        <div>Nome</div>
        <div>Vendas</div>
        <div>Total Vendido</div>
      </Table.Header>
      <Table.Body
        data={data}
        render={(promo) => <PromotionRow promo={promo} key={promo.id} />}
      />
      <Table.Footer>
        <p>Paginação</p>
      </Table.Footer>
    </Table>
  );
}
