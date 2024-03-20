import { type MantineColorsTuple } from "@mantine/core"

import { type TColorsType } from "@core/types/colors"

const MANTINE_COLORS: Record<TColorsType, MantineColorsTuple> = {
    blue: [
        "#F5F8FF", //0. 50
        "#CCDEFF", //1. 100
        "#a3c4ff", //2. 200
        "#7aa9ff", //3. 300
        "#528fff", //4. 400 indicator background color
        "#005AFF", //5. 500 badge background color
        "#005AFF", //6. 500
        "#003dad", //7. 700
        "#003dad", //8. 700
        "#00205c", //9. 900
    ],
    red: [
        "#FFF3F4", //0. 50
        "#FECBCF", //1. 100
        "#FDA3AA", //2. 200
        "#FC7B86", //3. 300
        "#FC5361", //4. 400 indicator background color
        "#F80519", //5. 500 badge background color
        "#F80519", //6. 500
        "#A80311", //7. 700
        "#A80311", //8. 700
        "#580209", //9. 900
    ],
    green: [
        "#F6FCF6", //0. 50
        "#D7F3D7", //1. 100
        "#B7EAB7", //2. 200
        "#97E197", //3. 300
        "#78D878", //4. 400 indicator background color
        "#39C539", //5. 500 badge background color
        "#39C539", //6. 500
        "#278627", //7. 700
        "#278627", //8. 700
        "#144614", //9. 900
    ],
    yellow: [
        "#FFFBF5", //0. 50
        "#FFEDCC", //1. 100
        "#FFDFA3", //2. 200
        "#FFD07A", //3. 300
        "#FFC252", //4. 400 indicator background color
        "#FFA500", //5. 500 badge background color
        "#FFA500", //6. 500
        "#AD7000", //7. 700
        "#AD7000", //8. 700
        "#5C3B00", //9. 900
    ],
    neutral: [
        "#F7F8F9", //0. 50
        "#E0E3E7", //1. 100
        "#C9CDD5", //2. 200
        "#B2B8C3", //3. 300
        "#9BA3B1", //4. 400 indicator background color
        "#6E798D", //5. 500 badge background color
        "#6E798D", //6. 500
        "#4A525F", //7. 700
        "#4A525F", //8. 700
        "#262A31", //9. 900
    ],
}

export default MANTINE_COLORS
