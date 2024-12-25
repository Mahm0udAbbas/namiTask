export async function getResumes() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/resumes`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch resumes");
  return response.json();
}

export async function getJobs() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch jobs");
  return response.json();
}

export async function getCategoris() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
}
export async function getCompanies() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/companies`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch companies");
  return response.json();
}

export async function getCountries() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/countries`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
}
export async function getNationalities() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/nationalities`,
    {
      headers: {
        Accept: "application/json",
        "Accept-Language": "en",
      },
    }
  );
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
}
