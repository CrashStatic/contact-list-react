const PHONE_PREFIX = "+7";

export function formatPhoneNumber(value: string): string {
  let inputValue = value.replace(/\D/g, '');

  if (inputValue.length === 1 && inputValue[0] !== '7') {
    inputValue = `7${inputValue}`;
  }

  let formattedValue = `${PHONE_PREFIX} `;

  if (inputValue.length > 1) formattedValue += inputValue.substring(1, 4);
  if (inputValue.length > 4) formattedValue += ` ${inputValue.substring(4, 7)}`;
  if (inputValue.length > 7) formattedValue += ` ${inputValue.substring(7, 9)}`;
  if (inputValue.length > 9) formattedValue += ` ${inputValue.substring(9, 11)}`;

  return formattedValue;
}
