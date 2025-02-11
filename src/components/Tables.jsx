import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { useEffect } from "react";
import { getPersonas } from "@/peticiones/getPersonas";

export function TableDemo({ personas, setPersonas }) {
  useEffect(() => {
    const fetchPersonas = async () => {
      const data = await getPersonas();
      setPersonas(data);
    };
    fetchPersonas();
  }, []); 

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
        {personas.map((persona) => (
          <TableRow key={persona.ID}>
            <TableCell className="font-medium">{persona.ID}</TableCell>
            <TableCell className="text-right">{persona.nombre}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={1}>Total</TableCell>
          <TableCell className="text-right">{personas.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}