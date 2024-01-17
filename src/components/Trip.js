import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique
            destination using Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip in Indonesia"
                text="
                Indonesia is a diverse archipelago offering a myriad of travel experiences. 
                Known for its stunning natural beauty, rich cultural heritage, and vibrant traditions, the country attracts millions of tourists annually. 
                Bali, a world-renowned destination, features lush landscapes, intricate temples, and pristine beaches. Jakarta, the capital, is a bustling metropolis reflecting Indonesia's modern side. 
                Beyond the well-trodden paths, adventurous travelers can explore ancient temples in Yogyakarta, trek through the jungles of Sumatra, or witness traditional ceremonies in remote villages. 
                Indonesia's cuisine, influenced by a blend of flavors, is a highlight for food enthusiasts. With its warm hospitality and a tapestry of landscapes, Indonesia offers a captivating journey for those seeking a diverse and immersive travel experience."
                />

                <TripData
                image={Trip2}
                heading = "Trip in Malaysia"
                text="
                Malaysia, a Southeast Asian gem, is celebrated for its cultural diversity, vibrant cities, and breathtaking landscapes. 
                Kuala Lumpur, the capital, boasts modern skyscrapers alongside historic sites like the Petronas Towers. 
                Penang's George Town captivates with its UNESCO-listed heritage and delectable street food. 
                The lush rainforests of Borneo offer unique wildlife encounters, while Langkawi's pristine beaches and clear waters appeal to sun-seekers. 
                Malaysia's multicultural society is reflected in its festivals, traditions, and a fusion of Malay, Chinese, Indian, and indigenous influences, making it a captivating destination for those seeking a harmonious blend of old and new."
                />

                <TripData
                image={Trip3}
                heading = "Trip in France"
                text="
                France, a global cultural icon, entices travelers with its art, cuisine, and rich history. 
                Paris, the City of Light, beckons with iconic landmarks like the Eiffel Tower and world-class museums such as the Louvre. 
                The French Riviera allures with its glamorous beaches, while the picturesque countryside of Provence showcases lavender fields and charming villages. 
                Culinary enthusiasts revel in the delights of French cuisine, from gourmet pastries to exquisite wines. 
                Historical wonders like the Palace of Versailles and the medieval beauty of cities like Carcassonne add layers to France's allure, making it a destination that seamlessly blends elegance, romance, and a profound appreciation for the arts."
                />

            </div>
        </div>
    );
}

export default Trip;