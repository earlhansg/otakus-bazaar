type ValidtionProp = {
    name: string;
    validation?: {
        required?: {
            value: boolean;
            message: string;
        }  
    maxLength?: {
      value: number;
      message: string;
      }
    }
}

export const validations: ValidtionProp[] = [
  {
    name: "email",
    validation: {
      required: {
        value: true,
        message: "Email is required",
      },
      maxLength: {
        value: 10,
        message: "20 characters max",
      }
    },
  }
];

export const emailValidation = {
  validation: {
    required: {
      value: true,
      message: "Email is required",
    },
  },
};

export const deliveryTypeValidation = {
  validation: {
    required: {
      value: true,
      message: "Delivery Type is required",
    },
  },
};

export const firstnameValidation = {
  validation: {
    required: {
      value: true,
      message: "Firstname is required",
    },
  },
}

export const lastnameValidation = {
  validation: {
    required: {
      value: true,
      message: "Lastname is required",
    },
  },
}

export const addressValidation = {
  validation: {
    required: {
      value: true,
      message: "Address is required",
    },
  },
}

export const cityValidation = {
  validation: {
    required: {
      value: true,
      message: "City is required",
    },
  },
}

export const stateValidation = {
  validation: {
    required: {
      value: true,
      message: "State is required",
    },
  },
}

export const zipcodeValidation = {
  validation: {
    required: {
      value: true,
      message: "Zipcode is required",
    },
  },
}

export const phoneValidation = {
  validation: {
    required: {
      value: true,
      message: "Phone is required",
    },
    pattern: {
      value: /^(?:\+?63|0)[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/,
      message: "invalid phone number"
    }
  },
}
