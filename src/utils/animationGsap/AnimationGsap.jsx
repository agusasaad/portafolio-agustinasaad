import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

//Animation Button Translate
export const buttonTranslateAnimate = ({ buttonTranslateRef }) => {
  gsap.from(buttonTranslateRef.current, {
    opacity: 0,
    scale: 0.1,
    ease: "power2",
    duration: 0.5,
    delay: 2,
  });
};
//Animaciones navbar
export const navBarAnimation = ({ navBarContainer, circleRef }) => {
  gsap.fromTo(
    navBarContainer.current,
    {
      y: -50,
      opacity: 0,
      visibility: "hidden",
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "back.inOut",
      stagger: 0.5,
      visibility: "visible",
      delay: 0.3,
    }
  );

  gsap.to(circleRef.current, {
    scale: 2.5,
    opacity: 0,
    ease: "power1",
    repeat: -1,
    duration: 1.3,
  });
};
//Animaciones MainPage
export const mainPageAnimation = ({
  subtitleRef,
  titleRef,
  description,
  carrucel,
}) => {
  gsap.fromTo(
    [
      subtitleRef.current,
      titleRef.current,
      description.current,
      carrucel.current,
    ],
    {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    },
    {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power3.out",
      duration: 1.5,
      stagger: 0.3,
      delay: 0.5,
    }
  );
};
//Animaciones AboutMe
export const aboutMeAnimation = ({
  container,
  imageProfile,
  title,
  paragraph,
  button,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(imageProfile.current, {
    opacity: 0,
    scale: 0.2,
    ease: "power2",
    duration: 1.2,
    delay: 0.2,
    scrollTrigger: {
      trigger: container.current,
      start: "top 80%",
      end: "bottom bottom",
    },
  });

  gsap.from([title.current, paragraph.current, button.current], {
    opacity: 0,
    y: 100,
    ease: "power2",
    duration: 1.2,
    stagger: 0.2,
    delay: 0.5,
    scrollTrigger: {
      trigger: container.current,
      start: "top 80%",
      end: "bottom bottom",
    },
  });
};
//Animaciones MyProjects
export const projectAnimation = ({
  container,
  title,
  cardsRef,
  cardMobileRef,
  github,
}) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 60%",
      end: "bottom top",
    },
  });

  tl.fromTo(
    title.current,
    { y: 100, opacity: 0, visibility: "hidden" },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 0.8,
      ease: "power2",
    }
  );

  if (window.matchMedia("(max-width: 768px)").matches) {
    // Animación para móviles
    tl.fromTo(
      cardMobileRef.current,
      { y: 100, opacity: 0, visibility: "hidden" },
      {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.8,
        ease: "power2",
        stagger: 0.2,
      },
      "-=0.5"
    );
  } else {
    // Animación para pantallas grandes
    tl.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0, visibility: "hidden" },
      {
        y: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.8,
        ease: "power2",
        stagger: 0.2,
      },
      "-=0.8"
    );
  }

  gsap.fromTo(
    github.current,
    { y: 100, opacity: 0, visibility: "hidden" },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 0.8,
      ease: "power2",
      scrollTrigger: {
        trigger: container.current,
        start: "center 50%",
        end: "bottom top",
        // markers: true,
      },
    }
  );
};
//Animaciones MyServices
export const servicesAnimation = ({ container, title, cardsRef }) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 80%",
      end: "bottom bottom",
    },
  });

  tl.fromTo(
    title.current,
    { y: 100, opacity: 0, visibility: "hidden" },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power3.out",
    }
  ).fromTo(
    cardsRef.current,
    { y: 100, opacity: 0, visibility: "hidden" },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    },
    "-=1"
  );
};
//Animaciones ContactMe
export const contactMeAnimation = ({
  container,
  subtitleRef,
  title_paragraph,
  inputRef,
}) => {
  gsap.fromTo(
    [subtitleRef.current, title_paragraph.current, inputRef.current],
    {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    },
    {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power3.out",
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom bottom",
      },
    }
  );
};
//Animaciones detail projects
export const detailAnimation = ({
  container_one,
  imageRef,
  paragraph_two,
  paragraph_three,
  image_two,
}) => {
  gsap.fromTo(
    [
      container_one.current,
      imageRef.current,
      paragraph_two.current,
      paragraph_three.current,
      image_two.current,
    ],
    {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    },
    {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power3.out",
      duration: 1.5,
      stagger: 0.3,
      delay: 0.5,
    }
  );
};
export const footerAnimation = ({
  container,
  user,
  paragraph,
  list_one,
  list_two,
  line,
  copyrigth_one,
  copyrigth_two,
  copyrigth_three,
}) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 90%",
      end: "bottom bottom",
      // markers: true,
    },
  });

  tl.fromTo(
    [user.current, paragraph.current, list_one.current, list_two.current],
    {
      y: 50,
      opacity: 0,
      visibility: "hidden",
    },
    {
      opacity: 1,
      y: 0,
      visibility: "visible",
      ease: "power3.out",
      duration: 1,
      stagger: 0.2,
    }
  );

  tl.fromTo(
    line.current,
    {
      width: "0%",
      opacity: 0,
      visibility: "hidden",
    },
    {
      width: "100%",
      visibility: "visible",
      opacity: 1,
      ease: "none",
      duration: 1,
    },
    "<"
  );

  tl.fromTo(
    [copyrigth_one.current, copyrigth_two.current, copyrigth_three.current],
    {
      x: 100,
      opacity: 0,
      visibility: "hidden",
    },
    {
      opacity: 1,
      x: 0,
      visibility: "visible",
      ease: "power3.out",
      duration: 1.2,
      stagger: 0.2,
    },
    "<"
  );
};
