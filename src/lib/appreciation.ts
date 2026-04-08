// "use server";
// import { prisma } from "@/lib/prisma";

// export async function submitAppreciation(data: {
//   senderId: string;
//   artistId: string;
//   transactionId: string;
//   artworkId?: string;
//   commissionId?: string;
//   message: string;
//   type: 'Shop Purchase' | 'Commission';
//   visibility: 'Public' | 'Private';
// }) {
//   try {
//     const appreciation = await prisma.appreciation.create({
//       data: {
//         senderId: data.senderId,
//         artistId: data.artistId,
//         transactionId: data.transactionId,
//         artworkId: data.artworkId || null,
//         commissionId: data.commissionId || null,
//         message: data.message,
//         type: data.type,
//         visibility: data.visibility,
//         status: 'Active',
//       },
//     });
//     return { success: true, id: appreciation.id };
//   } catch (error) {
//     console.error("Appreciation Error:", error);
//     return { success: false, error: "Failed to submit review." };
//   }
// }