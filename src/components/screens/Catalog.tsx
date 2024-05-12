import { ReactElement, useState } from "react";
import { styled } from "goober";
import { products } from "~/utils/products";
import { useRouter } from "next/router";
import Image from "next/image";
import Filter from "../business/Filter";

const CatalogScreen = (): ReactElement => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const brands = new Set(products.map((p) => p.brand));
  const categories = new Set(products.map((p) => p.category));
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const filteredProducts = products.filter((p) => {
    if (selectedCategory.length === 0 && selectedBrand.length === 0)
      return true;
    if (selectedCategory.length === 0) return selectedBrand.includes(p.brand);
    if (selectedBrand.length === 0)
      return selectedCategory.includes(p.category);
    return (
      selectedCategory.includes(p.category) && selectedBrand.includes(p.brand)
    );
  });
  return (
    <Container>
      <Search
        placeholder="Пошук"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Wrapper>
        <div>
          <Filter
            title="Категорія"
            items={Array.from(categories)}
            selectedFilters={selectedCategory}
            changeFilter={setSelectedCategory}
          />
          <Filter
            title="Бренд"
            items={Array.from(brands)}
            selectedFilters={selectedBrand}
            changeFilter={setSelectedBrand}
          />
        </div>
        <CardsContainer>
          {filteredProducts
            .filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
            .map((product, i) => (
              <Card
                key={product.id + i}
                onClick={() => router.push(`/product/${product.id}`)}
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  height={274}
                  width={211}
                />
                <Name>{product.name}</Name>
                <Price>{product.price}</Price>
              </Card>
            ))}
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled("div")`
  padding: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CardsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 730px;
`;

const Card = styled("div")`
  gap: 10px;
  display: flex;
  width: 230px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  box-sizing: border-box;
  &:hover {
    padding: 14px 9px;
    cursor: pointer;
    border: 1px solid #858181;
    border-radius: 10px;
    & > h3 {
      color: #f39712;
    }
  }
`;

const Name = styled("h3")`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #858181;
  text-align: center;
  margin: 0;
`;

const Price = styled("p")`
  font-family: Roboto, sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  margin: 0;
`;

const Search = styled("input")`
  height: 36px;
  background: white;
  border: 0.5px solid #949191;
  border-radius: 10px;
  width: 456px;
  margin-bottom: 20px;
  padding: 0 10px;
  &:focus-visible,
  &:focus,
  &:active {
    outline: 1px solid #f39712;
  }
`;

const Wrapper = styled("div")`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default CatalogScreen;
