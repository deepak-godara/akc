import React from "react";
import styled from "styled-components";
import Table from "./Table";
import { OverviewDataType } from "./main";
const Container = styled.div`
  margin-top: 1.875rem;
`;
function UniversitiesMetrics({ data }: { data: OverviewDataType }) {
  return (
    <Container>
      <Table data={data.tableData} />
    </Container>
  );
}

export default UniversitiesMetrics;
