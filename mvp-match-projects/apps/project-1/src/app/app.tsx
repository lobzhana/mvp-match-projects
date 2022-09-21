import styled from 'styled-components';
import { Header } from './components/header/Header';
import { MenuBar } from './components/menu-bar/MenuBar';
import { ReportsPage } from './pages/reports/Reports';

const AppContainer = styled.div`
  display: flex;
`;

const MenuBarContainer = styled.div`
  margin-top: 41px;
`;

const PageContainer = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-left: 40px;
`;

export function App() {
  return (
    <div>
      <Header />
      <AppContainer>
        <MenuBarContainer>
          <MenuBar />
        </MenuBarContainer>
        <PageContainer>
          <ReportsPage />
        </PageContainer>
      </AppContainer>
    </div>
  );
}

export default App;
