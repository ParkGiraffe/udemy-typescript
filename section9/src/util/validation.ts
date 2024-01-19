namespace App {
  // Validation
  export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(validatableInput: Validatable) {
    let isValid = true;

    // 비구조화를 이용해서 좀 더 보기 편하게 수정
    const { value, required, minLength, maxLength, min, max } =
      validatableInput;

    if (required) {
      isValid = isValid && value.toString().trim().length !== 0;
    }

    if (minLength != null && typeof value === "string") {
      isValid = isValid && value.length >= minLength;
    }

    if (maxLength != null && typeof value === "string") {
      isValid = isValid && value.length <= maxLength;
    }

    if (min != null && typeof value === "number") {
      isValid = isValid && value >= min;
    }

    if (max != null && typeof value === "number") {
      isValid = isValid && value <= max;
    }

    return isValid;
  }
}
