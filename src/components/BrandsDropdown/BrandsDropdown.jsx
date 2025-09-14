import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { selectBrands } from "../../redux/cars/carsSelectors";
import Icon from "../Icon/Icon";
import css from "./BrandsDropdown.module.css";

export default function BrandDropdown({ value, onChange }) {
  const brands = useSelector(selectBrands);

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Car brand</label>

      <Menu as="div" className={css.menu}>
        {({ open }) => (
          <>
            <div className={css.menuField}>
              <span className={css.selectedText}>
                {value ? value : "Choose a brand"}
              </span>

              <Menu.Button
                className={css.chevronButton}
                aria-label={open ? "Close brands list" : "Open brands list"}
              >
                <span className={`${css.arrowWrap} ${open ? css.rotated : ""}`}>
                  <Icon
                    name="icon-chevron-down"
                    width={16}
                    height={16}
                    className={css.arrowIcon}
                  />
                </span>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              show={open}
              enter={css.enter}
              enterFrom={css.enterFrom}
              enterTo={css.enterTo}
              leave={css.leave}
              leaveFrom={css.leaveFrom}
              leaveTo={css.leaveTo}
            >
              <Menu.Items className={css.items}>
                <Menu.Item as="div">
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${css.option} ${
                        value === "" ? css.selected : ""
                      } ${active ? css.active : ""}`}
                      onClick={() => onChange("")}
                    >
                      Choose a brand
                    </button>
                  )}
                </Menu.Item>
                
                {brands.map((brand) => (
                  <Menu.Item key={brand} as="div">
                    {({ active }) => (
                      <button
                        type="button"
                        className={`${css.option} ${
                          value === brand ? css.selected : ""
                        } ${active ? css.active : ""}`}
                        onClick={() => onChange(brand)}
                      >
                        {brand}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
