import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  useCdn: false,
  apiVersion: '2024-01-17',
  token: process.env.SANITY_STUDIO_SECRET_TOKEN,
});
