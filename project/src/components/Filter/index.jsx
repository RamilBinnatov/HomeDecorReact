import React, { useEffect, useState } from "react";
import classes from "./filter.module.scss";
import Checkbox from "./checkbox";

function Filter({
  setSortingOption,
  filters,
  title,
  filterKey,
  currentFilterKey,
}) {
  const [isChecked, setIsChecked] = useState({});
  const [isAllChecked, setIsAllChecked] = useState(true);

  const toggleCheckbox = (filter) => {
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [filter]: !prevChecked[filter],
    }));
  };

  const toggleAllCheckboxes = () => {
    const allChecked = Object.keys(isChecked).every((key) => isChecked[key]);

    const updatedChecked = {};
    for (const filter of filters) {
      updatedChecked[filter.name] = !allChecked;
    }
    setIsChecked(updatedChecked);
  };
  useEffect(() => {
    const selectedfilters = Object.keys(isChecked).filter(
      (key) => isChecked[key]
    );

    setIsAllChecked(
      selectedfilters.length === filters.length || selectedfilters.length === 0
    );

    setSortingOption((state) => ({
      ...state,
      filterKey,
      filterVal: selectedfilters,
    }));
  }, [isChecked]);

  const allCheckHandler = () => {
    setIsAllChecked(true);
    const isAnySelected = Object.keys(isChecked).some((key) => isChecked[key]);

    const filterNames = filters.map((key) => key.name);

    if (isAnySelected) {
      setIsChecked((state) => {
        const allfiltersChecked = filterNames.reduce((selected, filter) => {
          selected[filter] = true;
          return selected;
        }, {});
        return { ...state, ...allfiltersChecked };
      });
    }
  };

  return (
    <div className={classes.filter}>
      <p className={classes["filter__title"]}>{title}</p>

      <label className={classes["filter__box"]}>
        <input
          className={classes["filter__box--input"]}
          name="all"
          type="checkbox"
          checked={isAllChecked}
          onChange={allCheckHandler}
        />

        <div className={classes["custom-checkbox"]}>
          <Checkbox isChecked={isAllChecked} />
        </div>
        <span className={classes["filter__box--span"]}>All</span>
      </label>
      {filters.map((filter) => (
        <label key={filter.id} className={classes["filter__box--map"]}>
          <input
            className={classes["filter__box--input"]}
            name={filter.name}
            type="checkbox"
            checked={isChecked[filter.name]}
            onChange={() => toggleCheckbox(filter.name)}
          />

          <div className={classes["custom-checkbox"]}>
            <Checkbox isChecked={isChecked[filter.name]} />
          </div>
          <span className={classes["filter__box--span"]}>{filter.name}</span>
        </label>
      ))}
    </div>
  );
}

export default Filter;
