import styled from 'styled-components';

const Container = styled.div`
  width: 24px;
  margin-left: 36px;
  height: 100%;

  .menu-item {
    cursor: pointer;
  }

  .menu-item:not(:first-child) {
    margin-top: 24px;
  }
`;

const menuItems = [
  {
    title: 'Menu Item 1',
    imgUrl: '../../../assets/images/menu-items/menu-item-1.svg',
  },
  {
    title: 'Menu Item 2',
    imgUrl: '../../../assets/images/menu-items/menu-item-2.svg',
  },
  {
    title: 'Menu Item 3',
    imgUrl: '../../../assets/images/menu-items/menu-item-3.svg',
  },
  {
    title: 'Menu Item 4',
    imgUrl: '../../../assets/images/menu-items/menu-item-4.svg',
  },
  {
    title: 'Menu Item 5',
    imgUrl: '../../../assets/images/menu-items/menu-item-5.svg',
  },
];

export const MenuBar = () => {
  return (
    <Container>
      {menuItems.map((mItem) => (
        <div key={mItem.title} className="menu-item">
          <img src={mItem.imgUrl} alt={mItem.title} />
        </div>
      ))}
    </Container>
  );
};
