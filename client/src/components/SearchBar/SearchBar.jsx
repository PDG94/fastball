import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const { setFilter } =
  require("./../../reduxToolkit/slices/productSlice").productActions;

const SearchBar = () => {
  const dispatch = useDispatch();
  const { configFilter } = useSelector((state) => state.product);
  const { allCategories } = useSelector((state) => state.category);
  const [currentFilter, setCurrentFilter] = useState({
    name: "",
    categoryId: "",
    order: "LPrice",
  });

  const handleChangeCategory = (event) => {
    const filterCategoryId =
      event.target.value === "all" ? "" : event.target.value;
    const filters = { ...configFilter, categoryId: filterCategoryId };
    dispatch(setFilter(filters));
    setCurrentFilter(filters);
  };

  const handleChangeOrder = (event) => {
    const filters = { ...configFilter, order: event.target.value };
    dispatch(setFilter(filters));
    setCurrentFilter(filters);
  };

  // const handleChangeTypeOrder = (event)=> {
  //     const filterOrder = [event.target.value, configFilter.order[1]]
  //     const filters = { ...configFilter, order: filterOrder}
  //     dispatch(setFilter(filters))
  //     setCurrentFilter(filters)
  // }

  const handleChangeSearchByName = (event) => {
    const filterName = event.target.value;
    const filters = { ...configFilter, name: filterName };
    dispatch(setFilter(filters));
    setCurrentFilter(filters);
  };

  useEffect(() => {
    setCurrentFilter({ ...configFilter });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-24 flex w-[92%]  shad px-5 py-5 justify-between drop-shadow-lg ">
      <div>
        <label
          htmlFor="filter"
          className="mr-1 text-sm font-medium text-gray-700"
        >
          Catalogs{" "}
        </label>
        <select
          name="category"
          id="category"
          className=" bg-white  shad py-2 px-3 text-slate-900 leading-tight focus:outline-none  "
          onChange={handleChangeCategory}
          value={currentFilter.categoryId ? currentFilter.categoryId : "all"}
        >
          <option value="all">All</option>
          {allCategories.map((cat, ind) => (
            <option key={ind} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search by product name ..."
          className="appearance-none w-full py-2 pl-8 pr-3 text-gray-700 leading-tight focus:outline-none shad"
          onChange={handleChangeSearchByName}
          value={currentFilter.name}
        />
        <label
          htmlFor="search"
          className="absolute left-0 top-0 mt-2 ml-3 text-gray-600"
        >
          <span className="fa fa-search"></span>
        </label>
      </div>

      <div className="ml-4 mr-8">
        <label
          htmlFor="order"
          className="mr-1 text-sm font-medium text-gray-700"
        >
          Order by{" "}
        </label>
        {/* <select 
                    name="typeOrder" 
                    id="typeOrder" 
                    className='shadow  border rounded py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={handleChangeTypeOrder}
                    value={currentFilter.order[0]}
                > 
                    <option value= "name" >Name</option>
                    <option value= "price" >Price</option>
                </select>  */}
        <select
          name="order"
          id="order"
          className="shad py-2 px-3 text-slate-900 leading-tight focus:outline-none  bg-white w-36"
          onChange={handleChangeOrder}
          value={currentFilter.order}
        >
          <option value="LPrice">Lower price</option>
          <option value="HPrice">Higher price</option>
          {/* <option value= "Relevant" >Most relevant</option> */}
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
