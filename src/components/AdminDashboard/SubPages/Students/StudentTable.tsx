import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableDataCell,
} from "@lib/microComponents/Table";
import { StudentDataType } from "@lib/testData/mockStudentsData";
import { Link } from "react-router-dom";
import styled from "styled-components";

// styled-components----
const Container = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 1.875rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const FirstNameTableCell = styled(TableDataCell)`
  font-weight: 700;
`;
const LastNameTableCell = styled(TableDataCell)`
  font-weight: 700;
`;
const UniversityTableCell = styled(TableDataCell)``;
const StudyTableCell = styled(TableDataCell)``;
const DetailsTableCell = styled(TableDataCell)``;
const DetailsLink = styled(Link)`
  height: 2.1875rem;
  width: 9.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.gray[800]};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gray[500]};
`;
// ---------------------

function StudentTable({ items }: { items: StudentDataType[] }) {
  return (
    <Container>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell>Last Name</TableHeaderCell>
            <TableHeaderCell>University</TableHeaderCell>
            <TableHeaderCell>Study</TableHeaderCell>
            <TableHeaderCell>
              <div></div>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((e) => (
            <TableRow>
              <FirstNameTableCell>{e.firstName}</FirstNameTableCell>
              <LastNameTableCell>{e.lastName}</LastNameTableCell>
              <UniversityTableCell>{e.university}</UniversityTableCell>
              <StudyTableCell>{e.study}</StudyTableCell>
              <DetailsTableCell>
                <DetailsLink to="#">Details</DetailsLink>
              </DetailsTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
export default StudentTable;
