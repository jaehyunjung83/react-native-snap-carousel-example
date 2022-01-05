import { getInputRangeFromIndexes } from 'react-native-snap-carousel';

const IS_ANDROID = Platform.OS === 'android';


function scrollInterpolator1 (index, carouselProps) {
    
    const range = IS_ANDROID? [1, 0, -1, -2, -3, -4] : [4, 3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}
function animatedStyles1 (index, animatedValue, carouselProps) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
    
    return {
        zIndex: IS_ANDROID? null : carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            // inputRange: [2, 3],
            // outputRange: [1, 0],
            inputRange: IS_ANDROID? [-4, -3, -2, -1, 0, 1] : [-1, 0, 1, 2, 3, 4],
            outputRange: [0, 1, 0.3, 0.7, 1, 0.3],
            extrapolate: 'clamp'
        }),
        transform: [
            {
            perspective: 1000
        },{
            rotate: animatedValue.interpolate({
                inputRange: IS_ANDROID? [-4, -3, -2, -1, 0, 1] : [-1, 0, 1, 2, 3, 4],
                outputRange: ['1.4deg', '0deg', '2deg', '3.2deg', '0deg', '4.8deg'],
                extrapolate: 'clamp'
            })
        }, {
            [translateProp]: animatedValue.interpolate({
                inputRange: IS_ANDROID? [-4, -3, -2, -1, 0, 1] : [-1, 0, 1, 2, 3, 4],
                outputRange: [
                    -sizeRef * 0.3,
                    -sizeRef * 0.5,
                    -sizeRef * 0.7, // centered
                    -sizeRef * 0.97, // centered
                    0, // centered
                    -sizeRef * 0.97 // centered
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}

// Perspective effect
function scrollInterpolator2 (index, carouselProps) {
    const range = [2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}
function animatedStyles2 (index, animatedValue, carouselProps) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2],
            outputRange: [0.75, 1, 0.6, 0.4]
        }),
        transform: [{
            rotate: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2],
                outputRange: ['0deg', '0deg', '5deg', '8deg'],
                extrapolate: 'clamp'
            })
        }, {
            scale: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2],
                outputRange: [0.96, 1, 0.85, 0.7]
            })
        }, {
            [translateProp]: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2],
                outputRange: [
                    0,
                    0,
                    -sizeRef + 30,
                    -sizeRef * 2 + 45
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}

// Left/right translate effect
function scrollInterpolator3 (index, carouselProps) {
    const range = [2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}
function animatedStyles3 (index, animatedValue, carouselProps) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2],
            outputRange: [1, 0.5, 0.5, 0.25],
            extrapolate: 'clamp'
        }),
        transform: [{
            [translateProp]: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2],
                outputRange: [
                    0,
                    0,
                    -sizeRef * 2,
                    -sizeRef
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}

// From https://codeburst.io/horizontal-scroll-animations-in-react-native-18dac6e9c720
function scrollInterpolator4 (index, carouselProps) {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}
function animatedStyles4 (index, animatedValue, carouselProps) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    return {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0.75, 1, 0.75],
            extrapolate: 'clamp'
        }),
        transform: [
            {
                perspective: 1000
            },
            {
                scale: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.65, 1, 0.65],
                    extrapolate: 'clamp'
                })
            },
            {
                rotateX: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['15deg', '0deg', '15deg'],
                    extrapolate: 'clamp'
                })
            },
            {
                rotateY: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: ['-15deg', '0deg', '15deg'],
                    extrapolate: 'clamp'
                })
            }, {
                translateX: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [
                        sizeRef + 30,
                        0,
                        // 0,
                        -sizeRef + 30
                    ],
                    extrapolate: 'clamp'
                })
            }
        ]
    };
}

// Exports
export const scrollInterpolators = {
    scrollInterpolator1,
    scrollInterpolator2,
    scrollInterpolator3,
    scrollInterpolator4,
};

export const animatedStyles = {
    animatedStyles1,
    animatedStyles2,
    animatedStyles3,
    animatedStyles4,
};
