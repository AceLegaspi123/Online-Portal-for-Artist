// "use server";

// import { prisma } from "@/lib/prisma";

// export async function createPurchaseRecord(data: any) {
//   try {
//     const record = await prisma.purchasedArt.create({
//       data: {
//         buyerId: data.buyerId,
//         artistId: data.artistId,
//         artworkId: data.artworkId,
//         commissionId: data.commissionId || null,
//         transactionType: data.type, // 'SHOP_PURCHASE' or 'COMMISSION_REQUEST'
//         amountPaid: parseFloat(data.amount),
//         deliveryType: data.deliveryType,
//         notes: data.notes || "",
//         paymentStatus: 'PAID', // Assuming trigger happens after successful payment
//       },
//     });
//     return { success: true, id: record.id };
//   } catch (error) {
//     console.error("Database Error:", error);
//     return { success: false };
//   }
// }