export const createInput = (type) => {
  return {
    id: `${Math.random()}`,
    type,
    value: undefined,
    options: options[type],
  };
};

export const options = {
  CHIFLĂ: [
    {
      name: "CHIFLĂ BRIOCHE",
      price: 8,
      img: "/images/asset-1.svg",
      mass: 60,
    },
  ],
  CARNE: [
    {
      name: "FILEU PUI GRILL",
      price: 25,
      img: "/images/pirjoala-de-pui.svg",
      mass: 100,
    },
    {
      name: "PÂRJOALĂ VITĂ",
      price: 35,
      img: "/images/pirjoala-de-vita.svg",
      mass: 150,
    },
    {
      name: "FILEU PUI PANE",
      price: 25,
      img: "/images/pirjoala-de-pui.svg",
      mass: 100,
    },
  ],
  "SOS CHIFLĂ JOS": [
    {
      name: "SOS USTUROI",
      price: 4,
      img: "/images/tartar-sos.svg",
      mass: 20,
    },
    {
      name: "SOS KETCHUP",
      price: 4,
      img: "/images/ketchup.svg",
      mass: 20,
    },
    {
      name: "SOS TARTAR",
      price: 4,
      img: "/images/tartar-sos.svg",
      mass: 30,
    },
    {
      name: "SOS MAIONEZĂ",
      price: 4,
      img: "/images/maioneza.svg",
      mass: 20,
    },
    {
      name: "SOS USTUROI & BBQ",
      price: 4,
      img: "/images/ketchup.svg",
      mass: 20,
    },
    {
      name: "SOS SIRACHA",
      price: 6,
      img: "/images/sriracha.svg",
      mass: 20,
    },
    {
      name: "SOS CLASSY",
      price: 4,
      img: "/images/ketchup.svg",
      mass: 20,
    },
  ],
  "SOS CHIFLĂ TOP": [
    {
      name: "SOS USTUROI",
      price: 4,
      img: "/images/tartar-sos.svg",
      mass: 20,
    },
    {
      name: "SOS KETCHUP",
      price: 4,
      img: "/images/ketchup.svg",
      mass: 20,
    },
    {
      name: "SOS TARTAR",
      price: 4,
      img: "/images/tartar-sos.svg",
      mass: 30,
    },
    {
      name: "SOS MAIONEZĂ",
      price: 4,
      img: "/images/maioneza.svg",
      mass: 20,
    },
    {
      name: "SOS USTUROI & BBQ",
      price: 4,
      img: "/images/ketchup.svg",
      mass: 20,
    },
    {
      name: "SOS SIRACHA",
      price: 6,
      img: "/images/sriracha.svg",
      mass: 20,
    },
    {
      name: "SOS CLASSY",
      price: "4 lei",
      img: "/images/ketchup.svg",
      mass: 20,
    },
  ],
  CAȘCAVAL: [
    {
      name: "CAȘCAVAL CHEDDAR",
      price: 12,
      img: "/images/cheddar.svg",
      mass: 20,
    },
    {
      name: "CAȘCAVAL DORBLU",
      price: 15,
      img: "/images/1238688899_cascaval-dorblu.svg",
      mass: 25,
    },
  ],
  TOPPING: [
    {
      name: "BACON CROCANT",
      price: 12,
      img: "/images/bacon-crocant.svg",
      mass: 10,
    },
    {
      name: "OU PRĂJIT",
      price: 10,
      img: "/images/ou-prajit.svg",
      mass: 40,
    },
    {
      name: "CEAPĂ MARINATĂ",
      price: 2,
      img: "/images/ceapa-marinata.svg",
      mass: 10,
    },
    {
      name: "CEAPĂ CARAMELIZATĂ",
      price: 4,
      img: "/images/ceapa-caramelizata.svg",
      mass: 20,
    },
    {
      name: "CASTRAVEȚI MURAȚI",
      price: 4,
      img: "/images/1186812026_castraveti-murati.svg",
      mass: 30,
    },
    {
      name: "CASTRAVEȚI PROASPEȚI",
      price: 4,
      img: "/images/castraveti-proaspeti.svg",
      mass: 20,
    },
    {
      name: "SALATĂ ICEBERG",
      price: 5,
      img: "/images/salata-iceberg.svg",
      mass: 15,
    },
    {
      name: "ROȘII",
      price: 5,
      img: "/images/rosii.svg",
      mass: 40,
    },
  ],
};

export const defaultInputs = [
  {
    id: "1",
    type: "CHIFLĂ",
    options: options.CHIFLĂ,
  },
  {
    id: "2",
    type: "CARNE",
    options: options.CARNE,
  },
  {
    id: "3",
    type: "SOS CHIFLĂ JOS",
    options: options["SOS CHIFLĂ JOS"],
  },
  {
    id: "4",
    type: "SOS CHIFLĂ TOP",
    options: options["SOS CHIFLĂ TOP"],
  },
  {
    id: "5",
    type: "CAȘCAVAL",
    options: options.CAȘCAVAL,
  },
  {
    id: "6",
    type: "TOPPING",
    options: options.TOPPING,
  },
];
