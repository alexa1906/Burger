import React, { useContext, useEffect, useMemo, useState } from "react";
import { Space } from "antd";
import chiflaTop from "../images/asset-1.svg";
import chiflaBottom from "../images/asset-23.svg";
import down from "../images/icons8-down-button-50.png";
import arrowleft from "../images/arrow-left.svg";
import arrowright from "../images/arrow-right.svg";
import { useTranslation } from "react-i18next";
import { defaultInputs, createInput, options } from "../constants";
import InputSection from "../components/inputSection";
import { CartContext } from "../App";
import "../pages/create.css";

//quantity, price, filterInputsByType (useMemo), InputSection

//zustand

const Create = () => {
  const { t } = useTranslation();

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ burgerName, selectedOptions, price: totalPrice, quantity: 1 });
  };

  const [burgerName, setBurgerName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [inputs, setInputs] = useState<any>(defaultInputs);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    const item = event.target.name;
    const id = event.target.id;

    if (selectedOption === "--") {
      deleteIngredientLinie(id);
      return;
    }

    const { img, name, price } = (options as any)[item].find(
      (el: any) => el.name === selectedOption
    );

    setSelectedOptions((prevSelectedOptions: any) => {
      const updatedSelectedOptions = [...prevSelectedOptions];
      const existingItemIndex = updatedSelectedOptions.findIndex(
        (burgerPart) => burgerPart.id === id
      );

      if (existingItemIndex !== -1) {
        updatedSelectedOptions[existingItemIndex] = {
          item,
          img,
          name,
          price,
          id,
        };
        return updatedSelectedOptions;
      } else {
        return [...prevSelectedOptions, { item, img, name, price, id }];
      }
    });
  };

  useEffect(() => {
    console.log({ selectedOptions });
  }, [selectedOptions]);

  const totalPrice = selectedOptions.reduce(
    (acc: any, item: { price: any }) => acc + item.price,
    8
  );

  const clickAdd = (type: any) => {
    setInputs((prev: any) => {
      return [...prev, createInput(type)];
    });
  };

  const deleteIngredient = (itemId: string) => {
    console.log(itemId);
    setSelectedOptions((prevSelectedOptions: any) =>
      prevSelectedOptions.filter((option: any) => option.id !== itemId)
    );
    setInputs((prevInputs: any) =>
      prevInputs.filter((input: any) => input.id !== itemId)
    );
  };

  const deleteIngredientLinie = (itemId: string) => {
    setSelectedOptions((prevSelectedOptions: any) =>
      prevSelectedOptions.filter((option: any) => option.id !== itemId)
    );
  };

  const renderInputSection = (label: string, inputs: any[]) => {
    return (
      <InputSection
        label={label}
        inputs={inputs}
        handleSelectChange={handleSelectChange}
        clickAdd={clickAdd}
        selectedOptions={selectedOptions}
        deleteIngredient={deleteIngredient}
      />
    );
  };

  const inputTypes = [
    "CHIFLĂ",
    "CARNE",
    "SOS CHIFLĂ JOS",
    "SOS CHIFLĂ TOP",
    "CAȘCAVAL",
    "TOPPING",
  ];

  const filteredInputs = useMemo(() => {
    const filtered: { [key: string]: any[] } = {};
    inputTypes.forEach((type) => {
      filtered[type] = inputs.filter((input: any) => input.type === type);
    });
    return filtered;
  }, [inputs]);

  return (
    <div className="createPage">
      <div className="createBg">
        <h1 className="title">{t("titlu")}</h1>
        <div className="scroll-down">
          <img src={down} alt="" />
        </div>
      </div>
      <Space style={{ gap: "20vw" }}>
        <Space direction="vertical">
          <div className="burger-choose">
            <div className="burger-select"></div>
            {renderInputSection(`${1}. CHIFLĂ`, filteredInputs["CHIFLĂ"])}
            {renderInputSection(`${2}. Carne`, filteredInputs["CARNE"])}
            {renderInputSection(
              `${3}. SOS CHIFLĂ JOS`,
              filteredInputs["SOS CHIFLĂ JOS"]
            )}
            {renderInputSection(
              `${4}. SOS CHIFLĂ TOP`,
              filteredInputs["SOS CHIFLĂ TOP"]
            )}
            {renderInputSection(`${5}. CAȘCAVAL`, filteredInputs["CAȘCAVAL"])}
            {renderInputSection(`${6}. TOPPING`, filteredInputs["TOPPING"])}
          </div>

          <div className="burger-name">
            <input
              type="text"
              name="personal_name"
              placeholder="Numește-ți burgerul 🍔"
              className="personal-name"
              value={burgerName}
              onChange={(e) => setBurgerName(e.target.value)}
            />
          </div>

          <div className="totalAndButtonContainer">
            <div className="totalPrice">
              <div>CHIFLA BRIOCHE: 8lei</div>
              {selectedOptions.map((item: any) => (
                <div>{`${item.name}: ${item.price}lei`}</div>
              ))}
              <div>Total Price: {totalPrice}lei</div>
            </div>

            <button
              type="button"
              className="buton-unu"
              onClick={handleAddToCart}
            >
              Adaugă în Coș
            </button>
          </div>
        </Space>

        <Space direction="vertical">
          <div className="burger-make">
            <img src={chiflaTop} alt="chifla top" className="burger-row" />
            {selectedOptions.map((item: any, index: number) => {
              if (index % 2 === 0) {
                return (
                  <div className="burger-row" key={index}>
                    <span className="image-description-left">{item.name}</span>
                    <img src={arrowleft} alt="" className="arrow-left" />
                    <img
                      width="100%"
                      src={item.img}
                      alt={item.name}
                      className="ingredient"
                    />
                  </div>
                );
              } else {
                return (
                  <div className="burger-row" key={index}>
                    <img
                      width="100%"
                      src={item.img}
                      alt={item.name}
                      className="ingredient"
                    />
                    <img src={arrowright} alt="" className="arrow-right" />
                    <span className="image-description-right">{item.name}</span>
                  </div>
                );
              }
            })}
            <img
              src={chiflaBottom}
              alt="chifla bottom"
              className="burger-row"
            />
          </div>
        </Space>
      </Space>
    </div>
  );
};

export default Create;
