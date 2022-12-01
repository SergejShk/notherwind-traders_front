import { CustomersBySearchType } from "../../types/customersTypes";
import { ProductsBySearchType } from "../../types/productsTypes";
import DataLink from "../shared/DataLink";
import {
  Info,
  InfoListItem,
  NoResText,
  ResultsTitle,
} from "./SearchResultsList.style";

interface IProps {
  data: ProductsBySearchType[] | CustomersBySearchType[];
}

const SearchResultsList: React.FC<IProps> = ({ data }) => {
  console.log(data);

  return (
    <>
      <ResultsTitle>Search results</ResultsTitle>

      {!data || (data.length < 1 && <NoResText>No results</NoResText>)}

      {data.length > 0 && (
        <ul>
          {data.map((el: any, idx) => (
            <InfoListItem key={idx}>
              {Object.keys(el).includes("ProductID") && (
                <>
                  <DataLink linkTo={`/products/${el.ProductID}`}>
                    {el.ProductName}
                  </DataLink>

                  <Info>
                    {`#${idx + 1}, Quantity Per Unit: ${
                      el.QuantityPerUnit
                    }, Price: ${el.UnitPrice}, Stock: ${el.UnitsInStock}`}
                  </Info>
                </>
              )}
              {Object.keys(el).includes("CustomerID") && (
                <>
                  <DataLink linkTo={`/customers/${el.CustomerID}`}>
                    {el.CompanyName}
                  </DataLink>

                  <Info>{`#${idx + 1}, Contact: ${el.ContactName}, Title: ${
                    el.ContactTitle
                  }, Phone: ${el.Phone}`}</Info>
                </>
              )}
            </InfoListItem>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchResultsList;
