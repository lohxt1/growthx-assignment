const transformFormData = (formData: any, itemIdentifier: string) => {
  let keys = [...formData.keys()];
  let values = [...formData.values()];
  values = transformImageFileToBlobUrls(values);
  let allFormData = keys.map((key, idx) => ({
    key,
    value: values[idx],
  }));
  let itemsData = allFormData.filter((d) =>
    d?.key.includes(`${itemIdentifier}.`)
  );
  let items = [] as any;
  itemsData.forEach((prop) => {
    let idx = parseInt(prop?.key?.split(".")[1]);
    let key = prop?.key?.split(".")[2];
    if (!items[idx]) {
      items[idx] = {};
    }
    items[idx][key] = prop?.value;
  });

  return {
    items,
  };
};

const transformImageFileToBlobUrls = (values: any[]) => {
  return values.map((value) => {
    if (value?.type?.includes("image") || value?.type?.includes("octet")) {
      if (value?.name?.length > 0) {
        return URL.createObjectURL(value);
      } else {
        return null;
      }
    }
    return value;
  });
};

export { transformFormData, transformImageFileToBlobUrls };
