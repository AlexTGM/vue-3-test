import { ref } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export function createModel() {
  const id = ref(null);
  const name = ref(null);
  const description = ref(null);
  const slug = ref(null);

  return {
    id,
    name,
    description,
    slug,
  };
}

export function createValidation(model) {
  const rulesList = {
    id: { required },
    name: { required },
    description: { required },
    slug: { required },
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