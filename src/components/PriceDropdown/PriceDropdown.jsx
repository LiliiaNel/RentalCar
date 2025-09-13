import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { selectPrices } from "../../redux/cars/carsSelectors";
import Icon from "../Icon/Icon";
import css from "./PriceDropdown.module.css";

export default function PriceDropdown({ value, onChange }) {
  const prices = useSelector(selectPrices);

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Price / 1hour</label>

      <Menu as="div" className={css.menu}>
        {({ open }) => (
          <>
            <div className={css.menuField}>
              <span className={css.selectedText}>
                {value ? `To $${value}` : "Choose a price"}
              </span>

              <Menu.Button
                className={css.chevronButton}
                aria-label={open ? "Close prices list" : "Open prices list"}
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
                      Choose a price
                    </button>
                  )}
                </Menu.Item>

                {prices.map((price) => (
                  <Menu.Item key={price} as="div">
                    {({ active }) => (
                      <button
                        type="button"
                        className={`${css.option} ${
                          value === price ? css.selected : ""
                        } ${active ? css.active : ""}`}
                        onClick={() => onChange(price)}
                      >
                        {price}
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
