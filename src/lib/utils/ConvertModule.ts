import { TModule } from "@/types/index";
export function convertModuleNameToID(moduleName: TModule): number {
  if (moduleName === "SKD") {
    return 1;
  } else if (moduleName === "Matematika") {
    return 2;
  }
  return 0;
}
export function convertIDToModuleName(id: string): string {
  if (id === "1") {
    return "SKD";
  } else if (id === "2") {
    return "Matematika";
  }
  return "";
}
