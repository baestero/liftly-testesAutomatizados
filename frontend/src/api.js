export const API_URL = "http://localhost:3000";

//"https://liftly-backend-fjhi.onrender.com"
//"http://localhost:3000"

export const TOKEN_POST = (body) => {
  return {
    url: `${API_URL}/users/auth`,

    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: `${API_URL}/users`,
    options: {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: `${API_URL}/users/me`,
    options: {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  };
};

export const TOKEN_VALIDATE_GET = (token) => {
  return {
    url: `${API_URL}/users/validate`,
    options: {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  };
};

export const CATEGORY_GET = (token) => {
  return {
    url: `${API_URL}/categories`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const SUBCATEGORY_GET = (token, categoryId) => {
  return {
    url: `${API_URL}/categories/${categoryId}/subcategories`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const EXERCISE_GET = (token, categoryId, subCategoryId) => {
  return {
    url: `${API_URL}/categories/${categoryId}/subcategories/${subCategoryId}/exercises`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
export const EXERCISE_GET_ID = (
  token,
  categoryId,
  subCategoryId,
  exerciseId
) => {
  return {
    url: `${API_URL}/categories/${categoryId}/subcategories/${subCategoryId}/exercises/${exerciseId}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
export const EXERCISE_POST = (token, categoryId, subCategoryId, body) => {
  return {
    url: `${API_URL}/categories/${categoryId}/subcategories/${subCategoryId}/exercises`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
};
export const EXERCISE_DELETE = (
  token,
  categoryId,
  subCategoryId,
  exerciseId
) => {
  return {
    url: `${API_URL}/categories/${categoryId}/subcategories/${subCategoryId}/exercises/${exerciseId}`,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
export const EXERCISE_EDIT = (
  token,
  categoryId,
  subCategoryId,
  exerciseId,
  body
) => {
  return {
    url: `${API_URL}/categories/${categoryId}/subcategories/${subCategoryId}/exercises/${exerciseId}`,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
};
