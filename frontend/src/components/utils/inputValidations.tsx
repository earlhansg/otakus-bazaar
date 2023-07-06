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
        message: "required",
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
      message: "required",
    },
  },
};

export const deliveryTypeValidation = {
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const firstnameValidation = {
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
}

export const lastnameValidation = {
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
}

export const addressValidation = {
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
}

export const cityValidation = {
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
}

export const stateValidation = {
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
}

export const zipcodeValidation = {
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
}

export const phoneValidation = {
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /^(?:\+?63|0)[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/,
      message: "invalid phone number"
    }
  },
}
