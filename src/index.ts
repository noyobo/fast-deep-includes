type TObject = Record<string, unknown>

/**
 * Check if the right object is included in the left object.
 * @param left - Base object.
 * @param right - The object to check if it is included in the left object.
 */
export const fastDeepIncludes = (left: unknown, right: unknown): boolean => {
  if (left === right) {
    return true;
  }

  if(Array.isArray(left) && Array.isArray(right)) {
    return right.every((rightItem) => left.some((leftItem) => fastDeepIncludes(leftItem, rightItem)));
  }

  if (Array.isArray(left) || Array.isArray(right)) {
    return false;
  }

  if (isObject(left) && isObject(right)) {
    return Object.keys(right as TObject).every((key) => {
      if (!Object.prototype.hasOwnProperty.call(left, key)) {
        return false;
      }

      return fastDeepIncludes(left[key], right[key]);
    });
  }

  return left === right;
}


function isObject (obj: unknown): obj is TObject {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

