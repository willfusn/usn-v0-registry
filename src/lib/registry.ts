import registry from "@/registry";

export interface Component {
  name: string;
  type: string;
  title: string;
  description?: string;
  files?: { path: string; type: string; target: string }[];
}

export function getRegistryItems(): Component[] {
  // exclude style item as it's not relevant to show in the ui
  const components = registry.items.filter(
    (item) => item.type !== "registry:style",
  );

  return components as Component[];
}

export function getSidebarBlocks() {
  const blocks = getRegistryItems().filter(
    (component) => component.type === "registry:block",
  );

  return blocks.map(({ title, name }) => ({
    title,
    name,
    path: name !== "blank" ? `/blocks/${name}` : undefined, // don't preview blank block
  }));
}

export function getSidebarUIPrimitives() {
  const components = getRegistryItems().filter(
    (component) => component.type === "registry:ui",
  );

  return components.map(({ title, name }) => ({
    title,
    name,
    path: `/ui/${name}`,
  }));
}

export function getSidebarComponents() {
  const components = getRegistryItems().filter(
    (component) => component.type === "registry:component",
  );

  return components.map(({ title, name }) => ({
    title,
    name,
    path: `/components/${name}`,
  }));
}

export function getComponent(name: string): Component {
  const components = getRegistryItems();

  const component = components.find(
    (item: { name: string }) => item.name === name,
  );

  if (component == null) {
    throw new Error(`Component "${name}" not found`);
  }

  return component;
}
