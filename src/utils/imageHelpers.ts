// Helper to build Cloudinary transformation URLs
export function buildImageUrl(publicId: string, width = 600, height = 400) {
  return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_${width},h_${height},c_fill/${publicId}.jpg`;
}
