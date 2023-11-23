import {SerializedPhotaliusState} from '../history/serialized-photalius-state';

export async function fetchStateJsonFromUrl(
  url: string
): Promise<SerializedPhotaliusState> {
  const response = await fetch(url);
  return response.json();
}
