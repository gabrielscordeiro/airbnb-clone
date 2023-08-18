import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoritesListing from "@/app/actions/getFavoritesListing";
import FavoritesClient from "@/app/favorites/FavoritesClient";

const ListingPage = async () => {
    const listings = await getFavoritesListing();
    const currentUser = await getCurrentUser();

    if(listings.length === 0) {
        return (
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorites listings."
            />
        )
    }

    return (
        <FavoritesClient
            listings={listings}
            currentUser={currentUser}
        />
    )
}

export default ListingPage;