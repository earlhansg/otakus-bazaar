type ErrorProp = {
    error: {
        message: string;
        ref: any;
        type: string;
    }
}


export function findInputError(errors: any, name: string): ErrorProp {
    const filtered = Object.keys(errors)
      .filter(key => key.includes(name))
      .reduce((cur, key) => {
        return Object.assign(cur, { error: errors[key] })
      }, {}) as ErrorProp;
    return filtered
  }