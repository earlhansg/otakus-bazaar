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
