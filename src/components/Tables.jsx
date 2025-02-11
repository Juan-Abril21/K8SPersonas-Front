import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
  
  const invoices = [
    {
      invoice: "1",
      totalAmount: "Bryam",
    },
    {
      invoice: "2",
      totalAmount: "Jose",
    },
    {
      invoice: "3",
      totalAmount: "Abril",
    },
    {
      invoice: "4",
      totalAmount: "Pepito",
    },
  ]
  
  export function TableDemo() {
    return (
      <Table>
        <TableCaption>Personas Facheras</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="text-right">Nombre</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{invoices.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  