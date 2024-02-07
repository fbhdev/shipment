
export const ENDPOINTS = {}
export const enum QUERY_KEYS {}

const HEADERS = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

export async function GET(endpoint: string): Promise<ResponseModel> {
  const response = await fetch(endpoint);
  return await response.json();
}

export async function POST(endpoint: string, data: any): Promise<any> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function PUT(endpoint: string, data: any): Promise<any> {
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function DELETE(endpoint: string): Promise<any> {
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: HEADERS,
  });
  return await response.json();
}

export interface ResponseModel {
  status_code: number;
  results?: unknown[] | undefined;
  message?: string | undefined;
}