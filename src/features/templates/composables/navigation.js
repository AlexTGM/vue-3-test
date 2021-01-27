import { useRouter } from "vue-router";

export function createNavigation() {
  const router = useRouter();

  const navigateToCreate = () =>
    router.push({ name: "Create Template" });

  const navigateToList = () =>
    router.push({ name: "Templates List" });

  return {
    navigateToCreate,
    navigateToList,
  };
}