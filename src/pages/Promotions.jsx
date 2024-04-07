import PromotionsTable from "../features/PromotionsTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
export default function Promotions() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Minhas promoções</Heading>
        <Button>Criar Nova promoção</Button>
      </Row>
      <PromotionsTable />
    </>
  );
}
