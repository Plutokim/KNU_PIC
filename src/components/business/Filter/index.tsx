import { useState } from "react";
import selectedIco from "/public/selected.svg";
import nonselected from "/public/nonselected.svg";
import closed from "/public/closed.svg";
import opened from "/public/opened.svg";
import { styled } from "goober";
import Image from "next/image";

type Props = {
  title: string;
  items: string[];
  selectedFilters: string[];
  changeFilter: (filters: string[]) => void;
};

const Filter = ({ title, items, changeFilter, selectedFilters }: Props) => {
  const [open, setOpen] = useState(false);
  const onSelect = (v: string) => {
    changeFilter([...selectedFilters, v]);
  };
  const onDeselect = (v: string) => {
    changeFilter(selectedFilters.filter((i) => i !== v));
  };
  return (
    <Container>
      <Main onClick={() => setOpen(!open)}>
        <MainTitle>{title}</MainTitle>
        <Image src={open ? opened : closed} alt="icon" width={22} height={13} />
      </Main>
      {open &&
        items.map((item) => (
          <Item
            key={item}
            name={item}
            onSelect={onSelect}
            onDeselect={onDeselect}
          />
        ))}
    </Container>
  );
};

const Container = styled("div")`
  padding: 13px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 185px;
`;

const Main = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const MainTitle = styled("h4")`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #000000;
`;

const Item = ({
  onSelect,
  name,
  onDeselect,
}: {
  name: string;
  onSelect: (v: string) => void;
  onDeselect: (v: string) => void;
}) => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (selected) {
      onDeselect(name);
    } else {
      onSelect(name);
    }
    setSelected(!selected);
  };

  return (
    <ItemContainer onClick={handleClick}>
      <Image
        src={selected ? selectedIco : nonselected}
        alt="icon"
        width={25}
        height={25}
      />
      <ItemTitle>{name}</ItemTitle>
    </ItemContainer>
  );
};

const ItemContainer = styled("div")`
  display: flex;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  width: 100%;
`;

const ItemTitle = styled("p")`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: #000000;
  margin: 0;
`;

export default Filter;
