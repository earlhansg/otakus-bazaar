export interface FormValues {
  email: string;
  firstname: string;
  lastname: string;
  company: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
  country: number;
  deliveryType: string;
}

export const countries = [
  {
    id: 1,
    name: "Philippines",
  },
];

export const formValues = {
  email: "",
  firstname: "",
  lastname: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  zipcode: "",
  phone: "",
  country: countries[0].id,
  deliveryType: "pickup",
};
