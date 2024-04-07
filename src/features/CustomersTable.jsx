import Table from "../ui/Table";
import CustomerRow from "./CustomerRow";

export default function CustomersTable() {
  const customers = [
    { id: 1, name: "John", email: "john@mail.com", phone: "555-2132" },
    { id: 2, name: "Mark", email: "mark@mail.com", phone: "333-2132" },
    { id: 3, name: "Ana", email: "ana@mail.com", phone: "444-2132" },
    { id: 4, name: "Mary", email: "mary@mail.com", phone: "777-2132" },
  ];

  return (
    <Table columns={"0.5fr 1fr 1fr 1.2fr"}>
      <Table.Header>
        <div>#</div>
        <div>Nome</div>
        <div>Telefone</div>
        <div>Email</div>
      </Table.Header>
      <Table.Body
        data={customers}
        render={(customer) => (
          <CustomerRow customer={customer} key={customer.id} />
        )}
      />
    </Table>
  );
}
