import { ref } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required, minValue, maxValue } from "@vuelidate/validators";

import isValidType from "@/validators/type-validator";

export function createModel() {
  const id = ref(null);
  const name = ref(null);
  const description = ref(null);
  const priority = ref(null);
  const category = ref(null);
  const thumbnail = ref(null);
  const document = ref(null);
  const formJson = ref(null);

  return {
    id,
    name,
    description,
    priority,
    document,
    thumbnail,
    formJson,
    category,
  };
}

export function createValidation(model) {
  const rulesList = {
    id: { required },
    name: { required },
    description: { required },
    priority: {
      maxValue: maxValue(2147483647),
      minValue: minValue(0)
    },
    thumbnail: {
      required,
      isValidType: isValidType(["png"])
    },
    document: {
      required,
      isValidType: isValidType(["docx", "pptx", "xlsx", "pdf", "html"])
    },
    formJson: {
      isValidType: isValidType(["json"])
    },
    category: { required }
  };

  const validation = useVuelidate(rulesList, model);

  const validate = () => {
    validation.value.$touch();

    return !validation.value.$invalid;
  }

  return {
    validation, validate
  }
}