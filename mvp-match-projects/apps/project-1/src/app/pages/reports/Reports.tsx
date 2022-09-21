import { useState } from 'react';
import styled from 'styled-components';
import { EmptyReports } from './components/empty/EmptryReportsList';
import { ReportsFilters } from './components/filters/ReportsFilters';
import { ReportsList } from './components/reports-list/ReportsList';

const Container = styled.div`
  width: 100%;
  margin-left: 40px;
`;

const PageHeader = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;

const PageFilters = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 100px;
`;

const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: #011f4b;
`;

const PageDesc = styled.h4`
  font-weight: 700;
  font-size: 16px;
  color: #7e8299;
  margin-top: 4px;
`;

const PageContent = styled.div`
  display: flex;
`;

export const ReportsPage = () => {
  const [reports] = useState([{}]);

  return (
    <Container>
      <PageHeader>
        <div>
          <PageTitle>Reports</PageTitle>
          <PageDesc>Easily generate a report of your transactions</PageDesc>
        </div>
        <PageFilters>
          <ReportsFilters />
        </PageFilters>
      </PageHeader>
      <PageContent>
        {reports.length > 0 ? <ReportsList /> : <EmptyReports />}
      </PageContent>
    </Container>
  );
};
