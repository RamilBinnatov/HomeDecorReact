import React, { useState } from "react";
import classes from "./sort.module.scss";

function Sort({ sortingOption, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={classes.sort}>
        <button className={classes["sort__toggle"]} onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 16L13 16"
              stroke="#B8926A"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M6 11H13"
              stroke="#B8926A"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8 6L13 6"
              stroke="#B8926A"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17 4L17 20L20 16"
              stroke="#B8926A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          SORT BY
        </button>
        {isOpen && (
          <ul className={classes["sort__menu"]}>
            <li className={classes["sort__menu--item"]}>
              <button
                className={`${classes["sort__menu--item--button"]} ${
                  sortingOption === "desc" ? "active" : ""
                }`}
                onClick={() =>
                  onSortChange((state) => ({
                    ...state,
                    sortingKey: "price",
                    sortingType: "asc",
                  }))
                }
              >
                CHEAPEST FIRST
              </button>
            </li>
            <li className={classes["sort__menu--item"]}>
              {" "}
              <button
                className={`${classes["sort__menu--item--button"]} ${
                  sortingOption === "asc" ? "active" : ""
                }`}
                onClick={() =>
                  onSortChange((state) => ({
                    ...state,
                    sortingKey: "price",
                    sortingType: "desc",
                  }))
                }
              >
                EXPENSIVE FIRST
              </button>
            </li>
            <li className={classes["sort__menu--item"]}>
              <button
                className={`${classes["sort__menu--item--button"]} ${
                  sortingOption === "sales" ? "active" : ""
                }`}
                onClick={() =>
                  onSortChange((state) => ({
                    ...state,
                    sortingKey: "saleCount",
                    sortingType: "asc",
                  }))
                }
              >
                POPULAR FIRST
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sort;
