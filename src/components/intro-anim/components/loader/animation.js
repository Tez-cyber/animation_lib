import { gsap } from 'gsap';

export const introAnimation = () => {
    const tl = gsap.timeline();

    tl.to(wordGroupsRef.current, {
        yPercent: -80,
        duration: 5,
        ease: 'power3.inOut'
    });

    return tl;
};

export const progressAnimation = (progressRef, progressNumberRef) => {
    const tl = gsap.timeline();

    tl.to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        ease: 'power3.inOut'
    });

    return tl;
}

export const collapseWords = (loaderRef) => {
    const tl = gsap.timeline();

    tl.to(loaderRef.current, {
        clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        duration: 3,
        ease: "expo.inOut"
    })

    return tl;
}