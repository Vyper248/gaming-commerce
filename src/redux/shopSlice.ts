import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
    loadingData: boolean;
    collections: Collections;
}

type Collections = {
    [key: string]: Collection;
}

type Collection = {
    id: number;
    title: string;
    items: Item[];
}

export type Item = {
    id: number;
    name: string;
    imageURL: string;
    price: number;
    tags: string[];
    description: string;
    releaseDate: string;
}

const initialState: SliceState = {
    loadingData: false,
    collections: {
        Games: {
            id: 1,
            title: "Games",
            items: [
                {
                    id: 1,
                    name: "Ghost of Tsushima: Director's Cut",
                    imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/c16gs6a7lbAYzPf7ZTikbH1c.png?w=620&thumb=false",
                    price: 59.99,
                    tags: ['PS4', 'PS5', 'Open World', 'RPG', 'Third Person', 'Action'],
                    description: "In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan.",
                    releaseDate: '20/08/2021'
                },
                {
                    id: 2,
                    name: "Far Cry 6 Gold Edition",
                    imageURL: "https://image.api.playstation.com/vulcan/img/rnd/202109/1314/g98aC9BvIoQhD4AqZVpRCa90.png?w=620&thumb=false",
                    price: 84.99,
                    tags: ['PS4', 'PS5', 'Open World', 'RPG', 'First Person', 'Action'],
                    description: "Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their ruthless oppression has ignited a revolution.",
                    releaseDate: '07/10/2021'
                },
                {
                    id: 3,
                    name: "God of War",
                    imageURL: "https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png?w=620&thumb=false",
                    price: 15.99,
                    tags: ['PS4', 'RPG', 'Third Person', 'Action'],
                    description: "Living as a man outside the shadow of the gods, Kratos must adapt to unfamiliar lands, unexpected threats and a second chance at being a father. Together with his son Atreus, the pair will venture into the brutal realm of Midgard and fight to fulfil a deeply personal quest.",
                    releaseDate: '04/10/2019'
                },
                {
                    id: 4,
                    name: "Horizon: Forbidden West",
                    imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png",
                    price: 59.99,
                    tags: ['PS4', 'PS5', 'RPG', 'Third Person', 'Action'],
                    description: "Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon.",
                    releaseDate: 'TBA'
                },
                {
                    id: 5,
                    name: "Horizon: Zero Dawn",
                    imageURL: "https://image.api.playstation.com/vulcan/img/rnd/202009/3000/C14XMwZBi6CYKOacUDf6EzEs.jpg",
                    price: 15.99,
                    tags: ['PS4', 'RPG', 'Third Person', 'Action'],
                    description: "Experience Aloy of the Nora’s entire legendary quest to unravel the mysteries of a world ruled by deadly Machines.",
                    releaseDate: '06/12/2017'
                },
            ]
        },
        Consoles: {
            id: 2,
            title: "Consoles",
            items: [
                {
                    id: 6,
                    name: "Playstation 5",
                    imageURL: "https://149367133.v2.pressablecdn.com/wp-content/uploads/2020/11/playstation-5-ps5-gadgetmatch-20201104.jpg",
                    price: 449.99,
                    tags: ['Console'],
                    description: "Play has no limits. The PlayStation 5 rewrites the rules of gaming. Experience lightning-fast loading, ultra-high speed SSD, ray tracing, haptic feedback, and breath taking immersion on the PS5. Push the boundaries of play, marvel at graphics and be stunned by the next-gen features.",
                    releaseDate: 'Out Now'
                },
                {
                    id: 7,
                    name: "Playstation 5 Digital Edition",
                    imageURL: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/PS5-Digital-Edition-Blew-It-According-To-Analyst.jpg",
                    price: 349.99,
                    tags: ['Console'],
                    description: "The PS5 Digital Edition boasts the same features as the PS5 but without a disc-drive. Enjoy lightning-fast loading, ultra-high speed SSD, haptic feedback, adaptive triggers, and deeper immersion. Simply sign-in to your PlayStation Network account and purchase games digitally through the PlayStation store.",
                    releaseDate: 'Out Now'
                },
                {
                    id: 21,
                    name: "Playstation 5: Rift Apart Bundle",
                    imageURL: "https://cdn.shopify.com/s/files/1/0067/3054/7259/products/201123_1024x1024.jpg?v=1623400226",
                    price: 399.99,
                    tags: ['Console'],
                    description: "The PS5 Digital Edition boasts the same features as the PS5 but without a disc-drive. Enjoy lightning-fast loading, ultra-high speed SSD, haptic feedback, adaptive triggers, and deeper immersion. Simply sign-in to your PlayStation Network account and purchase games digitally through the PlayStation store.",
                    releaseDate: 'Out Now'
                },
                {
                    id: 22,
                    name: "Playstation 4 Pro 1TB",
                    imageURL: "https://m.media-amazon.com/images/I/71jN27mYlhL._AC_SL1500_.jpg",
                    price: 399.99,
                    tags: ['Console'],
                    description: "",
                    releaseDate: 'Out Now'
                },
            ]
        },
        VR: {
            id: 3,
            title: "VR",
            items: [
                {
                    id: 8,
                    name: "PSVR Starter Pack",
                    imageURL: "https://cdn.mos.cms.futurecdn.net/GGAuXkkRc9rgDTRoMLeHMT-1200-80.jpg",
                    price: 249.99,
                    tags: ['VR', 'PSVR'],
                    description: "Put yourself at the centre of an extraordinary gaming universe with PS VR exclusive games, all powered by your PlayStation® console.",
                    releaseDate: 'Out Now'
                },
                {
                    id: 9,
                    name: "PSVR Mega Pack",
                    imageURL: "https://i.ytimg.com/vi/Rf5Gr6qIASw/maxresdefault.jpg",
                    price: 299.99,
                    tags: ['VR', 'PSVR'],
                    description: "Live the game with PS VR – the new great-value PlayStation®VR Mega Pack takes you straight to the heart of five thrilling VR adventures. ",
                    releaseDate: 'Out Now'
                },
                {
                    id: 10,
                    name: "Move Controllers",
                    imageURL: "https://www.playstationlifestyle.net/assets/uploads/2016/09/playstation-vr-move-controller-twin-pack-1280x720.png",
                    price: 59.99,
                    tags: ['Accessory', 'Controller'],
                    description: "Ergonomic, intuitive design thanks to a lightweight design, built-in vibration function and sphere that's tracked by the PlayStationCamera as you move, the controller acts and feels like an extension of your own hand, allowing you to intuitively interact with a game's virtual environment",
                    releaseDate: 'Out Now'
                },
                {
                    id: 11,
                    name: "Playstation Camera",
                    imageURL: "https://i.ytimg.com/vi/pLKGhCr4dQw/maxresdefault.jpg",
                    price: 49.99,
                    tags: ['Accessory'],
                    description: "Integral to PlayStationVR The PlayStationCamera is required for PlayStationVR and helps immerse you in enthralling virtual spaces. With dual lenses and 3D depth-sensing technology, the camera is able to accurately track every movement of the VR headset, DUALSHOCK4 wireless controller or PlayStationMove motion controller to give you an incredible sense of presence in virtual worlds.",
                    releaseDate: 'Out Now'
                },
            ]
        },
        Accessories: {
            id: 4,
            title: "Accessories",
            items: [
                {
                    id: 12,
                    name: "DualSense",
                    imageURL: "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/04/dualsense-ps5-blue-ps-background.jpg",
                    price: 59.99,
                    tags: ['Accessory', 'Controller'],
                    description: "Discover a deeper, highly immersive gaming experience with the innovative new PS5 controller, featuring haptic feedback and dynamic trigger effects.",
                    releaseDate: 'Out Now'
                },
                {
                    id: 13,
                    name: "PS5 HD Camera",
                    imageURL: "https://www.knowyourmobile.com/wp-content/uploads/2021/05/Sony-PS5-HD-Camera.jpg",
                    price: 49.99,
                    tags: ['Accessory', 'Camera'],
                    description: "",
                    releaseDate: 'Out Now'
                },
                {
                    id: 14,
                    name: "PS5 Media Remote",
                    imageURL: "https://www.thumbsticks.com/wp-content/uploads/2020/10/ps5-media-remote.jpg",
                    price: 24.99,
                    tags: ['Accessory', 'Remote'],
                    description: "",
                    releaseDate: 'Out Now'
                },
                {
                    id: 15,
                    name: "PS5 Pulse 3D Wireless Headset",
                    imageURL: "https://www.psu.com/wp/wp-content/uploads/2021/06/playstation-pulse-3d-wireless-headset-review-ps5-a-superb-encompassing-audio-experience-that-truly-shines-on-sonys-new-console-1.jpg",
                    price: 69.99,
                    tags: ['Accessory', 'Headset'],
                    description: "",
                    releaseDate: 'Out Now'
                },
                {
                    id: 16,
                    name: "DualSense Charging Station",
                    imageURL: "https://media.4rgos.it/s/Argos/8340377_R_SET?$Main768$&w=620&h=620",
                    price: 24.99,
                    tags: ['Accessory', 'Charging'],
                    description: "",
                    releaseDate: 'Out Now'
                },
            ]
        },
        Merchandise: {
            id: 5,
            title: "Merchandise",
            items: [
                {
                    id: 17,
                    name: "Hat",
                    imageURL: "https://i.ebayimg.com/images/g/32cAAOSwmGNfn4si/s-l640.jpg",
                    price: 8.99,
                    tags: ['Merchandise'],
                    description: "",
                    releaseDate: 'Out Now'
                },
                {
                    id: 18,
                    name: "Jacket",
                    imageURL: "https://live.staticflickr.com/65535/50952828267_166d5466e7_o.jpg",
                    price: 12.99,
                    tags: ['Merchandise'],
                    description: "",
                    releaseDate: 'Out Now'
                },
                {
                    id: 19,
                    name: "Miles Morales T-Shirt",
                    imageURL: "https://res.cloudinary.com/teepublic/image/private/s--ltWNzLbk--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_463/c_crop,g_north_west,h_626,w_470,x_-68,y_-29/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-463,y_-354/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1592492493/production/designs/11451175_0.jpg",
                    price: 9.99,
                    tags: ['Merchandise'],
                    description: "",
                    releaseDate: 'Out Now'
                },
                {
                    id: 20,
                    name: "Backpack",
                    imageURL: "https://m.media-amazon.com/images/I/817rtWF+OrL._AC_SL1500_.jpg",
                    price: 22.99,
                    tags: ['Merchandise'],
                    description: "",
                    releaseDate: 'Out Now'
                },
            ]
        },
    },
    // collections: {}
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setCollection: (state: SliceState, action: PayloadAction<Collection>) => {
            let collectionData = action.payload;
            state.collections[collectionData.title] = collectionData;
        },
        setLoading: (state: SliceState, action: PayloadAction<boolean>) => {
            state.loadingData = action.payload;
        },
    },
});

export const { setCollection, setLoading } = shopSlice.actions;

export default shopSlice.reducer;