import React from "react";
import styled from "styled-components";
// start of styled-components
const Container = styled.div`
  background: #ffffff;
  padding: 1.875rem;
  border-radius: 20px;
`;
const TableStyled = styled.table`
  width: 100%;
`;
const TableHeader = styled.thead``;
const TableHeading = styled.th`
  border-bottom: 0.125rem solid ${(props) => props.theme.colors.gray[500]};
  padding-bottom: 1.875rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4375rem;
  color: ${(props) => props.theme.colors.gray[600]};
`;
const UniversityImage = styled.img`
  height: 1.4375rem;
  width: 1.4375rem;
  object-fit: cover;
  margin-right: 1.25rem;
`;
const TableHeadingRow = styled.tr``;
const TableDataRow = styled.tr`
  border-bottom: 0.125rem solid ${(props) => props.theme.colors.gray[500]};
`;
const TableBody = styled.tbody``;
const TableDataCell = styled.td`
  padding: 1.125rem 0;
  font-size: 1rem;
  line-height: 1.4375rem;
  color: ${(props) => props.theme.colors.gray[800]};
  margin-right: 5rem;
`;
const TableCellDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 6.0625rem;
  max-width: 12.5rem;
`;
const SalesCellDataContainer = styled(TableCellDataContainer)`
  padding-right: 2.5625rem;
`;
const UniversityTableDataCell = styled(TableDataCell)`
  display: flex;
  align-items: center;
`;
const TableDataText = styled.span`
  display: inline-block;
`;
const PercentageIncrease = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 1.3125rem;
  background: ${(props) => props.theme.colors.green[600]}26;
  color: ${(props) => props.theme.colors.green[600]};
  border-radius: 10px;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  font-weight: 700;
`;
const PercentageDecrease = styled(PercentageIncrease)`
  background: ${(props) => props.theme.colors.red[500]}26;
  color: ${(props) => props.theme.colors.red[500]};
`;

const tableHeaders = [
  "Universities",
  "Orders",
  "Promo clicks",
  "Courses",
  "Students",
  "Sales",
];
export interface OverviewtableData {
  id: string;
  UniversityName: string;
  Orders: number;
  PromoClicks: number;
  Courses: number;
  Students: number;
  Sales: number;
  image: string;
}
// end of sytled-components

function Table({ data }: { data: OverviewtableData[] }) {
  return (
    <Container>
      <TableStyled border={1}>
        <TableHeader>
          <TableHeadingRow>
            {tableHeaders.map((heading, index) => {
              return <TableHeading>{heading}</TableHeading>;
            })}
          </TableHeadingRow>
        </TableHeader>
        <TableBody>
          {data.map((e) => {
            return (
              <TableDataRow key={e.id}>
                <UniversityTableDataCell>
                  <UniversityImage src={e.image} />
                  <TableDataText>{e.UniversityName}</TableDataText>
                </UniversityTableDataCell>
                <TableDataCell>
                  <TableCellDataContainer>
                    <TableDataText>{e.Orders}</TableDataText>
                    <PercentageIncrease>+ 21</PercentageIncrease>
                  </TableCellDataContainer>
                </TableDataCell>
                <TableDataCell>
                  <TableCellDataContainer>
                    <TableDataText>{e.PromoClicks}</TableDataText>
                    <PercentageIncrease>+ 21</PercentageIncrease>
                  </TableCellDataContainer>
                </TableDataCell>
                <TableDataCell>
                  <TableCellDataContainer>
                    <TableDataText>{e.Courses}</TableDataText>
                    <PercentageDecrease>- 21</PercentageDecrease>
                  </TableCellDataContainer>
                </TableDataCell>
                <TableDataCell>
                  <TableCellDataContainer>
                    <TableDataText>{e.Students}</TableDataText>
                    <PercentageIncrease>+ 21</PercentageIncrease>
                  </TableCellDataContainer>
                </TableDataCell>
                <TableDataCell>
                  <SalesCellDataContainer>
                    <TableDataText>€ {e.Sales}</TableDataText>
                    <PercentageIncrease>+ 21</PercentageIncrease>
                  </SalesCellDataContainer>
                </TableDataCell>
              </TableDataRow>
            );
          })}
        </TableBody>
      </TableStyled>
    </Container>
  );
}

export default Table;
