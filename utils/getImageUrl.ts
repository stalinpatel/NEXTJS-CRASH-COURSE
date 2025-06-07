export const getImageUrl = (url: string): string => {
    const trimmedUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${process.env.SUPABASE_URL}/storage/v1/object/public/storage/${trimmedUrl}`;
  };
  