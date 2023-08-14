import { User, Listing } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: string | undefined;
}

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
    createdAt: string | undefined;
    updatedAt: string | undefined;
    emailVerified: string | null;
};