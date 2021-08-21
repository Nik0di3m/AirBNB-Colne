import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { useState } from 'react'
import { getCenter } from 'geolib'
import { LocationMarkerIcon } from '@heroicons/react/solid'
const Map = ({ searchRes }) => {
    const [selectinLocation, setSelectionLocation] = useState({})

    // Transform search resoults into the object
    const cord = searchRes.map((res) => ({
        longitude: res.long,
        latitude: res.lat,
    }))

    const center = getCenter(cord)

    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,
    })

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/nik0d3m/cksd7fdzo6kyd17quzkp9pqbz"
            mapboxApiAccessToken={`${process.env.MAP_API_KEY}`}
            {...viewPort}
            onViewportChange={(nextViewport) => setViewPort(nextViewport)}
        >
            {searchRes.map((item) => (
                <div key={item.long}>
                    <Marker
                        longitude={item.long}
                        latitude={item.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <LocationMarkerIcon
                            onClick={() => setSelectionLocation(item)}
                            className="h-6 text-red-400 cursor-pointer animate-bounce"
                        />
                    </Marker>

                    {selectinLocation.long === item.long ? (
                        <Popup
                            onClose={() => setSelectionLocation({})}
                            closeOnClick={true}
                            latitude={item.lat}
                            longitude={item.long}
                        >
                            {item.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
