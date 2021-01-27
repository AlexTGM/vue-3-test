export default function isValidType(supportedTypes) {
  return {
    $validator: function (value) {
      if (!value) return true;

      const type = value.name.split(".").pop().toLowerCase();

      return supportedTypes.includes(type);
    },
    $message: function $message(_ref) {
      const types = _ref.$params.supportedTypes.join(', ');

      return `The file must be one of the following types: ${types}`;
    },
    $params: { supportedTypes }
  }
}