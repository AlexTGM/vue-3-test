import { useRouter } from "vue-router";

export function createNavigation() {
  const router = useRouter();

  const navigateToCreate = () =>
    router.push({ name: "Create Category" });

  const navigateToList = () =>
    router.push({ name: "Categories List" });

  return {
    navigateToCreate,
    navigateToList,
  };
}