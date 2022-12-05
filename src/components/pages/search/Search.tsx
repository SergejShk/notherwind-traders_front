import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./searchForm/SearchForm";
import SearchResultsList from "./searchResultsList/SearchResultsList";
import { getDataBySearch } from "../../../api/dataApi";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setStats } from "../../../store/reducers/statsSlice";

const Box = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #eff0f1;
  padding: 24px;
`;

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const query = searchParams.get("search") ?? "";
  const searchCategory = searchParams.get("category") ?? "";
  const [search, setSearch] = useState(query);
  const [category, setCategory] = useState(searchCategory || "Products");
  const [data, setData] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    search &&
      getDataBySearch({
        category: category.toLowerCase(),
        query: search,
      })
        .then((res) => {
          setData(res.data);
          dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
        })
        .catch((err) => {
          setData([]);
          console.log(err);
        });
  }, [dispatch, category]);

  const onFormSubmit = () => {
    setSearchParams(search !== "" ? { search, category } : {});

    search &&
      getDataBySearch({
        category: category.toLowerCase(),
        query: search,
      })
        .then((res) => {
          setData(res.data);
          dispatch(setStats({ metrics: res.metrics, stats: res.stats }));
        })
        .catch(console.log);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === "search" && setSearch(value);

    if (name === "category") {
      setCategory(e.target.value);
      setSearchParams(search !== "" ? { search, category: value } : {});
    }
  };

  return (
    <Box>
      <SearchForm
        onFormSubmit={onFormSubmit}
        curSearch={search}
        handleChange={handleChange}
        category={category}
      />

      <SearchResultsList data={data} />
    </Box>
  );
};

export default SearchPage;
