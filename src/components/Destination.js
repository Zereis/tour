import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/5.jpg';
import Mountain4 from '../assets/8.jpg';
import DestinationData from './DestinationData';
import "./DestinationStyles.css"
const Destination = () =>{
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, wihtin a time frame</p>

            <DestinationData
            className="first-des"
                heading="Taal Volcano, Batangas"
                text="Taal Volcano, located in Batangas, Philippines, is one of the country's most active and iconic volcanoes. 
                Renowned for its picturesque crater lake, it is situated on an island within Taal Lake. Despite its relatively 
                small size, Taal has earned a reputation for its potential for explosive eruptions. 
                The volcano is part of the Pacific Ring of Fire and has been the site of numerous eruptions throughout history. 
                Taal's last significant eruption occurred in January 2020, causing widespread ashfall and the evacuation of nearby communities. 
                The area around Taal Volcano is known for its scenic beauty and is a popular tourist destination, offering breathtaking views of the volcanic landscape."
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="Mount Daguldul is a mountain located in Batangas, Philippines. 
                It is known for its picturesque landscapes and is a popular destination for hikers and nature enthusiasts. 
                The trek to the summit offers stunning views of the surrounding areas, including lush forests and nearby bodies of water. 
                Adventurers often appreciate the relatively challenging hike and the opportunity to experience the natural beauty of the region. 
                It's recommended to check for the latest information and local guidelines before planning a visit, as conditions and accessibility may have changed."
                img1={Mountain3}
                img2={Mountain4}
            />
        </div>
    );
};

export default Destination;