import {
  BoxInput,
  BoxRario,
  Form,
  IconSearch,
  Input,
  InputRadio,
  LabelRadio,
  Title,
} from "./SearchForm.style";

interface IPros {
  curSearch: string;
  category: string;
  onFormSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<IPros> = ({
  curSearch,
  category,
  onFormSubmit,
  handleChange,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Search Database</Title>

      <BoxInput>
        <Input
          type="text"
          placeholder="Enter keyword..."
          name="search"
          value={curSearch}
          onChange={handleChange}
        />
        <IconSearch>
          <use href="/assets/sprite.svg#icon-search" />
        </IconSearch>
      </BoxInput>

      <Title>Tables</Title>

      <BoxRario>
        <InputRadio
          type="radio"
          name="category"
          id="productId"
          value="Products"
          checked={"Products" === category}
          onChange={handleChange}
        />
        <LabelRadio htmlFor="productId">Products</LabelRadio>
      </BoxRario>
      <BoxRario>
        <InputRadio
          type="radio"
          name="category"
          id="customerId"
          value="Customers"
          checked={"Customers" === category}
          onChange={handleChange}
        />
        <LabelRadio htmlFor="customerId">Customers</LabelRadio>
      </BoxRario>
    </Form>
  );
};

export default SearchForm;
