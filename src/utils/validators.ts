const validations = (formData: FormData) => {
  let formKeys = [...formData.keys()];

  let errors = formKeys
    .map((key) => validator(key, formData.get(key) as string))
    .filter((_) => _);
  let isValid = errors.length <= 0;

  return {
    errors,
    isValid,
  };
};

const validator = (key: string, value: string) => {
  let error = null;
  switch (key.split(".")[0]) {
    case "siteTitle":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "username":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "email":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "heroTitle":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "heroSubtitle":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "projectTitle":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "projectDescription":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "companyName":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "companyDesignation":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "companyLocation":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "companyTimeline":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "companyDescription":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "blogTitle":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    case "blogDescription":
      if (value?.length < 5 || value?.length > 10)
        error = "siteTitle length not right";
      break;
    default:
      break;
  }

  return error
    ? {
        key,
        error,
      }
    : null;
};

export { validations };

[
  "siteImage",
  "siteTitle",
  "heroImage",
  "username",
  "email",
  "heroTitle",
  "heroSubtitle",
  "projectImage.0",
  "projectTitle.0",
  "projectLink.0",
  "projectDescription.0",
  "companyImage.0",
  "comapnyTitle.0",
  "companyDesignation.0",
  "comapnyLocation.0",
  "comapnyTimeline.0",
  "companyDescription.0",
  "blogImage.0",
  "blogTitle.0",
  "blogDescription.0",
];
